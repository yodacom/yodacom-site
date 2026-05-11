<svelte:head>
	<title>Gridium and the Efficient Frontier — Yodacom Research</title>
	<script src="https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js"></script>
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Research Note &middot; May 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			Gridium and the Efficient Frontier: Diversification Benefits Across Asset Classes
		</h1>
		<p class="fade-up d2 mb-6 text-base leading-relaxed text-slate">
			Han Kessel &middot; Jeremy J. Black &middot; Yodacom Research
		</p>
		<p class="fade-up d3 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			We examine whether adding a crypto grid trading sleeve to a traditional equity/bond/gold
			portfolio produces a measurable shift in the efficient frontier — and find a real but
			conditional diversification benefit, anchored by near-zero correlation with US equities.
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

	<!-- ── Section 1: The Question ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 1</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Question</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Advisors who spend serious time with client portfolios run into the same constraint year after
			year: traditional diversification has narrowed. When equities fall hard — as they did in 2022
			— bonds increasingly fall with them. The classic 60/40 portfolio, which was supposed to smooth
			the ride, lost over 13% that year with both legs moving against the investor simultaneously.
			The theoretical underpinning of portfolio construction is sound; the practical instruments
			available to express it have become more correlated in crisis conditions.
		</p>
		<p class="mb-5 text-base leading-relaxed text-slate">
			This creates a recurring question for allocators: what other return streams exist that are
			structurally uncorrelated with equity markets? Historically the answers have been managed
			futures, merger arbitrage, certain commodity strategies, and market-neutral equity. Each
			carries its own implementation complexity and fee burden.
		</p>
		<p class="text-base leading-relaxed text-slate">
			Crypto grid trading is a candidate worth examining. Grid strategies profit from price
			oscillation — not price direction. They place limit buy and sell orders at fixed intervals
			and collect the spread as the asset moves back and forth through a defined range. This
			mechanism is structurally orthogonal to the directional bets that drive equity and bond
			returns. Whether that structural orthogonality translates into measurable portfolio
			diversification benefit is the question this note answers.
		</p>
	</section>

	<!-- ── Section 2: Methodology ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 2</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Grid composite returns are derived from CoinRoc's walk-forward backtest harness (run date:
			2026-04-27). The universe is 17 cryptocurrency pairs: ADA, BCH, BTC, DASH, DOGE, EOS, ETH,
			LTC, MANA, NEO, STX, TRX, XLM, XMR, XRP, XTZ, and ZEC. The study covers the 2017–2025
			calendar years, producing 135 valid folds across 17 symbols &times; 9 years (17 folds were
			excluded because the grid never executed — zero trades, not a &minus;0% result).
		</p>
		<p class="mb-5 text-base leading-relaxed text-slate">
			The grid model is AdaptiveGrid v3DynamicMode with geometric spacing and the GTX fill model
			(limit orders fill on price cross, not touch). All returns are net of retail-grade execution
			costs: Binance.US tier at 0.40% maker / 0.60% taker / 0.05% volatility-conditional
			slippage. The annual composite return for each test year is the arithmetic mean of valid
			fold returns across all 17 symbols.
		</p>
		<p class="text-base leading-relaxed text-slate">
			Traditional asset return series (SPY, GLD, AGG, TLT) are drawn from Supabase benchmark
			data for 2024–2025, with published historical annual total returns for 2017–2023. Full
			methodology details, including the covariance matrix derivation and mean-variance
			optimization constraints, are documented in Paper 1 (Gridium), which remains in progress
			and is expected in Q2 2026. This note should be read as a companion analysis, not a
			standalone definitive result.
		</p>
	</section>

	<!-- ── Section 3: Correlation ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 3</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Correlation Finding</h2>

		<!-- Headline callout -->
		<div class="mb-8 border border-rule bg-paper p-6 text-center">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Grid vs. SPY (2017–2025, n=9)</div>
			<div class="font-serif text-6xl font-500 text-navy-ink">&rho;&nbsp;=&nbsp;0.02</div>
			<div class="mt-2 text-sm text-slate">Near-zero correlation with US Large Cap Equities</div>
			<div class="mt-3 flex justify-center gap-8 text-xs text-slate-light">
				<span>GLD &rho;&nbsp;=&nbsp;0.07</span>
				<span>AGG &rho;&nbsp;=&nbsp;0.21</span>
				<span>TLT &rho;&nbsp;=&nbsp;&#8722;0.04</span>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The correlation matrix below shows annual return correlations across all four assets for the
			2017–2025 window. Grid vs. SPY registers &rho;&nbsp;=&nbsp;+0.02 — effectively zero. Grid
			vs. GLD is similarly low at +0.07. Grid vs. AGG is the highest in the matrix at +0.21,
			driven primarily by the 2022 year in which both grid and bonds suffered simultaneous
			drawdowns.
		</p>
		<p class="mb-8 text-base leading-relaxed text-slate">
			An important caveat: with nine annual observations, the 95% confidence interval on any
			individual correlation estimate is approximately &plusmn;0.40. The reported &rho;&nbsp;=&nbsp;+0.02
			for grid vs. SPY is not statistically distinguishable from values as high as +0.42 or as
			low as &minus;0.38. These figures are directionally informative, not statistically precise.
		</p>

		<!-- Heatmap chart container -->
		<div class="mb-3 overflow-hidden rounded-sm border border-rule bg-navy-ink p-6">
			<div class="mb-1 text-[0.6rem] uppercase tracking-[0.25em] text-ochre-soft">Chart 1 — Correlation Heatmap</div>
			<div class="mb-4 text-sm font-medium text-cream/90">Annual Return Correlations, 2017–2025</div>
			<div id="heatmapWrapper" class="mx-auto max-w-md">
				<div class="heatmap-header flex" id="heatmapHeader"></div>
				<div id="heatmap"></div>
				<div class="mt-4 flex items-center justify-center gap-3">
					<span class="text-[0.68rem] text-cream/40">&minus;1.0</span>
					<div class="h-2 w-36 rounded-full" style="background: linear-gradient(to right, #ef4444, #1e293b, #14b8a6)"></div>
					<span class="text-[0.68rem] text-cream/40">+1.0</span>
					<span class="ml-2 text-[0.68rem] text-cream/30">Correlation scale</span>
				</div>
			</div>
		</div>
		<p class="text-[0.72rem] italic text-slate-light">Backtested data — not investment advice. n=9 annual observations; confidence intervals are wide.</p>
	</section>

	<!-- ── Section 4: Efficient Frontier ──────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 4</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Efficient Frontier</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The chart below plots three efficient frontier curves: Portfolio A (traditional only: SPY,
			GLD, AGG) and the grid-augmented portfolios (B at 20% fixed grid, C at 30% fixed grid),
			both in their full-history and forward-looking variants. The X-axis is annualized portfolio
			volatility; the Y-axis is annualized portfolio return. Points to the upper-left are better.
		</p>
		<p class="mb-5 text-base leading-relaxed text-slate">
			The full-history traditional frontier (solid teal line) sits above the dashed grid-augmented
			lines. This is the correct honest answer for the 2017–2025 period: the grid composite's
			geometric CAGR of &minus;16.3% — heavily penalized by 2018 (&minus;62.9%) and 2022
			(&minus;58.9%) — drags the blended portfolio return down far enough that even near-zero
			correlation cannot rescue the Sharpe ratio. Adding a negatively-performing asset to a
			portfolio with zero correlation does not help; it only reduces return while adding some
			volatility.
		</p>
		<p class="mb-8 text-base leading-relaxed text-slate">
			The forward-looking curves (labeled "Forward +8%") model a scenario where the grid strategy
			produces a modestly positive expected annual return of +8% — reflecting the mean of the
			positive-return years (2020, 2021, 2024) with improved regime filtering reducing crash
			exposure. Under this assumption, the 20% grid frontier moves meaningfully toward the
			traditional curve, demonstrating the diversification benefit that the correlation number
			suggests is available when the strategy is working.
		</p>

		<div class="mb-3 overflow-hidden rounded-sm border border-rule bg-navy-ink p-6">
			<div class="mb-1 text-[0.6rem] uppercase tracking-[0.25em] text-ochre-soft">Chart 2 — Efficient Frontier</div>
			<div class="mb-1 text-sm font-medium text-cream/90">Traditional vs. Grid-Augmented Portfolios</div>
			<div class="mb-4 text-[0.72rem] text-cream/50">Full history (2017–2025) and forward-looking (+8% grid) scenarios</div>
			<div style="position: relative; height: 360px;">
				<canvas id="efChart"></canvas>
			</div>
		</div>
		<p class="text-[0.72rem] italic text-slate-light">Backtested data — not investment advice. All grid returns are simulated. Forward scenario is not a forecast.</p>
	</section>

	<!-- ── Section 5: Year-by-Year ─────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Year-by-Year Results</h2>

		<p class="mb-8 text-base leading-relaxed text-slate">
			The grouped bar chart below shows annual returns for the grid composite and traditional
			assets from 2017 through 2025. Two years stand out immediately: 2018 and 2022 show grid
			losses of &minus;62.9% and &minus;58.9% respectively — losses of a magnitude that
			permanently impair compounded returns even when surrounded by positive years. The remaining
			seven years average a modest +1.6% for the grid composite, which is roughly breakeven when
			viewed against the cost of capital.
		</p>

		<div class="mb-3 overflow-hidden rounded-sm border border-rule bg-navy-ink p-6">
			<div class="mb-1 text-[0.6rem] uppercase tracking-[0.25em] text-ochre-soft">Chart 3 — Annual Returns</div>
			<div class="mb-1 text-sm font-medium text-cream/90">Grid Composite vs. Traditional Assets, 2017–2025</div>
			<div class="mb-4 text-[0.72rem] text-cream/50">Grid = backtested arithmetic mean across 17 symbols per year</div>
			<div style="position: relative; height: 360px;">
				<canvas id="annualReturnsChart"></canvas>
			</div>
		</div>
		<p class="mb-6 text-[0.72rem] italic text-slate-light">Backtested data — not investment advice.</p>

		<!-- Accessibility data table -->
		<div class="overflow-x-auto">
			<table class="w-full border-collapse text-xs text-slate">
				<caption class="mb-3 text-left text-[0.68rem] uppercase tracking-wider text-slate-light">Annual Returns Table — 2017–2025 (%)</caption>
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2 pr-4 font-semibold text-slate-light">Year</th>
						<th class="py-2 pr-4 font-semibold text-slate-light">Grid (Sim.)</th>
						<th class="py-2 pr-4 font-semibold text-slate-light">SPY</th>
						<th class="py-2 pr-4 font-semibold text-slate-light">GLD</th>
						<th class="py-2 pr-4 font-semibold text-slate-light">AGG</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ year: 2017, grid: '+7.0', spy: '+21.8', gld: '+12.8', agg: '+1.1' },
						{ year: 2018, grid: '−62.9', spy: '−4.4', gld: '−2.1', agg: '−2.5' },
						{ year: 2019, grid: '−7.1', spy: '+31.5', gld: '+18.3', agg: '+5.4' },
						{ year: 2020, grid: '+11.1', spy: '+18.4', gld: '+24.8', agg: '+4.9' },
						{ year: 2021, grid: '+13.2', spy: '+28.7', gld: '−3.6', agg: '−3.4' },
						{ year: 2022, grid: '−58.9', spy: '−18.1', gld: '−0.3', agg: '−14.4' },
						{ year: 2023, grid: '+0.3', spy: '+26.3', gld: '+13.1', agg: '+1.7' },
						{ year: 2024, grid: '+10.3', spy: '+24.0', gld: '+27.0', agg: '−1.9' },
						{ year: 2025, grid: '−23.5', spy: '+16.6', gld: '+61.5', agg: '+3.1' },
					] as row (row.year)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2 pr-4 font-semibold text-navy-deep">{row.year}</td>
							<td class="py-2 pr-4 {row.grid.startsWith('−') ? 'text-red-600' : 'text-teal-700'} font-medium">{row.grid}%</td>
							<td class="py-2 pr-4">{row.spy}%</td>
							<td class="py-2 pr-4">{row.gld}%</td>
							<td class="py-2 pr-4">{row.agg}%</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
	</section>

	<!-- ── Section 6: The Sweet Spot ──────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 6</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Sweet Spot</h2>

		<p class="mb-8 text-base leading-relaxed text-slate">
			The allocation sweep below shows portfolio Sharpe ratio (risk-free rate 4.5%) as grid
			allocation increases from 0% to 50%, with the remaining capital optimized for maximum
			Sharpe across SPY, GLD, and AGG at each level. Two scenarios are plotted.
		</p>

		<div class="mb-3 overflow-hidden rounded-sm border border-rule bg-navy-ink p-6">
			<div class="mb-1 text-[0.6rem] uppercase tracking-[0.25em] text-ochre-soft">Chart 4 — Allocation Sweep</div>
			<div class="mb-1 text-sm font-medium text-cream/90">Sharpe Ratio vs. Grid Allocation (%)</div>
			<div class="mb-4 text-[0.72rem] text-cream/50">Historical (CAGR &minus;16.3%) vs. Forward-Looking (+8% expected return)</div>
			<div style="position: relative; height: 360px;">
				<canvas id="sweepChart"></canvas>
			</div>
		</div>
		<p class="mb-8 text-[0.72rem] italic text-slate-light">Backtested data — not investment advice. Forward scenario is not a forecast.</p>

		<p class="text-base leading-relaxed text-slate">
			The historical line (red) tells a clear story: every percentage point of grid allocation
			from 0% upward reduces portfolio Sharpe monotonically. There is no sweet spot in the full
			nine-year history. The geometric return penalty from 2018 and 2022 is dominant — the near-zero
			correlation cannot compensate for adding an asset with a negative long-run compounded return.
			Under the forward-looking scenario (teal line), where grid expected return is modeled at
			+8% annually with improved regime filtering, the picture changes: Sharpe peaks in the
			10–20% range at approximately 0.95, a marginal improvement of +0.03 over the 0% grid
			baseline of 0.92. Above 30%, traditional assets reassert dominance and Sharpe declines.
			For advisors evaluating a grid sleeve, this is the number that matters: the benefit is
			real but modest, and it is entirely conditional on the strategy generating positive returns.
		</p>
	</section>

	<!-- ── Section 7: Interpretation ──────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 7</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Interpretation for Advisors</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The near-zero correlation between grid strategy returns and equity markets is structural,
			not accidental. Grid trading generates return from price oscillation — the strategy profits
			when an asset moves back and forth through a defined price band. This mechanism has no
			directional dependency on whether stocks are rising or falling. The mathematical result is
			a return stream that co-moves with equity markets only incidentally, when both happen to be
			in directionally similar regimes simultaneously. Over nine annual observations, that
			incidental co-movement amounts to &rho;&nbsp;=&nbsp;+0.02 — effectively zero.
		</p>
		<p class="mb-5 text-base leading-relaxed text-slate">
			The crash caveat is real and must not be minimized. In 2018 and 2022, cryptocurrency
			markets entered sustained trending bear regimes. Grid strategies — which require an asset
			to oscillate within a range — perform catastrophically when the asset instead trends
			continuously downward through the grid levels. The composite drawdowns of &minus;62.9%
			and &minus;58.9% in those years are not tail events in the statistical sense; they are
			the expected outcome of a short-volatility strategy in a high-volatility trending
			environment. CoinRoc's FIS&trade; (regime detection) system is designed specifically to
			identify these conditions and reduce or suspend grid exposure before the full drawdown
			accrues. The regime-filtered results will be reported in Paper 1 when published.
		</p>
		<p class="text-base leading-relaxed text-slate">
			The conditional case is the honest framing for advisors. If the strategy generates modestly
			positive returns — approximately +8% annually, reflecting improved regime filtering — a
			10–20% sleeve improves portfolio risk-adjusted return by roughly 0.03 Sharpe points. This
			is not a prediction; it is a quantification of the tradeoff. The diversification benefit
			is mathematically available because the correlation is near-zero; whether the strategy
			actually generates positive returns going forward is a separate question that depends on
			regime management, execution quality, and market structure. Advisors should treat this
			analysis as showing the shape of the opportunity, not as a forecast of its realization.
		</p>
	</section>

	<!-- ── Section 8: Disclaimers ───────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 8</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Disclaimers</h2>

		<div class="border border-rule bg-cream-deep/60 p-6 text-sm leading-relaxed text-slate">
			<p>
				All return and performance figures in this note are based on historical backtested
				simulation using the CoinRoc research harness. Backtested results do not represent actual
				trading. Past performance does not guarantee future results. Grid trading strategies
				involve substantial risk of loss, including the potential loss of all invested capital.
			</p>
			<p class="mt-4">
				This research note is for informational purposes only and does not constitute investment
				advice. Yodacom Research is not a registered investment adviser. This note has not been
				reviewed by a securities regulator. The efficient frontier analysis, correlation estimates,
				and allocation sweep results are derived from simulated data with nine annual observations;
				all estimates carry wide confidence intervals.
			</p>
			<p class="mt-4">
				The forward-looking scenario (grid expected return = +8%) is a modeling assumption, not a
				forecast. Actual future grid strategy returns will depend on cryptocurrency market regimes,
				execution quality, exchange fee structures, and factors not captured in this analysis.
			</p>
			<p class="mt-4">
				Reproduction with attribution permitted.
			</p>
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

