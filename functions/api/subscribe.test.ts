// Run: pnpm test:subscribe  (node --test, native TS stripping; fetch is mocked, no network)
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from './subscribe.ts';

const realFetch = globalThis.fetch;
let calls: { url: string; init: any; body: any }[] = [];
let ipN = 0;

beforeEach(() => {
	calls = [];
	globalThis.fetch = (async (url: any, init: any) => {
		calls.push({ url: String(url), init, body: init?.body ? JSON.parse(init.body) : null });
		return new Response('{}', { status: 200 });
	}) as typeof fetch;
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

function post(body: unknown, env: Record<string, string> = { LOOPS_API_KEY: 'test-key' }) {
	// unique IP per request so the in-memory rate limiter never interferes
	const request = new Request('https://yodacom.com/api/subscribe', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json', 'CF-Connecting-IP': `10.0.0.${++ipN}` },
		body: typeof body === 'string' ? body : JSON.stringify(body)
	});
	return onRequestPost({ request, env });
}

test('valid email -> exactly one Loops contacts/create call with expected payload', async () => {
	const res = await post({ email: '  Ada@Example.COM ', website: '' });
	assert.equal(res.status, 200);
	assert.deepEqual(await res.json(), { ok: true });
	assert.equal(calls.length, 1);
	assert.equal(calls[0].url, 'https://app.loops.so/api/v1/contacts/create');
	assert.equal(calls[0].init.method, 'POST');
	assert.equal(calls[0].init.headers.Authorization, 'Bearer test-key');
	assert.deepEqual(calls[0].body, { email: 'ada@example.com', source: 'research-briefs', subscribed: true });
});

test('optional list id / user group are added when configured', async () => {
	await post(
		{ email: 'ada@example.com' },
		{ LOOPS_API_KEY: 'k', LOOPS_RESEARCH_LIST_ID: 'list123', LOOPS_RESEARCH_USER_GROUP: 'research' }
	);
	assert.equal(calls.length, 1);
	assert.deepEqual(calls[0].body.mailingLists, { list123: true });
	assert.equal(calls[0].body.userGroup, 'research');
});

test('invalid emails -> 400 and no Loops call', async () => {
	for (const email of ['not-an-email', '', 'a@b', 'a b@example.com', 'a@b.com, c@d.com', '<x@y.com>', 123, null]) {
		const res = await post({ email });
		assert.equal(res.status, 400, String(email));
		assert.equal(((await res.json()) as { ok: boolean }).ok, false);
	}
	assert.equal((await post('{not json')).status, 400);
	assert.equal(calls.length, 0);
});

test('honeypot filled -> silent ok, no Loops call', async () => {
	const res = await post({ email: 'bot@example.com', website: 'http://spam' });
	assert.equal(res.status, 200);
	assert.deepEqual(await res.json(), { ok: true });
	assert.equal(calls.length, 0);
});

test('missing LOOPS_API_KEY -> 503, no Loops call', async () => {
	const res = await post({ email: 'ada@example.com' }, {});
	assert.equal(res.status, 503);
	assert.equal(calls.length, 0);
});
