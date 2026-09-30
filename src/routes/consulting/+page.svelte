<script lang="ts">
	interface Pkg {
		n: number;
		title: string;
		tagline: string;
		price: string;
		bestFor: string;
		scopeLabel?: string;
		scope: string[];
		endsWhen: string;
	}

	const SITE = 'https://yodacom.com';
	const pageTitle = 'AI Consulting for Colorado Businesses and Nonprofits | YodaCom';
	const pageDescription =
		'YodaCom is a Colorado AI consulting company that also builds AI software and infrastructure. Fixed-scope, fixed-price engagements with a clear end date.';
	const canonical = `${SITE}/consulting`;
	const ogImage = `${SITE}/consulting/consulting-hero-og.png`;
	const ogImageAlt =
		'Clear scope. Clear end date. Three steps: AI Readiness Workshop and Roadmap, Operations Automation Audit and Build, Idea-to-Product Sprint.';

	const packages: Pkg[] = [
		{
			n: 1,
			title: 'AI Readiness Workshop and Roadmap',
			tagline: 'The place to start if you are not sure where AI fits.',
			price:
				'Fixed price, fixed scope, agreed up front. Quoted after a short conversation about your needs.',
			bestFor:
				'Owners, boards and leadership teams who keep hearing "you need AI" and want a sober answer about what is real for their organization.',
			scope: [
				'A half-day or full-day working session with you and your team, on site in Summit County or the Front Range, or remote.',
				'A written roadmap of 5 to 10 pages: where AI can help in your operations, what to try first, what to avoid.',
				'A plain-language view of risk and cost, including privacy and accuracy.',
				'A short prioritized list of next steps, so you can act on it with us or without us.'
			],
			endsWhen: 'the roadmap is delivered and we have walked through it together.'
		},
		{
			n: 2,
			title: 'Operations Automation Audit and Build',
			tagline: 'Find the work that eats your week, then automate the best of it.',
			price:
				'The audit is a fixed-price first step, quoted after a short conversation about your needs. If you go ahead with the build, the build is quoted separately, at a fixed price, once the audit shows what is worth automating.',
			bestFor:
				'A business or nonprofit of roughly 5 to 100 people with repeat work in intake, scheduling, quoting, invoicing, reporting, follow-up, or donor and member communications.',
			scope: [
				"Audit (fixed price): a map of where your team's time goes, and a ranked list of what is worth automating.",
				'Build (quoted separately, after the audit): the top one to three workflows, built with AI agents and integrations, with a human review step wherever a mistake would matter.',
				'Testing on your real examples before handoff.',
				'A short runbook so your team can run and maintain the result.'
			],
			endsWhen:
				'the audit is delivered; if you proceed, when the agreed workflows are running and the runbook is handed over.'
		},
		{
			n: 3,
			title: 'Idea-to-Product Sprint',
			tagline: 'See a working version, not a slide deck.',
			price:
				'Fixed price, fixed scope, agreed up front. Quoted after a short conversation about your needs.',
			bestFor:
				'A founder, nonprofit director, event organizer or business owner with an idea for an app, tool or internal system and no technical team.',
			scope: [
				'Week 1: scope and design, agreed in writing before build begins.',
				'Middle weeks: build of a working first version (web app, mobile-friendly tool or simple automation), with a look at progress along the way.',
				'Final week: hardening, handoff and a written plan for what comes next.',
				'Working software you can use and show, not a report.'
			],
			endsWhen:
				'the first version is delivered and handed off. Any follow-on work is a separate, separately priced decision.'
		}
	];

	const proof: string[] = [
		'YodaCom operates with a team of specialized AI agents handling research, code review, testing, security review and content review, coordinated through Claude. It is how our own work gets done.',
		'We build and run production software: web apps in SvelteKit, mobile apps in React Native, with 50,000+ downloads across iOS and Android on apps built under YodaCom.',
		'Beyond client work, we build and run our own software, including a crypto analytics platform, an AI-agent data API and a live festival app.',
		"Since the early days of mobile, we have built apps for Summit County causes and events, including the free app for the Colorado BBQ Challenge in Frisco, CO, and the app for Romp to Stomp Out Cancer. The Summit Daily profiled YodaCom's founder in its Profiles section on October 13, 2013, in \"Managing the mobile revolution.\""
	];

	const howWeWork: string[] = [
		'Clear scope, clear end date. Every package is bounded and priced in advance.',
		'Working results you can see early, not a report at the end.',
		'Plain language. We tell you when AI is not the right answer.',
		'Human review built in wherever accuracy matters.',
		'We are a technology consultancy. We do not provide investment, legal or tax advice.'
	];
