<svelte:head>
	<title>Your LP Yield Calculator Is Lying to You — LPIS Research | Yodacom Research</title>
	<meta name="description" content="Uniswap v3 shows gross fee APY. It hides impermanent loss. Loesch et al. found LPs earned $199M in fees and lost $260M to IL — net −$61M. This paper presents the regime-gated approach that generates real continuous fee income while keeping IL quantifiable." />
	<meta property="og:title" content="Your LP Yield Calculator Is Lying to You | Yodacom Research" />
	<meta property="og:description" content="5,000-iteration Monte Carlo on concentrated LP across 4 tiers, 3 chains. B-tier RXI-gated Arbitrum: +15.2% net APY [+14.3%, +16.1%]. Rating inversion: A-tier is worst LP candidate. 9 data figures." />
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
		<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">June 2026 · LPIS Flagship</span>
	</div>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">
		Your LP Yield Calculator Is Lying to You
	</h1>
	<p class="mb-3 text-xl font-serif text-slate italic">
		Impermanent Loss, Continuous Fee Income, and the CoinRoc Optimization Framework for Concentrated Liquidity
	</p>
	<p class="mb-6 text-lg leading-relaxed text-slate">
		Uniswap v3 displays gross fee APY. It does not display impermanent loss. The gap between those two numbers is where most LP capital goes to die.
	</p>
	<dl class="mb-8 grid grid-cols-2 gap-x-6 gap-y-2 border-y border-rule py-5 text-xs text-slate sm:grid-cols-4">
		<dt class="text-slate-light">Author</dt><dd>Lando &middot; Yodacom Research</dd>
		<dt class="text-slate-light">Method</dt><dd>5,000-iteration Monte Carlo · live-calibrated 2025–26</dd>
		<dt class="text-slate-light">Key finding</dt><dd>B-tier Arbitrum RXI-gated: +15.2% net APY [95% CI: +14.3%, +16.1%]</dd>
		<dt class="text-slate-light">Novel finding</dt><dd>Rating inversion: A-tier coins are worst LP candidates</dd>
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
	prose-table:text-sm prose-th:text-navy-deep prose-th:font-semibold prose-td:text-slate
	prose-blockquote:border-ochre prose-blockquote:text-slate
	prose-code:text-navy-deep prose-code:bg-cream/60 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
	prose-hr:border-rule">

<h2>Executive Summary</h2>

<p>Uniswap v3 displays gross fee APY. It does not display impermanent loss. The gap between those two numbers is where most liquidity provider (LP) capital goes to die.</p>

<p>The academic record on this is not ambiguous. Loesch et al. (2021) analyzed 17 Uniswap v3 pools covering 43% of total value locked during the protocol's first five months of operation. LPs earned $199.3 million in fees. They incurred $260.1 million in impermanent loss. Net result: a $60.8 million loss compared to simply holding the underlying assets. Over 80% of pools showed LP underperformance versus holding. (Loesch et al., arXiv:2111.09192)</p>

<p>This paper presents a different question: not whether most LPs lose money — they do — but whether there is a structured approach to concentrated liquidity provision that generates real, continuous fee income while keeping impermanent loss in a range a deliberate investor can accept and quantify. Our answer is conditional: yes, under a specific combination of asset tier, chain, fee tier, regime gate, and range method. Outside those conditions, you are reproducing the same gross+/net-negative trap Loesch documented.</p>

