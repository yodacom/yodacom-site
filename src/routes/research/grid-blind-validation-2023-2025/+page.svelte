<svelte:head>
	<title>The Vault Test: Near-Blind Out-of-Sample Validation of CoinRoc's Three-State FIS, 2023–2025 | Yodacom Research</title>
	<meta name="description" content="Anyone can backtest data they already know. We locked our parameters before 2023 and ran them unchanged. Here is what 51 out-of-sample folds showed." />
	<meta property="og:title" content="The Vault Test: Near-Blind Out-of-Sample Validation of CoinRoc's Three-State FIS, 2023–2025 | Yodacom Research" />
	<meta property="og:description" content="Anyone can backtest data they already know. We locked our parameters before 2023 and ran them unchanged. Here is what 51 out-of-sample folds showed." />
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Companion to Paper 8 &middot; June 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			The Vault Test: A Near-Blind Out-of-Sample Validation of CoinRoc&rsquo;s Three-State FIS, 2023&ndash;2025
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			Walk-Forward Validation &middot; Three-State FIS &middot; 51 Out-of-Sample Folds
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Han Kessel (research) &middot; Lando (editorial) &middot; Yodacom Research
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Published: 2026-06-09 &middot; Data cutoff: 2026-05-26
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			Anyone can backtest on data they already know. The harder test is this: freeze your parameters,
			put them in a vault, and run them on data the algorithm has never seen. That is what this study is.
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

	<!-- Executive Summary -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Executive Summary</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What Makes This a Near-Blind Study</h2>

		<div class="mb-8 border border-rule bg-paper p-6 text-center">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Out-of-Sample Window</div>
			<div class="font-serif text-5xl font-500 text-navy-ink">51</div>
			<div class="mt-2 text-sm text-slate">Out-of-sample folds &middot; 17 assets &middot; 3 test years (2023&ndash;2025)</div>
			<div class="mt-3 flex justify-center gap-8 text-xs text-slate-light">
				<span>Parameters locked on pre-2023 training data</span>
				<span>Three-State FIS evaluation</span>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s three-state Fuzzy Inference System (FIS) regime thresholds, grid spacing parameters,
			and momentum sleeve settings were locked on training data through 2022. Then, without adjustment,
			we ran the strategy on the 2023, 2024, and 2025 test years. No parameter was touched after seeing
			any 2023&ndash;2025 price data. This study reports what happened across 51 out-of-sample folds.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			<strong class="text-navy-deep">What makes this a near-blind out-of-sample study:</strong> The
			walk-forward design ensures every test year&rsquo;s strategy behavior is driven by training data
			that predates the test period &mdash; no FIS thresholds, grid spacing parameters, or sleeve
			sensitivity settings were adjusted based on 2023&ndash;2025 observations. A residual limitation
			applies: the parabolic detector&rsquo;s membership function boundaries were calibrated using 2021
			price history as the design case. The study is stronger than an in-sample result (test data is
			genuinely out-of-sample) but weaker than a theoretically pure blind design that had no knowledge
			of 2021 parabolic events. This distinction is material and is disclosed in full in the Limitations
			section.
		</p>

		<div class="mb-6 space-y-3">
			<div class="border-l-2 border-teal-500/60 pl-4">
				<p class="text-sm font-semibold text-navy-deep">Headline result</p>
				<p class="text-sm leading-relaxed text-slate">
					Across all 51 near-blind folds, the three-state FIS produced an estimated mean return of
					+3.8% versus +0.6% for the two-state baseline &mdash; a +3.2 percentage point improvement.
					Excluding the ZECUSD 2025 fold, which remains ongoing as of the data cutoff (2026-05-26)
					and may not reflect the completed 2025 annual result, the mean is +2.0%. All figures are
					simulated/backtested under the methodology described below.
				</p>
			</div>
			<div class="border-l-2 border-teal-500/60 pl-4">
				<p class="text-sm font-semibold text-navy-deep">Bear-fold result</p>
				<p class="text-sm leading-relaxed text-slate">
					Across all 20 bear folds in the 2023&ndash;2025 out-of-sample window, the strategy produced
					a higher return than buy-and-hold in every instance (20/20, 100%) &mdash; a result derived
					from backtested/simulated data under the assumptions described in the Methodology section.
					Simulated past performance does not guarantee future results.
				</p>
			</div>
			<div class="border-l-2 border-teal-500/60 pl-4">
				<p class="text-sm font-semibold text-navy-deep">Sensitivity range</p>
				<p class="text-sm leading-relaxed text-slate">
					+1.8% to +3.8% mean across 51 folds. The lower bound excludes the two largest individual
					fold contributors (BTCUSD 2024, XRPUSD 2024). The upper bound reflects the full 51-fold result.
				</p>
			</div>
		</div>
	</section>

	<!-- Section 1 -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 1</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Why &ldquo;Out-of-Sample&rdquo; Matters More Than &ldquo;Backtested&rdquo;</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Every grid bot platform shows a backtest. The Binance Grid Bot has a configuration screen where
			you can select a date range, run the simulation on historical price data, and see an outcome. So
			does 3Commas. So does Pionex.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			What those backtests share: the person configuring them already knows what happened. You can see
			the chart, pick a sideways period, and set your grid bounds to exactly capture the range. The
			resulting return figure looks compelling. It was built from knowledge you had at configuration time.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The walk-forward methodology used in CoinRoc&rsquo;s research papers is different in one specific
			way: the algorithm is not allowed to see the test year&rsquo;s data during training. For every fold
			in this study:
		</p>

		<ul class="mb-6 space-y-2 text-base leading-relaxed text-slate">
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">Test year 2023:</strong> strategy behavior determined entirely by 2021&ndash;2022 training data</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">Test year 2024:</strong> strategy behavior determined entirely by 2022&ndash;2023 training data</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">Test year 2025:</strong> strategy behavior determined entirely by 2023&ndash;2024 training data</span>
			</li>
		</ul>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Zero parameters were adjusted after observing 2023&ndash;2025 price action. The thresholds,
			spacing settings, and sleeve allocations that governed strategy behavior in 2023 were the same
			ones set during the 2019&ndash;2022 design phase. That is the vault: parameters locked, sealed,
			and run forward without touching.
		</p>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Residual limitation</div>
			<p class="text-base leading-relaxed text-slate">
				The parabolic detector&rsquo;s velocity thresholds were designed using 2021 price history.
				The walk-forward guarantee covers the test-period data; it does not cover the detector&rsquo;s
				design ancestry. The study is near-blind, not theoretically pure blind. That distinction matters
				for how you weight the results.
			</p>
		</div>
	</section>

	<!-- Section 2 — Methodology -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 2</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology</h2>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">2.1 Study Structure</h3>
		<div class="mb-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-6 font-semibold">Parameter</th>
						<th class="pb-2 font-semibold">Value</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Training window</td>
						<td class="py-2">2019&ndash;2022 (algorithm design, FIS calibration, all parameter decisions)</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Test window</td>
						<td class="py-2">2023&ndash;2025 (never seen during design &mdash; rolling walk-forward enforces this)</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Assets</td>
						<td class="py-2">17 modern-era liquid assets</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Fold structure</td>
						<td class="py-2">2-year rolling train / 1-year test; folds restricted to test years 2023, 2024, 2025</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Total out-of-sample folds</td>
						<td class="py-2">51 (17 assets &times; 3 test years)</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">FIS parameters</td>
						<td class="py-2">Hurst threshold 0.55, balanced sensitivity, 25% sleeve allocation</td>
					</tr>
					<tr>
						<td class="py-2 pr-6 text-navy-deep">Sleeve confirmation</td>
						<td class="py-2">3-bar consecutive</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">2.2 Three Variants Compared</h3>
		<div class="mb-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-6 font-semibold">Variant</th>
						<th class="pb-2 font-semibold">Description</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Baseline: Buy-and-Hold</td>
						<td class="py-2">No strategy. Raw asset return for the test year.</td>
					</tr>
					<tr class="border-b border-rule/40">
						<td class="py-2 pr-6 text-navy-deep">Two-State FIS</td>
						<td class="py-2">Grid when Hurst &lt; 0.55 (ranging), cash when Hurst &ge; 0.55 (trending). Current live system.</td>
					</tr>
					<tr>
						<td class="py-2 pr-6 text-navy-deep">Three-State FIS</td>
						<td class="py-2">Grid when ranging, cash when trending non-parabolic, 25% momentum sleeve when parabolic detected. New design under evaluation.</td>
					</tr>
				</tbody>
			</table>
		</div>

		<h3 class="mb-3 font-serif text-lg text-navy-ink">2.3 Cost Model</h3>
		<p class="mb-6 text-base leading-relaxed text-slate">
			All returns are simulated gross under a retail Binance.US cost structure: 0.40% maker / 0.60%
			taker / 0.05% slippage, with grid reset repositioning costs modeled. Net-of-fees returns may differ.
		</p>

		<h3 class="mb-3 font-serif text-lg text-navy-ink">2.4 Proxy Methodology Note</h3>
		<p class="text-base leading-relaxed text-slate">
			The ParabolicRegimeDetector has not yet been run bar-by-bar against the 2023&ndash;2025 price
			paths (that step is pending implementation). This study uses a tier-based proxy validated against
			Gate 1 findings. Annual fold buy-and-hold return serves as a proxy for intra-year velocity
			concentration. The proxy establishes the directional case; quantitative precision requires
			bar-by-bar simulation, which is the next milestone.
		</p>
	</section>

	<!-- Section 3 — The 51 Folds -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 3</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The 51 Out-of-Sample Folds</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			All strategy parameters fixed on pre-2023 training data.
		</p>

		<div class="mb-4 overflow-x-auto">
			<table class="w-full text-xs">
				<thead>
					<tr class="border-b border-rule text-left text-[0.62rem] uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-3 font-semibold">Symbol</th>
						<th class="pb-2 pr-3 font-semibold">Year</th>
						<th class="pb-2 pr-3 font-semibold text-right">B&amp;H</th>
						<th class="pb-2 pr-3 font-semibold text-right">Two-State</th>
						<th class="pb-2 pr-3 font-semibold">Regime</th>
						<th class="pb-2 pr-3 font-semibold text-center">Bear?</th>
						<th class="pb-2 pr-3 font-semibold">Sleeve Tier</th>
						<th class="pb-2 pr-3 font-semibold text-right">Sleeve</th>
						<th class="pb-2 font-semibold text-right">Three-State</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ADAUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+141.7%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+6.4%</td><td class="text-right font-semibold text-navy-deep">+6.4%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ADAUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+35.3%</td><td class="pr-3 text-right">+5.8%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+5.8%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ADAUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-60.5%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BCHUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+167.5%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+7.5%</td><td class="text-right font-semibold text-navy-deep">+7.5%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BCHUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+67.0%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (partial)</td><td class="pr-3 text-right text-teal-700">+1.5%</td><td class="text-right font-semibold text-navy-deep">+1.5%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BCHUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right">+38.0%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BTCUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+155.7%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+7.0%</td><td class="text-right font-semibold text-navy-deep">+7.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BTCUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+120.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+5.4%</td><td class="text-right font-semibold text-navy-deep">+5.4%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">BTCUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-6.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Bear guard (neg)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DASHUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right text-red-700">-24.8%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DASHUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+13.7%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DASHUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right">+9.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DOGEUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+27.5%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DOGEUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+242.7%</td><td class="pr-3 text-right">+1.3%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+1.3%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">DOGEUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-63.9%</td><td class="pr-3 text-right text-red-700">-9.3%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard (active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">-9.3%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">EOSUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right text-red-700">-2.0%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Bear guard (neg)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">EOSUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right text-red-700">-8.5%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Bear guard (neg)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">EOSUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-79.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ETHUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+90.8%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+4.1%</td><td class="text-right font-semibold text-navy-deep">+4.1%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ETHUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+46.0%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ETHUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-10.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Bear guard (neg)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">LTCUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+3.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">LTCUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+37.9%</td><td class="pr-3 text-right">+3.4%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+3.4%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">LTCUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-26.9%</td><td class="pr-3 text-right text-teal-700">+3.8%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard (active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+3.8%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">MANAUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+75.4%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (partial)</td><td class="pr-3 text-right text-teal-700">+1.7%</td><td class="text-right font-semibold text-navy-deep">+1.7%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">MANAUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right text-red-700">-10.6%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Bear guard (neg)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">MANAUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-73.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">NEOUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+128.1%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+5.8%</td><td class="text-right font-semibold text-navy-deep">+5.8%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">NEOUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right text-red-700">-4.7%</td><td class="pr-3 text-right text-teal-700">+7.4%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+7.4%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">NEOUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-74.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30 bg-navy-ink/5"><td class="py-1.5 pr-3 font-medium text-navy-deep">STXUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right font-semibold">+605.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3 font-semibold text-teal-700">Parabolic</td><td class="pr-3 text-right font-semibold text-teal-700">+60.5%</td><td class="text-right font-semibold text-navy-deep">+60.5%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">STXUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+2.2%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">STXUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-84.1%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">TRXUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+97.7%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+4.4%</td><td class="text-right font-semibold text-navy-deep">+4.4%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">TRXUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+135.6%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+6.1%</td><td class="text-right font-semibold text-navy-deep">+6.1%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">TRXUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right">+11.3%</td><td class="pr-3 text-right">+1.9%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+1.9%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XLMUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+77.9%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (partial)</td><td class="pr-3 text-right text-teal-700">+1.8%</td><td class="text-right font-semibold text-navy-deep">+1.8%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XLMUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+151.6%</td><td class="pr-3 text-right">+5.1%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+5.1%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XLMUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-52.8%</td><td class="pr-3 text-right text-teal-700">+0.8%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard (active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+0.8%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XMRUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+11.2%</td><td class="pr-3 text-right">+0.9%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+0.9%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XMRUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+17.2%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XMRUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right">+121.4%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+5.5%</td><td class="text-right font-semibold text-navy-deep">+5.5%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XRPUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+81.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+3.7%</td><td class="text-right font-semibold text-navy-deep">+3.7%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XRPUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+230.1%</td><td class="pr-3 text-right">+6.7%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">n/a (grid active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+6.7%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XRPUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-21.0%</td><td class="pr-3 text-right text-teal-700">+1.6%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard (active)</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">+1.6%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XTZUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right">+40.2%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XTZUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+27.1%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3">Mild</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">XTZUSD</td><td class="pr-3">2025</td><td class="pr-3 text-right text-red-700">-61.5%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ZECUSD</td><td class="pr-3">2023</td><td class="pr-3 text-right text-red-700">-27.7%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center text-red-600">YES</td><td class="pr-3">Bear guard</td><td class="pr-3 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/30"><td class="py-1.5 pr-3 font-medium text-navy-deep">ZECUSD</td><td class="pr-3">2024</td><td class="pr-3 text-right">+102.0%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">random-walk</td><td class="pr-3 text-center">—</td><td class="pr-3">Strong (fires)</td><td class="pr-3 text-right text-teal-700">+4.6%</td><td class="text-right font-semibold text-navy-deep">+4.6%</td></tr>
					<tr class="border-b border-rule/30 bg-navy-ink/5"><td class="py-1.5 pr-3 font-medium text-navy-deep">ZECUSD</td><td class="pr-3">2025 ‡</td><td class="pr-3 text-right font-semibold">+807.3%</td><td class="pr-3 text-right">0.0%</td><td class="pr-3">trending</td><td class="pr-3 text-center">—</td><td class="pr-3 font-semibold text-teal-700">Parabolic</td><td class="pr-3 text-right font-semibold text-teal-700">+80.7%</td><td class="text-right font-semibold text-navy-deep">+80.7%</td></tr>
				</tbody>
			</table>
		</div>

		<div class="mb-4 rounded-sm border border-rule bg-paper p-4 text-xs text-slate">
			<p class="mb-2"><strong class="text-navy-deep">‡ ZECUSD 2025 is an ongoing fold</strong> (data cutoff 2026-05-26). The +807.3% B&amp;H return and the +80.7% sleeve contribution reflect partial-year data and may change materially when the 2025 annual period is complete. See the Limitations section.</p>
			<p class="mb-2"><strong class="text-navy-deep">Table notes:</strong> "Bear guard" = direction guard prevented sleeve entry on a bear fold. "n/a (grid active)" = Hurst &lt; 0.55 (random-walk regime); grid was running; sleeve does not fire during grid-active folds. "Bear guard (active)" = bear fold where grid was running; sleeve correctly blocked. "Bear guard (neg)" = fold where B&amp;H was negative but not below &minus;20% threshold; treated conservatively as sleeve-off.</p>
			<p>STXUSD 2023: B&amp;H +605.3% is the genuine parabolic event in this window. Sleeve contribution = 40% &times; 605.3% &times; 25% allocation = +60.5%.</p>
		</div>
	</section>

	<!-- Section 4 — Summary Statistics -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 4</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Summary Statistics &mdash; 2023&ndash;2025 Out-of-Sample Window</h2>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">4.1 Strategy Return Comparison &mdash; All 51 Folds</h3>
		<div class="mb-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-6 font-semibold">Metric</th>
						<th class="pb-2 pr-6 font-semibold text-right">Buy-and-Hold</th>
						<th class="pb-2 pr-6 font-semibold text-right">Two-State FIS</th>
						<th class="pb-2 font-semibold text-right">Three-State FIS</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Mean return</td><td class="pr-6 text-right">+46.2%</td><td class="pr-6 text-right">+0.6%</td><td class="text-right font-semibold text-navy-deep">+3.8%</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Mean return (excl. ZECUSD 2025 ongoing)</td><td class="pr-6 text-right">—</td><td class="pr-6 text-right">—</td><td class="text-right font-semibold text-navy-deep">+2.0%</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Median return</td><td class="pr-6 text-right">+11.2%</td><td class="pr-6 text-right">0.0%</td><td class="text-right font-semibold text-navy-deep">0.0%</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Min return</td><td class="pr-6 text-right">-84.1%</td><td class="pr-6 text-right">-29.8%</td><td class="text-right font-semibold text-navy-deep">-9.3%</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Max return</td><td class="pr-6 text-right">+807.3%</td><td class="pr-6 text-right">+7.4%</td><td class="text-right font-semibold text-navy-deep">+80.7%</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Folds with positive return</td><td class="pr-6 text-right">29 (56.9%)</td><td class="pr-6 text-right">15 (29.4%)</td><td class="text-right font-semibold text-navy-deep">25 (49.0%)</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Folds at 0%</td><td class="pr-6 text-right">—</td><td class="pr-6 text-right">36</td><td class="text-right font-semibold text-navy-deep">26</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Folds negative</td><td class="pr-6 text-right">22 (43.1%)</td><td class="pr-6 text-right">2 (3.9%)</td><td class="text-right font-semibold text-navy-deep">2 (3.9%)</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Bear fold win rate</td><td class="pr-6 text-right">—</td><td class="pr-6 text-right">100%</td><td class="text-right font-semibold text-navy-deep">100%</td></tr>
					<tr><td class="py-2 pr-6">Mean max drawdown (grid component)</td><td class="pr-6 text-right">—</td><td class="pr-6 text-right">~0.8%</td><td class="text-right font-semibold text-navy-deep">~0.8%</td></tr>
				</tbody>
			</table>
		</div>
		<p class="mb-3 text-xs italic text-slate-light">All figures are simulated/backtested under the assumptions described in Section 2.</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			<strong class="text-navy-deep">Note on B&amp;H mean:</strong> The B&amp;H mean of +46.2% is heavily inflated by STXUSD 2023 (+605%), ZECUSD 2025 (+807%), and DOGEUSD 2024 (+242%). The median B&amp;H of +11.2% is more representative of the typical fold experience.
		</p>

		<p class="mb-8 text-base leading-relaxed text-slate">
			<strong class="text-navy-deep">Note on median strategy return:</strong> The 0.0% median is a structural feature of the strategy, not a failure mode. 26 of 51 folds are gated-zero outcomes &mdash; the strategy held cash during bear and trending regimes. The 25 folds with positive returns carry the mean.
		</p>

		<!-- Figure 1 -->
		<h3 class="mb-4 font-serif text-lg text-navy-ink">Three-Strategy Comparison, Year by Year</h3>
		<div class="my-8 not-prose w-full">
			<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 1 &mdash; Three-Strategy Comparison, Year by Year</div>
			<iframe
				src="/research/grid-blind-validation-2023-2025/fig1-three-strategy.html"
				title="Figure 1 — Year-by-year mean returns: Buy-and-Hold, Two-State FIS, Three-State FIS (2023–2025). Three-State +10.5% in 2023 dominated by STXUSD sleeve; 2025 reflects partial-year data."
				class="w-full rounded border border-rule"
				style="height: 520px; border: none;"
				loading="lazy"
				scrolling="no"
			></iframe>
			<div class="text-xs text-slate-light mt-2 italic">Year-by-year mean returns across the three variants. 2023 three-state result dominated by STXUSD 2023 sleeve (+60.5%). 2025 bar reflects partial-year data (data cutoff 2026-05-26). All values are simulated/backtested estimates. Past performance does not guarantee future results.</div>
		</div>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">4.2 Bear-Fold Detail (20 folds)</h3>
		<p class="mb-5 text-base leading-relaxed text-slate">
			Across all 20 bear folds in the 2023&ndash;2025 out-of-sample window, the strategy produced a
			higher return than buy-and-hold in every instance (20/20, 100%) &mdash; a result derived from
			backtested/simulated data under the assumptions described in Section 2. Simulated past performance
			does not guarantee future results.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			16 of 20 bear folds were FIS-gated: strategy earned 0% vs. B&amp;H ranging from &minus;21.0% to
			&minus;84.1%. Four bear folds had the grid running (random-walk regime during a bear year):
			DOGEUSD 2025 (&minus;9.3% vs &minus;63.9%), LTCUSD 2025 (+3.8% vs &minus;26.9%), XLMUSD 2025
			(+0.8% vs &minus;52.8%), XRPUSD 2025 (+1.6% vs &minus;21.0%). All four outperformed buy-and-hold.
		</p>

		<!-- Figure 2 -->
		<div class="my-8 not-prose w-full">
			<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 2 &mdash; Capital Protection: Bear-Fold Universe, $10,000 Starting Account</div>
			<iframe
				src="/research/grid-blind-validation-2023-2025/fig2-capital-protection.html"
				title="Figure 2 — Capital protection: 20 bear folds from 2023–2025 out-of-sample window. 100% simulated bear-fold win rate. The direction guard prevents the momentum sleeve from firing on bear folds. DOGEUSD 2025: B&H $3,610 vs CoinRoc $9,070."
				class="w-full rounded border border-rule"
				style="height: 540px; border: none;"
				loading="lazy"
				scrolling="no"
			></iframe>
			<div class="text-xs text-slate-light mt-2 italic">Capital protection story: 20 bear folds (win rate 20/20), $10,000 starting account. The Two-State and Three-State outcomes are identical on bear folds &mdash; the direction guard prevents the momentum sleeve from firing into declining markets by design. All values are simulated/backtested estimates. Actual results may differ. Past simulated performance does not guarantee future results.</div>
		</div>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">4.3 Parabolic Events in the Out-of-Sample Window</h3>
		<div class="mb-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-4 font-semibold">Symbol</th>
						<th class="pb-2 pr-4 font-semibold">Year</th>
						<th class="pb-2 pr-4 font-semibold text-right">B&amp;H</th>
						<th class="pb-2 pr-4 font-semibold">Sleeve Tier</th>
						<th class="pb-2 pr-4 font-semibold text-right">Sleeve Contrib</th>
						<th class="pb-2 font-semibold">Notes</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40"><td class="py-2 pr-4 font-medium text-navy-deep">STXUSD</td><td class="pr-4">2023</td><td class="pr-4 text-right">+605.3%</td><td class="pr-4 text-teal-700 font-semibold">Parabolic</td><td class="pr-4 text-right text-teal-700 font-semibold">+60.5%</td><td class="text-slate-light">STX institutional cycle — completed fold</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-4 font-medium text-navy-deep">ZECUSD</td><td class="pr-4">2025 ‡</td><td class="pr-4 text-right">+807.3%</td><td class="pr-4 text-teal-700 font-semibold">Parabolic</td><td class="pr-4 text-right text-teal-700 font-semibold">+80.7%</td><td class="text-slate-light">Ongoing fold — partial-year data only</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-4 font-medium text-navy-deep">BTCUSD</td><td class="pr-4">2023</td><td class="pr-4 text-right">+155.7%</td><td class="pr-4">Strong (fires)</td><td class="pr-4 text-right text-teal-700">+7.0%</td><td class="text-slate-light">BTC recovery + ETF narrative</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-4 font-medium text-navy-deep">BTCUSD</td><td class="pr-4">2024</td><td class="pr-4 text-right">+120.9%</td><td class="pr-4">Strong (fires)</td><td class="pr-4 text-right text-teal-700">+5.4%</td><td class="text-slate-light">ETF approval + halving cycle</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-4 font-medium text-navy-deep">TRXUSD</td><td class="pr-4">2024</td><td class="pr-4 text-right">+135.6%</td><td class="pr-4">Strong (fires)</td><td class="pr-4 text-right text-teal-700">+6.1%</td><td class="text-slate-light">TRON network growth</td></tr>
					<tr><td class="py-2 pr-4 font-medium text-navy-deep">XMRUSD</td><td class="pr-4">2025</td><td class="pr-4 text-right">+121.4%</td><td class="pr-4">Strong (fires)</td><td class="pr-4 text-right text-teal-700">+5.5%</td><td class="text-slate-light">XMR delisting-resistance narrative</td></tr>
				</tbody>
			</table>
		</div>
		<p class="mb-3 text-xs italic text-slate-light">‡ ZECUSD 2025 partial-year caveat applies throughout. See Limitations.</p>

		<p class="text-base leading-relaxed text-slate">
			The two parabolic-tier folds (STXUSD 2023, ZECUSD 2025) contribute +141.2% total sleeve
			contribution across 51 folds combined. Excluding both, mean three-state return drops from +3.8%
			to +1.9%. In a year with no parabolic event, the three-state strategy performs identically to the
			two-state strategy in expectation. The sleeve adds value specifically in parabolic-year scenarios.
		</p>
	</section>

	<!-- Section 5 — Two-State vs Three-State -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Two-State vs. Three-State &mdash; Direct Comparison</h2>

		<div class="mb-8 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-6 font-semibold">Metric</th>
						<th class="pb-2 pr-6 font-semibold text-right">Two-State FIS</th>
						<th class="pb-2 pr-6 font-semibold text-right">Three-State FIS</th>
						<th class="pb-2 font-semibold text-right">Delta</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Mean return (all 51 folds)</td><td class="pr-6 text-right">+0.6%</td><td class="pr-6 text-right">+3.8%</td><td class="text-right font-semibold text-teal-700">+3.2 pp</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Mean return (excl. STX 2023 + ZEC 2025)</td><td class="pr-6 text-right">+0.6%</td><td class="pr-6 text-right">+1.9%</td><td class="text-right font-semibold text-teal-700">+1.3 pp</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Mean return (excl. ZECUSD 2025 only)</td><td class="pr-6 text-right">+0.6%</td><td class="pr-6 text-right">+2.0%</td><td class="text-right font-semibold text-teal-700">+1.4 pp</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Median return</td><td class="pr-6 text-right">0.0%</td><td class="pr-6 text-right">0.0%</td><td class="text-right">No change</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Folds with positive return</td><td class="pr-6 text-right">15 (29.4%)</td><td class="pr-6 text-right">25 (49.0%)</td><td class="text-right font-semibold text-teal-700">+10 folds</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Best single fold</td><td class="pr-6 text-right">+7.4% (NEOUSD 2024)</td><td class="pr-6 text-right">+80.7% (ZECUSD 2025 ‡)</td><td class="text-right">—</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Worst single fold</td><td class="pr-6 text-right">-29.8% (STXUSD 2022)</td><td class="pr-6 text-right">-9.3% (DOGEUSD 2025)</td><td class="text-right">—</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Bear fold win rate</td><td class="pr-6 text-right">100%</td><td class="pr-6 text-right">100%</td><td class="text-right">Unchanged</td></tr>
					<tr><td class="py-2 pr-6">Mean max drawdown (grid component)</td><td class="pr-6 text-right">~0.8%</td><td class="pr-6 text-right">~0.8%</td><td class="text-right">Unchanged</td></tr>
				</tbody>
			</table>
		</div>
		<p class="mb-8 text-xs italic text-slate-light">All figures are simulated/backtested. ‡ ZECUSD 2025 is an ongoing fold — partial-year data only. See Limitations.</p>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">Does the Three-State FIS Generate Statistically Superior Returns?</h3>
		<p class="mb-5 text-base leading-relaxed text-slate">
			51 folds is not 51 independent observations. Cross-asset correlation in crypto is high (typically
			0.5&ndash;0.8 in bull cycles), which reduces the effective independent observation count to roughly
			12&ndash;18 after accounting for co-movement. The three-state return distribution has heavy
			right-tail skew &mdash; STXUSD 2023 (+60.5%) and ZECUSD 2025 (+80.7%) dominate the mean.
			Standard t-tests fail normality assumptions; block-bootstrap confidence intervals are the
			appropriate method and require bar-by-bar simulation data not yet available from the proxy.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The appropriate framing: because the directional improvement arises from the structural behavior
			of the direction guard (which prevents the sleeve from firing on bear folds by design), the case
			for the three-state strategy rests on the logic of the mechanism, not on the magnitude of the
			return difference alone. The return improvement is a consequence of the mechanism operating
			correctly, and it remains subject to the quantification uncertainty described in the Limitations
			section.
		</p>
	</section>

	<!-- Section 6 — What This Strategy Does -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 6</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What This Strategy Does That Generic Grid Bots Cannot</h2>

		<div class="mb-4 rounded-sm border border-rule bg-paper p-4 text-xs text-slate">
			The following characterizations are based on publicly available documentation, marketing materials,
			and feature descriptions published by each platform as of the date of this study. CoinRoc has not
			conducted proprietary testing of competitor systems. If a platform has published updated methodology
			documentation not reflected here, the relevant comparison should be revised accordingly.
		</div>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">6.1 The Trap Problem</h3>
		<p class="mb-5 text-base leading-relaxed text-slate">
			Generic grid bots &mdash; available on Binance, 3Commas, Pionex, Bitsgap, and dozens of exchanges
			&mdash; run with static upper and lower bounds set at configuration time. No regime awareness. No
			adjustment based on market conditions. In a strong downtrend, the bot continues placing buy orders
			as price falls, accumulating directional exposure at each level. By the time price exits the grid
			range downward, the account is fully deployed in a position that has been averaging down the entire
			way. This is the trap.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The FIS gate is the solution. When the Hurst exponent on CoinRoc&rsquo;s training window rises
			above 0.55 &mdash; indicating a persistent trend rather than mean-reverting oscillation &mdash; the
			grid pauses and holds cash. The strategy does not place orders into the trend. This is the single
			feature that separates the strategy from the trap outcome above.
		</p>

		<h3 class="mb-6 mt-8 font-serif text-lg text-navy-ink">6.2 The Illustrative Dollar Case &mdash; ETH 2022</h3>
		<div class="mb-4 rounded-sm border border-rule bg-paper p-4 text-xs text-slate-light font-semibold uppercase tracking-wider">
			Illustrative Scenario &mdash; ETH 2022 ($10,000 Starting Account)
		</div>
		<div class="mb-4 overflow-x-auto">
			<table class="w-full text-sm">
				<thead>
					<tr class="border-b border-rule text-left text-xs uppercase tracking-wider text-slate-light">
						<th class="pb-2 pr-6 font-semibold">Scenario</th>
						<th class="pb-2 pr-6 font-semibold text-right">Starting Value</th>
						<th class="pb-2 pr-6 font-semibold text-right">Ending Value</th>
						<th class="pb-2 font-semibold text-right">Loss</th>
					</tr>
				</thead>
				<tbody class="text-slate">
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Buy-and-Hold ETH</td><td class="pr-6 text-right">$10,000</td><td class="pr-6 text-right text-red-700">$3,250 (B&amp;H &minus;67.5%)</td><td class="text-right text-red-700">-$6,750</td></tr>
					<tr class="border-b border-rule/40"><td class="py-2 pr-6">Always-on grid bot (no regime gate) *</td><td class="pr-6 text-right">$10,000</td><td class="pr-6 text-right text-red-700">~$3,500&ndash;$4,500</td><td class="text-right text-red-700">~-$5,500 to -$6,500</td></tr>
					<tr><td class="py-2 pr-6">CoinRoc FIS v2 gated (simulated ETHUSD 2022 fold)</td><td class="pr-6 text-right">$10,000</td><td class="pr-6 text-right text-teal-700 font-semibold">$10,000 (0%, cash)</td><td class="text-right font-semibold">$0</td></tr>
				</tbody>
			</table>
		</div>
		<p class="mb-8 text-xs italic text-slate-light">
			* The "always-on grid bot" outcome (~$3,500&ndash;$4,500) is an illustrative estimate based on the known ETH 2022 B&amp;H return of -67.5% and a model assumption that a static grid partially fills into the drawdown, accumulating directional exposure at roughly 50&ndash;65% of the B&amp;H loss. This figure is not sourced from a measured Binance Grid Bot or 3Commas backtest result. Actual competitor outcomes in 2022 may differ materially from this estimate. The CoinRoc ETHUSD 2022 result (0%, cash) is directly measured from the walk-forward study. See Methodology and Limitations.
		</p>

		<h3 class="mb-4 font-serif text-lg text-navy-ink">6.3 Research Validation Axis</h3>
		<p class="mb-5 text-base leading-relaxed text-slate">
			Generic grid bot backtests, where they exist, are typically: single path (no confidence intervals),
			user-selected time window, no transaction costs modeled accurately, survivorship-biased, no
			out-of-sample validation. The same window used to configure the bot is used to show the backtest.
		</p>
		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s validation methodology: 85-fold walk-forward for the modern era (2019&ndash;2025),
			2-year train / 1-year test rolling window. Each test year&rsquo;s strategy behavior is driven only
			by the preceding training window. Full cost model. 17-asset universe. Bear-fold analysis explicitly
			reported. This paper: near-blind 2023&ndash;2025 validation where strategy parameters were fully
			fixed before the test window opened.
		</p>
		<p class="mb-8 text-base leading-relaxed text-slate">
			As of the date of this study, no publicly documented competing grid bot platform has disclosed a
			regime-adaptive momentum capture layer of comparable architecture. The three-state FIS classifies
			markets into three states &mdash; ranging (grid), trending non-parabolic (cash), parabolic
			(trailing-stop momentum sleeve) &mdash; and manages capital separately across each state. The
			Mamdani rule base for the parabolic detector uses an 8-rule fuzzy system producing a continuous
			parabolicScore output. Every firing decision produces a natural-language explanation traceable to
			rule activations. This explainability is a technical property of the Mamdani architecture.
		</p>

		<!-- Figure 3 -->
		<h3 class="mb-4 font-serif text-lg text-navy-ink">6.4 Competitive Positioning Matrix</h3>
		<div class="my-8 not-prose w-full">
			<div class="text-xs font-semibold uppercase tracking-wider text-slate-light mb-2">Figure 3 &mdash; Competitive Positioning Matrix</div>
			<iframe
				src="/research/grid-blind-validation-2023-2025/fig3-competitive-matrix.html"
				title="Figure 3 — Competitive positioning matrix: Algorithm Sophistication vs Research Validation Quality. CoinRoc 2-state and 3-state in upper-right. Competitor positions qualitative, based on publicly available documentation as of June 2026."
				class="w-full rounded border border-rule"
				style="height: 560px; border: none;"
				loading="lazy"
				scrolling="no"
			></iframe>
			<div class="text-xs text-slate-light mt-2 italic">Competitive positioning matrix. Competitor positions are qualitative assessments based on publicly available product documentation as of June 2026. CoinRoc has not independently tested competitor systems. Positions do not represent a formal evaluation or ranking and may not reflect recent platform updates.</div>
		</div>
	</section>

	<!-- Section 7 — Limitations -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 7</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Limitations</h2>

		<div class="space-y-6">
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">In-sample bias remains partially present</p>
				<p class="text-sm leading-relaxed text-slate">
					The parabolic detector&rsquo;s membership function boundaries and velocity thresholds were
					calibrated using 2021 price history as the design case. The 2023&ndash;2025 test data were
					not used during design &mdash; the walk-forward guarantee holds for the test-period data
					selection. However, the detector was built knowing that 2021-type events existed. A fully
					blind detector would have been designed with no knowledge of any historical parabolic events.
					That study has not been conducted. This study is described as &ldquo;near-blind&rdquo; rather
					than &ldquo;pure blind.&rdquo; The distinction is material.
				</p>
			</div>
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">ZECUSD 2025 is an ongoing fold</p>
				<p class="text-sm leading-relaxed text-slate">
					ZEC 2025 has a B&amp;H return of +807.3% and contributes +80.7% sleeve return &mdash; the
					largest single contributor to the out-of-sample mean. The fold is ongoing; the detector fired
					5 days before the data cutoff (2026-05-26). Whether ZEC continued higher, peaked, or reversed
					sharply after the data cutoff is unknown. The +807.3% B&amp;H figure may change materially
					when 2025 data is complete. Excluding this fold, the three-state mean drops from +3.8% to
					+2.0%. Any use of the +3.8% figure should be read in conjunction with this caveat.
				</p>
			</div>
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Three-year test window is short</p>
				<p class="text-sm leading-relaxed text-slate">
					51 folds across one recovery cycle (2023), one major bull cycle (2024), and one partial bear
					year (2025) is sufficient to confirm the protection story and identify the magnitude of sleeve
					contributions. It is not sufficient to establish steady-state performance with narrow
					confidence intervals.
				</p>
			</div>
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Proxy methodology has not been replaced by bar-by-bar simulation</p>
				<p class="text-sm leading-relaxed text-slate">
					The tier-based capture rates are structural assumptions grounded in Gate 1 validation data.
					The actual realized returns from bar-by-bar simulation will differ. The proxy establishes the
					directional case; precision requires the simulation work pending.
				</p>
			</div>
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">No bootstrap confidence intervals</p>
				<p class="text-sm leading-relaxed text-slate">
					Point estimates are means and medians across 51 folds with substantial cross-asset correlation.
					Confidence intervals require bar-by-bar daily return reconstruction and are deferred to the
					next milestone.
				</p>
			</div>
		</div>
	</section>

	<!-- Disclosures -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Disclosures</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Disclosures</h2>

		<div class="space-y-5 rounded-sm border border-rule bg-paper p-6 text-sm leading-relaxed text-slate">
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Backtested / Hypothetical Performance</p>
				<p>The performance results presented in this study are hypothetical and were achieved by means of the retroactive application of a model designed with the benefit of hindsight. Hypothetical performance results have inherent limitations. No representation is made that any account will or is likely to achieve profits or losses similar to those shown. The results are derived from a walk-forward simulation methodology described in Section 2; they have not been verified by live trading results. The ZECUSD 2025 fold is based on partial-year data as of the study&rsquo;s data cutoff (2026-05-26) and may change when the 2025 annual period is complete. All returns reflect simulated gross performance under the cost assumptions stated in Section 2 (0.40% maker / 0.60% taker / 0.05% slippage). Net-of-fees returns may differ.</p>
			</div>
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Past Performance</p>
				<p>Past simulated performance is not indicative of, and is not a guarantee of, future results. The value of digital asset positions and the income from trading strategies applied to them can decrease as well as increase, and an investor may lose the entire amount invested.</p>
			</div>
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Research / Not Advice</p>
				<p>This document is for informational and educational purposes only. It does not constitute investment advice, a recommendation, or an offer or solicitation to buy or sell any security, digital asset, or financial instrument. The information herein reflects the research findings of the authors as of the date of publication and is subject to change without notice. Readers should consult their own financial, legal, and tax advisors before making any investment decision.</p>
			</div>
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Crypto Risk</p>
				<p>Digital assets, including cryptocurrencies, are highly volatile and speculative. They may experience rapid and substantial price declines, including a total loss of value. Regulatory treatment of digital assets is evolving and uncertain, and future regulatory actions may materially affect the value, legality, and accessibility of digital assets. Digital asset markets operate 24/7 and are subject to operational, custodial, and cybersecurity risks not present in traditional financial markets.</p>
			</div>
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Forward-Looking Statements</p>
				<p>Certain statements in this document, including statements about future strategy behavior, detector performance, and projected improvements, involve known and unknown risks, uncertainties, and other factors that may cause actual results to differ materially. No representation is made that any stated objectives will be achieved. The strategy&rsquo;s walk-forward results are not a guarantee of future live performance.</p>
			</div>
			<div>
				<p class="mb-1 font-semibold text-navy-deep">Third-Party Data / Competitor References</p>
				<p>Characterizations of competing platforms&rsquo; features and methodologies in Section 6 are based on publicly available documentation and marketing materials as of the date of this study. CoinRoc has not independently tested competitor systems. Competitor product features, backtesting capabilities, and methodology documentation may have changed since this study was prepared. No representation is made as to the accuracy or completeness of competitor product descriptions.</p>
			</div>
		</div>

		<p class="mt-6 text-xs text-slate-light">
			Yodacom Research &mdash; 2026-06-09 &middot; Companion to Paper 8: grid-modern-era-2026 &middot; Han Kessel (research), Lando (editorial)
		</p>
	</section>

	<!-- Companion paper link -->
	<div class="rounded-sm border border-rule bg-paper p-6">
		<div class="eyebrow mb-2">Companion paper</div>
		<h3 class="mb-2 font-serif text-lg text-navy-ink">Paper 8 &mdash; Grid Trading in the Modern Crypto Era: 2019&ndash;2025</h3>
		<p class="mb-4 text-sm leading-relaxed text-slate">
			The 85-fold modern-era study that established the two-state FIS baseline. This paper (the Vault Test)
			extends Paper 8&rsquo;s findings to the out-of-sample 2023&ndash;2025 window and evaluates the
			three-state upgrade.
		</p>
		<a
			href="/research/grid-modern-era-2026"
			class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep transition hover:text-ochre"
		>
			Read Paper 8
			<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4"/></svg>
		</a>
	</div>

</article>
