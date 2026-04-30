<script lang="ts">
	type TimelineEntry = {
		year: string;
		title: string;
		body: string;
	};

	const timeline: TimelineEntry[] = [
		{
			year: '1984',
			title: 'Adjunct Professor · College for Financial Planning',
			body: 'Taught Modern Portfolio Theory and asset allocation strategies. Lectured on MPT across the US, Canada, and New Zealand. Certified Financial Planner.'
		},
		{
			year: '1984',
			title: 'RAMCAP — The Intelligent Asset Allocator',
			body: 'Risk Adjusted Multiple Capital Asset Allocation Program — developed and built in 1984 under Advanced Investment Software Inc (co-owned by Jeremy Black and Kenneth Covell; Jeremy served as President). One of the first MPT-driven risk tools for financial advisors, selling worldwide. Written in Prolog, later ported to C and C++. Sold in 1987 — still in use today.'
		},
		{
			year: '1988',
			title: 'Navigator Fund — WSJ-featured',
			body: "Operated in and helped form one of Colorado's first multi-manager commodity pools — an early multi-manager hedge fund — featured in The Wall Street Journal's best-performing-funds rankings during the 1989–1990 period."
		},
		{
			year: '1998',
			title: 'InfoHiway Inc. — acquired by RMI.net',
			body: 'Left Wilson Associates in 1994 and co-founded InfoHiway — a distributed Perl-powered search engine with 1.3 million visitors by March 1995. Results featured "Fuzzy Relational Links" — a fuzzy-logic approach to query refinement before the terminology existed. In 1997, built AdCafe (a self-serve ad placement tool) and offered every indexed site paid top-5 placement — one of the first complete paid search systems on the web. The backlash from webmasters was fierce. Bill Gross was building the same model at the time; the InfoHiway announcement apparently put Jeremy on his radar, because Gross emailed personally: "have money, interested in buying your company." Jeremy chose RMI.net (Denver) over Idealab (California). GoTo.com launched months later and was credited with inventing paid search. Yahoo later acquired it for $1.63 billion. Acquired by RMI.net in June 1998 for $1.2 million in stock.'
		},
		{
			year: '2001',
			title: 'Aquatic Behaviour Technologies',
			body: 'Developed tracking technology for a device his team created — a digital sound-attraction device for Spiny Lobster combining RFID and marine acoustics.'
		},
		{
			year: '2010',
			title: 'VP Digital Innovation · Full Circle',
			body: 'Created the Click and Call Network affiliate marketing and call-center routing technology.'
		},
		{
			year: '2012',
			title: 'Founded Yodacom',
			body: 'Digital product studio building mobile and web applications for businesses, non-profits, and events. 10+ shipped products between 2012 and 2019.'
		},
		{
			year: '2019',
			title: 'CoinRoc MarketPulse — early experiment',
			body: "First CoinRoc prototype: a live crypto price-ticker pulling BTC, ETH, XRP, LTC, EOS, and GNT from CoinMarketCap every 10 seconds. The interest was there. The tooling wasn't yet."
		},
		{
			year: '2023',
			title: 'CoinRoc — research platform begins',
			body: "Conceptual development of the current research platform: grid trading analysis, correlation-based portfolio construction, and regime detection. AI and the data infrastructure had finally caught up."
		},
		{
			year: '2025',
			title: 'CoinRoc — published',
			body: "CoinRoc launched as a full research platform: grid trading scoring, fee-tier disclosure, Efficient Frontier analysis, early-signal discovery, and market regime detection. Built on the same thesis practiced since 1984 — now with the compute to match."
		},
		{
			year: '2026',
			title: 'Yodacom Research',
			body: 'Formal research-house positioning. Paper 1 (Gridium) in final review. VetTheTech in development.'
		}
	];

	type PastProject = {
		src: string;
		title: string;
		tag: string;
	};

	// Curated: RompToStomp (charity), HopeHouse (non-profit), reflexology,
	// EnneagramQuiz, ShopRover, EFT. Culled Cameez FroYo + BeerZap as off-brand
	// for research-house positioning.
	const projects: PastProject[] = [
		{
			src: 'https://jjblack.com/images/portfolio/apps/RompToStomp.png',
			title: 'Romp To Stomp',
			tag: 'Breast cancer charity · event app'
		},
		{
			src: 'https://jjblack.com/images/portfolio/apps/hopehouse.png',
			title: 'Hope House of Colorado',
			tag: 'Non-profit support'
		},
		{
			src: 'https://jjblack.com/images/portfolio/apps/reflexology.png',
			title: 'Reflexology',
			tag: 'Health & wellness'
		},
		{
			src: 'https://jjblack.com/images/portfolio/apps/enneagramQuizHome2.png',
			title: 'Enneagram Quiz',
			tag: 'Assessment platform'
		},
		{
			src: 'https://jjblack.com/images/portfolio/apps/ShopRover.png',
			title: 'ShopRover',
			tag: 'Commerce / discovery'
		},
		{
			src: 'https://jjblack.com/images/portfolio/apps/EFT.png',
			title: 'EFT',
			tag: 'Emotional wellness'
		}
	];

	type ComputeMark = {
		time: string;
		year: string;
		context: string;
	};

	const computeArc: ComputeMark[] = [
		{
			time: '1h 8m',
			year: '1985 · Intel 286',
			context: '15 asset classes · 20 years of data · correlation matrix + efficient-frontier solve'
		},
		{
			time: '7 min',
			year: 'Late 1980s · Intel 386',
			context: '200 asset classes · longer dataset · same underlying MPT math'
		},
		{
			time: 'microseconds',
			year: '2026 · modern hardware',
			context: 'Vastly more data · smarter algorithms · equivalent math, imperceptible latency'
		}
	];
