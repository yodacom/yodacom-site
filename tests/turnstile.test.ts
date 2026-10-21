// @ts-nocheck -- runs under node --test; repo has no @types/node
import { test, afterEach } from 'node:test';
import assert from 'node:assert/strict';
import { isMisconfiguredSecret, verifyTurnstile } from '../functions/lib/turnstile.ts';

const realFetch = globalThis.fetch;
afterEach(() => {
	globalThis.fetch = realFetch;
});

test('dummy/placeholder secret is only "misconfigured" on production hosts', () => {
	const dummy = '2x0000000000000000000000000000000AA';
	assert.equal(isMisconfiguredSecret('https://yodacom.com/api/contact', dummy), true);
	assert.equal(isMisconfiguredSecret('https://www.yodacom.com./api/contact', dummy), true);
	assert.equal(isMisconfiguredSecret('https://yodacom-site.pages.dev/api/contact', dummy), false);
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
