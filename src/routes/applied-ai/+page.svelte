<script lang="ts">
	type Capability = {
		title: string;
		body: string;
	};

	type Showcase = {
		label: string;
		heading: string;
		body: string;
	};

	type Audience = {
		title: string;
		body: string;
	};

	const capabilities: Capability[] = [
		{
			title: 'Fuzzy inference systems',
			body: 'Mamdani and Sugeno architectures for decision support where the output has to be explainable to a compliance officer, not just accurate.'
		},
		{
			title: 'Hybrid ML + rule-based architectures',
			body: "Fuzzy rules encode the expert's intuition; machine learning tunes the membership functions from data. Neither pure black-box nor pure hand-coded."
		},
		{
			title: 'Neural networks and statistical models',
			body: 'Regime detection, signal extraction, and portfolio-scale backtesting.'
		},
		{
			title: 'Explainable-AI pipelines',
			body: 'For regulated contexts — fiduciary, EU AI Act, SEC-examinable. The output includes a defensible English rationale, not just a number.'
		},
		{
			title: 'Decision-support tools for advisors',
			body: "Software that sits next to a human, not software that replaces one. Fuzzy outputs in plain English, sized to the firm's risk budget."
		},
		{
			title: 'Research-grade backtests and simulations',
			body: 'Reproducible, peer-reviewable, with the code and the data paths documented.'
		}
	];

	const showcases: Showcase[] = [
		{
			label: 'CoinRoc — live product',
			heading: 'Fuzzy-logic risk throttling in production.',
			body: 'A crypto grid-trading analysis app running fuzzy-logic risk throttling in production. Not a research demo. Live users, live capital, live compute. The fuzzy engine tunes position sizing based on volatility and drawdown regime — and every decision logs an English-language rationale.'
		},
		{
			label: 'Yodacom Research — peer-reviewable papers',
			heading: 'Methodology published, not marketed.',
			body: 'The umbrella research house publishes methodology papers on fuzzy logic, post-MPT portfolio construction, and hybrid ML architectures. Paper 2 (in progress) documents the fuzzy membership-function design and the reproducibility artifacts behind the CoinRoc production engine.'
		},
		{
			label: 'RIA decision-support tool — in build',
			heading: 'Explainable multi-factor workflow for advisors.',
			body: "A workflow shaped for financial planners and registered investment advisors who want a crypto sleeve they can actually explain to a client and a compliance officer. MVP ships in 5–7 weeks. Fuzzy inference outputs map directly to the DOL safe-harbor 6-factor framework — so the advisor's recommendation memo writes itself."
		}
	];

	const audiences: Audience[] = [
		{
			title: 'RIAs and wealth managers',
			body: "Who want a crypto or alternatives sleeve their compliance officer can approve, not a black box their clients can't understand."
		},
		{
			title: 'Family offices',
			body: "Looking for quantitative infrastructure that's built by a practitioner who's run money, not by a bootcamp grad who's read about it."
		},
		{
			title: 'Fintechs and wealthtech firms',
			body: 'Who need applied AI capacity — fuzzy inference, hybrid models, explainability layers — without hiring a ten-person research team.'
		},
		{
			title: 'CIOs at legacy financial firms',
			body: 'Evaluating AI strategy who are tired of deck-driven consultants and want someone who ships code.'
		}
	];

	const contactHref = '/contact?topic=' + encodeURIComponent('AI Practice / Advisory');
</script>

<svelte:head>
	<title>Applied AI — Yodacom Research</title>
	<meta
		name="description"
		content="Forty years of practitioner depth at the intersection of quantitative finance and emerging technology. Fuzzy logic, hybrid ML, explainable AI for regulated contexts."
	/>
</svelte:head>

<!-- HERO -->
<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-4xl px-6 py-20 sm:py-28">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Practice · Yodacom Research
		</div>
		<h1
			class="fade-up d1 mb-8 font-serif font-500 tracking-tight text-navy-ink"
			style="font-size: var(--text-display); line-height: var(--text-hero-line);"
		>
			Applied <em class="text-ochre-deep">AI</em>.
		</h1>
		<p class="fade-up d2 max-w-2xl font-serif text-xl leading-relaxed text-slate">
			Built in the open, with 40 years of practitioner depth at the intersection of quantitative
			finance and emerging technology.
		</p>
	</div>
