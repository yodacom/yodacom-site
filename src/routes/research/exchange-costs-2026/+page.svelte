<svelte:head>
	<title>Exchange Costs and Maker/Taker Execution for Grid Trading | Yodacom Research</title>
	<meta name="description" content="US exchange fee schedules compared for retail grid trading, and how standard GTC orders can fill as taker. Simulated return results withdrawn while CoinRoc rebuilds its simulator with stricter assumptions." />
	<meta property="og:title" content="Exchange Costs: The Hidden Variable in Grid Trading Performance | Yodacom Research" />
	<meta property="og:description" content="US exchange fee schedules compared for retail grid trading, and how standard GTC orders can fill as taker. Simulated return results withdrawn while CoinRoc rebuilds its simulator with stricter assumptions." />
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
		Exchange fee structures and order execution type are two of the most controllable cost variables in a retail grid trading strategy. This paper compares US exchange fee schedules and documents the maker/taker execution gap. Simulated return results have been withdrawn.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Authors</dt><dd>Han Kessel &middot; Jeremy J. Black, Editor</dd>
		<dt class="text-slate-light">Window</dt><dd>2013–2025</dd>
		<dt class="text-slate-light">Assets / Folds</dt><dd>4 symbols · 36 folds</dd>
		<dt class="text-slate-light">Key finding</dt><dd>US exchange fee schedules compared, verified May 2026</dd>
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

<p>Exchange fee structures and order execution type are two of the most controllable cost variables in a retail grid trading strategy, yet they are systematically underweighted in most trading decisions. This paper compares US exchange fee schedules and documents the maker/taker execution gap; the walk-forward return results it once reported have been withdrawn. At the Coinbase Advanced retail cost tier (0.40% maker / 0.60% taker), the annual fee drag on a $10,000 grid trading at two round-trips per day ranges from $584 at the cheapest available exchange (OKX US, maker rate) to $4,380 at the most expensive (Coinbase Advanced, taker rate) — about 7.5 times, on the same fill-volume basis. A GTX post-only (maker-only) execution study across 36 walk-forward folds was designed to measure how often grid limit orders would fill as taker under standard GTC order type; its simulated results have been withdrawn. Earlier versions of this page reported simulated returns; we've withdrawn them while we rebuild our simulator with stricter assumptions. Implementation of GTX in the CoinRoc BinanceUSAdapter is documented.</p>

<hr />

<h2>1. Introduction</h2>

<p>Exchange fee structures rank among the most controllable variables a grid trader can optimize. Unlike volatility, regime, or macroeconomic conditions, the fee rate paid per fill is a known quantity before a single order is placed. Yet in practice, retail traders routinely select exchanges based on brand recognition, coin availability, or convenience, and accept fee structures without comparing them.</p>

<p>The problem is compounded by two widely misunderstood mechanics. First, grid trading is structurally a maker strategy: orders are placed at fixed price levels in advance and should rest in the order book until price crosses them. Under standard GTC (Good Till Cancelled) order types, however, an order placed when price has already moved past the level executes immediately as a taker fill — at taker fees, with no warning, and with no mechanism in the adapter to detect or log this. On active exchanges, this silent taker leakage can affect 30–40% of all grid fills, as this paper documents. Second, the stablecoin choice is not fee-neutral: Coinbase Advanced charges 0.40%/0.60% on all pairs except USDC pairs for Coinbase One subscribers, who pay zero fees.</p>

<p>This paper provides the quantitative foundation for two companion consumer education articles, which explain these concepts in plain English. Here we document the methodology and the exact fee numbers.</p>

<p>The analysis covers three components: (1) The fee landscape for US retail grid traders in 2026, including OKX US fees verified from the May 2025 relaunch; (2) The design of a 36-fold walk-forward GTX vs. GTC study of post-only order enforcement, whose simulated return results have been withdrawn; (3) Implementation details of the GTX fix in the CoinRoc BinanceUSAdapter.</p>

<hr />

<h2>2. Exchange Fee Landscape for US Retail Grid Traders</h2>

<h3>2.1 Fee Comparison: Available Exchanges</h3>

