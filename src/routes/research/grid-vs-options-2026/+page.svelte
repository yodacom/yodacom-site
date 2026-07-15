<script lang="ts">
  import FigureExpand from '$lib/components/FigureExpand.svelte';
</script>

<svelte:head>
	<title>Crypto Grid Trading vs. Options for Income: An Honest Comparison — Yodacom Research</title>
	<meta property="og:title" content="Crypto Grid Trading vs. Options for Income: An Honest Comparison" />
	<meta property="og:description" content="CoinRoc RXI-gated grid vs. CBOE PUT/BXM options strategies — Sharpe ratio, tail risk, Calmar ratio, capital requirements, and automation feasibility compared. Kessel & Black, Yodacom Research 2026." />
	<meta property="og:image" content="https://yodacom.com/research/grid-vs-options-2026/cover.png" />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:type" content="article" />
	<meta property="og:url" content="https://yodacom.com/research/grid-vs-options-2026" />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Crypto Grid Trading vs. Options for Income: An Honest Comparison" />
	<meta name="twitter:description" content="CoinRoc RXI-gated grid vs. CBOE PUT/BXM options strategies — Sharpe ratio, tail risk, Calmar ratio, capital requirements, and automation feasibility compared. Kessel & Black, Yodacom Research 2026." />
	<meta name="twitter:image" content="https://yodacom.com/research/grid-vs-options-2026/cover.png" />
</svelte:head>