</script>

<svelte:head>
	<title>About — Yodacom Research</title>
</svelte:head>

<!-- HERO — founder photo + Lando's statement headline as display pull quote -->
<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-6xl px-6 py-20 sm:py-28">
		<div class="grid items-center gap-12 md:grid-cols-12">
			<div class="md:col-span-7">
				<div class="fade-up eyebrow mb-5 flex items-center gap-3">
					<span class="rule-ochre"></span>
					About Yodacom
				</div>
				<h1
					class="fade-up d1 mb-8 font-serif font-500 tracking-tight text-navy-ink"
					style="font-size: var(--text-display); line-height: var(--text-hero-line);"
				>
					The ideas were right in 1985.<br />
					The compute is <em class="text-ochre-deep">finally here</em> in 2026.
				</h1>
				<p class="fade-up d2 max-w-2xl text-lg leading-relaxed text-slate">
					Yodacom is a research house and product studio built on a single conviction: the most
					important ideas in finance are the ones whose time has almost — but not quite — arrived.
					We have spent forty years standing on that edge. We are still standing there.
				</p>
			</div>

			<div class="fade-up d3 md:col-span-5">
				<div class="relative mx-auto max-w-sm">
					<div class="absolute -inset-4 -z-10 rounded-sm bg-ochre/10"></div>
					<div class="absolute -bottom-3 -right-3 -z-10 h-full w-full rounded-sm border border-ochre/50"></div>
					<img
						src="/images/jeremy-headshot.png"
						alt="Jeremy J. Black"
						width="242"
						height="308"
						class="aspect-[4/5] w-full rounded-sm object-cover grayscale-[25%]"
						loading="eager"
						fetchpriority="high"
					/>
					<div class="mt-4 border-l border-ochre pl-4">
						<div class="font-serif text-lg text-navy-ink">Jeremy J. Black</div>
						<div class="text-xs uppercase tracking-wider text-slate-light">
							Founder &amp; President · Yodacom LLC
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- Summit Daily press pull quote -->
<section class="border-b border-rule/60 bg-paper">
	<div class="mx-auto max-w-4xl px-6 py-16 text-center">
		<div class="eyebrow mb-5">As covered in</div>
		<img
			src="https://res.cloudinary.com/yodacom/image/upload/v1569966274/summitDailyNewsYodaCom_sm2_cjwrjr.png"
			alt="Summit Daily News — Yodacom feature"
			class="mx-auto mb-6 h-12 w-auto opacity-80"
			loading="lazy"
		/>
		<blockquote class="font-serif text-2xl italic leading-relaxed text-navy-ink sm:text-3xl">
			&ldquo;Jeremy Black, CEO of YodaCom, is always ahead of the next big thing in technology.&rdquo;
		</blockquote>
		<div class="mt-4 text-xs uppercase tracking-widest text-slate-light">
			Summit Daily News &mdash; October 2013
		</div>
	</div>
