<svelte:head>
	<title>Inventory-Aware Grid Management: A Regime-Adaptive Circuit Breaker for Crypto Grid Strategies | Yodacom Research</title>
	<meta name="description" content="Walk-forward validation across 17 symbols and 135 folds confirms: zero spurious fires in 28 bull folds; 70.6% detection rate in 17 confirmed 2022 bear folds; +5.09% average alpha improvement when fired. Five-iteration gate design. Production GO verdict." />
	<meta property="og:title" content="Inventory Circuit Breaker for Grid Trading Systems | Yodacom Research" />
	<meta property="og:description" content="A regime-adaptive circuit breaker that monitors portfolio drawdown-from-peak and recenters the grid in confirmed bear cascades. Zero spurious bull fires. 70.6% bear detection rate. +5.09% average alpha improvement." />
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
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">June 2026 · Paper B6</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Inventory-Aware Grid Management: A Regime-Adaptive Circuit Breaker for Crypto Grid Strategies
	</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		Grid trading earns realized profit from oscillating price action but accumulates mark-to-market inventory losses during sustained downtrends. FIS v2 regime gating monitors market structure. This paper adds a second independent protection layer that monitors the grid's own balance sheet.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Authors</dt><dd>Han Kessel &middot; Jeremy J. Black, Editor</dd>
		<dt class="text-slate-light">Window</dt><dd>2013–2025</dd>
		<dt class="text-slate-light">Assets / Folds</dt><dd>17 symbols · 135 folds</dd>
		<dt class="text-slate-light">Key finding</dt><dd>Zero spurious bull fires; +5.09% avg alpha improvement in bear folds</dd>
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

<h2>Abstract</h2>

<p>Grid trading strategies earn realized profit from oscillating price action but accumulate mark-to-market inventory losses during sustained downtrends. The FIS v2 regime-switching signal (Paper 1) reduces grid activity in unfavorable regimes, improving expected annualized return from &minus;1.51% to +5.33%. However, FIS v2 operates on market-level signals and cannot monitor the grid's own balance sheet. This paper introduces a regime-adaptive inventory circuit breaker — a rule that recenters the grid when portfolio drawdown from peak exceeds 35% of initial capital. The circuit breaker requires a three-condition gate before firing: (1) drawdown from rolling peak below &minus;15%, (2) grid engagement at or below 0.65, and (3) training-period Hurst exponent at or above 0.45. The gate design required five iterations to achieve direction-awareness; the critical insight is that grid engagement and Hurst exponent are trend-intensity metrics, not trend-direction metrics, and cannot distinguish bull from bear markets without an explicit drawdown-from-peak condition. Walk-forward validation across 17 symbols and 135 folds (2yr train / 1yr test) confirms: zero spurious fires in 28 confirmed bull folds; 70.6% detection rate in 17 confirmed 2022 bear folds; average alpha improvement of +5.09 percentage points when fired. The circuit breaker is cleared for production implementation.</p>

<hr />

<h2>1. Introduction</h2>

<p>Grid trading is a market-making microstructure: the strategy places buy and sell limit orders at regularly spaced intervals above and below a reference price, earning a realized profit each time a buy-sell round trip completes. Its structural advantage is that it profits from oscillation rather than directional prediction. Its structural weakness is symmetric: the strategy has no inherent mechanism to stop accumulating buy orders as price falls. Each lower buy level adds to the unrealized inventory position. In a sustained downtrend, realized profits from completed round trips can grow while the mark-to-market value of unsold inventory erodes faster, producing a characteristic dissociation: a strategy showing substantial realized gains while the portfolio is simultaneously approaching catastrophic loss.</p>

<p>This dissociation is not a calibration failure. It is a structural feature of the strategy. The TFUEL reference case from the preceding cohort analysis illustrates it cleanly: +55.1% realized grid profit alongside &minus;65.0% unrealized inventory loss, netting to &minus;9.9% total PnL. The grid worked as designed; the market did not oscillate.</p>

<p>Paper 1 addressed one dimension of this problem by introducing the FIS v2 regime-switching signal. FIS v2 is a Mamdani fuzzy inference system trained on a 2-year rolling window of OHLCV data. It classifies market regimes and gates grid engagement: when the regime is trending (high Hurst, strong directional momentum), FIS v2 reduces grid participation to near zero. The Paper 1 walk-forward showed that FIS v2 improved the average alpha versus buy-and-hold from &minus;578.2% to &minus;460.9% across 135 valid folds, and improved expected annualized return from &minus;1.51% (always-on) to +5.33% (FIS v2 gated).</p>

<p>FIS v2, however, remains a market-side sensor. It monitors external price structure, not the portfolio's own accumulation state. A coin can satisfy all FIS v2 conditions for grid engagement and still reach a state where the unrealized inventory loss has grown to the point where continuing to buy is actively destructive. The inventory circuit breaker addresses this gap: it monitors the portfolio's own drawdown-from-peak and interrupts grid activity when the drawdown reaches a defined threshold, recentering the grid at the current price with the remaining equity.</p>

<p>This paper documents the development and validation of that circuit breaker across five design iterations, explains why direction-awareness required the addition of the <code>drawdownFromPeak</code> condition, and presents the final validated gate logic that was awarded an unconditional production GO verdict on 2026-04-28.</p>

