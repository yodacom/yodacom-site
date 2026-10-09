/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Handles contact-form submissions from /contact.
 *
 * Flow:
 *   1. Parse + validate JSON body (server-side — mirrors client validation)
 *   2. IP-based rate limiting (5 submissions per 10 minutes per IP)
 *   3. Honeypot check (the hidden "website" field must be empty)
 *   4. Minimum dwell-time check (timestamp must be >= 2s old, defeats instant-submit bots)
 *   5. Cloudflare Turnstile verification — FAILS CLOSED (secret missing => 503)
 *   6. POST to Loops transactional API — delivers an email to CONTACT_DEST_EMAIL (default jb@yodacom.com),
 *      labelled with a source (YodaCom Consulting / Research-CoinRoc / General)
 *   7. Return JSON { ok: true } or { ok: false, error: string }
 *
 * This file is NOT a SvelteKit endpoint. It is a Cloudflare Pages Function
 * and lives outside src/ so the static adapter ignores it. Cloudflare auto-
 * deploys anything under /functions alongside the prerendered build.
 *
 * Required env vars (set in CF Pages → Settings → Environment variables):
 *   - LOOPS_API_KEY               (required)
 *   - LOOPS_CONTACT_TEMPLATE_ID   (required — the transactional template id)
 *   - CONTACT_DEST_EMAIL          (optional — defaults to jb@yodacom.com)
 *   - TURNSTILE_SECRET_KEY        (required — form is closed without it)
 */

interface Env {
	LOOPS_API_KEY?: string;
	LOOPS_CONTACT_TEMPLATE_ID?: string;
	CONTACT_DEST_EMAIL?: string;
	TURNSTILE_SECRET_KEY?: string;
}

interface ContactPayload {
	name?: unknown;
	email?: unknown;
	topic?: unknown;
	message?: unknown;
	website?: unknown; // honeypot — must be empty
	ts?: unknown; // client-render timestamp (ms since epoch) for dwell-time check
	turnstileToken?: unknown; // optional, only present if Turnstile is wired up
}

interface CleanPayload {
	name: string;
	email: string;
	topic: string;
	message: string;
	website: string;
	ts: number;
	turnstileToken: string;
}

// Single source of truth for topics AND their Gmail source lane. ALLOWED_TOPICS is
// derived from these groups, so a topic cannot be accepted without being placed in a
// lane (an unlisted topic is rejected by validate(), never silently filed as General).
// Keep in sync with the lists in src/routes/contact/+page.svelte.
export const CONSULTING_LANE = [
	'Consulting — AI Readiness workshop',
	'Consulting — Operations automation',
	'Consulting — Idea-to-product sprint',
	'Technology advisory',
	'Consulting — not sure yet',
	'AI Practice / Advisory' // legacy: still accepted so a cached page can submit
] as const;

export const RESEARCH_LANE = [
	'Research inquiry',
	'Products / CoinRoc',
	'Enterprise / RIA',
	'Press / Media',
	'Research Inquiry' // legacy
] as const;

export const GENERAL_LANE = ['General', 'Other'] as const;

const ALLOWED_TOPICS: readonly string[] = [...CONSULTING_LANE, ...RESEARCH_LANE, ...GENERAL_LANE];

export function sourceFor(topic: string): string {
	if ((CONSULTING_LANE as readonly string[]).includes(topic)) return 'YodaCom Consulting';
	if ((RESEARCH_LANE as readonly string[]).includes(topic)) return 'YodaCom Research-CoinRoc';
	return 'YodaCom General';
}

const MIN_DWELL_MS = 2000; // humans take at least 2 seconds to fill out a form
const MAX_DWELL_MS = 1000 * 60 * 60 * 6; // 6h — stale page
// Single plain address only (email is used as a Reply-To header value): no whitespace/CR/LF,
// commas, semicolons, angle brackets, quotes, parens or backslashes; exactly one '@'.
const EMAIL_RE = /^[^\s@,;<>"'()\\[\]:]+@[^\s@,;<>"'()\\[\]:]+\.[^\s@,;<>"'()\\[\]:]+$/;

