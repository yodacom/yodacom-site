<svelte:head>
	<title>Crypto Grid Trading vs. Options for Income: An Honest Comparison — Yodacom Research</title>
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Paper № 2 &middot; May 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			Crypto Grid Trading vs. Options for Income: An Honest Comparison
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			Risk, Return, and the Limits of the Sharpe Ratio
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Jeremy J. Black &middot; Yodacom Research
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Quantitative analysis by Yodacom AI Research Team
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			A common objection to crypto grid trading is that S&amp;P 500 options-for-income strategies
			produce better Sharpe ratios. The objection is correct. We compare CoinRoc&rsquo;s FIS-gated
			crypto grid &mdash; 135 walk-forward test folds, 13 years, 17 assets &mdash; against
			published benchmarks for systematic options premium strategies. Options strategies do achieve
			higher Sharpe ratios, and we will not pretend otherwise. But the complete picture requires
			tail risk, Calmar ratio, capital requirements, crisis drawdown, and automation feasibility.
			On those dimensions the comparison is more nuanced. Neither strategy dominates.
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
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Strategy Comparison Window</div>
			<div class="font-serif text-5xl font-500 text-navy-ink">135</div>
			<div class="mt-2 text-sm text-slate">Walk-forward folds · 13 years · 17 crypto assets</div>
			<div class="mt-3 flex justify-center gap-8 text-xs text-slate-light">
				<span>CoinRoc grid: 2013–2025</span>
				<span>Options benchmarks: 1986–2025</span>
			</div>
		</div>

		<ul class="space-y-3 text-base leading-relaxed text-slate">
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">Options for income wins on Sharpe &mdash; plainly:</strong> CBOE PUT index Sharpe ~0.64 vs. CoinRoc grid median Sharpe &minus;0.303 across 135 walk-forward folds. That gap is real.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>The Sharpe gap is partly a denominator artifact: crypto assets run 60&ndash;150% annualized vol vs. 12&ndash;18% for the S&amp;P 500. Equal absolute returns produce 4&ndash;8&times; higher Sharpe on the calmer underlying.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>Options carry hidden tail risk that Sharpe does not price: February 2018 VIX spike produced single-session losses exceeding 10&times; typical monthly premium.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
				<span><strong class="text-navy-deep">The grid wins in confirmed bear markets:</strong> 100% win rate against buy-and-hold in crypto folds where B&amp;H lost more than 20%.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>CoinRoc&rsquo;s grid runs fully automated. Systematic options strategies require ongoing human judgment on strike selection, roll timing, and assignment handling.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span>Capital requirements differ by an order of magnitude: cash-secured puts on SPY require $40,000&ndash;$50,000 per contract; a functional crypto grid deploys on $1,000&ndash;$5,000.</span>
			</li>
		</ul>
	</section>

	<!-- ── Section 2: The Honest Starting Point ────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 2</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Honest Starting Point</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Options strategies beat our grid strategy on Sharpe ratio. We confirmed this ourselves,
			and we are not here to dispute it.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			What we are here to do is explain why Sharpe ratio is the least interesting fact about this
			comparison &mdash; and what the complete picture actually looks like.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Both strategies harvest volatility premium. A grid trading strategy collects the spread
			between buy and sell orders as prices oscillate; it earns on range-bound volatility and
			loses when prices trend hard in one direction. Options-for-income strategies &mdash; covered
			calls, cash-secured puts, iron condors &mdash; sell implied volatility and collect theta
			decay as earned income. Both structures earn when markets cooperate and bleed when markets
			do not. The similarity ends there.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The underlying assets are different. The tail risk profiles are different. The capital
			requirements are different by an order of magnitude. The automation feasibility is
			different. Evaluating the two strategies by a single risk-adjusted return metric from a
			textbook &mdash; one that assumes normally distributed returns, which neither strategy
			satisfies &mdash; is not analysis. It is noise.
		</p>
	</section>

	<!-- ── Section 3: What the Sharpe Gap Actually Means ──────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 3</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What the Sharpe Gap Actually Means</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The CBOE PUT index has achieved approximately 0.64 Sharpe over its full history (inception
			1986). Our FIS-gated grid median Sharpe is &minus;0.303 across 135 walk-forward folds from
			2013 to 2025. This is a large gap. Before treating it as evidence of strategic inferiority,
			the gap needs to be decomposed.
		</p>

		<div class="mb-5 border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">The denominator problem</div>
			<p class="text-base leading-relaxed text-slate">
				Sharpe ratio = (return &minus; risk-free rate) / standard deviation of returns. The S&amp;P
				500&rsquo;s annualized volatility in normal markets runs 12&ndash;18%. Crypto assets in
				this dataset run 60&ndash;150% annualized volatility. Even if both strategies earned
				identical absolute returns, the options strategy would show a Sharpe 4&ndash;8&times;
				higher because the underlying asset is calmer. That is not alpha. It is arithmetic.
			</p>
		</div>

		<div class="mb-5 border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">The regime distribution problem</div>
			<p class="text-base leading-relaxed text-slate">
				Our grid data spans 2013&ndash;2025, including two severe crypto bear markets (2018: BTC
				&minus;84%; 2022: BTC &minus;65%) and a confirmed ongoing bear from November 2025. Hurst
				exponent analysis across 13 years of crypto data shows that 67.4% of all test folds are
				trending regimes &mdash; the worst possible environment for a mean-reversion strategy. The
				30-year PUT index history contains a much higher proportion of range-bound equity markets.
				We are not comparing like environments.
			</p>
		</div>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">The return distribution problem</div>
			<p class="text-base leading-relaxed text-slate">
				Sharpe assumes normally distributed returns. Options for income has a well-documented
				left-skewed return distribution: frequent small gains interrupted by infrequent, large
				losses. Higher Sharpe on a negatively skewed distribution means the strategy is producing
				tail risk the numerics are not capturing. This is a structural property of any
				short-volatility strategy &mdash; which is precisely why Sharpe comparisons across these
				strategies cannot be the final word.
			</p>
		</div>
	</section>

	<!-- ── Section 4: Side-by-Side Comparison ─────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 4</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Side-by-Side Comparison</h2>

		<div class="mb-4 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Metric</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Crypto Grid (FIS v2)</th>
						<th class="py-2.5 font-semibold text-slate-light">S&amp;P Options for Income</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ metric: 'Sharpe ratio', grid: '−0.303 median fold (mixed regimes)', options: '~0.58–0.64 (BXM/PUT index, 1986–2025)' },
						{ metric: 'Calmar ratio', grid: '0.038 mean, 135 folds', options: '~0.30–0.50 (Israelov & Klein, 2016)' },
						{ metric: 'Max drawdown', grid: '27.4% mean fold; up to 82% in crash folds', options: '~15–25% typical; 30–35% in 2020 crash' },
						{ metric: 'Best environment', grid: 'Post-crash oscillating recovery; choppy sideways', options: 'Stable, range-bound; VIX elevated but not spiking' },
						{ metric: 'Worst environment', grid: 'Sustained directional trends (bull or bear)', options: 'Sharp VIX spikes; gap moves beyond strikes' },
						{ metric: 'Tail risk profile', grid: 'Explicit — inventory accumulation is visible', options: 'Implicit negative skew; tail events arrive fast' },
						{ metric: 'Capital requirement', grid: '$1,000–$50,000+ per asset', options: '$40,000–$50,000+ per SPY contract (cash-secured)' },
						{ metric: 'Supervision required', grid: 'Minimal — regime gate handles allocation', options: 'Ongoing: strike selection, roll decisions, assignment handling' },
						{ metric: 'Automation feasibility', grid: 'Full (CoinRoc today)', options: 'Partial — roll logic and assignment handling require judgment' },
						{ metric: 'Tax treatment (US)', grid: 'Short-term capital gains, all positions', options: 'Mixed; SPX options may qualify for Section 1256 60/40 treatment*' },
					] as row (row.metric)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.metric}</td>
							<td class="py-2.5 pr-6">{row.grid}</td>
							<td class="py-2.5">{row.options}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>
		<p class="text-[0.72rem] italic text-slate-light">*Tax treatment depends on individual circumstances; readers should consult a qualified tax advisor.</p>
	</section>

	<!-- ── Section 5: Tail Risk the Sharpe Misses ─────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Tail Risk the Sharpe Ratio Misses</h2>

		<p class="mb-6 text-base leading-relaxed text-slate">
			Three stress events frame this comparison better than any backtest metric.
		</p>

		<div class="mb-5 space-y-5">
			<div class="border border-rule bg-paper p-5">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">March 2020 &mdash; COVID Crash</div>
				<p class="text-sm leading-relaxed text-slate">
					S&amp;P 500 fell 34% in 33 trading days. For a systematic put seller, assignment risk
					materialized on positions that were comfortably out-of-the-money three weeks prior. The
					CBOE PUT index declined approximately 27% from its February 2020 peak. The speed of
					the move left mechanical strategies with no roll opportunity before forced assignment
					at prices well below strike. Six to twelve months of collected premium was partially
					or fully erased in a single expiration cycle.
				</p>
			</div>

			<div class="border border-rule bg-paper p-5">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">February 2018 &mdash; VIX Spike (&ldquo;Volmageddon&rdquo;)</div>
				<p class="text-sm leading-relaxed text-slate">
					Implied volatility doubled overnight. Strategies short VIX ETPs lost 80&ndash;95% in a
					single session. Iron condors and short-straddle structures experienced losses 5&ndash;15&times;
					their typical monthly income in hours. The core mechanism &mdash; sudden large VIX
					expansion faster than a monthly-roll strategy can hedge &mdash; is a structural property
					of short-volatility equity strategies, not a one-time aberration.
				</p>
			</div>

			<div class="border border-rule bg-paper p-5">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">November 2022 &mdash; FTX Collapse</div>
				<p class="text-sm leading-relaxed text-slate">
					BTC fell approximately 25% in two weeks. CoinRoc&rsquo;s FIS gate classified conditions
					as defensive &mdash; price below the 200-day MA plus elevated volatility triggers Rule
					7 (zero engagement), preserving capital in cash rather than accumulating inventory
					into the cascade. In the 43 folds where the FIS gate classified conditions as defensive
					and zeroed engagement, capital was preserved.
				</p>
			</div>
		</div>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">CVaR as the more honest risk metric</div>
			<p class="text-base leading-relaxed text-slate">
				Israelov &amp; Klein (2016) document that systematic equity put-write strategies have CVaR
				at the 1% level approximately 2&ndash;3&times; their average monthly drawdown &mdash; the
				expected loss in the worst 1% of months runs roughly 10&ndash;15% of capital, from a
				strategy that earns 0.5&ndash;1.5% per month normally. The loss-to-gain ratio in the tail
				is approximately 10:1. The crypto grid&rsquo;s tail behavior is more symmetric: in the
				worst folds, the strategy does not lose capital &mdash; it produces low absolute returns
				while buy-and-hold produces extraordinary gains. The strategy&rsquo;s true failure mode
				is sustained bear accumulation, which is visible in inventory and addressable via the FIS
				gate. Neither strategy is safer in an absolute sense. The risk profiles are structurally
				different.
			</p>
		</div>
	</section>

	<!-- ── Section 6: The Automation Divide ──────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 6</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Automation Divide</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Grid trading and options for income diverge most sharply on automation &mdash; and this
			difference has compounding implications for accessibility and scalability.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s grid is fully automated: regime detection via FIS v2 (real-time computation
			of price vs. 200-day MA, volatility ratio, and momentum into a continuous engagement
			scalar), grid parameter calibration from training-window volatility, order placement with
			GTX post-only enforcement, and portfolio-level allocation using mean-variance optimization.
			The strategy runs without human intervention.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			A systematic options-for-income strategy has more decision points, and a meaningful fraction
			require human judgment. Strike selection at a fixed delta is mechanizable; calibrating that
			delta to current VIX level, premium available, and portfolio risk is not stationary and not
			fully automatable. Roll decisions when the underlying moves significantly between cycles
			depend on portfolio composition, upcoming macro catalysts, and the vol surface. Assignment
			handling creates an active portfolio management task with tax implications.
		</p>

		<div class="mb-5 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Automation dimension</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Crypto Grid</th>
						<th class="py-2.5 font-semibold text-slate-light">Options for Income</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ dim: 'Order entry', grid: 'Full', options: 'Full' },
						{ dim: 'Regime detection', grid: 'Full (FIS v2)', options: 'Manual / partial' },
						{ dim: 'Strike / parameter calibration', grid: 'Full (training-window vol)', options: 'Manual — vol surface dependent' },
						{ dim: 'Roll decisions', grid: 'N/A — grid resets on conditions', options: 'Manual — judgment required' },
						{ dim: 'Assignment handling', grid: 'N/A', options: 'Manual — creates active portfolio task' },
						{ dim: 'Scales with capital', grid: 'Yes — fully automated', options: 'Partially — scales with manager time' },
					] as row (row.dim)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.dim}</td>
							<td class="py-2.5 pr-6">{row.grid}</td>
							<td class="py-2.5">{row.options}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="text-base font-medium leading-relaxed text-navy-deep">
			A fully automated strategy scales with capital. A partially automated strategy scales with
			the manager&rsquo;s time.
		</p>
	</section>

	<!-- ── Section 7: Which Strategy for Which Investor ──────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 7</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Which Strategy for Which Investor</h2>

		<p class="mb-6 text-base leading-relaxed text-slate">
			Neither strategy dominates. The appropriate choice depends on specific investor characteristics.
		</p>

		<div class="mb-6 space-y-5">
			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Profile aligned with crypto grid approaches</div>
				<p class="text-base leading-relaxed text-slate">
					Want crypto risk premium exposure without all-or-nothing buy-and-hold outcomes; working
					with smaller capital where options requirements are prohibitive; prefer a fully automated
					approach with no ongoing tactical decisions; can tolerate explicit, visible drawdowns in
					confirmed bear markets; and accept short-term capital gains tax treatment.
				</p>
			</div>

			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Profile aligned with systematic equity options</div>
				<p class="text-base leading-relaxed text-slate">
					Have sufficient capital to run cash-secured positions ($40,000&ndash;$50,000+ per
					contract); can commit meaningful time each expiration cycle to roll and assignment
					management; are psychologically and financially prepared for infrequent but large
					drawdown events after months of consistent premium income; and have tax situations that
					benefit from Section 1256 60/40 treatment (consult a qualified tax advisor regarding
					your specific situation), or are managing the strategy in a tax-advantaged account.
				</p>
			</div>

			<div class="border-l-2 border-teal-500/60 pl-4">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-teal-700">The case for both</div>
				<p class="text-base leading-relaxed text-slate">
					These strategies are genuinely uncorrelated. Crypto grid returns are driven by
					crypto-specific regime and volatility. S&amp;P 500 options returns are driven by equity
					vol dynamics. A portfolio containing both strategies &mdash; sized by risk contribution
					rather than nominal capital &mdash; exhibits a structural diversification benefit in
					historical data, driven by largely uncorrelated return drivers. The crypto grid&rsquo;s
					best environments partially offset the options strategy&rsquo;s worst environments.
					The correlation is imperfect and regime-dependent, but the diversification case is
					structurally sound.
				</p>
			</div>
		</div>

		<!-- Current context callout -->
		<div class="border border-rule bg-paper p-6">
			<div class="mb-2 text-[0.68rem] uppercase tracking-widest text-slate-light">Current Context &mdash; May 2026</div>
			<p class="text-sm leading-relaxed text-slate">
				We are six months into a confirmed crypto bear market by four independent indicators: SMA50/200
				death cross November 2025; price approximately 30% below 52-week high; negative 90-day
				momentum; vol ratio unfavorable. The FIS v2 system correctly classifies current conditions
				as defensive and outputs reduced or zero engagement, consistent with defensive classifications
				documented in historical bear-fold data. The S&amp;P 500 options environment, by contrast,
				has normalized following the 2025 equity correction &mdash; VIX in the 15&ndash;20 range,
				moderate premium available, no extreme vol compression or dislocation. These are current
				observations, not forecasts.
			</p>
		</div>
	</section>

	<!-- ── Section 8: Conclusions ─────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 8</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Conclusions</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The prior finding that options strategies show better Sharpe ratios than our grid strategy
			is correct. We have not found a way to dispute it, nor have we tried to. The gap is
			structural and expected: lower underlying volatility mechanically produces higher Sharpe for
			comparable absolute returns, and the S&amp;P 500 is simply a calmer underlying than any
			major cryptocurrency.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			What the Sharpe comparison misses is the full picture: tail risk structure, automation
			feasibility, capital requirements, and regime behavior in crisis scenarios. Options strategies
			carry implicit negative skew that Sharpe numerics conceal &mdash; the tail events are
			infrequent but severe, and they arrive faster than a monthly-roll strategy can respond.
			Crypto grid strategies carry explicit risk that is visible in inventory, addressable by the
			FIS regime gate, and bounded by the mechanical structure of the strategy rather than by
			exposure to gap moves beyond a strike.
		</p>

		<p class="text-base leading-relaxed text-slate">
			We are not declaring a winner. We are providing the complete picture so investors can make
			their own decisions based on their actual capital, time horizon, tax situation, and tolerance
			for different kinds of risk. Both strategies harvest volatility premium. They do so in
			different markets, with different tail profiles, different capital requirements, and different
			automation profiles. Reducing that to a single Sharpe ratio comparison would be
			intellectually dishonest &mdash; and that, more than any return metric, is what we are
			trying to avoid here.
		</p>
	</section>

	<!-- ── Section 9: Methodology Note ───────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 9</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology Note</h2>

		<details class="border border-rule bg-paper">
			<summary class="cursor-pointer px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-cream-deep/40 transition select-none">
				Full methodology details &mdash; click to expand
			</summary>
			<div class="border-t border-rule px-6 py-5 text-sm leading-relaxed text-slate space-y-3">
				<p><strong class="text-navy-deep">Grid trading data:</strong> Walk-forward backtests run on Tiingo daily bars using CoinRoc AdaptiveGrid v3DynamicMode with FIS v2 regime gating. Full methodology in Kessel &amp; Black (2026a). Key parameters: 2-year training / 1-year test / yearly slide; 55 grid levels; 2.59% geometric spacing; retail Binance.US cost model (0.40% maker / 0.60% taker / 0.05% slippage). All results are out-of-sample. GTX post-only execution enforced.</p>
				<p><strong class="text-navy-deep">Options benchmarks:</strong> CBOE BXM and PUT index performance data sourced from CBOE Options Institute published research. Academic references: Carr &amp; Wu (2009); Israelov &amp; Klein (2016); Ilmanen (2012); Bollerslev et al. (2011).</p>
				<p><strong class="text-navy-deep">Sharpe methodology:</strong> Grid Sharpe ratios are fold-level annualized, computed as annualized excess return divided by annualized standard deviation of daily returns. Risk-free rate approximated at 4.5% for the most recent two years. Cross-strategy Sharpe comparisons should be read with the denominator caveat in mind &mdash; they are not on a level playing field given underlying asset volatility differences.</p>
				<p><strong class="text-navy-deep">Limitations:</strong> We do not have our own options backtest. Options metrics in the comparison table are drawn from published benchmarks and academic literature. A direct apples-to-apples comparison would require running a systematic options backtest on the same time periods. Readers should weight the options metrics accordingly.</p>
			</div>
		</details>
	</section>

	<!-- ── Section 10: References ─────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 10</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">References</h2>

		<div class="space-y-2 text-sm leading-relaxed text-slate">
			<p>Carr, P. &amp; Wu, L. (2009). Variance Risk Premia. <em>Review of Financial Studies, 22</em>(3), 1311&ndash;1341.</p>
			<p>Israelov, R. &amp; Klein, M. (2016). Risk and Return of Equity Index Collar Strategies. <em>Journal of Alternative Investments, 19</em>(1), 41&ndash;54.</p>
			<p>Ilmanen, A. (2012). <em>Expected Returns on Major Asset Classes.</em> CFA Institute Research Foundation.</p>
			<p>Bollerslev, T., Tauchen, G. &amp; Zhou, H. (2011). Expected Stock Returns and Variance Risk Premia. <em>Review of Financial Studies, 22</em>(11), 4463&ndash;4492.</p>
			<p>Simon, D. (2014). Systematic Covered Call Writing on the S&amp;P 500. Working paper.</p>
			<p class="text-slate-light pt-1">Data: CoinRoc grid results from Tiingo daily bars, 17 symbols, 2013&ndash;2025. Options benchmarks from CBOE Options Institute published performance data.</p>
		</div>
	</section>

	<!-- ── Section 11: Important Disclosure ─────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 11</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Important Disclosure</h2>

		<div class="border border-rule bg-cream-deep/60 p-6 text-sm leading-relaxed text-slate">
			<p><strong class="text-navy-deep">Hypothetical and Backtested Performance.</strong> Grid trading performance results presented in this paper are hypothetical and simulated, produced by the retroactive application of a quantitative model using historical data. Hypothetical results have inherent limitations, are generally prepared with the benefit of hindsight, and frequently differ sharply from actual results. No representation is made that any account will achieve similar results. Hypothetical trading does not involve financial risk.</p>

			<p class="mt-4"><strong class="text-navy-deep">Third-Party Data.</strong> Options strategy performance data, including CBOE BXM and PUT index figures, is sourced from CBOE Options Institute published research and academic literature cited in the references. This information is believed reliable but has not been independently verified. Readers are encouraged to consult original sources directly.</p>

			<p class="mt-4"><strong class="text-navy-deep">Past Performance.</strong> Past performance, whether actual, hypothetical, or from published indices, is not indicative of future results.</p>

			<p class="mt-4"><strong class="text-navy-deep">Not Investment Advice.</strong> This document is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The investor-characteristic framework in this paper is descriptive, not prescriptive, and does not constitute personalized investment advice. Readers should consult their own financial, legal, and tax advisors before making any investment decision.</p>

			<p class="mt-4"><strong class="text-navy-deep">Forward-Looking Statements.</strong> Statements regarding current market conditions and strategy behavior are observations as of the date of publication and are subject to change without notice.</p>

			<p class="mt-4"><strong class="text-navy-deep">Options Risk Disclosure.</strong> Options trading involves significant risk and is not appropriate for all investors. Selling options &mdash; including covered calls, cash-secured puts, and iron condors &mdash; exposes the seller to losses that may substantially exceed premiums received. In adverse conditions, including rapid volatility expansion or gap moves, losses may be severe. This paper discusses options concepts for educational purposes only and does not constitute a recommendation to trade options.</p>

			<p class="mt-4"><strong class="text-navy-deep">Digital Asset Risk.</strong> Digital assets are highly volatile and speculative and may experience rapid price declines including total loss. Regulatory treatment is evolving and uncertain.</p>

			<p class="mt-4"><strong class="text-navy-deep">Tax Disclosure.</strong> References to tax treatment, including Section 1256 60/40 treatment, are general in nature and do not constitute tax advice. Consult a qualified tax advisor regarding your specific situation.</p>

			<p class="mt-4"><strong class="text-navy-deep">Regulatory Status of Digital Assets.</strong> The regulatory classification of individual digital assets referenced herein is subject to ongoing legal and regulatory uncertainty and does not constitute a representation regarding any asset&rsquo;s legal status.</p>
		</div>
	</section>

	<!-- Citation and author -->
	<section class="mb-10 border-t border-rule pt-8">
		<div class="space-y-3 text-sm text-slate">
			<p>
				<strong class="text-navy-deep">Citation:</strong>
				Kessel, H., &amp; Black, J. J. (2026). Crypto Grid Trading vs. Options for Income: An Honest Comparison. <em>Yodacom Research pre-print.</em> Quantitative analysis by Yodacom AI Research Team.
			</p>
			<p>
				<strong class="text-navy-deep">Authors:</strong>
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