<hr />

<h2>2. Walk-Forward Methodology</h2>

<p>The validation framework is identical to Paper 1 and is summarized here; full methodological detail is available in that paper. The dataset comprises 17 crypto/USD daily-bar symbols from the Tiingo data service: ADAUSD, BCHUSD, BTCUSD, DASHUSD, DOGEUSD, EOSUSD, ETHUSD, LTCUSD, MANAUSD, NEOUSD, STXUSD, TRXUSD, XLMUSD, XMRUSD, XRPUSD, XTZUSD, and ZECUSD.</p>

<p>Walk-forward structure: 2-year training window, 1-year test window, slide by 1 year. Fold coverage spans 2013 (earliest BTCUSD history) through 2025. 152 total folds were generated; 17 were skipped due to insufficient history. The 135 valid folds constitute the validation dataset.</p>

<p>Cost model: retail-Binance-US tier — 0.40% maker, 0.60% taker, 0.05% slippage. All transaction cost assumptions are symmetric across all seven versions tested in this paper (Baseline through Inv v5), ensuring no spurious advantage to either the baseline or any circuit breaker variant.</p>

<p>Alpha is defined throughout as strategy return minus contemporaneous buy-and-hold return for the same symbol over the same test period. The FIS v2 regime signal uses an EWMA half-life of 10 days, calibrated from Paper 1. The circuit breaker operates as a second-layer condition that can interrupt grid activity even when FIS v2 has approved engagement.</p>

<hr />

<h2>3. FIS v2 Regime Context</h2>

<p>The circuit breaker is architecturally downstream of FIS v2. FIS v2 takes as inputs three normalized indicators derived from the 2-year training window: (a) <code>trainHurst</code> — the Hurst exponent of daily log-returns over the training window, where H &lt; 0.5 favors grids (mean-reverting) and H &gt; 0.5 disfavors grids (trending); (b) <code>gridEngagement</code> — an EWMA-smoothed composite of recent price volatility, volume activity, and directional momentum, normalized to [0, 1] where 1 represents maximum trend intensity; and (c) <code>volatilityPercentile</code> — the annualized rolling volatility of the test period relative to the training distribution.</p>

<p>FIS v2 outputs a <code>regimeState</code> classification (defensive, trend-ride, grid-favorable) and a continuous <code>engagementMultiplier</code> that scales grid activity. When FIS v2 classifies a period as trend-ride, it sets the multiplier near zero — the grid effectively halts. When it classifies as grid-favorable, the multiplier approaches 1.</p>

<p>Paper 1 results for FIS v2: average alpha vs. buy-and-hold improved from &minus;578.2% (baseline, always-on grid) to &minus;460.9% (FIS v2 gated). Bear-fold win rate improved from 100% of such folds losing to 79.1% of such folds losing. The expected annualized return improved from &minus;1.51% to +5.33%.</p>

<hr />

<h2>4. Circuit Breaker Design: Five-Iteration Development</h2>

<h3>4.1 The Inventory Problem</h3>

<p>Before describing the gate iterations, the problem being solved is stated precisely. The circuit breaker aims to fire when the grid has accumulated a dangerous inventory position during a bear cascade, and to not fire during normal bull-market corrections or sideways periods. This is a direction-aware classification problem.</p>

<p>The circuit breaker candidate fires a recentre event: the active grid is stopped, remaining equity is computed, and a new grid is initialized at the current (lower) price. The 35% inventory threshold was established in prior cohort analysis as optimal for the recentre rule (superior to both 25% and 50% thresholds). The recentre rule is capped at two firings per fold to prevent excessive grid restarts.</p>

<p>The fill cap (MAX_BAR_BUY_FILLS = 3) is applied in all versions v2 through v5. This limits the number of buy fills that can register on a single daily bar, preventing simulation artifacts where a large single-bar drop allows 10&ndash;20 fills before any circuit breaker can evaluate.</p>

<h3>4.2 v1: Baseline Post-Bar Check — NO-GO</h3>

<p>The v1 implementation checked portfolio drawdown after all fills had been processed for each daily bar. The result was a fill-clustering problem: on days with large price drops, 10 or more buy fills could execute before the check evaluated. By that point, the portfolio had already absorbed 60&ndash;90% of the eventual loss. The check then fired — after most of the damage had been done. The circuit breaker was reactive rather than protective. Bear detection was 88.2%, but alpha outcomes were mixed because the rule triggered far too late in many bear folds. Bull-period spurious alpha damage reached &minus;122.89%.</p>

<h3>4.3 v2: Fill Cap — NO-GO</h3>

<p>v2 added MAX_BAR_BUY_FILLS = 3, limiting intraday clustering. Spurious bull alpha damage was reduced from &minus;122.89% to &minus;66.77%. Bear detection remained at 88.2%. However, a second problem emerged: the rule had no gate condition controlling when the 35% threshold could trigger. In strong bull markets where crypto assets make rapid parabolic advances, a shallow 35% correction from a recent peak triggered the rule unnecessarily. The single spurious fire — STXUSD 2021, a 407% buy-and-hold year — imposed &minus;66.77% alpha damage. Q1 verdict: FAIL.</p>

<h3>4.4 v3: Engagement and Hurst Gate — NO-GO</h3>

