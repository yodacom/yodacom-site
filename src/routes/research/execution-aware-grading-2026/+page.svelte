<svelte:head>
	<title>Why a Quality Grade Must Reflect What You Can Actually Trade | Yodacom Research</title>
	<meta name="description" content="Two methodology corrections to CoinRoc's asset grading system: active-period return (not blended return) and a liquidity-aware grade cap. Why a strong backtest can now result in a lower published grade — and why that is correct." />
	<meta property="og:title" content="Why a Quality Grade Must Reflect What You Can Actually Trade | Yodacom Research" />
	<meta property="og:description" content="Execution-aware grading: how CoinRoc corrected two systematic biases in its asset grading system — blended-return distortion and liquidity-optimism — for advisors and RIAs evaluating grid strategies." />
</svelte:head>

<!-- Back link -->
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
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">July 2026 &middot; Execution-Aware Grading</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Why a Quality Grade Must Reflect What You Can Actually Trade
	</h1>
	<p class="mb-3 text-xl font-serif text-slate italic">
		Execution-aware grading: correcting for regime-gated timing and order-book depth in CoinRoc's asset grades
	</p>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		When a client asks whether a strategy &ldquo;worked,&rdquo; the honest answer depends on three things the backtest alone cannot tell you: whether the strategy was running, whether the market could fill the orders, and whether the number in front of you is simulation or reality.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Author</dt><dd>Lando &middot; Yodacom Research</dd>
		<dt class="text-slate-light">Audience</dt><dd>Financial advisors, RIAs, wealth managers</dd>
		<dt class="text-slate-light">Method</dt><dd>Year 2 blind forward test, retail-binance-us fee tier</dd>
		<dt class="text-slate-light">Full methodology</dt><dd><a href="/research/execution-aware-grading-methodology-2026" class="text-ochre-deep hover:text-ochre">Han Kessel's research report &rarr;</a></dd>
	</dl>
</header>

<!-- Article body -->
<article class="mx-auto max-w-3xl px-6 sm:px-10 pb-20 prose prose-lg prose-slate max-w-none
	prose-headings:font-serif prose-headings:text-navy-ink
	prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
	prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
	prose-p:text-slate prose-p:leading-relaxed prose-p:mb-4
	prose-strong:text-navy-deep
	prose-table:text-sm prose-th:text-navy-deep prose-th:font-semibold prose-td:text-slate
	prose-blockquote:border-ochre prose-blockquote:text-slate
	prose-hr:border-rule">

<blockquote>
<p><strong>Disclaimer</strong></p>
<p>This document is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The information herein reflects the views of the authors as of the date of publication and is subject to change without notice.</p>
<p>All performance figures, return percentages, and grade outputs referenced in this document are derived from simulated, hypothetical backtesting conducted by Yodacom Research. These results were achieved by means of the retroactive application of a model to historical data with the benefit of hindsight. Hypothetical and simulated performance results have inherent limitations and do not represent actual trading. No representation is being made that any user will or is likely to achieve results similar to those shown. Simulated results do not account for real-world factors including but not limited to slippage, partial fills, order-book depth constraints, exchange downtime, custodial risk, or fee variations across configurations. All figures reflect the retail-binance-us fee tier, Year 2 blind forward test window, under a specific grid strategy configuration. Results will differ materially at other fee tiers, capital sizes, or grid configurations.</p>
<p>Past simulated performance is not indicative of, and is not a guarantee of, future results.</p>
<p>Digital assets, including cryptocurrencies, are highly volatile and speculative. They may experience rapid and substantial price declines, including a total loss of value. Regulatory treatment of digital assets is evolving and uncertain. Digital asset markets are subject to operational, custodial, and cybersecurity risks.</p>
<p>CoinRoc is a strategy analysis and simulation tool. It is not a registered investment advisor. CoinRoc's asset grades are outputs of a quantitative grading methodology applied to simulated historical data; they are not investment recommendations, suitability assessments, or endorsements of any specific asset. Readers should consult their own financial, legal, and tax advisors before making any investment decision.</p>
<p>Information derived from third-party sources (including CoinGecko, Binance.US, and other exchange data providers) is believed to be reliable but has not been independently verified. No representation is made as to its accuracy or completeness.</p>
</blockquote>

<h2>The Fiduciary Problem with Backtests</h2>

