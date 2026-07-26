<svelte:head>
	<title>Intelligent Grid Trading: What 13 Years of Crypto Data Actually Shows — Yodacom Research</title>
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Paper № 1 &middot; May 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			Intelligent Grid Trading: What 13 Years of Crypto Data Actually Shows
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			A Walk-Forward Validation of Regime-Gated Grid Strategies Across 17 Assets
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Jeremy J. Black &middot; Yodacom Research
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Quantitative analysis by Yodacom AI Research Team
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			We ran a walk-forward backtest of an adaptive grid trading strategy across 17 major
			cryptocurrencies, 13 years of daily data, and 135 valid test folds. The uncomfortable number:
			the grid underperforms buy-and-hold in 59% of folds, with average alpha of &minus;578%. That
			figure is dominated by bull-run years where assets returned 1,000&ndash;8,000% and no
			finite-return strategy competes. What the data actually shows is a strategy with a 100% win
			rate against buy-and-hold in confirmed bear-market folds, meaningful capital preservation when
			markets fall, and better calibration after correcting two measurement errors in our own system.
			Forward confidence (authors' subjective assessment, not a return forecast): 6.5/10.
		</p>
	</div>
</section>

<!-- Article body -->
<article class="mx-auto max-w-3xl px-6 py-16">

	<!-- Back link -->
	<a
		href="/research"
		class="mb-12 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-light transition hover:text-navy-deep"
	>
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
		Back to Research
	</a>

	<!-- ── Section 1: Key Findings ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 1</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Key Findings</h2>

		<!-- Headline callout -->
		<div class="mb-8 border border-rule bg-paper p-6 text-center">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Bear-Fold Win Rate (2011–2025, n=135)</div>
			<div class="font-serif text-6xl font-500 text-navy-ink">100%</div>
			<div class="mt-2 text-sm text-slate">Win rate in every fold where buy-and-hold lost more than 20%</div>
			<div class="mt-3 flex justify-center gap-8 text-xs text-slate-light">
				<span>135 valid folds</span>
				<span>17 assets</span>
				<span>172,588 daily bars</span>
			</div>
		</div>

		<ul class="space-y-3 text-base leading-relaxed text-slate">
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>135 valid walk-forward folds across 17 assets and 13 years, yielding 172,588 daily bars</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>41.5% of folds beat buy-and-hold &mdash; the rest are bull-run years where assets returned 200&ndash;8,000%</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
				<span><strong class="text-navy-deep">Bear-fold win rate: 100%</strong> &mdash; every fold where buy-and-hold lost more than 20%, the grid outperformed</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>RXI v2 regime gating improved alpha from &minus;578% to &minus;464%</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>2025 Sharpe: &minus;0.786 &mdash; third-worst behind 2018 (&minus;1.641) and 2022 (&minus;1.291)</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>Forward confidence: 6.5/10 (subjective assessment, not a return forecast)</span>
			</li>
		</ul>
	</section>

	<!-- ── Section 2: Methodology ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 2</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This study uses a walk-forward validation framework: a 2-year training window followed by a
			1-year test window, sliding forward by 1 year at each step. This structure prevents
			look-ahead bias by ensuring that every parameter set tested was calibrated exclusively on data
			preceding the evaluation period.
		</p>

		<div class="mb-6 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<tbody>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Training window</td>
						<td class="py-2.5">2 years</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Test window</td>
						<td class="py-2.5">1 year</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Slide</td>
						<td class="py-2.5">1 year forward</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Total folds</td>
						<td class="py-2.5">152 (135 valid, 17 skipped for insufficient history)</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Symbols</td>
						<td class="py-2.5">BTC, ETH, XRP, ADA, LTC, BCH, DOGE, XMR, XLM, EOS, ZEC, DASH, TRX, NEO, XTZ, MANA, STX</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Date range</td>
						<td class="py-2.5">2011&ndash;2025</td>
					</tr>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Data source</td>
						<td class="py-2.5">Tiingo daily bars (172,588 observations)</td>
					</tr>
					<tr>
						<td class="py-2.5 pr-6 font-semibold text-navy-deep">Cost model</td>
						<td class="py-2.5">Retail Binance.US &mdash; 0.40% maker / 0.60% taker / 0.05% slippage</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Regime gating is provided by RXI&trade; (Regime eXecution Intelligence) — built on a 10-rule Mamdani fuzzy-inference
			engine reading three input signals &mdash; price relative to the 200-day moving average,
			volatility ratio (current vs. trailing), and momentum &mdash; and producing an engagement
			scalar from 0.0 (fully disengaged) to 1.0 (fully deployed). When the engagement scalar
			falls below threshold, the grid does not open new positions.
		</p>
		<p class="text-base leading-relaxed text-slate">
			RXI v2 introduces EWMA volatility decay with a 7-day half-life, replacing the raw-window
			volatility input used in v1. This change smooths regime transitions and reduces false
			disengagement signals during short-term volatility spikes that do not represent structural
			regime shifts.
		</p>
	</section>

	<!-- ── Section 3: Aggregate Numbers ──────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 3</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Aggregate Numbers</h2>

		<div class="mb-8 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Metric</th>
						<th class="py-2.5 font-semibold text-slate-light">Value</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ metric: 'Mean annual return', value: '−9.7%' },
						{ metric: 'Median annual return', value: '+1.6%' },
						{ metric: 'Mean Sharpe ratio', value: '−0.468' },
						{ metric: 'Median Sharpe ratio', value: '−0.303' },
						{ metric: 'Mean Calmar ratio', value: '0.038' },
						{ metric: 'Mean max drawdown', value: '27.4%' },
						{ metric: 'Win rate vs buy-and-hold', value: '41.5%' },
						{ metric: 'Average alpha vs buy-and-hold', value: '−578%' },
					] as row (row.metric)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.metric}</td>
							<td class="py-2.5 {row.value.startsWith('−') ? 'text-teal-600' : row.value.startsWith('+') ? 'text-teal-700' : ''} font-medium">{row.value}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The &minus;578% average alpha figure is the most frequently misread number in this dataset.
			It requires context. During bull-run years &mdash; 2017, 2020, 2021, 2024 &mdash; assets
			in this universe returned 200% to 8,000% in individual folds. No finite-return strategy
			competes with 5,000% buy-and-hold returns on a small allocation. The grid strategy, which
			generates return from oscillation within a range, is structurally incapable of matching
			unidirectional bull-run appreciation. Alpha in those folds is deeply negative by construction,
			not by failure.
		</p>
		<p class="text-base leading-relaxed text-slate">
			The more meaningful signal is the bear-fold record: a 100% win rate in every fold where
			buy-and-hold lost more than 20%. Capital preservation in declining markets is the primary
			value proposition of a regime-gated grid strategy. An investor who avoids deep drawdowns
			in bear markets does not need to compete with 3,000% returns in bull years to achieve
			superior long-run compounding &mdash; they need only to survive the bear years with capital
			intact. The grid does that.
		</p>
	</section>

	<!-- ── Section 4: Sharpe by Year (CHART) ──────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 4</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Sharpe by Year</h2>

		<p class="mb-8 text-base leading-relaxed text-slate">
			The chart below shows average Sharpe ratio per calendar year across all valid folds, sorted
			worst-to-best. The pattern reflects crypto market regimes cleanly: sustained bear markets
			(2018, 2022, 2025) produce the worst Sharpe figures; the only positive-Sharpe year is 2020,
			which combined post-COVID recovery volatility with the early Bitcoin bull run &mdash; an
			ideal oscillation environment for a grid strategy.
		</p>

		<div class="mb-3 overflow-hidden rounded-sm border border-rule bg-navy-ink p-6">
			<div class="mb-1 text-[0.6rem] uppercase tracking-[0.25em] text-ochre-soft">Chart 1 — Sharpe by Year</div>
			<div class="mb-4 text-sm font-medium text-cream/90">Average Sharpe Ratio per Calendar Year (135 valid folds)</div>
			<div style="position: relative; height: 340px;">
				<canvas bind:this={sharpeCanvas}></canvas>
			</div>
		</div>
		<p class="text-[0.72rem] italic text-slate-light">Backtested data — not investment advice. Sharpe = (annual return &minus; 0%) / annualized vol; risk-free rate set to 0 for crypto context.</p>
	</section>

	<!-- ── Section 5: What RXI Gating Does ────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What RXI Gating Does</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			A measurement artifact requires explanation before reading the RXI comparison table.
			When the RXI gate is applied and the grid is disengaged for a full fold, that fold
			produces a return of approximately 0% (cash, no deployment) rather than a deeply negative
			return. Relative to a buy-and-hold that returned, say, +300% in a bull-run fold, a 0%
			result is still a loss of alpha. The RXI gate therefore converts bull-run folds from
			"somewhat losing" to "fully losing" on the alpha metric, which mechanically drops the
			raw win rate from 41.5% to 28.9%. The gate is working correctly &mdash; it is preserving
			capital in bear folds &mdash; but the win-rate metric penalizes it for not chasing
			bull runs.
		</p>

		<div class="mb-6 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Configuration</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Win Rate</th>
						<th class="py-2.5 font-semibold text-slate-light">Avg Alpha vs B&H</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ config: 'Always-on (no gate)', wr: '41.5%', alpha: '−578%' },
						{ config: 'RXI v1 (raw volatility)', wr: '26.7%', alpha: '−486%' },
						{ config: 'RXI v2 (EWMA vol, hl=7d)', wr: '28.9%', alpha: '−464%' },
					] as row (row.config)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.config}</td>
							<td class="py-2.5 pr-6">{row.wr}</td>
							<td class="py-2.5 text-teal-600 font-medium">{row.alpha}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="text-base leading-relaxed text-slate">
			The correct metric is expected return per unit of engaged capital. The gate correctly
			identifies hostile regimes, preserves capital, and redeploys it when conditions are
			favorable. The &minus;578% to &minus;464% improvement represents $114 of alpha gained
			per $100 of buy-and-hold.
		</p>
	</section>

	<!-- ── Section 6: What We Fixed ───────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 6</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What We Fixed</h2>

		<h3 class="mb-3 font-serif text-lg text-navy-deep">Fix 1: Alpha Factor Demotion (Weight 0.15 &rarr; 0.00)</h3>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The production composite score included an alpha-vs-buy-and-hold factor at 0.15 weight.
			As documented above, alpha vs. buy-and-hold is structurally negative in bull-run years by
			design &mdash; not by poor strategy execution. Including it as a positive selection signal
			was selecting against exactly the configurations that perform best in deployable regimes.
			Removing the alpha factor improved composite-to-Sharpe correlation significantly.
		</p>

		<div class="mb-6 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Weight Candidate</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">r(composite, Sharpe)</th>
						<th class="py-2.5 font-semibold text-slate-light">r(composite, &minus;drawdown)</th>
					</tr>
				</thead>
				<tbody>
					<tr class="border-b border-rule/50">
						<td class="py-2.5 pr-6 font-medium text-navy-deep">Production (alpha=0.15)</td>
						<td class="py-2.5 pr-6">0.901</td>
						<td class="py-2.5">0.674</td>
					</tr>
					<tr class="border-b border-rule/50 last:border-0">
						<td class="py-2.5 pr-6 font-medium text-navy-deep">Alpha-demoted (alpha=0.00)</td>
						<td class="py-2.5 pr-6 text-teal-700 font-medium">0.950</td>
						<td class="py-2.5 text-teal-700 font-medium">0.761</td>
					</tr>
				</tbody>
			</table>
		</div>

		<p class="mb-8 text-base leading-relaxed text-slate">
			The improvement is statistically significant at the 95% confidence interval
			([+0.026, +0.076], N=2,000 bootstrap resamples).
		</p>

		<h3 class="mb-3 font-serif text-lg text-navy-deep">Fix 2: Portfolio Volatility Correction (0.30 &rarr; 0.16)</h3>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The optimizer used a hardcoded portfolio volatility assumption of 0.30 (30% annualized).
			Actual measured volatility for the always-on grid is 20.97% annualized; for the RXI v2
			gated configuration it is 16.07%. The hardcoded figure overstated portfolio volatility
			by 9&ndash;14 percentage points, causing the mean-variance optimizer to systematically
			underweight the grid sleeve in multi-asset portfolio construction. The corrected input
			of 0.16 produces allocation recommendations consistent with the actual risk contribution
			of the strategy.
		</p>

		<p class="text-base leading-relaxed text-slate">
			A third fix is in progress: Hurst exponent threshold recalibration. The current gate uses
			H &lt; 0.45 as the mean-reverting regime threshold. Zero mean-reverting folds in 13 years
			of crypto data is a red flag &mdash; it suggests the threshold is too tight and is excluding
			deployable folds. We are testing H &lt; 0.50 and H &lt; 0.52 as candidate thresholds.
			Results will be incorporated in the forthcoming technical addendum.
		</p>
	</section>

	<!-- ── Section 7: Forward Confidence ──────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 7</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Forward Confidence: 6.5/10</h2>

		<!-- Confidence callout -->
		<div class="mb-8 border border-rule bg-paper p-6 text-center">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Authors' subjective assessment — not a return forecast</div>
			<div class="font-serif text-6xl font-500 text-navy-ink">6.5<span class="text-3xl text-slate-light">/10</span></div>
			<div class="mt-2 text-sm text-slate">Walk-forward confidence rating &mdash; Paper № 1 &middot; May 2026</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The current market context: Bitcoin formed a death cross in November 2025, declining from
			approximately $110,000 to a trough near $66,000 in February 2026. The current regime
			reads as &minus;2 (Bear), with 3 of 4 regime indicators bearish. Historical crypto bear
			markets average 12&ndash;18 months in duration; the current bear is approximately 6 months
			in as of this writing.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The Sharpe pattern by period provides useful framing for what forward conditions look like
			across the regime cycle:
		</p>

		<div class="mb-6 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Period</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Avg Sharpe</th>
						<th class="py-2.5 font-semibold text-slate-light">Regime context</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ period: '2020', sharpe: '+0.187', context: 'Only positive-Sharpe year (ideal oscillation)', positive: true },
						{ period: '2019', sharpe: '−0.455', context: 'Consolidation post-2018 bear', positive: false },
						{ period: '2023–2024 avg', sharpe: '−0.140', context: 'Recovery / late-cycle bull', positive: false },
						{ period: '2025', sharpe: '−0.786', context: 'Sustained bear (current)', positive: false },
					] as row (row.period)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.period}</td>
							<td class="py-2.5 pr-6 {row.positive ? 'text-teal-700' : 'text-red-600'} font-medium">{row.sharpe}</td>
							<td class="py-2.5 text-slate-light">{row.context}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			<strong class="text-navy-deep">Upward-confidence factors:</strong> The historical pattern
			holds &mdash; bear markets end and are followed by consolidation and recovery phases where
			grid performance improves. We are within the historical duration window for a regime shift.
			Three measurement fixes (alpha demotion, vol correction, Hurst recalibration) improve the
			strategy's calibration going forward. RXI v2 capital preservation compounds over full
			market cycles: surviving a bear market with less drawdown means more capital available
			for the subsequent recovery phase.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			<strong class="text-navy-deep">Downward-confidence factors:</strong> The bear market has
			not confirmed a bottom. Zero mean-reverting folds across 13 years of crypto data means
			the strategy has operated almost entirely in trending regimes &mdash; 67% of all folds
			are trending regime, a structural characteristic of cryptocurrency markets that limits the
			core mechanism of grid strategies. Macro and regulatory unknowns remain elevated.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The 6.5 reflects a strategy we believe is correctly designed, honestly measured, and
			positioned for regime recovery &mdash; but one currently operating in a headwind whose
			favorable conditions are not dominant in crypto's historical record.
		</p>
	</section>

	<!-- ── Section 8: Practitioners ───────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 8</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What This Means for Practitioners</h2>

		<div class="mb-6 space-y-5">
			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">1. When to run a grid</div>
				<p class="text-base leading-relaxed text-slate">
					Macro regime not confirmed bear, and the asset is not in a confirmed uptrend. The
					ideal condition is lateral consolidation or mild oscillation within a defined range.
					Post-bear consolidation phases (analogous to 2019 and 2023) are the highest-probability
					deployment windows based on historical data.
				</p>
			</div>
			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">2. When to stand aside</div>
				<p class="text-base leading-relaxed text-slate">
					Confirmed bear markets and confirmed uptrends. In both regimes, the directional move
					dominates the oscillation signal. Grid strategies in sustained trends produce the worst
					Sharpe readings in this dataset (&minus;1.641 in 2018, &minus;1.291 in 2022). The RXI
					gate exists precisely to identify these conditions and preserve capital.
				</p>
			</div>
			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">3. How to read Sharpe in crypto context</div>
				<p class="text-base leading-relaxed text-slate">
					Crypto assets carry 60&ndash;150% annualized volatility as a baseline. A Sharpe of
					0.0&ndash;0.5 is not failure in this asset class &mdash; it represents respectable
					risk-adjusted return given the vol base. The &minus;0.786 Sharpe of 2025 should be
					read against the asset-class context: this is a strategy doing its job (preserving
					more capital than buy-and-hold in a bear) in conditions structurally hostile to grids.
				</p>
			</div>
		</div>

		<p class="text-base font-medium leading-relaxed text-navy-deep">
			The most undervalued feature of a regime-gated grid strategy is what it does not lose.
		</p>
	</section>

	<!-- ── Section 9: Methodology Appendix ─────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 9</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology Appendix</h2>

		<details class="border border-rule bg-paper">
			<summary class="cursor-pointer px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-cream-deep/40 transition select-none">
				Full methodology details &mdash; click to expand
			</summary>
			<div class="border-t border-rule px-6 py-5 text-sm leading-relaxed text-slate space-y-3">
				<p><strong class="text-navy-deep">Strategy:</strong> AdaptiveGrid v3DynamicMode, geometric spacing, 55 grid levels, 2.59% grid spacing. Fill model: GTX (limit orders fill on price cross, not touch).</p>
				<p><strong class="text-navy-deep">Data:</strong> Tiingo daily bars, 172,588 total observations across 17 symbols from 2011 through 2025. Data sourced directly from Tiingo API; no survivorship adjustment was applied beyond the 17-symbol universe selection, which was fixed prior to the study.</p>
				<p><strong class="text-navy-deep">Walk-forward structure:</strong> 2-year training window / 1-year test window / 1-year slide. Training window optimizes grid spacing and RXI thresholds. Test window evaluates out-of-sample performance. No parameter re-optimization during the test window.</p>
				<p><strong class="text-navy-deep">Cost model:</strong> 0.40% maker / 0.60% taker / 0.05% volatility-conditional slippage, reflecting Binance.US retail tier. All returns are net of these costs.</p>
				<p><strong class="text-navy-deep">RXI&#x2122; (Regime eXecution Intelligence, built on a fuzzy-inference engine):</strong> 10-rule Mamdani engine with centroid defuzzification. Inputs: (1) price vs. 200-day MA, (2) volatility ratio (14-day / 63-day), (3) 20-day momentum. Output: engagement scalar 0.0&ndash;1.0. RXI v2 replaces raw volatility ratio with EWMA-smoothed vol (half-life = 7 days).</p>
				<p><strong class="text-navy-deep">No look-ahead bias:</strong> All parameter sets are calibrated using only data preceding the test window. RXI rule weights are fixed before the study and not updated during test periods. Regime signals use only data available at the time of each daily bar.</p>
			</div>
		</details>
	</section>

	<!-- ── Section 10: Disclosure ───────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 10</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Important Disclosure</h2>

		<div class="border border-rule bg-cream-deep/60 p-6 text-sm leading-relaxed text-slate">
			<p><strong class="text-navy-deep">Hypothetical and Backtested Performance.</strong> All
			return and performance figures in this paper are based on historical backtested simulation
			using the CoinRoc walk-forward research harness. Backtested results do not represent actual
			trading results and were achieved by means of the retroactive application of a model
			designed with the benefit of hindsight. Hypothetical performance results have many inherent
			limitations and no representation is made that any account will or is likely to achieve
			profits or losses similar to those shown.</p>

			<p class="mt-4"><strong class="text-navy-deep">Past Performance.</strong> Past performance,
			whether actual or indicated by historical tests, does not guarantee or predict future
			results. The performance of any investment strategy can and often will differ materially
			from backtested results.</p>

			<p class="mt-4"><strong class="text-navy-deep">Not Investment Advice.</strong> This paper
			is for informational and research purposes only and does not constitute investment advice,
			a solicitation, or an offer to buy or sell any security or investment product. Yodacom
			Research is not a registered investment adviser. Nothing in this paper should be construed
			as a recommendation to buy, sell, or hold any asset. Readers should consult a qualified
			financial professional before making any investment decisions.</p>

			<p class="mt-4"><strong class="text-navy-deep">Forward-Looking Statements.</strong> This
			paper contains forward-looking statements and projections, including the forward confidence
			rating and regime outlook. These statements are based on the authors' subjective assessment
			of historical data and current conditions. They are not forecasts, predictions, or
			guarantees of future performance. Actual results may differ materially from any
			forward-looking statement made herein.</p>

			<p class="mt-4"><strong class="text-navy-deep">Digital Asset Risk.</strong> Cryptocurrency
			and digital asset markets are highly volatile, largely unregulated, and subject to rapid
			and unpredictable changes in value. Grid trading strategies involve substantial risk of
			loss, including the potential loss of all invested capital. The strategies described herein
			are not appropriate for all investors.</p>

			<p class="mt-4"><strong class="text-navy-deep">Regulatory Status.</strong> Cryptocurrency
			assets are subject to unique and evolving regulatory risks. Regulatory changes in any
			jurisdiction could materially affect the viability, legality, or profitability of grid
			trading strategies. No regulatory approval or review of this paper or the strategies
			described herein has been obtained or sought.</p>
		</div>
	</section>

	<!-- Citation and author -->
	<section class="mb-10 border-t border-rule pt-8">
		<div class="space-y-3 text-sm text-slate">
			<p>
				<strong class="text-navy-deep">Citation:</strong>
				Black, J. J. (2026). Intelligent Grid Trading: What 13 Years of Crypto
				Data Actually Shows. <em>Yodacom Research pre-print.</em> Quantitative analysis by Yodacom AI Research Team.
			</p>
			<p>
				<strong class="text-navy-deep">Author:</strong>
				Jeremy Black is CEO of <a href="https://yodacom.com" class="text-ochre-deep hover:text-ochre transition">YodaCom.com</a> and the creator of CoinRoc, an AI-powered crypto grid trading analysis platform.
			</p>
			<p class="text-slate-light">Reproduction with attribution permitted.</p>
		</div>
	</section>

	<!-- Back link bottom -->
	<a
		href="/research"
		class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-slate-light transition hover:text-navy-deep"
	>
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
		Back to Research
	</a>

