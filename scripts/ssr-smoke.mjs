#!/usr/bin/env node
/**
 * SSR crawlability smoke test ("Obi Gate" — SSR content check)
 *
 * WHAT THIS PREVENTS
 * -------------------
 * On 2026-07-25 the CoinRoc blog and jjblack.com essays were found rendering
 * client-side-only: the real content was loaded inside onMount()/an $effect
 * (browser-only), so SSR/prerender produced nothing but a loading skeleton.
 * Crawlers (and anyone with JS disabled) saw ZERO real content even though
 * HTTP status was a healthy 200. No existing check (build success, uptime
 * ping) caught it. yodacom-site's research articles are hand-built Svelte
 * pages with no dynamic component loading in onMount/$effect (audited clean
 * 2026-07-25), but this guards against that pattern being introduced later.
 *
 * This script curls the RAW server-rendered/prerendered HTML for a fixed
 * list of public routes and asserts:
 *   1. HTTP 200
 *   2. At least one "must contain" string is present (real content marker)
 *   3. None of the "must NOT contain" skeleton/loading markers are present
 *   4. A minimum byte-size floor is met (skeleton shells are tiny)
 *
 * No headless browser. No JS execution. This is deliberately the same view
 * a crawler gets — if a crawler wouldn't see it, this test wouldn't either.
 *
 * USAGE
 * -----
 *   node scripts/ssr-smoke.mjs                          # BASE_URL=http://localhost:4173
 *   SMOKE_BASE_URL=https://yodacom.com node scripts/ssr-smoke.mjs
 */

const BASE_URL = process.env.SMOKE_BASE_URL ?? 'http://localhost:4173';

const GENERIC_SKELETON_MARKERS = [
	'animate-pulse',
	'animate-spin',
	'aria-label="Loading post"',
	'aria-label="Loading"'
];

const MIN_ARTICLE_BYTES = 15000;

const ROUTES = [
	{
		path: '/',
		label: 'Homepage',
		mustContain: ['Independent quantitative research'],
		minBytes: 5000
	},
	{
		path: '/research/stablecoins-for-autonomous-agents-2026',
		label: 'Research article — stablecoins-for-autonomous-agents-2026',
		mustContain: ['When Machines Transact'],
		minBytes: MIN_ARTICLE_BYTES
	},
	{
		path: '/research/fis-regime-engine',
		label: 'Research article — fis-regime-engine',
		mustContain: ['Understanding the RXI Regime Engine'],
		minBytes: MIN_ARTICLE_BYTES
	},
	{
		path: '/research/grid-trading-walk-forward-2026',
		label: 'Research article — grid-trading-walk-forward-2026',
		mustContain: ['What 13 Years of Crypto Data Actually Shows'],
		minBytes: MIN_ARTICLE_BYTES
	}
];

async function checkRoute(route) {
	const url = `${BASE_URL}${route.path}`;
	const failures = [];
	let res;
	let body = '';

	try {
		res = await fetch(url, {
			headers: { 'User-Agent': 'Mozilla/5.0 (ssr-smoke-test; +obi-gate)' }
		});
		body = await res.text();
	} catch (err) {
		return { route, ok: false, failures: [`Request failed: ${err.message}`] };
	}

	if (res.status !== 200) {
		failures.push(`Expected HTTP 200, got ${res.status}`);
	}

	const byteLength = Buffer.byteLength(body, 'utf8');
	const minBytes = route.minBytes ?? 0;
	if (byteLength < minBytes) {
		failures.push(
			`Raw HTML is only ${byteLength} bytes (expected >= ${minBytes}). ` +
				'This is the size signature of a skeleton/loading shell, not real content.'
		);
	}

	for (const needle of route.mustContain ?? []) {
		if (!body.includes(needle)) {
			failures.push(`Missing expected content string: "${needle}"`);
		}
	}

	const forbidden = [...GENERIC_SKELETON_MARKERS, ...(route.mustNotContain ?? [])];
	for (const marker of forbidden) {
		if (body.includes(marker)) {
			failures.push(`Found skeleton/loading marker in raw HTML: "${marker}"`);
		}
	}

	return { route, ok: failures.length === 0, failures, byteLength, status: res.status };
}

async function main() {
	console.log(`SSR smoke test — base URL: ${BASE_URL}\n`);

	const results = await Promise.all(ROUTES.map(checkRoute));

	let anyFailed = false;
	for (const result of results) {
		const { route, ok, failures, byteLength, status } = result;
		if (ok) {
			console.log(`  PASS  ${route.path.padEnd(55)} (${status}, ${byteLength}B)  ${route.label}`);
		} else {
			anyFailed = true;
			console.log(`  FAIL  ${route.path.padEnd(55)}  ${route.label}`);
			for (const f of failures) {
				console.log(`          - ${f}`);
			}
		}
	}

	console.log('');
	if (anyFailed) {
		console.error('SSR smoke test FAILED — one or more routes are SEO-invisible or broken.');
		console.error('See CoinRoc/jjblack.com SSR regression (2026-07-25) for the failure class this guards.');
		process.exit(1);
	}

	console.log('SSR smoke test passed — all routes serve real content in raw HTML.');
}

main();
