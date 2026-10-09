// @ts-nocheck -- runs under node --test; repo has no @types/node
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost } from '../functions/api/contact.ts';

let calls;
let turnstileResult;
const realFetch = globalThis.fetch;
let ip = 0;

beforeEach(() => {
	calls = { turnstile: 0, loops: 0 };
	turnstileResult = true;
	globalThis.fetch = async (url) => {
		const u = String(url);
		if (u.includes('turnstile')) {
			calls.turnstile++;
			return new Response(JSON.stringify({ success: turnstileResult }));
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