</script>

<svelte:head>
	<title>{pageTitle}</title>
	<meta name="description" content={pageDescription} />
	<link rel="canonical" href={canonical} />
	<meta property="og:type" content="website" />
	<meta property="og:site_name" content="YodaCom" />
	<meta property="og:title" content={pageTitle} />
	<meta property="og:description" content={pageDescription} />
	<meta property="og:url" content={canonical} />
	<meta property="og:image" content={ogImage} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<meta property="og:image:alt" content={ogImageAlt} />
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={pageTitle} />
	<meta name="twitter:description" content={pageDescription} />
	<meta name="twitter:image" content={ogImage} />
	<meta name="twitter:image:alt" content={ogImageAlt} />
</svelte:head>

<!-- HERO -->
<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-4xl px-6 py-20 sm:py-28">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Consulting · YodaCom
		</div>
		<h1
			class="fade-up d1 mb-8 font-serif font-500 tracking-tight text-navy-ink"
			style="font-size: var(--text-display); line-height: var(--text-hero-line);"
		>
			Turn your idea into a working product. Automate the work that slows you down.
		</h1>
		<p class="fade-up d2 max-w-3xl font-serif text-xl leading-relaxed text-slate">
			YodaCom is a Colorado AI consulting company that also builds AI software and
			infrastructure. We help small and mid-size businesses, nonprofits and local organizations
			put AI to practical use. Every engagement has a clear scope, a fixed price and a clear end
			date. Based in Colorado; working with clients in person on the Front Range and in the
			mountains, and remotely anywhere.
		</p>
	</div>
</section>

<!-- INTRO -->
<section class="mx-auto max-w-3xl px-6 py-16">
	<p class="font-serif text-[1.1rem] leading-[1.8] text-slate">
		AI has made it possible for a small team to build what once took a large one. The hard part is
		knowing where to start, what is worth doing, and what to leave alone. That is what we help
		with. Plain answers, working results you can see, and a finish line agreed before we begin.
	</p>
</section>

<!-- HOW IT WORKS -->
<section class="border-y border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-10 max-w-3xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>How it works</div>
			<h2 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink">
				Clear scope, clear end date
			</h2>
			<p class="font-serif text-[1.05rem] leading-[1.75] text-slate">
				Each package below is a bounded engagement. Fixed price, fixed scope, agreed up front.
				Each package, or each stage of a package, is quoted at a fixed price after a short
				conversation about your needs, so you know what you are getting, what it costs and when it
				ends. No open-ended hours, no surprise invoices; changes to scope are agreed in writing
				first. No ongoing commitment unless you choose one afterward.
			</p>
		</div>

		<figure>
			<img
				src="/consulting/consulting-hero-banner.png"
				alt="Three engagement steps, each ending at a finish-line flag: 1, AI Readiness Workshop and Roadmap; 2, Operations Automation Audit and Build; 3, Idea-to-Product Sprint. Headline: Clear scope. Clear end date."
				width="1600"
				height="600"
				class="h-auto w-full rounded-sm border border-rule"
			/>
		</figure>
	</div>
</section>