<p><strong>Key findings:</strong></p>
<ul>
<li>B-tier DeFi coins (LINK, AAVE, UNI, ARB, AVAX) on Arbitrum at the 0.30% fee tier, with RXI regime gating, generate approximately 10–17% net fee income on LP capital in ranging market regimes in simulation. Net APY on total capital: +15.2% [95% CI: +14.3%, +16.1%] in a 5,000-iteration Monte Carlo simulation calibrated to 2025–26 live data — not a historical backtest.</li>
<li>This essentially ties the 50/50 HODL benchmark (+15.7%) — within the confidence interval. The strategies are statistically indistinguishable in mean expectation. We are not claiming LP beats holding.</li>
<li>The income profile is meaningfully different from HODL in character. LP returns arrive as continuous realized fee income; HODL returns arrive as unrealized price appreciation. This distinction is meaningful for income-oriented investors and advisors.</li>
<li>CoinRoc's rating system inversely predicts LP suitability. A-rated coins (ETH, BTC, SOL) are the worst LP candidates. B-rated DeFi coins are the sweet spot. This finding inverts investor intuition and is a novel contribution to the published literature on concentrated LP selection.</li>
<li>Ethereum mainnet is structurally unviable for LP at retail capital levels. Post-Dencun, annual gas on Ethereum mainnet runs $1,047 for a standard operational cycle. Arbitrum: $7.12. Solana: $0.04. Chain selection matters more than fee tier selection for small investors.</li>
<li>All results are from a 5,000-iteration Monte Carlo simulation calibrated to 2025–26 live pool data. Tick-level historical validation is required before any investor-facing point estimates are appropriate. These are simulation results, not empirical backtests.</li>
</ul>

<hr />

<h2>1. The Problem: What the UI Shows and What It Omits</h2>

<p>When you open Uniswap v3 and look at a pool, you see a gross fee APY. For a typical WETH/USDC 0.05% pool on Ethereum mainnet, that number on the date of this analysis was 23.0%. For a 0.30% fee-tier pool on a mid-cap DeFi token, you might see 30–45%.</p>

<p>The formula behind that number is straightforward: <code>Fee APY = (7d_volume / TVL) &times; fee_tier &times; 52</code></p>

<p>What the formula omits:</p>
<ol>
<li><strong>Impermanent loss</strong> — the largest single cost, amplified by concentrated range width</li>
<li><strong>Gas and transaction costs</strong> — size-independent dollar costs that structurally disadvantage small positions</li>
<li><strong>JIT liquidity extraction</strong> — sophisticated actors who add concentrated liquidity in the block before a large swap and remove it after, capturing the fee (Kaiko Research: JIT attacks reached 10% of attacked trades in studied USDC pools)</li>
<li><strong>TVL dilution</strong> — new LPs entering the pool reduce your share of swap volume</li>
<li><strong>Loss-Versus-Rebalancing (LVR)</strong> — Milionis et al. (2022) formalized the structural cost every AMM LP pays when arbitrageurs trade against a stale price. LVR scales quadratically with volatility. It is not avoidable by better range selection.</li>
</ol>

<!-- Figure 1: chain economics — maps to Sabine file fig2-chain-economics.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 1 — Chain Economics Comparison</div>
	<iframe
		src="/research/lp-yield-2026/fig2-chain-economics.html"
		title="Figure 1 — Chain economics: Ethereum vs. Arbitrum vs. Solana gas cost comparison"
		class="w-full rounded border border-rule"
		style="height: 420px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Chain economics comparison — minimum viable capital, annual gas, RXI-gated B-tier net APY, viability verdict. Yodacom Research / Monte Carlo simulation calibrated to 2025–26 live data.</div>
</div>

<!-- Explainer 1: What is impermanent loss? -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Concept Explainer — What Is Impermanent Loss?</div>
	<iframe
		src="/research/lp-yield-2026/explainer1-impermanent-loss.html"
		title="Concept explainer — What is impermanent loss?"
		class="w-full rounded border border-rule"
		style="height: 520px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<hr />

<h2>2. The Impermanent Loss Mechanism in Concentrated Liquidity</h2>

<p>In a Uniswap v2 full-range pool, if the price of a token doubles, the LP incurs approximately 5.7% IL versus holding. In Uniswap v3 concentrated liquidity, the LP's capital is deployed only within a defined price range [Pa, Pb]. The concentration factor amplifies both fee earnings and IL.</p>

<p>The exact Uniswap v3 concentrated LP formula:</p>

<pre><code>Range: [Pa = entry × 0.70, Pb = entry × 1.40]  (−30% lower band, +40% upper band)

When Pa ≤ P ≤ Pb (in range):
  x = L × (1/√P − 1/√Pb)    [crypto units held]
  y = L × (√P − √Pa)         [USDC units held]
  LP value = x × P + y