</section>

<!-- SCOUT'S CAREER — opening Lando prose section -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>About the founder</div>
	<h2 class="mb-8 font-serif text-4xl font-500 leading-tight text-navy-ink">
		A scout's career, not a resume.
	</h2>
	<div class="space-y-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
		<p>
			Yodacom's founder, <strong class="text-navy-ink">Jeremy J. Black</strong>, has spent forty
			years working at the intersection of artificial intelligence and portfolio theory. Not in
			theory. In code.
		</p>
		<p>
			In 1984 he built <strong class="text-navy-ink">RAMCAP</strong> — Risk Adjusted Multiple
			Capital Asset Allocation Program — as President of Advanced Investment Software Inc,
			co-founded with Kenneth Covell. RAMCAP sold worldwide and was acquired in 1987; it remains
			in use today. It was written in
			<strong class="text-navy-ink">Prolog</strong>, the leading AI and fuzzy-logic language of the
			decade, and it was one of the first Modern Portfolio Theory–driven risk tools built for
			financial advisors. It was ported to C and later C++ as the market shifted from Apple to
			Microsoft. Jeremy lectured on MPT across the US, Canada, and New Zealand, taught asset
			allocation as an adjunct professor at the College for Financial Planning, held a Certified
			Financial Planner designation (since lapsed), and served as one of the pool managers inside
			the Hart-Bornhoft Group's <strong class="text-navy-ink">Navigator Fund</strong> — a
			pioneering multi-manager commodity pool featured in Wall Street Journal best-performing-funds
			rankings during the 1989–1990 period.
		</p>
		<p class="font-serif text-xl italic text-ochre-deep">Then the compute wall hit.</p>
	</div>
</section>

