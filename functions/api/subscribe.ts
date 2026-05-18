/**
 * Cloudflare Pages Function — POST /api/subscribe
 *
 * Handles research-newsletter signups from /research-briefs (and any other
 * page that posts to this endpoint).
 *
 * Flow:
 *   1. Parse + validate JSON body — requires { email: string }
 *   2. IP-based rate limiting (10 attempts per 10 minutes per IP)
 *   3. Honeypot check (hidden "website" field must be empty)
 *   4. POST to Loops /contacts/create — adds the subscriber to the
 *      research-newsletter mailing list
 *   5. Return JSON { ok: true } or { ok: false, error: string }
 *
 * This file is NOT a SvelteKit endpoint. It is a Cloudflare Pages Function.
 * Cloudflare auto-deploys anything under /functions alongside the prerendered
 * build. The SvelteKit static adapter ignores it entirely.
 *
 * Required env vars (set in CF Pages → Settings → Environment variables):
 *   - LOOPS_API_KEY                    (required — shared with /api/contact)
 *
 * Optional env vars:
 *   - LOOPS_RESEARCH_LIST_ID           (optional — if set, assigns the contact
 *                                       to this specific mailing list id in Loops)
 *   - LOOPS_RESEARCH_USER_GROUP        (optional — userGroup value to tag the
 *                                       subscriber in Loops, e.g. "research-briefs")
 */

interface Env {
	LOOPS_API_KEY?: string;
	LOOPS_RESEARCH_LIST_ID?: string;
	LOOPS_RESEARCH_USER_GROUP?: string;
}

interface SubscribePayload {
	email?: unknown;
	website?: unknown; // honeypot — must be empty
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

	// Parse JSON
	let raw: SubscribePayload;
	try {
		raw = (await request.json()) as SubscribePayload;
	} catch {
		return json({ ok: false, error: 'Invalid request body.' }, 400);
	}

	// Honeypot — must be absent or empty
	if (typeof raw.website === 'string' && raw.website.length > 0) {
		// Silently accept to avoid tipping off bots
		return json({ ok: true });
	}

	// Validate email
	const email = typeof raw.email === 'string' ? raw.email.trim().toLowerCase() : '';
	if (!EMAIL_RE.test(email) || email.length > 254) {
		return json({ ok: false, error: 'Please enter a valid email address.' }, 400);
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

	// Build Loops contact payload
	// Loops /contacts/create: adds contact and optionally assigns mailing list
	const loopsBody: Record<string, unknown> = {
		email,
		source: 'research-briefs',
		subscribed: true
	};

	if (env.LOOPS_RESEARCH_LIST_ID) {
		loopsBody.mailingLists = { [env.LOOPS_RESEARCH_LIST_ID]: true };
	}

	if (env.LOOPS_RESEARCH_USER_GROUP) {
		loopsBody.userGroup = env.LOOPS_RESEARCH_USER_GROUP;
	}

	try {
		const r = await fetch('https://app.loops.so/api/v1/contacts/create', {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${env.LOOPS_API_KEY}`,
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(loopsBody)
		});

		if (r.ok) {
			return json({ ok: true });
		}

		const text = await r.text();
		console.error(`[subscribe] Loops error ${r.status}: ${text}`);

		// Loops returns 409 when the contact already exists — treat as success
		if (r.status === 409) {
			return json({ ok: true });
		}

		return json(
			{ ok: false, error: 'Could not complete signup. Please try again shortly.' },
			502
		);
	} catch (e) {
		console.error('[subscribe] Loops network error:', e);
		return json(
			{ ok: false, error: 'Network error. Please try again shortly.' },
			502
		);
	}
};

// Reject non-POST methods
export const onRequest: PagesFunction<Env> = async ({ request }) => {
	if (request.method !== 'POST') {
		return json({ ok: false, error: 'Method not allowed.' }, 405);
	}
	return json({ ok: false, error: 'Use POST.' }, 405);
};
