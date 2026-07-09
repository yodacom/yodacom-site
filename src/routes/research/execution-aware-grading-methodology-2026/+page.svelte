<svelte:head>
	<title>Execution-Aware Grading: Why CoinRoc Measures What You Can Actually Trade | Yodacom Research</title>
	<meta name="description" content="Full methodology paper: two systematic biases in backtest-based asset grading — blended-return distortion and liquidity-optimism — and the corrections shipped to CoinRoc's grading system in June 2026." />
	<meta property="og:title" content="Execution-Aware Grading: Why CoinRoc Measures What You Can Actually Trade | Yodacom Research" />
	<meta property="og:description" content="The blended-return bias and the liquidity-optimism bias, diagnosed and corrected. Full methodology, data findings, and documented limitations on the 97-symbol catalog." />
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
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">July 2026 &middot; Methodology Paper</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Execution-Aware Grading: Why CoinRoc Measures What You Can Actually Trade
	</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		Standard backtesting-based grading systems evaluate a trading strategy's simulated performance under idealized assumptions: fills at the grid price, unlimited order-book depth, and no distinction between periods when the strategy is active versus when it is correctly holding cash. This paper documents two systematic biases this introduces and the methodology used to correct them in CoinRoc's asset grading system.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Author</dt><dd>Han Kessel &middot; Trading/Algorithm Specialist, Yodacom Research</dd>
		<dt class="text-slate-light">Scope</dt><dd>Sections 1&ndash;6 &middot; 97-symbol catalog, Year 2 blind forward test</dd>
		<dt class="text-slate-light">Key finding</dt><dd>27/37 wrongly-hidden assets restored; 32/97 flagged thin liquidity</dd>
		<dt class="text-slate-light">Advisor summary</dt><dd><a href="/research/execution-aware-grading-2026" class="text-ochre-deep hover:text-ochre">Read the advisor article &rarr;</a></dd>
	</dl>
</header>

<article class="mx-auto max-w-3xl px-6 sm:px-10 pb-20 prose prose-lg prose-slate max-w-none
	prose-headings:font-serif prose-headings:text-navy-ink
	prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
	prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
	prose-h4:text-base prose-h4:mt-6 prose-h4:mb-2 prose-h4:font-semibold
	prose-p:text-slate prose-p:leading-relaxed prose-p:mb-4
	prose-strong:text-navy-deep
	prose-table:text-sm prose-th:text-navy-deep prose-th:font-semibold prose-td:text-slate
	prose-blockquote:border-ochre prose-blockquote:text-slate
	prose-code:text-navy-deep prose-code:bg-cream/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
	prose-hr:border-rule">

<h2>Abstract</h2>

<p>Standard backtesting-based grading systems evaluate a trading strategy's simulated performance under idealized assumptions: fills at the grid price, unlimited order-book depth, and no distinction between periods when the strategy is active versus when it is correctly holding cash. We document two systematic biases this introduces and the methodology used to correct them in CoinRoc's asset grading system. First, the <strong>blended-return bias</strong>: grading assets on their total portfolio return across a full evaluation window &mdash; including periods where the Adaptive Grid FIS (fuzzy inference system) correctly de-activated the grid &mdash; penalizes assets for market-level drawdowns the grid strategy was not responsible for. Second, the <strong>liquidity-optimism bias</strong>: presenting a grade derived from a clean backtest on an asset with a thin order book implies an execution quality the order book may not be able to support at the simulated scale. We describe the corrections shipped on 2026-06-12 and 2026-06-13, quantify their impact on the 97-symbol catalog, and bound the assumptions and data gaps that limit the strength of the current methodology. The unifying principle: a grade should represent what a strategy's simulated historical behavior in active windows suggests about its grid mechanism, not what a simulation with unlimited liquidity and no regime awareness would produce.</p>

<h2>1. Introduction</h2>