// --- Simple IP-based rate limiter ---
// Cloudflare Workers/Pages Functions run in a per-isolate context. The Map
// persists for the lifetime of the isolate (minutes to hours), providing
// reasonable short-window protection without an external store.
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10-minute window
const RATE_LIMIT_MAX = 5; // max submissions per IP per window

interface RateBucket {
	count: number;
	windowStart: number;
}

const rateBuckets = new Map<string, RateBucket>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
	const now = Date.now();
	const bucket = rateBuckets.get(ip);

	if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
		// New window
		rateBuckets.set(ip, { count: 1, windowStart: now });
		return { allowed: true, retryAfterSeconds: 0 };
	}

	if (bucket.count >= RATE_LIMIT_MAX) {
		const retryAfterSeconds = Math.ceil((bucket.windowStart + RATE_LIMIT_WINDOW_MS - now) / 1000);
		return { allowed: false, retryAfterSeconds };
	}

	bucket.count += 1;
	return { allowed: true, retryAfterSeconds: 0 };
}
// --- end rate limiter ---

function asString(v: unknown, fallback = ''): string {
	return typeof v === 'string' ? v : fallback;
}

function asNumber(v: unknown): number {
	if (typeof v === 'number' && Number.isFinite(v)) return v;
	if (typeof v === 'string') {
		const n = Number(v);
		return Number.isFinite(n) ? n : 0;
	}
	return 0;
}

function json(body: unknown, status = 200): Response {
	return new Response(JSON.stringify(body), {
		status,
		headers: {
			'Content-Type': 'application/json; charset=utf-8',
			'Cache-Control': 'no-store'
		}
	});
}

function validate(raw: ContactPayload): { ok: true; data: CleanPayload } | { ok: false; error: string } {
	const name = asString(raw.name).trim();
	const email = asString(raw.email).trim();
	const topic = asString(raw.topic).trim();
	const message = asString(raw.message).trim();
	const website = asString(raw.website);
	const ts = asNumber(raw.ts);
	const turnstileToken = asString(raw.turnstileToken);

	if (name.length < 2 || name.length > 100) {
		return { ok: false, error: 'Name must be 2–100 characters.' };
	}
	if (!EMAIL_RE.test(email) || email.length > 254) {
		return { ok: false, error: 'Please enter a valid email address.' };
	}
	if (!ALLOWED_TOPICS.includes(topic)) {
		return { ok: false, error: 'Please choose a topic.' };
	}
	if (message.length < 10 || message.length > 2000) {
		return { ok: false, error: 'Message must be 10–2000 characters.' };
	}

	return { ok: true, data: { name, email, topic, message, website, ts, turnstileToken } };
}

async function verifyTurnstile(token: string, secret: string, ip: string | null): Promise<boolean> {
	try {
		const form = new FormData();
		form.append('secret', secret);
		form.append('response', token);
		if (ip) form.append('remoteip', ip);
		const r = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
			method: 'POST',
			body: form
		});
		const data = (await r.json()) as { success?: boolean };
		return data.success === true;
	} catch (e) {
		console.error('[contact] Turnstile verify failed:', e);
		return false;
	}
}

async function sendViaLoops(opts: {
	apiKey: string;
	templateId: string;
	destEmail: string;
	data: CleanPayload;
}): Promise<{ ok: true } | { ok: false; error: string; status?: number }> {
	const { apiKey, templateId, destEmail, data } = opts;
	const submittedAt = new Date().toISOString();

	const body = {
		transactionalId: templateId,
		email: destEmail, // deliver to Jeremy, not the submitter
		dataVariables: {
			name: data.name,
			email: data.email, // surface submitter's email in the template body
			topic: data.topic,
			message: data.message,
			submittedAt,
			source: sourceFor(data.topic), // Loops subject: [{source}] ... (Gmail filter key)
			replyTo: data.email // Loops template Reply-To
		}
	};

	try {
		const r = await fetch('https://app.loops.so/api/v1/transactional', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${apiKey}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		});
		if (r.ok) return { ok: true };
		const text = await r.text();
		console.error(`[contact] Loops error ${r.status}: ${text}`);
		return { ok: false, error: `Loops ${r.status}`, status: r.status };
	} catch (e) {
		console.error('[contact] Loops network error:', e);
		return { ok: false, error: 'Network error reaching Loops' };
	}
}

