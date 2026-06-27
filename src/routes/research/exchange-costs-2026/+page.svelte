<svelte:head>
	<title>Exchange Costs, Maker/Taker Execution, and Their Quantified Impact on Grid Trading Returns | Yodacom Research</title>
	<meta name="description" content="A 37-fold fee difference. A 35.2% taker fill rate under standard GTC orders. GTX post-only enforcement improved average grid returns from −9.99% to +4.73%. Full walk-forward study across 4 symbols, 36 folds, 2013–2025." />
	<meta property="og:title" content="Exchange Costs: The Hidden Variable in Grid Trading Performance | Yodacom Research" />
	<meta property="og:description" content="Exchange fees range from $117 to $4,380/year on the same $10,000 grid. GTX post-only improved returns by 14.7 percentage points. The mechanism is crash prevention, not fee saving." />
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
		Exchange Costs, Maker/Taker Execution, and Their Quantified Impact on Grid Trading Returns
	</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		Exchange fee structures and order execution type are two of the most controllable cost variables in a retail grid trading strategy. This paper quantifies their combined impact across 36 walk-forward folds, 4 symbols, and 2013–2025 data.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Authors</dt><dd>Han Kessel &middot; Jeremy J. Black, Editor</dd>
		<dt class="text-slate-light">Window</dt><dd>2013–2025</dd>
		<dt class="text-slate-light">Assets / Folds</dt><dd>4 symbols · 36 folds</dd>
		<dt class="text-slate-light">Key finding</dt><dd>GTX enforcement: &minus;9.99% &rarr; +4.73% avg return (+14.7pp)</dd>
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

<p>Exchange fee structures and order execution type are two of the most controllable cost variables in a retail grid trading strategy, yet they are systematically underweighted in most trading decisions. This paper quantifies their combined impact using walk-forward backtests across four assets and 36 folds, spanning 2013 through 2025. At the Coinbase Advanced retail cost tier (0.40% maker / 0.60% taker), the annual fee drag on a $10,000 grid trading at two round-trips per day ranges from $117 at the cheapest available exchange (OKX US, maker rate) to $4,380 at the most expensive (Coinbase Advanced, taker rate) — a 37-fold difference. A GTX post-only (maker-only) execution study across 36 walk-forward folds shows that 35.2% of grid limit orders would fill as taker under standard GTC order type. The naive fee-savings estimate from post-only enforcement is &minus;$10,847 (fees saved minus missed-fill profits). The full portfolio simulation result is that GTX enforcement improved average grid strategy returns from &minus;9.99% to +4.73% — a 14.7-percentage-point improvement per deployment. (Aggregate across 36 &times; $10,000 walk-forward folds: +$52,980 versus &minus;$35,962 for GTC; included as a scale validation metric.) The two model figures are not contradictory — they answer different questions. The full portfolio simulation result is the more relevant figure for evaluating GTX as a portfolio choice, and the mechanism is not primarily fee saving: it is crash protection. GTX enforcement prevents the grid from purchasing into bear cascades where inventory never sells. In bull markets, GTX costs approximately &minus;$3,208 aggregate versus GTC over 22 folds. In bear markets, it saves approximately +$51,684 aggregate over 10 folds. The net is strongly positive. Implementation of GTX in the CoinRoc BinanceUSAdapter is documented. Forward work at sub-daily bar resolution is required to quantify retry benefit.</p>

<hr />

<h2>1. Introduction</h2>

<p>Exchange fee structures rank among the most controllable variables a grid trader can optimize. Unlike volatility, regime, or macroeconomic conditions, the fee rate paid per fill is a known quantity before a single order is placed. Yet in practice, retail traders routinely select exchanges based on brand recognition, coin availability, or convenience, and accept fee structures that can consume 30–60% of the strategy's gross returns before any market risk is expressed.</p>

<p>The problem is compounded by two widely misunderstood mechanics. First, grid trading is structurally a maker strategy: orders are placed at fixed price levels in advance and should rest in the order book until price crosses them. Under standard GTC (Good Till Cancelled) order types, however, an order placed when price has already moved past the level executes immediately as a taker fill — at taker fees, with no warning, and with no mechanism in the adapter to detect or log this. On active exchanges, this silent taker leakage can affect 30–40% of all grid fills, as this paper documents. Second, the stablecoin choice is not fee-neutral: Coinbase Advanced charges 0.40%/0.60% on all pairs except USDC pairs for Coinbase One subscribers, who pay zero fees.</p>