<!-- Cover banner -->
<FigureExpand label="Expand cover figure">
<div class="w-full overflow-x-auto">
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
  <defs>
    <linearGradient id="cb-bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#0a0d14;stop-opacity:1"/>
      <stop offset="50%" style="stop-color:#0f1117;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0c0f18;stop-opacity:1"/>
    </linearGradient>
    <radialGradient id="cb-tealGlow" cx="25%" cy="50%" r="45%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0"/>
    </radialGradient>
    <radialGradient id="cb-amberGlow" cx="75%" cy="50%" r="45%">
      <stop offset="0%" style="stop-color:#f0a020;stop-opacity:0.08"/>
      <stop offset="100%" style="stop-color:#f0a020;stop-opacity:0"/>
    </radialGradient>
    <linearGradient id="cb-leftPanel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0d1f1a;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#0f1117;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="cb-rightPanel" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#0f1117;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#1a1508;stop-opacity:1"/>
    </linearGradient>
    <linearGradient id="cb-tealLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.4"/>
      <stop offset="50%" style="stop-color:#00d4aa;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0.6"/>
    </linearGradient>
    <linearGradient id="cb-amberLine" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#f0a020;stop-opacity:0.4"/>
      <stop offset="50%" style="stop-color:#f0a020;stop-opacity:1"/>
      <stop offset="100%" style="stop-color:#f0a020;stop-opacity:0.6"/>
    </linearGradient>
    <clipPath id="cb-leftClip"><rect x="0" y="0" width="565" height="630"/></clipPath>
    <clipPath id="cb-rightClip"><rect x="635" y="0" width="565" height="630"/></clipPath>
    <linearGradient id="cb-dividerGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0"/>
      <stop offset="20%" style="stop-color:#00d4aa;stop-opacity:0.6"/>
      <stop offset="50%" style="stop-color:#ffffff;stop-opacity:0.9"/>
      <stop offset="80%" style="stop-color:#f0a020;stop-opacity:0.6"/>
      <stop offset="100%" style="stop-color:#f0a020;stop-opacity:0"/>
    </linearGradient>
    <linearGradient id="cb-scaleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.7"/>
      <stop offset="50%" style="stop-color:#8b9ab8;stop-opacity:0.9"/>
      <stop offset="100%" style="stop-color:#f0a020;stop-opacity:0.7"/>
    </linearGradient>
    <linearGradient id="cb-tealArea" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.18"/>
      <stop offset="100%" style="stop-color:#00d4aa;stop-opacity:0.02"/>
    </linearGradient>
    <linearGradient id="cb-amberArea" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" style="stop-color:#f0a020;stop-opacity:0.18"/>
      <stop offset="100%" style="stop-color:#f0a020;stop-opacity:0.02"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#cb-bgGrad)"/>
  <rect width="1200" height="630" fill="url(#cb-tealGlow)"/>
  <rect width="1200" height="630" fill="url(#cb-amberGlow)"/>
  <rect x="0" y="0" width="570" height="630" fill="url(#cb-leftPanel)"/>
  <rect x="0" y="0" width="570" height="630" fill="none" stroke="#00d4aa" stroke-width="0.5" opacity="0.15"/>
  <g clip-path="url(#cb-leftClip)" opacity="0.25">
    <line x1="60" y1="178" x2="540" y2="178" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="208" x2="540" y2="208" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="238" x2="540" y2="238" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="268" x2="540" y2="268" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="298" x2="540" y2="298" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="328" x2="540" y2="328" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="358" x2="540" y2="358" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="388" x2="540" y2="388" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
    <line x1="60" y1="418" x2="540" y2="418" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="4,6"/>
  </g>
  <polygon points="60,380 90,330 120,370 155,280 185,340 215,260 250,320 280,240 315,290 345,210 375,270 405,200 435,255 465,190 500,240 530,200 530,450 60,450" fill="url(#cb-tealArea)" clip-path="url(#cb-leftClip)"/>
  <polyline points="60,380 90,330 120,370 155,280 185,340 215,260 250,320 280,240 315,290 345,210 375,270 405,200 435,255 465,190 500,240 530,200" fill="none" stroke="url(#cb-tealLine)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#cb-leftClip)"/>
  <g clip-path="url(#cb-leftClip)">
    <circle cx="120" cy="370" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="185" cy="340" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="250" cy="320" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="315" cy="290" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="375" cy="270" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="435" cy="255" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="500" cy="240" r="5" fill="none" stroke="#00d4aa" stroke-width="1.8" opacity="0.9"/>
    <circle cx="90" cy="330" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="155" cy="280" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="215" cy="260" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="280" cy="240" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="345" cy="210" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="405" cy="200" r="4" fill="#00d4aa" opacity="0.7"/>
    <circle cx="465" cy="190" r="4" fill="#00d4aa" opacity="0.7"/>
  </g>
  <rect x="50" y="458" width="230" height="26" rx="3" fill="#00d4aa" fill-opacity="0.80" stroke="#00d4aa" stroke-width="1" stroke-opacity="0.9"/>
  <text x="165" y="475" fill="#001a14" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.12em">CRYPTO GRID TRADING</text>
  <text x="60" y="505" fill="#8b949e" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.03em">CoinRoc RXI-gated · 135 walk-forward folds · 2013–2025</text>
  <text x="60" y="520" fill="#8b949e" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10" letter-spacing="0.03em">17 crypto assets · Full automation</text>
  <rect x="630" y="0" width="570" height="630" fill="url(#cb-rightPanel)"/>
  <rect x="630" y="0" width="570" height="630" fill="none" stroke="#f0a020" stroke-width="0.5" opacity="0.15"/>
  <polygon points="650,400 685,385 720,375 755,368 790,360 825,355 860,350 895,342 930,345 965,338 1000,332 1035,325 1075,315 1120,308 1140,305 1140,450 650,450" fill="url(#cb-amberArea)" clip-path="url(#cb-rightClip)"/>
  <polyline points="650,400 685,385 720,375 755,368 790,360 825,355 860,350 895,342 930,345 965,338 1000,332 1035,325 1075,315 1120,308 1140,305" fill="none" stroke="url(#cb-amberLine)" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" clip-path="url(#cb-rightClip)"/>
  <g clip-path="url(#cb-rightClip)" opacity="0.5">
    <rect x="665" y="415" width="14" height="22" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="700" y="418" width="14" height="19" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="735" y="420" width="14" height="17" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="770" y="421" width="14" height="15" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="805" y="422" width="14" height="13" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="840" y="423" width="14" height="10" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="875" y="424" width="14" height="8" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="910" y="425" width="14" height="5" rx="2" fill="#f0a020" opacity="0.55"/>
    <rect x="945" y="425" width="14" height="3" rx="2" fill="#f0a020" opacity="0.55"/>
  </g>
  <text x="800" y="455" fill="#f0a020" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="9.5" text-anchor="middle" letter-spacing="0.06em" clip-path="url(#cb-rightClip)">&#x3B8;  PREMIUM DECAY</text>
  <rect x="920" y="458" width="210" height="26" rx="3" fill="#f0a020" fill-opacity="0.80" stroke="#f0a020" stroke-width="1" stroke-opacity="0.9"/>
  <text x="1025" y="475" fill="#1a1000" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="11" font-weight="700" text-anchor="middle" letter-spacing="0.12em">OPTIONS FOR INCOME</text>
  <text x="650" y="505" fill="#8b949e" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.03em">CBOE BXM/PUT Index · Israelov &amp; Klein · 1986–2025</text>
  <text x="650" y="520" fill="#8b949e" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10" letter-spacing="0.03em">S&amp;P 500 underlying · Partial automation</text>
  <line x1="600" y1="0" x2="600" y2="630" stroke="url(#cb-dividerGrad)" stroke-width="1.2"/>
  <polygon points="600,310 590,330 610,330" fill="#8b9ab8" opacity="0.7"/>
  <rect x="596" y="330" width="8" height="28" rx="2" fill="#8b9ab8" opacity="0.5"/>
  <rect x="582" y="355" width="36" height="5" rx="2" fill="#8b9ab8" opacity="0.4"/>
  <line x1="490" y1="295" x2="710" y2="302" stroke="url(#cb-scaleGrad)" stroke-width="3" stroke-linecap="round" opacity="0.85"/>
  <line x1="490" y1="295" x2="490" y2="310" stroke="#00d4aa" stroke-width="1.5" opacity="0.6"/>
  <ellipse cx="490" cy="316" rx="22" ry="7" fill="#00d4aa" fill-opacity="0.12" stroke="#00d4aa" stroke-width="1" stroke-opacity="0.5"/>
  <line x1="710" y1="302" x2="710" y2="318" stroke="#f0a020" stroke-width="1.5" opacity="0.6"/>
  <ellipse cx="710" cy="325" rx="22" ry="7" fill="#f0a020" fill-opacity="0.12" stroke="#f0a020" stroke-width="1" stroke-opacity="0.5"/>
  <circle cx="600" cy="270" r="24" fill="#0f1117" stroke="#8b9ab8" stroke-width="1.2" stroke-opacity="0.5"/>
  <text x="600" y="276" fill="#c0ccd8" font-family="'Georgia','Times New Roman',serif" font-size="13" font-weight="700" text-anchor="middle" letter-spacing="0.04em">VS</text>
  <rect x="100" y="28" width="1000" height="112" rx="4" fill="#0f1117" fill-opacity="0.85"/>
  <line x1="100" y1="28" x2="1100" y2="28" stroke="#8b9ab8" stroke-width="0.5" opacity="0.3"/>
  <line x1="100" y1="140" x2="1100" y2="140" stroke="#8b9ab8" stroke-width="0.5" opacity="0.3"/>
  <rect x="455" y="38" width="290" height="22" rx="11" fill="#ffffff" fill-opacity="0.06" stroke="#8b9ab8" stroke-width="0.8" stroke-opacity="0.4"/>
  <text x="600" y="53" fill="#8b9ab8" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10" font-weight="600" text-anchor="middle" letter-spacing="0.16em">AN  HONEST  COMPARISON</text>
  <text x="600" y="92" fill="#e8ecf0" font-family="'Georgia','Times New Roman',serif" font-size="28" font-weight="700" text-anchor="middle" letter-spacing="-0.01em">Crypto Grid Trading vs. Options for Income</text>
  <line x1="200" y1="104" x2="1000" y2="104" stroke="#8b9ab8" stroke-width="0.5" opacity="0.25"/>
  <text x="600" y="122" fill="#8b9ab8" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="12" text-anchor="middle" letter-spacing="0.04em">Kessel &amp; Black  ·  Yodacom Research  ·  2026</text>
  <text x="600" y="136" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" text-anchor="middle" letter-spacing="0.06em">Second paper in the systematic income series</text>
  <rect x="0" y="590" width="1200" height="40" fill="#080a10" fill-opacity="0.7"/>
  <line x1="0" y1="590" x2="1200" y2="590" stroke="#8b9ab8" stroke-width="0.5" opacity="0.2"/>
  <text x="40" y="614" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.08em">YODACOM  RESEARCH</text>
  <text x="600" y="614" fill="#3d4554" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="9.5" text-anchor="middle" letter-spacing="0.03em">Hypothetical backtest results. Not investment advice. Past performance not indicative of future results.</text>
  <text x="1160" y="614" fill="#5a6475" font-family="'Inter','Segoe UI',system-ui,sans-serif" font-size="10.5" letter-spacing="0.06em" text-anchor="end">A2  ·  PRE-PRINT  ·  MAY 2026</text>
</svg>
</div>
</FigureExpand>

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
			produce better Sharpe ratios. The objection is correct. We compare CoinRoc&rsquo;s RXI-gated
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

		<!-- Figure 1: Sharpe context -->
		<FigureExpand label="Expand Figure 1 — Sharpe Ratio in Context">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .f1 * { box-sizing: border-box; }
		  .f1 .figure-container {
		    max-width: 100%;
		    background: #161b22;
		    border: 1px solid #30363d;
		    border-radius: 6px;
		    padding: 40px 40px 32px 40px;
		    font-family: 'Inter', 'Segoe UI', system-ui, sans-serif;
		  }
		  .f1 .figure-label {
		    font-size: 11px; font-weight: 600; letter-spacing: 0.12em;
		    text-transform: uppercase; color: #8b949e; margin-bottom: 6px;
		  }
		  .f1 .figure-title {
		    font-size: 19px; font-weight: 700; color: #e6edf3;
		    margin-bottom: 5px; line-height: 1.3;
		  }
		  .f1 .figure-subtitle {
		    font-size: 12.5px; color: #8b949e; line-height: 1.55;
		    margin-bottom: 28px; max-width: 820px;
		  }
		  .f1 .panels-row {
		    display: grid; grid-template-columns: 1fr 1fr; gap: 28px; margin-bottom: 28px;
		  }
		  .f1 .panel {
		    background: #0d1117; border: 1px solid #30363d; border-radius: 6px;
		    padding: 24px 24px 20px 24px;
		  }
		  .f1 .panel-title {
		    font-size: 12px; font-weight: 600; color: #8b949e; letter-spacing: 0.07em;
		    margin-bottom: 18px; padding-bottom: 10px; border-bottom: 1px solid #21262d;
		  }
		  .f1 .panel-title .panel-letter {
		    display: inline-block; width: 20px; height: 20px; background: #21262d;
		    border-radius: 3px; text-align: center; line-height: 20px; font-size: 10px;
		    font-weight: 700; color: #c9d1d9; margin-right: 8px; letter-spacing: 0;
		  }
		  .f1 .illustrative-tag {
		    display: inline-block; background: #f0a02015; border: 1px solid #f0a02040;
		    border-radius: 3px; padding: 2px 7px; font-size: 9px; font-weight: 600;
		    color: #f0a020; letter-spacing: 0.08em; text-transform: uppercase;
		    margin-left: 8px; vertical-align: middle;
		  }
		  .f1 .caption-block {
		    background: #0d1117; border: 1px solid #21262d; border-left: 3px solid #00d4aa;
		    border-radius: 0 4px 4px 0; padding: 14px 18px; font-size: 12px;
		    color: #8b949e; line-height: 1.6; margin-top: 4px;
		  }
		  .f1 .caption-block strong { color: #c9d1d9; font-weight: 600; }
		  .f1 .legend {
		    display: flex; gap: 24px; margin-top: 20px; padding-top: 16px;
		    border-top: 1px solid #21262d; flex-wrap: wrap;
		  }
		  .f1 .legend-item { display: flex; align-items: center; gap: 8px; font-size: 11.5px; color: #8b949e; }
		  .f1 .legend-swatch { width: 14px; height: 14px; border-radius: 2px; flex-shrink: 0; }
		  .f1 .source-line { margin-top: 18px; font-size: 10.5px; color: #484f58; letter-spacing: 0.02em; }
		</style>
		<div class="f1">
		<div class="figure-container">
		  <div class="figure-label">Figure 1  ·  A2  ·  Yodacom Research</div>
		  <div class="figure-title">Sharpe Ratio in Context — The Denominator Problem</div>
		  <div class="figure-subtitle">
		    Panel A shows Sharpe ratios as commonly reported. Panel B illustrates what happens when both strategies are measured on an equal-volatility underlying — the gap narrows substantially. The panels together explain why cross-asset Sharpe comparisons require structural interpretation, not face-value ranking.
		  </div>
		  <div class="panels-row">
		    <div class="panel">
		      <div class="panel-title">
		        <span class="panel-letter">A</span>Sharpe Ratio — As Usually Reported
		      </div>
		      <svg width="100%" viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
		        <defs>
		          <linearGradient id="f1goldBarA" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#f0c040;stop-opacity:1"/>
		            <stop offset="100%" style="stop-color:#c87820;stop-opacity:1"/>
		          </linearGradient>
		          <linearGradient id="f1goldBarB" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#e8b030;stop-opacity:1"/>
		            <stop offset="100%" style="stop-color:#b86c18;stop-opacity:1"/>
		          </linearGradient>
		          <linearGradient id="f1tealBarNeg" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#00c49a;stop-opacity:0.9"/>
		            <stop offset="100%" style="stop-color:#007a60;stop-opacity:0.9"/>
		          </linearGradient>
		        </defs>
		        <line x1="50" y1="60" x2="360" y2="60" stroke="#21262d" stroke-width="0.8"/>
		        <line x1="50" y1="103" x2="360" y2="103" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <line x1="50" y1="132" x2="360" y2="132" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <line x1="50" y1="189" x2="360" y2="189" stroke="#484f58" stroke-width="1.2"/>
		        <line x1="50" y1="232" x2="360" y2="232" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <text x="40" y="64" fill="#8b949e" font-size="10" text-anchor="end">0.9</text>
		        <text x="40" y="107" fill="#8b949e" font-size="10" text-anchor="end">0.6</text>
		        <text x="40" y="136" fill="#8b949e" font-size="10" text-anchor="end">0.4</text>
		        <text x="40" y="193" fill="#8b949e" font-size="10.5" text-anchor="end" font-weight="600">0.0</text>
		        <text x="40" y="236" fill="#8b949e" font-size="10" text-anchor="end">-0.3</text>
		        <text x="362" y="193" fill="#8b949e" font-size="9.5" fill-opacity="0.7">zero</text>
		        <text x="12" y="145" fill="#8b949e" font-size="10" text-anchor="middle" transform="rotate(-90, 12, 145)" letter-spacing="0.06em">SHARPE RATIO</text>
		        <rect x="70" y="98" width="72" height="91" rx="3" fill="url(#f1goldBarA)"/>
		        <text x="106" y="90" fill="#f0c040" font-size="12" font-weight="700" text-anchor="middle">0.64</text>
		        <text x="106" y="203" fill="#c9d1d9" font-size="10" text-anchor="middle" font-weight="600">CBOE PUT</text>
		        <text x="106" y="215" fill="#8b949e" font-size="9" text-anchor="middle">Index</text>
		        <text x="106" y="226" fill="#8b949e" font-size="9" text-anchor="middle">1986–2025</text>
		        <rect x="160" y="106" width="72" height="83" rx="3" fill="url(#f1goldBarB)"/>
		        <text x="196" y="98" fill="#e8b030" font-size="12" font-weight="700" text-anchor="middle">0.58</text>
		        <text x="196" y="203" fill="#c9d1d9" font-size="10" text-anchor="middle" font-weight="600">CBOE BXM</text>
		        <text x="196" y="215" fill="#8b949e" font-size="9" text-anchor="middle">BuyWrite</text>
		        <text x="196" y="226" fill="#8b949e" font-size="9" text-anchor="middle">1986–2025</text>
		        <rect x="252" y="189" width="72" height="43" rx="3" fill="url(#f1tealBarNeg)"/>
		        <text x="288" y="183" fill="#00d4aa" font-size="12" font-weight="700" text-anchor="middle">&#x2212;0.303</text>
		        <text x="288" y="248" fill="#c9d1d9" font-size="10" text-anchor="middle" font-weight="600">CoinRoc Grid</text>
		        <text x="288" y="259" fill="#8b949e" font-size="9" text-anchor="middle">RXI-gated median</text>
		        <rect x="50" y="189" width="310" height="43" fill="#ff4d4d" fill-opacity="0.04" rx="0"/>
		      </svg>
		    </div>
		    <div class="panel">
		      <div class="panel-title">
		        <span class="panel-letter">B</span>Sharpe — Normalized for Underlying Volatility
		        <span class="illustrative-tag">Illustrative</span>
		      </div>
		      <svg width="100%" viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg">
		        <defs>
		          <linearGradient id="f1goldBarC" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#f0c040;stop-opacity:1"/>
		            <stop offset="100%" style="stop-color:#c87820;stop-opacity:1"/>
		          </linearGradient>
		          <linearGradient id="f1tealBarPos" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#00e6bb;stop-opacity:1"/>
		            <stop offset="100%" style="stop-color:#00a080;stop-opacity:1"/>
		          </linearGradient>
		          <linearGradient id="f1tealBarRange" x1="0%" y1="0%" x2="0%" y2="100%">
		            <stop offset="0%" style="stop-color:#00d4aa;stop-opacity:0.3"/>
		            <stop offset="100%" style="stop-color:#007a60;stop-opacity:0.3"/>
		          </linearGradient>
		        </defs>
		        <line x1="50" y1="60" x2="360" y2="60" stroke="#21262d" stroke-width="0.8"/>
		        <line x1="50" y1="108" x2="360" y2="108" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <line x1="50" y1="152" x2="360" y2="152" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <line x1="50" y1="196" x2="360" y2="196" stroke="#21262d" stroke-width="0.6" stroke-dasharray="3,4"/>
		        <line x1="50" y1="245" x2="360" y2="245" stroke="#484f58" stroke-width="1.2"/>
		        <text x="40" y="64" fill="#8b949e" font-size="10" text-anchor="end">0.9</text>
		        <text x="40" y="112" fill="#8b949e" font-size="10" text-anchor="end">0.6</text>
		        <text x="40" y="156" fill="#8b949e" font-size="10" text-anchor="end">0.4</text>
		        <text x="40" y="200" fill="#8b949e" font-size="10" text-anchor="end">0.2</text>
		        <text x="40" y="249" fill="#8b949e" font-size="10.5" text-anchor="end" font-weight="600">0.0</text>
		        <text x="12" y="145" fill="#8b949e" font-size="10" text-anchor="middle" transform="rotate(-90, 12, 145)" letter-spacing="0.06em">SHARPE RATIO</text>
		        <rect x="70" y="114" width="72" height="131" rx="3" fill="url(#f1goldBarC)"/>
		        <text x="106" y="106" fill="#f0c040" font-size="12" font-weight="700" text-anchor="middle">0.64</text>
		        <text x="106" y="257" fill="#c9d1d9" font-size="10" text-anchor="middle" font-weight="600">CBOE PUT</text>
		        <text x="106" y="267" fill="#8b949e" font-size="9" text-anchor="middle">unchanged</text>
		        <rect x="220" y="132" width="72" height="113" rx="3" fill="url(#f1tealBarRange)" stroke="#00d4aa" stroke-width="1" stroke-opacity="0.4" stroke-dasharray="3,3"/>
		        <rect x="220" y="163" width="72" height="82" rx="3" fill="url(#f1tealBarPos)"/>
		        <line x1="210" y1="132" x2="210" y2="173" stroke="#00d4aa" stroke-width="1.2" stroke-opacity="0.6"/>
		        <line x1="207" y1="132" x2="213" y2="132" stroke="#00d4aa" stroke-width="1.2" stroke-opacity="0.6"/>
		        <line x1="207" y1="173" x2="213" y2="173" stroke="#00d4aa" stroke-width="1.2" stroke-opacity="0.6"/>
		        <text x="256" y="124" fill="#00d4aa" font-size="11.5" font-weight="700" text-anchor="middle">~0.35&#x2013;0.55</text>
		        <text x="195" y="138" fill="#00d4aa" font-size="9" text-anchor="middle" opacity="0.8">0.55</text>
		        <text x="195" y="178" fill="#00d4aa" font-size="9" text-anchor="middle" opacity="0.8">0.35</text>
		        <text x="256" y="257" fill="#c9d1d9" font-size="10" text-anchor="middle" font-weight="600">CoinRoc Grid</text>
		        <text x="256" y="267" fill="#8b949e" font-size="9" text-anchor="middle">equal-vol adjusted</text>
		        <text x="340" y="148" fill="#8b949e" font-size="9" text-anchor="end" opacity="0.8">range at</text>
		        <text x="340" y="159" fill="#8b949e" font-size="9" text-anchor="end" opacity="0.8">S&amp;P vol</text>
		      </svg>
		      <div style="margin-top: 10px; font-size: 10px; color: #484f58; line-height: 1.5; font-family: 'Inter','Segoe UI',system-ui,sans-serif;">
		        Illustrative only — equal-volatility normalization. Derived from paper's finding that crypto vol (60–150%) is 4–8&#xD7; S&amp;P vol (12–18%). Not a computed backtest figure.
		      </div>
		    </div>
		  </div>
		  <div class="caption-block">
		    <strong>Figure 1 Caption:</strong>
		    The Sharpe gap narrows substantially when denominator differences are controlled. Crypto's 60–150% annualized volatility vs. S&amp;P's 12–18% mechanically suppresses grid Sharpe independent of strategy quality. <strong>Panel A</strong> shows Sharpe ratios as commonly reported — the gap appears decisive. <strong>Panel B</strong> shows the same strategies normalized to equal underlying volatility (illustrative) — the gap becomes competitive. The correct interpretation is that the strategies operate on structurally different underlyings, not that one produces systematically better risk-adjusted returns.
		  </div>
		  <div class="legend">
		    <div class="legend-item">
		      <div class="legend-swatch" style="background: linear-gradient(180deg, #f0c040, #c87820);"></div>
		      <span>CBOE PUT / BXM Index — S&amp;P 500 options premium strategies</span>
		    </div>
		    <div class="legend-item">
		      <div class="legend-swatch" style="background: linear-gradient(180deg, #00e6bb, #007a60);"></div>
		      <span>CoinRoc RXI-gated grid — 135 walk-forward folds, 2013–2025</span>
		    </div>
		    <div class="legend-item">
		      <div class="legend-swatch" style="background: #00d4aa20; border: 1px dashed #00d4aa60;"></div>
		      <span>Grid Sharpe range — equal-volatility normalization (illustrative)</span>
		    </div>
		  </div>
		  <div class="source-line">
		    Sources: CBOE Options Institute published performance data; CoinRoc walk-forward test results (Kessel &amp; Black, 2026a). Risk-free rate approximated at 4.5% for recent periods. Panel B figures are illustrative and derived analytically — not independently backtested.
		  </div>
		</div>
		</div>
		</div>
		</FigureExpand>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The CBOE PUT index has achieved approximately 0.64 Sharpe over its full history (inception
			1986). Our RXI-gated grid median Sharpe is &minus;0.303 across 135 walk-forward folds from
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

		<!-- Figure 2: Comparison card -->
		<FigureExpand label="Expand Figure 2 — Strategy Comparison">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .f2 * { box-sizing: border-box; }
		  .f2 .figure-container {
		    max-width: 100%; background: #161b22; border: 1px solid #30363d;
		    border-radius: 6px; padding: 36px 36px 28px 36px;
		    font-family: 'Inter','Segoe UI',system-ui,sans-serif;
		  }
		  .f2 .figure-label { font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:#8b949e; margin-bottom:6px; }
		  .f2 .figure-title { font-size:19px; font-weight:700; color:#e6edf3; margin-bottom:5px; line-height:1.3; }
		  .f2 .figure-subtitle { font-size:12.5px; color:#8b949e; line-height:1.55; margin-bottom:24px; max-width:820px; }
		  .f2 .comparison-card { border:1px solid #30363d; border-radius:6px; overflow:hidden; }
		  .f2 .card-header { display:grid; grid-template-columns:220px 1fr 1fr; border-bottom:1px solid #30363d; }
		  .f2 .header-metric { padding:14px 16px; background:#0d1117; border-right:1px solid #30363d; font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; color:#8b949e; display:flex; align-items:center; }
		  .f2 .header-grid { padding:14px 16px; background:#0d221c; border-right:1px solid #30363d; display:flex; align-items:center; gap:10px; }
		  .f2 .header-options { padding:14px 16px; background:#1a150a; display:flex; align-items:center; gap:10px; }
		  .f2 .col-icon { width:32px; height:32px; border-radius:4px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
		  .f2 .col-icon.teal { background:#00d4aa18; border:1px solid #00d4aa40; }
		  .f2 .col-icon.amber { background:#f0a02018; border:1px solid #f0a02040; }
		  .f2 .col-name { font-size:13px; font-weight:700; line-height:1.3; }
		  .f2 .col-name.teal { color:#00d4aa; }
		  .f2 .col-name.amber { color:#f0a020; }
		  .f2 .col-sub { font-size:10px; color:#8b949e; letter-spacing:0.05em; margin-top:1px; }
		  .f2 .card-row { display:grid; grid-template-columns:220px 1fr 1fr; border-bottom:1px solid #21262d; }
		  .f2 .card-row:last-child { border-bottom:none; }
		  .f2 .card-row:nth-child(odd) .cell-metric,
		  .f2 .card-row:nth-child(odd) .cell-grid,
		  .f2 .card-row:nth-child(odd) .cell-options { background:#0d1117; }
		  .f2 .card-row:nth-child(even) .cell-metric { background:#161b22; }
		  .f2 .card-row:nth-child(even) .cell-grid { background:#111c18; }
		  .f2 .card-row:nth-child(even) .cell-options { background:#16120a; }
		  .f2 .cell-metric { padding:13px 16px; border-right:1px solid #21262d; display:flex; align-items:flex-start; gap:10px; }
		  .f2 .metric-label { font-size:11.5px; font-weight:600; color:#c9d1d9; line-height:1.4; }
		  .f2 .metric-desc { font-size:10px; color:#484f58; line-height:1.4; margin-top:2px; }
		  .f2 .cell-grid { padding:13px 16px; border-right:1px solid #21262d; display:flex; align-items:flex-start; gap:10px; }
		  .f2 .cell-options { padding:13px 16px; display:flex; align-items:flex-start; gap:10px; }
		  .f2 .cell-value { font-size:12px; color:#c9d1d9; line-height:1.5; }
		  .f2 .cell-value .primary { font-size:13px; font-weight:700; display:block; margin-bottom:2px; }
		  .f2 .cell-value .primary.teal { color:#00d4aa; }
		  .f2 .cell-value .primary.amber { color:#f0a020; }
		  .f2 .cell-value .primary.neutral { color:#c9d1d9; }
		  .f2 .cell-value .primary.warn { color:#ff7b72; }
		  .f2 .cell-value .sub { font-size:10.5px; color:#8b949e; display:block; }
		  .f2 .indicator { flex-shrink:0; width:18px; height:18px; border-radius:50%; margin-top:1px; display:flex; align-items:center; justify-content:center; font-size:10px; font-weight:700; }
		  .f2 .indicator.teal-win { background:#00d4aa20; border:1.5px solid #00d4aa60; color:#00d4aa; }
		  .f2 .indicator.amber-win { background:#f0a02020; border:1.5px solid #f0a02060; color:#f0a020; }
		  .f2 .indicator.neutral-ind { background:#8b949e15; border:1.5px solid #8b949e40; color:#8b949e; }
		  .f2 .summary-bar { background:#0d1117; border-top:1px solid #30363d; padding:16px 20px; text-align:center; font-size:12.5px; color:#8b949e; line-height:1.6; font-style:italic; }
		  .f2 .summary-bar strong { color:#c9d1d9; font-style:normal; }
		  .f2 .indicator-key { display:flex; gap:20px; margin-top:18px; padding-top:14px; border-top:1px solid #21262d; flex-wrap:wrap; }
		  .f2 .key-item { display:flex; align-items:center; gap:7px; font-size:11px; color:#8b949e; }
		  .f2 .key-dot { width:14px; height:14px; border-radius:50%; }
		  .f2 .source-line { margin-top:14px; font-size:10.5px; color:#484f58; line-height:1.5; }
		</style>
		<div class="f2">
		<div class="figure-container">
		  <div class="figure-label">Figure 2  ·  A2  ·  Yodacom Research</div>
		  <div class="figure-title">Strategy Comparison — Nine Dimensions</div>
		  <div class="figure-subtitle">A complete side-by-side comparison across risk, return, operational, and structural dimensions. Indicators reflect which strategy has the structural advantage on each metric; neutral rows represent genuine draws or investor-dependent trade-offs.</div>
		  <div class="comparison-card">
		    <div class="card-header">
		      <div class="header-metric">METRIC</div>
		      <div class="header-grid">
		        <div class="col-icon teal">
		          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		            <circle cx="4" cy="4" r="1.8" fill="#00d4aa" opacity="0.9"/>
		            <circle cx="9" cy="4" r="1.8" fill="#00d4aa" opacity="0.9"/>
		            <circle cx="14" cy="4" r="1.8" fill="#00d4aa" opacity="0.9"/>
		            <circle cx="4" cy="9" r="1.8" fill="#00d4aa" opacity="0.7"/>
		            <circle cx="9" cy="9" r="1.8" fill="#00d4aa" opacity="0.7"/>
		            <circle cx="14" cy="9" r="1.8" fill="#00d4aa" opacity="0.7"/>
		            <circle cx="4" cy="14" r="1.8" fill="#00d4aa" opacity="0.5"/>
		            <circle cx="9" cy="14" r="1.8" fill="#00d4aa" opacity="0.5"/>
		            <circle cx="14" cy="14" r="1.8" fill="#00d4aa" opacity="0.5"/>
		          </svg>
		        </div>
		        <div><div class="col-name teal">Crypto Grid Trading</div><div class="col-sub">CoinRoc · RXI v2-gated · 135 folds</div></div>
		      </div>
		      <div class="header-options">
		        <div class="col-icon amber">
		          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
		            <circle cx="9" cy="9" r="7" stroke="#f0a020" stroke-width="1.8" fill="none" opacity="0.9"/>
		            <line x1="4" y1="9" x2="14" y2="9" stroke="#f0a020" stroke-width="1.5" opacity="0.9"/>
		            <path d="M 9 4 Q 12 6 12 9 Q 12 12 9 14" stroke="#f0a020" stroke-width="1.2" fill="none" opacity="0.6"/>
		          </svg>
		        </div>
		        <div><div class="col-name amber">Options for Income</div><div class="col-sub">CBOE BXM/PUT · Israelov &amp; Klein · 1986–2025</div></div>
		      </div>
		    </div>
		    <!-- Row 1 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Sharpe Ratio</div><div class="metric-desc">Risk-adjusted return; assumes normal distribution</div></div></div>
		      <div class="cell-grid"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary neutral">&#x2212;0.303</span><span class="sub">median, 135 folds (mixed regimes)</span><span class="sub">See Fig 1 — denominator problem applies</span></div></div>
		      <div class="cell-options"><div class="indicator amber-win">&#x25B2;</div><div class="cell-value"><span class="primary amber">~0.58–0.64</span><span class="sub">BXM/PUT index, 1986–2025</span><span class="sub">On calmer underlying (S&amp;P vol 12–18%)</span></div></div>
		    </div>
		    <!-- Row 2 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Calmar Ratio</div><div class="metric-desc">Annualized return ÷ max drawdown</div></div></div>
		      <div class="cell-grid"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary neutral">0.038</span><span class="sub">mean across 135 folds</span></div></div>
		      <div class="cell-options"><div class="indicator amber-win">&#x25B2;</div><div class="cell-value"><span class="primary amber">~0.30–0.50</span><span class="sub">Israelov &amp; Klein (2016)</span></div></div>
		    </div>
		    <!-- Row 3 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Max Drawdown</div><div class="metric-desc">Worst peak-to-trough capital decline</div></div></div>
		      <div class="cell-grid"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary warn">27.4% mean</span><span class="sub">Up to 82% in crash folds</span><span class="sub">Visible in inventory — addressable</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary warn">15–25% typical</span><span class="sub">30–35% in 2020 crash</span><span class="sub">Faster arrival — less warning</span></div></div>
		    </div>
		    <!-- Row 4 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Best Environment</div><div class="metric-desc">Regime where strategy earns most consistently</div></div></div>
		      <div class="cell-grid"><div class="indicator teal-win">&#x2713;</div><div class="cell-value"><span class="primary teal">Oscillating recovery</span><span class="sub">Post-crash choppy sideways</span><span class="sub">Range-bound crypto with elevated vol</span></div></div>
		      <div class="cell-options"><div class="indicator amber-win">&#x2713;</div><div class="cell-value"><span class="primary amber">Stable, range-bound</span><span class="sub">VIX elevated but not spiking</span><span class="sub">S&amp;P 500 calm drift environment</span></div></div>
		    </div>
		    <!-- Row 5 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Worst Environment</div><div class="metric-desc">Regime that causes the deepest drawdown or loss</div></div></div>
		      <div class="cell-grid"><div class="indicator neutral-ind">!</div><div class="cell-value"><span class="primary warn">Sustained directional trends</span><span class="sub">Bull or bear — both harmful</span><span class="sub">RXI gate reduces exposure; doesn't eliminate</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">!</div><div class="cell-value"><span class="primary warn">Sharp VIX spikes</span><span class="sub">Gap moves beyond strikes</span><span class="sub">Loss can exceed multiple months' premium</span></div></div>
		    </div>
		    <!-- Row 6 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Tail Risk Profile</div><div class="metric-desc">How extreme losses arrive and manifest</div></div></div>
		      <div class="cell-grid"><div class="indicator teal-win">&#x2713;</div><div class="cell-value"><span class="primary teal">Explicit — visible</span><span class="sub">Inventory accumulation is observable</span><span class="sub">Addressable via RXI gate; bounded mechanics</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">!</div><div class="cell-value"><span class="primary warn">Implicit negative skew</span><span class="sub">Tail events arrive fast — no warning</span><span class="sub">CVaR 1%: ~10&#xD7; average monthly drawdown</span></div></div>
		    </div>
		    <!-- Row 7 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Capital Required</div><div class="metric-desc">Minimum practical deployment size</div></div></div>
		      <div class="cell-grid"><div class="indicator teal-win">&#x2713;</div><div class="cell-value"><span class="primary teal">$1,000–$50,000+</span><span class="sub">Per asset — fractional entry possible</span><span class="sub">Accessible to retail investors</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary neutral">$40,000–$50,000+</span><span class="sub">Per contract, cash-secured puts on SPY</span><span class="sub">Effectively excludes smaller portfolios</span></div></div>
		    </div>
		    <!-- Row 8 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Supervision Required</div><div class="metric-desc">Ongoing manager time commitment</div></div></div>
		      <div class="cell-grid"><div class="indicator teal-win">&#x2713;</div><div class="cell-value"><span class="primary teal">Minimal</span><span class="sub">RXI regime gate handles allocation</span><span class="sub">Runs alongside a career</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary neutral">Ongoing judgment</span><span class="sub">Strike selection, roll decisions, assignment</span><span class="sub">2–4 hrs/expiration cycle minimum</span></div></div>
		    </div>
		    <!-- Row 9 -->
		    <div class="card-row">
		      <div class="cell-metric"><div><div class="metric-label">Automation Feasibility</div><div class="metric-desc">How fully the strategy can run without human input</div></div></div>
		      <div class="cell-grid"><div class="indicator teal-win">&#x2713;</div><div class="cell-value"><span class="primary teal">Full — CoinRoc today</span><span class="sub">Regime detection, parameter calibration,</span><span class="sub">order placement — no human intervention</span></div></div>
		      <div class="cell-options"><div class="indicator neutral-ind">—</div><div class="cell-value"><span class="primary neutral">Partial</span><span class="sub">Order entry automatable; roll logic,</span><span class="sub">assignment handling require judgment</span></div></div>
		    </div>
		    <div class="summary-bar"><strong>Neither strategy dominates.</strong> The right choice depends on your available capital, tolerance for implicit vs. explicit tail risk, and willingness to commit time each expiration cycle. These strategies are also structurally uncorrelated — a portfolio holding both may exhibit genuine diversification benefit.</div>
		  </div>
		  <div class="indicator-key">
		    <div class="key-item"><div class="key-dot" style="background:#00d4aa20;border:1.5px solid #00d4aa60;"></div><span>Structural advantage: Crypto Grid</span></div>
		    <div class="key-item"><div class="key-dot" style="background:#f0a02020;border:1.5px solid #f0a02060;"></div><span>Structural advantage: Options for Income</span></div>
		    <div class="key-item"><div class="key-dot" style="background:#8b949e15;border:1.5px solid #8b949e40;"></div><span>Genuine draw or investor-dependent trade-off</span></div>
		  </div>
		  <div class="source-line">
		    Grid data: CoinRoc walk-forward backtests, 135 folds, 17 symbols, 2013–2025 (Kessel &amp; Black, 2026a). Options data: CBOE Options Institute; Israelov &amp; Klein (2016). This paper did not run an independent options backtest — options metrics are sourced from published benchmarks. Disclosure: Hypothetical and backtested performance. Not investment advice.
		  </div>
		</div>
		</div>
		</div>
		</FigureExpand>
	</section>

	<!-- ── Section 5: Tail Risk the Sharpe Misses ─────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Tail Risk the Sharpe Ratio Misses</h2>

		<!-- Figure 3: Tail risk timeline -->
		<FigureExpand label="Expand Figure 3 — Tail Risk Events">
		<div class="my-12 w-full overflow-x-auto">
		<style>
		  .f3 * { box-sizing: border-box; }
		  .f3 .figure-container { max-width:100%; background:#161b22; border:1px solid #30363d; border-radius:8px; padding:36px 36px 28px 36px; font-family:'Inter','Segoe UI',system-ui,sans-serif; }
		  .f3 .figure-label { font-size:11px; font-weight:600; letter-spacing:0.12em; text-transform:uppercase; color:#8b949e; margin-bottom:6px; }
		  .f3 .figure-title { font-size:19px; font-weight:700; color:#e6edf3; margin-bottom:5px; line-height:1.3; }
		  .f3 .figure-subtitle { font-size:12.5px; color:#8b949e; line-height:1.55; margin-bottom:28px; max-width:820px; }
		  .f3 .timeline-wrapper { position:relative; padding-bottom:10px; }
		  .f3 .event-block { position:relative; margin-bottom:28px; }
		  .f3 .event-block:last-of-type { margin-bottom:0; }
		  .f3 .event-date { position:absolute; left:50%; top:-10px; transform:translateX(-50%); background:#0d1117; border:1px solid #30363d; border-radius:12px; padding:3px 12px; font-size:10px; font-weight:700; letter-spacing:0.1em; color:#8b949e; white-space:nowrap; z-index:11; }
		  .f3 .event-panels { display:grid; grid-template-columns:1fr 80px 1fr; gap:0; padding-top:14px; }
		  .f3 .strategy-panel { border-radius:6px; padding:18px; border:1px solid; }
		  .f3 .strategy-panel.options-hurt { background:#1a0a0a; border-color:#ff7b7230; }
		  .f3 .strategy-panel.options-neutral { background:#161208; border-color:#f0a02025; }
		  .f3 .strategy-panel.options-ok { background:#0f1508; border-color:#3fb95025; }
		  .f3 .strategy-panel.grid-unaffected { background:#0d1f1a; border-color:#00d4aa25; }
		  .f3 .strategy-panel.grid-hurt { background:#1a100a; border-color:#f0a02025; }
		  .f3 .strategy-panel.grid-protected { background:#0d1f1a; border-color:#00d4aa40; }
		  .f3 .panel-strategy-name { font-size:10px; font-weight:600; letter-spacing:0.1em; text-transform:uppercase; margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid; display:flex; align-items:center; gap:8px; }
		  .f3 .panel-strategy-name.teal-label { color:#00d4aa; border-color:#00d4aa20; }
		  .f3 .panel-strategy-name.amber-label { color:#f0a020; border-color:#f0a02020; }
		  .f3 .panel-strategy-name.red-label { color:#ff7b72; border-color:#ff7b7220; }
		  .f3 .panel-strategy-name.neutral-label { color:#8b949e; border-color:#8b949e20; }
		  .f3 .status-badge { display:inline-flex; align-items:center; gap:5px; border-radius:3px; padding:3px 8px; font-size:9.5px; font-weight:700; letter-spacing:0.07em; margin-bottom:10px; white-space:nowrap; }
		  .f3 .status-badge.severe { background:#ff7b7218; border:1px solid #ff7b7240; color:#ff7b72; }
		  .f3 .status-badge.moderate { background:#f0a02018; border:1px solid #f0a02040; color:#f0a020; }
		  .f3 .status-badge.protected { background:#00d4aa18; border:1px solid #00d4aa40; color:#00d4aa; }
		  .f3 .status-badge.unaffected { background:#3fb95018; border:1px solid #3fb95040; color:#56d364; }
		  .f3 .status-badge.minor-impact { background:#8b949e15; border:1px solid #8b949e35; color:#8b949e; }
		  .f3 .impact-metric { font-size:20px; font-weight:800; line-height:1.1; margin-bottom:4px; display:block; }
		  .f3 .impact-metric.red { color:#ff7b72; }
		  .f3 .impact-metric.amber { color:#f0a020; }
		  .f3 .impact-metric.teal { color:#00d4aa; }
		  .f3 .impact-metric.green { color:#56d364; }
		  .f3 .impact-metric.gray { color:#8b949e; }
		  .f3 .impact-desc { font-size:11px; color:#8b949e; line-height:1.5; }
		  .f3 .impact-desc strong { color:#c9d1d9; font-weight:600; }
		  .f3 .fis-tag { display:inline-block; margin-top:8px; background:#00d4aa18; border:1px solid #00d4aa50; border-radius:3px; padding:3px 8px; font-size:9.5px; font-weight:700; color:#00d4aa; letter-spacing:0.08em; font-family:'SF Mono','Fira Mono',monospace; }
		  .f3 .event-center { display:flex; flex-direction:column; align-items:center; justify-content:flex-start; padding-top:44px; position:relative; }
		  .f3 .mini-chart { margin-top:10px; }
		  .f3 .event-divider { display:flex; align-items:center; gap:12px; margin:0 0 18px 0; color:#30363d; font-size:10px; }
		  .f3 .event-divider::before,.f3 .event-divider::after { content:''; flex:1; height:1px; background:#21262d; }
		  .f3 .bottom-summary { background:#0d1117; border:1px solid #30363d; border-radius:6px; padding:16px 20px; margin-top:24px; display:grid; grid-template-columns:1fr 1fr 1fr; gap:16px; text-align:center; }
		  .f3 .summary-col { padding:0 8px; border-right:1px solid #21262d; }
		  .f3 .summary-col:last-child { border-right:none; }
		  .f3 .summary-count { font-size:28px; font-weight:800; line-height:1.1; margin-bottom:4px; }
		  .f3 .summary-label { font-size:10.5px; color:#8b949e; line-height:1.4; }
		  .f3 .conclusion-bar { background:#161b22; border:1px solid #30363d; border-top:none; border-radius:0 0 6px 6px; padding:14px 20px; text-align:center; font-size:12px; color:#8b949e; font-style:italic; line-height:1.6; }
		  .f3 .conclusion-bar strong { color:#c9d1d9; font-style:normal; }
		  .f3 .legend-row { display:flex; gap:16px; margin-top:18px; padding-top:14px; border-top:1px solid #21262d; flex-wrap:wrap; }
		  .f3 .legend-item { display:flex; align-items:center; gap:7px; font-size:11px; color:#8b949e; }
		  .f3 .legend-dot { width:10px; height:10px; border-radius:2px; flex-shrink:0; }
		  .f3 .source-line { margin-top:14px; font-size:10.5px; color:#484f58; line-height:1.5; }
		</style>
		<div class="f3">
		<div class="figure-container">
		  <div class="figure-label">Figure 3  ·  A2  ·  Yodacom Research</div>
		  <div class="figure-title">Tail Risk Across Three Stress Events — Which Strategy Was Exposed?</div>
		  <div class="figure-subtitle">Neither strategy is universally safer. These three events illustrate how the risk profiles are structurally different rather than one being categorically better. The grid's failure mode is gradual and visible; the options strategy's failure mode is rapid and implicit.</div>
		  <div class="timeline-wrapper">

		    <!-- EVENT 1 -->
		    <div class="event-block">
		      <div class="event-date">FEBRUARY 2018 · "VOLMAGEDDON"</div>
		      <div class="event-panels">
		        <div class="strategy-panel options-hurt">
		          <div class="panel-strategy-name red-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#ff7b72" stroke-width="1.5" fill="none"/><line x1="4" y1="7" x2="10" y2="7" stroke="#ff7b72" stroke-width="1.5"/><path d="M 7 3 Q 9.5 5 9.5 7 Q 9.5 9 7 11" stroke="#ff7b72" stroke-width="1.2" fill="none"/></svg>
		            Options for Income
		          </div>
		          <div class="status-badge severe">&#x26A1; SEVERE IMPACT</div>
		          <span class="impact-metric red">5–15&#xD7;</span>
		          <div class="impact-desc"><strong>VIX doubled overnight.</strong> Iron condors and short-straddle structures experienced losses <strong>5–15&#xD7; their typical monthly income</strong> in a single session. Strategies short VIX ETPs lost <strong>80–95% in one session.</strong><br><br>Core mechanism: sudden large VIX expansion faster than a monthly-roll strategy can hedge. A structural property of short-vol equity strategies — not a one-time aberration.</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">VIX  IMPLIED</text>
		            <polyline points="0,45 20,44 40,43 60,44 80,43 100,42 110,40 120,20 130,8 140,15 150,28 160,35 180,38 200,40" fill="none" stroke="#ff7b72" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
		            <line x1="130" y1="8" x2="130" y2="55" stroke="#ff7b72" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.5"/>
		            <text x="133" y="14" fill="#ff7b72" font-size="8" font-weight="700">VIX &#xD7;2</text>
		            <text x="133" y="22" fill="#ff7b72" font-size="7">overnight</text>
		            <text x="50" y="55" fill="#484f58" font-size="7" text-anchor="middle">Pre-event (calm)</text>
		            <text x="165" y="55" fill="#484f58" font-size="7" text-anchor="middle">Post-spike</text>
		          </svg>
		        </div>
		        <div class="event-center">
		          <svg width="36" height="36" viewBox="0 0 36 36" style="position:absolute;top:4px;"><circle cx="18" cy="18" r="16" fill="#2d0f0f" stroke="#ff7b72" stroke-width="2"/><text x="18" y="22" fill="#ff7b72" font-size="13" font-weight="800" text-anchor="middle" font-family="system-ui">&#x26A1;</text></svg>
		        </div>
		        <div class="strategy-panel grid-unaffected">
		          <div class="panel-strategy-name teal-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="7" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="10.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="3.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="7" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="10.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="3.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="7" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="10.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/></svg>
		            Crypto Grid Trading
		          </div>
		          <div class="status-badge unaffected">&#x2713; NO DIRECT EXPOSURE</div>
		          <span class="impact-metric green">0%</span>
		          <div class="impact-desc"><strong>No direct VIX exposure.</strong> The crypto grid has no structural position in S&amp;P 500 implied volatility instruments. The February 2018 VIX spike was a U.S. equity volatility event with no mechanical link to crypto grid mechanics.<br><br>Crypto markets moved independently. Grid performance during this period was determined by crypto-specific price action, not by the S&amp;P volatility surface.</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">CRYPTO GRID  P&amp;L</text>
		            <polyline points="0,35 20,33 40,32 60,35 80,31 100,30 120,33 140,29 160,31 180,28 200,30" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
		            <line x1="0" y1="45" x2="200" y2="45" stroke="#30363d" stroke-width="0.8" stroke-dasharray="2,3"/>
		            <text x="160" y="55" fill="#56d364" font-size="8" text-anchor="middle">Uncorrelated</text>
		          </svg>
		        </div>
		      </div>
		    </div>
		    <div class="event-divider">&#x25BC;</div>

		    <!-- EVENT 2 -->
		    <div class="event-block">
		      <div class="event-date">MARCH 2020 · COVID CRASH</div>
		      <div class="event-panels">
		        <div class="strategy-panel options-hurt">
		          <div class="panel-strategy-name red-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#ff7b72" stroke-width="1.5" fill="none"/><line x1="4" y1="7" x2="10" y2="7" stroke="#ff7b72" stroke-width="1.5"/><path d="M 7 3 Q 9.5 5 9.5 7 Q 9.5 9 7 11" stroke="#ff7b72" stroke-width="1.2" fill="none"/></svg>
		            Options for Income
		          </div>
		          <div class="status-badge severe">&#x25BC; SIGNIFICANT DRAWDOWN</div>
		          <span class="impact-metric red">&#x2212;27%</span>
		          <div class="impact-desc"><strong>CBOE PUT index fell ~27%</strong> from its February 2020 peak. S&amp;P 500 dropped 34% in 33 trading days. Positions comfortably out-of-the-money three weeks prior were suddenly in-the-money at assignment.<br><br>Speed of the move exceeded monthly expiration cycles — <strong>no roll opportunity before forced assignment.</strong> Six to twelve months of collected premium was partially or fully erased in a single expiration cycle.</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">CBOE PUT  INDEX</text>
		            <polyline points="0,20 30,18 55,17 70,19 85,15 90,22 100,38 110,50 120,52 130,48 145,40 165,32 185,28 200,25" fill="none" stroke="#ff7b72" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
		            <text x="113" y="20" fill="#ff7b72" font-size="7" font-weight="700">&#x2212;27%</text>
		            <text x="90" y="55" fill="#484f58" font-size="7">Feb peak</text>
		            <text x="155" y="55" fill="#484f58" font-size="7">recovery</text>
		          </svg>
		        </div>
		        <div class="event-center">
		          <svg width="36" height="36" viewBox="0 0 36 36" style="position:absolute;top:4px;"><circle cx="18" cy="18" r="16" fill="#1a0f08" stroke="#f0a020" stroke-width="2"/><text x="18" y="23" fill="#f0a020" font-size="14" font-weight="800" text-anchor="middle" font-family="system-ui">&#x21AF;</text></svg>
		        </div>
		        <div class="strategy-panel grid-protected">
		          <div class="panel-strategy-name teal-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="7" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="10.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="3.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="7" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="10.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="3.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="7" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="10.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/></svg>
		            Crypto Grid Trading
		          </div>
		          <div class="status-badge moderate">&#x2193; BTC &#x2212;50% · RXI: Defensive</div>
		          <span class="impact-metric amber">&#x2212;50%</span>
		          <div class="impact-desc"><strong>BTC fell ~50% rapidly.</strong> RXI gate classified conditions as <strong>defensive — reduced engagement,</strong> limiting inventory accumulation into the drawdown.<br><br>V-bottom recovery then created the exact oscillating environment where grids excel. Capital preserved during the crash was deployed as the recovery began. Bear-fold data: 100% win rate vs. buy-and-hold in folds where B&amp;H lost &gt;20%.</div>
		          <div class="fis-tag">RXI: DEFENSIVE — reduced engagement</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">BTC  PRICE  +  GRID  P&amp;L</text>
		            <polyline points="0,25 20,23 35,22 55,28 65,35 75,48 85,52 90,45 100,35 115,25 130,18 145,15 165,14 185,13 200,12" fill="none" stroke="#8b949e" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3,2" opacity="0.5"/>
		            <polyline points="0,28 20,27 35,26 55,30 65,34 75,40 85,37 90,33 100,29 115,24 130,20 145,18 165,17 185,16 200,15" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
		            <line x1="75" y1="12" x2="75" y2="52" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.4"/>
		            <text x="78" y="17" fill="#00d4aa" font-size="7">RXI&#x2193;</text>
		          </svg>
		        </div>
		      </div>
		    </div>
		    <div class="event-divider">&#x25BC;</div>

		    <!-- EVENT 3 -->
		    <div class="event-block" style="margin-bottom:0;">
		      <div class="event-date">NOVEMBER 2022 · FTX COLLAPSE</div>
		      <div class="event-panels">
		        <div class="strategy-panel options-ok">
		          <div class="panel-strategy-name neutral-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="7" cy="7" r="6" stroke="#8b949e" stroke-width="1.5" fill="none"/><line x1="4" y1="7" x2="10" y2="7" stroke="#8b949e" stroke-width="1.5"/><path d="M 7 3 Q 9.5 5 9.5 7 Q 9.5 9 7 11" stroke="#8b949e" stroke-width="1.2" fill="none"/></svg>
		            Options for Income
		          </div>
		          <div class="status-badge unaffected">&#x2713; BROADLY UNAFFECTED</div>
		          <span class="impact-metric green">~0%</span>
		          <div class="impact-desc"><strong>S&amp;P 500 was broadly resilient</strong> during the FTX collapse. The crypto-specific event had minimal direct impact on S&amp;P 500 volatility dynamics.<br><br>Systematic put-write and covered call strategies experienced normal operating conditions during this period. Premium income continued to accrue.</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">S&amp;P 500  VOL  (VIX)</text>
		            <polyline points="0,30 20,32 40,30 60,31 80,29 90,28 100,30 110,33 120,31 140,30 160,29 180,30 200,29" fill="none" stroke="#56d364" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" opacity="0.8"/>
		            <text x="100" y="55" fill="#484f58" font-size="7" text-anchor="middle">Normal operating conditions</text>
		          </svg>
		        </div>
		        <div class="event-center">
		          <svg width="36" height="36" viewBox="0 0 36 36" style="position:absolute;top:4px;"><circle cx="18" cy="18" r="16" fill="#0d1f1a" stroke="#00d4aa" stroke-width="2"/><text x="18" y="23" fill="#00d4aa" font-size="14" font-weight="800" text-anchor="middle" font-family="system-ui">&#x25C9;</text></svg>
		        </div>
		        <div class="strategy-panel grid-protected">
		          <div class="panel-strategy-name teal-label">
		            <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><circle cx="3.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="7" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="10.5" cy="3.5" r="1.5" fill="#00d4aa" opacity="0.9"/><circle cx="3.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="7" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="10.5" cy="7" r="1.5" fill="#00d4aa" opacity="0.7"/><circle cx="3.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="7" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/><circle cx="10.5" cy="10.5" r="1.5" fill="#00d4aa" opacity="0.5"/></svg>
		            Crypto Grid Trading
		          </div>
		          <div class="status-badge protected">&#x1F6E1; RXI: ZERO ENGAGEMENT</div>
		          <span class="impact-metric teal">Capital<br>Preserved</span>
		          <div class="impact-desc"><strong>BTC fell ~25% in two weeks.</strong> RXI gate Rule 7 triggered: price below 200-day MA plus elevated volatility &#x2192; <strong>zero engagement.</strong> Capital held in cash rather than accumulating inventory into the cascade.<br><br>Bear-fold data confirms: in 43 folds where RXI classified conditions as defensive and zeroed engagement, capital was preserved.</div>
		          <div class="fis-tag">RXI: RULE 7 — zero engagement</div>
		          <svg class="mini-chart" width="100%" viewBox="0 0 200 60" xmlns="http://www.w3.org/2000/svg">
		            <text x="0" y="10" fill="#484f58" font-size="8" letter-spacing="0.05em">BTC  +  GRID  ENGAGEMENT</text>
		            <polyline points="0,20 20,19 35,20 50,22 65,28 75,32 85,42 95,50 105,52 115,48 130,44 150,42 170,40 190,39 200,38" fill="none" stroke="#8b949e" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" stroke-dasharray="3,2" opacity="0.5"/>
		            <polyline points="0,25 20,25 35,25 50,26 65,35 75,50 85,53 95,53 105,53 115,53 130,53 150,53 170,53 190,53 200,53" fill="none" stroke="#00d4aa" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
		            <line x1="75" y1="12" x2="75" y2="53" stroke="#00d4aa" stroke-width="0.8" stroke-dasharray="2,3" opacity="0.4"/>
		            <text x="78" y="18" fill="#00d4aa" font-size="7">Rule 7</text>
		          </svg>
		        </div>
		      </div>
		    </div>

		  </div><!-- end timeline-wrapper -->

		  <div class="bottom-summary" style="margin-top:28px;">
		    <div class="summary-col"><div class="summary-count" style="color:#ff7b72;">2 of 3</div><div class="summary-label">events impacted<br>options strategies</div></div>
		    <div class="summary-col"><div class="summary-count" style="color:#f0a020;">1 of 3</div><div class="summary-label">events impacted<br>crypto grid</div></div>
		    <div class="summary-col"><div class="summary-count" style="color:#8b949e;">0</div><div class="summary-label">events impacted<br>both simultaneously</div></div>
		  </div>
		  <div class="conclusion-bar"><strong>Both strategies have failure modes.</strong> The risk profiles are structurally different — not categorically better or worse. The grid's failure mode is gradual inventory accumulation: visible, addressable, bounded. The options strategy's failure mode is a fast-arriving gap move past a strike, crystallizing in a single settlement cycle with no warning.</div>

		  <div class="legend-row">
		    <div class="legend-item"><div class="legend-dot" style="background:#ff7b7240;border:1px solid #ff7b7260;"></div><span>Severe impact — strategy exposed</span></div>
		    <div class="legend-item"><div class="legend-dot" style="background:#f0a02030;border:1px solid #f0a02050;"></div><span>Moderate impact — RXI gate reduced exposure</span></div>
		    <div class="legend-item"><div class="legend-dot" style="background:#56d36430;border:1px solid #56d36450;"></div><span>No direct exposure / unaffected</span></div>
		    <div class="legend-item"><div class="legend-dot" style="background:#00d4aa30;border:1px solid #00d4aa50;"></div><span>RXI gate protected — capital preserved in cash</span></div>
		  </div>
		  <div class="source-line">Sources: CBOE Options Institute; Israelov &amp; Klein (2016); CoinRoc walk-forward bear-fold data (Kessel &amp; Black, 2026a). Mini charts are illustrative of price direction and relative magnitude — not exact reproductions of historical data. Not investment advice. Past performance not indicative of future results.</div>
		</div>
		</div>
		</div>
		</FigureExpand>

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
					BTC fell approximately 25% in two weeks. CoinRoc&rsquo;s RXI gate classified conditions
					as defensive &mdash; price below the 200-day MA plus elevated volatility triggers Rule
					7 (zero engagement), preserving capital in cash rather than accumulating inventory
					into the cascade. In the 43 folds where the RXI gate classified conditions as defensive
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
				is sustained bear accumulation, which is visible in inventory and addressable via the RXI
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
			CoinRoc&rsquo;s grid is fully automated: regime detection via RXI v2 (real-time computation
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
						{ dim: 'Regime detection', grid: 'Full (RXI v2)', options: 'Manual / partial' },
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
				momentum; vol ratio unfavorable. The RXI v2 system correctly classifies current conditions
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
			RXI regime gate, and bounded by the mechanical structure of the strategy rather than by
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
				<p><strong class="text-navy-deep">Grid trading data:</strong> Walk-forward backtests run on Tiingo daily bars using CoinRoc AdaptiveGrid v3DynamicMode with RXI v2 regime gating. Full methodology in Kessel &amp; Black (2026a). Key parameters: 2-year training / 1-year test / yearly slide; 55 grid levels; 2.59% geometric spacing; retail Binance.US cost model (0.40% maker / 0.60% taker / 0.05% slippage). All results are out-of-sample. GTX post-only execution enforced.</p>
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
