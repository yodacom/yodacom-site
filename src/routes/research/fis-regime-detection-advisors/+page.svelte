<script lang="ts">
  import FigureExpand from '$lib/components/FigureExpand.svelte';
</script>

<svelte:head>
	<title>When the Market Trends Hard, Your Income Strategy Should Step Aside — Yodacom Research</title>
	<meta name="description" content="In 2022, covered call income fell with equity. FIS-filtered grid trading offers a structurally different income mechanism. Here is the data." />
</svelte:head>

<!-- Cover banner -->
<FigureExpand label="Expand cover figure">
<div class="w-full overflow-x-auto">
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
  <defs>
    <linearGradient id="b1-bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0d14;stop-opacity:1"/>
      <stop offset="50%" style="stop-color:#0f1117;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0c0f18;stop-opacity:1"/>
    </linearGradient>
    <radialGradient id="b1-tealGlow" cx="30%" cy="40%" r="50%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.07"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="b1-ochreGlow" cx="70%" cy="60%" r="45%">
      <stop offset="0%" style="stop-color:#C8973A;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#C8973A;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="b1-topStrip" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.5"/>
      <stop offset="50%" style="stop-color:#C8973A;stop-opacity:0.7"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0.3"/>
    </linearGradient>
    <linearGradient id="b1-bottomStrip" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#3B82F6;stop-opacity:0.2"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0.15"/>
    </linearGradient>
  </defs>
  <!-- Background -->
  <rect width="1200" height="630" fill="url(#b1-bgGrad)"/>
  <rect width="1200" height="630" fill="url(#b1-tealGlow)"/>
  <rect width="1200" height="630" fill="url(#b1-ochreGlow)"/>
  <!-- Top accent line -->
  <line x1="0" y1="0" x2="1200" y2="0" stroke="url(#b1-topStrip)" stroke-width="2.5" opacity="0.5"/>
  <!-- Subtle grid lines -->
  <g opacity="0.06">
    <line x1="200" y1="0" x2="200" y2="630" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="400" y1="0" x2="400" y2="630" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="600" y1="0" x2="600" y2="630" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="800" y1="0" x2="800" y2="630" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="1000" y1="0" x2="1000" y2="630" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="0" y1="157" x2="1200" y2="157" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="0" y1="314" x2="1200" y2="314" stroke="#8FA8C8" stroke-width="0.7"/>
    <line x1="0" y1="472" x2="1200" y2="472" stroke="#8FA8C8" stroke-width="0.7"/>
  </g>
  <!-- Header box -->
  <rect x="80" y="30" width="1040" height="130" rx="4" fill="#0f1117" fill-opacity="0.88"/>
  <line x1="80" y1="30" x2="1120" y2="30" stroke="#8b9ab8" stroke-width="0.5" opacity="0.3"/>
  <line x1="80" y1="160" x2="1120" y2="160" stroke="#8b9ab8" stroke-width="0.5" opacity="0.3"/>
  <!-- Eyebrow pill -->
  <rect x="450" y="40" width="300" height="22" rx="11" fill="#ffffff" fill-opacity="0.05" stroke="#8b9ab8" stroke-width="0.8" stroke-opacity="0.4"/>
  <text x="600" y="55" fill="#8b9ab8" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10" font-weight="600" text-anchor="middle" letter-spacing="0.16em">YODACOM RESEARCH · B1 · JUNE 2026</text>
  <!-- Main title -->
  <text x="600" y="96" fill="#e8ecf0" font-family="'Georgia','Times New Roman',serif" font-size="22" font-weight="700" text-anchor="middle" letter-spacing="-0.01em">When the Market Trends Hard, Your Income Strategy Should Step Aside</text>
  <!-- Subtitle -->
  <line x1="200" y1="108" x2="1000" y2="108" stroke="#8b9ab8" stroke-width="0.5" opacity="0.25"/>
  <text x="600" y="127" fill="#8b9ab8" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="12" text-anchor="middle" letter-spacing="0.04em">A Rules-Based Regime Filter for Crypto Income &nbsp;·&nbsp; Jeremy Black &nbsp;·&nbsp; Yodacom Research</text>
  <text x="600" y="143" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" text-anchor="middle" letter-spacing="0.06em">Third paper in the systematic income series</text>
  <!-- Three stat callouts -->
  <rect x="150" y="195" width="230" height="78" rx="4" fill="#0D1A2E" stroke="#2A4E6A" stroke-width="1"/>
  <text x="265" y="220" font-family="'Inter','Segoe UI',sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">FIS Gate: 47 of 135 periods</text>
  <text x="265" y="238" font-family="'Inter','Segoe UI',sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">classified defensive → 0% loss</text>
  <text x="265" y="258" font-family="'Inter','Segoe UI',sans-serif" font-size="10" fill="#4A6080" text-anchor="middle">mean defensive return: always-on −24.2%</text>
  <rect x="485" y="195" width="230" height="78" rx="4" fill="#1A0E00" stroke="#4A3010" stroke-width="1"/>
  <text x="600" y="220" font-family="'Inter','Segoe UI',sans-serif" font-size="12" font-weight="600" fill="#C8973A" text-anchor="middle">ETH 2018 — Anchor Case</text>
  <text x="600" y="238" font-family="'Inter','Segoe UI',sans-serif" font-size="11" fill="#8B7040" text-anchor="middle">B&amp;H: −82.4% · Always-on: −61.6%</text>
  <text x="600" y="258" font-family="'Inter','Segoe UI',sans-serif" font-size="10.5" font-weight="700" fill="#C8973A" text-anchor="middle">FIS-gated: 0% (cash held)</text>
  <rect x="820" y="195" width="230" height="78" rx="4" fill="#0D1A2E" stroke="#2A4E6A" stroke-width="1"/>
  <text x="935" y="220" font-family="'Inter','Segoe UI',sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">Hurst Exponent Gate</text>
  <text x="935" y="238" font-family="'Inter','Segoe UI',sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">0.605 (ETH 2018) → trending</text>
  <text x="935" y="258" font-family="'Inter','Segoe UI',sans-serif" font-size="10" fill="#4A6080" text-anchor="middle">threshold: 0.55 · grid paused entirely</text>
  <!-- FIS label badge -->
  <rect x="488" y="298" width="224" height="36" rx="18" fill="#C8973A" fill-opacity="0.12" stroke="#C8973A" stroke-width="1.2" stroke-opacity="0.6"/>
  <text x="600" y="321" font-family="'Inter','Segoe UI',sans-serif" font-size="13" font-weight="700" fill="#C8973A" text-anchor="middle" letter-spacing="0.08em">FIS™ REGIME DETECTION</text>
  <!-- Divider rule -->
  <line x1="200" y1="360" x2="1000" y2="360" stroke="#8b9ab8" stroke-width="0.5" opacity="0.2"/>
  <!-- Series note -->
  <text x="600" y="385" font-family="'Inter','Segoe UI',sans-serif" font-size="11" fill="#5a6475" text-anchor="middle" letter-spacing="0.04em">Rho ≈ 0.02 correlation with SPY · 135 walk-forward folds · 17 crypto assets · 2017–2025</text>
  <!-- Bottom strip -->
  <rect x="0" y="590" width="1200" height="40" fill="#080a10" fill-opacity="0.7"/>
  <line x1="0" y1="590" x2="1200" y2="590" stroke="#8b9ab8" stroke-width="0.5" opacity="0.2"/>
  <text x="40" y="614" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.08em">YODACOM RESEARCH</text>
  <text x="600" y="614" fill="#3d4554" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="9.5" text-anchor="middle" letter-spacing="0.03em">Hypothetical backtest results. Not investment advice. Past performance not indicative of future results.</text>
  <text x="1160" y="614" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.06em" text-anchor="end">B1 · PRE-PRINT · JUNE 2026</text>
  <line x1="0" y1="629" x2="1200" y2="629" stroke="url(#b1-bottomStrip)" stroke-width="2" opacity="0.3"/>
