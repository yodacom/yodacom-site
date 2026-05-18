<script lang="ts">
	type SubscribeStatus = 'idle' | 'submitting' | 'success' | 'error';

	let email = $state('');
	let website = $state(''); // honeypot — must stay empty
	let subscribeStatus = $state<SubscribeStatus>('idle');
	let subscribeError = $state('');

	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const submitDisabled = $derived(subscribeStatus === 'submitting');

	async function handleSubscribe(event: SubmitEvent) {
		event.preventDefault();
		subscribeError = '';

		const emailTrim = email.trim().toLowerCase();
		if (!EMAIL_RE.test(emailTrim) || emailTrim.length > 254) {
			subscribeError = 'Please enter a valid email address.';
			return;
		}

		subscribeStatus = 'submitting';

		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: emailTrim, website })
			});

			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};

			if (res.ok && data.ok) {
				subscribeStatus = 'success';
				email = '';
				website = '';
			} else {
				subscribeStatus = 'error';
				subscribeError =
					data.error || 'Something went wrong. Please try again shortly.';
			}
		} catch {
			subscribeStatus = 'error';
			subscribeError = 'Could not reach the server. Please check your connection.';
		}
	}
</script>

<svelte:head>
	<title>Research Briefs — Yodacom Research</title>
	<meta
		name="description"
		content="Independent quantitative research briefs on algorithmic grid trading strategies. Published by Yodacom Research for financial professionals."
	/>
</svelte:head>

<!-- PAGE HEADER -->
<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-6xl px-6 py-20 sm:py-24">
		<div class="max-w-3xl">
			<div class="fade-up eyebrow mb-5 flex items-center gap-3">
				<span class="rule-ochre"></span>
				Yodacom Research
			</div>
			<h1 class="fade-up d1 mb-6 font-serif text-5xl font-500 leading-[1.05] tracking-tight text-navy-ink sm:text-6xl">
				Research Briefs
			</h1>
			<p class="fade-up d2 max-w-2xl text-lg leading-relaxed text-slate">
				Independent quantitative research on algorithmic grid trading — published for financial
				professionals including RIAs, CFPs, and institutional researchers. Papers present
				full methodology, honest findings, and reproducible results. No advisory content,
				no product endorsements.
			</p>
		</div>
	</div>
</section>