When P &lt; Pa (below range, fully in crypto):
  LP value = L × (1/√Pa − 1/√Pb) × P

When P &gt; Pb (above range, fully in USDC):
  LP value = L × (√Pb − √Pa)    [value fixed in USD]</code></pre>

<p>Our IL stress-test results using the tight range [−30%, +40%]:</p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Price scenario during LP period</th><th>IL vs. HODL</th><th>In range?</th></tr></thead>
<tbody>
<tr><td>Sideways (flat)</td><td>0.00%</td><td>Yes — full fee accumulation</td></tr>
<tr><td>+10% drift</td><td>&minus;2.3%</td><td>Yes — well covered by fee income</td></tr>
<tr><td>+30% sustained move</td><td>&minus;16.6%</td><td>Yes (approaching upper bound)</td></tr>
<tr><td>&minus;20% drift</td><td>&minus;11.4%</td><td>Yes — covered by fees in ranging regime</td></tr>
<tr><td>&minus;30% exit lower band</td><td>&minus;29.4%</td><td>No — RXI gate should signal exit first</td></tr>
<tr><td>&minus;50% crash</td><td>&minus;46.7%</td><td>No — tail risk; RXI reduces frequency, does not eliminate</td></tr>
<tr><td>&minus;50% crash break-even gross APY</td><td colspan="2">~234% — structural impossibility</td></tr>
</tbody>
</table>
</div>

<!-- Figure 2: IL stress-test — maps to Sabine file fig4-il-by-price-move.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 2 — Impermanent Loss by Price Scenario</div>
	<iframe
		src="/research/lp-yield-2026/fig4-il-by-price-move.html"
		title="Figure 2 — Impermanent loss by price scenario: tight range [−30% / +40%] with fee income breakeven overlay"
		class="w-full rounded border border-rule"
		style="height: 500px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">IL vs. 50/50 HODL · Concentrated LP range [&minus;30% lower / +40% upper] · Exact Uniswap v3 CLMM formula (Adams et al. 2021) · Gross fee income breakeven shown where applicable. Yodacom Research.</div>
</div>

<!-- Explainer 2: Concentrated liquidity is mechanically a grid -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Concept Explainer — Concentrated Liquidity Is Mechanically a Grid</div>
	<iframe
		src="/research/lp-yield-2026/explainer2-cl-is-a-grid.html"
		title="Concept explainer — Concentrated liquidity is mechanically a grid"
		class="w-full rounded border border-rule"
		style="height: 520px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<hr />

<h2>3. The Simulation: What We Measured</h2>

<p>Our analysis used a 5,000-iteration Monte Carlo simulation over 52 weeks, comparing three strategies across four asset tiers and three chains:</p>

<ul>
<li><strong>Strategy A:</strong> Always-in passive LP</li>
<li><strong>Strategy B:</strong> RXI-gated LP (deploy only when RXI regime signal is ranging, exit to USDC on trending signal)</li>
<li><strong>Strategy C:</strong> 50/50 HODL (the benchmark LP investors should compare against)</li>
</ul>

<p>Capital model: 3-3-3 allocation — 2/3 of total capital deployed in LP, 1/3 held as USDC reserve. Live calibration: GeckoTerminal API and DefiLlama data as of 2026-06-15.</p>

<h3>Primary Results — Arbitrum (minimum $2,000 deployed LP capital)</h3>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Tier</th><th>Representative coins</th><th>Always-In</th><th>RXI-Gated</th><th>50/50 HODL</th><th>RXI vs. HODL</th><th>Loss Freq (RXI)</th></tr></thead>
<tbody>
<tr><td>A-tier</td><td>ETH, BTC, SOL</td><td>+4.9% [+4.4, +5.4]</td><td>+3.0% [+2.7, +3.4]</td><td>+11.7%</td><td>&minus;8.6pp</td><td>41.7%</td></tr>
<tr><td><strong>B-tier</strong></td><td>LINK, AAVE, UNI, ARB, AVAX</td><td>+21.3% [+20.2, +22.4]</td><td><strong>+15.2% [+14.3, +16.1]</strong></td><td>+15.7%</td><td><strong>&minus;0.4pp (within CI)</strong></td><td>35.0%</td></tr>
<tr><td>C-tier</td><td>DOT, ADA, ATOM, NEAR, INJ</td><td>&minus;23.3% [&minus;24.3, &minus;22.2]</td><td>&minus;24.5% [&minus;25.4, &minus;23.6]</td><td>+21.6%</td><td>&minus;46.1pp</td><td>79.7%</td></tr>
<tr><td>D-tier</td><td>BONK, WIF, PEPE</td><td>&minus;53.6% [&minus;54.1, &minus;53.0]</td><td>&minus;60.8% [&minus;61.3, &minus;60.3]</td><td>+41.4%</td><td>&minus;102.2pp</td><td>97.7%</td></tr>
</tbody>
</table>
</div>