</section>

<!-- HERO PARAGRAPH — opening prose -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="space-y-5 font-serif text-[1.1rem] leading-[1.8] text-slate">
		<p>
			I wrote my first neural network in 1988 — on a 286, in a commodity pool office, trying to
			find signal in futures data. Since then I've shipped production systems across every wave:
			expert systems, MPT-based risk engines at Ramcap, managed-futures models at Navigator Fund
			(twice noted in the Wall Street Journal), curriculum at the College for Financial Planning,
			and now fuzzy-logic + ML hybrid systems for crypto grid trading. Same thread through all of
			it: quantitative finance meets whatever compute just became possible.
		</p>
		<p class="border-l-2 border-ochre pl-6 font-serif text-xl italic text-navy-ink">
			2026 is not a pivot. It's the year the compute finally caught up to ideas I've been tracking
			since the Reagan administration.
		</p>
	</div>
</section>

<!-- WHAT I BUILD -->
<section class="border-y border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-12 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Practice</div>
			<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">What I build.</h2>
		</div>

		<ul class="grid gap-6 md:grid-cols-2">
			{#each capabilities as cap (cap.title)}
				<li class="border-t border-ochre/40 pt-5">
					<h3 class="mb-2 font-serif text-xl text-navy-ink">{cap.title}</h3>
					<p class="text-sm leading-relaxed text-slate">{cap.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- WHERE IT SHOWS UP -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="mb-12 max-w-2xl">
		<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>In production &amp; in build</div>
		<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">Where it shows up.</h2>
	</div>

	<div class="space-y-10">
		{#each showcases as item (item.label)}
			<article class="grid gap-6 border-t border-rule pt-8 md:grid-cols-12">
				<div class="md:col-span-4">
					<div class="eyebrow">{item.label}</div>
				</div>
				<div class="md:col-span-8">
					<h3 class="mb-3 font-serif text-2xl leading-snug text-navy-ink">{item.heading}</h3>
					<p class="font-serif text-[1.05rem] leading-[1.75] text-slate">{item.body}</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- WHO THIS IS FOR -->
<section class="border-y border-rule/60 bg-topo-faint">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-12 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Fit</div>
			<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">Who this is for.</h2>
		</div>

		<ul class="grid gap-8 md:grid-cols-2">
			{#each audiences as who (who.title)}
				<li class="border-l-2 border-ochre/60 pl-5">
					<h3 class="mb-2 font-serif text-xl text-navy-ink">{who.title}</h3>
					<p class="text-sm leading-relaxed text-slate">{who.body}</p>
				</li>
			{/each}
		</ul>
	</div>
</section>

<!-- CLOSING + CTA -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>If any of this resonates</div>
	<h2 class="mb-8 font-serif text-4xl font-500 leading-tight text-navy-ink">
		A conversation, not a pitch.
	</h2>
	<div class="space-y-5 font-serif text-[1.1rem] leading-[1.8] text-slate">
		<p>
			If you're building in one of those lanes and you want a conversation with a practitioner —
			not a pitch, not a deck, a conversation — reach out. I take on a small number of advisory
			engagements each year, and I'm selective about fit. The work has to be interesting and the
			problem has to be real.
		</p>
	</div>

	<!-- Client video -->
	<div class="mt-12">
		<div class="eyebrow mb-2">Applied AI · client deliverable</div>
		<div class="max-w-2xl overflow-hidden rounded-sm border border-rule bg-paper">
			<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;">
				<iframe
					src="https://www.youtube.com/embed/lYoXqrgfNGg"
					title="Applied AI — Client Video"
					allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
					allowfullscreen
					loading="lazy"
					style="position:absolute;top:0;left:0;width:100%;height:100%;border:0;"
				></iframe>
			</div>
		</div>
	</div>

	<div class="mt-10 flex flex-wrap gap-3">
		<a
			href={contactHref}
			class="inline-flex items-center rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink"
		>
			Start a conversation →
		</a>
		<a
			href="/about"
			class="inline-flex items-center rounded-sm border border-navy-deep/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy-deep transition hover:border-navy-deep hover:bg-cream-deep/40"
		>
			About the founder
		</a>
	</div>
</section>
