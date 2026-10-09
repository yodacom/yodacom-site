/**
 * Cloudflare Pages Function — POST /api/subscribe
 *
 * Handles research-newsletter signups from /research-briefs (and any other
 * page that posts to this endpoint).
 *
 * Flow:
 *   1. Parse + validate JSON body — requires { email: string }
 *   2. IP-based rate limiting (10 attempts per 10 minutes per IP)
 *   3. Origin/Referer must be a yodacom.com host (else 403)
 *   4. Honeypot: the "website" field MUST be present (real form always sends it)
 *      and empty. Absent field = bot (400); filled = bot (silent accept)
 *   5. Dwell time: "ts" (client render time) must be 3s..6h old
 *   6. Email validity + disposable-domain blocklist
 *   7. Cloudflare Turnstile — FAILS CLOSED: secret missing => 503, token
 *      missing/invalid => 400. Nothing reaches Loops without a passed check.
 *   8. Double opt-in: CONFIRM_SECRET + LOOPS_CONFIRM_TEMPLATE_ID missing => 503.
 *      Look the contact up (/contacts/find); already subscribed => no-op.
 *      Else create with subscribed:false, then send a Loops TRANSACTIONAL email
 *      with a signed /api/confirm link (48h). /api/confirm sets subscribed:true.
 *   9. Return JSON { ok: true } or { ok: false, error: string }
 *
 * This file is NOT a SvelteKit endpoint. It is a Cloudflare Pages Function.
 * Cloudflare auto-deploys anything under /functions alongside the prerendered
 * build. The SvelteKit static adapter ignores it entirely.
 *
 * Required env vars (set in CF Pages → Settings → Environment variables):
 *   - LOOPS_API_KEY                    (required — shared with /api/contact)
 *   - TURNSTILE_SECRET_KEY             (required — form is closed without it)
 *   - CONFIRM_SECRET                   (required — HMAC key for confirm links)
 *   - LOOPS_CONFIRM_TEMPLATE_ID        (required — transactional template, data var {confirmUrl})
 *
 * Optional env vars:
 *   - LOOPS_RESEARCH_LIST_ID           (optional — if set, assigns the contact
 *                                       to this specific mailing list id in Loops)
 *   - LOOPS_RESEARCH_USER_GROUP        (optional — userGroup value to tag the
 *                                       subscriber in Loops, e.g. "research-briefs")
 */

import { CONFIRM_TTL_SECONDS, signConfirm } from '../lib/confirm-token.ts';

interface Env {
	LOOPS_API_KEY?: string;
	CONFIRM_SECRET?: string;
	LOOPS_CONFIRM_TEMPLATE_ID?: string;
	TURNSTILE_SECRET_KEY?: string;
	LOOPS_RESEARCH_LIST_ID?: string;
	LOOPS_RESEARCH_USER_GROUP?: string;
}

interface SubscribePayload {
	email?: unknown;
	website?: unknown; // honeypot — must be PRESENT and empty
	ts?: unknown; // client render timestamp (ms since epoch) for dwell check
	turnstileToken?: unknown;
}

const MIN_DWELL_MS = 3000;
const MAX_DWELL_MS = 1000 * 60 * 60 * 6;
const ALLOWED_HOSTS = new Set(['yodacom.com', 'www.yodacom.com']);

// Throwaway-mailbox domains. Extend when new ones show up in Loops.
// Matches the exact domain or any subdomain of it.
const DISPOSABLE_DOMAINS = [
	'mailchuwee.com',
	'sigismail.com',
	'mailinator.com',
	'guerrillamail.com',
	'guerrillamail.net',
	'guerrillamailblock.com',
	'sharklasers.com',
	'grr.la',
	'10minutemail.com',
	'10minutemail.net',
	'tempmail.com',
	'temp-mail.org',
	'temp-mail.io',
	'tempail.com',
	'tempr.email',
	'throwawaymail.com',
	'yopmail.com',
	'yopmail.net',
	'trashmail.com',
	'trashmail.net',
	'getnada.com',
	'nada.email',
	'dispostable.com',
	'maildrop.cc',
	'mailnesia.com',
	'mintemail.com',
	'fakeinbox.com',
	'spamgourmet.com',
	'mohmal.com',
	'emailondeck.com',
	'burnermail.io',
	'moakt.com',
	'discard.email',
	'mailcatch.com',
	'33mail.com'
];