<p><em>95% confidence intervals on the mean. CI = 1.96 × &sigma; / &radic;n, n=5,000. All figures: net APY on total deployed capital, annualized.</em></p>

<p>The B-tier Arbitrum result of +15.2% RXI-gated versus +15.7% HODL is a &minus;0.4 percentage point gap that sits inside the confidence interval. These strategies are not statistically distinguishable in mean expectation at 95% confidence.</p>

<p>The Solana CLMM result is marginally better due to near-zero gas. RXI-gated B-tier Solana: +15.8% [95% CI: +14.9%, +16.7%].</p>

<!-- Figure 3: RXI loss frequency — maps to Sabine file fig5-fis-loss-frequency.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 3 — RXI Regime Gating: Loss Frequency Reduction</div>
	<iframe
		src="/research/lp-yield-2026/fig5-fis-loss-frequency.html"
		title="Figure 3 — RXI gating: loss frequency reduction — always-in vs. RXI-gated LP by tier"
		class="w-full rounded border border-rule"
		style="height: 480px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">% of weeks with net loss (fee income minus IL minus gas &lt; 0) · Always-in passive LP vs. RXI-gated LP · Arbitrum · 5,000-iteration simulation. Yodacom Research.</div>
</div>

<hr />

<h2>4. The Four CoinRoc Optimization Levers</h2>

<h3>4a. RXI Regime Gating — Measured Tail-Risk Reduction</h3>

<p>RXI&#x2122; (Regime eXecution Intelligence) — built on a Mamdani fuzzy-inference engine — uses Hurst exponent, ADX, velocity Z-score, and drawdown-from-peak inputs to classify market regime. In LP context: deploy concentrated liquidity in ranging conditions (Hurst &lt; 0.5, ADX &lt; 25); exit to USDC in trending conditions (Hurst &gt; 0.6, ADX &gt; 25). The investor executes manually. CoinRoc is an advisory tool.</p>

<p><strong>Important counterintuitive result for B-tier:</strong> RXI gating on B-tier coins <em>reduces</em> mean return by &minus;6.1pp versus always-in (+21.3% always-in vs. +15.2% RXI-gated). This is expected and correct. At the 0.30% fee tier, even trending-week LP positions generate positive expected fee income in mean expectation. The RXI gate's value for B-tier is <em>risk management, not return generation</em> — it reduces loss frequency (42% &rarr; 35%) and tail exposure in exchange for lower mean return.</p>

<p><strong>Compliance-safe framing:</strong> "CoinRoc's RXI regime engine helps investors avoid deploying concentrated liquidity during trending markets where impermanent loss tends to exceed fee income. This reduces loss frequency and improves the shape of outcomes — not the average return — compared to always-on passive LP."</p>

<hr />

<h3>4b. The Rating-Inversion Pair-Selection Rule — Publishable Novel Finding</h3>

<p>The most counterintuitive finding of this research: CoinRoc's quality rating system <em>inversely</em> predicts LP suitability. The best grid-trading coins are the worst LP candidates.</p>

