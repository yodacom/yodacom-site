<svelte:head>
	<title>Research — Yodacom Research</title>
</svelte:head>

<!-- Page header -->
<section class="border-b border-rule/60 bg-topo">
	<div class="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
		<div class="max-w-3xl">
			<div class="fade-up eyebrow mb-5 flex items-center gap-3">
				<span class="rule-ochre"></span>
				Published research
			</div>
			<h1 class="fade-up d1 mb-6 font-serif text-5xl font-500 leading-[1.05] tracking-tight text-navy-ink sm:text-6xl">
				Research
			</h1>
			<p class="fade-up d2 max-w-2xl text-lg leading-relaxed text-slate">
				Yodacom Research publishes quantitative studies on asset-class suitability, execution-cost
				analysis, and strategy-selection methodologies. We publish negative results when the data
				demands it. All papers ship with reproducible code and full methodology.
			</p>
		</div>
	</div>
</section>

<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="grid gap-10 md:grid-cols-12">
		<!-- Sidebar -->
		<aside class="md:col-span-4">
			<div class="sticky top-28 border-l border-ochre/60 pl-5">
				<div class="eyebrow mb-3">Catalog</div>
				<ol class="space-y-4 text-sm text-slate">
					<li>
						<div class="font-semibold text-navy-deep">Paper 1 — Gridium</div>
						<div class="text-xs text-slate-light">In progress · Q2 2026</div>
					</li>
					<li>
						<div class="font-semibold text-navy-deep">Paper 2 — Sortino Sensitivity</div>
						<div class="text-xs text-slate-light">Planned</div>
					</li>
				</ol>
			</div>
		</aside>

		<!-- Papers -->
		<div class="space-y-10 md:col-span-8">
			<!-- Gridium card — publication-style -->
			<article class="overflow-hidden rounded-sm border border-rule bg-paper shadow-[0_10px_40px_-25px_rgba(20,40,72,0.3)]">
				<div class="grid grid-cols-5">
					<!-- Cover -->
					<div class="col-span-2 relative hidden items-center justify-center border-r border-rule bg-navy-ink p-6 sm:flex">
						<div class="absolute inset-0 bg-topo-faint opacity-10"></div>
						<div class="relative text-center text-cream">
							<div class="mb-4 text-[0.6rem] uppercase tracking-[0.3em] text-ochre-soft">Yodacom Research</div>
							<div class="mb-3 font-serif text-4xl font-500 italic text-cream">Gridium</div>
							<div class="mx-auto mb-4 h-px w-12 bg-ochre/70"></div>
							<div class="text-[0.68rem] uppercase tracking-widest text-cream/60">Paper № 1</div>
							<div class="mt-6 text-[0.68rem] uppercase tracking-widest text-cream/60">Q2 2026</div>
						</div>
					</div>
					<!-- Metadata -->
					<div class="col-span-5 p-7 sm:col-span-3 sm:p-8">
						<div class="mb-4 flex flex-wrap items-center gap-2">
							<span class="rounded-full bg-ochre/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-ochre-deep">
								In progress
							</span>
							<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">Pub target · Q2 2026</span>
						</div>
						<h2 class="mb-4 font-serif text-2xl leading-snug text-navy-ink">
							Execution Cost Impact on Crypto Grid Trading Portfolios
						</h2>
						<p class="mb-5 text-sm leading-relaxed text-slate">
							A 2.5-year walk-forward study of crypto grid trading as a candidate sleeve in
							traditional 60/40 portfolios. Tests the hypothesis that execution cost tier
							dominates strategy selection at the portfolio level. Pre-registered hypotheses,
							honest negative results where applicable, cost-tier sensitivity analysis across
							six execution venues.
						</p>

						<dl class="mb-5 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-rule py-4 text-xs text-slate">
							<dt class="text-slate-light">Principal researcher</dt><dd>Jeremy J. Black</dd>
							<dt class="text-slate-light">Window</dt><dd>2022 Q4 – 2025 Q1</dd>
							<dt class="text-slate-light">Venues tested</dt><dd>6</dd>
							<dt class="text-slate-light">Peer review</dt><dd>Pending</dd>
						</dl>

						<span class="inline-flex items-center text-xs font-semibold uppercase tracking-wider text-slate-light">
							Abstract coming Q2 2026
						</span>
					</div>
				</div>
			</article>

			<!-- Sortino -->
			<article class="rounded-sm border border-dashed border-slate-hair bg-cream p-7 sm:p-8">
				<div class="mb-3 flex flex-wrap items-center gap-2">
					<span class="rounded-full bg-slate-hair/40 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-slate">
						Planned
					</span>
				</div>
				<h2 class="mb-3 font-serif text-2xl leading-snug text-navy-ink">
					Sortino Sensitivity: Does Downside-Deviation-Aware Rating Improve Grid Trading Outcomes?
				</h2>
				<p class="text-sm leading-relaxed text-slate">
					Companion paper to Gridium. Re-runs the walk-forward analysis using a four-component
					grader (ETS, Grid Return, Calmar, Sortino) closer to CoinRoc's production rating weights.
					Tests whether downside-deviation-aware selection meaningfully changes per-quarter sleeve
					composition and risk-adjusted outcomes.
				</p>
			</article>

			<!-- Newsletter -->
			<div class="relative overflow-hidden rounded-sm bg-navy-ink p-8 text-cream">
				<div class="absolute inset-0 opacity-5"
					style="background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 40px 40px;"></div>
				<div class="relative">
					<div class="eyebrow mb-3 text-ochre-soft">Research updates</div>
					<h3 class="mb-2 font-serif text-2xl text-cream">Be notified when papers publish.</h3>
					<p class="mb-5 max-w-lg text-sm leading-relaxed text-cream/75">
						One email per paper. No marketing, no drip sequences, no calendar pitches. Unsubscribe
						removes you instantly.
					</p>
					<form class="flex max-w-md gap-2" onsubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							placeholder="you@firm.com"
							class="min-w-0 flex-1 rounded-sm border border-cream/20 bg-cream/5 px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre focus:outline-none"
						/>
						<button
							type="submit"
							class="rounded-sm bg-ochre px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-ink transition hover:bg-ochre-soft"
						>
							Notify me
						</button>
					</form>
					<p class="mt-2 text-[0.68rem] italic text-cream/50">Signup form coming soon.</p>
				</div>
			</div>
		</div>
	</div>
</section>