<p>This paper provides the quantitative foundation for two companion consumer education articles, which explain these concepts in plain English. Here we document the methodology, the exact numbers, and the simulation evidence in full.</p>

<p>The analysis covers three components: (1) The fee landscape for US retail grid traders in 2026, including OKX US fees verified from the May 2025 relaunch; (2) A 36-fold walk-forward GTX vs. GTC study showing the full portfolio impact of post-only order enforcement; (3) Implementation details of the GTX fix in the CoinRoc BinanceUSAdapter.</p>

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

<p><strong>Table 3: Annual Fee Burden by Exchange and Order Type — $10,000 Portfolio</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Exchange</th><th>All Maker</th><th>All Taker</th><th>Mixed (35.2% taker)</th><th>Coinbase One (USDC)</th></tr></thead>
<tbody>
<tr><td>Coinbase Advanced</td><td>$2,920</td><td>$4,380</td><td>$3,215</td><td>$0</td></tr>
<tr><td>Binance.US</td><td>$730</td><td>$1,168</td><td>$861</td><td>N/A</td></tr>
<tr><td>OKX US</td><td>$584</td><td>$730</td><td>$635</td><td>N/A</td></tr>
<tr><td>Kraken</td><td>$1,168</td><td>$1,898</td><td>$1,369</td><td>N/A</td></tr>
<tr><td>Hyperliquid (ref)</td><td>$109</td><td>$328</td><td>$183</td><td>N/A</td></tr>
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

<p>This is not an edge case. In crypto markets, which exhibit strong opening gap behavior at daily bar resolution, a meaningful fraction of grid buy orders are placed at levels the price has already passed at bar open. The GTX (Post-Only) order type corrects this: the exchange rejects orders that would execute as taker before acceptance. The question this paper answers is: what is the net effect of those rejections on portfolio performance?</p>

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

<h3>3.3 Rejection Rate Findings</h3>

<p>Of 12,645 total buy fills simulated under GTC, 4,452 would be rejected under GTX enforcement. The aggregate rejection rate is <strong>35.2%</strong>.</p>

<p><strong>Table 5: GTX Rejection Rate by Symbol</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Symbol</th><th>Folds</th><th>Avg Rejection Rate</th><th>Notes</th></tr></thead>
<tbody>
<tr><td>BTCUSD</td><td>13</td><td>33.5%</td><td>Most consistent across regimes</td></tr>
<tr><td>ETHUSD</td><td>9</td><td>33.6%</td><td>Similar to BTC</td></tr>
<tr><td>ADAUSD</td><td>7</td><td>25.8%</td><td>Lower — fewer gap events in ADA</td></tr>
<tr><td>STXUSD</td><td>7</td><td>40.5%</td><td>Higher — illiquid small-cap with frequent gaps</td></tr>
</tbody>
</table>
</div>

<p>The rejection rate is remarkably consistent across regimes: 33.51% in bull folds, 33.59% in bear folds, 32.35% in sideways folds. Gap behavior at bar open is driven by illiquidity and event-driven price moves, not by the direction of the trend.</p>

<h3>3.4 The Two Models and Why They Disagree</h3>

<h4>The Naive Model: &minus;$10,847</h4>

<p>The first analysis approach estimated GTX impact analytically by computing what would have happened if each of the 4,452 rejected fills had been skipped. For each rejection: fee savings = taker fee minus maker fee; missed profit = assumed round-trip gain of 2.59% minus total fees. This yields +$1,618.91 fee savings and &minus;$12,465.60 missed fill revenue, net <strong>&minus;$10,846.69</strong>.</p>

<p>This number is valid for a narrow question: "if every buy fill is assumed to eventually sell profitably at the target level above it, what is the fee-saving tradeoff?" But the assumption is the problem. Not every buy fill eventually sells above entry. In a bear market, the GTC grid buys at every level as price falls, accumulating inventory that never recovers. Those fills earn nothing.</p>

<h4>The Full Portfolio Model: +$52,980</h4>

<p>The correct approach runs three independent, complete portfolio simulations.</p>