<!-- BRIEFS LIST -->
<section class="mx-auto max-w-6xl px-6 py-20">
	<div class="grid gap-10 md:grid-cols-12">

		<!-- Sidebar catalog -->
		<aside class="md:col-span-4">
			<div class="sticky top-28 border-l border-ochre/60 pl-5">
				<div class="eyebrow mb-3">In this series</div>
				<ol class="space-y-4 text-sm text-slate">
					<li>
						<a href="#brief-1" class="group block">
							<div class="font-semibold text-navy-deep transition group-hover:text-navy">
								Brief 1 — Post-Only Grid Trading
							</div>
							<div class="text-xs text-slate-light">Fee vs. Fill Cost Analysis</div>
						</a>
					</li>
					<li>
						<a href="#brief-2" class="group block">
							<div class="font-semibold text-navy-deep transition group-hover:text-navy">
								Brief 2 — Inventory Circuit Breaker
							</div>
							<div class="text-xs text-slate-light">Drawdown-Triggered Regime Gate</div>
						</a>
					</li>
				</ol>
				<div class="mt-8 border-t border-rule/60 pt-6">
					<div class="eyebrow mb-2">Series scope</div>
					<p class="text-xs leading-relaxed text-slate">
						Each brief presents a single, focused finding from the Gridium research program.
						Briefs are self-contained and do not require prior reading.
					</p>
				</div>
			</div>
		</aside>

		<!-- Briefs -->
		<div class="space-y-10 md:col-span-8">

			<!-- Brief 1 -->
			<article
				id="brief-1"
				class="overflow-hidden rounded-sm border border-rule bg-paper shadow-[0_10px_40px_-25px_rgba(20,40,72,0.3)]"
			>
				<div class="grid grid-cols-5">
					<!-- Cover panel -->
					<div class="relative col-span-2 hidden items-center justify-center border-r border-rule bg-navy-ink p-6 sm:flex">
						<div class="absolute inset-0 bg-topo-faint opacity-10"></div>
						<div class="relative text-center text-cream">
							<div class="mb-4 text-[0.6rem] uppercase tracking-[0.3em] text-ochre-soft">
								Yodacom Research
							</div>
							<div class="mb-3 font-serif text-2xl font-500 italic leading-tight text-cream">
								Brief<br />№ 1
							</div>
							<div class="mx-auto mb-4 h-px w-12 bg-ochre/70"></div>
							<div class="text-[0.68rem] uppercase tracking-widest text-cream/60">
								Execution Cost
							</div>
						</div>
					</div>

					<!-- Content -->
					<div class="col-span-5 p-7 sm:col-span-3 sm:p-8">
						<div class="mb-4 flex flex-wrap items-center gap-2">
							<span class="rounded-full bg-teal-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-teal-700">
								Published
							</span>
							<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">
								Research Brief
							</span>
						</div>

						<h2 class="mb-4 font-serif text-2xl leading-snug text-navy-ink">
							Post-Only Grid Trading: Fee Reduction vs. Missed-Fill Cost Analysis
						</h2>

						<p class="mb-5 text-sm leading-relaxed text-slate">
							A structured comparison of GTX (post-only, maker-rebate eligible) and GTC
							(standard, immediate-or-cancel) order types applied to crypto grid strategies
							across six execution venues. The analysis isolates the net execution cost
							differential when post-only orders reduce fee drag but introduce non-fill
							slippage during fast-market conditions.
						</p>
						<p class="mb-6 text-sm leading-relaxed text-slate">
							Findings show the fee advantage of GTX is asymmetric: favorable in
							range-bound regimes and eroded in high-volatility environments where
							missed-fill opportunity cost exceeds the maker-taker spread saved.
						</p>

						<dl class="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-rule py-4 text-xs text-slate">
							<dt class="text-slate-light">Series</dt>
							<dd>Gridium — Execution Cost</dd>
							<dt class="text-slate-light">Order types</dt>
							<dd>GTX (post-only) vs. GTC</dd>
							<dt class="text-slate-light">Principal researcher</dt>
							<dd>Jeremy J. Black</dd>
							<dt class="text-slate-light">Methodology</dt>
							<dd>Walk-forward, 6 venues</dd>
						</dl>

						<span
							aria-label="Read Brief 1 — Post-Only Grid Trading (PDF not yet available)"
							class="inline-flex cursor-default items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep/40"
						>
							PDF forthcoming
							<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M3 8h10M9 4l4 4-4 4"/>
							</svg>
						</span>
					</div>
				</div>
			</article>

			<!-- Brief 2 -->
			<article
				id="brief-2"
				class="overflow-hidden rounded-sm border border-rule bg-paper shadow-[0_10px_40px_-25px_rgba(20,40,72,0.3)]"
			>
				<div class="grid grid-cols-5">
					<!-- Cover panel -->
					<div class="relative col-span-2 hidden items-center justify-center border-r border-rule bg-navy-ink p-6 sm:flex">
						<div class="absolute inset-0 bg-topo-faint opacity-10"></div>
						<div class="relative text-center text-cream">
							<div class="mb-4 text-[0.6rem] uppercase tracking-[0.3em] text-ochre-soft">
								Yodacom Research
							</div>
							<div class="mb-3 font-serif text-2xl font-500 italic leading-tight text-cream">
								Brief<br />№ 2
							</div>
							<div class="mx-auto mb-4 h-px w-12 bg-ochre/70"></div>
							<div class="text-[0.68rem] uppercase tracking-widest text-cream/60">
								Risk Control
							</div>
						</div>
					</div>

					<!-- Content -->
					<div class="col-span-5 p-7 sm:col-span-3 sm:p-8">
						<div class="mb-4 flex flex-wrap items-center gap-2">
							<span class="rounded-full bg-teal-500/10 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-widest text-teal-700">
								Published
							</span>
							<span class="text-[0.68rem] uppercase tracking-widest text-slate-light">
								Research Brief
							</span>
						</div>

						<h2 class="mb-4 font-serif text-2xl leading-snug text-navy-ink">
							Inventory Circuit Breaker: A Drawdown-Triggered Regime Gate for Grid Strategies
						</h2>

						<p class="mb-5 text-sm leading-relaxed text-slate">
							Introduces the Inventory Circuit Breaker (ICB) — a rule-based mechanism that
							halts grid order placement when portfolio drawdown breaches a configurable
							threshold, functioning as a regime gate independent of market-indicator signals.
							Validated against the v5 Gridium walk-forward dataset across 135 symbol-quarter
							folds from 2017 to 2025.
						</p>
						<p class="mb-6 text-sm leading-relaxed text-slate">
							Walk-forward validation shows that ICB activation reduces maximum drawdown in
							adverse regimes, with the benefit concentrated in the lowest-rated quartile of
							grid opportunities — consistent with the hypothesis that the gate primarily
							limits exposure when strategy selection confidence is weakest.
						</p>

						<dl class="mb-6 grid grid-cols-2 gap-x-4 gap-y-2 border-y border-rule py-4 text-xs text-slate">
							<dt class="text-slate-light">Series</dt>
							<dd>Gridium — Risk Control</dd>
							<dt class="text-slate-light">Mechanism</dt>
							<dd>Drawdown-triggered halt</dd>
							<dt class="text-slate-light">Principal researcher</dt>
							<dd>Jeremy J. Black</dd>
							<dt class="text-slate-light">Dataset</dt>
							<dd>v5 · 135 folds · 2017–2025</dd>
						</dl>

						<span
							aria-label="Read Brief 2 — Inventory Circuit Breaker (PDF not yet available)"
							class="inline-flex cursor-default items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep/40"
						>
							PDF forthcoming
							<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
								<path d="M3 8h10M9 4l4 4-4 4"/>
							</svg>
						</span>
					</div>
				</div>
			</article>

			<!-- Email signup -->
			<div class="relative overflow-hidden rounded-sm bg-navy-ink p-8 text-cream">
				<div
					class="absolute inset-0 opacity-5"
					style="background-image: linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px); background-size: 40px 40px;"
					aria-hidden="true"
				></div>

				<div class="relative">
					{#if subscribeStatus === 'success'}
						<div role="status" aria-live="polite">
							<div class="eyebrow mb-3 text-ochre-soft">Research updates</div>
							<h2 class="mb-3 font-serif text-2xl text-cream">You are on the list.</h2>
							<p class="max-w-lg text-sm leading-relaxed text-cream/75">
								We will send one email when a new brief or paper publishes. No marketing,
								no sequences. You can unsubscribe at any time.
							</p>
						</div>
					{:else}
						<div class="eyebrow mb-3 text-ochre-soft">Research updates</div>
						<h2 class="mb-2 font-serif text-2xl text-cream">
							Get notified when new research is published.
						</h2>
						<p class="mb-5 max-w-lg text-sm leading-relaxed text-cream/75">
							One email per published brief or paper. No marketing, no drip sequences,
							no calendar pitches. Unsubscribe removes you instantly.
						</p>

						<form
							onsubmit={handleSubscribe}
							novalidate
							class="max-w-md"
							aria-describedby={subscribeStatus === 'error' ? 'subscribe-error' : undefined}
						>
							<!-- Honeypot — visually hidden, tab-skipped -->
							<div
								class="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden"
								aria-hidden="true"
							>
								<label for="sb-website">Website (leave blank)</label>
								<input
									id="sb-website"
									type="text"
									name="website"
									tabindex="-1"
									autocomplete="off"
									bind:value={website}
								/>
							</div>

							<div class="flex gap-2">
								<label for="subscribe-email" class="sr-only">Email address</label>
								<input
									id="subscribe-email"
									type="email"
									name="email"
									required
									autocomplete="email"
									inputmode="email"
									placeholder="you@firm.com"
									bind:value={email}
									class="min-w-0 flex-1 rounded-sm border border-cream/20 bg-cream/5 px-3 py-2 text-sm text-cream placeholder:text-cream/40 focus:border-ochre focus:outline-none focus:ring-2 focus:ring-ochre/30"
								/>
								<button
									type="submit"
									disabled={submitDisabled}
									class="rounded-sm bg-ochre px-4 py-2 text-xs font-semibold uppercase tracking-wider text-navy-ink transition hover:bg-ochre-soft disabled:cursor-not-allowed disabled:opacity-60"
								>
									{#if subscribeStatus === 'submitting'}
										<span class="flex items-center gap-1.5">
											<svg class="h-3.5 w-3.5 animate-spin" viewBox="0 0 24 24" fill="none" aria-hidden="true">
												<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25" stroke-width="3"></circle>
												<path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
											</svg>
											Wait…
										</span>
									{:else}
										Notify me
									{/if}
								</button>
							</div>

							{#if subscribeStatus === 'error' && subscribeError}
								<p
									id="subscribe-error"
									role="alert"
									class="mt-2 text-xs text-ochre-soft"
								>
									{subscribeError}
								</p>
							{/if}

							{#if subscribeError && subscribeStatus === 'idle'}
								<p class="mt-2 text-xs text-ochre-soft">{subscribeError}</p>
							{/if}
						</form>
					{/if}
				</div>
			</div>

		</div>
	</div>
</section>

<!-- METHODOLOGY NOTE -->
<section class="border-t border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-3xl px-6 py-12 text-center">
		<p class="text-xs uppercase tracking-[0.18em] text-slate-light">
			Research note
		</p>
		<p class="mt-3 font-serif text-base italic leading-relaxed text-navy-deep">
			All briefs present methodology sufficient to reproduce findings independently.
			No advisory relationship is created by reading or subscribing.
			Papers are for educational and informational purposes only.
		</p>
	</div>
</section>