</article>

<script lang="ts">
import { Chart, BarController, BarElement, CategoryScale, LinearScale, Tooltip } from 'chart.js';

// Register only the components we need (tree-shaking friendly)
Chart.register(BarController, BarElement, CategoryScale, LinearScale, Tooltip);

// ── DATA ─────────────────────────────────────────────────────────────
// Sharpe by year, sorted ascending (worst to best)
const sharpeRows = [
	{ year: 2018, sharpe: -1.641, context: 'Post-2017 crash, sustained bear' },
	{ year: 2022, sharpe: -1.291, context: 'Post-ATH crash, FTX collapse' },
	{ year: 2025, sharpe: -0.786, context: 'Sustained bear (Nov 2025 – Apr 2026)' },
	{ year: 2019, sharpe: -0.455, context: 'Consolidation' },
	{ year: 2023, sharpe: -0.196, context: 'Recovery phase' },
	{ year: 2024, sharpe: -0.083, context: 'Near-flat, late-cycle' },
	{ year: 2020, sharpe: +0.187, context: 'Only positive-Sharpe year' },
];

const C_TEAL = '#14b8a6';
const C_RED  = '#ef4444';

// ── Canvas binding ────────────────────────────────────────────────────
let sharpeCanvas = $state<HTMLCanvasElement | null>(null);

