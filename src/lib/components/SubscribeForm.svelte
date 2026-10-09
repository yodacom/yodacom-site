<script module lang="ts">
	interface TurnstileApi {
		render: (el: HTMLElement, opts: Record<string, unknown>) => string;
		reset: (id?: string) => void;
	}
	const getTurnstile = () => (window as unknown as { turnstile?: TurnstileApi }).turnstile;

	// One script tag shared by every SubscribeForm on the page (footer + page body).
	let turnstileLoader: Promise<void> | undefined;
	function loadTurnstile(): Promise<void> {
		if (getTurnstile()) return Promise.resolve();
		turnstileLoader ??= new Promise<void>((resolve, reject) => {
			const sc = document.createElement('script');
			sc.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
			sc.async = true;
			sc.onload = () => resolve();
			sc.onerror = () => {
				turnstileLoader = undefined;
				reject(new Error('turnstile load failed'));
			};
			document.head.appendChild(sc);
		});
		return turnstileLoader;
	}
</script>

<script lang="ts">
	import { onMount } from 'svelte';

	type Status = 'idle' | 'submitting' | 'success' | 'error';

	interface Props {
		/** Unique id prefix so two forms on one page never share ids. */
		idPrefix: string;
		/** 'light' for cream backgrounds (footer), 'dark' for navy panels (/research). */
		tone?: 'light' | 'dark';
		buttonLabel?: string;
	}

	let { idPrefix, tone = 'light', buttonLabel = 'Notify' }: Props = $props();

	const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

	let email = $state('');
	let website = $state(''); // honeypot — must stay empty
	let status = $state<Status>('idle');
	let message = $state('');

	// Turnstile site key is public; set VITE_TURNSTILE_SITE_KEY in the Cloudflare
	// Pages BUILD environment. Without it the form stays closed (server fails closed too).
	const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY as string | undefined;

	let pageLoadedAt = 0; // dwell-time stamp, set on mount
	let turnstileToken = $state('');
	let turnstileEl = $state<HTMLElement | null>(null);
	let turnstileWidgetId: string | undefined;

	onMount(() => {
		pageLoadedAt = Date.now();
		if (!TURNSTILE_SITE_KEY) return;
		loadTurnstile()
			.then(() => {
				const ts = getTurnstile();
				if (!ts || !turnstileEl) return;
				turnstileWidgetId = ts.render(turnstileEl, {
					sitekey: TURNSTILE_SITE_KEY,
					callback: (t: string) => (turnstileToken = t),
					'expired-callback': () => (turnstileToken = ''),
					'error-callback': () => (turnstileToken = '')
				});
			})
			.catch(() => {
				status = 'error';
				message = 'Could not load the verification check. Please reload the page.';
			});
	});

	const submitDisabled = $derived(status === 'submitting' || !turnstileToken);

	const inputClass = $derived(
		tone === 'dark'
			? 'border-cream/20 bg-cream/5 text-cream placeholder:text-cream/40 focus:border-ochre'
			: 'border-rule bg-cream text-navy-deep placeholder:text-slate-light focus:border-navy'
	);
	const buttonClass = $derived(
		tone === 'dark'
			? 'bg-ochre text-navy-ink hover:bg-ochre-soft'
			: 'bg-navy-deep text-cream hover:bg-navy-ink'
	);
	const okClass = $derived(tone === 'dark' ? 'text-cream' : 'text-navy-deep');
	const errClass = $derived(tone === 'dark' ? 'text-ochre-soft' : 'text-red-800');

	async function onsubmit(event: SubmitEvent) {
		event.preventDefault();
		if (status === 'submitting') return;
		message = '';

		const value = email.trim().toLowerCase();
		if (!EMAIL_RE.test(value) || value.length > 254) {
			status = 'error';
			message = 'Please enter a valid email address.';
			return;
		}

		if (!turnstileToken) {
			status = 'error';
			message = 'Please complete the verification check.';
			return;
		}

		status = 'submitting';
		try {
			const res = await fetch('/api/subscribe', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email: value, website, ts: pageLoadedAt, turnstileToken })
			});
			const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
			if (res.ok && data.ok) {
				status = 'success';
				email = '';
			} else {
				status = 'error';
				message = data.error || 'Something went wrong. Please try again shortly.';
			}
		} catch {
			status = 'error';
			message = 'Could not reach the server. Please check your connection.';
		}
		if (status === 'error') {
			// Turnstile tokens are single-use
			turnstileToken = '';
			getTurnstile()?.reset(turnstileWidgetId);
		}
	}
</script>

<form {onsubmit} novalidate class="relative" aria-describedby="{idPrefix}-status">
	<!-- Honeypot — visually hidden, skipped by keyboard and screen readers -->
	<div class="pointer-events-none absolute -left-[9999px] h-0 w-0 overflow-hidden" aria-hidden="true">
		<label for="{idPrefix}-website">Website (leave blank)</label>
		<input
			id="{idPrefix}-website"
			type="text"
			name="website"
			tabindex="-1"
			autocomplete="off"
			bind:value={website}
		/>
	</div>

	<div class="flex gap-2">
		<label for="{idPrefix}-email" class="sr-only">Email address</label>
		<input
			id="{idPrefix}-email"
			type="email"
			name="email"
			required
			autocomplete="email"
			inputmode="email"
			placeholder="you@firm.com"
			bind:value={email}
			aria-invalid={status === 'error'}
			class="min-w-0 flex-1 rounded-sm border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ochre/30 {inputClass}"
		/>
		<button
			type="submit"
			disabled={submitDisabled}
			class="rounded-sm px-4 py-2 text-xs font-semibold uppercase tracking-wider transition disabled:cursor-not-allowed disabled:opacity-60 {buttonClass}"
		>
			{status === 'submitting' ? 'Sending…' : buttonLabel}
		</button>
	</div>

	<div bind:this={turnstileEl} class="mt-3"></div>
	{#if !TURNSTILE_SITE_KEY}
		<p class="mt-2 text-xs {errClass}">Signup is temporarily unavailable. Please check back soon.</p>
	{/if}

	<p id="{idPrefix}-status" role="status" aria-live="polite" class="mt-2 min-h-[1.1rem] text-xs">
		{#if status === 'success'}
			<span class={okClass}>Check your inbox to confirm. We just sent a link (valid 48 hours); check spam if you do not see it.</span>
		{:else if status === 'error' && message}
			<span class={errClass}>{message}</span>
		{/if}
	</p>
</form>