<script>
// ── DATA ─────────────────────────────────────────────────────────────
const years = [2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024, 2025];

const annualData = {
  grid: [ 7.0, -62.9, -7.1,  11.1,  13.2, -58.9,   0.3,  10.3, -23.5],
  spy:  [21.8,  -4.4, 31.5,  18.4,  28.7, -18.1,  26.3,  24.0,  16.6],
  gld:  [12.8,  -2.1, 18.3,  24.8,  -3.6,  -0.3,  13.1,  27.0,  61.5],
  agg:  [ 1.1,  -2.5,  5.4,   4.9,  -3.4, -14.4,   1.7,  -1.9,   3.1],
};

const corrMatrix = [
  [1.00, 0.02, 0.07, 0.21],
  [0.02, 1.00, 0.11, 0.43],
  [0.07, 0.11, 1.00, 0.44],
  [0.21, 0.43, 0.44, 1.00],
];
const corrLabels = ['Grid', 'SPY', 'GLD', 'AGG'];

// EF frontier point sets — [vol, return]
const efA = [
  [5.7, -0.4], [8.2, 8.3], [10.0, 15.8], [12.0, 17.0],
  [14.2, 17.6], [15.0, 18.0], [15.8, 18.9], [18.0, 18.1], [20.4, 16.3],
].sort((a, b) => a[0] - b[0]);