<p>When a client asks whether a strategy &ldquo;worked,&rdquo; the honest answer depends on three things the backtest alone cannot tell you: whether the strategy was running during the period you are measuring, whether the market could actually execute the orders, and whether the performance number presented is a simulation or a live result.</p>

<p>Most crypto strategy tools stop at the simulation. CoinRoc's grading system now goes further &mdash; and the methodology behind that decision is worth understanding before recommending or dismissing any grid-based strategy.</p>

<p>This article explains two recent methodology changes to CoinRoc's asset grading system: how grades are now adjusted for regime-gated periods when the strategy is correctly inactive, and how grades are capped when an asset's order book cannot reliably support the execution implied by a clean backtest. Together, these changes represent what Yodacom Research calls execution-aware grading &mdash; a grading methodology that is explicit about when a strategy was running and whether the market can fill it.</p>

<h2>What a Blended Return Hides</h2>

<p>CoinRoc's grid strategy operates under the direction of a regime-classification system (Adaptive Grid FIS) that classifies market regimes and determines whether conditions are suitable for grid trading. When the market is strongly trending &mdash; the environment where grid strategies historically lose &mdash; the FIS pauses new grid buy orders: existing inventory continues to be managed by the strategy, but no new capital is deployed into the grid until conditions improve. This is intended design behavior, not a bug.</p>

<p>The problem arose in how the previous grading system evaluated performance: it used a blended full-period return &mdash; total portfolio return across the entire evaluation window, including periods when the FIS had correctly paused new buys. For an asset that trended down 40% while the FIS was in a paused state, the blended return absorbed that 40% directional move even though the grid strategy had deliberately not participated in it.</p>

<p>The practical distortion was significant. In the 97-asset catalog analyzed by Yodacom Research, approximately 37 assets were being hidden from Discovery by a performance filter based on this blended return metric. SQL analysis against the corrected active-period return (grid performance evaluated only in windows when the FIS classified the market as grid-appropriate) found that 27 of those 37 assets &mdash; 73% &mdash; would pass the filter under the correct metric. Six of those 27 showed positive active-period grid returns despite strongly negative blended returns.</p>

<div class="my-8 not-prose rounded border border-rule bg-paper px-5 py-4 text-sm italic leading-relaxed text-slate">
	Figure removed pending correction (2026-07-08) &mdash; the prior chart labeled its regime-classification figures as describing a live cash-hold mechanism for the specific backtest runs shown; that description was inaccurate on two counts (a fabricated mechanism name, and a liquidation claim the live engine does not do -- it pauses new buys, it does not hold to cash). A corrected figure will be republished once relabeled. See the interactive explainer below and the methodology paper for the current, accurate description.
</div>

<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Interactive Explainer &mdash; Active vs. Blended Return</div>
	<iframe
		src="/research/execution-aware-grading-2026/explainer-active-vs-blended.html"
		title="Interactive explainer — active vs. blended return"
		class="w-full rounded border border-rule"
		style="height: 640px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<table>
<thead><tr><th>Symbol</th><th>Blended Return</th><th>Active-Period Return</th><th>Regime-Active % (retrospective classifier)</th></tr></thead>
<tbody>
<tr><td>SOL/USDT</td><td>-45.5%</td><td>-9.8%</td><td>77.0%</td></tr>
<tr><td>LINK/USDT</td><td>-39.6%</td><td>+2.1%</td><td>71.2%</td></tr>
<tr><td>BCH/USDT</td><td>-27.9%</td><td>+3.9%</td><td>86.3%</td></tr>
<tr><td>DOGE/USDT</td><td>-30.1%</td><td>-5.1%</td><td>71.2%</td></tr>
</tbody>
</table>

<p class="text-xs text-slate-light italic">Regime-Active % is computed by a separate, after-the-fact classification pass over historical candles &mdash; not the gate that determined trading activity in the backtests shown here.</p>

<p><em>All figures are simulated backtest results from a Year 2 blind forward test. Past simulated performance is not indicative of future results. All figures reflect the retail-binance-us fee tier, Year 2 blind forward test window, under a specific grid strategy configuration. Results will differ at other fee tiers, capital sizes, or grid configurations.</em></p>

<p>The BTC case provides a useful validation. BTC's active-period return equals its blended return (-40.2% both) because the retrospective regime classifier used to compute the active-period window found no candles in the period it would exclude &mdash; not because the simulation itself paused the strategy. (The specific backtests referenced in this article used a fixed grid-engagement setting across all symbols; see the methodology paper, &sect;2.1, for the distinction between that test configuration and the FIS's designed pause-and-resume behavior.) BTC is correctly hidden regardless of which metric is used. The corrected methodology rescues assets that were wrongly penalized; it does not rescue assets that genuinely fail on the grid mechanism's own terms.</p>