<!-- COMPUTE ARC VISUAL — 1h 8m → 7 min → microseconds -->
<section class="border-y border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-12 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>The compute arc</div>
			<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">
				Forty years, told in wall-clock time.
			</h2>
			<p class="mt-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
				RAMCAP's core job was a correlation matrix across fifteen asset classes using twenty years
				of data, followed by an efficient-frontier solve. Here is what that math has cost to run,
				decade by decade.
			</p>
		</div>

		<div class="grid gap-0 md:grid-cols-3 md:gap-8">
			{#each computeArc as mark, i (mark.time)}
				<div
					class="relative flex flex-col border-t-2 border-ochre/40 py-8 md:border-t-2"
					class:md:border-l-0={i === 0}
				>
					<div class="eyebrow mb-3">{mark.year}</div>
					<div
						class="mb-4 font-serif font-500 leading-none tracking-tight text-navy-ink"
						style="font-size: var(--text-display);"
					>
						{mark.time}
					</div>
					<p class="max-w-xs text-sm leading-relaxed text-slate">{mark.context}</p>
				</div>
			{/each}
		</div>

		<p class="mt-12 max-w-3xl border-l-2 border-ochre pl-6 font-serif text-lg italic leading-relaxed text-navy-deep">
			That is not an anecdote. That is the Yodacom thesis, told in wall-clock time.
		</p>
	</div>
</section>

<!-- AI WINTER + FRONTIER SECTION -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="space-y-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
		<p>
			In the late 1980s Jeremy ran early neural-network experiments on econometric time series —
			three continuous days of training on a souped-up 286, hunting for convergence that never
			arrived. The nets failed for exactly the reason every neural net of that era failed: the
			compute wasn't there yet. That firsthand experience of the AI winter — not as an observer,
			but from inside the work — shapes how Yodacom evaluates every new wave of quantitative
			promise. We have seen what happens when the math is right and the hardware isn't. We
			recognize the opposite condition when it arrives.
		</p>
	</div>

	<div class="mt-16 border-l-4 border-ochre py-4 pl-8">
		<h2
			class="font-serif font-500 leading-[1.08] tracking-tight text-navy-ink"
			style="font-size: var(--text-hero);"
		>
			Always on the frontier.<br />
			<em class="text-ochre-deep">Sometimes too early.</em>
		</h2>
	</div>

	<div class="mt-10 space-y-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
		<p>
			Forty years on, the pattern is clear. A pre-Google search engine in the 1990s, built and
			sold before search was a category. Mobile app development before the ecosystem
			consolidated. Underwater RFID for commercial fisheries before IoT was a marketing word.
			Every one of these sits on the same line: right idea, arrived slightly before the world was
			ready to receive it.
		</p>
		<p>
			We have reframed that arc. It is not a series of near-misses. It is a scout's career. The
			whole point of a scout is to return from the frontier with the map. Yodacom's job — and the
			job of Yodacom Research — is to recognize the moment when the frontier finally becomes the
			market.
		</p>
	</div>
</section>

<!-- TIMELINE — full 40-year arc -->
<section class="border-y border-rule/60 bg-topo-faint">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-14 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Career arc</div>
			<h2 class="font-serif text-4xl font-500 text-navy-ink">From MPT to CoinRoc. Forty years in one thesis.</h2>
		</div>

		<ol class="relative border-l-2 border-ochre/40 pl-10">
			{#each timeline as entry (entry.year)}
				<li class="relative mb-12 last:mb-0">
					<span class="absolute -left-[2.85rem] flex h-5 w-5 items-center justify-center rounded-full border-2 border-ochre bg-cream">
						<span class="h-1.5 w-1.5 rounded-full bg-ochre-deep"></span>
					</span>
					<div class="font-serif text-3xl font-500 text-ochre-deep">{entry.year}</div>
					<h3 class="mt-1 mb-2 font-serif text-xl text-navy-ink">{entry.title}</h3>
					<p class="max-w-2xl text-sm leading-relaxed text-slate">{entry.body}</p>
				</li>
			{/each}
		</ol>
	</div>
</section>

<!-- WHAT YODACOM DOES TODAY -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="mb-12 max-w-2xl">
		<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Today</div>
		<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">What Yodacom does today.</h2>
		<p class="mt-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
			Yodacom LLC is the umbrella. Two products sit under it.
		</p>
	</div>

	<div class="grid gap-6 md:grid-cols-2">
		<article class="rounded-sm border border-rule bg-paper p-7 transition hover:border-navy-deep/40 hover:shadow-[0_20px_60px_-30px_rgba(20,40,72,0.25)]">
			<div class="eyebrow mb-3">Product · since 2019</div>
			<h3 class="mb-4 font-serif text-2xl text-navy-ink">
				<a href="https://coinroc.com" class="hover:text-ochre-deep">CoinRoc →</a>
			</h3>
			<p class="text-sm leading-relaxed text-slate">
				A rating and analysis platform for crypto grid trading, built for income-disciplined
				investors, financial advisors, and anyone serious about separating cash-flow strategies
				from mark-to-market noise. CoinRoc carries forward four decades of correlation discipline
				and honest cost-and-risk accounting — applied to an asset class that did not exist when
				that discipline was first written down.
			</p>
		</article>

		<article class="rounded-sm border border-dashed border-slate-hair bg-cream p-7">
			<div class="mb-3 flex items-center justify-between">
				<div class="eyebrow text-slate-light">In development · Q3 2026</div>
			</div>
			<h3 class="mb-4 font-serif text-2xl text-navy-ink">
				<a href="/products" class="hover:text-ochre-deep">VetTheTech →</a>
			</h3>
			<p class="text-sm leading-relaxed text-slate">
				Independent verification of trading-algorithm claims. A former MPT teacher and
				multi-manager fund operator, supported by a research house of mathematicians and data
				engineers, auditing the claims that crypto sellers are rarely asked to defend.
			</p>
		</article>
	</div>

	<div class="mt-10 max-w-3xl">
		<p class="font-serif text-[1.05rem] leading-[1.75] text-slate">
			Both products publish their underlying research through <strong class="text-navy-ink">Yodacom
			Research</strong>, our in-house research arm. Papers are written by a team — mathematical
			leads own the models, editorial leads own the prose, and a single publisher-editor (Jeremy)
			signs what ships. It is the conventional structure of a serious research firm. We follow it
			because the alternative is a lone-voice marketing byline, and the field has too much of that
			already.
		</p>
	</div>
</section>

<!-- THE BET — closing statement -->
<section class="border-y border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-3xl px-6 py-20">
		<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>The bet</div>
		<h2 class="mb-8 font-serif text-4xl font-500 leading-tight text-navy-ink">
			The same bet, forty years later.
		</h2>
		<div class="space-y-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
			<p>
				The bet Yodacom is making in 2026 is the same one its founder made in 1985: that ordinary
				investors and the advisors who serve them deserve tools built on honest math, transparent
				assumptions, and a stated cost of being wrong. The difference is that the compute finally
				works. The data finally works. The tooling finally works. The applied AI finally works.
			</p>
			<p class="font-serif text-xl italic text-navy-ink">
				We spent forty years waiting for the other side of the arc to catch up. It has. This is
				what we build next.
			</p>
		</div>
	</div>
</section>

<!-- FULL BIO PROSE — supporting detail -->
<section class="mx-auto max-w-3xl px-6 py-20">
	<div class="eyebrow mb-4">Full biography</div>
	<h2 class="mb-8 font-serif text-3xl text-navy-ink">Jeremy J. Black</h2>

	<div class="space-y-5 font-serif text-[1.05rem] leading-[1.75] text-slate">
		<p>
			In 1984 Jeremy built <strong class="text-navy-ink">RAMCAP</strong> (Risk Adjusted
			Multiple Capital Asset Allocation Program) as President of Advanced Investment Software Inc —
			one of the first Modern Portfolio Theory risk-software products for financial advisors,
			selling worldwide before being sold in 1987. He lectured on MPT across the US,
			Canada, and New Zealand. He was a <strong class="text-navy-ink">Certified Financial
			Planner</strong> and an <strong class="text-navy-ink">Adjunct Professor at the College
			for Financial Planning</strong>, teaching Modern Portfolio Theory and asset allocation.
		</p>
		<p>
			He left financial planning to run the <strong class="text-navy-ink">Navigator Fund</strong>,
			one of Colorado's first multi-manager commodity pools — what today we would call an
			early multi-manager hedge fund — <strong class="text-navy-ink">featured in The Wall
			Street Journal's best-performing-funds rankings during the 1989–1990 period</strong>.
		</p>
		<p>
			In the 1990s and 2000s Jeremy built and sold a pre-Google search engine company, developed
			tracking technology for a device his team created (for attracting Spiny Lobster with recorded marine sounds),
			and later created the Click and Call Network affiliate technology while serving as VP of
			Digital Innovation at Full Circle.
		</p>
		<p>
			He founded <strong class="text-navy-ink">Yodacom</strong> in 2012 as a technology consulting
			and digital product studio — building mobile and web applications for businesses, non-profits,
			and event organizers. Working from Silverthorne, Colorado, Jeremy consulted with organizations
			navigating the mobile revolution as smartphones restructured how businesses reached their
			customers. In October 2013, Summit Daily News profiled him in its weekly Profiles column,
			noting that he &ldquo;is always ahead of the next big thing in technology.&rdquo; Over
			seven years the studio shipped more than ten public-facing products before Jeremy pivoted
			the company toward its current research mission.
		</p>
		<p>
			<strong class="text-navy-ink">CoinRoc</strong> began as a simple price-ticker
			experiment in 2019. The research platform — grid trading analysis, portfolio construction,
			and regime detection — was conceptually developed from 2023 and published in 2025, when AI
			and the data infrastructure had finally caught up to the thesis Jeremy has practiced since
			1984: that correlation analysis and newer developments to portfolio theory, applied
			systematically, can identify suitable asset/strategy pairings.
		</p>
		<p class="text-sm italic text-slate-light">
			Education: Master of Divinity from Denver Theological Seminary;
			BS from Northern Arizona University.
		</p>
	</div>
</section>

<!-- PAST PROJECTS GRID -->
<section class="border-t border-rule/60 bg-topo-faint">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-12 flex items-end justify-between">
			<div>
				<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Past projects</div>
				<h2 class="font-serif text-4xl font-500 text-navy-ink">Yodacom Studio · 2012–2019</h2>
				<p class="mt-4 max-w-2xl text-sm leading-relaxed text-slate">
					A selection of public-facing applications Yodacom designed and built for clients during
					its studio era — before the research-house pivot. Charities, non-profits, assessment
					tools, commerce platforms.
				</p>
			</div>
		</div>

		<div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
			{#each projects as project (project.title)}
				<figure class="group overflow-hidden rounded-sm border border-rule bg-paper transition hover:border-navy-deep/40 hover:shadow-[0_20px_40px_-25px_rgba(20,40,72,0.3)]">
					<div class="aspect-[4/3] overflow-hidden border-b border-rule bg-cream-deep">
						<img
							src={project.src}
							alt={project.title}
							class="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
							loading="lazy"
						/>
					</div>
					<figcaption class="p-4">
						<div class="font-serif text-base text-navy-ink">{project.title}</div>
						<div class="text-xs uppercase tracking-wider text-slate-light">{project.tag}</div>
					</figcaption>
				</figure>
			{/each}
		</div>

		<!-- Web collage full-width -->
		<div class="mt-10 overflow-hidden rounded-sm border border-rule bg-paper">
			<img
				src="https://res.cloudinary.com/yodacom/image/upload/v1570109857/WebWorkCollage_oyp7h5.png"
				alt="Yodacom web work collage"
				class="h-auto w-full object-cover"
				loading="lazy"
			/>
		</div>
	</div>
</section>

<!-- Contact -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="relative overflow-hidden rounded-sm bg-navy-ink p-10 text-cream">
		<div
			class="absolute inset-0 opacity-5"
			style="background-image: linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px); background-size: 40px 40px;"
		></div>
		<div class="relative grid gap-8 md:grid-cols-12">
			<div class="md:col-span-7">
				<div class="eyebrow mb-3 text-ochre-soft">Contact</div>
				<h2 class="mb-3 font-serif text-3xl text-cream">Research inquiries welcome.</h2>
				<p class="max-w-lg text-sm leading-relaxed text-cream/75">
					Research inquiries, partnership conversations, and press mentions welcome.
					Correspondence by post or email.
				</p>
			</div>
			<div class="md:col-span-5 space-y-3 text-sm">
				<div>
					<div class="text-[0.68rem] uppercase tracking-widest text-cream/50">Email</div>
					<a href="mailto:jb@yodacom.com" class="font-serif text-lg text-cream hover:text-ochre-soft">jb@yodacom.com</a>
				</div>
				<div>
					<div class="text-[0.68rem] uppercase tracking-widest text-cream/50">Mail</div>
					<div class="text-cream/80">PO Box 23978 · Silverthorne, CO 80498 · USA</div>
				</div>
			</div>
		</div>
	</div>

	<p class="mt-8 max-w-3xl text-xs italic leading-relaxed text-slate-light">
		Note: historical credentials cited above (Navigator Fund WSJ appearance, Ramcap,
		College for Financial Planning adjunct role) are in the process of being sourced for
		public citation in upcoming research publications. Original archival references will be
		published alongside the first Yodacom Research paper.
	</p>
</section>
