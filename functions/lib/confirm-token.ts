/**
 * Signed confirm-link helpers (shared by /api/subscribe and /api/confirm).
 * Token = hex(HMAC-SHA256(`${email}|${expiry}`, CONFIRM_SECRET)); expiry is unix seconds.
 * Not a route: no onRequest* exports.
 */

export const CONFIRM_TTL_SECONDS = 48 * 60 * 60;

const enc = new TextEncoder();

async function hmacHex(message: string, secret: string): Promise<string> {
	const key = await crypto.subtle.importKey(
		'raw',
		enc.encode(secret),
		{ name: 'HMAC', hash: 'SHA-256' },
		false,
		['sign']
	);
	const sig = new Uint8Array(await crypto.subtle.sign('HMAC', key, enc.encode(message)));
	return Array.from(sig, (b) => b.toString(16).padStart(2, '0')).join('');
}

/** Constant-time string compare (length leak only, which is public: tokens are fixed-length). */
export function safeEqual(a: string, b: string): boolean {
	const x = enc.encode(a);
	const y = enc.encode(b);
	if (x.length !== y.length) return false;
	let diff = 0;
	for (let i = 0; i < x.length; i++) diff |= x[i] ^ y[i];
	return diff === 0;
}

export async function signConfirm(email: string, expiry: number, secret: string): Promise<string> {
	return hmacHex(`${email}|${expiry}`, secret);
}

export type VerifyResult = 'ok' | 'invalid' | 'expired';

export async function verifyConfirm(
	email: string,
	expiry: number,
	token: string,
	secret: string,
	nowMs = Date.now()
): Promise<VerifyResult> {
	if (!Number.isInteger(expiry)) return 'invalid';
	const expected = await signConfirm(email, expiry, secret);
	if (!safeEqual(expected, token)) return 'invalid';
	if (expiry * 1000 < nowMs) return 'expired';
	return 'ok';
}
