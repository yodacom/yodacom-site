/**
 * Cloudflare Pages Function — GET /api/confirm?e=<email>&x=<expiry>&t=<hmac>
 *
 * Double opt-in confirmation. Verifies the signed link issued by /api/subscribe
 * (constant-time HMAC compare, then expiry), then sets the Loops contact to
 * subscribed: true and redirects to /subscribe/confirmed.
 *
 * Bad signature or expired link => redirect to /subscribe/expired (never a stack trace).
 * FAILS CLOSED: CONFIRM_SECRET or LOOPS_API_KEY missing => 503 page.
 *
 * Env: CONFIRM_SECRET (required), LOOPS_API_KEY (required),
 *      LOOPS_RESEARCH_LIST_ID / LOOPS_RESEARCH_USER_GROUP (optional, same as /api/subscribe)
 */
import { verifyConfirm } from '../lib/confirm-token.ts';

interface Env {
	LOOPS_API_KEY?: string;
	CONFIRM_SECRET?: string;
	LOOPS_RESEARCH_LIST_ID?: string;
	LOOPS_RESEARCH_USER_GROUP?: string;
}

type PagesFunction<E = unknown> = (ctx: {
	request: Request;
	env: E;
}) => Response | Promise<Response>;

function redirect(request: Request, path: string): Response {
	return new Response(null, {
		status: 302,
		headers: { Location: new URL(path, request.url).toString(), 'Cache-Control': 'no-store' }
	});
}

function page(message: string, status: number): Response {
	const html = `<!doctype html><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Yodacom</title><body style="font-family:Georgia,serif;max-width:32rem;margin:4rem auto;padding:0 1.5rem;line-height:1.6"><h1>Yodacom</h1><p>${message}</p><p><a href="/research-briefs">Back to research briefs</a></p>`;
	return new Response(html, {
		status,
		headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }
	});
}

export const onRequestGet: PagesFunction<Env> = async ({ request, env }) => {
	if (!env.CONFIRM_SECRET || !env.LOOPS_API_KEY) {
		console.error('[confirm] CONFIRM_SECRET or LOOPS_API_KEY not set');
		return page('Confirmation is temporarily unavailable. Please try your link again later.', 503);
	}

	const p = new URL(request.url).searchParams;
	const email = (p.get('e') ?? '').trim().toLowerCase();
	const token = p.get('t') ?? '';
	const expiry = Number(p.get('x'));
	if (!email || !token || !p.get('x')) return redirect(request, '/subscribe/expired');

	const verdict = await verifyConfirm(email, expiry, token, env.CONFIRM_SECRET);
	if (verdict !== 'ok') return redirect(request, '/subscribe/expired');

	const body: Record<string, unknown> = { email, subscribed: true };
	if (env.LOOPS_RESEARCH_LIST_ID) body.mailingLists = { [env.LOOPS_RESEARCH_LIST_ID]: true };
	if (env.LOOPS_RESEARCH_USER_GROUP) body.userGroup = env.LOOPS_RESEARCH_USER_GROUP;

	try {
		const r = await fetch('https://app.loops.so/api/v1/contacts/update', {
			method: 'PUT',
			headers: { Authorization: `Bearer ${env.LOOPS_API_KEY}`, 'Content-Type': 'application/json' },
			body: JSON.stringify(body)
		});
		if (!r.ok) {
			console.error(`[confirm] Loops error ${r.status}: ${await r.text()}`);
			return page('We could not complete your confirmation. Please try the link again shortly.', 502);
		}
	} catch (e) {
		console.error('[confirm] Loops network error:', e);
		return page('We could not complete your confirmation. Please try the link again shortly.', 502);
	}
	return redirect(request, '/subscribe/confirmed');
};

export const onRequest: PagesFunction<Env> = async () =>
	new Response('Method not allowed.', { status: 405 });