</svg>
</div>
</FigureExpand>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Paper № 3 &middot; June 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			When the Market Trends Hard, Your Income Strategy Should Step Aside: A Rules-Based Regime Filter for Crypto Income
		</h1>
		<p class="fade-up d2 mb-1 text-base leading-relaxed text-slate">
			Jeremy Black &middot; Yodacom Research
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Quantitative analysis by Yodacom AI Research Team
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			There is a structural problem embedded in most income-generating strategies advisors recommend today,
			and 2022 made it painfully visible. This paper examines whether crypto grid trading with FIS
			regime detection offers a structurally different income mechanism &mdash; one where income and risk
			do not share the same source. The data covers 135 walk-forward folds across 17 cryptocurrency
			assets, 2017 through 2025.
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

	<!-- ── Body text ──────────────────────────────────────────────── -->

	<p class="mb-5 text-base leading-relaxed text-slate">
		There is a structural problem embedded in most income-generating strategies advisors recommend today,
		and 2022 made it painfully visible.
	</p>

	<p class="mb-5 text-base leading-relaxed text-slate">
		Dividend stocks, covered call overlays, preferred shares &mdash; these strategies generate income,
		but they are long equity risk dressed up as yield. When the 2022 bear market arrived, advisors who
		had layered covered call programs onto client portfolios discovered that collected premiums covered
		only a fraction of the underlying drawdown. Worse, as implied volatility collapsed mid-crash, future
		premium income dried up at precisely the moment clients needed it most. This is not a failure of
		execution. It is a structural feature: the income and the risk live in the same place. When equity
		falls, both suffer together.
	</p>

	<p class="mb-10 text-base leading-relaxed text-slate">
		The question worth asking is whether there is a category of income generation that is architecturally
		different &mdash; where the income mechanism and the risk profile are not sourced from the same asset.
		Crypto grid trading is one answer worth examining seriously. Not because crypto is a safe haven, but
		because the mechanism of income generation is fundamentally different from equity exposure. And because
		a regime detection layer called FIS changes the tail-risk profile in ways that matter for income-focused
		client portfolios.
	</p>

	<!-- ── Section: What Grid Trading Actually Is ──────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What Grid Trading Actually Is &mdash; And Why Correlation Matters</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Crypto grid trading generates income through an automated process: the system places a ladder of
			buy and sell orders across a price range. Each time the price oscillates across a grid line, the
			system completes a round-trip trade and captures the spread as realized profit. The strategy earns
			when markets oscillate. It does not depend on an asset going up.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That is the mechanism. Now the portfolio construction implication: because grid income is sourced
			from oscillation rather than directional price movement, the strategy&rsquo;s return pattern has
			near-zero correlation with equity markets. In CoinRoc&rsquo;s historical simulation data across
			2017 through 2025 &mdash; covering 17 cryptocurrency assets and 135 valid annual test periods
			&mdash; the grid composite&rsquo;s annual returns show correlation with SPY of approximately
			&rho;&nbsp;=&nbsp;0.02 &mdash; near-zero across the full history. The important qualification: in
			loss years specifically (2018 and 2022), that correlation rose to approximately
			&rho;&nbsp;=&nbsp;+0.76, meaning the diversification benefit is conditional on the grid generating
			positive returns. By comparison, a systematic covered call overlay on SPY typically carries equity
			beta in the range of 0.3 to 0.6.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That correlation figure is the mathematical basis for the diversification claim. Adding a
			near-zero-correlation income source to a 60/40 portfolio shifts the efficient frontier &mdash; the
			advisor can deliver the same expected return with less portfolio-level risk, or equivalently, more
			return for the same risk budget. The effect is real. The honest caveat is that it is conditional:
			the diversification benefit materializes only in years when the grid strategy is generating positive
			returns. In severe bear-market years, when the underlying crypto assets experience sustained
			directional crashes, grid trading can also post significant losses. 2018 and 2022 were such years.
			This is not hidden information &mdash; it is the central risk factor every advisor should understand
			before considering any allocation.
		</p>

		<p class="text-base leading-relaxed text-slate">
			Which is exactly why the regime filter matters.
		</p>
	</section>

	<!-- ── Section: What FIS Is ──────────────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What FIS Is &mdash; In Plain Advisor Language</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			FIS stands for Fuzzy Inference System. Set aside the technical name. In practice, it is a
			rules-based regime filter that reads the current market environment and answers one question: is
			this market oscillating, or is it trending directionally?
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Grid trading is structurally advantaged in oscillating, range-bound markets. It is structurally
			disadvantaged in sustained directional trends, because the price moves too far in one direction for
			the grid to complete round-trips. A market trending sharply downward will repeatedly trigger the
			buy side of the grid without the corresponding sell, accumulating inventory that loses value as the
			price continues to fall.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			FIS detects this in real time using the Hurst exponent as its primary signal. The Hurst exponent
			is a statistical measure of a price series&rsquo; tendency to mean-revert versus trend. A Hurst
			value below 0.50 indicates mean-reversion &mdash; the market&rsquo;s natural home for grid
			trading. Values above 0.55 indicate trending behavior &mdash; the environment where grid trading
			struggles. FIS also incorporates a moving average position check and a volatility momentum signal.
			When those inputs combine to indicate a trending or distribution-phase market, FIS reduces the
			strategy&rsquo;s engagement score and moves capital toward cash or stablecoins.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The practical result: when conditions are unfavorable, FIS does not try to adapt or optimize the
			grid parameters to survive a crash. It pauses deployment entirely. Capital sits in cash. The grid
			earns nothing that period &mdash; but it also loses nothing.
		</p>

		<div class="my-6 border-l-2 border-ochre/60 pl-4">
			<p class="text-base italic leading-relaxed text-slate">
				This is not a prediction system. FIS does not forecast whether a bear market is coming. It reads
				what the market is doing right now, and when the answer is &ldquo;trending hard in one
				direction,&rdquo; it steps aside.
			</p>
		</div>
	</section>

	<!-- ── Section: Tail Protection Finding ─────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Tail Protection Finding</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Here is the data point that changes the fiduciary conversation.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In CoinRoc&rsquo;s walk-forward simulation &mdash; eight years of non-overlapping annual test
			periods from 2017 through 2025, across 17 cryptocurrency assets &mdash; consider what happened to
			ETH during the 2018 bear market. The underlying asset fell 82.4% on a buy-and-hold basis. An
			always-on grid running through that period lost 61.6% &mdash; because even with the grid mechanism
			active, ETH sustained a trending directional crash through the year. The grid kept accumulating
			inventory into a one-way decline; the round-trip oscillations required for income never
			materialized at scale.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is the three-tier contrast that matters for a fiduciary conversation: buy-and-hold lost 82.4%,
			the always-on grid still lost 61.6%, and FIS-gated returned 0%. The grid mechanism alone was not
			sufficient protection. FIS was the decisive layer.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			FIS classified the ETH 2018 period as trending &mdash; Hurst exponent of 0.605, well above the
			0.55 defensive threshold. When the regime is classified as trending, FIS moves capital to cash. The
			grid does not run. The result for that period: 0%. Not recovered over two years of patient
			recovery. Not partially offset by grid income in the second half of the year. Zero. The position
			was not taken.
		</p>

		<!-- Figure 1: Tail Protection -->
		<FigureExpand label="Expand Figure 1 — FIS Tail Protection">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .fig-b1-1 * { box-sizing: border-box; }
		  .fig-b1-1 .figure-shell {
		    width: 100%;
		    background: #FFFFFF;
		    border: 1px solid #D6CFC0;
		    border-top: 4px solid #142848;
		  }
		  .fig-b1-1 .fig-header { background: #142848; padding: 28px 36px 22px; }
		  .fig-b1-1 .fig-eyebrow {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; font-weight: 700;
		    letter-spacing: 0.16em; text-transform: uppercase; color: #C8973A; margin-bottom: 8px;
		  }
		  .fig-b1-1 .fig-title {
		    font-family: Georgia, serif; font-size: 20px; font-weight: normal;
		    color: #F9F6EF; line-height: 1.35; margin-bottom: 6px;
		  }
		  .fig-b1-1 .fig-subtitle {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px;
		    color: #8FA8C8; line-height: 1.5;
		  }
		  .fig-b1-1 .fig-body { padding: 32px 36px 28px; }
		  .fig-b1-1 .legend {
		    display: flex; gap: 28px; margin-bottom: 28px; align-items: center; flex-wrap: wrap;
		  }
		  .fig-b1-1 .legend-item {
		    display: flex; align-items: center; gap: 8px;
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px; color: #142848;
		  }
		  .fig-b1-1 .legend-swatch { width: 16px; height: 12px; border-radius: 2px; flex-shrink: 0; }
		  .fig-b1-1 .chart-outer { width: 100%; overflow: visible; }
		  .fig-b1-1 .annotation-row {
		    margin-top: 24px; padding: 14px 18px; background: #F4EFE4;
		    border-left: 3px solid #C8973A;
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px;
		    color: #142848; line-height: 1.6;
		  }
		  .fig-b1-1 .annotation-row strong { color: #8B5E10; }
		  .fig-b1-1 .fig-footer {
		    padding: 16px 36px 20px; border-top: 1px solid #E8E2D6;
		    display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
		  }
		  .fig-b1-1 .footnote {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #7A7060; line-height: 1.55; max-width: 680px;
		  }
		  .fig-b1-1 .byline {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #A09070; text-align: right; white-space: nowrap; line-height: 1.5; flex-shrink: 0;
		  }
		  .fig-b1-1 .byline strong { display: block; color: #142848; font-size: 11px; letter-spacing: 0.04em; }
		</style>
		<div class="fig-b1-1">
		<div class="figure-shell">
		  <div class="fig-header">
		    <div class="fig-eyebrow">Fig. 1 &nbsp;&mdash;&nbsp; Yodacom Research &nbsp;|&nbsp; FIS Advisor Article B1 &nbsp;|&nbsp; 2026</div>
		    <div class="fig-title">FIS Regime Detection: Left Tail Truncation by Asset (2017&ndash;2025)</div>
		    <div class="fig-subtitle">Worst single-period annual return per asset: B&amp;H price decline, always-on grid, and FIS-gated grid &nbsp;&bull;&nbsp; ETH 2018 is the anchor case</div>
		  </div>
		  <div class="fig-body">
		    <div class="legend">
		      <div class="legend-item">
		        <div class="legend-swatch" style="background:#4A6080;"></div>
		        B&amp;H price decline (anchor row only)
		      </div>
		      <div class="legend-item">
		        <div class="legend-swatch" style="background:#142848;"></div>
		        Always-on grid (unfiltered)
		      </div>
		      <div class="legend-item">
		        <div class="legend-swatch" style="background:#C8973A;"></div>
		        FIS-gated grid (regime-filtered)
		      </div>
		      <div class="legend-item" style="margin-left:auto; font-size:10.5px; color:#7A7060; font-style:italic;">
		        Bar length = magnitude of loss &nbsp;(left = worse)
		      </div>
		    </div>
		    <div class="chart-outer">
		      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 520" width="100%"
		           style="display:block; overflow:visible;" role="img"
		           aria-label="Grouped horizontal bar chart showing worst annual return per asset for B&H, always-on, and FIS-gated grid strategies. ETH 2018 is the hero anchor case with three bars.">
		        <defs>
		          <filter id="b1-glowETH" x="-5%" y="-20%" width="110%" height="140%">
		            <feGaussianBlur stdDeviation="3" result="blur"/>
		            <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
		          </filter>
		        </defs>
		        <line x1="468" y1="30" x2="468" y2="480" stroke="#D6CFC0" stroke-width="1.2"/>
		        <line x1="392" y1="30" x2="392" y2="480" stroke="#EAE4D8" stroke-width="0.7"/>
		        <line x1="316" y1="30" x2="316" y2="480" stroke="#EAE4D8" stroke-width="0.7"/>
		        <line x1="240" y1="30" x2="240" y2="480" stroke="#EAE4D8" stroke-width="0.7"/>
		        <line x1="164" y1="30" x2="164" y2="480" stroke="#EAE4D8" stroke-width="0.7"/>
		        <line x1="88"  y1="30" x2="88"  y2="480" stroke="#EAE4D8" stroke-width="0.7"/>
		        <text x="88"  y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">-100%</text>
		        <text x="164" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">-80%</text>
		        <text x="240" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">-60%</text>
		        <text x="316" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">-40%</text>
		        <text x="392" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">-20%</text>
		        <text x="468" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848" font-weight="700">0%</text>
		        <text x="548" y="22" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">+20%</text>
		        <line x1="468" y1="30" x2="630" y2="30" stroke="#EAE4D8" stroke-width="0.5"/>
		        <line x1="88" y1="480" x2="640" y2="480" stroke="#C8C0B0" stroke-width="0.7"/>
		        <!-- ETH 2018 hero row -->
		        <rect x="84" y="44" width="560" height="68" rx="3" fill="#FDF5E6" opacity="0.9"/>
		        <rect x="84" y="44" width="3" height="68" fill="#C8973A"/>
		        <text x="82" y="66" text-anchor="end" font-family="Georgia,serif" font-size="12.5" font-weight="bold" fill="#142848">ETH</text>
		        <text x="82" y="80" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#8B5E10" font-style="italic">2018 bear</text>
		        <text x="82" y="94" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8.5" fill="#8B5E10" font-style="italic">Hurst 0.605</text>
		        <rect x="155" y="52" width="313" height="14" fill="#4A6080" rx="1" opacity="0.85"/>
		        <text x="151" y="63" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#4A6080" font-weight="700">-82.4%</text>
		        <text x="460" y="63" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8.5" fill="#F9F6EF" opacity="0.9">ETH Buy &amp; Hold</text>
		        <rect x="234" y="70" width="234" height="14" fill="#142848" rx="1"/>
		        <text x="230" y="81" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848" font-weight="700">-61.6%</text>
		        <text x="460" y="81" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8.5" fill="#8FA8C8" opacity="0.95">Always-On Grid</text>
		        <rect x="466" y="88" width="4" height="11" fill="#C8973A" rx="1"/>
		        <text x="476" y="98" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="11" font-weight="700" fill="#8B5E10">0% (FIS-Gated &mdash; cash held)</text>
		        <text x="468" y="46" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" font-weight="700" fill="#8B5E10" letter-spacing="0.08em">&#8592; ANCHOR CASE</text>
		        <!-- BTC 2018 -->
		        <text x="82" y="141" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">BTC</text>
		        <text x="82" y="154" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2018</text>
		        <rect x="229" y="128" width="239" height="14" fill="#142848" rx="1"/>
		        <text x="225" y="139" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-63%</text>
		        <rect x="449" y="146" width="19" height="10" fill="#C8973A" rx="1"/>
		        <text x="472" y="155" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">-5%</text>
		        <line x1="468" y1="126" x2="468" y2="160" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- LINK 2022 -->
		        <text x="82" y="195" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">LINK</text>
		        <text x="82" y="208" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2022</text>
		        <rect x="221" y="182" width="247" height="14" fill="#142848" rx="1"/>
		        <text x="217" y="193" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-65%</text>
		        <rect x="457" y="200" width="11" height="10" fill="#C8973A" rx="1"/>
		        <text x="472" y="209" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">-3%</text>
		        <line x1="468" y1="180" x2="468" y2="214" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- SOL 2022 -->
		        <text x="82" y="249" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">SOL</text>
		        <text x="82" y="262" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2022</text>
		        <rect x="252" y="236" width="216" height="14" fill="#142848" rx="1"/>
		        <text x="248" y="247" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-57%</text>
		        <rect x="466" y="254" width="4" height="10" fill="#C8973A" rx="1"/>
		        <text x="476" y="263" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">0%</text>
		        <line x1="468" y1="234" x2="468" y2="268" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- DOT 2022 -->
		        <text x="82" y="303" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">DOT</text>
		        <text x="82" y="316" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2022</text>
		        <rect x="271" y="290" width="197" height="14" fill="#142848" rx="1"/>
		        <text x="267" y="301" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-52%</text>
		        <rect x="453" y="308" width="15" height="10" fill="#C8973A" rx="1"/>
		        <text x="476" y="317" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">-4%</text>
		        <line x1="468" y1="288" x2="468" y2="322" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- MATIC 2022 -->
		        <text x="82" y="357" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">MATIC</text>
		        <text x="82" y="370" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2022</text>
		        <rect x="286" y="344" width="182" height="14" fill="#142848" rx="1"/>
		        <text x="282" y="355" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-48%</text>
		        <rect x="466" y="362" width="4" height="10" fill="#C8973A" rx="1"/>
		        <text x="476" y="371" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">0%</text>
		        <line x1="468" y1="342" x2="468" y2="376" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- LTC 2022 -->
		        <text x="82" y="411" text-anchor="end" font-family="Georgia,serif" font-size="12" fill="#142848">LTC</text>
		        <text x="82" y="424" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">2022</text>
		        <rect x="324" y="398" width="144" height="14" fill="#142848" rx="1"/>
		        <text x="320" y="409" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848">-38%</text>
		        <rect x="430" y="416" width="38" height="10" fill="#C8973A" rx="1"/>
		        <text x="476" y="425" text-anchor="start" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">-10%</text>
		        <line x1="468" y1="396" x2="468" y2="430" stroke="#C8C0B0" stroke-width="0.8"/>
		        <!-- Zero axis reinforcement -->
		        <line x1="468" y1="30" x2="468" y2="480" stroke="#142848" stroke-width="1.5"/>
		        <text x="280" y="500" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#7A7060">&#8592; Annual Return % (worst single period per asset)</text>
		        <text x="468" y="496" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#142848" font-weight="700">0%</text>
		      </svg>
		    </div>
		    <div class="annotation-row">
		      <strong>Key finding &mdash; ETH 2018 anchor case:</strong>
		      Buy-and-hold price decline <strong>&minus;82.4%</strong> &nbsp;&bull;&nbsp;
		      Always-on grid <strong>&minus;61.6%</strong> (grid mechanism provided partial protection) &nbsp;&bull;&nbsp;
		      FIS-gated grid <strong>0%</strong> (FIS detected trending regime, Hurst 0.605, and moved capital to cash).
		      The grid alone reduced the drawdown by 21 points; FIS was the decisive layer that eliminated the remaining exposure entirely.
		      <br><br>
		      47 of 135 test periods classified defensive by FIS. Mean return in defensive periods:
		      always-on grid <strong>&minus;24.2%</strong> &rarr; FIS-gated grid <strong>0%</strong> (capital held in cash).
		    </div>
		  </div>
		  <div class="fig-footer">
		    <div class="footnote">
		      All figures from simulated backtesting 2017&ndash;2025. FIS regime filter classifies each test period as active or defensive based on
		      Hurst exponent, moving-average position, and volatility momentum inputs. Defensive periods: capital held in cash or stablecoins;
		      grid not deployed. Always-on grid operates continuously regardless of regime signal. B&amp;H price decline shown for ETH 2018 anchor row only;
		      it reflects raw spot price return and is not a grid strategy output. Past simulation does not guarantee future results.
		      Asset selection reflects pre-specified universe; survivorship bias may affect results.
		      Results net of estimated exchange fees (0.40% maker / 0.60% taker). See article disclosures for full methodology.
		    </div>
		    <div class="byline">
		      <strong>YODACOM RESEARCH</strong>
		      yodacom.com/research &bull; 2026
		    </div>
		  </div>
		</div>
		</div>
		</div>
		</FigureExpand>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Across the full dataset, FIS classified 47 of 135 valid test periods as defensive &mdash; meaning
			it would have moved those positions to cash. Those 47 periods had a mean return of negative 24.2%
			under the always-on grid. FIS converts that average to 0%.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The cost of this protection is real and worth naming: those same 47 periods included some
			positive-return years for grid strategies operating in other assets. The average grid return in
			those defensive-period folds, for assets that would have performed positively, was approximately
			plus 12%. FIS pauses those as well. There is no perfect filter. The regime detection does not
			distinguish, within a defensive-period classification, which individual assets might have ranged
			profitably through the bear market. It pauses deployment broadly.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The net result: removing the worst defensive-period outcomes moves the mean annual return across
			the dataset from negative 9.5% to negative 7.3% and reduces the daily portfolio standard
			deviation from approximately 44% annualized to approximately 38% annualized. The Sharpe ratio at
			the portfolio level changes only marginally &mdash; because Sharpe penalizes all volatility,
			including upside variance &mdash; but the tail risk profile changes materially.
		</p>

		<p class="text-base leading-relaxed text-slate">
			For a fiduciary, the distinction between these two outcomes is not abstract. The first scenario is
			a client who holds through a sustained crash and experiences severe capital loss. The second
			scenario is a client who holds cash through a bear market and deploys again when ranging
			conditions return.
		</p>
	</section>

	<!-- ── Section: Portfolio Construction Value ─────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Portfolio Construction Value</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is where the advisor&rsquo;s analytical framework engages directly.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The efficient frontier is the set of portfolios that maximize return for a given level of risk.
			When you add a low-correlation asset to a traditional portfolio, the frontier shifts upward &mdash;
			you can get more return per unit of risk. The mathematical mechanism is well-established in
			portfolio theory. The question for any specific asset is whether its correlation is genuinely low,
			and whether its return profile is positive enough to shift the frontier in the right direction.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			CoinRoc&rsquo;s historical simulation data shows near-zero correlation with US equities
			(&rho;&nbsp;&approx;&nbsp;0.02) and low correlation with aggregate bonds
			(&rho;&nbsp;&approx;&nbsp;0.21). On paper, these numbers support a diversification argument.
			The honest application of the math requires stating the full picture: in the full 2017 through 2025
			history, including two severe bear-market years, the grid composite&rsquo;s geometric CAGR is
			negative. When an asset&rsquo;s expected return is negative, adding it to a portfolio reduces the
			blended Sharpe ratio regardless of its correlation. The two crash years &mdash; 2018 at negative
			63% and 2022 at negative 59% &mdash; compound catastrophically and overwhelm the diversification
			benefit.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The conditional case is more compelling and more accurate to what forward performance could look
			like with the FIS layer active. Under this hypothetical scenario &mdash; when the grid
			composite&rsquo;s expected annual return is modeled at positive 8% &mdash; reflecting the mean of
			the positive-return years in the dataset (2020, 2021, 2024 average approximately +10.3%), with
			daily portfolio volatility reduced to 34% annualized reflecting FIS regime filtering and asset
			quality selection &mdash; a 10 to 20% grid allocation improves the traditional 60/40 Sharpe ratio
			by approximately 0.03 Sharpe units. The improvement is modest. It is also real.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The FIS layer matters for this calculation specifically because it narrows return dispersion. The
			full CoinRoc three-layer system &mdash; FIS regime gating combined with selection of the
			highest-rated assets by grid suitability &mdash; reduces daily portfolio standard deviation by
			approximately 23% compared to an always-on baseline in the historical simulation data. Narrowing
			dispersion without proportionally narrowing the income return is the definition of risk-adjusted
			improvement.
		</p>

		<!-- Figure 2: Efficient Frontier Shift -->
		<FigureExpand label="Expand Figure 2 — Efficient Frontier Shift">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .fig-b1-2 * { box-sizing: border-box; }
		  .fig-b1-2 .figure-shell {
		    width: 100%; background: #FFFFFF;
		    border: 1px solid #D6CFC0; border-top: 4px solid #142848;
		  }
		  .fig-b1-2 .fig-header { background: #142848; padding: 28px 36px 22px; }
		  .fig-b1-2 .fig-eyebrow {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; font-weight: 700;
		    letter-spacing: 0.16em; text-transform: uppercase; color: #C8973A; margin-bottom: 8px;
		  }
		  .fig-b1-2 .fig-title {
		    font-family: Georgia, serif; font-size: 20px; font-weight: normal;
		    color: #F9F6EF; line-height: 1.35; margin-bottom: 6px;
		  }
		  .fig-b1-2 .fig-subtitle {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px;
		    color: #8FA8C8; line-height: 1.5;
		  }
		  .fig-b1-2 .fig-body { padding: 32px 36px 24px; }
		  .fig-b1-2 .legend {
		    display: flex; gap: 24px; margin-bottom: 24px; flex-wrap: wrap; align-items: flex-start;
		  }
		  .fig-b1-2 .legend-item {
		    display: flex; align-items: flex-start; gap: 8px;
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11px;
		    color: #142848; max-width: 240px; line-height: 1.4;
		  }
		  .fig-b1-2 .legend-line {
		    width: 28px; height: 3px; margin-top: 5px; flex-shrink: 0; border-radius: 1px;
		  }
		  .fig-b1-2 .legend-line.dashed {
		    background: repeating-linear-gradient(90deg, #6B8FB8 0px, #6B8FB8 5px, transparent 5px, transparent 9px);
		    height: 2px; margin-top: 6px;
		  }
		  .fig-b1-2 .chart-outer { width: 100%; overflow: visible; }
		  .fig-b1-2 .caveat-block {
		    margin-top: 20px; padding: 14px 18px;
		    border: 1px solid #D6A848; background: #FFFAED; border-left: 4px solid #C8973A;
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 11.5px;
		    color: #142848; line-height: 1.65;
		  }
		  .fig-b1-2 .caveat-block .caveat-label {
		    font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em;
		    font-size: 9.5px; color: #8B5E10; margin-bottom: 5px;
		  }
		  .fig-b1-2 .caveat-block strong { color: #8B3A10; }
		  .fig-b1-2 .fig-footer {
		    padding: 16px 36px 20px; border-top: 1px solid #E8E2D6;
		    display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
		  }
		  .fig-b1-2 .footnote {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #7A7060; line-height: 1.55; max-width: 680px;
		  }
		  .fig-b1-2 .byline {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #A09070; text-align: right; white-space: nowrap; line-height: 1.5; flex-shrink: 0;
		  }
		  .fig-b1-2 .byline strong { display: block; color: #142848; font-size: 11px; letter-spacing: 0.04em; }
		</style>
		<div class="fig-b1-2">
		<div class="figure-shell">
		  <div class="fig-header">
		    <div class="fig-eyebrow">Fig. 2 &nbsp;&mdash;&nbsp; Yodacom Research &nbsp;|&nbsp; FIS Advisor Article B1 &nbsp;|&nbsp; 2026</div>
		    <div class="fig-title">Portfolio Efficient Frontier: Effect of Adding a Grid Allocation</div>
		    <div class="fig-subtitle">Sensitivity analysis framework &mdash; not a performance guarantee &nbsp;&bull;&nbsp; Advisor&rsquo;s own return-assumption modeling tool</div>
		  </div>
		  <div class="fig-body">
		    <div class="legend">
		      <div class="legend-item">
		        <div class="legend-line" style="background:#4A6FA5;"></div>
		        <div>Traditional 60/40<br><span style="color:#7A7060; font-size:10px;">SPY / GLD / AGG only</span></div>
		      </div>
		      <div class="legend-item">
		        <div class="legend-line dashed"></div>
		        <div>60/40 + 20% Grid (full history)<br><span style="color:#7A7060; font-size:10px;">Incl. 2018 &amp; 2022 bear years</span></div>
		      </div>
		      <div class="legend-item">
		        <div class="legend-line" style="background:#C8973A; height:3px;"></div>
		        <div>60/40 + 20% Grid (FIS-gated)<br><span style="color:#7A7060; font-size:10px;">Conditional forward scenario</span></div>
		      </div>
		    </div>
		    <div class="chart-outer">
		      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 880 500" width="100%"
		           style="display:block; overflow:visible;" role="img"
		           aria-label="Efficient frontier chart showing three portfolio curves on risk vs return axes">
		        <defs>
		          <pattern id="b1-hgrid" width="880" height="50" patternUnits="userSpaceOnUse">
		            <line x1="0" y1="50" x2="880" y2="50" stroke="#EAE4D8" stroke-width="0.6"/>
		          </pattern>
		          <pattern id="b1-vgrid" width="66" height="500" patternUnits="userSpaceOnUse" patternTransform="translate(72,0)">
		            <line x1="0" y1="0" x2="0" y2="500" stroke="#EAE4D8" stroke-width="0.6"/>
		          </pattern>
		        </defs>
		        <rect x="72" y="30" width="748" height="430" fill="#FDFAF5"/>
		        <rect x="72" y="30" width="748" height="430" fill="url(#b1-hgrid)"/>
		        <rect x="72" y="30" width="748" height="430" fill="url(#b1-vgrid)"/>
		        <line x1="72" y1="460" x2="820" y2="460" stroke="#142848" stroke-width="1.5"/>
		        <line x1="72" y1="30"  x2="72"  y2="460" stroke="#142848" stroke-width="1.5"/>
		        <text x="72"    y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">6%</text>
		        <text x="165"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">8%</text>
		        <text x="259"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">10%</text>
		        <text x="352"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">12%</text>
		        <text x="446"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">14%</text>
		        <text x="539"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">16%</text>
		        <text x="633"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">18%</text>
		        <text x="727"   y="476" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">20%</text>
		        <text x="446" y="494" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="11" fill="#142848">Risk (Annualized Std Dev, %)</text>
		        <text x="66" y="464" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">2%</text>
		        <text x="66" y="402" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">4%</text>
		        <text x="66" y="340" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">6%</text>
		        <text x="66" y="279" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">8%</text>
		        <text x="66" y="218" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">10%</text>
		        <text x="66" y="156" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">12%</text>
		        <text x="66" y="95"  text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">14%</text>
		        <text x="66" y="34"  text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">16%</text>
		        <text transform="translate(20,245) rotate(-90)" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="11" fill="#142848">Return (Annualized, %)</text>
		        <!-- Curve 3: FIS-Gated (ochre) -->
		        <path d="M 118 337 C 140 315, 165 295, 235 264 C 280 247, 350 224, 399 208 C 450 192, 490 185, 586 178 C 632 174, 655 171, 679 171 L 679 460 L 118 460 Z"
		              fill="#C8973A" fill-opacity="0.07"/>
		        <path d="M 118 337 C 140 315, 165 295, 235 264 C 280 247, 350 224, 399 208 C 450 192, 490 185, 586 178 C 632 174, 655 171, 679 171"
		              fill="none" stroke="#C8973A" stroke-width="2.8" stroke-linecap="round" stroke-linejoin="round"/>
		        <!-- Curve 1: Traditional 60/40 (navy) -->
		        <path d="M 165 353 C 185 335, 230 312, 259 306 C 290 298, 330 282, 352 273 C 400 254, 450 244, 539 239 C 580 236, 608 232, 633 230 C 660 228, 695 225, 727 224"
		              fill="none" stroke="#4A6FA5" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
		        <!-- Curve 2: Full-history grid (dashed) -->
		        <path d="M 142 368 C 162 350, 205 328, 235 322 C 265 316, 300 303, 306 297 C 350 285, 395 280, 399 282 C 445 276, 488 275, 492 276 C 540 276, 580 278, 586 276 C 625 276, 655 280, 679 282"
		              fill="none" stroke="#6B8FB8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="7 4"/>
		        <!-- Reference point: Traditional 60/40 at (12%, 7%) -->
		        <circle cx="352" cy="306" r="6" fill="#4A6FA5" stroke="#FFFFFF" stroke-width="2"/>
		        <line x1="352" y1="300" x2="352" y2="270" stroke="#4A6FA5" stroke-width="1" stroke-dasharray="3 2"/>
		        <rect x="286" y="240" width="134" height="28" rx="3" fill="#F9F6EF" stroke="#4A6FA5" stroke-width="1"/>
		        <text x="353" y="252" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#142848" font-weight="700">Reference: 60/40</text>
		        <text x="353" y="264" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#4A6FA5">Risk 12% / Return 7%</text>
		        <!-- FIS improvement arrow -->
		        <line x1="370" y1="306" x2="370" y2="240" stroke="#C8973A" stroke-width="1.2" stroke-dasharray="3 2"/>
		        <text x="374" y="278" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#8B5E10" font-weight="700">+~2.3pp return</text>
		        <text x="374" y="289" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#8B5E10">at equal risk</text>
		        <polygon points="370,237 366,247 374,247" fill="#C8973A"/>
		        <!-- Curve labels -->
		        <text x="732" y="220" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#4A6FA5" font-weight="700">Traditional</text>
		        <text x="732" y="233" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#4A6FA5">60/40</text>
		        <text x="684" y="272" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#6B8FB8">Full history</text>
		        <text x="684" y="284" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#6B8FB8">(incl. 2018, 2022)</text>
		        <text x="684" y="162" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10.5" fill="#8B5E10" font-weight="700">FIS-Gated</text>
		        <text x="684" y="175" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10">Conditional</text>
		        <!-- Correlation callout -->
		        <rect x="78" y="38" width="296" height="80" rx="4" fill="#FFF8ED" stroke="#C8973A" stroke-width="1.2"/>
		        <rect x="78" y="38" width="4" height="80" rx="2" fill="#C8973A"/>
		        <text x="90" y="53" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#8B5E10" font-weight="700" letter-spacing="0.05em">CORRELATION CAVEAT</text>
		        <text x="90" y="67" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#142848">Grid &amp; SPY: &#x3C1; &#x2248; 0.02 (full history)</text>
		        <text x="90" y="81" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B3A10" font-weight="700">&#x3C1; &#x2248; +0.76 in loss years (2018, 2022)</text>
		        <text x="90" y="95" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#142848">Grid &amp; AGG: &#x3C1; &#x2248; 0.21</text>
		        <text x="90" y="109" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#7A7060">Diversification benefit is conditional on regime</text>
		        <!-- Sharpe callout -->
		        <rect x="580" y="38" width="224" height="52" rx="4" fill="#EBF2F8" stroke="#4A6FA5" stroke-width="1"/>
		        <text x="692" y="54" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#2A4F80" font-weight="700">CONDITIONAL SCENARIO</text>
		        <text x="692" y="68" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#142848">Grid CAGR assumption: +8%</text>
		        <text x="692" y="81" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#142848">Sharpe improvement &#x2248; +0.03 units</text>
		      </svg>
		    </div>
		    <div class="caveat-block">
		      <div class="caveat-label">Important: Conditional Diversification</div>
		      The near-zero correlation (&#x3C1; &#x2248; 0.02) that drives the frontier shift holds in ranging/normal market conditions.
		      In loss years (2018, 2022), grid-to-SPY correlation was <strong>&#x3C1; &#x2248; +0.76</strong> &mdash; the diversification benefit
		      largely disappeared precisely when it was most needed. The FIS-gated frontier (ochre curve) represents a conditional forward scenario:
		      it assumes the grid&rsquo;s expected return is modeled at +8% per year, with portfolio volatility reduced to ~34% annualized via regime
		      filtering and asset quality selection. This is a sensitivity analysis tool, not a performance projection.
		    </div>
		  </div>
		  <div class="fig-footer">
		    <div class="footnote">
		      This diagram is a sensitivity analysis framework for advisors&rsquo; own return-assumption modeling. Not a projection or guarantee.
		      All inputs derived from simulated backtesting 2017&ndash;2025 (17 assets, 135 walk-forward test periods). Full-history scenario uses
		      composite CAGR including 2018 (&minus;62.9%) and 2022 (&minus;55.4%) bear years. Conditional scenario models grid return at +8% annualized
		      reflecting mean of positive-return years (2020, 2021, 2024 average ~+11.5%), with volatility reduced to ~34% via FIS and asset quality selection.
		      Correlation estimates based on 9 annual observations; 95% CI &#x2248; &plusmn;0.40. See article disclosures for full methodology.
		    </div>
		    <div class="byline">
		      <strong>YODACOM RESEARCH</strong>
		      yodacom.com/research &bull; 2026
		    </div>
		  </div>
		</div>
		</div>
		</div>
		</FigureExpand>
	</section>

	<!-- ── Section: What This Means for Income-Focused Clients ─────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">What This Means for Income-Focused Clients</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The advisor&rsquo;s client conversation about income in retirement centers on two requirements
			that are notoriously difficult to satisfy simultaneously: generating reliable income and avoiding
			correlated drawdown at the worst possible time.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Covered call overlays address the income requirement. They fail the second requirement
			structurally. Premium income from selling equity calls is correlated with equity market conditions
			&mdash; when markets crash and implied volatility briefly spikes, the premiums look attractive.
			When the market continues to fall and volatility collapses into a grinding bear, future premium
			income declines while the underlying equity position is in drawdown. The income and the risk share
			the same source.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			A grid trading allocation with FIS regime detection addresses the correlation problem. The income
			mechanism is mean-reversion in cryptocurrency price oscillation &mdash; structurally different from
			equity risk. When the FIS filter is active, the strategy steps to cash in trending markets, which
			are typically the same markets creating equity drawdowns. The client does not receive income in
			those periods, but neither do they experience the correlated drawdown that an equity-linked income
			strategy would generate.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The honest framing for clients, which advisors should use precisely: the grid strategy will also
			experience drawdowns, particularly in severe crypto bear markets that coincide with broad risk-off
			events. 2018 and 2022 demonstrate this. The strategy is not uncorrelated with equity losses in
			every scenario &mdash; it has its own distinct risk of meaningful drawdown. The correlation
			advantage exists in normal-to-moderately stressed conditions. In extreme risk-off environments,
			correlations tend to rise across all assets including crypto.
		</p>

		<!-- Figure 3: Return Dispersion -->
		<FigureExpand label="Expand Figure 3 — Return Dispersion">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .fig-b1-3 * { box-sizing: border-box; }
		  .fig-b1-3 .figure-shell {
		    width: 100%; background: #FFFFFF;
		    border: 1px solid #D6CFC0; border-top: 4px solid #142848;
		  }
		  .fig-b1-3 .fig-header { background: #142848; padding: 28px 36px 22px; }
		  .fig-b1-3 .fig-eyebrow {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; font-weight: 700;
		    letter-spacing: 0.16em; text-transform: uppercase; color: #C8973A; margin-bottom: 8px;
		  }
		  .fig-b1-3 .fig-title {
		    font-family: Georgia, serif; font-size: 20px; font-weight: normal;
		    color: #F9F6EF; line-height: 1.35; margin-bottom: 6px;
		  }
		  .fig-b1-3 .fig-subtitle {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 12px;
		    color: #8FA8C8; line-height: 1.5;
		  }
		  .fig-b1-3 .fig-body { padding: 32px 36px 20px; }
		  .fig-b1-3 .panel-row {
		    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-bottom: 0;
		  }
		  .fig-b1-3 .panel-label {
		    text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif;
		    font-size: 11px; font-weight: 700; letter-spacing: 0.06em;
		    text-transform: uppercase; margin-bottom: 6px;
		  }
		  .fig-b1-3 .panel-label.l1 { color: #142848; }
		  .fig-b1-3 .panel-label.l2 { color: #3A6090; }
		  .fig-b1-3 .panel-label.l3 { color: #8B5E10; }
		  .fig-b1-3 .panel-sublabel {
		    text-align: center; font-family: 'Helvetica Neue', Arial, sans-serif;
		    font-size: 10px; color: #7A7060; margin-bottom: 12px; line-height: 1.4;
		  }
		  .fig-b1-3 .chart-outer { width: 100%; overflow: visible; }
		  .fig-b1-3 .stats-strip {
		    display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 24px; margin-top: 16px;
		  }
		  .fig-b1-3 .stats-card {
		    background: #F4EFE4; border: 1px solid #D6CFC0; border-radius: 4px;
		    padding: 12px 14px; font-family: 'Helvetica Neue', Arial, sans-serif;
		  }
		  .fig-b1-3 .stats-row {
		    display: flex; justify-content: space-between; align-items: baseline;
		    margin-bottom: 4px; font-size: 10.5px; color: #142848;
		  }
		  .fig-b1-3 .stats-row:last-child { margin-bottom: 0; }
		  .fig-b1-3 .stats-row .label { color: #7A7060; }
		  .fig-b1-3 .stats-row .value { font-weight: 700; font-size: 11.5px; }
		  .fig-b1-3 .stats-row .value.neg { color: #8B2010; }
		  .fig-b1-3 .stats-row .value.pos { color: #1A6B3A; }
		  .fig-b1-3 .stats-row .value.zero { color: #8B5E10; }
		  .fig-b1-3 .reduction-section {
		    margin-top: 24px; padding: 16px 18px; background: #142848; border-radius: 4px;
		  }
		  .fig-b1-3 .reduction-title {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px; font-weight: 700;
		    letter-spacing: 0.12em; text-transform: uppercase; color: #C8973A; margin-bottom: 14px;
		  }
		  .fig-b1-3 .reduction-bars { display: flex; flex-direction: column; gap: 10px; }
		  .fig-b1-3 .reduction-bar-row { display: flex; align-items: center; gap: 12px; }
		  .fig-b1-3 .r-label {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px;
		    color: #8FA8C8; width: 180px; flex-shrink: 0;
		  }
		  .fig-b1-3 .r-bar-outer {
		    flex: 1; height: 18px; background: #0D1F3C; border-radius: 2px;
		    position: relative; overflow: hidden;
		  }
		  .fig-b1-3 .r-bar-fill {
		    height: 100%; border-radius: 2px; display: flex; align-items: center; padding-left: 8px;
		  }
		  .fig-b1-3 .r-bar-value {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10.5px;
		    font-weight: 700; color: #FFFFFF; white-space: nowrap;
		  }
		  .fig-b1-3 .r-pct {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #5A8FC8; margin-left: 8px; flex-shrink: 0; width: 60px;
		  }
		  .fig-b1-3 .fig-footer {
		    padding: 16px 36px 20px; border-top: 1px solid #E8E2D6;
		    display: flex; justify-content: space-between; align-items: flex-start; gap: 20px;
		  }
		  .fig-b1-3 .footnote {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #7A7060; line-height: 1.55; max-width: 740px;
		  }
		  .fig-b1-3 .byline {
		    font-family: 'Helvetica Neue', Arial, sans-serif; font-size: 10px;
		    color: #A09070; text-align: right; white-space: nowrap; line-height: 1.5; flex-shrink: 0;
		  }
		  .fig-b1-3 .byline strong { display: block; color: #142848; font-size: 11px; letter-spacing: 0.04em; }
		</style>
		<div class="fig-b1-3">
		<div class="figure-shell">
		  <div class="fig-header">
		    <div class="fig-eyebrow">Fig. 3 &nbsp;&mdash;&nbsp; Yodacom Research &nbsp;|&nbsp; FIS Advisor Article B1 &nbsp;|&nbsp; 2026</div>
		    <div class="fig-title">Progressive Narrowing of Return Distribution: CoinRoc&rsquo;s Three-Layer System</div>
		    <div class="fig-subtitle">Annual return distribution across 135 walk-forward test periods, 17 assets, 2017&ndash;2025 &nbsp;&bull;&nbsp; Each panel: box plot with individual fold markers</div>
		  </div>
		  <div class="fig-body">
		    <div class="panel-row">
		      <div>
		        <div class="panel-label l1">Layer 1: Always-On Grid</div>
		        <div class="panel-sublabel">No regime filter &bull; Full exposure<br>at all times</div>
		      </div>
		      <div>
		        <div class="panel-label l2">Layer 2: FIS-Gated Grid</div>
		        <div class="panel-sublabel">Regime filter active &bull; Cash in<br>defensive periods</div>
		      </div>
		      <div>
		        <div class="panel-label l3">Layer 3: Full CoinRoc System</div>
		        <div class="panel-sublabel">FIS + asset quality selection<br>(B&minus; or higher rated assets only)</div>
		      </div>
		    </div>
		    <div class="chart-outer">
		      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 968 420" width="100%"
		           style="display:block; overflow:visible;" role="img"
		           aria-label="Three-panel box plot chart showing progressive narrowing of annual return distribution across CoinRoc's three system layers">
		        <defs>
		          <clipPath id="b1-clip1"><rect x="0"   y="0" width="300" height="420"/></clipPath>
		          <clipPath id="b1-clip2"><rect x="330" y="0" width="300" height="420"/></clipPath>
		          <clipPath id="b1-clip3"><rect x="660" y="0" width="300" height="420"/></clipPath>
		        </defs>
		        <!-- Panel backgrounds -->
		        <rect x="0"   y="12" width="300" height="392" fill="#FAFAF8" rx="3"/>
		        <rect x="330" y="12" width="300" height="392" fill="#F8FAFC" rx="3"/>
		        <rect x="660" y="12" width="300" height="392" fill="#FFFAED" rx="3"/>
		        <!-- Horizontal grid lines -->
		        <line x1="0" y1="239" x2="960" y2="239" stroke="#E2DAD0" stroke-width="0.5"/>
		        <line x1="0" y1="271" x2="960" y2="271" stroke="#E2DAD0" stroke-width="0.5"/>
		        <line x1="0" y1="302" x2="960" y2="302" stroke="#B8AD9A" stroke-width="1" stroke-dasharray="5 3"/>
		        <line x1="0" y1="333" x2="960" y2="333" stroke="#E2DAD0" stroke-width="0.5"/>
		        <line x1="0" y1="364" x2="960" y2="364" stroke="#E2DAD0" stroke-width="0.5"/>
		        <line x1="0" y1="396" x2="960" y2="396" stroke="#E2DAD0" stroke-width="0.5"/>
		        <!-- Y axis labels -->
		        <text x="-4" y="243" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">+20%</text>
		        <text x="-4" y="275" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">+10%</text>
		        <text x="-4" y="306" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9.5" fill="#142848" font-weight="700">0%</text>
		        <text x="-4" y="337" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">-10%</text>
		        <text x="-4" y="368" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">-20%</text>
		        <text x="-4" y="400" text-anchor="end" font-family="'Helvetica Neue',Arial,sans-serif" font-size="9" fill="#7A7060">-30%</text>
		        <text transform="translate(-42,220) rotate(-90)" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#142848">Annual Return (%)</text>
		        <!-- Panel 1: Always-On (Navy) -->
		        <line x1="150" y1="255" x2="150" y2="271" stroke="#142848" stroke-width="1.5"/>
		        <line x1="138" y1="255" x2="162" y2="255" stroke="#142848" stroke-width="1.5"/>
		        <rect x="110" y="271" width="80" height="129" rx="2" fill="#142848" fill-opacity="0.15" stroke="#142848" stroke-width="1.8"/>
		        <line x1="110" y1="293" x2="190" y2="293" stroke="#142848" stroke-width="2.5"/>
		        <text x="150" y="336" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="13" fill="#142848" font-weight="700">&#215;</text>
		        <line x1="150" y1="400" x2="150" y2="404" stroke="#142848" stroke-width="1.5" stroke-dasharray="3 2"/>
		        <line x1="142" y1="404" x2="158" y2="404" stroke="#8B2010" stroke-width="1.5" stroke-dasharray="2 2"/>
		        <rect x="86" y="392" width="128" height="22" rx="2" fill="#FFF0EE" stroke="#C84030" stroke-width="1"/>
		        <text x="150" y="407" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B2010" font-weight="700">Worst: -82% (ADA 2022)</text>
		        <circle cx="142" cy="264" r="2.5" fill="#142848" fill-opacity="0.4"/>
		        <circle cx="158" cy="259" r="2.5" fill="#142848" fill-opacity="0.4"/>
		        <circle cx="148" cy="268" r="2.5" fill="#142848" fill-opacity="0.4"/>
		        <circle cx="155" cy="275" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="140" cy="281" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="162" cy="285" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="145" cy="289" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="157" cy="296" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="143" cy="304" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="160" cy="312" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="138" cy="320" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="155" cy="330" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="147" cy="342" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="163" cy="356" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="140" cy="370" r="2" fill="#142848" fill-opacity="0.35"/>
		        <circle cx="153" cy="385" r="2" fill="#142848" fill-opacity="0.3"/>
		        <line x1="300" y1="12" x2="300" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <line x1="330" y1="12" x2="330" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <!-- Panel 2: FIS-Gated (Slate Blue) -->
		        <line x1="480" y1="255" x2="480" y2="271" stroke="#3A6090" stroke-width="1.5"/>
		        <line x1="468" y1="255" x2="492" y2="255" stroke="#3A6090" stroke-width="1.5"/>
		        <rect x="440" y="271" width="80" height="106" rx="2" fill="#3A6090" fill-opacity="0.13" stroke="#3A6090" stroke-width="1.8"/>
		        <line x1="440" y1="294" x2="520" y2="294" stroke="#3A6090" stroke-width="2.5"/>
		        <text x="480" y="329" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="13" fill="#3A6090" font-weight="700">&#215;</text>
		        <line x1="480" y1="377" x2="480" y2="404" stroke="#3A6090" stroke-width="1.5"/>
		        <line x1="468" y1="404" x2="492" y2="404" stroke="#3A6090" stroke-width="1.5" stroke-dasharray="2 2"/>
		        <rect x="416" y="392" width="128" height="22" rx="2" fill="#EEF4FB" stroke="#3A6090" stroke-width="1"/>
		        <text x="480" y="407" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#3A6090" font-weight="700">Worst: ~-38% (non-def.)</text>
		        <rect x="450" y="294" width="60" height="10" rx="2" fill="#C8973A" fill-opacity="0.25" stroke="#C8973A" stroke-width="0.8" stroke-dasharray="3 2"/>
		        <text x="480" y="322" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="8.5" fill="#8B5E10">47 periods &#8594; 0%</text>
		        <line x1="480" y1="318" x2="480" y2="305" stroke="#8B5E10" stroke-width="0.8"/>
		        <circle cx="472" cy="264" r="2.5" fill="#3A6090" fill-opacity="0.4"/>
		        <circle cx="488" cy="260" r="2.5" fill="#3A6090" fill-opacity="0.4"/>
		        <circle cx="475" cy="270" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="485" cy="276" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="470" cy="283" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="490" cy="290" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="478" cy="297" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="485" cy="306" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="472" cy="315" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="488" cy="326" r="2" fill="#3A6090" fill-opacity="0.35"/>
		        <circle cx="474" cy="340" r="2" fill="#3A6090" fill-opacity="0.3"/>
		        <circle cx="487" cy="355" r="2" fill="#3A6090" fill-opacity="0.3"/>
		        <circle cx="473" cy="370" r="2" fill="#3A6090" fill-opacity="0.3"/>
		        <line x1="630" y1="12" x2="630" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <line x1="660" y1="12" x2="660" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <!-- Panel 3: Full CoinRoc System (Ochre) -->
		        <line x1="810" y1="264" x2="810" y2="271" stroke="#8B5E10" stroke-width="1.5"/>
		        <line x1="798" y1="264" x2="822" y2="264" stroke="#8B5E10" stroke-width="1.5"/>
		        <rect x="770" y="271" width="80" height="69" rx="2" fill="#C8973A" fill-opacity="0.15" stroke="#C8973A" stroke-width="2"/>
		        <line x1="770" y1="286" x2="850" y2="286" stroke="#8B5E10" stroke-width="2.5"/>
		        <text x="810" y="316" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="13" fill="#8B5E10" font-weight="700">&#215;</text>
		        <line x1="810" y1="340" x2="810" y2="371" stroke="#8B5E10" stroke-width="1.5"/>
		        <line x1="798" y1="371" x2="822" y2="371" stroke="#8B5E10" stroke-width="1.5"/>
		        <rect x="746" y="374" width="128" height="22" rx="2" fill="#FFFAED" stroke="#C8973A" stroke-width="1"/>
		        <text x="810" y="389" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#8B5E10" font-weight="700">Worst: ~-22% (est.)</text>
		        <circle cx="800" cy="270" r="2.5" fill="#8B5E10" fill-opacity="0.4"/>
		        <circle cx="820" cy="265" r="2.5" fill="#8B5E10" fill-opacity="0.4"/>
		        <circle cx="807" cy="275" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="816" cy="281" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="803" cy="288" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="818" cy="294" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="804" cy="302" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="816" cy="310" r="2" fill="#8B5E10" fill-opacity="0.35"/>
		        <circle cx="802" cy="320" r="2" fill="#8B5E10" fill-opacity="0.3"/>
		        <circle cx="818" cy="330" r="2" fill="#8B5E10" fill-opacity="0.3"/>
		        <circle cx="806" cy="342" r="2" fill="#8B5E10" fill-opacity="0.3"/>
		        <circle cx="815" cy="354" r="2" fill="#8B5E10" fill-opacity="0.25"/>
		        <line x1="960" y1="12" x2="960" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <line x1="0" y1="12"  x2="960" y2="12"  stroke="#D6CFC0" stroke-width="1"/>
		        <line x1="0" y1="404" x2="960" y2="404" stroke="#D6CFC0" stroke-width="1"/>
		        <text x="400" y="418" text-anchor="middle" font-family="'Helvetica Neue',Arial,sans-serif" font-size="10" fill="#7A7060">
		          &#215; = Mean annual return &nbsp;&nbsp; &#9644; = Median &nbsp;&nbsp; Box = interquartile range (Q1&ndash;Q3) &nbsp;&nbsp; Whiskers = distribution extent
		        </text>
		      </svg>
		    </div>
		    <!-- Stats strip -->
		    <div class="stats-strip">
		      <div class="stats-card" style="border-top:3px solid #142848;">
		        <div class="stats-row"><span class="label">Mean annual return</span><span class="value neg">-9.5%</span></div>
		        <div class="stats-row"><span class="label">Annualized vol (std dev)</span><span class="value">44%</span></div>
		        <div class="stats-row"><span class="label">Worst period</span><span class="value neg">-82% (ADA 2022)</span></div>
		        <div class="stats-row"><span class="label">Best period</span><span class="value pos">+15% (BTC 2016)</span></div>
		      </div>
		      <div class="stats-card" style="border-top:3px solid #3A6090;">
		        <div class="stats-row"><span class="label">Mean annual return</span><span class="value neg">-7.3%</span></div>
		        <div class="stats-row"><span class="label">Annualized vol (std dev)</span><span class="value">38%</span></div>
		        <div class="stats-row"><span class="label">Defensive periods</span><span class="value zero">47 of 135 &#8594; 0%</span></div>
		        <div class="stats-row"><span class="label">Mean improvement vs L1</span><span class="value pos">+2.2pp mean</span></div>
		      </div>
		      <div class="stats-card" style="border-top:3px solid #C8973A;">
		        <div class="stats-row"><span class="label">Mean annual return</span><span class="value neg">~-3.1%</span></div>
		        <div class="stats-row"><span class="label">Annualized vol (std dev)</span><span class="value">~34%</span></div>
		        <div class="stats-row"><span class="label">Vol reduction vs L1</span><span class="value pos">~23% reduction</span></div>
		        <div class="stats-row"><span class="label">Mean improvement vs L1</span><span class="value pos">+6.4pp mean</span></div>
		      </div>
		    </div>
		    <!-- Std dev reduction -->
		    <div class="reduction-section">
		      <div class="reduction-title">Standard Deviation Reduction &mdash; Progressive Risk Narrowing</div>
		      <div class="reduction-bars">
		        <div class="reduction-bar-row">
		          <div class="r-label">Layer 1: Always-On Grid</div>
		          <div class="r-bar-outer">
		            <div class="r-bar-fill" style="width:100%; background:#142848;">
		              <span class="r-bar-value">44% annualized</span>
		            </div>
		          </div>
		          <div class="r-pct" style="color:#8FA8C8;">Baseline</div>
		        </div>
		        <div class="reduction-bar-row">
		          <div class="r-label">Layer 2: FIS-Gated</div>
		          <div class="r-bar-outer">
		            <div class="r-bar-fill" style="width:86.4%; background:#3A6090;">
		              <span class="r-bar-value">38% annualized</span>
		            </div>
		          </div>
		          <div class="r-pct">&minus;13.6%</div>
		        </div>
		        <div class="reduction-bar-row">
		          <div class="r-label">Layer 3: Full CoinRoc System</div>
		          <div class="r-bar-outer">
		            <div class="r-bar-fill" style="width:77.3%; background:#8B5E10;">
		              <span class="r-bar-value">~34% annualized</span>
		            </div>
		          </div>
		          <div class="r-pct">&minus;22.7%</div>
		        </div>
		      </div>
		    </div>
		  </div>
		  <div class="fig-footer">
		    <div class="footnote">
		      Distribution based on simulated 2017&ndash;2025 walk-forward data (135 valid periods, 17 assets). Layer 1: AdaptiveGrid v3DynamicMode, no filter. Layer 2: FIS&trade; regime gating applied (47/135 periods classified defensive, capital held in cash). Layer 3: FIS&trade; + CoinRoc proprietary GSI&trade;/CSI&trade; asset quality selection (B&minus; rated or higher assets only). Layer 2 and Layer 3 statistics include estimation for regime-filtered periods not individually stored in the walk-forward output; values marked &ldquo;~&rdquo; are bounded approximations based on simulation assumptions. Asset selection reflects pre-specified universe; survivorship bias may affect results. Past simulation does not guarantee future results. Box plots show IQR (Q1&ndash;Q3), median, and distribution extent. Mean shown as (&times;). Worst-period values shown for informational context.
		    </div>
		    <div class="byline">
		      <strong>YODACOM RESEARCH</strong>
		      yodacom.com/research &bull; 2026
		    </div>
		  </div>
		</div>
		</div>
		</div>
		</FigureExpand>

		<p class="text-base leading-relaxed text-slate">
			What the data supports: for the portion of a client&rsquo;s income allocation currently served by
			covered calls, preferred shares, or bond substitutes with meaningful equity correlation &mdash;
			particularly for near-retirees and retirees whose recovery timeline from a drawdown is short
			&mdash; a small allocation to a near-zero-correlation income strategy with an active regime filter
			is a structurally sound portfolio construction argument. Not because the returns are higher.
			Because the correlation profile is different.
		</p>
	</section>

	<!-- ── Section: The Fiduciary Case ──────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">The Fiduciary Case</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			A fiduciary asks one question before recommending any allocation: does adding this improve my
			client&rsquo;s risk-adjusted outcome?
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The data from eight years of simulation across 17 crypto assets provides a careful answer. In
			favorable market conditions &mdash; ranging markets where the grid executes actively &mdash; the
			strategy generates realized income consistent with the grid&rsquo;s historical income in positive
			test years. In positive test periods, grid income ranged from 0.6% to 23.3%, with a mean of 10.5%
			and a median of 9.3%. The near-zero correlation with US equities is a genuine property of the
			return mechanism, not a statistical artifact. The FIS regime filter demonstrably removes the worst
			tail outcomes in the simulation data &mdash; as illustrated by ETH 2018, where a trending
			classification (Hurst 0.605) converted a 61.6% always-on loss to a 0% cash-hold period.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The honest limitations: all performance figures are from simulated backtesting, not live trading.
			Eight years of data is a relatively short history, and the two worst years in that period &mdash;
			2018 and 2022 &mdash; disproportionately penalize the long-run statistics. The portfolio
			diversification benefit is conditional on the grid generating positive returns, which requires
			favorable ranging market conditions. In severe crypto bear markets, the strategy can experience
			substantial losses even with the FIS filter, because FIS classifies regime signals in real time
			and cannot perfectly gate every defensive period before losses occur.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			For a qualified portion of a client&rsquo;s income allocation &mdash; sized appropriately,
			disclosed fully, and paired with a clear explanation of the conditional nature of the benefit
			&mdash; the portfolio construction case is legitimate and data-backed. The appropriate allocation
			for most income-focused clients would be in the single digits to low double digits as a percentage
			of total income allocation, not a portfolio anchor.
		</p>

		<div class="mb-5 border border-rule bg-paper p-6">
			<p class="text-base italic leading-relaxed text-slate">
				&ldquo;This strategy earns income from a different mechanism than your other income assets. Its
				returns move independently of stocks. And it has a filter that moves it to cash when market
				conditions become unfavorable. We added a small allocation to reduce the overall correlation of
				your income profile.&rdquo;
			</p>
			<p class="mt-3 text-xs text-slate-light">
				That is a structurally defensible framing &mdash; provided the allocation is sized appropriately
				and the full limitation set is disclosed to the client.
			</p>
		</div>

		<p class="text-base leading-relaxed text-slate">
			CoinRoc is currently in pre-launch development; the system described in this article is not yet
			available for advisor or client use.
		</p>
	</section>

	<!-- ── Byline ────────────────────────────────────────────────────── -->
	<p class="mb-3 text-sm italic text-slate">
		For advisors who want to explore the underlying methodology, CoinRoc&rsquo;s research documentation
		is available at yodacom.com. The walk-forward simulation methodology, cost assumptions, and regime
		classification logic are published in full.
	</p>

	<!-- ── Series footer ─────────────────────────────────────────────── -->
	<div class="my-10 border-t border-rule pt-8">
		<div class="eyebrow mb-4">About this series</div>
		<p class="mb-4 text-sm leading-relaxed text-slate">
			This is the third paper in the Yodacom Research series on systematic grid trading.
		</p>
		<ul class="space-y-3 text-sm text-slate">
			<li>
				<a href="/research/grid-trading-walk-forward-2026" class="group font-semibold text-navy-deep hover:text-navy transition">
					Paper 1 &mdash; Intelligent Grid Trading: What 13 Years of Crypto Data Actually Shows
				</a>
				<div class="text-xs text-slate-light">yodacom.com/research/grid-trading-walk-forward-2026</div>
			</li>
			<li>
				<a href="/research/grid-vs-options-2026" class="group font-semibold text-navy-deep hover:text-navy transition">
					Paper 2 &mdash; Crypto Grid Trading vs. Options for Income: An Honest Comparison
				</a>
				<div class="text-xs text-slate-light">yodacom.com/research/grid-vs-options-2026</div>
			</li>
		</ul>
	</div>

	<!-- ── Important Disclosures ─────────────────────────────────────── -->
	<section class="mt-12 border-t border-rule pt-10">
		<div class="eyebrow mb-4">Important Disclosures</div>

		<div class="space-y-4 text-xs leading-relaxed text-slate">
			<p>
				All performance figures referenced in this article are derived from simulated backtesting
				conducted by Yodacom Research. Backtested results are hypothetical and do not represent actual
				trading results. Past simulated performance does not guarantee future results.
			</p>
			<p>
				The walk-forward simulation covers the period 2017 through 2025 across 17 pre-selected
				cryptocurrency assets using historical price data. Results are net of estimated retail exchange
				fees (0.40% maker / 0.60% taker / 0.05% volatility-conditional slippage) based on Binance US
				retail tier pricing. Actual exchange costs, execution quality, and partial fill rates may differ
				materially from simulation assumptions.
			</p>
			<p>
				All performance figures are subject to the inherent limitations of backtesting, including but
				not limited to: survivorship bias in asset selection, in-sample optimization risk, look-ahead
				bias in regime classification, and the inability of historical simulation to capture live
				trading conditions including market impact, liquidity constraints, and technology execution
				risk.
			</p>
			<p>
				Correlation estimates are derived from nine annual observations (2017 through 2025). Correlation
				estimates based on small samples carry wide confidence intervals; the 95% confidence interval on
				the SPY correlation estimate is approximately plus or minus 0.40. These estimates are
				directionally informative and should not be treated as statistically precise.
			</p>
			<p>
				The +8% annual return scenario referenced in the portfolio construction section is a
				hypothetical modeling assumption, not a projection or forecast. It reflects the arithmetic mean
				of observed positive-return years in the simulation data (2020, 2021, 2024). No representation
				is made that future returns will equal or approximate this figure.
			</p>
			<p>
				CoinRoc and the FIS, GSI, and CSI systems described in this article are in pre-launch
				development as of the date of publication. This article describes research findings and
				methodology; it does not describe a currently available product or service.
			</p>
			<p>
				This article is for educational and informational purposes only and does not constitute
				investment advice, a recommendation to buy or sell any security or investment product, or a
				solicitation to act. Nothing in this article should be construed as legal, tax, accounting, or
				regulatory advice.
			</p>
			<p>
				CoinRoc indicators &mdash; FIS, GSI, and CSI &mdash; are proprietary systems developed by
				Yodacom Research. FIS, GSI, and CSI are trademarks of Yodacom LLC, trademark registration
				pending with the United States Patent and Trademark Office.
			</p>
			<p>
				Readers should consult a qualified financial professional, investment advisor, and legal counsel
				before making any investment decisions. Grid trading in cryptocurrency markets involves
				substantial risk of loss, including the potential for complete loss of invested capital.
			</p>
		</div>

		<p class="mt-6 text-xs italic text-slate-light">
			Jeremy Black is the founder of Yodacom and CoinRoc. He writes and speaks on systematic income
			strategies and portfolio construction for financial advisors.
		</p>
	</section>

</article>
