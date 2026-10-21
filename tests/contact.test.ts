// @ts-nocheck -- runs under node --test; repo has no @types/node
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/contact.ts';

let calls;
let tsExtra = { hostname: 'yodacom.com', action: 'contact' };
let tsInit;
let tsStatus = 200;
let turnstileResult;
const realFetch = globalThis.fetch;
let ip = 0;

beforeEach(() => {
	calls = { turnstile: 0, loops: 0 };
	turnstileResult = true;
	tsExtra = { hostname: 'yodacom.com', action: 'contact' };
	tsInit = undefined;
	tsStatus = 200;
	globalThis.fetch = async (url, init) => {
		const u = String(url);
		if (u.includes('turnstile')) {
			calls.turnstile++;
			tsInit = init;
			return new Response(JSON.stringify({ success: turnstileResult, ...tsExtra }), { status: tsStatus });
		}
		if (u.includes('loops.so')) {
			calls.loops++;
			return new Response('{}', { status: 200 });
		}
		throw new Error('unexpected fetch ' + u);
	};
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

const fullBindings = {
	LOOPS_API_KEY: 'k',
	LOOPS_CONTACT_TEMPLATE_ID: 't',
	CONTACT_DEST_EMAIL: 'd@example.org',
	TURNSTILE_SECRET_KEY: 's'
};

const good = (over = {}) => ({
	name: 'Jane Adviser',
	email: 'jane@example.org',
	topic: 'General',
	message: 'Hello, a real message here.',
	website: '',
	ts: Date.now() - 10_000,
	turnstileToken: 'tok',
	...over
});

const post = (body, bindings = fullBindings) =>
	onRequestPost({
		request: new Request('https://yodacom.com/api/contact', {
			method: 'POST',
			headers: { 'CF-Connecting-IP': `10.1.0.${++ip}` },
			body: JSON.stringify(body)
		}),
		env: bindings
	});

test('contact accepted with mocked Turnstile token and delivered', async () => {
	const r = await post(good());
	assert.equal(r.status, 200);
	assert.equal(calls.turnstile, 1);
	assert.equal(calls.loops, 1);
});

test('contact rejected when token missing', async () => {
	const r = await post(good({ turnstileToken: undefined }));
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('contact fails closed when secret missing (503, no delivery)', async () => {
	const { TURNSTILE_SECRET_KEY, ...withoutSecret } = fullBindings;
	const r = await post(good(), withoutSecret);
	assert.equal(r.status, 503);
	assert.equal(calls.loops, 0);
});

test('contact rejected when Turnstile verification fails', async () => {
	turnstileResult = false;
	const r = await post(good());
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

// --- siteverify hardening: hostname, action, no remoteip, dummy-secret guard ---
test('siteverify: token minted for another hostname is rejected', async () => {
	tsExtra = { hostname: 'beerzap.com', action: 'contact' };
	const r = await post(good());
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('siteverify: www.yodacom.com hostname is accepted', async () => {
	tsExtra = { hostname: 'WWW.yodacom.com', action: 'contact' };
	const r = await post(good());
	assert.equal(r.status, 200);
});

test('siteverify: token from the other form (wrong action) is rejected', async () => {
	tsExtra = { hostname: 'yodacom.com', action: 'subscribe' };
	const r = await post(good());
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('siteverify: missing action / hostname in the verdict is rejected', async () => {
	tsExtra = { hostname: 'yodacom.com' };
	assert.equal((await post(good())).status, 400);
	tsExtra = { action: 'contact' };
	assert.equal((await post(good())).status, 400);
});

test('siteverify: non-2xx from Cloudflare fails closed', async () => {
	tsStatus = 500;
	const r = await post(good());
	assert.equal(r.status, 400);
	assert.equal(calls.loops, 0);
});

test('siteverify: oversize token is rejected without calling Cloudflare', async () => {
	const r = await post(good({ turnstileToken: 'x'.repeat(2049) }));
	assert.equal(r.status, 400);
	assert.equal(calls.turnstile, 0);
});

test('siteverify: sends only secret + response (never remoteip)', async () => {
	await post(good());
	assert.equal(calls.turnstile, 1);
	const keys = [...tsInit.body.keys()].sort();
	assert.deepEqual(keys, ['response', 'secret']);
});

test('dummy Turnstile secret is refused off localhost (503, no siteverify)', async () => {
	const r = await post(good(), { ...fullBindings, TURNSTILE_SECRET_KEY: '1x0000000000000000000000000000000AA' });
	assert.equal(r.status, 503);
	assert.equal(calls.turnstile, 0);
	assert.equal(calls.loops, 0);
	const p = await post(good(), { ...fullBindings, TURNSTILE_SECRET_KEY: 'placeholder' });
	assert.equal(p.status, 503);
});
