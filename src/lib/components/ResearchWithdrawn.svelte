<script lang="ts">
	let {
		title,
		kicker,
		question,
		ogImage = ''
	}: {
		title: string;
		kicker: string;
		question: string;
		ogImage?: string;
	} = $props();
</script>

<svelte:head>
	<title>{title} | Yodacom Research</title>
	<meta name="description" content="Simulated results withdrawn while CoinRoc rebuilds its simulator with stricter assumptions." />
	<meta property="og:title" content="{title} | Yodacom Research" />
	<meta property="og:description" content="Simulated results withdrawn while CoinRoc rebuilds its simulator with stricter assumptions." />
	{#if ogImage}
		<meta property="og:image" content={ogImage} />
	{/if}
</svelte:head>

<div class="mx-auto max-w-3xl px-6 sm:px-10 pt-10">
	<a href="/research" class="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-ochre-deep transition hover:text-ochre">
		<svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M13 8H3M7 12l-4-4 4-4"/></svg>
		All research
	</a>
</div>

<header class="mx-auto max-w-3xl px-6 sm:px-10 pt-8 pb-4">
	<p class="mb-5 text-[0.68rem] uppercase tracking-widest text-slate-light">{kicker}</p>
	<h1 class="mb-5 font-serif text-4xl font-500 leading-tight text-navy-ink sm:text-5xl">{title}</h1>
	<p class="mb-6 text-lg leading-relaxed text-slate">{question}</p>
</header>

<article class="mx-auto max-w-3xl px-6 sm:px-10 pb-20">
	<div class="rounded-xl border border-ochre/40 bg-ochre/10 p-5 text-sm leading-relaxed text-slate space-y-3">
		<p>
			Earlier versions of this page reported simulated returns; we've withdrawn them while we rebuild our simulator with stricter assumptions.
		</p>
		<p>
			Nothing on this page should be read as a statement about how any CoinRoc method, rating, or strategy has performed or will perform.
			Simulated results are hypothetical, and grid trading involves substantial risk of loss, including loss of principal.
		</p>
	</div>
	<p class="mt-8 text-sm text-slate">
		<a href="/research" class="font-semibold text-ochre-deep hover:text-ochre">Return to all research</a>
	</p>
</article>