// Cloudflare Pages Functions handler signature
type PagesFunction<E = unknown> = (ctx: {
	request: Request;
	env: E;
}) => Response | Promise<Response>;

export const onRequestPost: PagesFunction<Env> = async ({ request, env }) => {
	// IP-based rate limiting — checked before any work is done
	const clientIP = request.headers.get('CF-Connecting-IP') || request.headers.get('X-Forwarded-For') || 'unknown';
	const rl = checkRateLimit(clientIP);
	if (!rl.allowed) {
		return new Response(JSON.stringify({ ok: false, error: 'Too many requests. Please try again later.' }), {
			status: 429,
			headers: {
				'Content-Type': 'application/json; charset=utf-8',
				'Cache-Control': 'no-store',
				'Retry-After': String(rl.retryAfterSeconds)
			}
		});
	}

	// Parse JSON
	let raw: ContactPayload;
	try {
		raw = (await request.json()) as ContactPayload;
	} catch {
		return json({ ok: false, error: 'Invalid request body.' }, 400);
	}

	// Validate
	const v = validate(raw);
	if (!v.ok) return json(v, 400);
	const data = v.data;

	// Honeypot — silently accept and drop bot submissions so they don't retry
	if (data.website.length > 0) {
		console.log('[contact] honeypot tripped — dropping silently');
		return json({ ok: true });
	}

	// Dwell-time — the client stamps a ts on page-load; if submit is faster than
	// MIN_DWELL_MS or the stamp is stale/missing, treat as suspicious.
	const now = Date.now();
	const age = now - data.ts;
	if (!data.ts || age < MIN_DWELL_MS || age > MAX_DWELL_MS) {
		console.log(`[contact] dwell-time rejected (age=${age}ms)`);
		return json({ ok: true }); // silent-accept, same as honeypot
	}

	// Turnstile — FAIL CLOSED. No secret configured = form is closed.
	if (!env.TURNSTILE_SECRET_KEY) {
		console.error('[contact] TURNSTILE_SECRET_KEY not set — refusing submission');
		return json(
			{ ok: false, error: 'The form is temporarily unavailable. Please email jb@yodacom.com directly.' },
			503
		);
	}
	if (!data.turnstileToken) {
		return json({ ok: false, error: 'Captcha required.' }, 400);
	}
	const ip = request.headers.get('CF-Connecting-IP');
	const ok = await verifyTurnstile(data.turnstileToken, env.TURNSTILE_SECRET_KEY, ip);
	if (!ok) {
		return json({ ok: false, error: 'Captcha verification failed.' }, 400);
	}

	// Send via Loops
	if (!env.LOOPS_API_KEY || !env.LOOPS_CONTACT_TEMPLATE_ID) {
		const missing: string[] = [];
		if (!env.LOOPS_API_KEY) missing.push('LOOPS_API_KEY');
		if (!env.LOOPS_CONTACT_TEMPLATE_ID) missing.push('LOOPS_CONTACT_TEMPLATE_ID');
		console.error('[contact] Missing required env vars:', missing.join(', '));
		return json(
			{
				ok: false,
				error: 'Email service is not configured. Please try again later.'
			},
			503
		);
	}

	const result = await sendViaLoops({
		apiKey: env.LOOPS_API_KEY,
		templateId: env.LOOPS_CONTACT_TEMPLATE_ID,
		destEmail: env.CONTACT_DEST_EMAIL || 'jb@yodacom.com',
		data
	});

	if (!result.ok) {
		return json(
			{ ok: false, error: 'Could not deliver your message. Please try again later.' },
			502
		);
	}

	return json({ ok: true });
};

// Reject non-POST methods with 405
export const onRequest: PagesFunction<Env> = async ({ request }) => {
	if (request.method === 'POST') {
		// Let onRequestPost handle it — but onRequestPost takes precedence when defined,
		// so this branch is only hit if the router falls through.
		return json({ ok: false, error: 'Method routing error.' }, 500);
	}
	return new Response('Method Not Allowed', {
		status: 405,
		headers: { Allow: 'POST' }
	});
};