<p><strong>Table 1: US Exchange Fee Comparison — Spot, Base Tier</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Exchange</th><th>Maker</th><th>Taker</th><th>US Availability</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>Coinbase Advanced</td><td>0.40%</td><td>0.60%</td><td>Full (50 states)</td><td>Zero fees on USDC pairs for Coinbase One subscribers</td></tr>
<tr><td>Binance.US</td><td>0.10%</td><td>0.16%</td><td>Most states</td><td>BNB discount available (up to 25%)</td></tr>
<tr><td>OKX US</td><td>0.08%</td><td>0.10%</td><td>47 states + PR (NY, TX excluded)</td><td>Launched May 2025; separate us.okx.com endpoint</td></tr>
<tr><td>Kraken</td><td>0.16%</td><td>0.26%</td><td>Most states</td><td>Maker fee rises to 0.26% for stablecoin pairs</td></tr>
<tr><td>Hyperliquid (perps)</td><td>0.015%</td><td>0.045%</td><td><strong>US BLOCKED</strong></td><td>Reference only; USDC-margined</td></tr>
</tbody>
</table>
</div>

<p><em>Fee rates verified May 2026. Subject to change without notice; verify current rates at each exchange before making trading decisions.</em></p>

<p><strong>Table 1b: Round-Trip Cost Comparison — Maker + Taker + Slippage</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Exchange</th><th>Maker</th><th>Taker</th><th>Slippage (est.)</th><th>Round-Trip</th><th>vs. OKX US Base</th></tr></thead>
<tbody>
<tr><td>OKX US (Base)</td><td>0.08%</td><td>0.10%</td><td>0.05%</td><td><strong>0.23%</strong></td><td>baseline</td></tr>
<tr><td>OKX US (VIP 1)</td><td>0.068%</td><td>0.08%</td><td>0.05%</td><td><strong>0.198%</strong></td><td>&minus;0.032pp</td></tr>
<tr><td>OKX US (VIP 2)</td><td>0.06%</td><td>0.07%</td><td>0.05%</td><td><strong>0.18%</strong></td><td>&minus;0.05pp</td></tr>
<tr><td>Binance.US (Base)</td><td>0.10%</td><td>0.16%</td><td>0.05%</td><td><strong>0.31%</strong></td><td>+0.08pp (+35%)</td></tr>
<tr><td>Kraken (Base)</td><td>0.16%</td><td>0.26%</td><td>0.05%</td><td><strong>0.47%</strong></td><td>+0.24pp (+104%)</td></tr>
<tr><td>Coinbase Advanced (Base)</td><td>0.40%</td><td>0.60%</td><td>0.05%</td><td><strong>1.05%</strong></td><td>+0.82pp (+357%)</td></tr>
</tbody>
</table>
</div>

<p>Three observations from this table deserve attention. First, the spread between Coinbase Advanced and OKX US is not marginal. At taker rates, Coinbase charges 6x what OKX charges. At maker rates, the ratio is 5x. For a strategy that executes dozens of fills per day, this is not a rounding error.</p>

<p>Second, Binance.US taker fees were misconfigured in the CoinRoc fee model as 0.10% until Rook's 2026-05-02 correction. The correct taker rate is 0.16%. All backtest results in this paper use the corrected 0.16% taker rate.</p>

<p>Third, Hyperliquid's 0.015% maker rate is so far below the US-accessible alternatives that it constitutes a different cost class entirely — the reference benchmark that frames how much US traders are paying by regulatory necessity.</p>

<h3>2.2 VIP Tier Structure and Compounding Advantage</h3>

<p><strong>Table 2: OKX US Fee Tiers — Group 1 Pairs (BTC/USDC, ETH/USDC)</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Tier</th><th>30d Volume OR Assets</th><th>Maker</th><th>Taker</th></tr></thead>
<tbody>
<tr><td>Regular</td><td>&lt; $1M / &lt; $100K</td><td>0.080%</td><td>0.100%</td></tr>
<tr><td>VIP 1</td><td>$1M / $100K</td><td>0.0675%</td><td>0.080%</td></tr>
<tr><td>VIP 2</td><td>$5M / $250K</td><td>0.060%</td><td>0.070%</td></tr>
<tr><td>VIP 3</td><td>$10M / $500K</td><td>0.050%</td><td>0.060%</td></tr>
<tr><td>VIP 4</td><td>$20M / $2M</td><td>0.040%</td><td>0.055%</td></tr>
<tr><td>VIP 5</td><td>$100M / $5M</td><td>0.020%</td><td>0.045%</td></tr>
<tr><td>VIP 6</td><td>$200M / $10M</td><td>0.000%</td><td>0.035%</td></tr>
</tbody>
</table>
</div>

