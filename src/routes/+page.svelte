<svelte:head>
	<title>Yodacom Research — Independent Quantitative Research</title>
</svelte:head>

<!-- HERO — editorial, text-first, with a quiet topographic backdrop -->
<section class="relative overflow-hidden border-b border-rule/60 bg-topo">
	<div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-cream/20 via-cream/60 to-cream"></div>

	<div class="relative mx-auto max-w-6xl px-6 pb-24 pt-20 sm:pb-32 sm:pt-28">
		<div class="grid items-end gap-12 md:grid-cols-12">
			<div class="md:col-span-8">
				<div class="fade-up eyebrow mb-6 flex items-center gap-3">
					<span class="rule-ochre"></span>
					Yodacom Research · Est. 2012
				</div>
				<h1 class="fade-up d1 mb-8 font-serif text-[2.5rem] font-500 leading-[1.04] tracking-tight text-navy-ink sm:text-[3.5rem] md:text-[4rem]">
					Independent quantitative research.<br />
					<span class="italic text-ochre-deep">Products</span> built on<br />
					rigorous methodology.
				</h1>
				<p class="fade-up d2 mb-10 max-w-xl text-lg leading-relaxed text-slate">
					Yodacom has been building digital products since 2012. Since 2019 our focus has been
					quantitative research applied to new asset classes — returning to the correlation analysis
					and portfolio theory our founder has practiced since the 1980s.
				</p>
				<div class="fade-up d3 flex flex-wrap gap-3">
					<a
						href="/research"
						class="inline-flex items-center rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink"
					>
						Our research →
					</a>
					<a
						href="/about"
						class="inline-flex items-center rounded-sm border border-navy-deep/30 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-navy-deep transition hover:border-navy-deep hover:bg-cream-deep/40"
					>
						About the founder
					</a>
				</div>
			</div>

			<div class="fade-up d4 hidden md:col-span-4 md:block">
				<div class="border-l border-ochre/50 pl-6">
					<div class="eyebrow mb-2">Currently</div>
					<p class="mb-4 font-serif text-lg leading-snug text-navy-deep">
						Paper 1 — <em>Gridium</em> — in final review. Target publication Q2 2026.
					</p>
					<a href="/research" class="text-xs font-semibold uppercase tracking-wider text-ochre-deep hover:text-navy-deep">
						Read the abstract →
					</a>
				</div>
				<div class="mt-8 border-l border-slate-hair pl-6">
					<div class="eyebrow mb-2">Flagship Product</div>
					<p class="mb-4 font-serif text-lg leading-snug text-navy-deep">
						CoinRoc — our longest-running research project, since 2019.
					</p>
					<a href="/products" class="text-xs font-semibold uppercase tracking-wider text-ochre-deep hover:text-navy-deep">
						See products →
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- CREDENTIALS STRIP -->
<section class="border-b border-rule/60 bg-paper">
	<div class="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-6 px-6 py-6 text-xs uppercase tracking-[0.18em] text-slate-light">
		<span>WSJ-featured fund operator</span>
		<span class="hidden h-3 w-px bg-slate-hair sm:block"></span>
		<span>Certified Financial Planner</span>
		<span class="hidden h-3 w-px bg-slate-hair sm:block"></span>
		<span>MPT adjunct faculty</span>
		<span class="hidden h-3 w-px bg-slate-hair sm:block"></span>
		<span>40+ years in markets</span>
	</div>
</section>

