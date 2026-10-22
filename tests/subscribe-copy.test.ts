// @ts-nocheck -- runs under node --test; repo has no @types/node
// Pins the SubscribeForm success copy. The /api/subscribe handler returns the
// identical { ok: true } for a new subscriber (email sent) and an already-confirmed
// one (nothing sent), so the UI must not claim an unconditional send.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const src = readFileSync(new URL('../src/lib/components/SubscribeForm.svelte', import.meta.url), 'utf8');

test('success copy is conditional and covers the already-confirmed case', () => {
	assert.match(src, /If this address is not already subscribed/);
	assert.match(src, /If you already confirmed, you are all set/);
});

test('success copy never claims an unconditional send', () => {
	assert.doesNotMatch(src, /Check your inbox to confirm\. We just sent a link/);
});