<p>CoinRoc's asset grading system assigns letter grades (A through F) to cryptocurrency assets based on a weighted composite of several strategy-evaluation signals: simulated grid strategy performance, risk-adjusted return (Sharpe and Sortino ratios), an ETS (execution-to-simulation) factor, a sentiment signal, and a liquidity component. The grade is the primary signal displayed on the Discovery page &mdash; it determines which assets are surfaced to users and which are filtered out or flagged.</p>

<p>Two defects in the grading system were identified in June 2026, both traceable to a common root cause: the grade was measuring a scenario the user cannot actually experience, either because the strategy was correctly inactive during the measurement window, or because the market does not have the depth to fill orders at the simulated price.</p>

<p>This paper describes the diagnosis, methodology, and corrective design for both defects. These are not model improvements in the narrow sense &mdash; they are corrections to what the model is measuring. The distinction matters because neither change required retraining a model or adjusting weightings; they required identifying that the wrong input was being evaluated.</p>

<h2>2. Pillar 1 &mdash; Active-Period Return: Evaluating the Grid, Not the Market</h2>

<h3>2.1 Background: Blended Return and Its Distortion</h3>

<p>CoinRoc's grid strategy operates under the direction of the Adaptive Grid FIS, a fuzzy inference system that classifies market regimes and sets a grid engagement score (gridEngagement &isin; [0, 1]). When gridEngagement falls below 0.65, the FIS steps the strategy to a cash-hold state. This is intentional behavior: the grid strategy is fundamentally short-volatility and works best in ranging, mean-reverting markets. In strongly trending markets, a correctly-designed grid system should stand aside.</p>

<p>Prior to the 2026-06-12 fix, the Discovery page filter used <code>grid_return_percent</code> as its gating metric. This is the <strong>blended full-period return</strong> &mdash; the total portfolio return across all of Year 2 (the blind forward test period), regardless of whether the FIS was actively running the grid or holding cash. The schema's own docblock contained a direct warning about this:</p>

<blockquote><p>&ldquo;Use this &mdash; NOT gridReturnPercent &mdash; when comparing grid performance across ratings, because gridReturnPercent is blended across cash periods.&rdquo;</p></blockquote>

<p>Despite the warning, <code>grid_return_percent</code> was the column being evaluated.</p>

<p>In a trending-down market, the blended return absorbs the directional portfolio drawdown even during cash-hold periods &mdash; because the total portfolio value tracks the underlying asset price, not just grid profit and loss. The FIS may correctly classify the market as unsuitable for grid trading, step to cash, and protect the user from the worst of the trend &mdash; yet the blended return penalizes the asset for the directional move that the strategy correctly avoided.</p>

<p>The <code>grid_return_active_pct</code> column, added in migration 108, computes the grid strategy's return across only those sub-windows where gridEngagement &gt;= 0.65. This is the metric that answers the correct question: <strong>when the grid was running, how did it perform?</strong></p>

<p>The active-period figures reported in &sect;2.3 below were computed by a separate, retrospective classification pass over historical candles. They are not derived from the live <code>gridEngagement</code> circuit-breaker described above; the specific backtest runs referenced in this section used a fixed engagement setting across all symbols for this test window.</p>

<h3>2.2 Methodology</h3>

<p><strong>Filter change.</strong> The Discovery filter was changed from:</p>

<pre><code>grid_return_percent &gt;= -25% (blended)</code></pre>

<p>to:</p>

<pre><code>grid_return_active_pct &gt;= -25% (active-period, FIS-gated)
  fallback: grid_return_percent (blended) when active_pct is null
threshold: -25% unchanged</code></pre>

<p>The threshold of -25% was retained as the grid-mechanism failure boundary. A strategy losing -25% or more even during its own elected active windows is failing on its own terms, independent of regime. The threshold is more conservative applied to active-period return than to blended return in normal markets: an asset that only loses -5% blended but -30% active is correctly flagged as a grid failure even though its blended number looks passable.</p>

