/**
 * Cloudflare Pages Function — POST /api/contact
 *
 * Handles contact-form submissions from /contact.
 *
 * Flow:
 *   1. Parse + validate JSON body (server-side — mirrors client validation)
 *   2. Honeypot check (the hidden "website" field must be empty)
 *   3. Minimum dwell-time check (timestamp must be >= 2s old, defeats instant-submit bots)
 *   4. Optional Cloudflare Turnstile verification (enabled if TURNSTILE_SECRET_KEY is set)
 *   5. POST to Loops transactional API — delivers an email to jb@yodacom.com
 *   6. Return JSON { ok: true } or { ok: false, error: string }
 *
 * This file is NOT a SvelteKit endpoint. It is a Cloudflare Pages Function
 * and lives outside src/ so the static adapter ignores it. Cloudflare auto-
 * deploys anything under /functions alongside the prerendered build.
 *
 * Required env vars (set in CF Pages → Settings → Environment variables):
 *   - LOOPS_API_KEY               (required)
 *   - LOOPS_CONTACT_TEMPLATE_ID   (required — the transactional template id)
 *   - CONTACT_DEST_EMAIL          (optional — defaults to jb@yodacom.com)
 *   - TURNSTILE_SECRET_KEY        (optional — enables CF Turnstile check)
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

const ALLOWED_TOPICS = [
	'General',
	'Research Inquiry',
	'Products / CoinRoc',
	'AI Practice / Advisory',
	'Press / Media',
	'Enterprise / RIA',
	'Other'
] as const;

const MIN_DWELL_MS = 2000; // humans take at least 2 seconds to fill out a form
const MAX_DWELL_MS = 1000 * 60 * 60 * 6; // 6h — stale page
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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
	if (!ALLOWED_TOPICS.includes(topic as (typeof ALLOWED_TOPICS)[number])) {
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
		return Boolean(data.success);
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
			submittedAt
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

	// Optional Turnstile
	if (env.TURNSTILE_SECRET_KEY) {
		if (!data.turnstileToken) {
			return json({ ok: false, error: 'Captcha required.' }, 400);
		}
		const ip = request.headers.get('CF-Connecting-IP');
		const ok = await verifyTurnstile(data.turnstileToken, env.TURNSTILE_SECRET_KEY, ip);
		if (!ok) {
			return json({ ok: false, error: 'Captcha verification failed.' }, 400);
		}
	}

	// Send via Loops
	if (!env.LOOPS_API_KEY || !env.LOOPS_CONTACT_TEMPLATE_ID) {
		console.error('[contact] LOOPS_API_KEY or LOOPS_CONTACT_TEMPLATE_ID not set');
		return json(
			{
				ok: false,
				error:
					'Email service is not configured yet. Please email jb@yodacom.com directly.'
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
			{ ok: false, error: 'Could not deliver your message. Please email jb@yodacom.com.' },
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