<!-- Figure 4: Rating tier performance — maps to Sabine file fig1-rating-tier-performance.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 4 — LP Performance by CoinRoc Rating Tier</div>
	<iframe
		src="/research/lp-yield-2026/fig1-rating-tier-performance.html"
		title="Figure 4 — Rating inversion: LP performance by CoinRoc tier (A/B/C/D) vs. HODL benchmark"
		class="w-full rounded border border-rule"
		style="height: 460px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">RXI-gated net APY on total capital vs. 50/50 HODL benchmark, by CoinRoc coin rating tier · Arbitrum · $5,000 capital · 5,000-iteration Monte Carlo simulation. Yodacom Research.</div>
</div>

<p><strong>The mechanism driving the inversion:</strong></p>
<ul>
<li><strong>A-tier coins (ETH, BTC, SOL)</strong> sit in 0.05% fee-tier pools — designed for deep, liquid, low-volatility pairs. The fee is 6x lower than the 0.30% tier. Deep TVL keeps Vol/TVL ratios moderate. Simultaneously, A-tier HODL benchmark benefits heavily from crypto's long-term appreciation trend. Result: A-tier LP generates +3.1% RXI-gated vs. +10.9% HODL — a &minus;7.8pp structural deficit.</li>
<li><strong>B-tier coins (LINK, AAVE, UNI, ARB, AVAX)</strong> sit in 0.30% fee-tier pools with real organic trading volume. The 0.30% tier generates 6x the gross fee income per unit of Vol/TVL. B-tier volatility is meaningful but not extreme. This is the LP economic sweet spot.</li>
<li><strong>C and D-tier coins</strong> have volatility that overwhelms any fee tier. Loss frequencies of 79.8% and 97.7% respectively.</li>
</ul>

<p><strong>The practical heuristic:</strong> When selecting LP pairs: (1) Filter to B-tier candidates; (2) Prioritize coins with established DeFi protocol utility and organic trading volume; (3) Target 0.30% fee-tier pools on Arbitrum or Solana; (4) Exclude A-tier majors and C/D-tier.</p>

<hr />

<h3>4c. Fibonacci Range Selection — Targeting Price-Density Zones</h3>

<p>Time in range is the dominant driver of LP profitability. A position spending 80% of weeks in-range at 30% gross APY earns 24% annualized gross. A position spending 40% of weeks earns 12%.</p>

<p>CoinRoc's <code>fibonacciGrid.ts</code> module performs logarithmic swing identification from daily candles, auto-detecting the historical swing low and swing high over the previous major price cycle. It places LP range boundaries at the 0.618 retracement (lower band) and the 1.272 extension (upper band) — zones where price historically spends the most time. These are zones of historical price density, which is the correct heuristic for maximizing time in range.</p>

<p>Directional evidence suggests the medium range [&minus;40%, +60%] may outperform the tight range [&minus;30%, +40%] for B-tier due to better IL absorption on price moves exceeding &plusmn;30%. Formal range-width optimization is scoped as a future research task (RES-LPIS-RANGE-WIDTH-01).</p>

<!-- Figure 5: Fee vs IL decomposition — maps to Sabine file fig3-fee-vs-il-decomposition.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 5 — Fee Income vs. Impermanent Loss Decomposition by Tier</div>
	<iframe
		src="/research/lp-yield-2026/fig3-fee-vs-il-decomposition.html"
		title="Figure 5 — The income-vs-IL tension: annual LP capital decomposition by tier"
		class="w-full rounded border border-rule"
		style="height: 460px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Annual LP capital decomposition · Gross fee income vs. IL drag vs. gas drag vs. net return · B-tier sweet spot vs. A-tier majors · RXI-gated, Arbitrum. Yodacom Research.</div>
</div>

<hr />

<h3>4d. Pre-Set Contingency Ranges — Conditional Income on Breakdown</h3>

<p>The 3-3-3 capital model holds 1/3 of capital as USDC reserve outside the primary LP position. When price falls below the primary range's lower bound (Pa), the primary position converts to 100% crypto and earns no fees. The contingency range deploys this reserve capital in the band below the primary lower band, earning fees during a slow consolidation below the primary range.</p>

<p><strong>What it does:</strong> Earns fees during a slow drift below the primary band — a common crypto pattern (step-down followed by sideways consolidation).</p>