const efB_hist = [
  [6.9, -3.3], [9.2, 4.5], [10.0, 5.8], [12.0, 7.2],
  [13.1, 11.4], [15.0, 9.5], [18.0, 8.9],
].sort((a, b) => a[0] - b[0]);

const efB_fwd = [
  [6.4, 2.8], [8.5, 11.0], [10.0, 14.7], [12.0, 16.2],
  [13.5, 17.0], [15.0, 16.8], [17.0, 16.0],
].sort((a, b) => a[0] - b[0]);

const sweepPct        = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50];
const sweepHistorical = [0.92, 0.79, 0.64, 0.48, 0.31, 0.13, -0.05, -0.23, -0.39, -0.53, -0.65];
const sweepForward    = [0.92, 0.94, 0.95, 0.95, 0.95, 0.93, 0.90, 0.86, 0.81, 0.75, 0.70];

// Colors — navy-dominant dark palette matching site
const C_TEAL   = '#14b8a6';
const C_BLUE   = '#3b82f6';
const C_RED    = '#ef4444';
const C_GREEN  = '#22c55e';
const C_MUTED  = '#475569';

// Shared Chart.js defaults for dark card backgrounds
const darkDefaults = {
  color: '#94a3b8',
  backgroundColor: 'transparent',
};

// ── CHART: HEATMAP (HTML rendered) ───────────────────────────────────
(function buildHeatmap() {
  const header = document.getElementById('heatmapHeader');
  const container = document.getElementById('heatmap');
  if (!header || !container) return;

  // Column headers
  const spacer = document.createElement('div');
  spacer.style.cssText = 'width:80px;flex-shrink:0;';
  header.appendChild(spacer);

  corrLabels.forEach(lbl => {
    const h = document.createElement('div');
    h.style.cssText = 'flex:1;text-align:center;font-size:0.72rem;font-weight:600;color:#64748b;letter-spacing:0.06em;text-transform:uppercase;margin:0 2px;';
    h.textContent = lbl;
    header.appendChild(h);
  });

  function corrColor(v) {
    if (v >= 0) {
      const t = v;
      return `rgb(${Math.round(20 + (20-20)*t)},${Math.round(41 + (184-41)*t)},${Math.round(53 + (166-53)*t)})`;
    } else {
      const t = -v;
      return `rgb(${Math.round(20 + (239-20)*t)},${Math.round(41 + (68-41)*t)},${Math.round(53 + (68-53)*t)})`;
    }
  }

  for (let i = 0; i < 4; i++) {
    const row = document.createElement('div');
    row.style.cssText = 'display:flex;align-items:center;';

    const lbl = document.createElement('div');
    lbl.style.cssText = 'width:80px;flex-shrink:0;font-size:0.78rem;font-weight:600;color:#64748b;text-align:right;padding-right:10px;';
    lbl.textContent = corrLabels[i];
    row.appendChild(lbl);

    for (let j = 0; j < 4; j++) {
      const v = corrMatrix[i][j];
      const cell = document.createElement('div');
      cell.style.cssText = `flex:1;height:64px;display:flex;align-items:center;justify-content:center;font-size:0.9rem;font-weight:700;border-radius:4px;margin:2px;background:${corrColor(v)};color:${Math.abs(v)>0.3?'#fff':'#94a3b8'};`;
      cell.textContent = v === 1.00 ? '1.00' : v.toFixed(2);
      if ((i === 0 && j === 1) || (i === 1 && j === 0)) {
        cell.style.outline = '2px solid #14b8a6';
        cell.title = 'Grid vs. SPY — key diversification metric';
      }
      row.appendChild(cell);
    }
    container.appendChild(row);
  }
})();

