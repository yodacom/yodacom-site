# Deployment — yodacom.com on Cloudflare Pages

This site is a fully prerendered static SvelteKit build (every route is a physical HTML file). It deploys to Cloudflare Pages with zero server-side runtime.

## Cloudflare Pages build settings

| Field                | Value            |
| -------------------- | ---------------- |
| Framework preset     | SvelteKit        |
| Build command        | `pnpm build`     |
| Build output dir     | `build`          |
| Root directory       | (blank)          |
| Node version         | `20` (from `.nvmrc`) |
| Environment          | none required    |

Cloudflare Pages auto-detects `pnpm-lock.yaml` and uses `pnpm install`. If it ever falls back to npm, set the build command to `pnpm install && pnpm build` explicitly.

## Environment variables

The static pages themselves need none, but the `/api/contact` Cloudflare Pages Function does.
Set these in Cloudflare Pages → Settings → Environment variables (Production scope):

| Name                         | Required | Purpose                                                     |
| ---------------------------- | -------- | ----------------------------------------------------------- |
| `LOOPS_API_KEY`              | yes      | Loops.so API key (reuse the one from CoinRoc)               |
| `LOOPS_CONTACT_TEMPLATE_ID`  | yes      | Transactional template id for the contact-form notification |
| `CONTACT_DEST_EMAIL`         | no       | Where to route submissions. Defaults to `jb@yodacom.com`    |
| `TURNSTILE_SECRET_KEY`       | no       | If set, enables Cloudflare Turnstile captcha verification   |

The contact form degrades gracefully: if `LOOPS_API_KEY` or `LOOPS_CONTACT_TEMPLATE_ID` is
missing, the function returns a 503 with a plain-English message asking the visitor to email
`jb@yodacom.com` directly.

## Custom domain setup (yodacom.com)

1. In Cloudflare Pages project -> Custom domains -> Set up a custom domain.
2. Add `yodacom.com` and `www.yodacom.com`.
3. Cloudflare will provision the TLS cert automatically (Universal SSL).
4. At the registrar (Namecheap), point nameservers to the Cloudflare nameservers shown in the CF dashboard. If the zone is already on Cloudflare, CF will add the CNAME/ALIAS records itself.
5. In Cloudflare SSL/TLS settings, set encryption mode to **Full (strict)** and enable **Always Use HTTPS**.

## Files that drive the deploy

- `svelte.config.js` — uses `@sveltejs/adapter-static` with `pages: 'build'`, `assets: 'build'`, `fallback: undefined`, `strict: true`.
- `src/routes/+layout.ts` — `export const prerender = true;` (every route prerendered).
- `.nvmrc` — pins Node 20 for Cloudflare Pages build container.
- `static/_headers` — security headers (X-Content-Type-Options, Referrer-Policy, Permissions-Policy, HSTS, X-Frame-Options) + long-cache immutable assets.
- No `_redirects` file — every route has a physical `.html` file, so nothing to redirect.

## Rollback procedure

Cloudflare Pages keeps deployment history indefinitely.

1. Cloudflare dashboard -> Pages -> `yodacom-site` -> Deployments.
2. Find the previous known-good deploy.
3. Click `...` -> **Rollback to this deployment**. Takes ~10 seconds to propagate globally.

Git reverts work too: `git revert <sha> && git push` triggers a fresh Pages build.

## Known gotchas

- **Preview deployments use ephemeral `*.pages.dev` URLs.** Only the production deploy (branch = `main`) maps to `yodacom.com`.
- **Build warns about `href="#"`** on three placeholder footer links (LinkedIn/X/RSS in `src/routes/+layout.svelte`). Non-blocking. Replace with real URLs or remove when social accounts are ready.
- **Do not add SvelteKit server-only code** (no `+page.server.ts`, no `+server.ts`) — the static adapter cannot handle them. Server-side work belongs in **Cloudflare Pages Functions** under `/functions/` at repo root. See `functions/api/contact.ts` for the pattern: CF auto-detects the directory, deploys each file as an endpoint (`functions/api/contact.ts` → `POST /api/contact`), and the SvelteKit static build ignores it entirely.
- **Tailwind v4 is used.** Theme is in `src/app.css` via `@theme`, not `tailwind.config.js`. CF Pages build container handles it fine — no special config required.

## Sanity check before each deploy

```
pnpm install
pnpm build
ls build/index.html build/about.html build/products.html build/research.html
```

If all four files exist, the deploy will work.