<p><strong>What it does not do:</strong> Hedge against a crash. A &minus;40% to &minus;60% price drop in days traverses the contingency range in days — fee income from a 3-day transit at 30% gross APY is approximately 0.25% of capital. Negligible against a &minus;30% to &minus;40% IL event on the primary position.</p>

<p><strong>Critical gating requirement:</strong> The contingency range must be independently gated by the RXI. Deploy only when RXI confirms ranging regime despite price exiting the lower band. Do NOT auto-trigger on price movement alone.</p>

<!-- Explainer 3: Contingency range -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Concept Explainer — The Contingency Range</div>
	<iframe
		src="/research/lp-yield-2026/explainer3-contingency-range.html"
		title="Concept explainer — The contingency range: when it helps and when it does not"
		class="w-full rounded border border-rule"
		style="height: 520px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
</div>

<!-- Figure 6: Contingency range two-scenario diagram — maps to Sabine file fig6-contingency-range.html -->
<div class="my-8 not-prose">
	<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 6 — Contingency Range: Two Price Path Scenarios</div>
	<iframe
		src="/research/lp-yield-2026/fig6-contingency-range.html"
		title="Figure 6 — Contingency range: slow drift vs. sharp crash scenarios"
		class="w-full rounded border border-rule"
		style="height: 460px; border: none;"
		loading="lazy"
		scrolling="no"
	></iframe>
	<div class="text-xs text-slate-light mt-2 italic">Two price path scenarios · Primary LP range + contingency range · Left: slow drift — contingency earns fees. Right: sharp crash — contingency range traversed in days, minimal income, RXI fires exit signal. Yodacom Research.</div>
</div>

<hr />

<h2>5. The B-Tier Income Decomposition</h2>

<p>The specific scenario where the LPIS thesis holds: B-tier coins, Arbitrum or Solana, 0.30% fee tier, RXI-gated.</p>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Component</th><th>Annual % of LP capital (deployed weeks)</th></tr></thead>
<tbody>
<tr><td>Gross fee income</td><td>~28–35%</td></tr>
<tr><td>Impermanent loss drag (ranging weeks)</td><td>&minus;12 to &minus;18%</td></tr>
<tr><td>Gas drag (Arbitrum post-Dencun)</td><td>&minus;0.3%</td></tr>
<tr><td><strong>Net LP return on LP capital (deployed weeks)</strong></td><td><strong>~10–17%</strong></td></tr>
<tr><td><strong>Net LP return on total capital (2/3 deployed, 3-3-3 model)</strong></td><td><strong>~7–11%</strong></td></tr>
</tbody>
</table>
</div>

<p><em>Source: 5,000-iteration Monte Carlo simulation, calibrated to 2025–26 live data. Not historical backtest results.</em></p>

<p>The income-to-IL ratio in the B-tier ranging deployment: approximately 1.6–2.4x. Fee income is 1.6 to 2.4 times the IL drag during the weeks when deployed in the right regime.</p>

<hr />

<h2>6. The Income Profile Distinction — Why It Matters for Advisors</h2>

<p>The claim that RXI-gated B-tier LP on Solana "ties HODL" requires a critical qualifier. The strategies produce similar mean returns in simulation — but through fundamentally different mechanisms.</p>

<p><strong>50/50 HODL returns:</strong> Price appreciation on the 50% crypto component, recognized only when liquidated. Unrealized until sale. Subject to the full volatility path of the underlying asset.</p>

<p><strong>LP fee income returns:</strong> Realized continuously as fees are collected. Accrues in the form of USDC (and crypto) deposited to the pool position, collectible at any time. No single "exit event" required to recognize the return.</p>

<p>For an investor who values ongoing distribution over terminal lump-sum gains, that distinction is the case for LP — not a return-superiority claim.</p>

<hr />

<h2>7. Chain Economics — The Decisive Variable</h2>