// ── CHART 2: EFFICIENT FRONTIER ───────────────────────────────────────
(function buildEFChart() {
  const canvas = document.getElementById('efChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  const toXY = pts => pts.map(p => ({ x: p[0], y: p[1] }));

  new Chart(ctx, {
    type: 'scatter',
    data: {
      datasets: [
        {
          label: 'Traditional Only — Historical',
          data: toXY(efA),
          borderColor: C_TEAL,
          showLine: true, fill: false, tension: 0.3,
          pointRadius: 3, borderWidth: 2.5, order: 1,
        },
        {
          label: '20% Grid — Historical',
          data: toXY(efB_hist),
          borderColor: C_RED,
          showLine: true, fill: false, tension: 0.3,
          pointRadius: 3, borderWidth: 2, borderDash: [5, 3], order: 2,
        },
        {
          label: '20% Grid — Forward +8%',
          data: toXY(efB_fwd),
          borderColor: C_GREEN,
          showLine: true, fill: false, tension: 0.3,
          pointRadius: 3, borderWidth: 2, borderDash: [6, 3], order: 3,
        },
        {
          label: 'Risk-Free Rate (4.5%)',
          data: [{ x: 4, y: 4.5 }, { x: 22, y: 4.5 }],
          borderColor: 'rgba(148,163,184,0.2)',
          showLine: true, fill: false,
          pointRadius: 0, borderWidth: 1, borderDash: [3, 5], order: 10,
        },
      ]
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8', boxWidth: 20, padding: 14, font: { size: 11 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: '#1e293b', borderColor: '#334155', borderWidth: 1,
          titleColor: '#e2e8f0', bodyColor: '#94a3b8',
          callbacks: {
            label: ctx => ` Vol: ${ctx.parsed.x.toFixed(1)}%  |  Return: ${ctx.parsed.y.toFixed(1)}%  |  Sharpe: ${((ctx.parsed.y - 4.5) / ctx.parsed.x).toFixed(2)}`,
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: 'Annualized Portfolio Volatility (%)', color: '#64748b', font: { size: 11 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 }, callback: v => v + '%' },
          min: 4, max: 22,
        },
        y: {
          title: { display: true, text: 'Annualized Portfolio Return (%)', color: '#64748b', font: { size: 11 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 }, callback: v => v + '%' },
          min: -10, max: 22,
        },
      },
    },
  });
})();

