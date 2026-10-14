<svelte:head>
	<title>Exchange Costs and Maker/Taker Execution for Grid Trading | Yodacom Research</title>
	<meta name="description" content="How standard GTC orders can fill as taker in grid trading, and what post-only execution changes. Fee figures and simulated return results are withdrawn." />
	<meta property="og:title" content="Exchange Costs: The Hidden Variable in Grid Trading Performance | Yodacom Research" />
	<meta property="og:description" content="How standard GTC orders can fill as taker in grid trading, and what post-only execution changes. Fee figures and simulated return results are withdrawn." />
</svelte:head>

<!-- Back link + breadcrumb -->
<div class="mx-auto max-w-3xl px-6 sm:px-10 pt-10">
	<a href="/research" class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep transition hover:text-ochre">
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
		All research
	</a>
</div>

<!-- Article header -->
<header class="mx-auto max-w-3xl px-6 sm:px-10 pt-8 pb-4">
	<div class="mb-5 flex flex-wrap items-center gap-2">
		<span class="rounded-full bg-teal-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-teal-700">Published</span>
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">June 2026 · Paper B5</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Exchange Costs and Maker/Taker Execution for Grid Trading
	</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		This paper explains the maker/taker execution gap in retail grid trading. Fee figures on this page have been withdrawn: several exchanges changed their fee schedules in 2026 and our dollar estimates used an inconsistent volume basis. We will republish with current, sourced fee schedules. Simulated return results have also been withdrawn.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Authors</dt><dd>Han Kessel &middot; Jeremy J. Black, Editor</dd>
		<dt class="text-slate-light">Status</dt><dd>Fee figures withdrawn</dd>
		<dt class="text-slate-light">Results</dt><dd>Simulated results withdrawn</dd>
	</dl>
</header>

<!-- Article body -->
<article class="mx-auto max-w-3xl px-6 sm:px-10 pb-20 prose prose-lg prose-slate max-w-none
	prose-headings:font-serif prose-headings:text-navy-ink
	prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
	prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
	prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-h4:font-semibold
	prose-p:text-slate prose-p:leading-relaxed prose-p:mb-4
	prose-strong:text-navy-deep
	prose-table:text-sm
	prose-th:text-navy-deep prose-th:font-semibold prose-th:bg-cream/50
	prose-td:text-slate
	prose-blockquote:border-ochre prose-blockquote:text-slate
	prose-code:text-navy-deep prose-code:bg-cream/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
	prose-hr:border-rule">

<p><strong>Fee figures on this page have been withdrawn: several exchanges changed their fee schedules in 2026 and our dollar estimates used an inconsistent volume basis. We will republish with current, sourced fee schedules.</strong></p>

<hr />

<h2>Abstract</h2>

<p>Exchange fee structures and order execution type are two of the most controllable cost variables in a retail grid trading strategy. This page explains the maker/taker execution gap and documents the post-only (GTX) change in the CoinRoc BinanceUSAdapter. The fee comparison, the dollar cost estimates and the walk-forward return results this paper once reported have been withdrawn.</p>

<hr />

<h2>1. Why Grid Strategies Are Maker Strategies</h2>

<p>A grid strategy places limit orders at predetermined price levels. A limit buy order placed below the current market price rests in the order book, and when price falls to it, the order executes as a maker fill. That is the theory. The practice differs in one specific scenario: if price has moved past a level between bars, then under GTC (Good Till Cancelled) order type the order executes immediately against existing book liquidity, as a taker fill. The maker fee assumption is wrong for that fill, and nothing in a standard adapter flags it.</p>

<p>The GTX (post-only) order type corrects this: the exchange rejects orders that would execute as taker before accepting them. The open question is the net effect of those rejections on portfolio performance, and that is not something we can state today.</p>

<h2>2. Withdrawn Results</h2>

<p>Earlier versions of this page reported a GTX rejection rate, simulated returns, per-fold comparisons, and a share of grid fills that would execute as taker. We have withdrawn them. The simulator placed orders once per daily bar, so those figures reflected its order-placement timing rather than a measured property of live markets. We will publish a rate or a return comparison only if the rebuilt simulator, or live order data, can support it.</p>

<p>Earlier versions also carried exchange fee tables, annual fee-cost estimates and an exchange selection matrix. Those are withdrawn for the reason in the note above.</p>

<h2>3. Implementation: Post-Only Execution in CoinRoc</h2>

<p><strong>BinanceUSAdapter: GTC to GTX.</strong> In <code>src/lib/trading/adapters/BinanceUSAdapter.ts</code>, the <code>placeOrder()</code> function now passes <code>timeInForce: 'GTX'</code> on all limit orders. A dedicated catch branch handles Binance error code &minus;5022 (GTX post-only rejection code), logging it at INFO level. The adapter returns <code>success: false, status: 'rejected'</code> for GTX rejections. This change was made on 2026-05-02.</p>

<hr />

<p><em>Kessel, H., &amp; Black, J. J. (2026). Exchange Costs and Maker/Taker Execution for Grid Trading. Yodacom Research.</em></p>

<p><em>This paper is for research and educational purposes only and does not constitute investment advice. Exchange availability and fee schedules are subject to change; verify current rates at each exchange before making trading decisions.</em></p>

</article>