<div class="overflow-x-auto my-6">
<table>
<thead><tr><th>Chain</th><th>Min capital for gas &lt; 5% of net fees</th><th>Annual gas</th><th>RXI-Gated B-tier Net APY</th><th>Verdict</th></tr></thead>
<tbody>
<tr><td>Arbitrum</td><td>$949 (practical minimum: $2,000)</td><td>$7.12</td><td>+15.2% [+14.3, +16.1]</td><td><strong>RECOMMENDED</strong></td></tr>
<tr><td>Solana CLMM</td><td>$6 (practical minimum: $500)</td><td>$0.04</td><td>+15.8% [+14.9, +16.7]</td><td><strong>FAVORABLE</strong> — separate integration required</td></tr>
<tr><td>Ethereum Mainnet</td><td>$139,600</td><td>$1,047</td><td>+9.8% [+8.9, +10.7]</td><td><strong>NOT VIABLE at retail scale</strong></td></tr>
</tbody>
</table>
</div>

<p><strong>Ethereum mainnet is not viable below $25,000 deployed capital.</strong> No content, advisor deck, or product description referencing CoinRoc's LP strategy should mention Ethereum mainnet without explicitly naming Arbitrum or Solana as the required execution chains.</p>

<hr />

<h2>8. What the Data Support and What They Do Not</h2>

<h3>What is supported:</h3>
<ul>
<li>B-tier DeFi coins in 0.30% fee-tier pools on Arbitrum or Solana CLMM generate +15.2% to +15.8% RXI-gated net APY in simulation — within the confidence interval of the 50/50 HODL benchmark of +15.7%. These strategies <em>tie</em> in mean expectation.</li>
<li>LP returns are continuous realized fee income; HODL returns are unrealized price appreciation. A genuine structural distinction.</li>
<li>CoinRoc's rating system inversely predicts LP suitability: A-rated coins are the worst LP candidates; B-rated coins at the 0.30% fee tier are the LP sweet spot. Novel, publishable finding.</li>
<li>RXI regime gating reduces B-tier loss-frequency weeks from ~42% to 35.0%. The RXI gate is a risk management tool, not a return generator.</li>
<li>Post-Dencun, Arbitrum gas = $7.12/year. Chain selection is structurally decisive for retail-scale LP.</li>
</ul>

<h3>What is not supported and must not be claimed:</h3>
<ul>
<li><strong>"LP beats HODL."</strong> The data say LP ties HODL within the margin of error at best. No headline should use "beats."</li>
<li><strong>Any APY point estimate without its confidence interval.</strong> Always cite as "+15.2% net APY [95% CI: +14.3%, +16.1%] in simulation."</li>
<li><strong>"IL is manageable" or "IL is eliminated."</strong> IL is real and material.</li>
<li><strong>"This is a passive income strategy."</strong> LP at this level requires RXI monitoring, periodic fee collection, reposition decisions, and exit discipline.</li>
<li><strong>Any Ethereum mainnet recommendation at retail capital levels.</strong></li>
<li><strong>That tick-level historical backtesting has been completed.</strong> It has not. Tick-level historical validation via Dune Analytics is required before any investor-facing net APY point estimates are appropriate.</li>
</ul>

<hr />

<h2>9. Implementation Parameters</h2>

<p><strong>Minimum viable position (Arbitrum):</strong> Total capital $3,000 (3-3-3 model: $2,000 LP + $1,000 USDC reserve). Gas drag at $2,000 deployed: 0.47% annually — negligible.</p>

<p><strong>Simulation-supported asset set:</strong> Based on simulation results, B+/B/B&minus; rated coins with established DeFi protocol utility — including coins such as LINK, AAVE, UNI, ARB, and AVAX — exhibited the most favorable LP income-to-IL ratios in the tested period. Readers should conduct their own analysis; these findings reflect modeled conditions, not a trading recommendation.</p>

<p><strong>Fee tier:</strong> 0.30% pools on Arbitrum. Not 0.05% (A-tier economics), not 1.00% (thin pools, high JIT exposure).</p>

<p><strong>Range selection:</strong> Fibonacci-derived range anchored to previous cycle swing low (lower band at 0.618 retracement) and swing high (upper band at 1.272 extension). Medium range [&minus;40%, +60%] may outperform tight range [&minus;30%, +40%] for B-tier. Formal optimization pending (RES-LPIS-RANGE-WIDTH-01).</p>

