# yodacom-site

The Yodacom Research marketing site. SvelteKit (Svelte 5) + Tailwind CSS v4 + adapter-static.

## Commands

```bash
pnpm install          # install dependencies (first time only)
pnpm dev              # start dev server at http://localhost:5173
pnpm build            # produce static output in ./build
pnpm preview          # preview the production build locally
pnpm check            # typecheck
```

## Tech stack

- **SvelteKit 2** with **Svelte 5 runes** ($state, $derived, $props)
- **Tailwind CSS v4** (CSS-first configuration via `src/app.css`, no tailwind.config.js)
- **`@sveltejs/adapter-static`** — pure static output for Cloudflare Pages
- **TypeScript** throughout

## Site structure

4 static pages:

| Route | Purpose |
|---|---|
| `/` | Home — research house positioning, CoinRoc & VetTheTech cards, founder blurb |
| `/research` | Published papers list (currently features Gridium as in-progress) |
| `/products` | CoinRoc, VetTheTech, consulting/partnerships section |
| `/about` | Jeremy's 40-year career arc, past projects, contact |

## Brand palette (Tailwind v4 theme tokens)

Defined in `src/app.css` via `@theme`:

- `--color-navy` `#1e3a5f` (primary)
- `--color-navy-deep` `#142848` (hero text)
- `--color-slate` `#475569` (body text)
- `--color-ochre` `#c9874a` (accent)
- `--color-cream` `#f8f5f0` (page background)

Muted institutional aesthetic matching the Gridium research visuals
(see `~/aiprojects/ClineApp/crypto-analysis-app/docs/research/visuals/gridium/`).

## Deployment (when ready)

Target: **Cloudflare Pages** (free tier)

1. Push this repo to GitHub as `yodacom-site`
2. In Cloudflare Pages dashboard: connect GitHub → select repo → build command `pnpm build` → output directory `build`
3. In Cloudflare Pages → Custom domains: add `yodacom.com` (currently on Vercel — flip DNS when ready)
4. Archive the old 2019 Vercel project after the new site is live

Cloudflare DNS already manages yodacom.com. The existing 2019 Vercel
deployment can stay live during development since the new site is on a
separate project until domain flip.

## Content sources

- `~/PKA/Knowledge_Base/yodacom-current-site-content-dump.md` — scraped
  from the live 2019 site
- `~/PKA/Knowledge_Base/jjblack-site-content-dump.md` — scraped from
  jjblack.com, contains the 40-year career arc that legitimizes the
  research-house pivot
- Jeremy's verified bio is the single source of truth for the founder
  section. The WSJ top-10 claim still needs original article sourcing
  before publication — noted in the about page footer.

## Known TODOs

- [ ] Favicon (currently default SvelteKit)
- [ ] Footer: add Twitter / LinkedIn links once Yodacom Research social
      accounts exist
- [ ] `/research` newsletter signup form (wire to Loops or similar)
- [ ] `/about` WSJ source citation once Jeremy locates the original article
- [ ] Gridium paper publication → update `/research` with real paper link
- [ ] Hot-link the existing Yodacom logo from Cloudinary for the header
      (currently text-only): `https://res.cloudinary.com/yodacom/image/upload/v1554864573/yodacom/YodaComLogoTrans150x50_3x.png`
- [ ] Cloudflare Access for staged research previews (Yodacom employees only)

## What this replaces

This is a ground-up rebuild of the 2019 React SPA currently deployed at
yodacom.com via a dormant Vercel CLI push. The old site was a mobile-app
development studio pitch ("You need an app for that!") with Pricing/Sign Up
tabs that never got built. The new site is the research house positioning
Jeremy decided on during the Gridium research sprint — 1980s MPT expertise
returning to a new asset class.