<p><strong>Transparency for genuine failures.</strong> Assets that fail the active-period filter (active return below -25%) are not silently dropped. They are included in the existing <code>hiddenAtTier</code> catalog response with a new reason code: <code>grid_underperforms_in_regime</code>. The Discovery UI renders this with a plain-English label: &ldquo;Grid underperforms at your fee tier even in favorable market conditions.&rdquo; Users can see that these assets exist, understand why they are not recommended, and make their own judgment.</p>

<h3>2.3 Findings</h3>

<p><strong>Impact on the 97-symbol catalog (retail-binance-us tier, Year 2 forward test):</strong></p>

<p>Prior to the fix, approximately 48 assets were visible on Discovery. Approximately 37 were hidden by the -25% blended return filter.</p>

<p>SQL analysis of the 37 hidden assets against the active-period metric:</p>

<table>
<thead><tr><th>Category</th><th>Count</th></tr></thead>
<tbody>
<tr><td>Total hidden by blended filter</td><td>37</td></tr>
<tr><td>Would pass active-period filter (active &gt;= -25%)</td><td>27 (73%)</td></tr>
<tr><td>Genuinely failing on both metrics (active &lt; -25%)</td><td>10 (27%)</td></tr>
<tr><td>Active-period return is positive (grid was profitable in active windows)</td><td>6</td></tr>
</tbody>
</table>

<p>Selected assets from the named-major review:</p>

<table>
<thead><tr><th>Symbol</th><th>Blended Return</th><th>Active Return</th><th>Regime-Active % (Yr2, retrospective classifier — see &sect;2.1 note)</th><th>Verdict</th></tr></thead>
<tbody>
<tr><td>SOLUSDT</td><td>-45.5%</td><td>-9.8%</td><td>77.0%</td><td>Wrongly hidden</td></tr>
<tr><td>LINKUSDT</td><td>-39.6%</td><td>+2.1%</td><td>71.2%</td><td>Wrongly hidden</td></tr>
<tr><td>ALGOUSDT</td><td>-38.5%</td><td>-12.2%</td><td>71.2%</td><td>Wrongly hidden</td></tr>
<tr><td>HBARUSDT</td><td>-35.5%</td><td>+0.8%</td><td>67.4%</td><td>Wrongly hidden</td></tr>
<tr><td>DOGEUSDT</td><td>-30.1%</td><td>-5.1%</td><td>71.2%</td><td>Wrongly hidden</td></tr>
<tr><td>BCHUSDT</td><td>-27.9%</td><td>+3.9%</td><td>86.3%</td><td>Wrongly hidden</td></tr>
<tr><td>ADAUSDT</td><td>-43.4%</td><td>-25.8%</td><td>55.6%</td><td>Genuinely failing</td></tr>
<tr><td>BTCUSDT</td><td>-31.8%</td><td>-40.2%</td><td>100.0%</td><td>Genuinely failing</td></tr>
<tr><td>SHIBUSDT</td><td>-25.7%</td><td>-28.8%</td><td>82.7%</td><td>Genuinely failing</td></tr>
</tbody>
</table>