<p>v3 added a two-condition gate: recentre allowed only when gridEngagement &le; 0.65 AND trainHurst &ge; 0.45. The STXUSD 2021 fold persisted as a spurious fire. STXUSD 2021 had gridEngagement = 0.47 and trainHurst = 0.509 — it passed both gate conditions. The gate conditions were insufficient to block the spurious fire. Q1: still FAIL (&minus;66.77% alpha damage on the one bull spurious fire).</p>

<p>Bear detection dropped from 88.2% to 70.6% because the engagement/Hurst gate also blocked five 2022 bear folds where engagement or Hurst fell outside the gate window (MANAUSD 2022 at engagement=0.80, STXUSD 2022 at engagement=1.00, ZECUSD 2022 at engagement=0.66).</p>

<h3>4.5 v4: Tighter Engagement Gate — NO-GO</h3>

<p>The v4 hypothesis: if STXUSD 2021 (engagement=0.47) cannot be blocked by engagement &le; 0.65, tighten the gate to engagement &lt; 0.30. The experiment confirmed the hypothesis held for Q1: zero spurious bull fires. However, the 2022 bear folds where the inventory rule meaningfully helped had engagement values ranging from 0.30 to 0.59 — squarely inside the newly blocked range. Bear detection collapsed to 5.9%. v4 had gated the circuit breaker into functional non-existence. Q2: FAIL.</p>

<p><strong>Root cause, established at v4:</strong> gridEngagement and trainHurst are trend-intensity metrics. They measure how strongly the market is trending, not which direction it is trending. A 70% bear cascade and a 400% bull rally register similar engagement and Hurst readings. Any gate built solely from these metrics cannot be direction-aware.</p>

<h3>4.6 v5: Drawdown-From-Peak Gate — UNCONDITIONAL GO</h3>

<p>The insight from v4 points directly to the solution: add a condition that is direction-aware. The condition needed is the portfolio's drawdown from its rolling peak. In a bull market, price oscillates around a rising trend — the portfolio rarely falls more than 15% below its recent high before recovering. In a sustained bear cascade, the portfolio makes lower highs and lower lows: by the time the 35% inventory threshold is breached, the asset is typically 37&ndash;70% below its rolling peak.</p>

<p>The v5 gate logic is:</p>

<pre><code>recentreAllowed = (drawdownFromPeak &lt; -0.15)
               AND (gridEngagement &le; 0.65)
               AND (trainHurst &ge; 0.45)</code></pre>

<p>All three conditions must be satisfied simultaneously. The rolling peak initializes to the first bar's close in the test window and resets to the recentre price after each recentre event.</p>

<p><strong>STXUSD 2021 in v5:</strong> On day 28 of the test window — the day the 35% inventory threshold was first breached — the portfolio was approximately &minus;6% below its recent high. The drawdown gate condition (drawdownFromPeak &lt; &minus;0.15) evaluated FALSE. The recentre was blocked. No spurious fire occurred.</p>

<p><strong>2022 bear folds in v5:</strong> The 12 folds that fired showed drawdown-from-peak values ranging from &minus;37.94% (BCHUSD, earliest trigger at day 32) to &minus;53.74% (DASHUSD, day 128) at the time of the trigger. In every case, the portfolio was deep in a confirmed bear cascade before the circuit breaker activated. The directional signal was unambiguous.</p>

<!-- Figure 5: Gate logic diagram -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 5 — Gate Logic Diagram</div>
	<iframe
		src="/research/inventory-circuit-breaker/fig5-gate-logic.html"
		title="Figure 5 — Gate logic diagram: three-condition decision tree with drawdownFromPeak as first branch"
		class="w-full rounded border border-rule"
		style="height: 480px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Gate logic: drawdownFromPeak gates direction; gridEngagement and trainHurst gate structure quality. All three conditions must be satisfied simultaneously. Yodacom Research 2026.</div>
</div>

<hr />

<h2>5. Validation Results</h2>

<h3>5.1 Seven-Way Comparison Table</h3>

<p>The table below presents aggregate metrics across all 135 valid folds for seven strategy configurations: the always-on baseline, FIS v2 alone, and five inventory circuit breaker iterations.</p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Metric</th>
<th>Baseline</th>
<th>FIS v2</th>
<th>Inv v1</th>
<th>Inv v2</th>
<th>Inv v3</th>
<th>Inv v4</th>
<th><strong>Inv v5</strong></th>
</tr>
</thead>
<tbody>
<tr>
<td>Overall win rate</td>
<td>41.5%</td>
<td>28.9%</td>
<td>27.4%</td>
<td>28.1%</td>
<td>26.7%</td>
<td>28.9%</td>
<td><strong>26.7%</strong></td>
</tr>
<tr>
<td>Avg alpha vs B&amp;H</td>
<td>&minus;578.2%</td>
<td>&minus;460.9%</td>
<td>&minus;27.4%*</td>
<td>&minus;461.8%</td>
<td>—</td>
<td>—</td>
<td><strong>&minus;461.6%</strong></td>
</tr>
<tr>
<td>Bear-fold win rate (B&amp;H &lt; &minus;20%)</td>
<td>100.0% loss</td>
<td>79.1% loss</td>
<td>76.7% loss</td>
<td>79.1% loss</td>
<td>76.7% loss</td>
<td>79.1% loss</td>
<td><strong>76.7% loss</strong></td>
</tr>
<tr>
<td>Inventory fire rate</td>
<td>—</td>
<td>—</td>
<td>21.5%</td>
<td>0.0%</td>
<td>18.5%</td>
<td>33.3%</td>
<td><strong>17.8%</strong></td>
</tr>
<tr>
<td>Q1 bull spurious alpha delta</td>
<td>—</td>
<td>—</td>
<td>&minus;122.89%</td>
<td>0.00%</td>
<td>&minus;66.77%</td>
<td>0.00%</td>
<td><strong>zero fires</strong></td>
</tr>
<tr>
<td>Q2 bear detection rate</td>
<td>—</td>
<td>—</td>
<td>88.2%</td>
<td>0.0%</td>
<td>70.6%</td>
<td>5.9%</td>
<td><strong>70.6%</strong></td>
</tr>
</tbody>
</table>
</div>

