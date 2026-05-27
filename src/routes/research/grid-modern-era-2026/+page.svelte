<script lang="ts">
  import FigureExpand from '$lib/components/FigureExpand.svelte';
</script>

<svelte:head>
	<title>Grid Trading in the Modern Crypto Era: 2019–2025 | Yodacom Research</title>
	<meta name="description" content="Walk-forward analysis of 85 folds across 17 assets in the modern crypto era. 100% bear-fold capital protection. FIS regime gating. Three-state strategy preview." />
	<meta property="og:title" content="Grid Trading in the Modern Crypto Era: 2019–2025 | Yodacom Research" />
	<meta property="og:description" content="Walk-forward analysis of 85 folds across 17 assets in the modern crypto era. 100% bear-fold capital protection. FIS regime gating. Three-state strategy preview." />
	<meta property="og:image" content="/research/modern-era-cover.png" />
</svelte:head>

<!-- Cover banner -->
<FigureExpand label="Expand cover figure">
<div class="w-full overflow-x-auto">
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg" style="display:block;width:100%;height:auto;">
  <defs>
    <linearGradient id="me-bgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#070b12"/>
      <stop offset="60%" stop-color="#0b1220"/>
      <stop offset="100%" stop-color="#0d1525"/>
    </linearGradient>
    <radialGradient id="me-tealGlow" cx="20%" cy="55%" r="55%">
      <stop offset="0%" stop-color="#00d4aa" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#00d4aa" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="me-blueGlow" cx="80%" cy="45%" r="55%">
      <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.10"/>
      <stop offset="100%" stop-color="#3B82F6" stop-opacity="0"/>
    </radialGradient>
    <radialGradient id="me-orangeGlow" cx="50%" cy="85%" r="30%">
      <stop offset="0%" stop-color="#F97316" stop-opacity="0.06"/>
      <stop offset="100%" stop-color="#F97316" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="me-gridLineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" stop-color="#00d4aa" stop-opacity="0"/>
      <stop offset="30%" stop-color="#00d4aa" stop-opacity="0.6"/>
      <stop offset="70%" stop-color="#00d4aa" stop-opacity="0.6"/>
      <stop offset="100%" stop-color="#00d4aa" stop-opacity="0"/>
    </linearGradient>
    <clipPath id="me-chartClip">
      <rect x="0" y="0" width="1200" height="630"/>
    </clipPath>
    <linearGradient id="me-sepGrad" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="0%" stop-color="#1E3A5F" stop-opacity="0"/>
      <stop offset="20%" stop-color="#1E3A5F" stop-opacity="0.7"/>
      <stop offset="50%" stop-color="#2A5080" stop-opacity="1"/>
      <stop offset="80%" stop-color="#1E3A5F" stop-opacity="0.7"/>
      <stop offset="100%" stop-color="#1E3A5F" stop-opacity="0"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#me-bgGrad)"/>
  <rect width="1200" height="630" fill="url(#me-tealGlow)"/>
  <rect width="1200" height="630" fill="url(#me-blueGlow)"/>
  <rect width="1200" height="630" fill="url(#me-orangeGlow)"/>
  <!-- Grid level lines (left side) -->
  <g opacity="0.18" clip-path="url(#me-chartClip)">
    <line x1="60" y1="183" x2="520" y2="183" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="205" x2="520" y2="205" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="227" x2="520" y2="227" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="249" x2="520" y2="249" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="271" x2="520" y2="271" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="293" x2="520" y2="293" stroke="#00d4aa" stroke-width="0.7"/>
    <line x1="60" y1="315" x2="520" y2="315" stroke="#00d4aa" stroke-width="1.0"/>
    <line x1="60" y1="337" x2="520" y2="337" stroke="#00d4aa" stroke-width="0.7"/>
    <line x1="60" y1="359" x2="520" y2="359" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="381" x2="520" y2="381" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="403" x2="520" y2="403" stroke="#00d4aa" stroke-width="0.6"/>
    <line x1="60" y1="425" x2="520" y2="425" stroke="#00d4aa" stroke-width="0.6"/>
  </g>
  <!-- Price path oscillating through grid -->
  <polyline points="60,380 90,360 120,340 150,360 180,325 210,305 240,320 270,295 300,310 330,285 360,300 390,270 420,285 460,265 500,280 520,270"
    fill="none" stroke="#00d4aa" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" opacity="0.8"/>
  <g fill="#00d4aa" opacity="0.9">
    <circle cx="90" cy="360" r="3.5"/>
    <circle cx="150" cy="360" r="3.5"/>
    <circle cx="210" cy="305" r="3.5"/>
    <circle cx="270" cy="295" r="3.5"/>
    <circle cx="330" cy="285" r="3.5"/>
    <circle cx="390" cy="270" r="3.5"/>
  </g>
  <!-- Vertical separator -->
  <line x1="580" y1="60" x2="580" y2="570" stroke="url(#me-sepGrad)" stroke-width="1"/>
  <!-- Right side stat cards -->
  <rect x="620" y="180" width="240" height="70" rx="6" fill="#0D1A2E" stroke="#1E3A5F" stroke-width="1"/>
  <text x="640" y="205" font-family="'Inter','Segoe UI',sans-serif" font-size="11" font-weight="700" fill="#5A7090" letter-spacing="0.1em">TRENDING REGIME</text>
  <text x="640" y="238" font-family="'Inter','Segoe UI',sans-serif" font-size="30" font-weight="700" fill="#EF4444">71.8%</text>
  <text x="780" y="238" font-family="'Inter','Segoe UI',sans-serif" font-size="12" fill="#7A90B0">of folds gated to cash</text>
  <rect x="620" y="268" width="240" height="70" rx="6" fill="#071210" stroke="#10B981" stroke-width="1"/>
  <text x="640" y="293" font-family="'Inter','Segoe UI',sans-serif" font-size="11" font-weight="700" fill="#4A7060" letter-spacing="0.1em">BEAR FOLD PROTECTION</text>
  <text x="640" y="326" font-family="'Inter','Segoe UI',sans-serif" font-size="30" font-weight="700" fill="#10B981">100%</text>
  <text x="780" y="326" font-family="'Inter','Segoe UI',sans-serif" font-size="12" fill="#5A9080">win rate, 29 bear folds</text>
  <rect x="620" y="356" width="240" height="70" rx="6" fill="#0a1425" stroke="#1E3A5F" stroke-width="1"/>
  <text x="640" y="381" font-family="'Inter','Segoe UI',sans-serif" font-size="11" font-weight="700" fill="#5A7090" letter-spacing="0.1em">MEAN MAX DRAWDOWN</text>
  <text x="640" y="414" font-family="'Inter','Segoe UI',sans-serif" font-size="30" font-weight="700" fill="#60A5FA">1.0%</text>
  <text x="714" y="414" font-family="'Inter','Segoe UI',sans-serif" font-size="14" fill="#4A6080"> vs 25% always-on</text>
  <!-- Title block -->
  <text x="60" y="100" font-family="'Inter','Segoe UI',sans-serif" font-size="11" font-weight="700" fill="#3B82F6" letter-spacing="0.14em">YODACOM RESEARCH &nbsp;&middot;&nbsp; MODERN-ERA STUDY</text>
  <text x="60" y="148" font-family="'Georgia','Times New Roman',serif" font-size="38" font-weight="700" fill="#F0F4FC">Grid Trading in the</text>
  <text x="60" y="195" font-family="'Georgia','Times New Roman',serif" font-size="38" font-weight="700" fill="#F0F4FC">Modern Crypto Era</text>
  <text x="60" y="230" font-family="'Georgia','Times New Roman',serif" font-size="32" fill="#00d4aa">2019 &ndash; 2025</text>
  <text x="60" y="268" font-family="'Inter','Segoe UI',sans-serif" font-size="15" fill="#7A90B0">Walk-Forward Validation of FIS v2 Gated Grid Strategy</text>
  <text x="60" y="290" font-family="'Inter','Segoe UI',sans-serif" font-size="14" fill="#5A7090">17 Assets &nbsp;&middot;&nbsp; 85 Folds &nbsp;&middot;&nbsp; 2-Year Train / 1-Year Test</text>
  <line x1="60" y1="308" x2="530" y2="308" stroke="url(#me-gridLineGrad)" stroke-width="1"/>
  <text x="60" y="350" font-family="'Inter','Segoe UI',sans-serif" font-size="13" fill="#4A6080">The companion paper to A1 (2013&ndash;2025). Applies the current production</text>
  <text x="60" y="368" font-family="'Inter','Segoe UI',sans-serif" font-size="13" fill="#4A6080">algorithm &mdash; FIS v2 Hurst gating, Variant C lower grace, 5-level burst</text>
  <text x="60" y="386" font-family="'Inter','Segoe UI',sans-serif" font-size="13" fill="#4A6080">trailing &mdash; to the mature-market era only.</text>
  <rect x="60" y="415" width="500" height="54" rx="6" fill="#0D1A2E" stroke="#2A4E6A" stroke-width="1"/>
  <text x="80" y="438" font-family="'Inter','Segoe UI',sans-serif" font-size="13" font-weight="600" fill="#C8D8EC">Key finding: FIS gate preserved capital in all 29 bear folds.</text>
  <text x="80" y="457" font-family="'Inter','Segoe UI',sans-serif" font-size="12" fill="#5A7090">Mean max drawdown reduced from 25.0% (always-on) to 1.0% (gated).</text>
  <text x="60" y="520" font-family="'Inter','Segoe UI',sans-serif" font-size="11" fill="#2A4060">Han Kessel &mdash; Yodacom Research &nbsp;&middot;&nbsp; 2026-05-27</text>
  <text x="1140" y="595" font-family="'Inter','Segoe UI',sans-serif" font-size="14" font-weight="700" fill="#1E3A5F" text-anchor="end" letter-spacing="0.06em">CoinRoc</text>
  <text x="1140" y="612" font-family="'Inter','Segoe UI',sans-serif" font-size="10" fill="#0E2040" text-anchor="end" letter-spacing="0.06em">CRYPTO GRID ANALYSIS</text>
  <line x1="0" y1="0" x2="1200" y2="0" stroke="#00d4aa" stroke-width="2" opacity="0.3"/>
  <line x1="0" y1="629" x2="1200" y2="629" stroke="#3B82F6" stroke-width="2" opacity="0.2"/>
