// Run: pnpm test:subscribe  (node --test, native TS stripping; fetch is mocked, no network)
// Contract under test: fail-closed Turnstile + dwell + Origin + honeypot, then double opt-in
// (contact created subscribed:false, signed confirm email sent; nothing is subscribed until /api/confirm).
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from './subscribe.ts';

const realFetch = globalThis.fetch;
let calls: { url: string; init: any; body: any }[] = [];
let ipN = 0;

beforeEach(() => {
	calls = [];
	globalThis.fetch = (async (url: any, init: any) => {
		const u = String(url);
		if (u.includes('turnstile')) return new Response(JSON.stringify({ success: true })); // not a Loops call
		calls.push({ url: u, init, body: init?.body ? JSON.parse(init.body) : null });
		if (u.includes('/contacts/find')) return new Response('[]', { status: 200 });
		return new Response('{}', { status: 200 });
	}) as typeof fetch;
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

const ENV = {
	LOOPS_API_KEY: 'test-key',
	TURNSTILE_SECRET_KEY: 's',
	CONFIRM_SECRET: 'cs',
	LOOPS_CONFIRM_TEMPLATE_ID: 'tpl'
};

function post(body: unknown, env: Record<string, string | undefined> = ENV) {
	// unique IP per request so the in-memory rate limiter never interferes
	const request = new Request('https://yodacom.com/api/subscribe', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			Origin: 'https://yodacom.com',
			'CF-Connecting-IP': `10.0.0.${++ipN}`
		},
		body: typeof body === 'string' ? body : JSON.stringify(body)
	});
	return onRequestPost({ request, env } as any);
}

const good = (over: Record<string, unknown> = {}) => ({
	email: '  Ada@Example.COM ',
	website: '',
	ts: Date.now() - 10_000,
	turnstileToken: 'tok',
	...over
});

test('valid email -> find, create (subscribed:false), confirm email; never subscribed:true', async () => {
	const res = await post(good());
	assert.equal(res.status, 200);
	assert.deepEqual(await res.json(), { ok: true });
	assert.deepEqual(
		calls.map((c) => c.url.replace('https://app.loops.so/api/v1', '').split('?')[0]),
		['/contacts/find', '/contacts/create', '/transactional']
	);
	assert.equal(calls[1].init.headers.Authorization, 'Bearer test-key');
	assert.deepEqual(calls[1].body, { email: 'ada@example.com', source: 'research-briefs', subscribed: false });
	assert.equal(calls[2].body.transactionalId, 'tpl');
	assert.equal(calls[2].body.email, 'ada@example.com');
	assert.ok(!calls.some((c) => c.body?.subscribed === true));
});

test('optional list id / user group are added to the (unsubscribed) contact when configured', async () => {
	await post(good({ email: 'ada@example.com' }), {
		...ENV,
		LOOPS_RESEARCH_LIST_ID: 'list123',
		LOOPS_RESEARCH_USER_GROUP: 'research'
	});
	const create = calls.find((c) => c.url.endsWith('/contacts/create'))!;
	assert.deepEqual(create.body.mailingLists, { list123: true });
	assert.equal(create.body.userGroup, 'research');
	assert.equal(create.body.subscribed, false);
});

test('invalid emails -> 400 and no Loops call', async () => {
	for (const email of ['not-an-email', '', 'a@b', 'a b@example.com', 'a@b.com, c@d.com', '<x@y.com>', 123, null]) {
		const res = await post(good({ email }));
		assert.equal(res.status, 400, String(email));
		assert.equal(((await res.json()) as { ok: boolean }).ok, false);
	}
	assert.equal((await post('{not json')).status, 400);
	assert.equal(calls.length, 0);
});

test('honeypot filled -> silent ok, no Loops call', async () => {
	const res = await post(good({ email: 'bot@example.com', website: 'http://spam' }));
	assert.equal(res.status, 200);
	assert.deepEqual(await res.json(), { ok: true });
	assert.equal(calls.length, 0);
});

test('missing LOOPS_API_KEY -> 503, no Loops call', async () => {
	const res = await post(good(), { ...ENV, LOOPS_API_KEY: undefined });
	assert.equal(res.status, 503);
	assert.equal(calls.length, 0);
});