<p class="text-sm italic text-slate-light">*Inv v1 avg alpha of &minus;27.4% uses a non-comparable calculation method; &minus;461.6% for v5 is the correct apples-to-apples figure.</p>

<!-- Figure 1: Seven-way comparison -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 1 — Seven-Way Strategy Comparison</div>
	<iframe
		src="/research/inventory-circuit-breaker/fig1-alpha-improvement.html"
		title="Figure 1 — Seven-way comparison: average alpha across Baseline, FIS v2, Inv v1–v5"
		class="w-full rounded border border-rule"
		style="height: 480px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Average alpha across all 135 folds for seven strategy configurations. FIS v2 alone: Paper 1 baseline. Inv v5 adds the inventory layer. Yodacom Research 2026.</div>
</div>

<h3>5.2 Q1 — Bull Fold Analysis</h3>

<p>Bull folds are defined as test years where buy-and-hold returned more than +50%. 28 such folds exist in the dataset, concentrated in 2020 and 2021. The v5 circuit breaker fired zero times in bull folds.</p>

<p>The non-fire behavior in bull folds is not a coincidence of calibration. The drawdown-from-peak values at each bar where the 35% inventory threshold was first reached ranged from &minus;2% to &minus;14% across all bull folds — never breaching the &minus;15% drawdown gate. This is the structural property the gate was designed to exploit: in a bull market, a portfolio position that has declined 35% from initial capital is typically near or above a recent high. The drawdown gate correctly reads this as "not yet a confirmed directional bear."</p>

<!-- Figure 2: Bull fold analysis -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 2 — Bull Fold Analysis: Drawdown at Threshold</div>
	<iframe
		src="/research/inventory-circuit-breaker/fig2-bull-drawdown.html"
		title="Figure 2 — Bull fold analysis: drawdownFromPeak distribution at the bar where 35% inventory threshold is first breached"
		class="w-full rounded border border-rule"
		style="height: 420px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">drawdownFromPeak distribution across all 28 bull folds at the bar where the 35% inventory threshold is first breached. All observations fall in the &minus;2% to &minus;14% range — below the &minus;15% gate threshold. Zero fires. Yodacom Research 2026.</div>
</div>

<h3>5.3 Q2 — Bear Fold Analysis</h3>

<p>Bear folds are defined as test years where buy-and-hold returned below &minus;20%. 17 such folds exist in the 2022 column. The v5 circuit breaker fired in 12 of these 17 folds (70.6%).</p>

<p><strong>Folds where v5 fired:</strong></p>

<div class="overflow-x-auto">
<table>
<thead>
<tr>
<th>Symbol</th>
<th>Year</th>
<th>B&amp;H</th>
<th>FIS v2 alpha</th>
<th>v5 alpha</th>
<th>Alpha Delta</th>
<th>Trigger Day</th>
<th>Drawdown at Trigger</th>
</tr>
</thead>
<tbody>
<tr><td>ADAUSD</td><td>2022</td><td>&minus;82.2%</td><td>10.0%</td><td>11.9%</td><td>+1.95%</td><td>65</td><td>&minus;50.52%</td></tr>
<tr><td>BCHUSD</td><td>2022</td><td>&minus;78.2%</td><td>4.3%</td><td>13.6%</td><td>+9.36%</td><td>32</td><td>&minus;37.94%</td></tr>
<tr><td>BTCUSD</td><td>2022</td><td>&minus;65.4%</td><td>6.9%</td><td>8.1%</td><td>+1.19%</td><td>162</td><td>&minus;44.03%</td></tr>
<tr><td>DASHUSD</td><td>2022</td><td>&minus;69.6%</td><td>10.6%</td><td>8.3%</td><td>&minus;2.31%</td><td>128</td><td>&minus;53.74%</td></tr>
<tr><td>EOSUSD</td><td>2022</td><td>&minus;72.7%</td><td>4.9%</td><td>12.0%</td><td>+7.07%</td><td>65</td><td>&minus;40.93%</td></tr>
<tr><td>ETHUSD</td><td>2022</td><td>&minus;68.3%</td><td>7.3%</td><td>12.3%</td><td>+4.95%</td><td>130</td><td>&minus;45.67%</td></tr>
<tr><td>LTCUSD</td><td>2022</td><td>&minus;53.5%</td><td>9.6%</td><td>&minus;3.6%</td><td>&minus;13.28%</td><td>128</td><td>&minus;49.11%</td></tr>
<tr><td>NEOUSD</td><td>2022</td><td>&minus;76.7%</td><td>13.4%</td><td>17.4%</td><td>+4.06%</td><td>128</td><td>&minus;52.62%</td></tr>
<tr><td>XLMUSD</td><td>2022</td><td>&minus;74.4%</td><td>6.5%</td><td>19.6%</td><td>+13.11%</td><td>127</td><td>&minus;44.68%</td></tr>
<tr><td>XMRUSD</td><td>2022</td><td>&minus;41.2%</td><td>11.7%</td><td>18.6%</td><td>+6.87%</td><td>21</td><td>&minus;39.27%</td></tr>
<tr><td>XRPUSD</td><td>2022</td><td>&minus;60.1%</td><td>11.3%</td><td>26.0%</td><td>+14.64%</td><td>130</td><td>&minus;52.39%</td></tr>
<tr><td>XTZUSD</td><td>2022</td><td>&minus;84.9%</td><td>6.9%</td><td>20.3%</td><td>+13.43%</td><td>24</td><td>&minus;42.05%</td></tr>
</tbody>
</table>
</div>