</svg>
</div>
</FigureExpand>

<!-- Article header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-3xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Yodacom Research &middot; Paper № 8 &middot; May 2026
		</div>
		<h1 class="fade-up d1 mb-6 font-serif text-4xl font-500 leading-[1.08] tracking-tight text-navy-ink sm:text-5xl">
			Grid Trading in the Modern Crypto Era: What a Walk-Forward Study of 2019&ndash;2025 Actually Shows
		</h1>
		<p class="fade-up d2 mb-2 text-base leading-relaxed text-slate">
			Walk-Forward Validation of FIS v2 Gated Grid Strategy
		</p>
		<p class="fade-up d3 mb-1 text-base leading-relaxed text-slate">
			Han Kessel &middot; Jeremy J. Black &middot; Yodacom Research
		</p>
		<p class="fade-up d3 mb-6 text-sm text-slate/70">
			Research methodology: Han Kessel. Written by Lando. Figures: Sabine.
		</p>
		<p class="fade-up d4 max-w-2xl border-l-2 border-ochre/60 pl-4 text-base italic leading-relaxed text-slate">
			Not a cherry-picked window. Not a single asset in a favorable period. A 2-year train / 1-year
			test walk-forward study applied to 17 assets across five test years, using the same FIS v2
			regime-gated algorithm that powers CoinRoc today. The headline finding is not a return number
			&mdash; it is a protection number: the strategy outperformed buy-and-hold in 100% of the 29
			folds where the underlying asset fell more than 20% in a single year.
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

	<!-- ── Intro: The Elephant in the Room ──────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Introduction</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Elephant in the Room</h2>

		<!-- Headline callout -->
		<div class="mb-8 border border-rule bg-paper p-6 text-center">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Modern Era Study Window</div>
			<div class="font-serif text-5xl font-500 text-navy-ink">85</div>
			<div class="mt-2 text-sm text-slate">Walk-forward folds &middot; 17 assets &middot; 5 test years</div>
			<div class="mt-3 flex justify-center gap-8 text-xs text-slate-light">
				<span>FIS v2 gated &middot; 2019&ndash;2025</span>
				<span>2-year train / 1-year test</span>
			</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			If you have spent any time with crypto grid trading, you know the pitch: markets spend most
			of their time moving sideways, the grid captures that oscillation, and the strategy generates
			income without requiring you to predict direction. That pitch has an obvious stress test: the
			years 2019 through 2025 included a parabolic bull run that stretched into 2021, a crash in
			2022 that erased 60&ndash;90% from most major assets, and a recovery cycle that looked
			promising until 2025 took another leg down.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			So what does a rigorously constructed grid strategy actually do across those years?
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That is what this paper reports. Not a cherry-picked window. Not a single asset in a
			favorable period. A 2-year train / 1-year test walk-forward study applied to 17 assets
			across five test years, using a regime-gated production algorithm &mdash; the same Fuzzy
			Inference System that powers the grid bots in CoinRoc today. Every test year&rsquo;s strategy
			behavior was determined exclusively by data that preceded it. No look-ahead. No optimization
			on the test data.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The headline finding is not a return number. It is a protection number: <strong class="text-navy-deep">the strategy
			outperformed buy-and-hold in 100% of the 29 folds where the underlying asset fell more than
			20% in a single year.</strong> Every single one.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The cost of that protection is also disclosed here, fully. The FIS classified 71.8% of test
			periods as unsuitable for grid trading and held cash. In the folds where the grid ran, the
			median return was +1.9%. None of that is hidden.
		</p>
	</section>

	<!-- ── Section 1: Architecture ─────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 1</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What This Study Is &mdash; and What It Builds On</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The A1 paper (full history, 2013&ndash;2025, always-on baseline) established the architecture:
			walk-forward methodology, 17 assets, two-year training windows, one-year test periods. That
			paper reported 135 folds with a mean alpha of &minus;578% against buy-and-hold &mdash; a figure
			we published without softening because that is what the data showed. The context that matters:
			alpha against buy-and-hold is structurally negative when the underlying asset returns 1,000&ndash;3,000%
			in a year. No finite-return strategy competes with that math. The relevant question was always
			performance in <em>bear</em> environments, and A1&rsquo;s bear-fold win rate of 100% was the
			finding worth building on.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This paper runs the same architecture on the same 17 assets, filtered to the modern era:
			training windows beginning no earlier than January 2019. The algorithm is different from A1&rsquo;s
			always-on baseline &mdash; here we apply the production FIS v2 gate, which pauses the grid to
			cash when the Hurst exponent on the training window exceeds 0.55 (trending regime). The result
			is 85 folds, five test years per asset, capturing all of the volatility this era had to offer.
		</p>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">A clarifying note</div>
			<p class="text-base leading-relaxed text-slate">
				This is a walk-forward simulation on daily bars, not live trading results. The cost model
				uses retail Binance.US rates: 0.40% maker, 0.60% taker, 0.05% flat slippage. Fill logic
				assumes price-cross fills, not price-touch. Live execution will differ. These are out-of-sample
				research results. Past simulated performance does not guarantee future results.
			</p>
		</div>
	</section>

	<!-- ── Section 2: Regime Gate ──────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 2</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Regime Gate: 71.8% of the Time, It Said &ldquo;Stay Out&rdquo;</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Here is the first finding that requires honest interpretation rather than spin.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Across 85 folds, the FIS classified 61 of them &mdash; 71.8% &mdash; as trending regimes,
			where the Hurst exponent on the preceding two-year training window exceeded 0.55. In those
			folds, the grid was not deployed. Capital sat in cash. Return: 0%.
		</p>

		<!-- Figure 1 -->
		<FigureExpand label="Expand Figure 1 — Regime Distribution">
		<div class="my-12 w-full overflow-x-auto">
		<div style="width:100%;max-width:860px;background:#0F1B35;border:1px solid #1E3A5F;border-radius:10px;padding:40px 48px 48px;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#E8EDF5;">
		  <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#3B82F6;margin-bottom:8px;">Figure 1 &nbsp;&middot;&nbsp; A8 &nbsp;&middot;&nbsp; Yodacom Research</div>
		  <div style="font-size:20px;font-weight:700;color:#F0F4FC;margin-bottom:4px;line-height:1.3;">Regime Distribution &mdash; 85 Walk-Forward Folds</div>
		  <div style="font-size:13px;color:#7A90B0;margin-bottom:36px;">Modern-Era Study, 2019&ndash;2025 &nbsp;&middot;&nbsp; 17 assets &times; 5 test years &nbsp;&middot;&nbsp; FIS v2 gate</div>
		  <svg viewBox="0 0 760 420" width="100%" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
		    <defs>
		      <linearGradient id="f1me-barGated" x1="0" y1="0" x2="0" y2="1">
		        <stop offset="0%" stop-color="#EF4444" stop-opacity="0.95"/>
		        <stop offset="100%" stop-color="#B91C1C" stop-opacity="0.85"/>
		      </linearGradient>
		      <linearGradient id="f1me-barActive" x1="0" y1="0" x2="0" y2="1">
		        <stop offset="0%" stop-color="#3B82F6" stop-opacity="0.95"/>
		        <stop offset="100%" stop-color="#1D4ED8" stop-opacity="0.85"/>
		      </linearGradient>
		      <linearGradient id="f1me-barNoEntry" x1="0" y1="0" x2="0" y2="1">
		        <stop offset="0%" stop-color="#64748B" stop-opacity="0.9"/>
		        <stop offset="100%" stop-color="#475569" stop-opacity="0.8"/>
		      </linearGradient>
		      <linearGradient id="f1me-barBear" x1="0" y1="0" x2="0" y2="1">
		        <stop offset="0%" stop-color="#F97316" stop-opacity="0.95"/>
		        <stop offset="100%" stop-color="#C2410C" stop-opacity="0.85"/>
		      </linearGradient>
		    </defs>
		    <line x1="70" y1="350" x2="690" y2="350" stroke="#1E3A5F" stroke-width="1"/>
		    <line x1="70" y1="279" x2="690" y2="279" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="70" y1="209" x2="690" y2="209" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="70" y1="138" x2="690" y2="138" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="70" y1="68" x2="690" y2="68" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <text x="60" y="354" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="end">0</text>
		    <text x="60" y="283" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="end">20</text>
		    <text x="60" y="213" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="end">40</text>
		    <text x="60" y="142" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="end">60</text>
		    <text x="60" y="72" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="end">80</text>
		    <text x="28" y="200" font-family="Inter,sans-serif" font-size="11" fill="#7A90B0" text-anchor="middle" transform="rotate(-90,28,200)">Fold Count (n=85)</text>
		    <rect x="105" y="135" width="100" height="215" rx="4" fill="url(#f1me-barGated)"/>
		    <text x="155" y="125" font-family="Inter,sans-serif" font-size="22" font-weight="700" fill="#EF4444" text-anchor="middle">61</text>
		    <text x="155" y="141" font-family="Inter,sans-serif" font-size="11" fill="#EF4444" text-anchor="middle" opacity="0.8">71.8%</text>
		    <rect x="255" y="304" width="100" height="46" rx="4" fill="url(#f1me-barActive)"/>
		    <text x="305" y="294" font-family="Inter,sans-serif" font-size="22" font-weight="700" fill="#3B82F6" text-anchor="middle">13</text>
		    <text x="305" y="310" font-family="Inter,sans-serif" font-size="11" fill="#3B82F6" text-anchor="middle" opacity="0.8">15.3%</text>
		    <rect x="405" y="311" width="100" height="39" rx="4" fill="url(#f1me-barNoEntry)"/>
		    <text x="455" y="301" font-family="Inter,sans-serif" font-size="22" font-weight="700" fill="#94A3B8" text-anchor="middle">11</text>
		    <text x="455" y="317" font-family="Inter,sans-serif" font-size="11" fill="#94A3B8" text-anchor="middle" opacity="0.8">12.9%</text>
		    <rect x="555" y="248" width="100" height="102" rx="4" fill="url(#f1me-barBear)"/>
		    <text x="605" y="238" font-family="Inter,sans-serif" font-size="22" font-weight="700" fill="#F97316" text-anchor="middle">29</text>
		    <text x="605" y="254" font-family="Inter,sans-serif" font-size="11" fill="#F97316" text-anchor="middle" opacity="0.8">34.1%</text>
		    <text x="155" y="374" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">FIS-Gated</text>
		    <text x="155" y="389" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">(0% return, cash)</text>
		    <text x="305" y="374" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">Active Grid</text>
		    <text x="305" y="389" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">(&ge;20 trades)</text>
		    <text x="455" y="374" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">No-Entry</text>
		    <text x="455" y="389" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">(&lt;20 trades)</text>
		    <text x="605" y="374" font-family="Inter,sans-serif" font-size="12" font-weight="600" fill="#C8D8EC" text-anchor="middle">Bear Folds</text>
		    <text x="605" y="389" font-family="Inter,sans-serif" font-size="11" fill="#5A7090" text-anchor="middle">(B&amp;H &lt;&minus;20%)</text>
		    <text x="605" y="415" font-family="Inter,sans-serif" font-size="10" fill="#7A6030" text-anchor="middle">Note: 22 bear folds are FIS-gated; 5 are active; 2 are no-entry</text>
		    <line x1="155" y1="100" x2="250" y2="78" stroke="#EF4444" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
		    <rect x="252" y="60" width="200" height="32" rx="4" fill="#1A0808" stroke="#EF4444" stroke-width="1" stroke-opacity="0.4"/>
		    <text x="352" y="73" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#F87171" text-anchor="middle">KEY FINDING: 71.8% gated to cash</text>
		    <text x="352" y="87" font-family="Inter,sans-serif" font-size="10" fill="#9A6060" text-anchor="middle">Strategy was not deployed 6 of every 7 periods</text>
		  </svg>
		  <div style="display:flex;gap:16px;margin-top:28px;flex-wrap:wrap;">
		    <div style="flex:1;min-width:160px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:14px 16px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Total Folds</div>
		      <div style="font-size:26px;font-weight:700;color:#F0F4FC;">85</div>
		      <div style="font-size:11px;color:#4A6080;">17 assets &times; 5 test years</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#0a1425;border:3px solid #EF4444;border-radius:6px;padding:14px 16px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Trending Regime</div>
		      <div style="font-size:26px;font-weight:700;color:#EF4444;">71.8%</div>
		      <div style="font-size:11px;color:#4A6080;">Hurst &ge; 0.55 on training window</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#0a1425;border:3px solid #3B82F6;border-radius:6px;padding:14px 16px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Bear Protection</div>
		      <div style="font-size:26px;font-weight:700;color:#3B82F6;">100%</div>
		      <div style="font-size:11px;color:#4A6080;">Win rate across all 29 bear folds</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:14px 16px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Mean Max DD</div>
		      <div style="font-size:26px;font-weight:700;color:#F0F4FC;">1.0%</div>
		      <div style="font-size:11px;color:#4A6080;">vs 25.0% always-on baseline</div>
		    </div>
		  </div>
		  <div style="margin-top:20px;padding:12px 16px;background:#080e1c;border-radius:6px;border-left:3px solid #1E3A5F;font-size:11px;color:#4A6080;line-height:1.6;">
		    <strong style="color:#7A90B0;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Note: </strong>Bear folds (29) are a cross-cutting category &mdash; 22 are FIS-gated, 5 are active-grid, 2 are no-entry. They overlap with the first three bars. Regime classification is based on Hurst exponent computed on the 2-year training window preceding each test year.
		  </div>
		  <div style="margin-top:16px;font-size:10px;color:#2A4060;text-align:right;">
		    Yodacom Research &middot; Modern-Era Walk-Forward Study 2019&ndash;2025
		  </div>
		</div>
		</div>
		</FigureExpand>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That number is larger than most grid trading literature would suggest. The common claim is
			that markets trend roughly 20&ndash;30% of the time and oscillate the rest. This study, across
			17 crypto assets measured over standardized 2-year rolling windows, found the inverse for
			daily timeframes: roughly 72% of periods in the 2019&ndash;2025 era were trend-classified.
			The 2020&ndash;2021 bull cycle and the 2022 crash are both &ldquo;trending&rdquo; by the Hurst
			measure &mdash; they are sustained directional moves, not oscillations, and the FIS correctly
			identified them as such.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is not a failure of the algorithm. It is the algorithm doing what it was designed to do:
			recognize when a market is not a grid market and stay out. The question worth asking is not
			&ldquo;why was it in cash so often?&rdquo; but rather &ldquo;what happened in those periods if
			you had not been in cash?&rdquo;
		</p>

		<p class="text-base leading-relaxed text-slate">
			Here is what happened to buy-and-hold across the 22 folds where the FIS held cash during a
			bear year (B&amp;H return below &minus;20%): losses ranged from &minus;27.7% to &minus;90.9%.
			The FIS-gated return in all 22 of those folds: 0%. The gate preserved capital entirely.
		</p>
	</section>

	<!-- ── Section 3: Bear Protection ──────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 3</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Bear Fold Protection: The 100% Win Rate</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			If you held a portfolio of the 17 assets in this study through the bear periods it encountered,
			here is what would have happened to a $10,000 starting position in some representative cases:
		</p>

		<ul class="mb-6 space-y-3 text-base leading-relaxed text-slate">
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">ETH, 2022:</strong> $10,000 &rarr; $3,250. Buy-and-hold: &minus;67.5%.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">ADA, 2025:</strong> $10,000 &rarr; $3,950. Buy-and-hold: &minus;60.5%.</span>
			</li>
			<li class="flex gap-3">
				<span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-ochre"></span>
				<span><strong class="text-navy-deep">MANA, 2022:</strong> $10,000 &rarr; $910. Buy-and-hold: &minus;90.9%.</span>
			</li>
		</ul>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In every one of the 29 folds where buy-and-hold fell more than 20% during the test year, the
			CoinRoc strategy outperformed. In 22 of those folds, the FIS gate had correctly identified
			the preceding training window as trending, held cash for the full test year, and the outcome
			was $10,000 &rarr; $10,000. The loss-avoidance was complete.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The other 7 bear folds are where the comparison becomes more detailed. In 5 of those, the
			grid was actively running (the FIS had classified the preceding training window as ranging),
			and price turned down during the test year. In those 5 active bear folds, the grid still
			outperformed buy-and-hold substantially:
		</p>

		<!-- Figure 2 -->
		<FigureExpand label="Expand Figure 2 — Bear Fold Protection">
		<div class="my-12 w-full overflow-x-auto">
		<div style="width:100%;max-width:860px;background:#0F1B35;border:1px solid #1E3A5F;border-radius:10px;padding:40px 48px 48px;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#E8EDF5;">
		  <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#3B82F6;margin-bottom:8px;">Figure 2 &nbsp;&middot;&nbsp; A8 &nbsp;&middot;&nbsp; Yodacom Research</div>
		  <div style="font-size:20px;font-weight:700;color:#F0F4FC;margin-bottom:4px;line-height:1.3;">Bear Fold Capital Protection &mdash; 5 Active Bear Folds</div>
		  <div style="font-size:13px;color:#7A90B0;margin-bottom:36px;">Grid strategy vs Buy-and-Hold when B&amp;H fell more than 20% &nbsp;&middot;&nbsp; $10,000 initial capital per fold &nbsp;&middot;&nbsp; 100% bear-fold win rate</div>
		  <svg viewBox="0 0 760 460" width="100%" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
		    <defs>
		      <linearGradient id="f2me-gridBarGrad" x1="1" y1="0" x2="0" y2="0">
		        <stop offset="0%" stop-color="#10B981" stop-opacity="0.9"/>
		        <stop offset="100%" stop-color="#065F46" stop-opacity="0.7"/>
		      </linearGradient>
		      <linearGradient id="f2me-gridBarNeg" x1="1" y1="0" x2="0" y2="0">
		        <stop offset="0%" stop-color="#F59E0B" stop-opacity="0.9"/>
		        <stop offset="100%" stop-color="#92400E" stop-opacity="0.7"/>
		      </linearGradient>
		      <linearGradient id="f2me-bhBarGrad" x1="1" y1="0" x2="0" y2="0">
		        <stop offset="0%" stop-color="#EF4444" stop-opacity="0.85"/>
		        <stop offset="100%" stop-color="#7F1D1D" stop-opacity="0.6"/>
		      </linearGradient>
		    </defs>
		    <rect x="0" y="0" width="760" height="28" rx="0" fill="#091220" opacity="0.5"/>
		    <text x="80" y="18" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#7A90B0" letter-spacing="0.08em">ACTIVE BEAR FOLDS (grid ran &mdash; not gated to cash)</text>
		    <line x1="306" y1="36" x2="306" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3"/>
		    <line x1="242" y1="36" x2="242" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3"/>
		    <line x1="178" y1="36" x2="178" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3"/>
		    <line x1="114" y1="36" x2="114" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3"/>
		    <line x1="50" y1="36" x2="50" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3"/>
		    <line x1="370" y1="30" x2="370" y2="365" stroke="#2A4E6A" stroke-width="1.5"/>
		    <line x1="386" y1="36" x2="386" y2="365" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="3,3" opacity="0.5"/>
		    <text x="370" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">0%</text>
		    <text x="306" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;20%</text>
		    <text x="242" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;40%</text>
		    <text x="178" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;60%</text>
		    <text x="114" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;80%</text>
		    <text x="50" y="378" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;100%</text>
		    <text x="386" y="378" font-family="Inter,sans-serif" font-size="10" fill="#4A9070" text-anchor="middle">+</text>
		    <text x="380" y="392" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">Annual Return</text>
		    <!-- ROW 1: STXUSD 2022 -->
		    <text x="665" y="57" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C8D8EC" text-anchor="end">STXUSD 2022</text>
		    <text x="665" y="70" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">train 2020&ndash;2021</text>
		    <rect x="79" y="75" width="291" height="18" rx="3" fill="url(#f2me-bhBarGrad)"/>
		    <text x="75" y="88" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#EF4444" text-anchor="end">&minus;90.9%</text>
		    <text x="390" y="88" font-family="Inter,sans-serif" font-size="10" fill="#9A7070" text-anchor="start">Buy-and-Hold</text>
		    <rect x="274" y="50" width="96" height="18" rx="3" fill="url(#f2me-gridBarNeg)"/>
		    <text x="270" y="63" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#F59E0B" text-anchor="end">&minus;29.8%</text>
		    <text x="390" y="63" font-family="Inter,sans-serif" font-size="10" fill="#70906A" text-anchor="start">CoinRoc Grid</text>
		    <text x="740" y="64" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#10B981" text-anchor="end">+61.1 pp</text>
		    <text x="740" y="77" font-family="Inter,sans-serif" font-size="10" fill="#4A7060" text-anchor="end">alpha</text>
		    <!-- ROW 2: DOGEUSD 2025 -->
		    <text x="665" y="125" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C8D8EC" text-anchor="end">DOGEUSD 2025</text>
		    <text x="665" y="138" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">train 2023&ndash;2024</text>
		    <rect x="165" y="143" width="205" height="18" rx="3" fill="url(#f2me-bhBarGrad)"/>
		    <text x="161" y="156" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#EF4444" text-anchor="end">&minus;63.9%</text>
		    <text x="390" y="156" font-family="Inter,sans-serif" font-size="10" fill="#9A7070" text-anchor="start">Buy-and-Hold</text>
		    <rect x="340" y="118" width="30" height="18" rx="3" fill="url(#f2me-gridBarNeg)"/>
		    <text x="336" y="131" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#F59E0B" text-anchor="end">&minus;9.3%</text>
		    <text x="390" y="131" font-family="Inter,sans-serif" font-size="10" fill="#70906A" text-anchor="start">CoinRoc Grid</text>
		    <text x="740" y="132" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#10B981" text-anchor="end">+54.6 pp</text>
		    <text x="740" y="145" font-family="Inter,sans-serif" font-size="10" fill="#4A7060" text-anchor="end">alpha</text>
		    <!-- ROW 3: XLMUSD 2025 -->
		    <text x="665" y="193" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C8D8EC" text-anchor="end">XLMUSD 2025</text>
		    <text x="665" y="206" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">train 2023&ndash;2024</text>
		    <rect x="201" y="211" width="169" height="18" rx="3" fill="url(#f2me-bhBarGrad)"/>
		    <text x="197" y="224" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#EF4444" text-anchor="end">&minus;52.8%</text>
		    <text x="390" y="224" font-family="Inter,sans-serif" font-size="10" fill="#9A7070" text-anchor="start">Buy-and-Hold</text>
		    <rect x="370" y="186" width="3" height="18" rx="2" fill="url(#f2me-gridBarGrad)"/>
		    <text x="366" y="199" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#10B981" text-anchor="end">+0.8%</text>
		    <text x="390" y="199" font-family="Inter,sans-serif" font-size="10" fill="#70906A" text-anchor="start">CoinRoc Grid</text>
		    <text x="740" y="200" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#10B981" text-anchor="end">+53.5 pp</text>
		    <text x="740" y="213" font-family="Inter,sans-serif" font-size="10" fill="#4A7060" text-anchor="end">alpha</text>
		    <!-- ROW 4: LTCUSD 2025 -->
		    <text x="665" y="261" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C8D8EC" text-anchor="end">LTCUSD 2025</text>
		    <text x="665" y="274" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">train 2023&ndash;2024</text>
		    <rect x="284" y="279" width="86" height="18" rx="3" fill="url(#f2me-bhBarGrad)"/>
		    <text x="280" y="292" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#EF4444" text-anchor="end">&minus;26.9%</text>
		    <text x="390" y="292" font-family="Inter,sans-serif" font-size="10" fill="#9A7070" text-anchor="start">Buy-and-Hold</text>
		    <rect x="370" y="254" width="12" height="18" rx="2" fill="url(#f2me-gridBarGrad)"/>
		    <text x="366" y="267" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#10B981" text-anchor="end">+3.8%</text>
		    <text x="390" y="267" font-family="Inter,sans-serif" font-size="10" fill="#70906A" text-anchor="start">CoinRoc Grid</text>
		    <text x="740" y="268" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#10B981" text-anchor="end">+30.8 pp</text>
		    <text x="740" y="281" font-family="Inter,sans-serif" font-size="10" fill="#4A7060" text-anchor="end">alpha</text>
		    <!-- ROW 5: XRPUSD 2025 -->
		    <text x="665" y="329" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#C8D8EC" text-anchor="end">XRPUSD 2025</text>
		    <text x="665" y="342" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">train 2023&ndash;2024</text>
		    <rect x="303" y="347" width="67" height="18" rx="3" fill="url(#f2me-bhBarGrad)"/>
		    <text x="299" y="360" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#EF4444" text-anchor="end">&minus;21.0%</text>
		    <text x="390" y="360" font-family="Inter,sans-serif" font-size="10" fill="#9A7070" text-anchor="start">Buy-and-Hold</text>
		    <rect x="370" y="322" width="5" height="18" rx="2" fill="url(#f2me-gridBarGrad)"/>
		    <text x="366" y="335" font-family="Inter,sans-serif" font-size="11" font-weight="600" fill="#10B981" text-anchor="end">+1.6%</text>
		    <text x="390" y="335" font-family="Inter,sans-serif" font-size="10" fill="#70906A" text-anchor="start">CoinRoc Grid</text>
		    <text x="740" y="336" font-family="Inter,sans-serif" font-size="12" font-weight="700" fill="#10B981" text-anchor="end">+22.6 pp</text>
		    <text x="740" y="349" font-family="Inter,sans-serif" font-size="10" fill="#4A7060" text-anchor="end">alpha</text>
		    <!-- Legend -->
		    <rect x="80" y="398" width="14" height="10" rx="2" fill="#10B981" opacity="0.8"/>
		    <text x="100" y="408" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">CoinRoc Grid Return</text>
		    <rect x="220" y="398" width="14" height="10" rx="2" fill="#EF4444" opacity="0.7"/>
		    <text x="240" y="408" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">Buy-and-Hold Return</text>
		    <rect x="380" y="398" width="14" height="10" rx="2" fill="#F59E0B" opacity="0.8"/>
		    <text x="400" y="408" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">Grid (negative &mdash; still outperforms)</text>
		    <text x="693" y="36" font-family="Inter,sans-serif" font-size="10" font-weight="700" fill="#4A7060" letter-spacing="0.08em">ALPHA</text>
		    <line x1="50" y1="105" x2="750" y2="105" stroke="#1A2E4A" stroke-width="1" opacity="0.4"/>
		    <line x1="50" y1="173" x2="750" y2="173" stroke="#1A2E4A" stroke-width="1" opacity="0.4"/>
		    <line x1="50" y1="241" x2="750" y2="241" stroke="#1A2E4A" stroke-width="1" opacity="0.4"/>
		    <line x1="50" y1="309" x2="750" y2="309" stroke="#1A2E4A" stroke-width="1" opacity="0.4"/>
		  </svg>
		  <!-- Gated folds summary -->
		  <div style="margin-top:24px;padding:16px 20px;background:#080e1c;border-radius:8px;border:1px solid #1E3A5F;">
		    <div style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;color:#5A7090;margin-bottom:10px;">22 Additional Bear Folds &mdash; FIS-Gated to Cash (0%)</div>
		    <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
		      <div style="flex:1;min-width:180px;">
		        <div style="font-size:24px;font-weight:700;color:#10B981;">$10,000</div>
		        <div style="font-size:11px;color:#4A7090;margin-top:2px;">Capital preserved &mdash; every gated bear fold</div>
		      </div>
		      <div style="flex:2;min-width:260px;font-size:12px;color:#5A8070;line-height:1.6;">
		        The FIS gate correctly identified all 22 as trending (Hurst &ge; 0.55) and held cash for the full year. B&amp;H losses ranged from &minus;20% to &minus;90.9%. Grid return: 0%. Capital preserved in every case.
		      </div>
		    </div>
		  </div>
		  <div style="display:flex;gap:12px;margin-top:16px;flex-wrap:wrap;">
		    <div style="flex:1;min-width:140px;background:#071210;border:3px solid #10B981;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4A7060;margin-bottom:4px;">Bear Fold Win Rate</div>
		      <div style="font-size:28px;font-weight:700;color:#10B981;">100%</div>
		      <div style="font-size:11px;color:#3A6050;">29 / 29 folds</div>
		    </div>
		    <div style="flex:1;min-width:140px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Best Single Alpha</div>
		      <div style="font-size:28px;font-weight:700;color:#F0F4FC;">+61.1 pp</div>
		      <div style="font-size:11px;color:#4A6080;">STXUSD 2022 (grid &minus;29.8% vs B&amp;H &minus;90.9%)</div>
		    </div>
		    <div style="flex:1;min-width:140px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Worst Active Fold</div>
		      <div style="font-size:28px;font-weight:700;color:#F59E0B;">&minus;29.8%</div>
		      <div style="font-size:11px;color:#4A6080;">STXUSD 2022 &mdash; still +61 pp above B&amp;H</div>
		    </div>
		  </div>
		  <div style="margin-top:16px;font-size:10px;color:#2A4060;text-align:right;">
		    Yodacom Research &middot; Modern-Era Walk-Forward Study 2019&ndash;2025
		  </div>
		</div>
		</div>
		</FigureExpand>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The STXUSD 2022 result deserves specific acknowledgment: a &minus;29.8% grid return is a
			meaningful loss. But the buy-and-hold alternative in the same period was &minus;90.9%. The
			worst fold in the entire modern-era dataset still preserved $7,020 out of $10,000. The
			alternative left $910. That is the structure of the protection story &mdash; not a guarantee
			of positive returns, but a systematic reduction in downside exposure.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The aggregate statement is accurate and fully supported: <strong class="text-navy-deep">in all
			29 bear folds across the modern era study, the strategy outperformed buy-and-hold.</strong>
			The mechanism differs across the 29 (FIS gate in 22, active grid in 5, no-entry in 2), but
			the outcome is consistent.
		</p>
	</section>

	<!-- ── Section 4: Active Folds ──────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 4</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">When the Grid Was Actually Deployed</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			Of the 85 folds, 13 had the grid running with enough activity to constitute meaningful
			performance data (20 or more completed trades). These are the periods where the FIS classified
			the training window as ranging, the grid was deployed, and the algorithm was executing the
			income strategy it was designed for.
		</p>

		<!-- Figure 3 -->
		<FigureExpand label="Expand Figure 3 — Active Fold Scatter">
		<div class="my-12 w-full overflow-x-auto">
		<div style="width:100%;max-width:860px;background:#0F1B35;border:1px solid #1E3A5F;border-radius:10px;padding:40px 48px 48px;font-family:'Inter','Segoe UI',system-ui,sans-serif;color:#E8EDF5;">
		  <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#3B82F6;margin-bottom:8px;">Figure 3 &nbsp;&middot;&nbsp; A8 &nbsp;&middot;&nbsp; Yodacom Research</div>
		  <div style="font-size:20px;font-weight:700;color:#F0F4FC;margin-bottom:4px;line-height:1.3;">Active Fold Performance &mdash; 13 Folds Where Grid Ran (&ge;20 Trades)</div>
		  <div style="font-size:13px;color:#7A90B0;margin-bottom:36px;">Grid return vs Buy-and-Hold return &nbsp;&middot;&nbsp; Only folds where the FIS allowed grid operation &nbsp;&middot;&nbsp; Median grid return = +1.9%</div>
		  <svg viewBox="0 0 760 440" width="100%" xmlns="http://www.w3.org/2000/svg" style="overflow:visible">
		    <defs>
		      <radialGradient id="f3me-dotBlue" cx="40%" cy="35%" r="60%">
		        <stop offset="0%" stop-color="#60A5FA"/>
		        <stop offset="100%" stop-color="#1D4ED8"/>
		      </radialGradient>
		      <radialGradient id="f3me-dotOrange" cx="40%" cy="35%" r="60%">
		        <stop offset="0%" stop-color="#FB923C"/>
		        <stop offset="100%" stop-color="#C2410C"/>
		      </radialGradient>
		      <radialGradient id="f3me-dotTeal" cx="40%" cy="35%" r="60%">
		        <stop offset="0%" stop-color="#34D399"/>
		        <stop offset="100%" stop-color="#065F46"/>
		      </radialGradient>
		    </defs>
		    <rect x="80" y="46" width="600" height="334" rx="2" fill="#080e1c" opacity="0.5"/>
		    <line x1="80" y1="64" x2="680" y2="64" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="80" y1="99" x2="680" y2="99" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="80" y1="134" x2="680" y2="134" stroke="#2A4E6A" stroke-width="1.5"/>
		    <line x1="80" y1="204" x2="680" y2="204" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="80" y1="274" x2="680" y2="274" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="80" y1="344" x2="680" y2="344" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="247" y1="46" x2="247" y2="380" stroke="#2A4E6A" stroke-width="1.5"/>
		    <line x1="330" y1="46" x2="330" y2="380" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="414" y1="46" x2="414" y2="380" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="497" y1="46" x2="497" y2="380" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="580" y1="46" x2="580" y2="380" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <line x1="164" y1="46" x2="164" y2="380" stroke="#1A2E4A" stroke-width="1" stroke-dasharray="4,4"/>
		    <rect x="80" y="46" width="167" height="88" rx="0" fill="#0f2018" opacity="0.4"/>
		    <text x="164" y="62" font-family="Inter,sans-serif" font-size="9" fill="#2A7050" text-anchor="middle" opacity="0.6">GRID WINS / B&amp;H FALLS</text>
		    <line x1="80" y1="121" x2="680" y2="121" stroke="#F59E0B" stroke-width="1.5" stroke-dasharray="6,4" opacity="0.7"/>
		    <text x="684" y="125" font-family="Inter,sans-serif" font-size="10" fill="#F59E0B" text-anchor="start">median +1.9%</text>
		    <text x="70" y="68" font-family="Inter,sans-serif" font-size="10" fill="#4A9080" text-anchor="end">+10%</text>
		    <text x="70" y="103" font-family="Inter,sans-serif" font-size="10" fill="#4A9080" text-anchor="end">+5%</text>
		    <text x="70" y="138" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="end">0%</text>
		    <text x="70" y="208" font-family="Inter,sans-serif" font-size="10" fill="#8A6060" text-anchor="end">&minus;10%</text>
		    <text x="70" y="278" font-family="Inter,sans-serif" font-size="10" fill="#8A6060" text-anchor="end">&minus;20%</text>
		    <text x="70" y="348" font-family="Inter,sans-serif" font-size="10" fill="#8A6060" text-anchor="end">&minus;30%</text>
		    <text x="24" y="215" font-family="Inter,sans-serif" font-size="11" fill="#7A90B0" text-anchor="middle" transform="rotate(-90,24,215)">Grid Return</text>
		    <text x="247" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">0%</text>
		    <text x="330" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">+50%</text>
		    <text x="414" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">+100%</text>
		    <text x="497" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">+150%</text>
		    <text x="580" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">+200%</text>
		    <text x="164" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;50%</text>
		    <text x="90" y="398" font-family="Inter,sans-serif" font-size="10" fill="#5A7090" text-anchor="middle">&minus;100%</text>
		    <text x="380" y="416" font-family="Inter,sans-serif" font-size="11" fill="#7A90B0" text-anchor="middle">Buy-and-Hold Return (same test year)</text>
		    <!-- Data points -->
		    <circle cx="305" cy="94" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="313" y="90" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">ADA 24</text>
		    <circle cx="651" cy="125" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="634" y="118" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">DOGE 24</text>
		    <circle cx="140" cy="200" r="7" fill="url(#f3me-dotOrange)" stroke="#C2410C" stroke-width="1"/>
		    <text x="150" y="196" font-family="Inter,sans-serif" font-size="9" fill="#FCA87A">DOGE 25</text>
		    <circle cx="310" cy="110" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="296" y="107" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">LTC 24</text>
		    <circle cx="202" cy="108" r="7" fill="url(#f3me-dotTeal)" stroke="#065F46" stroke-width="1"/>
		    <text x="188" y="103" font-family="Inter,sans-serif" font-size="9" fill="#6EE7B7">LTC 25</text>
		    <circle cx="239" cy="82" r="9" fill="url(#f3me-dotTeal)" stroke="#065F46" stroke-width="1.5"/>
		    <text x="251" y="78" font-family="Inter,sans-serif" font-size="9" font-weight="700" fill="#6EE7B7">NEO 24 +7.4%</text>
		    <circle cx="95" cy="344" r="7" fill="url(#f3me-dotOrange)" stroke="#C2410C" stroke-width="1"/>
		    <text x="105" y="356" font-family="Inter,sans-serif" font-size="9" fill="#FCA87A">STX 22</text>
		    <text x="105" y="367" font-family="Inter,sans-serif" font-size="9" fill="#FCA87A">&minus;29.8%</text>
		    <circle cx="266" cy="121" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="272" y="117" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">TRX 25</text>
		    <circle cx="499" cy="99" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="504" y="95" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">XLM 24</text>
		    <circle cx="159" cy="129" r="7" fill="url(#f3me-dotTeal)" stroke="#065F46" stroke-width="1"/>
		    <text x="143" y="124" font-family="Inter,sans-serif" font-size="9" fill="#6EE7B7">XLM 25</text>
		    <circle cx="278" cy="133" r="6" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1" opacity="0.85"/>
		    <text x="284" y="144" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">XMR 23</text>
		    <circle cx="630" cy="87" r="7" fill="url(#f3me-dotBlue)" stroke="#1D4ED8" stroke-width="1"/>
		    <text x="614" y="82" font-family="Inter,sans-serif" font-size="9" fill="#93C5FD">XRP 24</text>
		    <circle cx="212" cy="123" r="7" fill="url(#f3me-dotTeal)" stroke="#065F46" stroke-width="1"/>
		    <text x="215" y="115" font-family="Inter,sans-serif" font-size="9" fill="#6EE7B7">XRP 25</text>
		    <!-- Legend -->
		    <circle cx="90" cy="420" r="6" fill="url(#f3me-dotBlue)"/>
		    <text x="102" y="424" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">Bull-era fold (B&amp;H positive, grid positive)</text>
		    <circle cx="330" cy="420" r="6" fill="url(#f3me-dotTeal)"/>
		    <text x="342" y="424" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">Bear fold, grid outperforms (alpha +)</text>
		    <circle cx="540" cy="420" r="6" fill="url(#f3me-dotOrange)"/>
		    <text x="552" y="424" font-family="Inter,sans-serif" font-size="11" fill="#A0B8C8">Bear fold, grid negative (still above B&amp;H)</text>
		  </svg>
		  <div style="display:flex;gap:12px;margin-top:28px;flex-wrap:wrap;">
		    <div style="flex:1;min-width:160px;background:#0a1425;border:3px solid #1E3A5F;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Active Folds</div>
		      <div style="font-size:26px;font-weight:700;color:#F0F4FC;">13</div>
		      <div style="font-size:11px;color:#4A6080;">of 85 total folds</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#071210;border:3px solid #10B981;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#4A7060;margin-bottom:4px;">Median Return</div>
		      <div style="font-size:26px;font-weight:700;color:#10B981;">+1.9%</div>
		      <div style="font-size:11px;color:#3A6050;">13-fold median</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">Best Active</div>
		      <div style="font-size:26px;font-weight:700;color:#60A5FA;">+7.4%</div>
		      <div style="font-size:11px;color:#4A6080;">NEOUSD 2024</div>
		    </div>
		    <div style="flex:1;min-width:160px;background:#0a1425;border:1px solid #1E3A5F;border-radius:6px;padding:12px 14px;">
		      <div style="font-size:10px;font-weight:700;letter-spacing:0.1em;text-transform:uppercase;color:#5A7090;margin-bottom:4px;">2024 Record</div>
		      <div style="font-size:26px;font-weight:700;color:#F0F4FC;">4 / 4</div>
		      <div style="font-size:11px;color:#4A6080;">All 2024 active folds positive</div>
		    </div>
		  </div>
		  <div style="margin-top:16px;padding:12px 16px;background:#080e1c;border-radius:6px;border-left:3px solid #1E3A5F;font-size:11px;color:#4A6080;line-height:1.6;">
		    Bear folds (orange, teal) plot left of the 0% B&amp;H line. Teal points are bear folds where the grid returned a profit despite the market falling. Orange points (STXUSD 2022, DOGEUSD 2025) are folds where the grid was negative but still substantially outperformed B&amp;H. All 5 active bear folds appear in the upper-left quadrant &mdash; positive alpha regardless of grid return sign.
		  </div>
		  <div style="margin-top:16px;font-size:10px;color:#2A4060;text-align:right;">
		    Yodacom Research &middot; Modern-Era Walk-Forward Study 2019&ndash;2025
		  </div>
		</div>
		</div>
		</FigureExpand>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The median return across these 13 active folds was <strong class="text-navy-deep">+1.9%</strong>.
			The mean was pulled toward zero by a single outlier: STXUSD 2022, a &minus;29.8% result during
			a fold that turned from bear to deep bear mid-year.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The 2024 test year produced the most concentrated grid activity in the dataset &mdash; four
			active folds, all positive:
		</p>

		<div class="mb-5 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Asset</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Test Year</th>
						<th class="py-2.5 pr-6 font-semibold text-slate-light">Grid Return</th>
						<th class="py-2.5 font-semibold text-slate-light">Max Drawdown</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ asset: 'NEOUSD', year: '2024', ret: '+7.4%', dd: '5.4%' },
						{ asset: 'XRPUSD', year: '2024', ret: '+6.7%', dd: '2.2%' },
						{ asset: 'ADAUSD', year: '2024', ret: '+5.8%', dd: '6.2%' },
						{ asset: 'LTCUSD', year: '2024', ret: '+3.4%', dd: '1.8%' },
					] as row (row.asset)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-6 font-medium text-navy-deep">{row.asset}</td>
							<td class="py-2.5 pr-6">{row.year}</td>
							<td class="py-2.5 pr-6 font-semibold text-teal-700">{row.ret}</td>
							<td class="py-2.5">{row.dd}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="text-base leading-relaxed text-slate">
			Why 2024? The 2022&ndash;2023 training window provided the conditions the FIS needs to classify
			a market as ranging: after the 2022 crash and the 2023 partial recovery, Hurst readings dropped
			below 0.55 across several assets, signaling that sustained trend persistence had diminished.
			The grid was deployed into that environment, and it earned.
		</p>
	</section>

	<!-- ── Section 5: Reconciliation ───────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 5</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">An Honest Reconciliation: Why the Study Shows 1.9%, Not 20%+</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			If you have looked at the Discovery page on CoinRoc, you have seen projected returns for grid
			strategies that are considerably higher than 1.9%. Those numbers are not wrong. But they
			measure something different, and the difference is important.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The Discovery page projections are regime-conditional estimates: what the grid earns when
			operating in a confirmed ranging market for a full period. They model the strategy under the
			conditions it is designed for &mdash; low Hurst, price oscillating within the grid, the bot
			actively cycling through all 55 levels.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The 1.9% median from this study is measured across <em>all</em> active folds, including the
			ones that encountered adverse conditions mid-period. The FIS gate is the bridge between the
			two numbers. When you hold 71.8% of periods in cash at 0% and blend those with active-period
			returns, the blended result is lower than the regime-conditional projection.
		</p>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">An analogy</div>
			<p class="text-base leading-relaxed text-slate">
				If a baseball hitter bats .320 when they swing, but takes 70% of pitches &mdash; and takes
				them correctly, because they were balls &mdash; their overall scoring rate looks lower than
				their batting average. The pitches they correctly let pass are not outs. They are the right
				call. The 71.8% gate rate is not 71.8% of the strategy failing to work. It is 71.8% of
				periods correctly identified as not suitable for the strategy.
			</p>
		</div>
	</section>

	<!-- ── Section 6: Modern Era vs Full History ────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 6</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The Modern Era vs. the Full History</h2>

		<div class="mb-5 overflow-x-auto">
			<table class="w-full border-collapse text-sm text-slate">
				<thead>
					<tr class="border-b border-rule text-left">
						<th class="py-2.5 pr-4 font-semibold text-slate-light">Metric</th>
						<th class="py-2.5 pr-4 font-semibold text-slate-light">Modern-Era FIS-Gated</th>
						<th class="py-2.5 pr-4 font-semibold text-slate-light">A1 Modern Subset (Always-On)</th>
						<th class="py-2.5 font-semibold text-slate-light">A1 Full History (Always-On)</th>
					</tr>
				</thead>
				<tbody>
					{#each [
						{ metric: 'Mean total return', gated: '~0%', a1modern: '−9.4%', a1full: '−8.6%' },
						{ metric: 'Mean max drawdown', gated: '1.0%', a1modern: '25.0%', a1full: '24.3%' },
						{ metric: 'Bear fold win rate', gated: '100%', a1modern: '100%', a1full: '100%' },
						{ metric: 'Trending regime %', gated: '71.8%', a1modern: '52.0%', a1full: '59.9%' },
					] as row (row.metric)}
						<tr class="border-b border-rule/50 last:border-0">
							<td class="py-2.5 pr-4 font-medium text-navy-deep">{row.metric}</td>
							<td class="py-2.5 pr-4">{row.gated}</td>
							<td class="py-2.5 pr-4">{row.a1modern}</td>
							<td class="py-2.5">{row.a1full}</td>
						</tr>
					{/each}
				</tbody>
			</table>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The mean total return improvement from &minus;9.4% (always-on modern era) to approximately 0%
			(FIS-gated modern era) requires careful explanation. It is primarily an accounting result:
			gated folds contribute 0% to the mean, replacing large negative returns from the always-on
			strategy in bear years. The FIS is a loss-avoidance mechanism, not a return-generation
			mechanism. It prevented the &minus;25% mean drawdown of the always-on approach by correctly
			holding cash during the majority of the period.
		</p>

		<p class="text-base leading-relaxed text-slate">
			The trending regime percentage comparison reveals something about the era itself. The modern
			era (2019&ndash;2025) is more trending than the full history under standardized 2-year
			measurement windows &mdash; 71.8% vs 59.9%. This is driven by the extreme bull and bear cycles
			of 2020&ndash;2022. The FIS gate was tested on precisely the market conditions that are hardest
			for grid strategies, and it responded correctly.
		</p>
	</section>

	<!-- ── Section 7: ZEC Disclosure ────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 7</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">The ZEC Question: Disclosing the Opportunity Cost</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This paper would be incomplete without disclosing the largest single opportunity cost in the
			dataset.
		</p>

		<div class="mb-6 border border-rule bg-paper p-6">
			<div class="mb-1 text-[0.68rem] uppercase tracking-widest text-slate-light">Opportunity Cost Disclosure</div>
			<div class="font-serif text-4xl font-500 text-navy-ink">+807.3%</div>
			<div class="mt-2 text-sm text-slate">ZECUSD buy-and-hold return in test year 2025 &mdash; while CoinRoc held cash</div>
			<div class="mt-3 text-xs text-slate-light">FIS classified preceding training window as trending (H = 0.574). Gate held cash for full year. On $10,000: B&amp;H returned ~$90,730. CoinRoc returned $10,000.</div>
		</div>

		<p class="mb-5 text-base leading-relaxed text-slate">
			This is not a failure of the gate &mdash; it did exactly what it was designed to do, which
			is recognize a trending regime and step aside. But &ldquo;stepping aside&rdquo; during an
			+807% move is a real and substantial opportunity cost, and any honest presentation of this
			strategy must include it.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The FIS gate cannot distinguish between up-trending and down-trending markets. A high Hurst
			exponent means persistent directional movement; the gate treats both directions identically.
			In down-trending regimes, this is the entire point: the gate prevents the capital destruction
			of riding an &minus;80% drawdown. In up-trending regimes, the cost is the upside not captured.
		</p>

		<p class="text-base leading-relaxed text-slate">
			This asymmetry defines the boundary of what the current strategy does: it preserves capital
			through bear markets and oscillates in ranging markets. It does not participate in parabolic
			bull runs. For investors whose primary concern is avoiding the 2022 experience, that is the
			correct tradeoff. For investors primarily seeking bull-market exposure, this is not that strategy.
		</p>
	</section>

	<!-- ── Section 8: Three-State Preview ───────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 8</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">A Preview: What Happens When You Add a Third State?</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The natural question after seeing the gated opportunity cost is whether the strategy needs to
			be purely binary &mdash; grid or cash.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The two-state FIS (grid when ranging, cash when trending) is the subject of this paper. But
			a body of parallel research has been exploring a third state: what if the strategy could deploy
			a trailing-stop momentum sleeve during confirmed parabolic up-trends, while maintaining the
			full capital protection profile in bear environments?
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The preliminary analysis across the same 85 modern-era folds suggests this three-state approach
			shifts the mean return from approximately 0% (two-state) to an estimated <strong class="text-navy-deep">+4.8%</strong>
			&mdash; a proxy figure, not a completed simulation &mdash; with bear-fold protection rates
			unchanged at 100%.
		</p>

		<div class="border-l-2 border-ochre/60 pl-4">
			<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Two important qualifications</div>
			<p class="mb-3 text-base leading-relaxed text-slate">
				First, the +4.8% is a proxy estimate using validated capture rates from intra-fold
				backtesting, not a full bar-by-bar simulation. The correct conservative range is +2.4%
				to +4.8% (the lower figure excludes the two largest outlier contributions).
			</p>
			<p class="text-base leading-relaxed text-slate">
				Second, the parabolic detector used in this research was calibrated using 2021 price
				history as the design case; any estimate that includes 2021 folds carries in-sample bias.
				The full three-state analysis is the subject of a companion paper currently under internal
				review. The disclosure here is intentional: we are showing readers the direction of the
				research, not presenting it as a completed result.
			</p>
		</div>
	</section>

	<!-- ── Section 9: For Investors Who Remember 2022 ───────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 9</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">What This Means for Investors Who Remember 2022</h2>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The 2022 crypto bear market was the test case this study was designed to examine. In that
			year, ETH lost 67.5%, BTC lost 64.2%, ADA lost 81.2%, and MANA lost 90.9%. Investors who
			held through it experienced some of the sharpest drawdowns in the asset class&rsquo;s history.
			Investors who had been using always-on grid bots experienced something similar: the bots
			accumulated positions as prices fell, deploying capital progressively into an accelerating
			decline, amplifying rather than mitigating the loss.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			The FIS-gated strategy in this study did none of that. It recognized the trending regime in
			the preceding training window, held cash for the full year, and earned 0% while buy-and-hold
			lost 60&ndash;90%.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			That 0% is not an exciting return. But for an investor whose alternative was &minus;65%, it
			represents the most important thing a capital protection strategy can offer: the preservation
			of the capital base that allows participation in the next cycle.
		</p>

		<p class="mb-5 text-base leading-relaxed text-slate">
			In 2024 &mdash; the year that followed the 2022&ndash;2023 post-crash training window &mdash;
			four active folds ran, all positive, with returns ranging from +3.4% to +7.4%. The conditions
			that followed the bear market were exactly the conditions the grid was built for.
		</p>

		<div class="border border-rule bg-paper p-6">
			<div class="mb-2 text-[0.68rem] uppercase tracking-widest text-slate-light">The purpose of this research</div>
			<p class="text-sm leading-relaxed text-slate">
				Not to claim the strategy is perfect, or always-on, or the only approach worth considering.
				But to show, specifically, with data, what a walk-forward simulation of a regime-gated grid
				strategy looked like across the full modern era &mdash; including the years nobody wants to
				show you.
			</p>
		</div>
	</section>

	<!-- ── Section 10: Honest Limitations ──────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Section 10</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Honest Limitations</h2>

		<div class="space-y-4">
			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Small active-fold sample</div>
				<p class="text-base leading-relaxed text-slate">
					Thirteen active folds is a limited sample for performance claims. The win rate and median
					return figures are directionally meaningful but carry wide uncertainty intervals. A proper
					block-bootstrap confidence interval computation (deferred to future research) would bound
					the range more precisely.
				</p>
			</div>

			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">Walk-forward approximation of the FIS</div>
				<p class="text-base leading-relaxed text-slate">
					The production FIS v2 is a 10-rule Mamdani system with EWMA smoothing and multi-indicator
					inputs. This walk-forward study approximates FIS behavior via the Hurst exponent threshold
					alone &mdash; a deliberate simplification. The approximation is directionally accurate but
					does not capture all the nuance of the production system&rsquo;s regime classification.
				</p>
			</div>

			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">No-entry folds as a confound</div>
				<p class="text-base leading-relaxed text-slate">
					11 folds were neither FIS-gated nor active: the grid found fewer than 20 trades because
					the starting price landed outside the training-calibrated grid range. These contribute
					0% return, which is outperformance in bear folds but is not attributable to the strategy&rsquo;s
					active logic. They are reported separately.
				</p>
			</div>

			<div class="border-l-2 border-ochre/60 pl-4">
				<div class="mb-1 text-[0.72rem] font-semibold uppercase tracking-widest text-ochre-deep">The three-state study is a proxy analysis</div>
				<p class="text-base leading-relaxed text-slate">
					The +4.8% mean return improvement cited above is a research estimate based on validated
					structural assumptions, not a completed backtest result. It requires bar-by-bar simulation
					validation before it can be stated as a verified figure. It is included here to show the
					research direction. It should not be cited as performance data.
				</p>
			</div>
		</div>
	</section>

	<!-- ── Appendix: Methodology ────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Appendix</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Methodology Summary</h2>

		<details class="border border-rule bg-paper">
			<summary class="cursor-pointer px-6 py-4 text-sm font-semibold text-navy-deep hover:bg-cream-deep/40 transition select-none">
				Full methodology details &mdash; click to expand
			</summary>
			<div class="border-t border-rule px-6 py-5 text-sm leading-relaxed text-slate">
				<div class="mb-5 overflow-x-auto">
					<table class="w-full border-collapse text-xs text-slate">
						<tbody>
							{#each [
								{ param: 'Walk-forward structure', val: '2-year train / 1-year test / 1-year slide' },
								{ param: 'Era filter', val: 'Training windows beginning January 2019 or later' },
								{ param: 'Test years', val: '2021, 2022, 2023, 2024, 2025' },
								{ param: 'Total folds', val: '85 (17 assets × 5 test years)' },
								{ param: 'Grid levels', val: '55' },
								{ param: 'Grid spacing', val: '2.59% geometric' },
								{ param: 'FIS v2 gate', val: 'Hurst ≥ 0.55 on training window → trending regime → grid paused, 0 trades' },
								{ param: 'Variant C lower grace', val: 'OOR lower-bound fires at lowerLimit × 0.80 (not raw lower limit)' },
								{ param: 'Burst trailing', val: '5-level maximum per trigger' },
								{ param: 'Cost model', val: 'Retail Binance.US: 0.40% maker / 0.60% taker / 0.05% slippage' },
								{ param: 'Initial capital per fold', val: '$10,000' },
								{ param: 'Data source', val: 'Tiingo 1d bars' },
							] as row (row.param)}
								<tr class="border-b border-rule/50 last:border-0">
									<td class="py-2 pr-6 font-semibold text-navy-deep">{row.param}</td>
									<td class="py-2">{row.val}</td>
								</tr>
							{/each}
						</tbody>
					</table>
				</div>
				<p class="text-xs text-slate-light">
					Assets covered: ADAUSD, BCHUSD, BTCUSD, DASHUSD, DOGEUSD, EOSUSD, ETHUSD, LTCUSD,
					MANAUSD, NEOUSD, STXUSD, TRXUSD, XLMUSD, XMRUSD, XRPUSD, XTZUSD, ZECUSD.
				</p>
			</div>
		</details>
	</section>

	<!-- ── Important Disclosure ─────────────────────────────── -->
	<section class="mb-14">
		<div class="eyebrow mb-3">Disclosure</div>
		<h2 class="mb-6 font-serif text-2xl leading-snug text-navy-ink">Risk Disclosures</h2>

		<div class="border border-rule bg-cream-deep/60 p-6 text-sm leading-relaxed text-slate">
			<p>
				<strong class="text-navy-deep">Hypothetical and Simulated Performance.</strong> These are
				out-of-sample walk-forward simulation results on daily price bars, not live trading results.
				Past simulated performance does not guarantee future results. Hypothetical results have
				inherent limitations, are generally prepared with the benefit of hindsight, and frequently
				differ sharply from actual results.
			</p>

			<p class="mt-4">
				<strong class="text-navy-deep">Strategy Risk.</strong> Grid trading involves substantial
				risk of loss, including the potential loss of the full amount of capital deployed. The
				strategy described here is designed to hold cash during trending market regimes; this
				behavior will cause it to underperform buy-and-hold during sustained bull markets, including
				the ZECUSD +807% example disclosed above.
			</p>

			<p class="mt-4">
				<strong class="text-navy-deep">Three-State Proxy Analysis.</strong> The three-state analysis
				referenced in this paper is a proxy research estimate based on structural assumptions, not
				a completed backtest simulation. It is disclosed for transparency and direction-setting only.
				No investment should be made based on proxy estimates pending independent validation.
			</p>

			<p class="mt-4">
				<strong class="text-navy-deep">Not Investment Advice.</strong> This research is published
				for educational purposes. It does not constitute investment advice. CoinRoc and Yodacom do
				not provide personalized investment recommendations. Consult a qualified financial
				professional before making investment decisions.
			</p>

			<p class="mt-4">
				<strong class="text-navy-deep">Digital Asset Risk.</strong> Digital assets are highly
				volatile and speculative and may experience rapid price declines including total loss.
				Regulatory treatment is evolving and uncertain.
			</p>
		</div>
	</section>

	<!-- Citation and author -->
	<section class="mb-10 border-t border-rule pt-8">
		<div class="space-y-3 text-sm text-slate">
			<p>
				<strong class="text-navy-deep">Citation:</strong>
				Kessel, H., &amp; Black, J. J. (2026). Grid Trading in the Modern Crypto Era: What a
				Walk-Forward Study of 2019&ndash;2025 Actually Shows. <em>Yodacom Research pre-print.</em>
			</p>
			<p>
				<strong class="text-navy-deep">Research methodology:</strong> Han Kessel, Trading/Algorithm
				Specialist &middot; <strong class="text-navy-deep">Written by:</strong> Lando, Senior Content
				Writer and Strategist &middot; <strong class="text-navy-deep">Figures:</strong> Sabine
			</p>
			<p>
				<strong class="text-navy-deep">Companion pieces:</strong>
				<a href="/research/grid-trading-walk-forward-2026" class="text-ochre-deep hover:text-ochre transition">A1 &mdash; Full History Walk-Forward 2013&ndash;2025</a>
				&nbsp;&middot;&nbsp;
				<a href="/research/grid-vs-options-2026" class="text-ochre-deep hover:text-ochre transition">A2 &mdash; Grid Trading vs. Options for Income</a>
			</p>
			<p>
				<strong class="text-navy-deep">Author:</strong>
				Jeremy Black is CEO of <a href="https://yodacom.com" class="text-ochre-deep hover:text-ochre transition">YodaCom.com</a>
				and the creator of CoinRoc, an AI-powered crypto grid trading analysis platform.
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
