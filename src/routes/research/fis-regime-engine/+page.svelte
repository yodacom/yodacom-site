<svelte:head>
	<title>How CoinRoc Knows When to Step Aside: Understanding the RXI Regime Engine | Yodacom Research</title>
	<meta name="description" content="The RXI regime engine combines trend strength, price-series memory, and information entropy signals to detect when a market is trending and automatically pause grid deployment. Here is what it is and what it does." />
	<meta property="og:title" content="How CoinRoc Knows When to Step Aside: Understanding the RXI Regime Engine | Yodacom Research" />
	<meta property="og:description" content="The RXI regime engine combines trend strength, price-series memory, and information entropy signals to detect when a market is trending and automatically pause grid deployment. Here is what it is and what it does." />
</svelte:head>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Educational / Product Explainer &middot; June 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			How CoinRoc Knows When to Step Aside: Understanding the RXI Regime Engine
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			RXI Regime Detection &middot; Grid Trading Risk Management &middot; Educational Article
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Yodacom Research &middot; Registry ID: FIS-LESSON-01
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Published: 2026-06-29 &middot; Audience: CoinRoc users and financial professionals
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			The grid earns profit from short-term price oscillation. When markets stop oscillating and start trending hard in one direction, an always-on grid bot becomes a liability. RXI is the mechanism designed to detect that shift &mdash; and interrupt it.
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

	<!-- The one thing -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The One Thing That Separates a Grid Bot from a Trap</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Grid trading is one of the most elegant income strategies in markets: the system places a ladder of buy and sell orders across a price range, collects the spread every time price oscillates through a level, accumulating gains during oscillating market conditions. It works beautifully &mdash; in the right market conditions.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The problem is that markets do not always cooperate.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			When a market stops oscillating and starts trending hard in one direction &mdash; think a sustained crypto sell-off that does not bounce &mdash; an always-on grid bot becomes a liability. It keeps placing buy orders as the price falls. Level by level. Every new buy is an entry into a losing position. The capital deployed into those buys is now tied up in an asset worth less with each passing hour. Without any awareness of what the market is doing, a grid bot will do it automatically, at every level, until the grid runs out of capital.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That is the scenario CoinRoc&rsquo;s RXI engine is specifically designed to detect &mdash; and interrupt.
		</p>
	</section>

	<!-- What RXI actually is -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What RXI Actually Is</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">A Weighted, Tiered Regime Classifier, Not a Forecast</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			RXI&#x2122; stands for <strong class="text-navy-deep">Regime eXecution Intelligence</strong> &mdash; CoinRoc&rsquo;s regime classification engine. It is a rules-based system that reads several independent market-behavior measurements, checks each one against a defined set of thresholds, and outputs a weighted, tiered read of current conditions. It is more than a single binary switch &mdash; there are three output states and a numeric confidence score &mdash; but each underlying input is evaluated against fixed cutoffs, not a smooth curve. It is not a forecast; it reads current conditions, not future ones.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In plain language: RXI reads the market&rsquo;s current behavior using four independent measurement tools, combines those readings into a single regime assessment, and outputs one of three states &mdash; <strong class="text-navy-deep">GRID_TRADING</strong>, <strong class="text-navy-deep">NEUTRAL</strong>, or <strong class="text-navy-deep">TREND_FOLLOWING</strong> &mdash; alongside a confidence score. That regime call is the gate through which grid activity must pass before capital is deployed.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is not a forecast. RXI does not predict what the market will do next. It reads what the market is doing right now and makes a rules-based decision about whether it is a grid-appropriate environment.
		</p>
	</section>

	<!-- The four signals -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Four Signals RXI Reads</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">A Multi-Angle Picture No Single Indicator Can Provide</h2>

		<p class="mb-6 text-base leading-relaxed text-slate">
			Each of the four inputs to RXI measures a different property of the market. Together, they give the system a multi-angle picture that no single indicator could provide alone.
		</p>

		<div class="space-y-8">
			<div class="border border-rule bg-paper p-6">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">ADX &mdash; Trend Strength</div>
				<p class="text-base leading-relaxed text-slate">
					The Average Directional Index measures how strongly price is moving in a single direction. A low ADX reading means price is wandering &mdash; no clear push up or down, which is the natural habitat for grid trading. A high ADX reading means a directional trend is in force. RXI uses ADX to detect when trend strength has crossed from noise into signal.
				</p>
			</div>

			<div class="border border-rule bg-paper p-6">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Hurst Exponent &mdash; Does Price Mean-Revert or Persist?</div>
				<p class="text-base leading-relaxed text-slate">
					A statistical measure borrowed from time-series analysis, originally developed to study river flooding patterns and later applied across financial markets. A Hurst value below 0.50 indicates a market that tends to mean-revert &mdash; what goes up a little tends to come back down, and vice versa. That is the oscillating behavior grids feed on. A value above 0.55 indicates a market that tends to persist &mdash; moves in one direction carry forward rather than reversing. RXI includes the Hurst reading alongside ADX and entropy because it measures the structural character of price behavior, not just the current momentum.
				</p>
			</div>

			<div class="border border-rule bg-paper p-6">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Shannon and Tsallis Entropy &mdash; How Ordered vs. Random Is the Price Action?</div>
				<p class="text-base leading-relaxed text-slate">
					Entropy, in information theory, measures the degree of randomness or disorder in a signal. Low entropy in price action means behavior is ordered and predictable &mdash; price is doing something systematic. High entropy means it is noisy and chaotic. RXI reads two entropy measures &mdash; Shannon entropy (classical information theory), a scored input to the regime confidence calculation below, and Tsallis entropy (a generalization better suited to heavy-tailed financial distributions). Tsallis entropy is currently computed but not yet a scored input to the regime confidence formula below. Shannon entropy helps filter out false trending signals that are really just volatility.
				</p>
			</div>

			<div class="border border-rule bg-paper p-6">
				<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">ATR &mdash; Volatility Scale</div>
				<p class="text-base leading-relaxed text-slate">
					Average True Range measures the typical size of price moves over recent periods, providing volatility context for interpreting the other signals &mdash; what looks like a strong trend in a low-volatility environment reads differently in a high-volatility one. ATR is currently computed but not yet a scored input to the regime confidence formula below.
				</p>
			</div>
		</div>

		<p class="mt-6 text-base leading-relaxed text-slate">
			ADX, the Hurst exponent, and Shannon entropy are combined through a tiered, weighted scoring system &mdash; each measurement is checked against a set of fixed thresholds, the points awarded at each threshold are summed, and the total is classified into one of three regime states. ATR provides volatility context used elsewhere in the system; Tsallis entropy is computed for research purposes. Neither is currently a scored input to this specific classification. The output is a weighted, tiered classification &mdash; not a coin flip, and not a fuzzy-logic inference.
		</p>
	</section>

	<!-- What happens when RXI calls a trend -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What Happens When RXI Calls a Trend</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Soft Pause: Automatic, Non-Configurable, by Design</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			When RXI classifies the market as TREND_FOLLOWING with sufficient confidence, CoinRoc&rsquo;s grid engine enters a <strong class="text-navy-deep">soft pause</strong>.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			What that means precisely:
		</p>

		<div class="mb-6 space-y-3">
			<div class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">The bot stops placing new buy orders into the downward move</p>
			</div>
			<div class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">Capital that would have been deployed into new grid levels is held in reserve (cash or stablecoins)</p>
			</div>
			<div class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">Existing positions are held as-is &mdash; the soft pause does not liquidate what is already open</p>
			</div>
			<div class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<p class="text-base leading-relaxed text-slate">The bot resumes active grid operation when RXI reclassifies the market back toward GRID_TRADING or NEUTRAL conditions</p>
			</div>
		</div>

		<div class="mb-6 border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Automatic and non-configurable</div>
			<p class="text-base leading-relaxed text-slate">
				This pause is automatic and non-configurable within a live session. When RXI conditions are met, the gate fires without a user confirmation step; you will receive a notification that the pause is active, not a request for your approval. There is no in-session toggle to override it. That is by design: RXI is a disclosed, deterministic algorithm applied identically to every live session &mdash; not a judgment call made by CoinRoc on behalf of any individual user. Your control exists at the session level. You choose to run the bot, and in doing so you accept the RXI gate as an integral, non-separable feature of how it operates. You may terminate a session at any time.
			</p>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The word &ldquo;soft&rdquo; matters here. This is a deployment pause, not a portfolio liquidation. Positions entered before the regime shift remain in place. RXI limits adding to a declining position; it does not unwind what was there before the signal fired. That distinction is important for users to understand.
		</p>
	</section>

	<!-- What the research shows -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What the Research Shows</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Eight Years of Walk-Forward Simulation Across 17 Assets</h2>

		<div class="mb-6 rounded-sm border border-rule bg-paper p-5 text-sm text-slate">
			<p class="font-semibold text-navy-deep">Simulated results only &mdash; read this first</p>
			<p class="mt-1">All results described below are from simulated backtesting only. CoinRoc has not yet deployed live trading sessions for any user account. No actual user capital has been traded using these strategies.</p>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s backtesting program ran walk-forward simulations across eight years of historical data (2017&ndash;2025) covering 17 cryptocurrency assets and 135 valid annual test periods. Walk-forward testing is a methodologically rigorous approach that tests each period on data the model had not previously seen &mdash; it is the closest backtesting can get to simulating real-world deployment.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			One case from CoinRoc’s broader research program illustrates, concretely, what a regime-based approach can do in a severe historical test scenario.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This case comes from a research-stage regime-classification model CoinRoc tested but has not deployed to its live product — a different, more complex classifier than the RXI engine described above, using a Hurst-exponent gate combined with trend and volatility-pattern signals rather than the ADX/Hurst/Shannon-entropy scoring described earlier on this page.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			During the 2018 ETH bear market, the asset fell approximately 82% on a buy-and-hold basis. An always-on grid running through that same period still lost approximately 62% &mdash; because even with the income mechanism active, the sustained one-directional decline overwhelmed the grid&rsquo;s ability to complete profitable round trips. The grid kept catching the knife.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In this one research backtest — where the tested classifier’s Hurst-exponent gate read 0.605, above its 0.55 defensive threshold — the classifier correctly identified the period as trending, and simulated capital that would have been deployed into new grid levels was moved to cash. No new buy orders would have been placed.
		</p>

		<div class="mb-6 border border-rule bg-paper p-6">
			<div class="mb-2 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Hypothetical backtested result for RXI-gated strategy during ETH 2018: approximately 0%</div>
			<p class="text-sm leading-relaxed text-slate">
				The ~0% figure reflects the performance of that reserved capital, not liquidation of pre-existing positions &mdash; the soft pause does not close existing holdings. A user who held an open ETH position entering that period would still carry that position at a loss; RXI stops new capital from being added into the decline, it does not unwind what was already deployed.
			</p>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is a real, correctly classified single case — not a representative outcome. Tested across the same 135-fold dataset this case is drawn from, this classification method underperformed an always-on, ungated grid on average: overall win rate fell from 41.5% to 26.7%, and win rate in bear-market folds specifically (buy-and-hold losses worse than ‒20%) fell from 100% to 69.8%. Most of the periods this method classified as “defensive” were bull-market periods where it sidelined capital from gains rather than protecting against losses — the mean buy-and-hold return across all 47 defensive-classified folds was <strong class="text-navy-deep">+253.6%</strong>. ETH 2018 is the exception that worked as designed in the single hardest test case, not the average outcome. We are showing both the case and the aggregate result here because a single favorable example, without the aggregate finding next to it, would overstate what this backtest actually demonstrated.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Across the full dataset, this classifier flagged 47 of 135 valid test periods as defensive. The always-on grid’s mean return across those 47 periods was approximately −6%; within that set, the subset of periods with negative always-on returns averaged approximately −28%. As noted above, this same classifier’s aggregate win rate across the full dataset was lower than an always-on, ungated grid’s — not higher — so this figure should be read alongside that finding, not in isolation.
		</p>
	</section>

	<!-- Why this is not a heuristic -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Research Behind RXI</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Why This Is Not a Heuristic</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			RXI is not a simple moving-average crossover. It is not a rule of thumb built by eyeballing charts. The indicator suite behind it &mdash; RXI&#x2122; (regime detection), CSI&#x2122; (sentiment analysis), and GSI&#x2122; (grid suitability scoring) &mdash; was built using established signal-processing mathematics, information theory, and statistical tools with decades of research behind them in quantitative finance and econophysics.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The Hurst exponent, for example, is used by quantitative hedge funds specifically because it measures the structural memory of a price series &mdash; a property that simple momentum or moving-average indicators cannot capture. Tsallis entropy was developed in statistical mechanics and has been applied to financial markets because standard entropy assumptions break down when distributions have heavy tails &mdash; which crypto markets emphatically do.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The regime framework was validated using walk-forward backtesting across a multi-year, multi-asset dataset. That means it was tested on out-of-sample data &mdash; periods it was not calibrated on &mdash; which is the methodologically correct way to evaluate whether a regime filter actually generalizes or is just curve-fit to history.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s indicator suite is proprietary. The underlying methodology is published in CoinRoc&rsquo;s research documentation.
		</p>
	</section>

	<!-- What this means -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What This Means</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">For CoinRoc Users and for Advisors Evaluating the Platform</h2>

		<div class="mb-6 space-y-6">
			<div class="border-l-2 border-rule pl-4">
				<p class="mb-2 text-sm font-semibold text-navy-deep">If you are a CoinRoc user:</p>
				<p class="text-base leading-relaxed text-slate">
					RXI is the mechanism that makes a hands-off grid strategy more resilient across varying market conditions. Without it, you would need to monitor the market constantly and pause your bot manually during trends. With it, the system reads regime conditions continuously and manages deployment automatically &mdash; and when conditions warrant a pause, that pause fires without waiting for your input. You are not relying on instinct or timing. You are relying on a rules-based system backed by quantitative research, with a regime gate that is an integral part of the product you activated.
				</p>
			</div>

			<div class="border-l-2 border-rule pl-4">
				<p class="mb-2 text-sm font-semibold text-navy-deep">A financial advisor evaluating CoinRoc</p>
				<p class="text-base leading-relaxed text-slate">
					would find a documented response to the question clients often raise &mdash; &ldquo;what does this do in a sustained sell-off?&rdquo; The answer is a rules-based, multi-indicator regime filter with a documented walk-forward simulation history of reducing simulated tail exposure in the scenarios that most stress-test it. The logic is explainable, the methodology is published, and the backtesting is structured and disclosed &mdash; elements that support the kind of documented, transparent process advisors typically require when evaluating any systematic tool.
				</p>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Neither of the above should be read as a promise of protection or a guarantee of any outcome. Markets are unpredictable. RXI reads current conditions; it does not predict future ones. A regime can shift faster than any indicator can detect. Losses are possible and have occurred in historical simulations even with the RXI layer active.
		</p>
	</section>

	<!-- Summary -->
	<section class="mb-14">
		<div class="eyebrow mb-3">In Summary</div>

		<div class="rounded-sm border border-rule bg-paper p-6">
			<p class="text-base leading-relaxed text-slate">
				RXI is CoinRoc&rsquo;s market-regime detection engine. It combines trend strength (ADX), price-series memory (Hurst exponent), and information entropy (Shannon) into a weighted, tiered regime classification. When conditions indicate a trending market, it soft-pauses grid deployment automatically and without a user confirmation step, holding capital in reserve rather than buying into a directional decline. Users accept this behavior as a non-separable feature of the product when they activate a session.
			</p>
			<p class="mt-4 text-base leading-relaxed text-slate">
				CoinRoc’s broader research program includes a walk-forward-tested regime-classification model — illustrated by the ETH 2018 scenario above — that correctly sidelined capital ahead of a severe drawdown in that one case. As detailed above, that same research-stage model underperformed an always-on grid on average across the full dataset it was tested on, so this scenario illustrates the mechanism’s design intent in one severe historical condition, not a demonstrated net benefit. It is not a guarantee. It is one documented research result, not a track record.
			</p>
			<p class="mt-4 text-base leading-relaxed text-slate">
				That is what RXI is. That is what it does. And that is why it is the first layer in how CoinRoc approaches risk.
			</p>
		</div>

		<!-- Cross-links -->
		<div class="mt-8 border border-rule bg-paper p-6">
			<div class="eyebrow mb-2">Related Research</div>
			<div class="space-y-2 text-sm leading-relaxed text-slate">
				<p><a href="/research/fis-regime-detection-advisors" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">Paper 3 &mdash; RXI Regime Detection for Advisors</a> &mdash; the full research paper written for financial advisors</p>
				<p><a href="/research/grid-trading-walk-forward-2026" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">Paper 1 &mdash; Walk-Forward Grid Validation</a> &mdash; the foundational 2.5-year study</p>
				<p><a href="/research/coinroc-live-bear-market-2026" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition">Live Sim &mdash; CoinRoc in a Bear Market, 2026</a> &mdash; the RXI gate in the 74-day forward simulation</p>
				<p>Product: <a href="https://coinroc.com" class="text-ochre-deep underline underline-offset-2 hover:text-ochre transition" target="_blank" rel="noopener noreferrer">coinroc.com</a></p>
			</div>
		</div>
	</section>

	<!-- Disclosures -->
	<section class="mb-10 rounded-sm border border-rule bg-paper p-6 text-sm leading-relaxed text-slate">
		<div class="mb-3 text-[0.72rem] font-semibold uppercase tracking-widest text-navy-deep">Important Disclosures</div>
		<p class="mb-3">
			All performance figures, scenarios, and return estimates referenced on this page are derived from simulated, hypothetical, walk-forward backtesting conducted by Yodacom Research. <strong>These results do not represent actual trading by any user account. CoinRoc has not yet deployed live trading sessions; no actual user capital has been traded using these strategies.</strong> Backtested results are not a guarantee, projection, or estimate of future performance. Past simulated performance does not predict future results. Actual results will vary materially &mdash; and potentially substantially &mdash; from any simulated results.
		</p>
		<p class="mb-3">
			The walk-forward simulation referenced covers the period 2017&ndash;2025 across 17 pre-selected cryptocurrency assets using historical OHLCV price data. Cryptocurrency assets selected for inclusion were identified based on data availability and liquidity thresholds; this selection process may not be representative of all available assets. Results are net of estimated exchange fees based on modeled retail-tier pricing. Actual costs, execution quality, slippage, and fill rates in live trading may differ materially from simulation assumptions.
		</p>
		<p class="mb-3">
			The RXI soft-pause mechanism limits new grid order placement during detected trending market regimes. <strong>It does not liquidate or close existing open positions. It does not guarantee protection from loss. The ~0% backtested figure for the ETH 2018 scenario reflects capital that would have been held in reserve rather than deployed into new grid levels during that period &mdash; it does not reflect the outcome for capital already deployed in open positions prior to the regime signal.</strong> Losses are possible and have occurred in historical simulations during periods when regime classification was delayed relative to the onset of a trend or when a trend reversed rapidly.
		</p>
		<p class="mb-3">
			The RXI regime suspension activates automatically when the signal conditions described above are met. No user approval is required and no user-configurable toggle exists to disable it within a live session. Users receive notification of an active pause after it triggers. CoinRoc does not make individualized or discretionary investment decisions on behalf of any user; the RXI gate is a rules-based, deterministic algorithm with published criteria, applied identically across all sessions regardless of any individual user&rsquo;s account characteristics or preferences.
		</p>
		<p class="mb-3">
			The three-scenario comparison (approximately &minus;82% / &minus;62% / 0%) is derived from a single asset (ETH) during a single historical period (2018 bear market), using a research-stage regime-classification model tested by CoinRoc but not deployed to its live product. It is presented as an illustration of the mechanism under extreme conditions and is not representative of typical or expected results. Tested across the full 135-fold dataset this case is drawn from, this same classification method underperformed an always-on, ungated grid on average — overall win rate 41.5% vs. 26.7%, bear-fold win rate 100% vs. 69.8% — and most periods it classified as defensive were bull-market periods where it sidelined capital from gains rather than protecting against losses. Results across other assets, time periods, and classification methods varied significantly.
		</p>
		<p class="mb-3">
			Grid trading in cryptocurrency markets involves substantial risk of loss, including the potential for complete loss of invested capital. Digital assets are highly volatile and speculative instruments. Regulatory treatment of digital assets is evolving and uncertain; future regulatory developments may materially affect the value, legality, or accessibility of digital assets.
		</p>
		<p class="mb-3">
			This content is for educational and informational purposes only. It does not constitute investment advice, a recommendation to buy or sell any security, digital asset, or investment product, or a solicitation to take any action. CoinRoc is a software tool, not a registered investment adviser. Nothing on this page should be construed as legal, tax, accounting, or regulatory advice. Readers should consult a qualified financial, legal, and tax professional before making any investment decisions.
		</p>
		<p>
			CoinRoc, RXI&#x2122;, CSI&#x2122;, and GSI&#x2122; are products and trademarks of Yodacom LLC. Trademark registration pending with the United States Patent and Trademark Office.
		</p>
	</section>

	<!-- Footer attribution -->
	<div class="border-t border-rule pt-8 text-xs text-slate-light">
		<p class="mb-1">Yodacom Research &mdash; yodacom.com/research</p>
		<p class="mb-1">Registry ID: FIS-LESSON-01 &middot; Channel: yodacom.com/research (educational / product explainer)</p>
	</div>

</article>
