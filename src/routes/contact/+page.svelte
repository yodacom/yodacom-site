<script lang="ts">
	import { onMount } from 'svelte';

	type Topic =
		| 'General'
		| 'Research Inquiry'
		| 'Products / CoinRoc'
		| 'AI Practice / Advisory'
		| 'Press / Media'
		| 'Enterprise / RIA'
		| 'Other';

	const TOPICS: Topic[] = [
		'General',
		'Research Inquiry',
		'Products / CoinRoc',
		'AI Practice / Advisory',
		'Press / Media',
		'Enterprise / RIA',
		'Other'
	];

	type Status = 'idle' | 'submitting' | 'success' | 'error';

	// --- form state ---
	let name = $state('');
	let email = $state('');
	let topic = $state<Topic>('General');
	let message = $state('');
	let website = $state(''); // honeypot — must stay empty
	let pageLoadedAt = $state(Date.now());

	// Preselect topic from ?topic=... query param (used by the Applied AI CTA)
	onMount(() => {
		const params = new URLSearchParams(window.location.search);
		const requested = params.get('topic');
		if (requested && (TOPICS as string[]).includes(requested)) {
			topic = requested as Topic;
		}
	});

	// --- ui state ---
	let status = $state<Status>('idle');
	let errorMsg = $state('');
	let fieldErrors = $state<{
		name?: string;
		email?: string;
		topic?: string;
		message?: string;
	}>({});

	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	const messageChars = $derived(message.length);
	const messageRemaining = $derived(2000 - messageChars);
	const submitDisabled = $derived(status === 'submitting');

	function validate(): boolean {
		const errs: typeof fieldErrors = {};
		const nameTrim = name.trim();
		const emailTrim = email.trim();
		const messageTrim = message.trim();

		if (nameTrim.length < 2 || nameTrim.length > 100) {
			errs.name = 'Name must be 2–100 characters.';
		}
		if (!EMAIL_RE.test(emailTrim) || emailTrim.length > 254) {
			errs.email = 'Please enter a valid email address.';
		}
		if (!TOPICS.includes(topic)) {
			errs.topic = 'Please choose a topic.';
		}
		if (messageTrim.length < 10) {
			errs.message = 'Message must be at least 10 characters.';
		} else if (messageTrim.length > 2000) {
			errs.message = 'Message must be 2000 characters or fewer.';
		}

		fieldErrors = errs;
		return Object.keys(errs).length === 0;
	}

	async function handleSubmit(event: SubmitEvent) {
		event.preventDefault();
		errorMsg = '';

		if (!validate()) {
			status = 'idle';
			return;
		}

		status = 'submitting';

		try {
			const res = await fetch('/api/contact', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					name: name.trim(),
					email: email.trim(),
					topic,
					message: message.trim(),
					website,
					ts: pageLoadedAt
				})
			});

			const data = (await res.json().catch(() => ({}))) as {
				ok?: boolean;
				error?: string;
			};

			if (res.ok && data.ok) {
				status = 'success';
				// reset the form
				name = '';
				email = '';
				topic = 'General';
				message = '';
				website = '';
				pageLoadedAt = Date.now();
				fieldErrors = {};
			} else {
				status = 'error';
				errorMsg =
					data.error ||
					'Something went wrong sending your message. Please email jb@yodacom.com directly.';
			}
		} catch (e) {
			console.error('[contact] submit failed:', e);
			status = 'error';
			errorMsg =
				'Could not reach the server. Please check your connection or email jb@yodacom.com directly.';
		}
	}

	function resetSuccess() {
		status = 'idle';
	}
</script>

<svelte:head>
	<title>Contact — Yodacom Research</title>
	<meta
		name="description"
		content="Contact Yodacom Research. Research inquiries, partnership conversations, and press welcome."
	/>
</svelte:head>

<!-- HERO -->
<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-6xl px-6 py-20 sm:py-24">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Contact Yodacom Research
		</div>
		<h1
			class="fade-up d1 mb-6 max-w-3xl font-serif font-500 leading-[1.06] tracking-tight text-navy-ink"
			style="font-size: clamp(2.25rem, 5vw, 3.5rem);"
		>
			Research inquiries, partnerships, and press welcome.
		</h1>
		<p class="fade-up d2 max-w-2xl text-lg leading-relaxed text-slate">
			We respond to serious correspondence within 1–2 business days. For fastest routing, tell us
			which of our projects or papers prompted the note.
		</p>
	</div>
</section>