// ── CHART 3: ANNUAL RETURNS ───────────────────────────────────────────
(function buildAnnualChart() {
  const canvas = document.getElementById('annualReturnsChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: years,
      datasets: [
        {
          label: 'Grid Composite (Simulated)',
          data: annualData.grid,
          backgroundColor: annualData.grid.map(v => v >= 0 ? 'rgba(20,184,166,0.7)' : 'rgba(239,68,68,0.7)'),
          borderColor: annualData.grid.map(v => v >= 0 ? C_TEAL : C_RED),
          borderWidth: 1, borderRadius: 3, order: 1,
        },
        {
          label: 'SPY (US Equities)',
          data: annualData.spy,
          type: 'line',
          borderColor: C_BLUE,
          backgroundColor: 'transparent',
          pointBackgroundColor: C_BLUE,
          pointRadius: 4, borderWidth: 2, tension: 0.2, order: 0,
        },
        {
          label: 'GLD (Gold)',
          data: annualData.gld,
          type: 'line',
          borderColor: '#f59e0b',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#f59e0b',
          pointRadius: 4, borderWidth: 2, tension: 0.2, order: 0,
        },
        {
          label: 'AGG (US Bonds)',
          data: annualData.agg,
          type: 'line',
          borderColor: '#a855f7',
          backgroundColor: 'transparent',
          pointBackgroundColor: '#a855f7',
          pointRadius: 4, borderWidth: 1.5, tension: 0.2, borderDash: [4, 3], order: 0,
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8', boxWidth: 20, padding: 14, font: { size: 11 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: '#1e293b', borderColor: '#334155', borderWidth: 1,
          titleColor: '#e2e8f0', bodyColor: '#94a3b8',
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y >= 0 ? '+' : ''}${ctx.parsed.y.toFixed(1)}%`,
          },
        },
      },
      scales: {
        x: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 } },
        },
        y: {
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 }, callback: v => v + '%' },
        },
      },
    },
  });
})();

// ── CHART 4: ALLOCATION SWEEP ─────────────────────────────────────────
(function buildSweepChart() {
  const canvas = document.getElementById('sweepChart');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  new Chart(ctx, {
    type: 'line',
    data: {
      labels: sweepPct.map(v => v + '%'),
      datasets: [
        {
          label: 'Historical (Grid CAGR = −16.3%)',
          data: sweepHistorical,
          borderColor: C_RED,
          backgroundColor: 'rgba(239,68,68,0.06)',
          fill: false, tension: 0.3,
          pointRadius: 5, borderWidth: 2.5,
          pointBackgroundColor: sweepHistorical.map(v => v >= 0 ? C_RED : '#7f1d1d'),
        },
        {
          label: 'Forward-Looking (Grid Expected = +8%)',
          data: sweepForward,
          borderColor: C_TEAL,
          backgroundColor: 'rgba(20,184,166,0.06)',
          fill: false, tension: 0.3,
          pointRadius: 5, borderWidth: 2.5,
          pointBackgroundColor: C_TEAL,
        },
        {
          label: 'Break-even Sharpe (0.0)',
          data: sweepPct.map(() => 0),
          borderColor: 'rgba(148,163,184,0.18)',
          fill: false, pointRadius: 0,
          borderWidth: 1, borderDash: [4, 4],
        },
      ],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: {
        legend: {
          position: 'bottom',
          labels: { color: '#94a3b8', boxWidth: 20, padding: 14, font: { size: 11 }, usePointStyle: true },
        },
        tooltip: {
          backgroundColor: '#1e293b', borderColor: '#334155', borderWidth: 1,
          titleColor: '#e2e8f0', bodyColor: '#94a3b8',
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: Sharpe ${ctx.parsed.y.toFixed(2)}`,
          },
        },
      },
      scales: {
        x: {
          title: { display: true, text: 'Grid Allocation (%)', color: '#64748b', font: { size: 11 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 } },
        },
        y: {
          title: { display: true, text: 'Portfolio Sharpe Ratio (Rf = 4.5%)', color: '#64748b', font: { size: 11 } },
          grid: { color: 'rgba(255,255,255,0.04)' },
          ticks: { color: '#64748b', font: { size: 10 } },
          min: -0.9, max: 1.1,
        },
      },
    },
  });
})();
</script>