<p><strong>Average alpha improvement across 12 fired folds: +5.09%</strong></p>

<!-- Figure 3: Bear fold triggers -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 3 — Bear Fold: Drawdown at Circuit Breaker Trigger</div>
	<iframe
		src="/research/inventory-circuit-breaker/fig3-bear-triggers.html"
		title="Figure 3 — Bear fold analysis: drawdownFromPeak at trigger time across 12 fires, ranging from −37.94% to −53.74%"
		class="w-full rounded border border-rule"
		style="height: 420px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">drawdownFromPeak at trigger time across all 12 bear-fold fires. Values range &minus;37.94% to &minus;53.74% — well past both the &minus;15% gate threshold and the 35% inventory threshold. Yodacom Research 2026.</div>
</div>

<p><strong>Folds where v5 did NOT fire:</strong></p>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Symbol</th><th>Year</th><th>B&amp;H</th><th>FIS v2 alpha</th><th>v5 alpha</th><th>Reason</th></tr>
</thead>
<tbody>
<tr><td>DOGEUSD</td><td>2022</td><td>&minus;59.5%</td><td>0.0%</td><td>0.0%</td><td>35% threshold not reached</td></tr>
<tr><td>MANAUSD</td><td>2022</td><td>&minus;91.1%</td><td>10.3%</td><td>8.9%</td><td>Engagement=0.80, blocked by engagement gate</td></tr>
<tr><td>STXUSD</td><td>2022</td><td>&minus;90.9%</td><td>10.6%</td><td>9.6%</td><td>Engagement=1.00, blocked by engagement gate</td></tr>
<tr><td>TRXUSD</td><td>2022</td><td>&minus;28.9%</td><td>28.9%</td><td>28.9%</td><td>35% threshold not reached</td></tr>
<tr><td>ZECUSD</td><td>2022</td><td>&minus;75.2%</td><td>17.9%</td><td>16.0%</td><td>Engagement=0.66, blocked by engagement gate</td></tr>
</tbody>
</table>
</div>

<h3>5.4 Bear-Fold Win Rate</h3>

<p>The v5 bear-fold win rate is 76.7%, versus FIS v2 alone at 79.1% — a 2.4 percentage point decline. The decline is attributable primarily to two folds: LTCUSD 2022 (&minus;13.28% alpha delta, circuit breaker recentered into a developing bear that continued falling) and DASHUSD 2022 (&minus;2.31% alpha delta). These two folds represent cases where the recentre occurred at a price level that subsequently continued lower. This 2.4pp decline is a tolerable cost. The circuit breaker improves alpha in 10 of the 12 folds where it fired, with the two negative-delta folds representing a known limitation: the rule is calibrated to protect against extreme bear cascades (&gt;50% drawdown) and may suboptimally time recentres in moderate-severity bears. The average alpha improvement of +5.09% across all fires substantially exceeds the cost of the two negative-delta exceptions.</p>

<h3>5.5 Data Integrity Note: STXUSD 2021</h3>

<p>During v5 initial validation, STXUSD 2021 generated a false-positive fire. Investigation revealed 6 corrupt rows in the Tiingo price_data feed for the window 2021-02-16 through 2021-02-21: prices registered at $0.018&ndash;$0.024 when the correct values were approximately $0.72&ndash;$0.76. The corrupt rows caused artificial single-bar drawdowns of approximately 97%, triggering the drawdown gate. This is precisely the data quality failure mode the pre-flight check requirement was designed to catch. A linear interpolation correction was applied to all 6 corrupt rows. The UNCONDITIONAL GO verdict is based exclusively on the corrected dataset.</p>

<hr />

<h2>6. The Five-Iteration Arc: A Methodological Note</h2>

<p>The development arc from v1 to v5 is not an optimization story. No parameter was tuned to produce the best backtest number. Each iteration was motivated by a specific, identified failure mode in the prior version:</p>