<p>For due-diligence purposes: the appropriate question to ask about any grid strategy grade is not &ldquo;what was the portfolio return over this period?&rdquo; but &ldquo;what was the grid mechanism's return during the windows when it was running?&rdquo; These can diverge substantially in trending markets. A grade that blends the two gives you a number that corresponds to neither question cleanly.</p>

<h2>Why a Beautiful Backtest Is Not Always a Reliable Grade</h2>

<p>The second methodology change addresses a different dimension of the simulation-to-execution gap: order book depth.</p>

<p>Grid trading places multiple simultaneous resting limit orders across a defined price range. Each individual fill is relatively small, but fills must occur at multiple price levels for the strategy to function as backtested. The standard backtest assumption &mdash; fills at the grid price with no market impact &mdash; is reasonable for assets with deep, liquid order books. It is a material assumption violation for assets whose total global 24-hour trading volume is in the low millions of dollars.</p>

<p>Prior to this methodology update, CoinRoc's grade composite included a liquidity component carrying a 5% weight, but that component had null values for 91 of 93 graded assets due to a data collection issue. The practical result: 91 assets were being graded almost entirely on simulated return and risk-adjusted ratios, with no signal about whether fills at the simulated price were achievable in the actual market.</p>

<p>The corrected methodology introduces a composite liquidity score (0&ndash;100) drawing on four signals: 30-day median global 24-hour volume (50% weight, currently proxied by a single-day snapshot pending 30-day history accumulation), bid/ask spread as a percentage (25%), order book depth at &plusmn;2% (20%), and estimated slippage for a $10,000 order (5%). Assets with a composite score below 35 &mdash; roughly equivalent to under $5 million in daily global volume &mdash; are flagged as thin liquidity.</p>

<p>For thin-liquidity assets whose simulated backtest would otherwise produce a grade of A or B, a grade cap is applied at B-. The asset remains visible in the Discovery catalog; its grade renders with a disclosure label and tooltip explaining that the grade reflects actual execution risk, not raw backtest return.</p>

<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure &mdash; Liquidity Score and Grade Cap</div>
	<img src="/research/execution-aware-grading-2026/fig-liquidity-cap.png" alt="Backtest score vs. execution-adjusted score for 5 thin-liquidity assets, with B- cap ceiling shown" class="w-full rounded border border-rule" />
	<div class="text-xs text-slate-light mt-2 italic">Simulated / Illustrative Data. Backtest vs. execution-adjusted score, B- cap ceiling at composite score 64. Yodacom Research.</div>
</div>

<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Interactive Explainer &mdash; Why a Thin Order Book Can't Fill a Gorgeous Backtest</div>
	<iframe
		src="/research/execution-aware-grading-2026/explainer-thin-orderbook-fill.html"
		title="Interactive explainer — thin order book fill mechanics"
		class="w-full rounded border border-rule"
		style="height: 640px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<p>This is the counterintuitive implication of execution-aware grading: a strong backtest can result in a lower published grade. An asset that simulates at A-level return on a thin order book does not receive an A &mdash; because an A implies an execution quality the order book may not be able to support at the simulated scale. The simulated return becomes an optimistic scenario estimate under idealized fill conditions &mdash; not a characterization of what the strategy will achieve in live trading.</p>

<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure &mdash; Thin-Liquidity Flag Composite</div>
	<img src="/research/execution-aware-grading-2026/fig-thin-flag.png" alt="Composite weight breakdown, volume threshold bands, and 32-of-97 catalog stat panel" class="w-full rounded border border-rule" />
	<div class="text-xs text-slate-light mt-2 italic">Simulated / Illustrative Data. Composite weights, volume threshold bands, 32/97 catalog breakdown. Yodacom Research.</div>
</div>

<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Interactive Explainer &mdash; The Grade Cap</div>
	<iframe
		src="/research/execution-aware-grading-2026/explainer-grade-cap.html"
		title="Interactive explainer — the grade cap"
		class="w-full rounded border border-rule"
		style="height: 640px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<p>In the full 97-asset catalog, 32 assets currently carry the thin-liquidity flag. None of the major assets &mdash; BTC, ETH, SOL, LINK, AVAX &mdash; are affected. The flagged assets are micro-cap and small-cap positions where meaningful grid execution at scale is not supported by current order book depth.</p>

