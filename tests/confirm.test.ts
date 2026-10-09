// @ts-nocheck -- runs under node --test; repo has no @types/node
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestGet } from '../functions/api/confirm.ts';
import { signConfirm } from '../functions/lib/confirm-token.ts';

const SECRET = 'cs';
const env = { LOOPS_API_KEY: 'k', CONFIRM_SECRET: SECRET };
const realFetch = globalThis.fetch;
let loops: Array<{ url: string; method: string; body: any }>;

beforeEach(() => {
	loops = [];
	globalThis.fetch = (async (url: string, init?: RequestInit) => {
		loops.push({ url: String(url), method: init?.method, body: JSON.parse(String(init?.body)) });
		return new Response('{}', { status: 200 });
	}) as typeof fetch;
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

const future = () => Math.floor(Date.now() / 1000) + 3600;

async function get(e: string, x: number | string, t: string, e2 = env) {
	const q = new URLSearchParams({ e, x: String(x), t });
	return onRequestGet({ request: new Request(`https://yodacom.com/api/confirm?${q}`), env: e2 });
}
const loc = (r: Response) => new URL(r.headers.get('Location')).pathname;

test('valid link confirms: Loops subscribed:true and redirect to /subscribe/confirmed', async () => {
	const x = future();
	const r = await get('a@example.org', x, await signConfirm('a@example.org', x, SECRET));
	assert.equal(r.status, 302);
	assert.equal(loc(r), '/subscribe/confirmed');
	assert.equal(loops.length, 1);
	assert.equal(loops[0].method, 'PUT');
	assert.ok(loops[0].url.endsWith('/contacts/update'));
	assert.deepEqual(loops[0].body, { email: 'a@example.org', subscribed: true });
});

test('tampered email is rejected', async () => {
	const x = future();
	const t = await signConfirm('a@example.org', x, SECRET);
	const r = await get('evil@example.org', x, t);
	assert.equal(loc(r), '/subscribe/expired');
	assert.equal(loops.length, 0);
});

test('tampered token is rejected', async () => {
	const x = future();
	const t = await signConfirm('a@example.org', x, SECRET);
	const bad = (t[0] === '0' ? '1' : '0') + t.slice(1);
	assert.equal(loc(await get('a@example.org', x, bad)), '/subscribe/expired');
	assert.equal(loc(await get('a@example.org', x, 'short')), '/subscribe/expired');
	assert.equal(loops.length, 0);
});

test('tampered (extended) expiry is rejected', async () => {
	const x = future();
	const t = await signConfirm('a@example.org', x, SECRET);
	assert.equal(loc(await get('a@example.org', x + 99999, t)), '/subscribe/expired');
	assert.equal(loops.length, 0);
});

test('expired link is rejected even with a valid signature', async () => {
	const x = Math.floor(Date.now() / 1000) - 10;
	const r = await get('a@example.org', x, await signConfirm('a@example.org', x, SECRET));
	assert.equal(loc(r), '/subscribe/expired');
	assert.equal(loops.length, 0);
});

test('missing params go to the friendly expired page', async () => {
	const r = await onRequestGet({ request: new Request('https://yodacom.com/api/confirm'), env });
	assert.equal(loc(r), '/subscribe/expired');
});

test('CONFIRM_SECRET missing fails closed (503, no Loops call)', async () => {
	const x = future();
	const r = await get('a@example.org', x, 'whatever', { LOOPS_API_KEY: 'k' });
	assert.equal(r.status, 503);
	assert.equal(loops.length, 0);
});