<p><strong>Table 6: GTX vs GTC — Full Portfolio Results by Regime</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Regime</th><th>Folds</th><th>GTC Net Return</th><th>GTX No Retry</th><th>GTX + Retry</th><th>Delta vs GTC</th></tr></thead>
<tbody>
<tr><td>Bull</td><td>22</td><td>+$18,158</td><td>+$14,950</td><td>+$14,950</td><td><strong>&minus;$3,208</strong></td></tr>
<tr><td>Bear</td><td>10</td><td>&minus;$53,545</td><td>&minus;$1,861</td><td>&minus;$1,861</td><td><strong>+$51,684</strong></td></tr>
<tr><td>Sideways</td><td>4</td><td>&minus;$575</td><td>+$3,928</td><td>+$3,928</td><td><strong>+$4,503</strong></td></tr>
<tr><td><strong>All folds</strong></td><td><strong>36</strong></td><td><strong>&minus;$35,962</strong></td><td><strong>+$17,018</strong></td><td><strong>+$17,018</strong></td><td><strong>+$52,980</strong></td></tr>
</tbody>
</table>
</div>

<p>The total net of the GTC baseline across all 36 folds is &minus;$35,962. GTX turns this to +$17,018. The improvement is almost entirely driven by the 10 bear folds: +$51,684 in bear folds versus &minus;$3,208 in bull folds.</p>

<h3>3.5 The Bear-Market Crash Filter Mechanism</h3>

<p>The +$51,684 bear-regime improvement is not a fee effect. It is a structural effect. GTC forces the grid to buy at every level that price crosses, including every level on the way down in a sustained crash. GTX rejects orders when price has already crossed the level at bar open — meaning it rejects the buys that are being placed into a continuing downward move. On a gap-down day in a bear market, price opens below the prior close. Under GTC, all levels fill immediately as taker at the open. Under GTX, all of them are rejected. The grid holds cash instead of accumulating inventory in a falling market.</p>

<p>Selected bear-fold results illustrating the mechanism:</p>
<ul>
<li><strong>BTC 2018 (bear, &minus;72.4% B&H):</strong> GTC &minus;51.2%, GTX +7.0%, delta <strong>+$5,820</strong></li>
<li><strong>ETH 2022 (bear, &minus;68.3% B&H):</strong> GTC &minus;57.9%, GTX &minus;5.6%, delta <strong>+$5,223</strong></li>
<li><strong>ADA 2022 (bear, &minus;82.2% B&H):</strong> GTC &minus;71.8%, GTX &minus;2.1%, delta <strong>+$6,969</strong></li>
<li><strong>STX 2022 (bear, &minus;90.9% B&H):</strong> GTC &minus;80.4%, GTX &minus;1.1%, delta <strong>+$7,926</strong></li>
</ul>

<h3>3.6 The Retry Result and Why It Equals Zero at Daily Resolution</h3>

<p>The GTX + Single-Candle Retry scenario produces identical results to GTX No Retry across all 36 folds. At daily bar resolution, if price opens above a level on day T+1, the standard (non-retry) algorithm also detects this and waits for the next down-cross — which, when it arrives, is indistinguishable from what the retry would have captured. The retry is redundant at daily resolution and belongs in the hourly/4-hour simulation layer.</p>

<h3>3.7 GTX Analysis at OKX US Rates</h3>

<p>The GTX mechanism's crash-protection component (+$51,684 in bear folds) operates identically regardless of fee schedule — it is about which orders were not placed, not about the fee differential per fill. The fee-saving component is 10x smaller at OKX US base rates (0.02% taker minus maker versus 0.20% at Coinbase). The estimated adjusted GTX advantage at OKX US rates is approximately +$52,491 versus +$52,980 at Coinbase rates — a 0.9% difference that does not change any qualitative conclusion.</p>

<p><em>Note: Figures in this section are analytical estimates derived from component decomposition of the existing Coinbase-rate simulation results. A full re-run at OKX US rates has not been conducted.</em></p>

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

<p><strong>Maker/taker execution:</strong> 35.2% of grid limit orders fill as taker under standard GTC order type, measured across 36 walk-forward folds and four symbols. Enforcing GTX post-only rejection improved average grid strategy returns from &minus;9.99% to +4.73% — a 14.7-percentage-point improvement per deployment. The mechanism is crash prevention, not fee saving. In bear folds: +$51,684 aggregate. In bull folds: &minus;$3,208 aggregate. Net: +$52,980.</p>