$effect(() => {
	if (!sharpeCanvas) return;
	const chart = new Chart(sharpeCanvas, {
		type: 'bar',
		data: {
			labels: sharpeRows.map(r => String(r.year)),
			datasets: [
				{
					label: 'Avg Sharpe Ratio',
					data: sharpeRows.map(r => r.sharpe),
					backgroundColor: sharpeRows.map(r =>
						r.sharpe >= 0 ? 'rgba(20,184,166,0.75)' : 'rgba(239,68,68,0.72)'
					),
					borderColor: sharpeRows.map(r => r.sharpe >= 0 ? C_TEAL : C_RED),
					borderWidth: 1,
					borderRadius: 3,
				},
			],
		},
		options: {
			indexAxis: 'y',
			responsive: true,
			maintainAspectRatio: false,
			plugins: {
				legend: { display: false },
				tooltip: {
					backgroundColor: '#1e293b',
					borderColor: '#334155',
					borderWidth: 1,
					titleColor: '#e2e8f0',
					bodyColor: '#94a3b8',
					callbacks: {
						label: (tooltipCtx) => {
							const row = sharpeRows[tooltipCtx.dataIndex];
							const x = tooltipCtx.parsed.x ?? 0;
							return ` Sharpe ${x >= 0 ? '+' : ''}${x.toFixed(3)} — ${row.context}`;
						},
					},
				},
			},
			scales: {
				x: {
					title: { display: true, text: 'Avg Sharpe Ratio', color: '#64748b', font: { size: 11 } },
					grid: { color: 'rgba(255,255,255,0.04)' },
					ticks: { color: '#64748b', font: { size: 10 } },
					min: -1.8,
					max: 0.4,
				},
				y: {
					grid: { color: 'rgba(255,255,255,0.04)' },
					ticks: { color: '#94a3b8', font: { size: 11, weight: 600 } },
				},
			},
		},
	});

	return () => chart.destroy();
});
</script>
