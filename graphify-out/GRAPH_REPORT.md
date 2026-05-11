# Graph Report - .  (2026-04-29)

## Corpus Check
- Corpus is ~28,239 words - fits in a single context window. You may not need a graph.

## Summary
- 166 nodes · 270 edges · 9 communities detected
- Extraction: 89% EXTRACTED · 11% INFERRED · 0% AMBIGUOUS · INFERRED: 30 edges (avg confidence: 0.83)
- Token cost: 0 input · 0 output

## Community Hubs (Navigation)
- [[_COMMUNITY_Career History|Career History]]
- [[_COMMUNITY_Research Philosophy|Research Philosophy]]
- [[_COMMUNITY_Pages, Products & Research|Pages, Products & Research]]
- [[_COMMUNITY_Contact & Deployment|Contact & Deployment]]
- [[_COMMUNITY_Brand Identity & Founder|Brand Identity & Founder]]
- [[_COMMUNITY_Logo Visual System|Logo Visual System]]
- [[_COMMUNITY_Contact API Functions|Contact API Functions]]
- [[_COMMUNITY_Founder Credentials|Founder Credentials]]
- [[_COMMUNITY_App Shell & Typography|App Shell & Typography]]

## God Nodes (most connected - your core abstractions)
1. `+page.svelte — Home Page` - 13 edges
2. `about/+page.svelte — About Page` - 13 edges
3. `applied-ai/+page.svelte — Applied AI Page` - 12 edges
4. `CoinRoc — Crypto Grid Trading Analysis Product` - 12 edges
5. `About Page` - 12 edges
6. `CoinRoc` - 12 edges
7. `+layout.svelte — Site Shell / Navigation` - 10 edges
8. `Career Arc Timeline Section` - 10 edges
9. `contact/+page.svelte — Contact Page` - 9 edges
10. `functions/api/contact.ts — Cloudflare Pages Function` - 8 edges

## Surprising Connections (you probably didn't know these)
- `svelte.config.js — SvelteKit Build Config` --references--> `Cloudflare Pages — Hosting Platform`  [INFERRED]
  svelte.config.js → DEPLOY.md
- `README.md — Project Documentation` --references--> `CoinRoc — Crypto Grid Trading Analysis Product`  [EXTRACTED]
  README.md → src/routes/products/+page.svelte
- `DEPLOY.md — Deployment Documentation` --references--> `Loops.so — Transactional Email Service`  [EXTRACTED]
  DEPLOY.md → functions/api/contact.ts
- `DEPLOY.md — Deployment Documentation` --references--> `Cloudflare Turnstile — Bot Detection / CAPTCHA`  [EXTRACTED]
  DEPLOY.md → functions/api/contact.ts
- `Contact Form Client-Side Validation` --semantically_similar_to--> `Contact API Server-Side Validation`  [INFERRED] [semantically similar]
  src/routes/contact/+page.svelte → functions/api/contact.ts

## Hyperedges (group relationships)
- **Contact Spam Defense Pipeline** — contact_page, honeypot_spam, dwell_time_check, cloudflare_turnstile [EXTRACTED 0.95]
- **Yodacom Three Practice Areas** — yodacom_research, coinroc, ria_decision_support, fuzzy_logic_system [EXTRACTED 0.90]
- **Core Research Methodology Triad** — walk_forward_validation, cost_tier_disclosure, pre_register_hypothesis [EXTRACTED 0.88]
- **MPT Lineage: RAMCAP to CoinRoc via Correlation Analysis** — product_ramcap, concept_correlation_analysis, product_coinroc [EXTRACTED 1.00]
- **Research Method Triad: Walk-Forward + Cost-Tier + Pre-Registered Hypotheses** — concept_walk_forward_validation, concept_cost_tier_disclosure, concept_preregistered_hypotheses [EXTRACTED 1.00]
- **Compute Arc Narrative: 1985 Math + AI Winter Experience + 2026 Compute** — data_compute_1985, concept_ai_winter_firsthand, data_compute_2026 [EXTRACTED 1.00]

## Communities

### Community 0 - "Career History"
Cohesion: 0.08
Nodes (35): 1984: Adjunct Professor, College for Financial Planning, 1985: Built and Sold RAMCAP, 1988: Navigator Fund (WSJ-Featured), 1998: Pre-Google Search Engine Company, 2001: Aquatic Behaviour Technologies (Underwater RFID/Lobster), 2010: VP Digital Innovation, Full Circle, 2012: Founded Yodacom (Studio Era), 2019: CoinRoc Research Begins (+27 more)