function isDisposableEmail(email: string): boolean {
	const domain = email.slice(email.lastIndexOf('@') + 1).toLowerCase().replace(/\.+$/, '');
	return DISPOSABLE_DOMAINS.some((d) => domain === d || domain.endsWith('.' + d));
}

function isAllowedOrigin(request: Request): boolean {
	const source = request.headers.get('Origin') || request.headers.get('Referer');
	if (!source) return false;
	try {
		const u = new URL(source);
		return u.protocol === 'https:' && ALLOWED_HOSTS.has(u.hostname);
	} catch {
		return false;
	}
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
		console.error('[subscribe] Turnstile verify failed:', e);
		return false;
	}
}

// Same hardened pattern as contact.ts: rejects whitespace, commas, semicolons,
// angle brackets, quotes, parens, backslashes; exactly one '@'.
const EMAIL_RE = /^[^\s@,;<>"'()\\[\]:]+@[^\s@,;<>"'()\\[\]:]+\.[^\s@,;<>"'()\\[\]:]+$/;

// --- Simple IP-based rate limiter ---
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000; // 10-minute window
const RATE_LIMIT_MAX = 10; // max subscribe attempts per IP per window

interface RateBucket {
	count: number;
	windowStart: number;
}

const rateBuckets = new Map<string, RateBucket>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSeconds: number } {
	const now = Date.now();
	const bucket = rateBuckets.get(ip);

	if (!bucket || now - bucket.windowStart > RATE_LIMIT_WINDOW_MS) {
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

function json(data: unknown, status = 200): Response {
	return new Response(JSON.stringify(data), {
		status,
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': 'https://yodacom.com'
		}
	});
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
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': 'https://yodacom.com',
				'Cache-Control': 'no-store',
				'Retry-After': String(rl.retryAfterSeconds)
			}
		});
	}

	// Origin/Referer — browsers always send Origin on a cross-origin-capable POST
	if (!isAllowedOrigin(request)) {
		return json({ ok: false, error: 'Request not allowed.' }, 403);
	}

	// Parse JSON
	let raw: SubscribePayload;
	try {
		raw = (await request.json()) as SubscribePayload;
	} catch {
		return json({ ok: false, error: 'Invalid request body.' }, 400);
	}

	// Honeypot — positive form: the real form ALWAYS sends `website` (empty string)
	// and a numeric `ts`. Bots that post only { email } are rejected.
	if (typeof raw.website !== 'string' || typeof raw.ts !== 'number' || !Number.isFinite(raw.ts)) {
		return json({ ok: false, error: 'Invalid request.' }, 400);
	}
	if (raw.website.length > 0) {
		// Silently accept to avoid tipping off bots
		return json({ ok: true });
	}

	// Dwell time
	const age = Date.now() - raw.ts;
	if (age < MIN_DWELL_MS || age > MAX_DWELL_MS) {
		return json({ ok: false, error: 'Please wait a moment and try again.' }, 400);
	}

	// Validate email
	const email = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : '';
	if (!EMAIL_RE.test(email) || email.length > 254) {
		return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
	}
	if (isDisposableEmail(email)) {
		return json({ ok: false, error: 'Please use a permanent email address.' }, 400);
	}

	// Turnstile — FAIL CLOSED. No secret configured = form is closed.
	if (!env.TURNSTILE_SECRET_KEY) {
		console.error('[subscribe] TURNSTILE_SECRET_KEY not set — refusing signup');
		return json(
			{ ok: false, error: 'Signup temporarily unavailable. Please try again later.' },
			503
		);
	}
	const token = typeof raw.turnstileToken === 'string' ? raw.turnstileToken : '';
	if (!token) {
		return json({ ok: false, error: 'Captcha required.' }, 400);
	}
	const turnstileOk = await verifyTurnstile(
		token,
		env.TURNSTILE_SECRET_KEY,
		request.headers.get('CF-Connecting-IP')
	);
	if (!turnstileOk) {
		return json({ ok: false, error: 'Captcha verification failed.' }, 400);
	}

	// Require Loops key
	if (!env.LOOPS_API_KEY) {
		console.error('[subscribe] LOOPS_API_KEY not set');
		return json(
			{
				ok: false,
				error: 'Signup temporarily unavailable. Please try again later.'
			},
			503
		);
	}

	// Double opt-in: fail closed without the signing secret or the template id
	if (!env.CONFIRM_SECRET || !env.LOOPS_CONFIRM_TEMPLATE_ID) {
		console.error('[subscribe] CONFIRM_SECRET or LOOPS_CONFIRM_TEMPLATE_ID not set');
		return json(
			{ ok: false, error: 'Signup temporarily unavailable. Please try again later.' },
			503
		);
	}

	const loopsHeaders = {
		Authorization: `Bearer ${env.LOOPS_API_KEY}`,
		'Content-Type': 'application/json'
	};
	const unavailable = () =>
		json({ ok: false, error: 'Could not complete signup. Please try again shortly.' }, 502);

	try {
		// 1. Look the contact up first so a confirmed subscriber is never downgraded
		const find = await fetch(
			`https://app.loops.so/api/v1/contacts/find?email=${encodeURIComponent(email)}`,
			{ headers: loopsHeaders }
		);
		if (!find.ok) {
			console.error(`[subscribe] Loops find error ${find.status}: ${await find.text()}`);
			return unavailable();
		}
		const found = (await find.json()) as Array<{ subscribed?: boolean }>;
		if (Array.isArray(found) && found.some((c) => c.subscribed === true)) {
			// Already confirmed: nothing to change, nothing to send. Same response either way.
			return json({ ok: true });
		}

		// 2. New (or previously unsubscribed) contact: create unsubscribed until confirmed
		if (!Array.isArray(found) || found.length === 0) {
			const loopsBody: Record<string, unknown> = {
				email,
				source: 'research-briefs',
				subscribed: false
			};
			if (env.LOOPS_RESEARCH_LIST_ID) loopsBody.mailingLists = { [env.LOOPS_RESEARCH_LIST_ID]: true };
			if (env.LOOPS_RESEARCH_USER_GROUP) loopsBody.userGroup = env.LOOPS_RESEARCH_USER_GROUP;
			const created = await fetch('https://app.loops.so/api/v1/contacts/create', {
				method: 'POST',
				headers: loopsHeaders,
				body: JSON.stringify(loopsBody)
			});
			// 409 = raced with another request; contact exists, carry on
			if (!created.ok && created.status !== 409) {
				console.error(`[subscribe] Loops create error ${created.status}: ${await created.text()}`);
				return unavailable();
			}
		}

		// 3. Send the signed confirm link (transactional; addToAudience left off)
		const expiry = Math.floor(Date.now() / 1000) + CONFIRM_TTL_SECONDS;
		const t = await signConfirm(email, expiry, env.CONFIRM_SECRET);
		const confirmUrl = `https://yodacom.com/api/confirm?e=${encodeURIComponent(email)}&x=${expiry}&t=${t}`;
		const sent = await fetch('https://app.loops.so/api/v1/transactional', {
			method: 'POST',
			headers: loopsHeaders,
			body: JSON.stringify({
				transactionalId: env.LOOPS_CONFIRM_TEMPLATE_ID,
				email,
				dataVariables: { confirmUrl }
			})
		});
		if (!sent.ok) {
			console.error(`[subscribe] Loops transactional error ${sent.status}: ${await sent.text()}`);
			return unavailable();
		}
		return json({ ok: true });
	} catch (e) {
		console.error('[subscribe] Loops network error:', e);
		return json({ ok: false, error: 'Network error. Please try again shortly.' }, 502);
	}
};

// Reject non-POST methods
export const onRequest: PagesFunction<Env> = async ({ request }) => {
	if (request.method !== 'POST') {
		return json({ ok: false, error: 'Method not allowed.' }, 405);
	}
	return json({ ok: false, error: 'Use POST.' }, 405);
};