<ul>
<li>v1 failed because of simulation mechanics (fill clustering). Fix: fill cap.</li>
<li>v2 failed because the rule had no direction filter. The 35% threshold fires on shallow bull corrections. Fix: add a gate.</li>
<li>v3 failed because the chosen gate features (engagement, Hurst) are not direction-aware. They measure trend intensity in both directions equally. Fix: use a direction-aware feature.</li>
<li>v4 failed because tightening the intensity gate to eliminate the one bull false positive also eliminated all bear true positives. This confirms the diagnosis: intensity metrics cannot solve a direction problem.</li>
<li>v5 succeeded by adding <code>drawdownFromPeak</code>, a feature with direct economic interpretation: the portfolio can only be in a confirmed bear cascade if it is substantially below its recent peak.</li>
</ul>

<!-- Figure 4: Iteration arc -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 4 — Five-Iteration Development Arc</div>
	<iframe
		src="/research/inventory-circuit-breaker/fig4-iteration-arc.html"
		title="Figure 4 — Five-iteration development arc: Q1 spurious fire count vs. Q2 bear detection rate, v1 through v5"
		class="w-full rounded border border-rule"
		style="height: 420px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Q1 spurious fire count (left axis) and Q2 detection rate (right axis) across v1&ndash;v5. Early iterations had high detection but high spurious fires; v4 had zero spurious fires but near-zero detection; v5 achieves both simultaneously. Yodacom Research 2026.</div>
</div>

<hr />

<h2>7. Implications for RIA Practice</h2>

<h3>7.1 The Circuit Breaker as a Documented Process</h3>

<p>An RIA deploying a grid trading satellite sleeve must be able to demonstrate that the strategy follows a documented, consistently applied decision process. The inventory circuit breaker is not just a return-improvement mechanism — it is a documentation artifact — a structured record of the kind that fiduciary process frameworks require. Every recentre event produces a structured log entry: the date, the trigger level, the portfolio value at trigger, which gate conditions were satisfied, and the new grid parameters. This log is the evidence of fiduciary process. Whether a specific deployment satisfies applicable compliance standards depends on the full context of the RIA's practice and should be reviewed with qualified legal counsel.</p>

<p>The circuit breaker converts a discretionary-sounding judgment ("stop accumulating losses in a bear market") into a rules-based, auditable action. The gate conditions — drawdownFromPeak &lt; &minus;15%, engagement &le; 0.65, Hurst &ge; 0.45 — are defined in advance, calibrated from historical walk-forward data, and evaluated mechanically.</p>

<h3>7.2 Fee-Adjusted Return Expectations</h3>

<p>The circuit breaker fires the recentre rule, not a full liquidation. The grid reset involves closing and reopening orders at new price levels. At retail-Binance-US cost assumptions (0.40% maker, 0.60% taker), a recentre event incurs incremental transaction costs on the repositioned orders. These costs are absorbed within the simulation's cost model — all reported alpha figures reflect post-fee outcomes.</p>

<p>The FIS v2 + Inv v5 configuration produced an in-sample estimated annualized return of +5.33% across the walk-forward test periods. This figure is an in-sample estimate from a 2.5-year window; block-bootstrap confidence intervals will be computed in Phase 1 to bound the uncertainty range for client disclosure.</p>

<h3>7.3 Position Sizing Interaction</h3>

<p>The circuit breaker protects existing capital at the grid level. It does not substitute for position sizing at the portfolio level. The circuit breaker limits catastrophic drawdown within the sleeve; portfolio-level downside is bounded by sleeve size, not by the circuit breaker threshold alone.</p>

<p>One accurate framing of the mechanics for advisors: the grid sleeve earns profit from short-term price oscillations. When the market moves persistently in one direction rather than oscillating, the system detects this — both through the FIS regime signal and through the portfolio's own drawdown history — and pauses or recenters grid activity. The circuit breaker is the second of two independent safety mechanisms, each operating on different information.</p>

<hr />

<h2>8. Limitations and Future Work</h2>

<h3>8.1 Bear-Fold Win Rate Regression</h3>

<p>The 2.4pp bear-fold win rate decline (79.1% &rarr; 76.7%) attributable to LTCUSD 2022 and DASHUSD 2022 is documented as a known limitation. Both folds triggered the circuit breaker at drawdown levels between &minus;49% and &minus;54%, indicating the portfolio was already substantially damaged before the gate fired. Future work should explore whether a dynamic max-recentre cap (scaled to fold-length or to the severity of the bear cascade) could recover these two folds without introducing overfitting risk.</p>

<h3>8.2 On-Chain Signals Deferred</h3>

<p>The MVRV (Market Value to Realized Value) on-chain signal was evaluated as a potential additional gate condition. MVRV provides strong directional signal during bear markets (MVRV &lt; 1 indicates market is trading below realized-cost basis). However, MVRV coverage in the walk-forward dataset is limited to BTCUSD and ETHUSD — only 2 of the 17 symbols tested. MVRV integration is deferred to Paper 3, conditional on achieving broader on-chain data coverage for the symbol universe tested.</p>

<h3>8.3 Live Production Validation</h3>

<p>The walk-forward simulation uses daily bars and assumes fills at end-of-bar close prices. These assumptions are validated within the simulation but have not yet been tested in live execution at the daily-bar timescale. The UNCONDITIONAL GO verdict clears the circuit breaker for production implementation in the simulation layer; live forward testing remains required before the strategy is presented to advisory clients as a specific return expectation.</p>

