<svelte:head>
	<title>We Ran a CoinRoc Out-of-Sample Forward Simulation Through a Bear Market — Here's What Happened to Drawdown | Yodacom Research</title>
	<meta name="description" content="A 74-day out-of-sample forward simulation of CoinRoc's RXI grid sleeve through the April–June 2026 Bitcoin bear market. No look-ahead. The regime detection layer did exactly what it was designed to do." />
	<meta property="og:title" content="We Ran a CoinRoc Out-of-Sample Forward Simulation Through a Bear Market — Here's What Happened to Drawdown | Yodacom Research" />
	<meta property="og:description" content="A 74-day out-of-sample forward simulation of CoinRoc's RXI grid sleeve through the April–June 2026 Bitcoin bear market. No look-ahead. The regime detection layer did exactly what it was designed to do." />
	<meta property="og:image" content="/research/coinroc-live-bear-market-2026/coinroc_live_sim_stress_final.png" />
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Out-of-Sample Forward Simulation &middot; June 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			We Ran a CoinRoc Out-of-Sample Forward Simulation Through a Bear Market &mdash; Here&rsquo;s What Happened to Drawdown
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			Out-of-Sample Forward Simulation &middot; RXI Regime Detection &middot; 74-Day Bear Window &middot; April&ndash;June 2026
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Yodacom Research &middot; Source study: RES-LIVE-SIM-01 (Han Kessel, 2026-06-27)
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Published: 2026-06-28 &middot; Updated: 2026-06-29 &middot; Registry ID: LANDO-LIVE-SIM-ARTICLE-02
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			The prior research tested a fixed 2.5-year window. What we had not done was run the RXI regime engine forward in real time, responding to new data as it arrived, with no knowledge of what came next.
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

	<!-- Section: The Question -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Question We Were Trying to Answer</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The research sitting at yodacom.com/research has a limitation every honest researcher has to own: it is historical. Backtest a strategy across two and a half years of data and the natural question comes back: "But does it actually work when you run it forward?"
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That question is specifically about the RXI regime detection layer &mdash; the fuzzy inference engine that CoinRoc uses to decide which assets get a live grid, which assets get suspended when market conditions deteriorate, and when to resume. <a href="/research/grid-trading-walk-forward-2026" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">The prior study</a> tested a fixed 2.5-year window. What we had not done was run that engine forward in real time, responding to new data as it arrived, with no knowledge of what came next.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			So we built that test. The result is worth reporting &mdash; with the caveats that make it honest.
		</p>
	</section>

	<!-- Section: What As-If-Live Means -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What the Forward Simulation Methodology Means</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Methodology</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is a simulation, not a live trading account. No real money moved. But the mechanics were designed to replicate live operation as faithfully as possible, specifically on the dimension that matters most for methodology credibility: <strong class="text-navy-deep">look-ahead</strong>.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate font-medium">
			<strong class="text-navy-deep">The simulation used only data available at each point in time; no future data informed any rule execution or regime decision.</strong>
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In most backtests, the engine has silent access to future data &mdash; it &ldquo;knows&rdquo; how prices move before it places the trade. We went to unusual lengths to prevent that here.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			At each 4-hour bar in the simulation, the RXI signal was computed using only the price data available up to and including that bar. Python array slicing enforced this at the code level, not by convention or assumption. The initial grid bounds were set from the 60 days of data before the out-of-sample period began. No future bar entered any calculation.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The cost model used OKX US Institutional VIP 2 fees: 0.06% maker, 0.08% taker, with a slippage floor of max(0.02%, 0.15 &times; ATR/price) per fill side. Grid resets &mdash; the friction cost when price exits the grid range and the grid must be rebuilt &mdash; were charged at 2&times; round-trip fee. Twelve resets occurred across ten symbols over the period. Suspended periods credited zero return; idle capital earned nothing. This is the conservative modeling choice.
		</p>

		<div class="mb-6 border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Honest limitation</div>
			<p class="text-base leading-relaxed text-slate">
				The RXI signal engine is a Python reimplementation of the production TypeScript source. The core logic &mdash; Hurst R/S scaling, Wilder-smoothed ADX, Shannon entropy &mdash; matches the original. But floating-point differences between JavaScript and Python may produce small deviations at signal confidence boundaries. Signal direction should be identical; exact confidence figures may differ by &plusmn;1&ndash;2 points at the ranging/trending boundary.
			</p>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The fee tier conditionality is also material: these results apply at OKX institutional fees only. At OKX consumer rates (0.08/0.10) results would be worse. At Binance.US retail (0.40/0.60), extrapolating from the fee differential, the sleeve&rsquo;s net margin would be significantly reduced at Binance.US retail rates and may have produced a negative net result &mdash; though this scenario was not separately modeled. That context matters and is not buried in footnotes.
		</p>
	</section>

	<!-- Section: The Setup -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Setup</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">A 74-Day Bear Window</h2>

		<div class="mb-8 border border-rule bg-paper p-6">
			<div class="grid grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate sm:grid-cols-3">
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Period</div>
					<div class="font-semibold text-navy-deep">April 14 &ndash; June 27, 2026</div>
					<div class="text-xs text-slate-light">74 calendar days (&asymp; 0.20 years)</div>
				</div>
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">BTC close-to-close</div>
					<div class="font-semibold text-navy-deep">~&minus;16%</div>
					<div class="text-xs text-slate-light">$71,954 &rarr; $60,262</div>
				</div>
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">BTC peak-to-trough</div>
					<div class="font-semibold text-navy-deep">~&minus;27%</div>
					<div class="text-xs text-slate-light">Drawdown during the window</div>
				</div>
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Grid sleeve</div>
					<div class="font-semibold text-navy-deep">10 symbols, 10% of P3</div>
					<div class="text-xs text-slate-light">Independently RXI-rated</div>
				</div>
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Baseline allocation</div>
					<div class="font-semibold text-navy-deep">90% SPY/AGG 60/40</div>
					<div class="text-xs text-slate-light">Modeled construct for comparison</div>
				</div>
				<div>
					<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Equities (SPY)</div>
					<div class="font-semibold text-navy-deep">Modest gain</div>
					<div class="text-xs text-slate-light">Adverse for crypto specifically</div>
				</div>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate italic border-l-2 border-ochre/60 pl-4">
			This is the most favorable regime window the research has examined to date; the broader 2.5-year study covers a more representative range of conditions, including windows where the sleeve did not produce favorable results relative to the benchmark.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This window was not chosen for favorable results. It is the period immediately following the prior study&rsquo;s end date. It is simply what happened next.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Ten symbols ran in the grid sleeve, each independently rated by the RXI engine: ZEC, DASH, IOTA, XLM, SKY, TRAC, DOT, AAVE, ETH, BCH. The sleeve constituted 10% of the simulated portfolio (P3). The remaining 90% was allocated to a 60/40 SPY/AGG baseline (P2), the same structure tested in the prior study. This portfolio structure is a modeled construct for research comparison purposes and does not represent a recommended allocation.
		</p>
	</section>

	<!-- Section: What the Mechanism Did -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What the Mechanism Did</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The RXI Engine in a Bear Window</h2>

		<!-- Hero GIF -->
		<div class="not-prose my-8 w-full">
			<figure>
				<img
					src="/research/coinroc-live-bear-market-2026/coinroc_live_sim_stress_zoom.gif"
					alt="Animated chart showing P3 (CoinRoc portfolio) vs BTC price during the stress window from approximately May 22, 2026 onward. The two lines diverge: BTC trends downward through a sustained drawdown while the P3 portfolio line holds roughly flat, illustrating the RXI suspend mechanism stepping back from crypto exposure during the bear regime."
					loading="lazy"
					class="w-full"
					style="border-radius:6px;display:block;height:auto;"
				/>
				<figcaption class="mt-3 text-xs text-slate-light leading-relaxed">
					<strong class="text-navy-deep font-semibold">Stress-window zoom: P3 vs BTC divergence, approximately May 22 &ndash; June 27, 2026.</strong> This animation shows line shape only &mdash; no numeric performance labels are shown on the y-axis. The visual illustrates the mechanism: RXI suspend logic stepped back from crypto exposure as BTC trended down. This is a hypothetical simulation result. Past simulated performance is not indicative of future results.
				</figcaption>
			</figure>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The visual above tells the mechanism story more clearly than numbers can. In the stress window beginning around May 22, 2026, BTC entered a sustained drawdown &mdash; eventually falling approximately 27% from its peak across the out-of-sample period. During this same window, the RXI-rated grid sleeve held roughly flat during this bear-market regime window.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That is the mechanism illustrated, not a return claim. The grid sleeve did not fall with BTC because it was not holding BTC directionally. It was running a rules-based oscillation strategy that the RXI engine actively managed &mdash; suspending exposure when conditions turned trending and hostile to grid mechanics, then resuming when conditions improved.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Over the 74-day period, the RXI engine fired 92 suspend events and 83 resume events across 10 symbols. One symbol, DASH, ended the period in a suspended state. The rules were firing continuously.
		</p>

		<!-- Secondary GIF -->
		<div class="not-prose my-8 w-full">
			<figure>
				<img
					src="/research/coinroc-live-bear-market-2026/coinroc_live_sim_branded.gif"
					alt="Animated chart showing the full four-line race from April 14 through June 27, 2026: P3 (CoinRoc portfolio), P2 (60/40 baseline), BTC buy-and-hold, and a fourth tracked position. The four lines separate over time, with BTC declining materially while the grid sleeve tracks a different path."
					loading="lazy"
					class="w-full"
					style="border-radius:6px;display:block;height:auto;"
				/>
				<figcaption class="mt-3 text-xs text-slate-light leading-relaxed">
					<strong class="text-navy-deep font-semibold">Full-period race: all four portfolio lines, April 14 &ndash; June 27, 2026.</strong> This animation shows relative trajectory only &mdash; no numeric performance labels are shown on the y-axis. The separation between the grid sleeve and BTC buy-and-hold illustrates what regime-aware grid mechanics look like in a bear window. This is a hypothetical simulation result. Past simulated performance is not indicative of future results.
				</figcaption>
			</figure>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The full-period visual above shows all four tracked positions from April 14 through June 27. The separation between the grid sleeve and BTC buy-and-hold is the clearest illustration of what regime-aware grid mechanics look like in a bear window: the sleeve tracks a different mechanism entirely.
		</p>
	</section>

	<!-- Section: What This Adds -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What This Adds &mdash; And What It Does Not</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Three Things the Prior Study Could Not Isolate</h2>

		<p class="mb-6 text-base leading-relaxed text-slate">
			Against <a href="/research/grid-trading-walk-forward-2026" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">the prior study</a> (RES-REPOSITION-PORTFOLIO-01, October 2023 through April 2026), this 74-day window demonstrates three things that the prior study&rsquo;s longer window could not isolate:
		</p>

		<div class="mb-6 space-y-4">
			<div class="flex gap-4">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">
					In a regime where BTC experienced a sustained directional drawdown exceeding 27% peak-to-trough, the RXI suspend logic stepped back systematically &mdash; this is the exact behavior the regime detection layer was designed to produce.
				</p>
			</div>
			<div class="flex gap-4">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">
					The grid sleeve tracked meaningfully differently from BTC buy-and-hold through the worst portion of the drawdown. This is directionally meaningful evidence that the mechanism functions as designed in the environment it was designed for.
				</p>
			</div>
			<div class="flex gap-4">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">
					The full 74-day period provided a regime-specific test: a BTC bear market with modestly positive equities. This is exactly the environment where grid mechanics are structurally advantaged over directional buy-and-hold.
				</p>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			These are directionally meaningful. Our prior reconciliation analysis predicted exactly this pattern: a ranging or high-volatility-oscillation environment would narrow or close the performance gap between the rated grid sleeve and the buy-and-hold benchmarks. This window confirms that prediction.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The correct interpretation: the RXI regime detection performed as designed in the environment it was designed for.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The prior study&rsquo;s 2.5-year window remains the more representative finding for long-run context. A 74-day bear window cannot override 2.5 years of evidence. This adds evidence; it does not rewrite the story.
		</p>
	</section>

	<!-- Section: Honest Caveats -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Honest Caveats &mdash; Read These</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What You Should Know Before Drawing Conclusions</h2>

		<p class="mb-6 text-base leading-relaxed text-slate">
			We are stating these plainly because the honesty is the point.
		</p>

		<div class="space-y-6">
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Window length.</p>
				<p class="text-base leading-relaxed text-slate">
					74 days is a short sample. The directional result &mdash; that the RXI suspend logic stepped back during a sustained BTC bear and the sleeve tracked differently from BTC &mdash; is meaningful. The statistical precision of any return figure derived from 74 days is low. Do not read more into this than the mechanism illustration it provides.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Regime specificity.</p>
				<p class="text-base leading-relaxed text-slate">
					This was a BTC bear market with modestly positive equities. This is the exact regime where grid mechanics are structurally advantaged over directional buy-and-hold. In a 2024-style crypto bull &mdash; which the prior study covered &mdash; the relationship tends to reverse. Results are conditional on the environment.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">The RXI engine is not AI.</p>
				<p class="text-base leading-relaxed text-slate">
					The suspend/resume logic is a Mamdani fuzzy inference system: rule-based, interpretable, deterministic given the same inputs. It is not a neural network, not a large language model, not &ldquo;AI-driven protection.&rdquo; The distinction matters for accuracy and for regulatory appropriateness.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Signal frequency.</p>
				<p class="text-base leading-relaxed text-slate">
					92 suspends over 74 days across 10 symbols is approximately 0.12 suspends per symbol-day. The engine was toggling frequently during a volatile period. In a live deployment, frequent re-entry creates additional friction beyond what the simulation models &mdash; suspended periods here simply earn zero. That is a conservative assumption but it may slightly understate real-world re-entry costs.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">Simulation, not a live track record.</p>
				<p class="text-base leading-relaxed text-slate">
					This is a simulated result using realistic friction. It is not a GIPS-compliant verified return. It is the most rigorous simulation we know how to run at this stage. It is still a simulation.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-1 text-sm font-semibold text-navy-deep">RXI suspension in live deployment.</p>
				<p class="text-base leading-relaxed text-slate">
					In a live CoinRoc session, the suspend/resume cycle illustrated in this simulation is automatic and non-optional. When RXI signal conditions are met &mdash; specifically, when the regime classifies as TREND_FOLLOWING at or above the confidence threshold on a 4-hour bar boundary &mdash; the system pauses new capital deployment without a user confirmation step. Users receive an after-the-fact notification; there is no in-session toggle to override it. That is by design: the gate is a deterministic algorithm applied identically to every live session, not a per-user judgment call. Users who activate the bot accept the RXI gate as an integral, non-separable feature of how it operates. Users may terminate a session at any time. The forward simulation modeled this behavior by halting new grid order placement at the signal boundary &mdash; consistent with how the mechanism operates in production.
				</p>
			</div>
		</div>
	</section>

	<!-- Section: What It Means -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What It Means for a CoinRoc User</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Mechanism in Plain Language</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The RXI filter does something simple that is hard to do emotionally: it reduces exposure when conditions deteriorate, and restores it when conditions improve. Over this 74-day window, it held the portfolio roughly flat while BTC lost more than a quarter of its value from peak to trough &mdash; a result specific to this bear-market regime window, not a standing property of the mechanism in all conditions.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The mechanism is not prediction. The grid does not need to know where BTC goes. It needs the right conditions &mdash; oscillation within a range, not a trending directional move. The suspend and resume thresholds are fixed rules applied to incoming indicator values. No learning, no model updating, no prediction. When those conditions break, the RXI suspend logic steps back. When they return, it re-engages.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In a bear window like this one, drawdown protection is where the mechanism earns its keep. Whether that benefit persists across regimes is what the 2.5-year prior study answers &mdash; and the answer there is more nuanced.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The two and a half years of prior research context is still the more representative historical reference for understanding how the mechanism has behaved across a broader range of conditions. This 74-day result is evidence that the regime detection layer does what it says it does when the regime it is designed to protect against actually arrives.
		</p>

		<!-- CoinRoc cross-link -->
		<div class="mt-8 border border-rule bg-paper p-6">
			<div class="eyebrow mb-2">Related</div>
			<p class="mb-3 text-sm leading-relaxed text-slate">
				CoinRoc is the product that uses the RXI regime detection layer described in this research. Learn more at <a href="https://coinroc.com" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition" target="_blank" rel="noopener noreferrer">coinroc.com</a>.
			</p>
			<p class="text-sm leading-relaxed text-slate">
				Cross-reference: <a href="/research/grid-trading-walk-forward-2026" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">the prior 2.5-year study (RES-REPOSITION-PORTFOLIO-01)</a> covers a broader range of conditions and should be consulted for longer-run historical context.
			</p>
		</div>
	</section>

	<!-- Hypothetical/Simulated Performance Disclosure -->
	<section class="mb-10 rounded-sm border border-rule bg-paper p-6 text-sm leading-relaxed text-slate">
		<div class="mb-3 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Hypothetical/Simulated Performance Disclosure</div>
		<p class="mb-3">
			The results described in this article were achieved by means of a simulation model designed to replicate live grid trading mechanics without the use of a live account or real capital. Hypothetical simulation results have inherent limitations and are not indicative of future results. Unlike actual performance records, simulated results do not represent actual trading. No representation is being made that any account will or is likely to achieve results similar to those illustrated.
		</p>
		<p class="mb-3">
			The simulation covers a single 74-calendar-day window (April 14 &ndash; June 27, 2026) representing a specific market regime (Bitcoin bear, equities mixed). Results during other market regimes, including extended bull markets, may differ substantially. The 2.5-year prior study (RES-REPOSITION-PORTFOLIO-01) covers a broader range of conditions and should be consulted for longer-run context.
		</p>
		<p class="mb-3">
			Fee assumptions: OKX US Institutional VIP 2 rates (0.06% maker / 0.08% taker) and an assumed slippage floor of max(0.02%, 0.15 &times; ATR/price) per fill side. Results at other fee tiers &mdash; including OKX consumer rates or other exchanges &mdash; would differ materially.
		</p>
		<p class="mb-3">
			The RXI regime suspension described and modeled in this simulation activates automatically when signal conditions are met in a live CoinRoc session. No user approval is required and no user-configurable toggle exists to disable it within a live session. Users receive notification of an active pause after it triggers. CoinRoc does not make individualized or discretionary investment decisions on behalf of any user; the RXI gate is a rules-based, deterministic algorithm with published criteria, applied identically across all sessions regardless of any individual user&rsquo;s account characteristics or preferences.
		</p>
		<p>
			The regulatory classification of certain digital assets referenced in this article, including XLM, AAVE, and DOT, is subject to ongoing review by US regulatory authorities. No representation is made regarding the securities-law status of any digital asset.
		</p>
	</section>

	<!-- Not Financial Advice -->
	<section class="mb-10 rounded-sm border border-rule bg-paper p-6 text-sm leading-relaxed text-slate">
		<div class="mb-3 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Not Financial Advice</div>
		<p>
			This article is a research summary of a simulation study illustrating mechanism behavior. Past simulated performance is not indicative of future results. Grid trading involves risk of loss, including in conditions not covered by this study. Simulation results are shown at OKX US Institutional VIP 2 fee tiers and do not represent results achievable at retail fee structures. Nothing in this article constitutes financial, investment, or trading advice. Consult a qualified financial professional before making any investment decision.
		</p>
	</section>

	<!-- Footer attribution -->
	<div class="border-t border-rule pt-8 text-xs text-slate-light">
		<p class="mb-1">Yodacom Research &mdash; yodacom.com/research</p>
		<p class="mb-1">Source study: RES-LIVE-SIM-01, Han Kessel, 2026-06-27</p>
		<p class="mb-1">Cross-reference: RES-REPOSITION-PORTFOLIO-01 (prior study, 2.5-year window)</p>
		<p class="mb-1">Product: <a href="https://coinroc.com" class="underline underline-offset-2 hover:text-slate transition" target="_blank" rel="noopener noreferrer">coinroc.com</a></p>
	</div>

</article>