<!-- PACKAGES -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="space-y-14">
		{#each packages as pkg (pkg.n)}
			<article class="grid gap-6 border-t border-rule pt-8 md:grid-cols-12">
				<div class="md:col-span-4">
					<div class="eyebrow mb-3">Package {pkg.n}</div>
					<h2 class="mb-2 font-serif text-3xl leading-snug text-navy-ink">{pkg.title}</h2>
					<p class="font-serif text-lg italic text-slate">{pkg.tagline}</p>
				</div>
				<div class="space-y-6 md:col-span-8">
					<dl class="space-y-5 text-[0.95rem] leading-relaxed text-slate">
						<div>
							<dt class="eyebrow mb-1">Price</dt>
							<dd>{pkg.price}</dd>
						</div>
						<div>
							<dt class="eyebrow mb-1">Best for</dt>
							<dd>{pkg.bestFor}</dd>
						</div>
					</dl>
					<div>
						<h3 class="eyebrow mb-2">Scope and deliverables</h3>
						<ul class="space-y-2 border-l-2 border-ochre/60 pl-5 text-[0.95rem] leading-relaxed text-slate">
							{#each pkg.scope as item (item)}
								<li>{item}</li>
							{/each}
						</ul>
					</div>
					<p class="text-[0.95rem] leading-relaxed text-navy-ink">
						<span class="eyebrow mr-2">Ends when</span>{pkg.endsWhen}
					</p>
				</div>
			</article>
		{/each}
	</div>
</section>

<!-- PROOF -->
<section class="border-y border-rule/60 bg-topo-faint">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-10 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Proof</div>
			<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">
				We build and run this ourselves
			</h2>
		</div>
		<ul class="grid gap-8 md:grid-cols-2">
			{#each proof as item (item)}
				<li class="border-l-2 border-ochre/60 pl-5 text-sm leading-relaxed text-slate">{item}</li>
			{/each}
		</ul>
	</div>
</section>

<!-- ABOUT JEREMY -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>About Jeremy</div>
	<blockquote class="mb-8 border-l-2 border-ochre pl-6 font-serif text-xl italic leading-relaxed text-navy-ink">
		"My passion has always been to turn ideas into working products and to automate business
		operations. Now with AI this passion is accelerated and massively more applicable. My expertise
		in technology over the years in software is now applied on a whole new level. Great time to be
		alive!"
	</blockquote>
	<p class="font-serif text-[1.05rem] leading-[1.8] text-slate">
		Jeremy Black is the CEO of YodaCom. He has lived in Silverthorne since 2000 and in Colorado
		since 1976. He founded Infohiway, one of the first internet search engine businesses, and sold
		it to RMI.net, a publicly traded ISP. He built RAMCAP, an early desktop portfolio optimizer
		across 230+ asset classes, co-founded Navigator Fund (1984–1998), a multi-manager futures pool
		that the Wall Street Journal twice named a Top 10 fund, and led Aquatic Behavioral
		Technologies, where he co-discovered "lobster language" and built a patented sonic device and
		a global RFID tracking system. He is a former CFP and a former adjunct professor at the
		College for Financial Planning, and has keynoted in the United States, New Zealand and
		Australia.
	</p>
</section>

<!-- HOW WE WORK -->
<section class="border-y border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-3xl px-6 py-20">
		<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>How we work</div>
		<ul class="space-y-3 font-serif text-[1.05rem] leading-relaxed text-slate">
			{#each howWeWork as item (item)}
				<li class="border-t border-rule pt-3">{item}</li>
			{/each}
		</ul>
	</div>
</section>

<!-- CTA -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<h2 class="mb-8 font-serif text-3xl font-500 leading-tight text-navy-ink">
		Have an idea, or a process that eats your week? Tell us about it.
	</h2>
	<a
		href="/contact?topic=Consulting%20%E2%80%94%20not%20sure%20yet"
		class="inline-flex items-center rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink"
	>
		Start a conversation
	</a>
	<p class="mt-12 border-t border-rule pt-6 text-xs leading-relaxed text-slate-light">
		Descriptions of past work are examples of capability and not a promise of results. Results
		depend on the project. YodaCom is a technology consultancy and does not provide investment,
		legal or tax advice. Nothing on this page is investment advice or an offer or solicitation of
		any security.
	</p>
</section>
