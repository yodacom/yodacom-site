// @ts-nocheck -- runs under node --test; repo has no @types/node
// Run: pnpm test  (node:test, Node >= 22.18 strips types natively)
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/subscribe.ts';

type Calls = { turnstile: number; loops: number };
type LoopsReq = { url: string; method: string; body: any };
let loopsReqs: LoopsReq[];
let existing: Array<{ subscribed: boolean }>;
let calls: Calls;
let turnstileResult: boolean;
const realFetch = globalThis.fetch;
let ipCounter = 0;

beforeEach(() => {
	calls = { turnstile: 0, loops: 0 };
	loopsReqs = [];
	existing = [];
	turnstileResult = true;
	globalThis.fetch = (async (url: string | URL | Request, init?: RequestInit) => {
		const u = String(url);
		if (u.includes('turnstile')) {
			calls.turnstile++;
			return new Response(JSON.stringify({ success: turnstileResult }));
		}
		if (u.includes('loops.so')) {
			calls.loops++;
			loopsReqs.push({
				url: u,
				method: init?.method ?? 'GET',
				body: init?.body ? JSON.parse(String(init.body)) : undefined
			});
			if (u.includes('/contacts/find')) return new Response(JSON.stringify(existing));
			return new Response('{}', { status: 200 });
		}
		throw new Error('unexpected fetch ' + u);
	}) as typeof fetch;
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

const env = {
	LOOPS_API_KEY: 'k',
	TURNSTILE_SECRET_KEY: 's',
	CONFIRM_SECRET: 'cs',
	LOOPS_CONFIRM_TEMPLATE_ID: 'tpl'
};

function good(over: Record<string, unknown> = {}) {
	return {
		email: 'reader@example.org',
		website: '',
		ts: Date.now() - 10_000,
		turnstileToken: 'tok',
		...over
	};
}

async function post(
	body: unknown,
	opts: { origin?: string | null; referer?: string; env?: Record<string, string> } = {}
) {
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		'CF-Connecting-IP': `10.0.0.${++ipCounter}` // fresh rate bucket per request
	};
	const origin = opts.origin === undefined ? 'https://yodacom.com' : opts.origin;
	if (origin) headers.Origin = origin;
	if (opts.referer) headers.Referer = opts.referer;
	const req = new Request('https://yodacom.com/api/subscribe', {
		method: 'POST',
		headers,
		body: JSON.stringify(body)
	});
	return onRequestPost({ request: req, env: opts.env ?? env });
}

test('valid submission accepted (Turnstile mocked) and reaches Loops', async () => {
	const r = await post(good());
	assert.equal(r.status, 200);
	assert.deepEqual(await r.json(), { ok: true });
	assert.equal(calls.turnstile, 1);
	assert.equal(calls.loops, 3); // find, create, transactional
});

test('subscribe sends a transactional confirm email and does NOT set subscribed:true', async () => {
	const r = await post(good());
	assert.equal(r.status, 200);
	const create = loopsReqs.find((q) => q.url.endsWith('/contacts/create'));
	assert.equal(create.body.subscribed, false);
	const tx = loopsReqs.find((q) => q.url.endsWith('/transactional'));
	assert.equal(tx.body.transactionalId, 'tpl');
	assert.equal(tx.body.email, 'reader@example.org');
	const u = new URL(tx.body.dataVariables.confirmUrl);
	assert.equal(u.pathname, '/api/confirm');
	assert.equal(u.searchParams.get('e'), 'reader@example.org');
	assert.ok(Number(u.searchParams.get('x')) > Date.now() / 1000 + 47 * 3600);
	assert.match(u.searchParams.get('t'), /^[0-9a-f]{64}$/);
	assert.ok(!loopsReqs.some((q) => q.body?.subscribed === true));
});

test('already-confirmed contact is not downgraded and gets no email', async () => {
	existing = [{ subscribed: true }];
	const r = await post(good());
	assert.equal(r.status, 200);
	assert.equal(loopsReqs.length, 1); // find only
	assert.ok(!loopsReqs.some((q) => q.url.endsWith('/contacts/create') || q.url.endsWith('/transactional')));
});

test('CONFIRM_SECRET missing fails closed (503, no Loops call)', async () => {
	const r = await post(good(), { env: { ...env, CONFIRM_SECRET: undefined } });
	assert.equal(r.status, 503);
	assert.equal(calls.loops, 0);
});

test('confirm template id missing fails closed (503, no Loops call)', async () => {
	const r = await post(good(), { env: { ...env, LOOPS_CONFIRM_TEMPLATE_ID: undefined } });
	assert.equal(r.status, 503);
	assert.equal(calls.loops, 0);
});

test('Turnstile secret missing fails closed (503, no Loops call)', async () => {
	const r = await post(good(), { env: { LOOPS_API_KEY: 'k' } });
	assert.equal(r.status, 503);
	assert.equal(calls.loops, 0);
});

test('Turnstile token missing rejected', async () => {
	const r = await post(good({ turnstileToken: undefined }));
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('Turnstile verification failure rejected', async () => {
	turnstileResult = false;
	const r = await post(good());
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('Turnstile network error fails closed', async () => {
	globalThis.fetch = (async () => {
		throw new Error('boom');
	}) as typeof fetch;
	const r = await post(good());
	assert.equal(r.status, 400);
});

test('too-fast submit rejected', async () => {
	const r = await post(good({ ts: Date.now() - 500 }));
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('stale ts (> 6h) rejected', async () => {
	const r = await post(good({ ts: Date.now() - 7 * 3600_000 }));
	assert.equal(r.status, 400);
});

test('bad Origin rejected', async () => {
	const r = await post(good(), { origin: 'https://evil.example' });
	assert.equal(r.status, 403);
	assert.equal(calls.loops, 0);
});

test('missing Origin and Referer rejected', async () => {
	const r = await post(good(), { origin: null });
	assert.equal(r.status, 403);
});

test('lookalike host rejected', async () => {
	const r = await post(good(), { origin: 'https://yodacom.com.evil.example' });
	assert.equal(r.status, 403);
});

test('Referer on yodacom.com accepted when Origin absent', async () => {
	const r = await post(good(), { origin: null, referer: 'https://www.yodacom.com/research-briefs' });
	assert.equal(r.status, 200);
});

test('disposable domains rejected (mailchuwee, sigismail, subdomain)', async () => {
	for (const e of [
		'justina698_smith_1990@mailchuwee.com',
		'a@sigismail.com',
		'a@x.mailinator.com',
		'a@mailinator.com.'
	]) {
		const r = await post(good({ email: e }));
		assert.equal(r.status, 400, e);
	}
	assert.equal(calls.loops, 0);
});

test('missing honeypot field rejected', async () => {
	const body: Record<string, unknown> = good();
	delete body.website;
	const r = await post(body);
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('missing ts rejected', async () => {
	const body: Record<string, unknown> = good();
	delete body.ts;
	const r = await post(body);
	assert.equal(r.status, 400);
});

test('filled honeypot silently accepted but never reaches Loops', async () => {
	const r = await post(good({ website: 'http://spam' }));
	assert.equal(r.status, 200);
	assert.equal(calls.loops, 0);
	assert.equal(calls.turnstile, 0);
});

test('existing rate limit still enforced (11th from same IP -> 429)', async () => {
	let last = 0;
	for (let i = 0; i < 11; i++) {
		const req = new Request('https://yodacom.com/api/subscribe', {
			method: 'POST',
			headers: { Origin: 'https://yodacom.com', 'CF-Connecting-IP': '9.9.9.9' },
			body: JSON.stringify(good())
		});
		last = (await onRequestPost({ request: req, env })).status;
	}
	assert.equal(last, 429);
});