<p><em>Fee rates verified May 2026. Subject to change without notice.</em></p>

<h3>2.3 Annual Fee Cost Model: $10,000 Portfolio at 2 Fills/Day</h3>

<p>A $10,000 grid portfolio executing two full round-trip fills per day generates the following annual fee burden. The model uses average fill size = $100 per leg, 365 days/year, and assumes all fills execute at maker rate when post-only is enforced.</p>

<p>Basis note: every all-maker and all-taker figure in Table 3 equals the fee rate multiplied by $730,000 of annual fill volume. The per-fill assumptions above produce $146,000, so the dollar figures should be read as a comparison between rows (the ratios are independent of volume), not as an absolute cost estimate, until the volume basis is reconciled.</p>

<p><strong>Table 3: Annual Fee Burden by Exchange and Order Type — $10,000 Portfolio</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Exchange</th><th>All Maker</th><th>All Taker</th><th>Coinbase One (USDC)</th></tr></thead>
<tbody>
<tr><td>Coinbase Advanced</td><td>$2,920</td><td>$4,380</td><td>$0</td></tr>
<tr><td>Binance.US</td><td>$730</td><td>$1,168</td><td>N/A</td></tr>
<tr><td>OKX US</td><td>$584</td><td>$730</td><td>N/A</td></tr>
<tr><td>Kraken</td><td>$1,168</td><td>$1,898</td><td>N/A</td></tr>
<tr><td>Hyperliquid (ref)</td><td>$109</td><td>$328</td><td>N/A</td></tr>
</tbody>
</table>
</div>

<p>The Coinbase One case: at $0 annual fees on USDC pairs (subscription $359.88/year), Coinbase One costs $360 flat versus $730 at Binance.US maker-only for a $10,000 portfolio at 2 fills/day. The subscription advantage holds for any portfolio generating less than ~$360K/year in fill volume.</p>

<h3>2.4 USDC vs USDT: Regulatory and Fee Implications</h3>

<p><strong>Table 4: Stablecoin Availability and Fee Implications by Exchange (US Users)</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Exchange</th><th>USDT Available</th><th>USDC Available</th><th>Dominant Quote</th><th>Fee Implication</th></tr></thead>
<tbody>
<tr><td>Binance.US</td><td>Yes</td><td>Yes</td><td>USDT</td><td>No fee differential between pairs</td></tr>
<tr><td>Coinbase Advanced</td><td>Yes (US only)</td><td>Yes</td><td><strong>USDC</strong></td><td>Coinbase One: 0% fees on USDC pairs only</td></tr>
<tr><td>Kraken</td><td>Yes</td><td>Yes</td><td>USDT (by volume)</td><td>No documented fee differential</td></tr>
<tr><td>OKX US</td><td>Yes</td><td>Yes</td><td>Both available</td><td>USDC pairs upgraded Aug 2025 for liquidity</td></tr>
<tr><td>Hyperliquid</td><td>No</td><td><strong>USDC only</strong></td><td>USDC required</td><td>US blocked; USDC is sole margin collateral</td></tr>
</tbody>
</table>
</div>

<p>The GENIUS Act (signed July 18, 2025) established the first US federal framework for payment stablecoins. The practical consequence: Tether (USDT) is an offshore entity with no current path to GENIUS Act compliance. USDT was already banned from EU exchanges as of July 1, 2025 under MiCA. The strategic implication: grid strategies denominated in USDC are structurally sounder for any time horizon extending past late 2026. Note: the exact enforcement timeline depends on the pace of OCC/FDIC final rulemaking, which had not been issued as of the date of this paper.</p>

<hr />

<h2>3. The Maker/Taker Execution Gap in Grid Trading</h2>

<h3>3.1 Theoretical Framework: Why Grid Strategies Are Maker Strategies</h3>

<p>A grid strategy places limit orders at predetermined price levels. A limit buy order placed at $62,000 on BTC is, by design, resting in the order book below current market price. When price falls to $62,000, the order executes as a maker fill. This is the theory. The practice differs in one specific scenario: if the price has moved past a level between bars, then under GTC order type, the order executes immediately against existing book liquidity — a taker fill. The maker fee assumption is wrong.</p>

