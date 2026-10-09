// Run: pnpm test:contact  (node --test, native TS stripping; fetch is mocked, no network)
import { test, beforeEach, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { onRequestPost, sourceFor } from './contact.ts';

const C = 'YodaCom Consulting';
const R = 'YodaCom Research-CoinRoc';
const G = 'YodaCom General';
const EXPECTED: [string, string][] = [
	['Consulting — AI Readiness workshop', C],
	['Consulting — Operations automation', C],
	['Consulting — Idea-to-product sprint', C],
	['Technology advisory', C],
	['Consulting — not sure yet', C],
	['Research inquiry', R],
	['Products / CoinRoc', R],
	['Enterprise / RIA', R],
	['Press / Media', R],
	['General', G],
	['Other', G],
	['AI Practice / Advisory', C],
	['Research Inquiry', R]
];

test('sourceFor maps all 11 topics + 2 legacy values, unknown -> General', () => {
	assert.equal(EXPECTED.length, 13);
	for (const [topic, source] of EXPECTED) assert.equal(sourceFor(topic), source, topic);
	assert.equal(sourceFor('something else'), G);
});

const realFetch = globalThis.fetch;
let calls: { url: string; body: any }[] = [];
let ipN = 0;
beforeEach(() => {
	calls = [];
	globalThis.fetch = (async (url: any, init: any) => {
		if (String(url).includes('turnstile')) return new Response(JSON.stringify({ success: true }));
		calls.push({ url: String(url), body: init?.body ? JSON.parse(init.body) : null });
		return new Response('{}', { status: 200 });
	}) as typeof fetch;
});
afterEach(() => {
	globalThis.fetch = realFetch;
});

function post(over: Record<string, unknown> = {}) {
	// unique IP per request so the in-memory rate limiter never interferes
	const body = {
		name: 'Ada Lovelace',
		email: 'ada@example.com',
		topic: 'Technology advisory',
		message: 'Hello, this is a long enough message.',
		website: '',
		ts: Date.now() - 10_000,
		turnstileToken: 'tok',
		...over
	};
	return new Request('https://x.test/api/contact', {
		method: 'POST',
		headers: { 'CF-Connecting-IP': `10.0.0.${++ipN}` },
		body: JSON.stringify(body)
	});
}
const ENV = { LOOPS_API_KEY: 'k', LOOPS_CONTACT_TEMPLATE_ID: 'tmpl-123', TURNSTILE_SECRET_KEY: 's' };

test('Loops body carries source, replyTo, template id, default destination', async () => {
	const res = await onRequestPost({ request: post(), env: ENV });
	assert.equal(res.status, 200);
	assert.equal(calls.length, 1);
	const b = calls[0].body;
	assert.equal(calls[0].url, 'https://app.loops.so/api/v1/transactional');
	assert.equal(b.transactionalId, 'tmpl-123');
	assert.equal(b.email, 'jb@yodacom.com');
	assert.equal(b.dataVariables.source, C);
	assert.equal(b.dataVariables.replyTo, 'ada@example.com');
});

test('CONTACT_DEST_EMAIL overrides the default; research topic labelled', async () => {
	await onRequestPost({ request: post({ topic: 'Press / Media' }), env: { ...ENV, CONTACT_DEST_EMAIL: 'x@y.com' } });
	assert.equal(calls[0].body.email, 'x@y.com');
	assert.equal(calls[0].body.dataVariables.source, R);
});

test('missing template id or api key -> 503, no Loops call', async () => {
	let res = await onRequestPost({ request: post(), env: { ...ENV, LOOPS_CONTACT_TEMPLATE_ID: undefined } });
	assert.equal(res.status, 503);
	res = await onRequestPost({ request: post(), env: { ...ENV, LOOPS_API_KEY: undefined } });
	assert.equal(res.status, 503);
	assert.equal(calls.length, 0);
});

test('honeypot and dwell paths silently accept without sending', async () => {
	let res = await onRequestPost({ request: post({ website: 'http://spam' }), env: ENV });
	assert.deepEqual(await res.json(), { ok: true });
	res = await onRequestPost({ request: post({ ts: Date.now() }), env: ENV });
	assert.deepEqual(await res.json(), { ok: true });
	res = await onRequestPost({ request: post({ ts: 0 }), env: ENV });
	assert.deepEqual(await res.json(), { ok: true });
	assert.equal(calls.length, 0);
});

test('unknown topic still rejected (400)', async () => {
	const res = await onRequestPost({ request: post({ topic: 'Nope' }), env: ENV });
	assert.equal(res.status, 400);
});

test('email must be a single plain address (Reply-To header safety)', async () => {
	for (const bad of [
		'a@b.com\r\nBcc: x@y.com',
		'a@b.com\nBcc: x@y.com',
		'a@b.com, c@d.com',
		'a@b.com;c@d.com',
		'Ada <a@b.com>',
		'a b@c.com',
		'a@b.com>',
		'"a"@b.com',
		'a@b@c.com',
		'a@' + 'b'.repeat(260) + '.com'
	]) {
		const res = await onRequestPost({ request: post({ email: bad }), env: ENV });
		assert.equal(res.status, 400, JSON.stringify(bad));
	}
	assert.equal(calls.length, 0);
	const ok = await onRequestPost({ request: post({ email: 'ada+tag@sub.example.co' }), env: ENV });
	assert.equal(ok.status, 200);
});