<!-- THREE PRACTICES — Research, Products, Applied AI -->
<section class="border-b border-rule/60 bg-paper">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-12 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Three practices</div>
			<h2 class="font-serif text-4xl font-500 leading-tight text-navy-ink">
				One research house. Three lanes of work.
			</h2>
		</div>

		<div class="grid gap-6 md:grid-cols-3">
			<!-- Research pillar -->
			<a
				href="/research"
				class="group relative flex flex-col rounded-sm border border-rule bg-paper p-7 transition hover:border-navy-deep/40 hover:shadow-[0_20px_60px_-30px_rgba(20,40,72,0.25)]"
			>
				<div class="eyebrow mb-3">Research</div>
				<h3 class="mb-3 font-serif text-2xl leading-tight text-navy-ink group-hover:text-ochre-deep">
					Research
				</h3>
				<p class="mb-5 flex-1 text-sm leading-relaxed text-slate">
					Peer-reviewable methodology papers on portfolio theory, fuzzy logic, and the honest
					cost of trading. Published under Yodacom Research.
				</p>
				<span class="text-xs font-semibold uppercase tracking-wider text-ochre-deep transition group-hover:text-navy-deep">
					See the papers →
				</span>
			</a>

			<!-- Products pillar (div, not anchor — contains nested brand links) -->
			<div
				class="group relative flex flex-col rounded-sm border border-rule bg-paper p-7 transition hover:border-navy-deep/40 hover:shadow-[0_20px_60px_-30px_rgba(20,40,72,0.25)]"
			>
				<div class="eyebrow mb-3">Products</div>
				<h3 class="mb-3 font-serif text-2xl leading-tight text-navy-ink">
					Products
				</h3>
				<p class="mb-5 text-sm leading-relaxed text-slate">
					Research-grade methodology, shipped as software. CoinRoc in production, VetTheTech in
					development, and an RIA decision-support tool in build.
				</p>

				<!-- Nested brand sub-items -->
				<ul class="mb-5 flex-1 space-y-2 border-t border-rule/70 pt-4">
					<li>
						<a
							href="https://coinroc.com"
							class="flex items-baseline justify-between gap-2 text-xs text-slate transition hover:text-ochre-deep"
						>
							<span class="font-serif text-sm text-navy-ink group-hover:text-ochre-deep">CoinRoc</span>
							<span class="text-[0.65rem] uppercase tracking-wider text-slate-light">
								Live · since 2019 →
							</span>
						</a>
					</li>
					<li>
						<a
							href="/products"
							class="flex items-baseline justify-between gap-2 text-xs text-slate transition hover:text-ochre-deep"
						>
							<span class="font-serif text-sm text-navy-ink group-hover:text-ochre-deep">VetTheTech</span>
							<span class="text-[0.65rem] uppercase tracking-wider text-slate-light">
								In development · Q3 2026 →
							</span>
						</a>
					</li>
				</ul>

				<a
					href="/products"
					class="text-xs font-semibold uppercase tracking-wider text-ochre-deep transition hover:text-navy-deep"
				>
					See the products →
				</a>
			</div>

			<!-- Applied AI pillar -->
			<a
				href="/applied-ai"
				class="group relative flex flex-col rounded-sm border border-rule bg-paper p-7 transition hover:border-navy-deep/40 hover:shadow-[0_20px_60px_-30px_rgba(20,40,72,0.25)]"
			>
				<div class="eyebrow mb-3">Applied AI</div>
				<h3 class="mb-3 font-serif text-2xl leading-tight text-navy-ink group-hover:text-ochre-deep">
					Applied AI
				</h3>
				<p class="mb-5 flex-1 text-sm leading-relaxed text-slate">
					Forty years of practitioner depth at the intersection of quantitative finance and
					emerging technology.
				</p>
				<span class="text-xs font-semibold uppercase tracking-wider text-ochre-deep transition group-hover:text-navy-deep">
					Explore the practice →
				</span>
			</a>
		</div>
	</div>
</section>

<!-- HERITAGE / METHOD / LOCATION -->
<section class="bg-topo-faint">
	<div class="mx-auto max-w-6xl px-6 py-20">
		<div class="mb-14 max-w-2xl">
			<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>The firm</div>
			<h2 class="font-serif text-4xl font-500 text-navy-ink">A research house, not a startup.</h2>
		</div>

		<div class="grid gap-10 md:grid-cols-3">
			<div class="border-t border-ochre/60 pt-6">
				<h3 class="mb-3 font-serif text-xl text-navy-ink">Heritage</h3>
				<p class="text-sm leading-relaxed text-slate">
					Founded by Jeremy J. Black — former Adjunct Professor of Modern Portfolio Theory at the
					College for Financial Planning, operator of a multimanager commodity pool featured in
					Wall Street Journal best-performing-funds rankings (1989–1990), and founder of Ramcap
					(MPT-driven risk software for financial advisors, acquired 1990).
				</p>
			</div>
			<div class="border-t border-ochre/60 pt-6">
				<h3 class="mb-3 font-serif text-xl text-navy-ink">Method</h3>
				<p class="text-sm leading-relaxed text-slate">
					Walk-forward validation. Honest cost-tier disclosure. Pre-registered hypotheses.
					Published negative results where the data demands it. No VIP-tier cost models
					disguised as retail returns.
				</p>
			</div>
			<div class="border-t border-ochre/60 pt-6">
				<h3 class="mb-3 font-serif text-xl text-navy-ink">Location</h3>
				<p class="text-sm leading-relaxed text-slate">
					Based in the Rocky Mountains of Silverthorne, Colorado. Research team operating fully
					remote and asynchronous. Correspondence welcome.
				</p>
			</div>
		</div>
	</div>
</section>