<p><strong>OKX US as the US cost floor.</strong> Among the four accessible US exchanges in this study, OKX US base tier represents the lowest per-fill cost floor: $584/year for a $10,000 all-maker portfolio at 2 fills/day. This is 20% below Binance.US, 59% below Kraken, and 80% below Coinbase Advanced. The GTX advantage at OKX US rates is approximately +$52,491 — essentially unchanged from the Coinbase-rate result.</p>

<p><strong>Implementation:</strong> GTC has been replaced with GTX in the CoinRoc BinanceUSAdapter as of 2026-05-02. The Binance.US taker fee was corrected from 0.10% to 0.16%. Single-candle retry adds zero measurable value at daily bar resolution.</p>

<hr />

<h2>Appendix A: Per-Fold GTX vs GTC Comparison</h2>

<p><strong>Table A1: Full 36-Fold Per-Fold Detail</strong></p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Symbol</th><th>Year</th><th>Regime</th><th>B&H</th><th>GTC Net %</th><th>GTX No Retry</th><th>Delta</th></tr></thead>
<tbody>
<tr><td>BTCUSD</td><td>2013</td><td>bull</td><td>+5,463%</td><td>2.9%</td><td>2.0%</td><td>&minus;$91</td></tr>
<tr><td>BTCUSD</td><td>2014</td><td>bear</td><td>&minus;57.5%</td><td>&minus;40.3%</td><td>&minus;5.6%</td><td>+$3,471</td></tr>
<tr><td>BTCUSD</td><td>2015</td><td>bull</td><td>+32.7%</td><td>7.3%</td><td>15.5%</td><td>+$812</td></tr>
<tr><td>BTCUSD</td><td>2016</td><td>bull</td><td>+122.7%</td><td>15.0%</td><td>11.9%</td><td>&minus;$315</td></tr>
<tr><td>BTCUSD</td><td>2017</td><td>bull</td><td>+1,208%</td><td>13.3%</td><td>10.4%</td><td>&minus;$294</td></tr>
<tr><td>BTCUSD</td><td>2018</td><td>bear</td><td>&minus;72.4%</td><td>&minus;51.2%</td><td>7.0%</td><td><strong>+$5,820</strong></td></tr>
<tr><td>BTCUSD</td><td>2019</td><td>bull</td><td>+94.7%</td><td>5.4%</td><td>4.3%</td><td>&minus;$113</td></tr>
<tr><td>BTCUSD</td><td>2020</td><td>bull</td><td>+302.6%</td><td>12.6%</td><td>9.5%</td><td>&minus;$311</td></tr>
<tr><td>BTCUSD</td><td>2021</td><td>bull</td><td>+57.5%</td><td>16.4%</td><td>12.9%</td><td>&minus;$355</td></tr>
<tr><td>BTCUSD</td><td>2022</td><td>bear</td><td>&minus;65.4%</td><td>&minus;56.5%</td><td>&minus;7.6%</td><td><strong>+$4,893</strong></td></tr>
<tr><td>BTCUSD</td><td>2023</td><td>bull</td><td>+154.6%</td><td>6.0%</td><td>4.4%</td><td>&minus;$164</td></tr>
<tr><td>BTCUSD</td><td>2024</td><td>bull</td><td>+111.3%</td><td>9.3%</td><td>7.5%</td><td>&minus;$182</td></tr>
<tr><td>BTCUSD</td><td>2025</td><td>sideways</td><td>&minus;7.3%</td><td>&minus;11.2%</td><td>4.9%</td><td><strong>+$1,612</strong></td></tr>
<tr><td>ETHUSD</td><td>2017</td><td>bull</td><td>+8,914%</td><td>3.6%</td><td>2.4%</td><td>&minus;$115</td></tr>
<tr><td>ETHUSD</td><td>2018</td><td>bear</td><td>&minus;82.4%</td><td>&minus;61.8%</td><td>&minus;10.0%</td><td><strong>+$5,184</strong></td></tr>
<tr><td>ETHUSD</td><td>2019</td><td>sideways</td><td>&minus;8.9%</td><td>&minus;1.2%</td><td>4.6%</td><td>+$575</td></tr>
<tr><td>ETHUSD</td><td>2020</td><td>bull</td><td>+464.5%</td><td>10.8%</td><td>7.7%</td><td>&minus;$308</td></tr>
<tr><td>ETHUSD</td><td>2021</td><td>bull</td><td>+404.1%</td><td>5.6%</td><td>3.9%</td><td>&minus;$175</td></tr>
<tr><td>ETHUSD</td><td>2022</td><td>bear</td><td>&minus;68.3%</td><td>&minus;57.9%</td><td>&minus;5.6%</td><td><strong>+$5,223</strong></td></tr>
<tr><td>ETHUSD</td><td>2023</td><td>bull</td><td>+90.1%</td><td>6.6%</td><td>7.0%</td><td>+$38</td></tr>
<tr><td>ETHUSD</td><td>2024</td><td>bull</td><td>+41.6%</td><td>6.2%</td><td>9.6%</td><td>+$344</td></tr>
<tr><td>ETHUSD</td><td>2025</td><td>sideways</td><td>&minus;11.5%</td><td>&minus;6.6%</td><td>9.6%</td><td><strong>+$1,613</strong></td></tr>
<tr><td>ADAUSD</td><td>2021</td><td>bull</td><td>+647.1%</td><td>5.2%</td><td>3.4%</td><td>&minus;$189</td></tr>
<tr><td>ADAUSD</td><td>2022</td><td>bear</td><td>&minus;82.2%</td><td>&minus;71.8%</td><td>&minus;2.1%</td><td><strong>+$6,969</strong></td></tr>
<tr><td>ADAUSD</td><td>2023</td><td>bull</td><td>+137.7%</td><td>11.1%</td><td>8.2%</td><td>&minus;$294</td></tr>
<tr><td>ADAUSD</td><td>2024</td><td>bull</td><td>+35.3%</td><td>17.8%</td><td>14.9%</td><td>&minus;$288</td></tr>
<tr><td>ADAUSD</td><td>2025</td><td>bear</td><td>&minus;63.8%</td><td>&minus;40.7%</td><td>6.7%</td><td><strong>+$4,738</strong></td></tr>
<tr><td>STXUSD</td><td>2020</td><td>bull</td><td>+300.4%</td><td>17.2%</td><td>9.5%</td><td>&minus;$766</td></tr>
<tr><td>STXUSD</td><td>2021</td><td>bull</td><td>+407.0%</td><td>7.2%</td><td>4.0%</td><td>&minus;$318</td></tr>
<tr><td>STXUSD</td><td>2022</td><td>bear</td><td>&minus;90.9%</td><td>&minus;80.4%</td><td>&minus;1.1%</td><td><strong>+$7,926</strong></td></tr>
<tr><td>STXUSD</td><td>2023</td><td>bull</td><td>+605.3%</td><td>1.9%</td><td>0.6%</td><td>&minus;$126</td></tr>
<tr><td>STXUSD</td><td>2024</td><td>sideways</td><td>&minus;5.8%</td><td>13.2%</td><td>20.2%</td><td>+$704</td></tr>
<tr><td>STXUSD</td><td>2025</td><td>bear</td><td>&minus;84.8%</td><td>&minus;74.9%</td><td>&minus;0.3%</td><td><strong>+$7,459</strong></td></tr>
</tbody>
</table>
</div>

<p><em>ADAUSD 2019, 2020 and STXUSD 2019 had zero fills (insufficient history or viability gate rejection). Delta values in bold are material bear-fold improvements (&gt;$1,000).</em></p>

<hr />

<p><em>Kessel, H., &amp; Black, J. J. (2026). Exchange Costs, Maker/Taker Execution, and Their Quantified Impact on Grid Trading Returns. Yodacom Research.</em></p>

<p><em>Data: Tiingo daily bars, 2013–2025. Validation dataset: 4 symbols (BTCUSD, ETHUSD, ADAUSD, STXUSD), 36 walk-forward folds. Cost model: Coinbase Advanced retail (0.40% maker / 0.60% taker / 0.05% slippage). Exchange fee data verified May 2026. Implementation data: Rook adapter fix 2026-05-02.</em></p>

<p><em>All simulation figures are out-of-sample walk-forward results from a research harness, not live trading results. Past simulated performance does not guarantee future results. This paper is for research and educational purposes only and does not constitute investment advice. Exchange availability, fee schedules, and regulatory status are subject to change; readers should verify current rates at each exchange before making trading decisions. The GENIUS Act regulatory analysis reflects publicly available information as of May 2026 and is not a legal opinion.</em></p>

</article>