### Community 1 - "Research Philosophy"
Cohesion: 0.09
Nodes (32): 2026: Yodacom Research (Formal Research House), Independent Trading Algorithm Verification, Correlation Analysis, Honest Cost-Tier Disclosure, Crypto Grid Trading, Digital Products, Independent Quantitative Research, New Asset Classes (Quantitative Research Focus) (+24 more)

### Community 2 - "Pages, Products & Research"
Cohesion: 0.23
Nodes (25): about/+page.svelte — About Page, applied-ai/+page.svelte — Applied AI Page, Cloudinary — Image CDN, CoinRoc — Crypto Grid Trading Analysis Product, Honest Cost-Tier Disclosure — Research Principle, Explainable AI — Compliance-Ready Output, Fuzzy Inference System — AI Capability, Gridium — Paper 1 (Execution Cost Impact on Crypto Grid Trading) (+17 more)

### Community 3 - "Contact & Deployment"
Cohesion: 0.15
Nodes (19): @sveltejs/adapter-static — Static Site Adapter, Cloudflare Pages — Hosting Platform, Cloudflare Turnstile — Bot Detection / CAPTCHA, functions/api/contact.ts — Cloudflare Pages Function, Contact API Server-Side Validation, Contact Form Client-Side Validation, contact/+page.svelte — Contact Page, Contact Topic Query Param Preselect (+11 more)

### Community 4 - "Brand Identity & Founder"
Cohesion: 0.17
Nodes (17): Approachable Warm Demeanor, Business Formal Attire — Navy Suit Red Tie, Red Accent Color #EE1111, Sage Green Color #A9BAA8, Communication Signal / Broadcast Motif, Yodacom SVG Favicon, Jeremy — Yodacom Founder, Jeremy — Founder Headshot (+9 more)

### Community 5 - "Logo Visual System"
Cohesion: 0.33
Nodes (10): Yodacom Brand Mark, Yodacom Brand Name, Yodacom Logo Red Color (#EE1111), Yodacom Logo Sage Green Color (#A9BAA8), Yodacom Logo SVG, Yodacom Logo Triangular Dot Composition, Yodacom Logo Triple Red Dot Motif, Yodacom Logo VTracer Auto-Trace Origin (+2 more)

### Community 6 - "Contact API Functions"
Cohesion: 0.44
Nodes (8): asNumber(), asString(), json(), onRequest(), onRequestPost(), sendViaLoops(), validate(), verifyTurnstile()

### Community 7 - "Founder Credentials"
Cohesion: 0.38
Nodes (7): 40+ Years in Markets, Certified Financial Planner, MPT Adjunct Faculty, WSJ-Featured Fund Operator, College for Financial Planning, Jeremy J. Black, Credentials Bar Section

### Community 8 - "App Shell & Typography"
Cohesion: 1.0
Nodes (2): app.html — HTML Document Shell, Google Fonts — Inter + Fraunces Typography

## Knowledge Gaps
- **30 isolated node(s):** `Dwell-Time Bot Detection`, `Site Navigation — 5-Item Nav Array`, `Google Fonts — Inter + Fraunces Typography`, `Nav Item: Home`, `Nav Item: Research` (+25 more)
  These have ≤1 connection - possible missing edges or undocumented components.
- **Thin community `App Shell & Typography`** (2 nodes): `app.html — HTML Document Shell`, `Google Fonts — Inter + Fraunces Typography`
  Too small to be a meaningful cluster - may be noise or needs more connections extracted.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `About Page` connect `Career History` to `Research Philosophy`?**
  _High betweenness centrality (0.083) - this node is a cross-community bridge._
- **Why does `CoinRoc` connect `Research Philosophy` to `Career History`?**
  _High betweenness centrality (0.043) - this node is a cross-community bridge._
- **Why does `Site Navigation Header` connect `Research Philosophy` to `Career History`?**
  _High betweenness centrality (0.038) - this node is a cross-community bridge._
- **What connects `Dwell-Time Bot Detection`, `Site Navigation — 5-Item Nav Array`, `Google Fonts — Inter + Fraunces Typography` to the rest of the system?**
  _30 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `Career History` be split into smaller, more focused modules?**
  _Cohesion score 0.08 - nodes in this community are weakly interconnected._
- **Should `Research Philosophy` be split into smaller, more focused modules?**
  _Cohesion score 0.09 - nodes in this community are weakly interconnected._