<p><strong>RXI monitoring:</strong> Check at minimum weekly. Exit to USDC when RXI transitions to trending (Hurst &gt; 0.6, ADX &gt; 25). Re-enter when RXI returns to ranging. Not a set-and-forget position.</p>

<p><strong>Contingency range:</strong> Deploy below the primary band only when RXI confirms continuing ranging regime. Do not auto-trigger on price movement alone.</p>

<hr />

<h2>10. Relationship to Published Literature</h2>

<p><strong>Loesch et al. (2021)</strong> (arXiv:2111.09192): Established that LP aggregate P&L is net-negative versus holding in the studied period. Our simulation's fees/IL calibration (1.63) is more favorable than Loesch's measured 0.765, reflecting a less extreme market period. This means our results are optimistic relative to the most volatile historical period.</p>

<p><strong>Milionis et al. (2022)</strong> (arXiv:2208.06046): Formalized LVR as the structural adverse-selection cost all AMM LPs pay against arbitrageurs. LVR scales quadratically with volatility. Our simulation embeds LVR implicitly in the IL model.</p>

<p><strong>CrocSwap (2023):</strong> Found that large swaps (top 25% by notional) are the structural profit extractors against LP positions. Our model applies a JIT haircut per tier (6% A-tier, 4% B-tier) as a simplified representation.</p>

<p><strong>Our contribution:</strong> Regime-gated LP analysis across four asset tiers with the RXI signal as the gate, combined with the novel finding that quality-rating tier inversely predicts LP suitability. No published work has connected an external quality-rating system to pool-tier selection via this mechanism.</p>

<hr />

<h2>Risk Disclosure and Simulation Notice</h2>

<p>This document presents the results of Monte Carlo simulation analysis (5,000 iterations, calibrated to live GeckoTerminal and DefiLlama pool data as of 2026-06-15) and does not constitute investment advice, a recommendation to buy or sell any security or digital asset, or a solicitation of any investment. CoinRoc is a software tool; it is not a registered investment adviser, broker-dealer, or financial planner.</p>

<p><strong>Simulation results are not backtested historical performance.</strong> All quantitative results were produced by means of a stochastic model designed with the benefit of calibration to current (not historical) market data. Simulated results do not represent actual historical LP performance and are not a guarantee of future results. Tick-level historical validation of these results has not been completed; such validation is required before any investor-facing net APY point estimates are appropriate. Actual results will vary materially based on market conditions, capital size, execution timing, pool liquidity, gas costs, and other factors not modeled in this simulation.</p>

<p><strong>Past simulated performance is not indicative of future results.</strong> The value of crypto assets and LP positions can decline to zero. Fee income from LP positions is not guaranteed and depends on ongoing market activity in the relevant pool. Impermanent loss is a real and material cost of providing liquidity in automated market makers.</p>

<p><strong>The RXI regime engine produces an advisory signal only.</strong> It does not predict future price movements and does not guarantee that deploying or exiting LP positions based on its signal will produce positive returns. CoinRoc does not hold user funds, does not execute transactions on behalf of users, and does not manage any pooled investment vehicle.</p>

<p><strong>Regulatory status:</strong> Digital assets, including those referenced in this document, may be deemed securities under applicable law (including the Howey test as applied by the SEC). This document does not constitute legal, tax, or regulatory advice. Consult your own financial, legal, and tax advisors before making any investment or business decision.</p>

<p>CoinRoc compliance review completed 2026-06-15 (Matlock). External legal counsel review recommended before wide distribution, particularly regarding specific coin naming in Section 9 and Howey status of LINK/AAVE/UNI/ARB/AVAX.</p>

<hr />

<p><em>LANDO-LPIS-RESEARCH-01 &mdash; Lando, Senior Content Writer &amp; Strategist, Yodacom AI Team. Source documents: RES-LPIS-OPTIMIZE-01, RES-LPIS-EMPIRICAL-01, DARTH-AMM-LPIS-01 (Han Kessel &amp; Darth, 2026-06-15). No new simulations run for this article. Matlock compliance edits applied 2026-06-15.</em></p>

</article>
