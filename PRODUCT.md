# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Four confirmed audiences, all of which matter today:

- **Developers arriving from search.** Land on individual blog posts via Google, read one article, may subscribe or move on. The highest-volume audience and the one that funds the site.
- **Local business owners** (refrigeração, beleza, pet, B2B — mostly Osasco/Grande São Paulo). Evaluating Airton to build or renew their website. `/previas` exists for them: they see a real, live site built for a business like theirs before committing.
- **Recruiters and hiring managers** assessing Airton as a senior engineer for a role or contract. They check `/sobre`, `/projetos`, and the stack signals.
- **Agency and product clients** buying consulting: infrastructure/zero-downtime work, WordPress and plugin engineering.

No single audience was ranked above the others — future work must not quietly optimize one surface at the cost of the others.

## Product Purpose

airtonvancin.com is the personal site of Airton Vancin Junior, a software engineer with 15+ years of experience. It combines a technical blog, a portfolio of shipped work, a catalog of his own WordPress plugins and browser extensions, and service landing pages.

**Success is audience and traffic**: recurring readers, subscribers, and the ad revenue that follows from blog traffic. Leads, credibility, and product downloads are real secondary outcomes, but the outcome the site is optimized to produce is people arriving, reading, and coming back.

## Positioning

A working senior engineer publishing from practice, not from theory: 15+ years across WordPress and modern JS, with the artifacts to prove it in the same place as the writing — plugins on wordpress.org, a published Chrome extension, live client previews, and production infrastructure work. The blog is not detached from the portfolio; each is evidence for the other.

## Operating Context

- Content is written and shipped by one person, in Portuguese, as Markdown/MDX files in the repo.
- Most traffic is organic search landing directly on an article, not on the home page. Article pages are frequently the first and only page a visitor sees.
- Ads and analytics run site-wide (Google AdSense `ca-pub-3553535106347103`, Google Analytics `G-1HNLJCL2MF`, `ads.txt` present). Revenue depends on ad units rendering on content pages.
- Distribution is passive: RSS, sitemap, Open Graph/Twitter cards, and the Substack newsletter. Social share buttons exist on articles.
- Client previews are delivered as live Vercel deployments and linked from `/previas` before a business commits.

## Capabilities and Constraints

**Stack:** Astro 5 static site, Tailwind CSS 4 (`@theme` tokens in `src/styles/global.css`), React 19 islands for interactive pieces only (`Navigation` via `client:idle`), Radix primitives + shadcn-style `src/components/ui/*`, Tabler icons, `sharp` for images. Deployed as a static build; there is no backend or server runtime.

**Surfaces:**

- `/` — hero, Zero Downtime CTA, featured blog, WordPress plugins, browser extensions, projects
- `/blog`, `/blog/[slug]`, `/blog/tags`, `/blog/tag/[tag]`, `rss.xml` — 18 published posts with tags, reading time, share buttons
- `/plugins`, `/plugin/[slug]` — five WordPress plugins (Video Destacado, Manage User Roles, Nudge SEO AI, SSO Connector for JumpCloud, Notria AI Suite), each with bilingual `en`/`pt` content in `src/data/plugins.ts`
- `/projetos`, `/project/[slug]` — three projects
- `/previas` — 18 live client website previews grouped into four niches
- `/gemini-flow-downloader` — landing page + `.zip` download for a Chrome extension
- `/zero-downtime` — service landing page for blue-green / zero-downtime deployment work
- `/sobre`, `/contato`, `/politicas`, `/termos`, `/404`

**Language:** PT-BR is the primary and default language. English exists only on selected pages via a `data-en`/`data-pt` attribute switcher (`LanguageSwitcher.astro`, currently on `/previas` and `/gemini-flow-downloader`) and in the plugin data model. Full site-wide bilingualism is explicitly not a goal; new pages default to PT-BR only, and the EN toggle is added deliberately where an international audience exists.

**Constraints future work must respect:**

- Static-only output — no server-side rendering or API routes available.
- AdSense and Analytics scripts must keep loading site-wide; ad units must have somewhere to render on content pages.
- Performance is a positioning claim, not just a preference (the site's own posts are about migrating to Astro for speed). Regressions here contradict the content.
- Dark mode exists via a `.dark` class variant, but coverage is uneven across pages — several pages are light-only.

**Explicitly undecided:** whether the theme switcher, the newsletter backend, and full dark-mode coverage are worth completing; whether `/previas` graduates into a proper service offering with pricing.

## Brand Commitments

- Name: **Airton Vancin** (full: Airton Vancin Junior). Domain `airtonvancin.com`.
- Voice: PT-BR, first person, practitioner-to-practitioner. Direct and concrete — "+15 anos criando soluções que importam. Código limpo. Performance. Resultados."
- Existing assets: profile avatar (`public/assets/images/profile-avatar.avif|png`), favicon set and web manifest, per-post header images in `src/assets/images/blog/`.
- Social identity: GitHub `airton`, LinkedIn `airtonvancin`, WordPress.org `airtonvancin`, Substack `nichesignal`, email `airtonvancin@gmail.com`.

## Evidence on Hand

**Confirmed real — preserve verbatim, do not soften or restate:**

- The `/sobre` timeline: Software Engineer Senior (2018–presente), Desenvolvedor WordPress (2014–2018), Análise e Desenvolvimento de Sistemas (graduação), AWS certifications.
- The three projects in `src/data/projects.ts` — Balancewise.io, Timberoad, Pablo Escobar Ipsum — are genuine shipped work with live links.
- The 18 previews in `src/data/previas.ts` are real sites delivered for named local businesses, all live.
- The five WordPress plugins are published on wordpress.org; the Gemini Flow downloader is a real, downloadable Chrome extension.
- 18 published blog posts, all authored.

**Absences future work must not fabricate:**

- No testimonials, client quotes, or named references exist.
- No pricing, packages, or SLA claims exist for any service, including Zero Downtime and the previews.
- No traffic numbers, download counts, plugin install counts, or performance benchmarks are on hand as site copy.
- No case-study outcomes (revenue lifted, downtime avoided) have been documented.

**Open item:** the newsletter form is confirmed as intended-to-work, but `SectionNewsletter.astro` currently only `console.log`s the address — nothing is stored or sent. Either the capture backend is missing or the form should point at Substack. Resolve before treating email capture as a live capability.

**Placeholder to replace, not preserve:** plugin banner images in `src/data/plugins.ts` still point at `via.placeholder.com`.

## Product Principles

1. **The article page is the front door.** Most visitors arrive there from search and leave from there. It carries more weight than the home page for every decision about navigation, credibility, and what comes next.
2. **Evidence over adjectives.** Every claim on this site has a live artifact behind it — a plugin, a deployed preview, a shipped project. Never write a claim that has no artifact to point at.
3. **Serve four audiences without diluting any.** A developer reading about TypeScript and a business owner comparing website builders both belong here; route them, don't average them.
4. **Speed is part of the argument.** The site publishes about performance. It must be measurably fast, or the writing loses standing.
5. **One voice, one language.** PT-BR first person throughout; English only where a specific page has an international audience.

## Accessibility & Inclusion

No product-specific accessibility standard has been established beyond ordinary web good practice. Two facts worth carrying forward:

- Atkinson Hyperlegible font files ship in `public/fonts/` but are not referenced by any stylesheet — either adopt them deliberately or drop them.
- `prefers-reduced-motion` is not implemented anywhere in the UI, while the animated hero, aurora blobs, and floating particles all run unconditionally. The blog post `efeito-paralax-com-css-puro.mdx` explicitly tells readers to honor that query, so the gap contradicts published advice.