<!-- FORM + INFO -->
<section class="mx-auto max-w-6xl px-6 py-16 sm:py-20">
	<div class="grid gap-12 md:grid-cols-12">
		<!-- FORM -->
		<div class="md:col-span-7">
			{#if status === 'success'}
				<!-- SUCCESS PANEL -->
				<div
					class="rounded-sm border border-ochre/40 bg-paper p-8 shadow-[0_20px_50px_-30px_rgba(20,40,72,0.25)]"
					role="status"
					aria-live="polite"
				>
					<div class="eyebrow mb-3"><span class="rule-ochre mr-2"></span>Message received</div>
					<h2 class="mb-4 font-serif text-2xl text-navy-ink">
						Thanks — we'll be in touch.
					</h2>
					<p class="mb-6 text-sm leading-relaxed text-slate">
						Your message is on its way to Jeremy and the Yodacom team. You should hear back within
						1–2 business days. If your inquiry is time-sensitive, you can also reach us directly at
						<a href="mailto:jb@yodacom.com" class="font-semibold text-ochre-deep hover:text-navy-deep"
							>jb@yodacom.com</a
						>.
					</p>
					<button
						type="button"
						onclick={resetSuccess}
						class="inline-flex items-center rounded-sm border border-navy-deep/30 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-navy-deep transition hover:border-navy-deep hover:bg-cream-deep/40"
					>
						Send another message
					</button>
				</div>
			{:else}
				<form
					onsubmit={handleSubmit}
					novalidate
					class="rounded-sm border border-rule bg-paper p-7 sm:p-9"
					aria-describedby={status === 'error' ? 'form-error' : undefined}
				>
					<div class="eyebrow mb-6">
						<span class="rule-ochre mr-2"></span>Send a message
					</div>

					<!-- HONEYPOT — visually hidden, tab-skipped; bots tend to fill it -->
					<div class="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
						<label for="website">Website (leave blank)</label>
						<input
							id="website"
							type="text"
							name="website"
							tabindex="-1"
							autocomplete="off"
							bind:value={website}
						/>
					</div>

					<div class="space-y-5">
						<!-- NAME -->
						<div>
							<label for="name" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">
								Name <span class="text-ochre-deep" aria-hidden="true">·</span>
							</label>
							<input
								id="name"
								type="text"
								name="name"
								required
								minlength="2"
								maxlength="100"
								autocomplete="name"
								bind:value={name}
								aria-invalid={fieldErrors.name ? 'true' : undefined}
								aria-describedby={fieldErrors.name ? 'name-error' : undefined}
								class="w-full rounded-sm border border-rule bg-cream px-3.5 py-2.5 text-sm text-navy-deep placeholder:text-slate-light focus:border-navy focus:outline-none focus:ring-2 focus:ring-ochre/30"
								placeholder="Jane Adviser"
							/>
							{#if fieldErrors.name}
								<p id="name-error" class="mt-1.5 text-xs text-ochre-deep">{fieldErrors.name}</p>
							{/if}
						</div>

						<!-- EMAIL -->
						<div>
							<label for="email" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">
								Email
							</label>
							<input
								id="email"
								type="email"
								name="email"
								required
								autocomplete="email"
								inputmode="email"
								bind:value={email}
								aria-invalid={fieldErrors.email ? 'true' : undefined}
								aria-describedby={fieldErrors.email ? 'email-error' : undefined}
								class="w-full rounded-sm border border-rule bg-cream px-3.5 py-2.5 text-sm text-navy-deep placeholder:text-slate-light focus:border-navy focus:outline-none focus:ring-2 focus:ring-ochre/30"
								placeholder="you@firm.com"
							/>
							{#if fieldErrors.email}
								<p id="email-error" class="mt-1.5 text-xs text-ochre-deep">{fieldErrors.email}</p>
							{/if}
						</div>

						<!-- TOPIC -->
						<div>
							<label for="topic" class="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-slate">
								Topic
							</label>
							<select
								id="topic"
								name="topic"
								required
								bind:value={topic}
								aria-invalid={fieldErrors.topic ? 'true' : undefined}
								aria-describedby={fieldErrors.topic ? 'topic-error' : undefined}
								class="w-full rounded-sm border border-rule bg-cream px-3.5 py-2.5 text-sm text-navy-deep focus:border-navy focus:outline-none focus:ring-2 focus:ring-ochre/30"
							>
								{#each TOPICS as t (t)}
									<option value={t}>{t}</option>
								{/each}
							</select>
							{#if fieldErrors.topic}
								<p id="topic-error" class="mt-1.5 text-xs text-ochre-deep">{fieldErrors.topic}</p>
							{/if}
						</div>

						<!-- MESSAGE -->
						<div>
							<div class="mb-1.5 flex items-center justify-between">
								<label for="message" class="block text-xs font-semibold uppercase tracking-wider text-slate">
									Message
								</label>
								<span
									class="text-[0.68rem] tracking-wide text-slate-light"
									class:text-ochre-deep={messageRemaining < 0}
								>
									{messageRemaining} left
								</span>
							</div>
							<textarea
								id="message"
								name="message"
								required
								minlength="10"
								maxlength="2000"
								rows="6"
								bind:value={message}
								aria-invalid={fieldErrors.message ? 'true' : undefined}
								aria-describedby={fieldErrors.message ? 'message-error' : undefined}
								class="w-full resize-y rounded-sm border border-rule bg-cream px-3.5 py-2.5 text-sm leading-relaxed text-navy-deep placeholder:text-slate-light focus:border-navy focus:outline-none focus:ring-2 focus:ring-ochre/30"
								placeholder="A short description of what you'd like to discuss."
							></textarea>
							{#if fieldErrors.message}
								<p id="message-error" class="mt-1.5 text-xs text-ochre-deep">{fieldErrors.message}</p>
							{/if}
						</div>
					</div>

					{#if status === 'error' && errorMsg}
						<div
							id="form-error"
							role="alert"
							class="mt-6 rounded-sm border border-ochre-deep/40 bg-cream-deep/40 p-4 text-sm text-navy-deep"
						>
							{errorMsg}
						</div>
					{/if}

					<div class="mt-8 flex flex-col-reverse items-stretch gap-3 sm:flex-row sm:items-center sm:justify-between">
						<p class="text-[0.68rem] leading-relaxed text-slate-light">
							By submitting you agree we may reply to the email you provided. No marketing use.
						</p>
						<button
							type="submit"
							disabled={submitDisabled}
							class="inline-flex items-center justify-center gap-2 rounded-sm bg-navy-deep px-6 py-3 text-sm font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink disabled:cursor-not-allowed disabled:opacity-60"
						>
							{#if status === 'submitting'}
								<svg
									class="h-4 w-4 animate-spin"
									viewBox="0 0 24 24"
									fill="none"
									aria-hidden="true"
								>
									<circle cx="12" cy="12" r="10" stroke="currentColor" stroke-opacity="0.25" stroke-width="3"></circle>
									<path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" stroke-width="3" stroke-linecap="round"></path>
								</svg>
								Sending…
							{:else}
								Send message →
							{/if}
						</button>
					</div>
				</form>
			{/if}
		</div>

		<!-- SIDE INFO -->
		<aside class="md:col-span-5">
			<div class="space-y-8 md:pl-4">
				<div class="border-l border-ochre/60 pl-5">
					<div class="eyebrow mb-2">Direct email</div>
					<a
						href="mailto:jb@yodacom.com"
						class="font-serif text-xl text-navy-ink hover:text-ochre-deep"
					>
						jb@yodacom.com
					</a>
					<p class="mt-2 text-sm leading-relaxed text-slate">
						Goes straight to Jeremy. Best for press deadlines or anything you'd rather not put
						through a form.
					</p>
				</div>

				<div class="border-l border-slate-hair pl-5">
					<div class="eyebrow mb-2">Post</div>
					<p class="font-serif text-base leading-snug text-navy-ink">
						Yodacom LLC<br />
						PO Box 23978<br />
						Silverthorne, CO 80498<br />
						USA
					</p>
				</div>

				<div class="border-l border-slate-hair pl-5">
					<div class="eyebrow mb-2">Response time</div>
					<p class="text-sm leading-relaxed text-slate">
						1–2 business days for most inquiries. Research collaborations and enterprise /
						RIA conversations may receive a more detailed reply on a longer cadence.
					</p>
				</div>

				<div class="border-l border-slate-hair pl-5">
					<div class="eyebrow mb-2">What gets priority</div>
					<ul class="space-y-1.5 text-sm leading-relaxed text-slate">
						<li>• Press and media with a deadline</li>
						<li>• RIA / enterprise diligence requests</li>
						<li>• Research collaboration proposals</li>
						<li>• Questions about a specific paper or product</li>
					</ul>
				</div>
			</div>
		</aside>
	</div>
</section>

<!-- QUIET CLOSING STRIP -->
<section class="border-t border-rule/60 bg-cream-deep/40">
	<div class="mx-auto max-w-3xl px-6 py-12 text-center">
		<p class="font-serif text-lg italic leading-relaxed text-navy-deep">
			Correspondence welcome. Yodacom Research has been writing long-form letters since 2012.
		</p>
	</div>
</section>