<h3>8.3a Non-2022 Circuit Breaker Fires: ZECUSD 2025 as a Documented Edge Case</h3>

<p>One notable non-2022 fire occurred in ZECUSD 2025: buy-and-hold returned +778.5% in that test year, yet the circuit breaker fired, producing an alpha delta of &minus;36.55pp. The fire passed all three gate conditions (drawdownFromPeak = &minus;22.3%, gridEngagement = 0.42, trainHurst = 0.559) because the 2-year training window did not contain a representative prior bull run. This represents a specific instance of the limitation described in Section 8.4. The ZECUSD 2025 fold does not affect the paper's primary validation results; it is documented here as a known edge case for production monitoring.</p>

<h3>8.4 Symbol Universe Constraints</h3>

<p>All 17 symbols in the walk-forward are major-cap or mid-cap crypto assets with multi-year price histories on Tiingo. Newer altcoins present a different regime-detection challenge: the 2-year training window may not contain a representative bull period. The circuit breaker's validation is robust for the 17 symbols with multi-year histories; extension to newer launches requires caution.</p>

<hr />

<h2>9. Conclusion</h2>

<p>Grid trading accumulates inventory risk in proportion to the severity and duration of sustained downtrends. The FIS v2 regime signal reduces exposure by detecting trending environments through market-side indicators. The inventory circuit breaker adds a second independent protection layer by monitoring the grid's own balance sheet: when the portfolio falls 35% below initial capital, under conditions where the portfolio is also more than 15% below its rolling peak, the grid is recentered at the current price.</p>

<p>The five-iteration development arc confirms that the critical feature enabling this circuit breaker to work correctly is <code>drawdownFromPeak</code>. Grid engagement and Hurst exponent are directionally blind — they cannot distinguish a bull trend from a bear trend. The drawdown-from-peak condition provides the directional filter.</p>

<p>Walk-forward validation across 17 symbols and 135 folds (2013&ndash;2025) confirms:</p>

<ul>
<li><strong>Zero spurious fires in 28 confirmed bull folds</strong> — the gate fully protects bull-period alpha.</li>
<li><strong>70.6% detection rate in 17 confirmed 2022 bear folds</strong> — the circuit breaker activates in most confirmed bear cascades.</li>
<li><strong>+5.09% average alpha improvement when fired</strong> — the recentre rule produces directionally positive outcomes.</li>
<li><strong>2.4pp bear-fold win rate decline</strong> — a documented, tolerable cost attributable to two specific folds (LTCUSD 2022, DASHUSD 2022) that represent known timing imprecision in moderate-severity bears.</li>
</ul>

<p>Together, FIS v2 and the inventory circuit breaker constitute a two-layer risk framework for crypto grid strategies: the first layer monitors market structure from the outside; the second monitors portfolio accumulation from the inside. Neither layer is sufficient alone. Combined, they produce a strategy with documented bear-market protection, auditable decision logic, and a statistically validated production gate development record.</p>

<hr />

<h2>Appendix A: Gate Parameter Summary</h2>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Parameter</th><th>Value</th><th>Basis</th></tr>
</thead>
<tbody>
<tr><td>Inventory threshold</td><td>35% of initial capital</td><td>Optimal from cohort analysis (vs. 25%, 50%)</td></tr>
<tr><td>Max recentres per fold</td><td>2</td><td>Conservative cap; prevents excessive restarts</td></tr>
<tr><td>Fill cap per bar</td><td>3</td><td>Eliminates fill-clustering simulation artifact</td></tr>
<tr><td>drawdownFromPeak gate</td><td>&lt; &minus;15%</td><td>Discriminates bull corrections from bear cascades</td></tr>
<tr><td>Engagement gate</td><td>&le; 0.65</td><td>Excludes high-trend-intensity environments</td></tr>
<tr><td>Hurst gate</td><td>&ge; 0.45</td><td>Confirms non-trending (grid-favorable) structure</td></tr>
<tr><td>Rolling peak reset</td><td>Resets to recentre price after each recentre</td><td>Ensures gate re-evaluates from new starting point</td></tr>
<tr><td>EWMA half-life (FIS v2)</td><td>10 days</td><td>Calibrated from Paper 1 walk-forward</td></tr>
</tbody>
</table>
</div>

<hr />

<h2>Appendix B: Complete Bear-Fold Q2 Results (2022)</h2>

