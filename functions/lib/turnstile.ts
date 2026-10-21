/**
 * Shared Turnstile siteverify (used by /api/subscribe and /api/contact).
 * Not a route: no onRequest* exports.
 *
 * The widget "yodacom-signup" is shared by several hostnames/sites, so a bare `success: true`
 * is not enough: a token minted for another site or form on the same widget would pass.
 * We therefore also require the hostname and the per-form `action` set at widget render.
 * Sends ONLY secret + response: deliberately no `remoteip`.
 */

export const SITEVERIFY_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
export const TURNSTILE_TOKEN_MAX = 2048; // Cloudflare's documented maximum token length

/** Hostnames siteverify may report for a token minted on our pages. */
export const TURNSTILE_ALLOWED_HOSTNAMES: readonly string[] = ['yodacom.com', 'www.yodacom.com'];
/** The only hosts where a dummy/placeholder secret is tolerated (local development). */
const LOCAL_HOSTS = new Set(['localhost', '127.0.0.1']);
const SITEVERIFY_TIMEOUT_MS = 5000;

/** Must equal the `action` passed to turnstile.render() in the matching form. */
export type TurnstileAction = 'subscribe' | 'contact';

/**
 * Cloudflare's documented dummy secret keys (public). Their siteverify answer is fixed
 * (hostname "localhost", action "test"), so hostname/action are skipped only for these,
 * and callers refuse them on every host except localhost/127.0.0.1 (isMisconfiguredSecret). Real secrets are always strict.
 */
export const DUMMY_SECRETS = new Set([
	'1x0000000000000000000000000000000AA',
	'2x0000000000000000000000000000000AA',
	'3x0000000000000000000000000000000AA'
]);

/** Obvious placeholder values a deploy could carry by mistake (real secrets look like "0x4AAAA..."). */
const PLACEHOLDER_SECRET = /^(change.?me|placeholder|dummy|test|todo|tbd|none|null|undefined|your[-_ ]|xxx|<)/i;

export function isDummyOrPlaceholderSecret(secret: string): boolean {
	const s = secret.trim();
	return DUMMY_SECRETS.has(s) || PLACEHOLDER_SECRET.test(s);
}

/** True when the secret is a test key or placeholder and the request is NOT on localhost/127.0.0.1 (any other host, incl. pages.dev, is refused). */
export function isMisconfiguredSecret(requestUrl: string, secret: string): boolean {
	let host = '';
	try {
		host = new URL(requestUrl).hostname.toLowerCase().replace(/\.+$/, '');
	} catch {
		return true; // unparseable URL: fail closed
	}
	return !LOCAL_HOSTS.has(host) && isDummyOrPlaceholderSecret(secret);
}

/**
 * true only when Cloudflare says success AND hostname + action match. Any error, non-2xx,
 * bad JSON or timeout returns false (fail closed).
 */
export async function verifyTurnstile(
	token: string,
	secret: string,
	action: TurnstileAction
): Promise<boolean> {
	if (!token || token.length > TURNSTILE_TOKEN_MAX) return false;
	try {
		const form = new FormData();
		form.append('secret', secret);
		form.append('response', token);
		const r = await fetch(SITEVERIFY_URL, {
			method: 'POST',
			body: form,
			signal: AbortSignal.timeout(SITEVERIFY_TIMEOUT_MS)
		});
		if (!r.ok) return false;
		const data = (await r.json()) as { success?: unknown; action?: unknown; hostname?: unknown };
		if (data.success !== true) return false;
		if (DUMMY_SECRETS.has(secret)) return true;
		if (data.action !== action) return false;
		return (
			typeof data.hostname === 'string' &&
			TURNSTILE_ALLOWED_HOSTNAMES.includes(data.hostname.toLowerCase())
		);
	} catch (e) {
		console.error(`[turnstile:${action}] verify failed:`, e instanceof Error ? e.message : 'error');
		return false;
	}
}