<p><strong>The BTC case is instructive as a sanity check.</strong> BTC's blended and active-period returns are identical (-40.2% both) because the retrospective classifier found no candles in Year 2 it would exclude from the active window &mdash; not because BTC's simulation run itself avoided a cash-hold state (this test's engagement setting was fixed, not live-gated; see &sect;2.1). This numeric equivalence is still a valid sanity check on the active-period metric's construction: since no candles were excluded, no distortion could have been introduced by the exclusion step, regardless of what generated the underlying P&amp;L. The -40.2% active return is a genuine grid mechanism failure, and BTC is correctly filtered from Discovery regardless of which metric is used.</p>

<p><strong>Post-fix state:</strong> Visible assets on Discovery moved from approximately 48 to approximately 75 (of 97), with genuinely failing assets shown in the <code>hiddenAtTier</code> section with explicit reason labels.</p>

<h3>2.4 Interpretation Constraints</h3>

<p>The active-period return metric answers a narrower question than the blended return does &mdash; and that narrowness is the point. It does not answer &ldquo;how would a portfolio perform if held for all of Year 2 with this strategy?&rdquo; It answers &ldquo;how did the grid mechanism perform when the FIS chose to run it?&rdquo;</p>

<p>These are different questions. A user considering CoinRoc's grid strategy is implicitly accepting the FIS's judgment about when to run. If the FIS is correct in its regime classification, the active-period return is the better predictor of what the user will experience during active windows. If the FIS is wrong (it classifies trending markets as ranging, engages the grid, and loses), the blended return and active return converge &mdash; as they do for BTC.</p>

<p>The split between the two metrics is therefore also a signal about FIS regime accuracy, which is a separate validation question not addressed in this paper.</p>

<h2>3. Pillar 2 &mdash; Liquidity-Aware Grading: A Beautiful Backtest Is Not a Fill</h2>

<h3>3.1 Background: The Execution Gap in Grid Strategies</h3>

<p>Grid trading places many simultaneous resting limit orders across a defined price range. Unlike a single large market order, the execution risk in a grid strategy is distributed: each individual fill is small in absolute terms, but the order book must be able to absorb fills at multiple price levels without meaningful slippage. A grid on a thin order book will see partial fills, off-price fills, and in extreme cases, grid levels that never fill at all because there is no counterparty.</p>

<p>Standard backtests assume fills at the grid price with no market impact. This is a reasonable assumption for large-cap assets with deep order books and high global trading volume. It is a materially wrong assumption for small-cap and micro-cap assets where the 24-hour global trading volume is in the low millions of dollars.</p>

<p>Prior to the 2026-06-13 fix, CoinRoc's liquidity component (carrying a 5% weight in the grade composite) was null for 91 of 93 graded assets because no global volume data was being correctly sourced. The practical effect: the grade was computed on simulated performance, risk-adjusted returns, and ETS alone, with no tradability signal. An illiquid asset with a clean backtest received the same grade mechanics as Bitcoin.</p>

<h3>3.2 Methodology</h3>

<h4>3.2.1 Liquidity Score Composite</h4>

<p>The <code>liquidityScore</code> (0&ndash;100) is a weighted composite of four signals:</p>

<table>
<thead><tr><th>Signal</th><th>Weight</th><th>Rationale</th></tr></thead>
<tbody>
<tr><td>30-day median 24h global volume (USD)</td><td>50%</td><td>Sustained tradability across market conditions; most stable signal available globally</td></tr>
<tr><td>Bid/ask spread (%)</td><td>25%</td><td>Direct per-fill execution cost at each grid level</td></tr>
<tr><td>Order book depth at &plusmn;2% (USD)</td><td>20%</td><td>Grid-relevant: can the book absorb fills across the active range</td></tr>
<tr><td>Estimated slippage for $10k order</td><td>5%</td><td>Confirming signal; confidence low for alt coins; low weight</td></tr>
</tbody>
</table>

<p>Note on current data state: the &ldquo;30-day median&rdquo; volume is presently approximated by a single 24-hour snapshot from CoinGecko's global aggregation endpoint. The label in the scoring function is documented as a single-day proxy. As daily collection history accumulates, the formula input will be switched to a true 30-day rolling median without changing the scale or weights.</p>

<p><strong>Volume normalization anchors (configurable, not hardcoded):</strong></p>

<table>
<thead><tr><th>Band</th><th>24h Volume Threshold</th><th>liquidityLevel</th><th>thinLiquidity flag</th></tr></thead>
<tbody>
<tr><td>Deep</td><td>&gt;= $50M</td><td>deep</td><td>false</td></tr>
<tr><td>Adequate</td><td>$25M &ndash; $50M</td><td>good</td><td>false</td></tr>
<tr><td>Moderate</td><td>$5M &ndash; $25M</td><td>moderate</td><td>false</td></tr>
<tr><td>Thin</td><td>$1M &ndash; $5M</td><td>low</td><td>true</td></tr>
<tr><td>Critical</td><td>&lt; $1M</td><td>very_low</td><td>true + hard gate eligible</td></tr>
</tbody>
</table>

<p>The $50M anchor (score = 100) replaces a prior $10M cap that was too generous for grid trading at any meaningful scale. $10M/day is thin; it distributes across 24 hours to roughly $417k/hour in global volume, and grid fills compete with all other market participants for that flow.</p>

<h4>3.2.2 Grade Impact: Three Layers</h4>

<p><strong>Layer 1 &mdash; Soft input (5% weight, existing).</strong> The liquidity composite participates in the weighted grade calculation. A score of 0 contributes approximately -3 to -4 composite points &mdash; meaningful directional pressure but not decisive, as the performance and risk-adjusted components carry the majority of the weight.</p>

<p><strong>Layer 2 &mdash; Grade cap for thin liquidity (new).</strong> If <code>liquidityScore &lt; 35</code> (approximately $5M/day equivalent in the composite) and the asset's composite score would otherwise yield a grade of A or B, the composite score is capped at 64 (B-). This prevents a strong backtest on an illiquid asset from producing a grade that implies execution quality the order book may not be able to support at the simulated scale.</p>

<p>The cap is a soft ceiling, not a filter. The asset remains in Discovery. The grade renders with a visible &ldquo;Cap B-&rdquo; disclosure label and a tooltip:</p>

<blockquote><p>&ldquo;Grade capped at B- due to thin liquidity. Strong backtest metrics were observed, but order book depth may not support consistent execution at the simulated scale. Grade reflects actual execution risk, not raw backtest performance.&rdquo;</p></blockquote>

<p>The B- ceiling is chosen deliberately over a harder cap (C+ or lower) because thin-liquidity assets are not uniformly bad: they may be legitimately tradable at small position sizes with adjusted grid configurations. B- is not a warning to avoid; it is a signal to trade smaller and expect imperfect fills.</p>

<p><strong>Layer 3 &mdash; thinLiquidity flag (new).</strong> Independent of the grade cap. The flag fires when <code>liquidityScore &lt; 35</code>, regardless of whether the cap was triggered (i.e., an already-low-grade asset that is also thin gets the flag but not the cap). It is non-blocking. Discovery cards display an amber &ldquo;Thin liquidity &mdash; fills may slip; treat backtest return as an optimistic scenario reference, not a performance guarantee&rdquo; badge. A tooltip provides the full grid-specific explanation.</p>

<p><strong>Hard filter: deliberately absent.</strong> A hard filter removing thin-liquidity assets from Discovery entirely was considered and rejected as the default design. A thin-liquidity asset at small position size can be legitimately tradable. Removing it silently is paternalistic and inconsistent with the &ldquo;transparency over suppression&rdquo; principle. A hard gate is supported as a configurable option (<code>LIQUIDITY_HARD_GATE_ENABLED</code>, default off) for assets with confirmed <code>very_low</code> liquidity and high data confidence. It is not enabled at launch.</p>

<h4>3.2.3 Data Sourcing</h4>

<p>Global 24h volume is sourced from CoinGecko's <code>/coins/{'{'}id{'}'}</code> endpoint, using canonical CoinGecko slugs (e.g., &ldquo;bitcoin&rdquo;, &ldquo;chainlink&rdquo;) from CoinRoc's <code>cryptocurrency_registry</code> table. This is the correct approach: the slug-based endpoint returns aggregated global volume across all exchanges, not single-venue volume.</p>

<p>A prior implementation used the ticker lowercased as the endpoint ID (e.g., &ldquo;btc&rdquo;), which returned single-exchange (Binance.US) volume &mdash; approximately $2.38M for Bitcoin on the day of discovery, versus the correct global figure of approximately $18&ndash;19 billion. That defect was corrected in commit 23355158.</p>

<h3>3.3 Findings</h3>

<p><strong>Post-fix verified state (2026-06-13, full 97-symbol catalog run):</strong></p>

<table>
<thead><tr><th>Asset</th><th>Global 24h Volume</th><th>liquidityScore</th><th>thin flag</th></tr></thead>
<tbody>
<tr><td>BTC</td><td>$18.1B</td><td>100</td><td>false</td></tr>
<tr><td>ETH</td><td>$7.0B</td><td>100</td><td>false</td></tr>
<tr><td>SOL</td><td>$1.7B</td><td>~99</td><td>false</td></tr>
<tr><td>LINK</td><td>$152M</td><td>97</td><td>false</td></tr>
<tr><td>AVAX</td><td>$121M</td><td>~95</td><td>false</td></tr>
<tr><td>GRT</td><td>$14k</td><td>low</td><td>true</td></tr>
<tr><td>EOS</td><td>&lt; $110k</td><td>low</td><td>true</td></tr>
</tbody>
</table>

<p><strong>Thin liquidity count: 32 of 97 assets</strong> flagged <code>thinLiquidity = true</code>. Review of the 32 confirms all are defensible:</p>

<ul>
<li>5 unmapped tickers (DOG, NFT, GRASS, SKY, VELO) &mdash; no CoinGecko slug in registry; fell back to exchange-reported volume, which is correctly small (exchange volume, not global)</li>
<li>SKY: $16 in confirmed global volume &mdash; genuinely not tradable</li>
<li>GRT, EOS, MKR: confirmed sub-$110k global volume</li>
<li>Remaining 24: small-cap and micro-cap assets (ZBCN, XCN, IOTA, FLOW, CFX, BTT, HNT, THETA, SNX, NEO, TWT, IMX, ENS, MANA, SAND, VET, RAY, LDO, STRK, WIF, NMR, TFUEL, TRAC, FCT) &mdash; all confirmed below $30M global volume, all correctly thin for grid trading at meaningful scale</li>
</ul>

<p><strong>No major asset is wrongly capped.</strong> BTC, ETH, SOL, LINK, AVAX, XRP, ADA, ARB, NEAR all score deep liquidity and carry no thin flag.</p>

<p><strong>Pre-fix state for comparison:</strong> 91 of 93 graded assets had null <code>liquidityScore</code> before the fix. The 2 exceptions (BTC and ETH) had scores from a prior isolated collection run. The practical effect was that grades for all other 91 assets carried zero liquidity signal.</p>

<h3>3.4 The Capital-Size Interaction (Acknowledged, Not Yet Implemented)</h3>

<p>The grade-level liquidity score measures an asset's intrinsic tradability. It does not account for the user's specific grid configuration &mdash; particularly the interaction between <code>initialCapital</code>, <code>gridLevels</code>, and average order size.</p>

<p>A grid with $5,000 capital and 10 levels places average orders of $500. The same asset may be fully tradable for that configuration and practically untradable for a $50,000 / 20-level configuration that places average orders of $2,500. The same asset, different execution outcome.</p>

<p>The correct resolution is a <strong>deployment-time capital-aware warning</strong>, not a grade-level adjustment. The grade is an asset property (intrinsic liquidity quality). The capital warning is a session property (your specific configuration applied to this asset's liquidity). Implementation of the deployment-time warning is a deferred feature. For the current design, the <code>thinLiquidity</code> flag copy acknowledges the dimension: fills may slip; actual impact depends on your grid size.</p>

<h2>4. Unifying Thesis: Execution-Aware Grading as a Design Principle</h2>

<p>Both corrections reduce to the same principle: measure what the user can actually experience.</p>

<p>Blended-return grading measures a scenario the user does not experience if the FIS works correctly &mdash; a continuous exposure through periods when the strategy is deliberately inactive. Active-period grading measures what the user experiences when the grid is running.</p>

<p>Backtest-only grading implies an execution quality the market may not provide. Liquidity-aware grading caps the implied quality to what the order book can actually deliver, and discloses where that ceiling has been applied.</p>

<p>These are not competing frameworks. They address different dimensions of the same gap between what simulations show and what markets provide:</p>

<table>
<thead><tr><th>Dimension</th><th>Old measure</th><th>Problem</th><th>Corrected measure</th></tr></thead>
<tbody>
<tr><td>Timing</td><td>Blended full-period return</td><td>Penalizes regime-appropriate cash holds</td><td>Active-period (FIS-gated) return</td></tr>
<tr><td>Execution</td><td>Fill at simulated price</td><td>Assumes infinite depth and no market impact</td><td>Liquidity-capped grade + disclosure when depth is insufficient</td></tr>
</tbody>
</table>

<p>Together, they define what Yodacom Research labels <strong>execution-aware grading</strong>: a grading methodology that is aware of when the strategy was running and whether the market can actually fill it.</p>

<p>The counterintuitive implication deserves stating plainly: <strong>a strong backtest can result in a lower grade under this system</strong>. An asset that backtests at A-level return on a thin order book does not receive an A &mdash; because the A implies execution quality that does not exist. The backtest becomes an optimistic scenario estimate under idealized fill conditions &mdash; not a characterization of what live trading will produce.</p>

<p>This is a cost, and it is worth paying. A grade that implies reliable execution on an order book that cannot deliver it is a misrepresentation. The honest grade is the capped one.</p>

<h2>5. Limitations and Data Caveats</h2>

<h3>5.1 Single-Day Volume Proxy</h3>

<p>The <code>liquidityScore</code> volume component currently uses a single 24-hour snapshot from CoinGecko as a proxy for sustained 30-day trading volume. A single day can be distorted by news events, exchange promotions, or wash trading. This limitation is documented in the scoring function and in the <code>confidenceScore</code> field. When daily collection history is sufficient (approximately 30 days), the input will be switched to a rolling 30-day median. Until then, the single-day proxy is used with explicit labeling.</p>

<h3>5.2 Five Unmapped Tickers (Exchange-Volume Fallback)</h3>

<p>Five symbols in the 97-asset catalog &mdash; DOG, NFT, GRASS, SKY, VELO &mdash; have no canonical CoinGecko slug in the <code>cryptocurrency_registry</code> table. For these assets, <code>liquidityCollector.ts</code> falls back to Binance.US exchange-reported volume. This is a conservative fallback: exchange volume is a fraction of global volume, so these assets will be correctly flagged as thin. However, the thin flag for these five assets reflects a data availability gap, not a confirmed thin market. Two are meaningfully different cases: if DOG (Dogecoin) or similar well-known assets were incorrectly unmapped, the thin flag would be a false positive. The 5 unmapped tickers should be resolved by populating the registry &mdash; this is a data maintenance task, not a methodology change.</p>

<h3>5.3 Simulated vs. Tradable Gap (Flat-Slippage Assumption in Backtest)</h3>

<p>CoinRoc's backtesting engine currently models slippage as a flat fee per trade, not as a volatility-conditional, order-size-dependent cost. Real-world slippage on thin order books is non-linear: it increases with order size, worsens during high-volatility periods (precisely when grid activity is highest), and can spike dramatically in illiquid markets. The <code>thinLiquidity</code> grade cap and badge communicate the direction of this risk (&ldquo;treat return as an optimistic estimate under idealized fill conditions&rdquo;) but the backtest number itself does not yet incorporate a realistic slippage model for alts. The cap is therefore a disclosure mechanism, not a quantitative correction of the backtest return.</p>

<p>This gap is known. Volatility-conditional slippage modeling is on the methodology roadmap. Until it is implemented, the backtest return on any thin-liquidity asset should be treated as an optimistic estimate under idealized fill conditions, not a performance guarantee &mdash; which is exactly what the flag copy states.</p>

<h3>5.4 Active-Period Return Does Not Validate FIS Regime Accuracy</h3>

<p>The switch to active-period return assumes that the FIS is correctly classifying market regimes &mdash; that cash-hold periods genuinely represent market conditions where the grid strategy should not run. If the FIS has systematic classification errors (e.g., it holds cash too long in mildly trending markets that a grid could profitably navigate), the active-period return would overstate the grid mechanism's quality by excluding windows where the FIS was wrong to step aside.</p>

<p>Validating FIS regime accuracy is a separate research question. The active-period metric is preferable to the blended metric under the assumption that the FIS is reasonably calibrated. The BTC case provides a partial validation of the metric's construction, though not of live FIS behavior: BTC's active and blended returns are identical (-40.2% both) because the retrospective classifier found no candles to exclude for BTC in Year 2 &mdash; not because a live grid-engagement gate ran the strategy on BTC throughout the period (this test's engagement setting was fixed, not live-gated; see &sect;2.1).</p>

<h3>5.5 Year 2 Forward Test as a Single Walk-Forward Fold</h3>

<p>The grading system uses a Year 2 blind forward test as its primary performance evaluation window. This is a single walk-forward fold. A single out-of-sample period captures one market regime (or one sequence of regimes) and does not provide a confidence interval on the strategy's performance. A more rigorous validation would use multiple walk-forward folds or block-bootstrap confidence intervals on the active-period return. The current grading reflects a point estimate, not a range.</p>

<h2>6. Conclusion</h2>

<p>CoinRoc's grading system now applies two corrections that together constitute execution-aware grading: evaluation on the active-period window when the grid strategy is running, and a liquidity cap when the order book cannot deliver the execution quality implied by the backtest.</p>

<p>The empirical results are substantively meaningful. Applying the active-period filter restored approximately 27 of 37 wrongly-hidden assets to Discovery &mdash; including major assets like LINK, SOL, DOGE, BCH, and HBAR &mdash; while correctly preserving the hidden status of assets like BTC and SHIB that fail on the grid mechanism's own terms. Applying liquidity-aware grading flagged 32 of 97 assets as thin, capped none of the major assets, and disclosed the execution gap explicitly to users.</p>

<p>Both corrections share a design property that is worth naming explicitly: they surface more information rather than less. Assets are not hidden because they are hard to explain. The genuinely failing assets are shown, with their reason for exclusion. The thin-liquidity assets are shown, with their execution ceiling disclosed. The system becomes more honest, not less, about the limits of its own analysis.</p>

<p>That honesty is central to the grading system's purpose. A grade that overstates execution quality &mdash; whether by measuring the wrong performance window or by implying fills the market may not support &mdash; undermines the system's usefulness. Execution-aware grading is, at its core, the discipline of only grading what you can actually verify.</p>

<hr />

<h2>Appendix A: Registry and Implementation References</h2>

<ul>
<li><strong>HAN-DISC-FILTER-01</strong> &mdash; Discovery filter metric correction. Active-period return replaces blended return. Deployed 2026-06-12, commit d7f7ebd9, Railway deploy 35f1f0c1.</li>
<li><strong>RES-LIQ-SCORE-01</strong> &mdash; Liquidity-aware grading methodology. Composite score, B- cap, thinLiquidity flag. Deployed 2026-06-13, commits 23355158 + 76d72a65 (slug fix), 13099121 (Demo API key auth).</li>
<li><strong>Source memos:</strong> <code>han-discovery-filter-metric-2026-06-12.md</code>, <code>han-liquidity-score-methodology-2026-06-13.md</code></li>
</ul>

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

<p><em>This paper covers Sections 1&ndash;6 of the source research report. A follow-up publication (Sections 7&ndash;10, the favorable-conditions and rating-reliability affirmative case) is pending a separate Jeremy review and additional Matlock-specified compliance edits.</em></p>

<hr />

<p><em>RES-EXEC-GRADING-01 &mdash; Han Kessel, Trading/Algorithm Specialist, Yodacom Research. Matlock compliance review completed 2026-06-13 (CLEARED-WITH-EDITS, Gate 1). Article adaptation: Lando, Senior Content Writer &amp; Strategist.</em></p>

</article>