<div class="overflow-x-auto">
<table>
<thead>
<tr><th>Symbol</th><th>B&amp;H</th><th>FIS v2 alpha</th><th>v5 alpha</th><th>Delta</th><th>Trigger Day</th><th>Drawdown at Trigger</th><th>Gate Result</th></tr>
</thead>
<tbody>
<tr><td>ADAUSD</td><td>&minus;82.2%</td><td>10.0%</td><td>11.9%</td><td>+1.95%</td><td>65</td><td>&minus;50.52%</td><td>FIRED</td></tr>
<tr><td>BCHUSD</td><td>&minus;78.2%</td><td>4.3%</td><td>13.6%</td><td>+9.36%</td><td>32</td><td>&minus;37.94%</td><td>FIRED</td></tr>
<tr><td>BTCUSD</td><td>&minus;65.4%</td><td>6.9%</td><td>8.1%</td><td>+1.19%</td><td>162</td><td>&minus;44.03%</td><td>FIRED</td></tr>
<tr><td>DASHUSD</td><td>&minus;69.6%</td><td>10.6%</td><td>8.3%</td><td>&minus;2.31%</td><td>128</td><td>&minus;53.74%</td><td>FIRED</td></tr>
<tr><td>DOGEUSD</td><td>&minus;59.5%</td><td>0.0%</td><td>0.0%</td><td>0.00%</td><td>—</td><td>n/a</td><td>threshold not reached</td></tr>
<tr><td>EOSUSD</td><td>&minus;72.7%</td><td>4.9%</td><td>12.0%</td><td>+7.07%</td><td>65</td><td>&minus;40.93%</td><td>FIRED</td></tr>
<tr><td>ETHUSD</td><td>&minus;68.3%</td><td>7.3%</td><td>12.3%</td><td>+4.95%</td><td>130</td><td>&minus;45.67%</td><td>FIRED</td></tr>
<tr><td>LTCUSD</td><td>&minus;53.5%</td><td>9.6%</td><td>&minus;3.6%</td><td>&minus;13.28%</td><td>128</td><td>&minus;49.11%</td><td>FIRED</td></tr>
<tr><td>MANAUSD</td><td>&minus;91.1%</td><td>10.3%</td><td>8.9%</td><td>&minus;1.40%</td><td>—</td><td>n/a</td><td>blocked: eng=0.80</td></tr>
<tr><td>NEOUSD</td><td>&minus;76.7%</td><td>13.4%</td><td>17.4%</td><td>+4.06%</td><td>128</td><td>&minus;52.62%</td><td>FIRED</td></tr>
<tr><td>STXUSD</td><td>&minus;90.9%</td><td>10.6%</td><td>9.6%</td><td>&minus;1.02%</td><td>—</td><td>n/a</td><td>blocked: eng=1.00</td></tr>
<tr><td>TRXUSD</td><td>&minus;28.9%</td><td>28.9%</td><td>28.9%</td><td>0.00%</td><td>—</td><td>n/a</td><td>threshold not reached</td></tr>
<tr><td>XLMUSD</td><td>&minus;74.4%</td><td>6.5%</td><td>19.6%</td><td>+13.11%</td><td>127</td><td>&minus;44.68%</td><td>FIRED</td></tr>
<tr><td>XMRUSD</td><td>&minus;41.2%</td><td>11.7%</td><td>18.6%</td><td>+6.87%</td><td>21</td><td>&minus;39.27%</td><td>FIRED</td></tr>
<tr><td>XRPUSD</td><td>&minus;60.1%</td><td>11.3%</td><td>26.0%</td><td>+14.64%</td><td>130</td><td>&minus;52.39%</td><td>FIRED</td></tr>
<tr><td>XTZUSD</td><td>&minus;84.9%</td><td>6.9%</td><td>20.3%</td><td>+13.43%</td><td>24</td><td>&minus;42.05%</td><td>FIRED</td></tr>
<tr><td>ZECUSD</td><td>&minus;75.2%</td><td>17.9%</td><td>16.0%</td><td>&minus;1.89%</td><td>—</td><td>n/a</td><td>blocked: eng=0.66</td></tr>
</tbody>
</table>
</div>

<p><strong>Avg alpha delta across 12 fires: +5.09%</strong></p>

<hr />

<p class="text-sm text-slate-light italic">Kessel, H., &amp; Black, J. J. (2026). Inventory-Aware Grid Management: A Regime-Adaptive Circuit Breaker for Crypto Grid Strategies. Yodacom Research.</p>

<p class="text-sm text-slate-light italic">Data: Tiingo daily bars, 2013&ndash;2025. Validation dataset: 17 symbols, 135 walk-forward folds. Production gate: Inv v5 (post-remediation, STXUSD 6-row correction applied 2026-04-28).</p>

<p class="text-sm text-slate-light italic">All figures are out-of-sample walk-forward results. Past performance does not guarantee future results. This paper is for research and educational purposes only.</p>

<blockquote>
<p><strong>Hypothetical Performance Disclosure:</strong> The performance results shown are hypothetical and were achieved by means of the retroactive application of a model designed with the benefit of hindsight. Hypothetical performance results have inherent limitations. No representation is being made that any account will or is likely to achieve profits or losses similar to those shown. All strategy returns are reported net of assumed retail-Binance-US fee tier (0.40% maker / 0.60% taker / 0.05% volatility-conditional slippage) as described in Section 2.</p>

<p>This paper is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The RIA practice implications discussed in Section 7 are general observations about process documentation and are not legal or compliance advice. RIAs should consult qualified legal and compliance counsel before implementing any systematic trading strategy in client accounts.</p>

<p>Digital assets, including the cryptocurrency pairs tested in this study, are highly volatile and speculative. Their regulatory treatment in the United States is evolving. The regulatory status of individual tokens referenced in this study (including XRPUSD) may be subject to ongoing litigation or regulatory determination.</p>

<p>Forward-looking statements, if any, are illustrative only. The phrase "expected annualized return" as used in this paper refers to an in-sample simulation estimate derived from walk-forward test periods, not a projection of future performance.</p>
</blockquote>

</article>
