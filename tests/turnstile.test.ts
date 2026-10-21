// @ts-nocheck -- runs under node --test; repo has no @types/node
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { isMisconfiguredSecret, verifyTurnstile } from '../functions/lib/turnstile.ts';

const realFetch = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = realFetch;
});

test('dummy/placeholder secret is refused on every host except localhost/127.0.0.1', () => {
	const dummy = '2x0000000000000000000000000000000AA';
	assert.equal(isMisconfiguredSecret('https://yodacom.com/api/contact', dummy), true);
	assert.equal(isMisconfiguredSecret('https://www.yodacom.com./api/contact', dummy), true);
	assert.equal(isMisconfiguredSecret('https://yodacom-site.pages.dev/api/contact', dummy), true);
	assert.equal(isMisconfiguredSecret('https://preview.yodacom-site.pages.dev/api/contact', 'placeholder'), true);
	assert.equal(isMisconfiguredSecret('http://localhost:8788/api/contact', dummy), false);
	assert.equal(isMisconfiguredSecret('http://127.0.0.1:8788/api/contact', dummy), false);
	assert.equal(isMisconfiguredSecret('https://yodacom.com/api/contact', '0x4AAAAAAAreal'), false);
	assert.equal(isMisconfiguredSecret('not a url', '0x4AAAAAAAreal'), true); // unparseable: fail closed
});

test('dummy secret skips hostname/action only (CF test verdict is localhost/test)', async () => {
	globalThis.fetch = async () =>
		new Response(JSON.stringify({ success: true, hostname: 'localhost', action: 'test' }));
	assert.equal(await verifyTurnstile('tok', '1x0000000000000000000000000000000AA', 'contact'), true);
	assert.equal(await verifyTurnstile('tok', '0x4AAAAreal', 'contact'), false);
});

test('network error fails closed', async () => {
	globalThis.fetch = async () => {
		throw new Error('boom');
	};
	assert.equal(await verifyTurnstile('tok', '0x4AAAAreal', 'subscribe'), false);
});

test('siteverify request carries an abort signal with a ~5 s timeout', async () => {
	let signal;
	globalThis.fetch = async (_u, init) => {
		signal = init.signal;
		return new Response(JSON.stringify({ success: true, hostname: 'yodacom.com', action: 'contact' }));
	};
	await verifyTurnstile('tok', '0x4AAAAreal', 'contact');
	assert.ok(signal instanceof AbortSignal, 'fetch must be given an AbortSignal');
	assert.equal(signal.aborted, false);
});

test('a hung siteverify aborts and fails closed', async () => {
	const realTimeout = AbortSignal.timeout;
	AbortSignal.timeout = (ms) => {
		assert.equal(ms, 5000);
		const c = new AbortController();
		setTimeout(() => c.abort(), 20); // ref'd timer keeps the event loop alive
	};
	try {
		globalThis.fetch = (_u, init) =>
			new Promise((_res, rej) => init.signal.addEventListener('abort', () => rej(new Error('aborted'))));
		assert.equal(await verifyTurnstile('tok', '0x4AAAAreal', 'contact'), false);
	} finally {
		AbortSignal.timeout = realTimeout;
	}
});

test('both forms pass their action to turnstile.render()', async () => {
	const { readFileSync } = await import('node:fs');
	const sub = readFileSync(new URL('../src/lib/components/SubscribeForm.svelte', import.meta.url), 'utf8');
	const con = readFileSync(new URL('../src/routes/contact/+page.svelte', import.meta.url), 'utf8');
	assert.match(sub, /\.render\([^)]*sitekey:[^}]*action:\s*'subscribe'/s);
	assert.match(con, /\.render\([^)]*sitekey:[^}]*action:\s*'contact'/s);
});