<p>The GTX (Post-Only) order type corrects this: the exchange rejects orders that would execute as taker before acceptance. The question the study asked was: what is the net effect of those rejections on portfolio performance? Its simulated answer has been withdrawn (see 3.4).</p>

<h3>3.2 Study Design</h3>

<ul>
<li><strong>Symbols:</strong> BTCUSD, ETHUSD, ADAUSD, STXUSD</li>
<li><strong>Period:</strong> 2013–2025 (symbol-dependent)</li>
<li><strong>Walk-forward structure:</strong> 2-year training window, 1-year test window, slide by 1 year</li>
<li><strong>Valid folds:</strong> 36 (4 skipped for insufficient history)</li>
<li><strong>Capital per fold:</strong> $10,000</li>
<li><strong>Cost model:</strong> Coinbase Advanced retail (0.40% maker / 0.60% taker / 0.05% volatility-conditional slippage)</li>
<li><strong>Bar resolution:</strong> Tiingo daily bars, open-price fill detection</li>
<li><strong>Regime classification:</strong> test-window buy-and-hold return (bull &gt;+20%, bear &lt;&minus;20%, sideways = &plusmn;20%)</li>
</ul>

<h3>3.3 Rejection Rate Findings (Withdrawn)</h3>

<p>Earlier versions of this page reported a GTX rejection rate and a per-symbol rejection table. We have withdrawn them: the rates came from a simulator that places orders once per daily bar, so they reflect the simulator's order-placement timing rather than a measured property of live markets. We will publish a rate only if the rebuilt simulator, or live order data, can support it.</p>

<h3>3.4 Simulated Return Results</h3>

<p>Earlier versions of this page reported simulated returns; we've withdrawn them while we rebuild our simulator with stricter assumptions.</p>

<p>What remains is the mechanism. Under GTC, a grid buy order placed after price has already crossed its level executes immediately as a taker fill. Under GTX, the exchange rejects that order instead, so the grid does not buy at levels the price has already passed at bar open. Whether and by how much that changes returns is the question the withdrawn simulation addressed, and we are not presenting a result until the rebuilt simulator can answer it.</p>

<hr />

<h2>4. Implementation: Post-Only Execution in CoinRoc</h2>

<h3>4.1 What Was Changed</h3>

<p><strong>Change 1: BinanceUSAdapter — GTC to GTX.</strong> In <code>src/lib/trading/adapters/BinanceUSAdapter.ts</code>, the <code>placeOrder()</code> function now passes <code>timeInForce: 'GTX'</code> on all limit orders. A dedicated catch branch handles Binance error code &minus;5022 (GTX post-only rejection code), logging it at INFO level. The adapter returns <code>success: false, status: 'rejected'</code> for GTX rejections.</p>

<p><strong>Change 2: Fee Configuration Correction.</strong> In <code>src/lib/trading/adapters/BaseExchangeAdapter.ts</code>, the Binance.US <code>takerFee</code> was corrected from <code>0.001</code> (0.10%) to <code>0.0016</code> (0.16%). The prior value understated taker fee drag by 37.5% on every taker fill.</p>

<hr />

<h2>5. Exchange Selection Framework</h2>

<h3>5.1 Decision Matrix for US Retail Grid Traders</h3>

<p><strong>Table 7: Exchange Selection Matrix — US Retail Grid Trading</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Factor</th><th>Coinbase Advanced</th><th>Binance.US</th><th>OKX US</th><th>Kraken</th></tr></thead>
<tbody>
<tr><td>Base maker fee</td><td>0.40%</td><td>0.10%</td><td>0.08%</td><td>0.16%</td></tr>
<tr><td>Base taker fee</td><td>0.60%</td><td>0.16%</td><td>0.10%</td><td>0.26%</td></tr>
<tr><td>USDC fee advantage</td><td>Strong (Coinbase One: 0%)</td><td>None</td><td>Moderate (USDC pairs live)</td><td>None</td></tr>
<tr><td>US state coverage</td><td>All 50</td><td>Most</td><td>47 + PR (no NY, TX)</td><td>Most</td></tr>
<tr><td>Post-only support</td><td><code>post_only: true</code></td><td>GTX (<code>timeInForce: 'GTX'</code>)</td><td>Available</td><td><code>oflags: 'post'</code></td></tr>
<tr><td>GENIUS Act exposure</td><td>Minimal (USDC-first)</td><td>Moderate (USDT-dominant)</td><td>Moderate</td><td>Moderate</td></tr>
</tbody>
</table>
</div>