<h2>What This Means for Client Conversations</h2>

<p>The practical implication for advisors is this: when a client asks about a specific asset's grade in CoinRoc, the grade now tells a more complete story than a raw backtest number would.</p>

<p>A B- with a thin-liquidity disclosure does not mean the asset is unsuitable. It means the simulated return should be treated as an optimistic scenario; actual execution at meaningful position sizes may produce worse fills. For a client running a smaller grid configuration, the asset may be entirely appropriate &mdash; the grade is calibrated to a general execution risk level, not a specific capital amount. A deployment-time warning that accounts for the interaction between position size and order book depth is on the methodology roadmap.</p>

<p>An asset hidden from Discovery with the label &ldquo;Grid underperforms at your fee tier even in favorable market conditions&rdquo; is a genuine grid mechanism failure &mdash; not a victim of market direction during a paused period. That distinction matters for the client conversation: the first category is an asset worth investigating at different configurations; the second category failed the grid's own test when it had every opportunity to succeed.</p>

<h2>Methodology Transparency as a Fiduciary Signal</h2>

<p>The documentation driving these changes &mdash; published in full in the Yodacom Research report &mdash; quantifies precisely what changed, why the previous metric was measuring the wrong thing, and where the current methodology still has limitations. The 30-day volume proxy is documented as a single-day snapshot pending accumulation of collection history. The flat-slippage assumption in the backtest engine is explicitly bounded. The FIS regime accuracy question is named as a separate validation problem that remains open.</p>

<p>That level of disclosure is uncommon in crypto strategy tools. It is also what a fiduciary standard requires: understanding the assumptions and their limits, not just the headline number.</p>

<p>Execution-aware grading is not a claim that the system predicts actual returns. It is a claim that the grade measures what it says it measures &mdash; and documents clearly where it cannot.</p>

<hr />

<blockquote>
<p><strong>Disclaimer</strong></p>
<p>This document is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The information herein reflects the views of the authors as of the date of publication and is subject to change without notice.</p>
<p>All performance figures, return percentages, and grade outputs referenced in this document are derived from simulated, hypothetical backtesting conducted by Yodacom Research. These results were achieved by means of the retroactive application of a model to historical data with the benefit of hindsight. Hypothetical and simulated performance results have inherent limitations and do not represent actual trading. No representation is being made that any user will or is likely to achieve results similar to those shown. Simulated results do not account for real-world factors including but not limited to slippage, partial fills, order-book depth constraints, exchange downtime, custodial risk, or fee variations across configurations. All figures reflect the retail-binance-us fee tier, Year 2 blind forward test window, under a specific grid strategy configuration. Results will differ materially at other fee tiers, capital sizes, or grid configurations.</p>
<p>Past simulated performance is not indicative of, and is not a guarantee of, future results.</p>
<p>Digital assets, including cryptocurrencies, are highly volatile and speculative. They may experience rapid and substantial price declines, including a total loss of value. Regulatory treatment of digital assets is evolving and uncertain. Digital asset markets are subject to operational, custodial, and cybersecurity risks.</p>
<p>CoinRoc is a strategy analysis and simulation tool. It is not a registered investment advisor. CoinRoc's asset grades are outputs of a quantitative grading methodology applied to simulated historical data; they are not investment recommendations, suitability assessments, or endorsements of any specific asset. Readers should consult their own financial, legal, and tax advisors before making any investment decision.</p>
<p>Information derived from third-party sources (including CoinGecko, Binance.US, and other exchange data providers) is believed to be reliable but has not been independently verified. No representation is made as to its accuracy or completeness.</p>
</blockquote>

<h2>Read the Full Methodology</h2>

<p>Han Kessel's full research report &mdash; including the complete liquidity score composite, the active-period return methodology, data caveats, and limitations &mdash; is available at <a href="/research/execution-aware-grading-methodology-2026">yodacom.com/research</a>.</p>

<hr />

<p><em>LANDO-EXEC-GRADING-ADVISOR-01 &mdash; Lando, Senior Content Writer &amp; Strategist, Yodacom AI Team. Matlock compliance review completed 2026-06-13 (CLEARED-WITH-EDITS, Gate 1). Source: han-exec-grading-research-report-2026-06-13.md, Sections 1&ndash;6.</em></p>

</article>
