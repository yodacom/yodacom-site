<script lang="ts">
	import '../app.css';
	import { page } from '$app/stores';

	interface Props {
		children?: import('svelte').Snippet;
	}

	let { children }: Props = $props();

	let mobileOpen = $state(false);

	const nav = [
		{ href: '/', label: 'Home' },
		{ href: '/research', label: 'Research' },
		{ href: '/products', label: 'Products' },
		{ href: '/about', label: 'About' },
		{ href: '/contact', label: 'Contact' }
	];

	const currentPath = $derived($page.url.pathname);
	const isActive = (href: string) =>
		href === '/' ? currentPath === '/' : currentPath.startsWith(href);
</script>

<div class="flex min-h-screen flex-col bg-cream">
	<header class="sticky top-0 z-40 border-b border-rule/70 bg-cream/85 backdrop-blur">
		<div class="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
			<a href="/" class="flex items-center gap-3" onclick={() => (mobileOpen = false)}>
				<img
					src="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
					alt="Yodacom"
					class="h-8 w-auto"
					width="150"
					height="50"
				/>
				<span class="hidden text-[0.72rem] font-semibold uppercase tracking-[0.22em] text-slate sm:inline">
					Research
				</span>
			</a>

			<nav class="hidden items-center gap-8 text-sm font-medium text-slate md:flex">
				{#each nav as item (item.href)}
					<a
						href={item.href}
						class="group relative py-1 transition hover:text-navy-deep {isActive(item.href) ? 'text-navy-deep' : ''}"
					>
						{item.label}
						<span
							class="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-ochre transition-transform duration-300 group-hover:scale-x-100 {isActive(item.href) ? 'scale-x-100' : ''}"
						></span>
					</a>
				{/each}
				<a
					href="https://coinroc.com"
					class="ml-2 inline-flex items-center rounded-sm border border-navy-deep/80 bg-navy-deep px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink"
				>
					CoinRoc.com →
				</a>
			</nav>

			<button
				type="button"
				class="inline-flex h-10 w-10 items-center justify-center rounded-sm text-navy-deep md:hidden"
				aria-label="Toggle menu"
				onclick={() => (mobileOpen = !mobileOpen)}
			>
				{#if mobileOpen}
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 6l12 12M18 6L6 18"/></svg>
				{:else}
					<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
				{/if}
			</button>
		</div>

		{#if mobileOpen}
			<div class="border-t border-rule/70 bg-cream md:hidden">
				<nav class="mx-auto flex max-w-6xl flex-col px-6 py-4 text-base">
					{#each nav as item (item.href)}
						<a
							href={item.href}
							class="border-b border-rule/50 py-3 font-medium text-navy-deep last:border-b-0"
							onclick={() => (mobileOpen = false)}
						>
							{item.label}
						</a>
					{/each}
					<a
						href="https://coinroc.com"
						class="mt-4 inline-flex items-center justify-center rounded-sm bg-navy-deep px-4 py-3 text-sm font-semibold uppercase tracking-wider text-cream"
					>
						CoinRoc.com →
					</a>
				</nav>
			</div>
		{/if}
	</header>

	<main class="flex-1">
		{@render children?.()}
	</main>

	<footer class="mt-24 border-t border-rule/70 bg-cream-deep/50">
		<div class="mx-auto max-w-6xl px-6 py-16">
			<div class="grid gap-12 md:grid-cols-12">
				<div class="md:col-span-5">
					<img
						src="https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png"
						alt="Yodacom"
						class="mb-4 h-9 w-auto"
					/>
					<p class="max-w-sm text-sm leading-relaxed text-slate">
						Independent quantitative research and software products.
						Based in the Rocky Mountains of Silverthorne, Colorado.
						Operating since 2012.
					</p>
				</div>

				<div class="md:col-span-3">
					<div class="eyebrow mb-4">Navigate</div>
					<ul class="space-y-2 text-sm text-slate">
						<li><a href="/research" class="hover:text-navy-deep">Research</a></li>
						<li><a href="/products" class="hover:text-navy-deep">Products</a></li>
						<li><a href="/about" class="hover:text-navy-deep">About</a></li>
						<li><a href="/contact" class="hover:text-navy-deep">Contact</a></li>
						<li><a href="https://coinroc.com" class="hover:text-navy-deep">CoinRoc.com →</a></li>
					</ul>
				</div>

				<div class="md:col-span-4">
					<div class="eyebrow mb-4">Research updates</div>
					<p class="mb-3 text-sm text-slate">
						One email per published paper. No marketing.
					</p>
					<form class="flex gap-2" onsubmit={(e) => e.preventDefault()}>
						<input
							type="email"
							placeholder="you@firm.com"
							class="min-w-0 flex-1 rounded-sm border border-rule bg-cream px-3 py-2 text-sm text-navy-deep placeholder:text-slate-light focus:border-navy focus:outline-none"
						/>
						<button
							type="submit"
							class="rounded-sm bg-navy-deep px-4 py-2 text-xs font-semibold uppercase tracking-wider text-cream transition hover:bg-navy-ink"
						>
							Notify
						</button>
					</form>
					<p class="mt-2 text-[0.68rem] text-slate-light">Signup form not yet live.</p>
				</div>
			</div>

			<div class="mt-14 flex flex-col gap-3 border-t border-rule/60 pt-6 text-xs text-slate-light sm:flex-row sm:items-center sm:justify-between">
				<div>© 2026 Yodacom LLC · Silverthorne, Colorado · <a href="mailto:jb@yodacom.com" class="hover:text-navy-deep">jb@yodacom.com</a></div>
				<div class="flex gap-4">
					<a href="#" class="hover:text-navy-deep">LinkedIn</a>
					<a href="#" class="hover:text-navy-deep">X</a>
					<a href="#" class="hover:text-navy-deep">RSS</a>
				</div>
			</div>
		</div>
	</footer>
</div>