<h3>5.2 Fee Structure Comparison by Trader Profile</h3>

<p><em>The following profiles describe how each exchange's documented fee and regulatory structure aligns with different trader objectives; this is not a recommendation to use any particular exchange, and readers should conduct their own due diligence.</em></p>

<p><strong>High-frequency trader profile: fee minimization priority.</strong> OKX US offers the lowest base rates among the exchanges in our comparison for US retail grid traders (0.08% maker / 0.10% taker). OKX US is unavailable in New York and Texas — users in those states must use an alternative exchange.</p>

<p><strong>All-50-states coverage, subscription-model fee optimization profile.</strong> Coinbase Advanced covers all US states and provides a zero-marginal-fee option for Coinbase One subscribers on USDC pairs. The breakeven fill volume is approximately $360K/year ($359.88 &divide; 0.10%). At the $10,000 portfolio level, Coinbase One costs $360 flat versus $730 at Binance.US maker-only.</p>

<p><strong>Middle-tier fees, broad liquidity profile.</strong> Binance.US occupies a middle position on fees and state coverage, with deeper liquidity in BTC/USDT. The USDT-dominant pair structure introduces GENIUS Act regulatory exposure.</p>

<h3>5.3 The USDC Imperative</h3>

<p>For a grid trading product targeting US retail investors, USDC should be the default and primary quote currency. USDT pairs can remain available as a legacy option, but new user onboarding should default to USDC, and the interface should communicate the regulatory preference clearly. This follows from signed law and documented regulatory trajectory, though the precise enforcement timeline remains uncertain pending OCC/FDIC rulemaking.</p>

<hr />

<h2>6. Conclusion</h2>

<p><strong>Exchange selection:</strong> On a $10,000 portfolio executing two round-trip fills per day, annual fee costs range from $0 (Coinbase One USDC pairs) to $4,380 (Coinbase Advanced all-taker). The maker rate differential between OKX US (0.08%) and Coinbase Advanced (0.40%) is 5x.</p>

<p><strong>Maker/taker execution:</strong> The share of grid limit orders that would fill as taker under standard GTC order type has not been established; the earlier simulated rate has been withdrawn. Earlier versions of this page reported simulated returns; we've withdrawn them while we rebuild our simulator with stricter assumptions.</p>

<p><strong>OKX US as the US cost floor.</strong> Among the four accessible US exchanges in this study, OKX US base tier represents the lowest per-fill cost floor: $584/year for a $10,000 all-maker portfolio at 2 fills/day. This is 20% below Binance.US, 59% below Kraken, and 80% below Coinbase Advanced.</p>

<p><strong>Implementation:</strong> GTC has been replaced with GTX in the CoinRoc BinanceUSAdapter as of 2026-05-02. The Binance.US taker fee was corrected from 0.10% to 0.16%.</p>

<hr />

<h2>Appendix A: Per-Fold GTX vs GTC Comparison</h2>

<p>Earlier versions of this page reported simulated returns; we've withdrawn them while we rebuild our simulator with stricter assumptions.</p>

<hr />

<p><em>Kessel, H., &amp; Black, J. J. (2026). Exchange Costs and Maker/Taker Execution for Grid Trading. Yodacom Research.</em></p>

<p><em>Data: Tiingo daily bars, 2013–2025. Validation dataset: 4 symbols (BTCUSD, ETHUSD, ADAUSD, STXUSD), 36 walk-forward folds. Cost model: Coinbase Advanced retail (0.40% maker / 0.60% taker / 0.05% slippage). Exchange fee data verified May 2026. Implementation data: Rook adapter fix 2026-05-02.</em></p>

<p><em>All simulation figures are out-of-sample walk-forward results from a research harness, not live trading results. Past simulated performance does not guarantee future results. This paper is for research and educational purposes only and does not constitute investment advice. Exchange availability, fee schedules, and regulatory status are subject to change; readers should verify current rates at each exchange before making trading decisions. The GENIUS Act regulatory analysis reflects publicly available information as of May 2026 and is not a legal opinion.</em></p>

</article>
