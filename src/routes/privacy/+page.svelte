<script lang="ts">
	const SITE = 'https://yodacom.com';
	const pageTitle = 'Privacy Notice | YodaCom';
	const pageDescription =
		'How Yodacom LLC handles information submitted through yodacom.com forms, and what our host, Cloudflare, measures.';
	const canonical = `${SITE}/privacy`;
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
</svelte:head>

<section class="border-b border-rule/60 bg-topo">
	<div class="mx-auto max-w-3xl px-6 py-20 sm:py-28">
		<div class="fade-up eyebrow mb-5 flex items-center gap-3">
			<span class="rule-ochre"></span>
			Privacy · YodaCom
		</div>
		<h1
			class="fade-up d1 mb-8 font-serif font-500 tracking-tight text-navy-ink"
			style="font-size: var(--text-display); line-height: var(--text-hero-line);"
		>
			Privacy
		</h1>
		<p class="fade-up d1 -mt-4 mb-8 text-sm text-slate">Last updated: October 26, 2026</p>
		<div class="fade-up d2 space-y-6 font-serif text-lg leading-relaxed text-slate">
			<p>
				<strong>Privacy notice.</strong> This site is run by Yodacom LLC, Silverthorne, Colorado.
				If you send us a message or subscribe by email, we collect the information you submit
				(such as your name, email address and message) and use it to reply to you or to send the
				updates you asked for; we do not sell it. We use Loops, an email service provider, to
				deliver form messages and our updates. You can ask us to stop emailing you or to delete
				your information at any time by writing to
				<a href="mailto:jb@yodacom.com" class="underline hover:text-navy-deep">jb@yodacom.com</a>.
			</p>
			<p>
				Our host, Cloudflare, also measures basic page-load and performance information (such as
				the page address, referring page, timing, browser type and IP address) using a small
				script. It does not use cookies and does not follow you across other websites. We use it
				only to see whether pages load quickly and work. We also use Cloudflare Turnstile to
				filter out bots on our forms, and Google Fonts to display text, which means your browser
				contacts those services when you load a page. We may also use IP addresses to limit abuse of
				our forms.
			</p>
		</div>
	</div>
</section>
