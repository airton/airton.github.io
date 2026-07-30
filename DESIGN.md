---
name: Airton Vancin
description: The Quiet Gallery — an engineer's work hung on warm white walls, lifting toward you as you approach.
colors:
  ink: "oklch(21.7% 0.006 106.9)"
  ink-secondary: "oklch(35.8% 0.008 106.8)"
  quiet: "oklch(53.5% 0.015 106.9)"
  quiet-faint: "oklch(68.4% 0.012 106.7)"
  quiet-lifted: "oklch(83.1% 0.011 100.9)"
  hairline: "oklch(91.2% 0.009 100.0)"
  hairline-faint: "oklch(95.1% 0.008 98.9)"
  gallery-floor: "oklch(97.3% 0.005 95.1)"
  wall: "#ffffff"
  night-wall: "oklch(18.1% 0.004 106.8)"
  night-floor: "oklch(14.4% 0.005 107.0)"
  night-edge: "oklch(28.4% 0.007 106.8)"
  brand: "oklch(54.6% 0.215 262.9)"
  brand-deep: "oklch(48.8% 0.217 264.4)"
  brand-bright: "oklch(62.3% 0.188 259.8)"
  brand-lifted: "oklch(71.4% 0.143 254.6)"
  brand-edge: "oklch(93.2% 0.032 255.6)"
  brand-wash: "oklch(97.0% 0.014 254.6)"
  live-signal: "oklch(62.7% 0.170 149.2)"
  status-ground: "oklch(98.2% 0.018 155.8)"
  status-edge: "oklch(96.2% 0.043 156.7)"
  status-ink: "oklch(44.8% 0.108 151.3)"
  code-magenta: "oklch(52.5% 0.199 4.0)"
  danger: "oklch(57.7% 0.245 27.325)"
  danger-edge: "oklch(80.8% 0.114 19.571)"
typography:
  display:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "Space Grotesk, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "-0.025em"
  deck:
    fontFamily: "ui-serif, Georgia, Cambria, Times New Roman, Times, serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
    fontStyle: "italic"
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  micro:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
  code:
    fontFamily: "JetBrains Mono, ui-monospace, SFMono-Regular, monospace"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
rounded:
  sm: "0.25rem"
  md: "0.375rem"
  lg: "0.5rem"
  xl: "0.75rem"
  showcase: "1.5rem"
  showcase-lg: "2rem"
  pill: "9999px"
spacing:
  gutter: "1rem"
  gutter-md: "1.5rem"
  card-pad-sm: "1.5rem"
  card-pad: "2rem"
  grid-gap: "2.5rem"
  header-gap: "4rem"
  section-y: "6rem"
  section-y-lg: "8rem"
components:
  showcase-card:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.ink}"
    rounded: "{rounded.showcase-lg}"
    padding: "{spacing.card-pad}"
  showcase-card-hover:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.brand}"
  eyebrow:
    textColor: "{colors.brand}"
    typography: "{typography.label}"
  deck-line:
    textColor: "{colors.quiet}"
    typography: "{typography.deck}"
  button-primary:
    backgroundColor: "{colors.brand}"
    textColor: "{colors.wall}"
    rounded: "{rounded.pill}"
    padding: "0.875rem 1.75rem"
  button-outline:
    backgroundColor: "{colors.wall}"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0 2rem"
    height: "2.5rem"
  chip-tag:
    backgroundColor: "{colors.hairline-faint}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.75rem"
    typography: "{typography.micro}"
  meta-pill:
    backgroundColor: "{colors.hairline-faint}"
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
    typography: "{typography.micro}"
  status-pill:
    backgroundColor: "{colors.status-ground}"
    textColor: "{colors.status-ink}"
    rounded: "{rounded.pill}"
    padding: "0.25rem 0.625rem"
    typography: "{typography.micro}"
  input-default:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.md}"
    padding: "0.25rem 0.75rem"
    height: "2.25rem"
  icon-button:
    backgroundColor: "transparent"
    textColor: "{colors.quiet}"
    rounded: "{rounded.pill}"
    height: "2.25rem"
    width: "2.25rem"
---

# Design System: Airton Vancin

## Overview

**Creative North Star: "The Quiet Gallery"**

This is a warm white-walled room with the work hung on it. Nothing on the page competes with the thing being shown — a project, a plugin, a client site, an article. Surfaces are white or warm near-white, type is a warm near-black, and the single accent is used so sparingly that it registers as a highlight rather than a color scheme. Images arrive in grayscale and bloom into full color only when the visitor moves toward them; cards sit flat until a pointer approaches, then rise. The whole system is built on that one gesture: **the room is still, and it responds to attention.**

The register is editorial, not promotional. Every section opens with the same three-part statement — a small uppercase kicker, an oversized headline set tight enough that the lines stack into a block, and exactly one serif italic line underneath. That serif line is the only serif on the site, and it does more work than its size suggests: it is what makes a page of engineering work read as something written and curated rather than something generated. Density is deliberately low. Sections breathe at six to eight rem of vertical air, grids run at 2.5rem gutters, and cards carry 2rem of interior padding. When in doubt, the answer is more space, not more color.

The rejected direction is the generic AI-product look this project drifted into: an indigo→violet accent, an animated aurora field behind a gradient headline, floating particles, blurred colored halos, and full-bleed blue-to-purple banners. All of it has been removed. Two things made that look what it was, and both are now rules: the accent was a **ramp** rather than a color, and the neutrals were **cool**, so the whole page leaned into the same blue-violet family. The palette is now warm ink against one flat blue, and the hero is type on a wall.

Structure on `/sobre`, `/contato`, and `/zero-downtime` is still legacy — those pages have been re-toned onto the token system and stripped of their gradients and color-coded rails, but their layout (centered banners, icon-grid cards, four-across capability tiles) still belongs to the old dialect. They are **not reference.** New work follows the showcase pattern.

**Key Characteristics:**

- Warm white walls, warm near-black ink, one flat blue accent used at highlight strength only
- Flat at rest, lifting on approach — depth is a response, never a default
- The section triad: uppercase kicker → oversized tight headline → one serif italic deck line
- Grayscale imagery that blooms to color on hover, over 700–1000ms
- Large soft corners (1.5–2rem) on content surfaces, small or fully round on controls
- Generous vertical air; low density; no section shorter than 6rem of padding

## Colors

A **warm** near-monochrome room with a single flat blue used as a highlighter, plus a small set of colors that exist only to do a specific job.

The warmth is the load-bearing decision. The ramp used to be `slate`, which is blue at every step, so even black text pulled cold and stacked with a blue-family accent into the generic AI-product register — the exact problem this palette was rebuilt to solve. Ink is now `#1A1A17`, a warm near-black at hue ~107, and the whole neutral ramp follows it. A warm room against a cool accent is the tension the system rests on: **remove the warmth and the accent has nothing to play against, and the blue reverts to looking like every other product's blue.**

Every token is declared as a CSS custom property in `src/styles/global.css` and exposed as a Tailwind utility of the same name: `text-ink`, `bg-gallery-floor`, `border-hairline`, `text-brand`. Tokens are named for the **job** they do, never the hue or shade that currently fills them — which is what allowed the accent to move from indigo to blue by editing six lines. A bare Tailwind color anywhere in the project (`text-slate-900`, `text-blue-600`) is drift, and so is a raw hex.

Contrast figures below are computed, not estimated. The audit covers 28 pairs; re-run it before changing any value.

### Neutral — the warm room

- **Ink** (`{colors.ink}`): headlines, card titles, strong text, the code-block background, the newsletter band. 17.44:1 on Wall.
- **Ink Secondary** (`{colors.ink-secondary}`): article body copy, list items, table cells, meta-pill text. 10.92:1 — one step softer than a headline so a long read stays comfortable.
- **Quiet** (`{colors.quiet}`): deck lines, card descriptions, metadata, footer links. 5.15:1.
- **Quiet Faint** (`{colors.quiet-faint}`): **non-text only.** 2.83:1 on Wall — fails AA for text and fails the 3:1 floor for meaningful icons, so it survives strictly as a decorative tint. On night surfaces it is correct for secondary copy at 6.62:1.
- **Quiet Lifted** (`{colors.quiet-lifted}`): **night surfaces only.** The dark-mode counterpart to Ink Secondary, 11.17:1 on Night Wall. On any light ground it is 1.6:1 and must never carry text.
- **Hairline** (`{colors.hairline}`): the rule under an `h2`, the divider above the share row, table borders, the footer's top edge, card borders on legacy pages.
- **Hairline Faint** (`{colors.hairline-faint}`): showcase card borders, the rule inside a card footer, the inline-code and chip ground.
- **Gallery Floor** (`{colors.gallery-floor}`): the alternating section background, blockquote and inset-panel fill, and the light text on Ink-backed bands. The only off-white the system uses.
- **Wall** (`{colors.wall}`): the default background of every showcase section and every card.
- **Night Wall** (`{colors.night-wall}`), **Night Floor** (`{colors.night-floor}`), **Night Edge** (`{colors.night-edge}`): the dark-mode page, footer, and border. Night Edge is the Hairline of night surfaces. Dark mode is still partial (see Do's and Don'ts).

### Accent — one flat blue

- **Brand** (`{colors.brand}`): the voice. Section eyebrows, prose links, card-hover titles, footer column headings, focus rings, the primary button. 5.17:1 on Wall, 4.78:1 on Gallery Floor. This is the only color allowed to mean "this is mine."
- **Brand Deep** (`{colors.brand-deep}`): hover and pressed states — **and accent text on any tinted ground.** Brand itself lands at 4.49:1 on Hairline Faint and 4.24:1 on Brand Edge and fails there; Brand Deep clears both at 5.82:1 and 5.49:1.
- **Brand Bright** (`{colors.brand-bright}`): **non-text only**, 3.68:1. The terminating arrow on a card, small fills. Never a label.
- **Brand Lifted** (`{colors.brand-lifted}`): **night surfaces only**, 7.38:1 on Night Wall. The dark-mode substitution for Brand. Never on white.
- **Brand Edge** (`{colors.brand-edge}`): the border a card takes on hover. Almost invisible by design.
- **Brand Wash** (`{colors.brand-wash}`): the fill behind a hovered icon chip and the ground of a callout block. The palest tint that still reads as accent.

### Job-specific

- **Code Magenta** (`{colors.code-magenta}`): inline `code` spans, and nowhere else. 5.24:1 on Hairline Faint, the ground the figure is computed against.
- **Live Signal** (`{colors.live-signal}`): the availability dot beside the hero eyebrow and the "free" indicator. A **fill only** — 3.30:1, never text.
- **Danger / Danger Edge** (`{colors.danger}`, `{colors.danger-edge}`): error text (4.83:1) and the ring on an invalid field. Unambiguous now that the accent is blue — red means exactly one thing on this site. Colour is never the only cue: an invalid field also carries a message naming the problem and the recovery.
- **Status Ground / Edge / Ink** (`{colors.status-ground}`, `{colors.status-edge}`, `{colors.status-ink}`): the affirmative state pill — "Grátis", "Ao vivo". 6.81:1. Green is the one hue besides the accent allowed to mean something, and it means *state*, never brand. At most once per card, never on a heading, link, or control.

### Named Rules

**The One Accent Rule.** The accent covers less than 10% of any screen. It is a highlighter: an eyebrow, one hover state, one hairline, one arrow. It is never a section background, never a large fill, and never used twice at full strength in the same viewport. Its rarity is what makes it read as identity instead of decoration.

**The Flat Accent Rule.** The accent is one color, never a ramp. No gradient text, no two-hue buttons, no colored halos, no blurred accent blobs. Emphasis comes from weight, size, and space. Audit test: a `bg-gradient-*` whose stops are two different hues is a violation anywhere outside the image scrim and the footer's single decorative hairline.

**The Warm Ink Rule.** Every neutral is warm (hue 95–107, chroma ≤0.015). Introducing a cool neutral — `slate`, `zinc`, or a pure `#000` — breaks the tension the accent depends on. Audit test: any neutral whose OKLCH hue falls outside 90–115 is drift.

**The Recede-By-Ground Rule.** Metadata recedes through its *ground*, never through faded ink. A label that should feel secondary gets a pale pill and keeps dark text — it never becomes light grey text on white. Audit test: every piece of text on a light surface computes ≥4.5:1, and every meaningful icon ≥3:1, with no exceptions for "it's only a badge."

**The Named-Token Rule.** Components reference tokens by role, never by hue. `text-brand`, not `text-blue-600`; `bg-gallery-floor`, not `bg-slate-50`. This is what makes the palette re-tonable. Audit test: any `-slate-`, `-gray-`, `-stone-`, or bare hue utility in `src/` is wrong.

**The Blue-Green Exception.** `/zero-downtime` uses literal blue and green because they are the *names of the two environments* in blue-green deployment — that is content, not decoration, and it stays. It is the one page where a raw hue is correct.

## Typography

**Display Font:** **Space Grotesk** (`--font-display`), self-hosted variable, weights 300–700
**Body Font:** **Inter** (`--font-sans`), self-hosted variable, weights 100–900
**Code Font:** **JetBrains Mono** (`--font-mono`), self-hosted variable
**Deck Font:** system serif (`--font-serif`), italic only

Three faces, split by job: **Inter reads, Space Grotesk announces, JetBrains Mono measures.** Headings (`h1`–`h4`) take the display face automatically in the base layer, so no component has to remember. All three ship as latin-subset variable `woff2` from `public/fonts/` — 111KB for the entire weight range, self-hosted rather than CDN-linked because this site argues about performance in its own posts: no third-party connection and no render-blocking stylesheet. Inter and Space Grotesk are preloaded in `Layout.astro`; JetBrains Mono deliberately is not, because it only appears inside article code blocks below the fold.

**Character:** Space Grotesk is a geometric grotesk with slightly mechanical letterforms — it holds the tight negative tracking the Display and Headline roles ask for without softening at 4.5rem the way a neutral UI sans does. Inter beneath it is unremarkable on purpose: it is there to disappear into a long read. Against both, a single italic serif line per section supplies the entire editorial voice. The pairing works because the serif never competes: it appears once, small, and grey.

### Hierarchy

- **Display** (Space Grotesk 800, `clamp(2.5rem, 8vw, 4.5rem)`, 1.1, `-0.02em`): the hero `h1` only. One per site-entry page.
- **Headline** (Space Grotesk 700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1, `-0.025em`): the section `h2` in every showcase header. Set tight enough that two or three lines read as a single typographic block.
- **Title** (Space Grotesk 700, 1.5rem, 1.2, `-0.025em`): card titles, article `h2`s. Shifts to Brand on card hover.
- **Deck** (400 italic serif, 1.125rem, 1.6, in Quiet): exactly one line under each headline. Never bold, never dark, never more than two sentences.
- **Body** (400, 1.125rem, 1.75, in Ink Secondary): article prose. Constrained to a `max-w-4xl` measure.
- **Label** (500, 0.875rem, `0.05em`, uppercase): section eyebrows, paired with a 1rem icon.
- **Micro** (600, 0.75rem, `0.05em`, uppercase): footer column headings, tag chips, "Case Study" row markers, copyright.
- **Code** (JetBrains Mono 400, 0.875rem, 1.6): inline `code` spans and code blocks. The mono face is for code, data, and measurement only — never as a costume to make something look technical.

### Named Rules

**The Triad Rule.** A section header is exactly three parts, in order: uppercase kicker with icon, oversized headline, one serif italic deck line. Never two parts, never four. If a section has nothing worth saying in the deck, it does not need a header.

**The One Serif Rule.** The serif appears once per section, italic, in the deck slot, in Quiet. A serif heading, a bold serif, or a serif paragraph is a violation.

**The Tight Headline Rule.** Anything at Headline size or above carries negative tracking (`-0.02em` to `-0.025em`) and a line-height at or below 1.1. Large type in this system is a block, not a sentence.

## Layout

Sections are full-width bands that alternate between Wall and Gallery Floor, each centering a container. Showcase pages use `max-w-7xl` (80rem) for grids, editorial pages `max-w-5xl` (64rem), and article bodies `max-w-4xl` (56rem). Horizontal gutters are 1rem, opening to 1.5rem at the `md` breakpoint (768px).

Vertical rhythm is the system's most consistent signal: showcase sections use 6rem of vertical padding, rising to 8rem at `md`. The gap between a section header and the grid beneath it is 4rem — noticeably larger than the 2.5rem gap between the cards themselves, so the header reads as a separate statement rather than a first row.

Grids are one column on mobile, two at `md` (768px), three at `lg` (1024px), at a 2.5rem gutter. Section headers on showcase pages are left-aligned and use a two-part split: the triad on the left at `max-w-2xl`, an optional right-aligned marginal note at `max-w-[200px]` that disappears below `md`. Breakpoints are Tailwind defaults (`sm` 640px, `md` 768px, `lg` 1024px, `xl` 1280px).

**The Air Rule.** No showcase section is shorter than 6rem of vertical padding, and no header sits closer than 4rem to its content. Density is never the solution to a long page; fewer items is.

**The Left-Aligned Gallery Rule.** Showcase section headers align left. Centered headers belong to the legacy dialect and to the hero alone.

## Elevation & Depth

The system is flat at rest and lifts on approach. Shadows are tinted navy (`rgb(40 55 110)`) rather than neutral black: a black shadow reads as a cutout, a tinted one as a surface sitting in a lit room, which is the whole premise of the gallery. A card's resting shadow is deliberately below the threshold of notice — a 15px blur at 6% — so a grid of cards reads as flat panels on a white wall. On hover, the card translates up 1–2px into a wide, soft, low-opacity shadow over a slow 500ms transition. Nothing snaps. The effect should feel like the surface leaning toward the pointer, not like a button depressing.

Depth is never used to signal importance at rest. Between two cards on the same page, elevation is identical until one is approached.

### Shadow Vocabulary

All three are declared as tokens in `src/styles/global.css` and used as `shadow-resting`, `shadow-resting-dense`, `shadow-approach`. A hand-written `box-shadow` with a black rgba is drift.

- **Resting** (`0 2px 15px -3px rgb(40 55 110 / 0.06), 0 10px 20px -2px rgb(40 55 110 / 0.03)`): the default state of every showcase card, and of the primary button. Two layers, both nearly invisible.
- **Resting (denser)** (`0 2px 15px -3px rgb(40 55 110 / 0.08), 0 10px 20px -2px rgb(40 55 110 / 0.05)`): the variant used where cards sit on Gallery Floor rather than Wall and need marginally more separation.
- **Approach** (`0 20px 40px -10px rgb(40 55 110 / 0.12)`): the hover state. Wide, soft, and directional — the shadow of something that has risen.
- **Code surface** (Approach on an Ink background): the one place a heavy shadow is correct, because a code block is a physically different material from the page.

**The Tinted Shadow Rule.** Every shadow in the system is `rgb(40 55 110)` at low alpha, never neutral black. Audit test: an `rgba(0,0,0,…)` box-shadow anywhere in `src/` is drift.

### Named Rules

**The Approach Rule.** Surfaces are flat at rest. Elevation is a response to a pointer, never a default state and never a hierarchy device. Audit test: screenshot the page with no cursor over it — if any card looks lifted, the resting shadow is too strong.

**The Slow Lift Rule.** Card elevation and translation transition over 500ms; image grayscale reveals over 700–1000ms. Hover motion in this system is slower than instinct expects, and that slowness is the whole character. Never use the 150ms default here.

## Shapes

Two radii and nothing between them. Content surfaces — cards, panels, callouts, image frames, code blocks — take large soft corners at 1.5rem (`rounded-3xl`) or 2rem (`rounded-[2rem]`), generous enough to read as a rounded rectangle rather than a softened box. Controls take either a small 0.375rem radius (buttons, inputs, ordinary form elements) or a full pill at 9999px (the hero CTAs, icon buttons, tag chips, the floating nav bar, social buttons). A 0.75rem card corner is legacy shadcn and should migrate up to 1.5rem.

Borders are hairlines or absent. Showcase cards use either a transparent border (relying on shadow for definition) or a single `{colors.hairline-faint}` stroke that warms to `{colors.brand-edge}` on hover. There is no heavy border anywhere in the system, and no border and strong shadow on the same element.

Two recurring silhouettes: the **16:10 or 4:3 image frame** at the top of every showcase card, clipped by the card's own radius; and the **terminating rule** — a card footer where a label, a flexible hairline, and an arrow sit on one line, the hairline stretching to fill whatever space remains.

**The Two-Radius Rule.** Content is 1.5–2rem. Controls are 0.375rem or fully round. Nothing in this system has a 0.5rem or 0.75rem corner in new work.

## Components

### Section Header (signature)

The system's defining component and the first thing on nearly every page.

- **Structure:** left-aligned triad — icon + uppercase Label in Brand, then Headline in Ink at `max-w-2xl`, then one Deck line in Quiet.
- **Optional aside:** a right-aligned Quiet Faint note at `max-w-[200px]`, hidden below `md`, aligned to the baseline of the block via `md:items-end`.
- **Spacing:** 0.75rem below the eyebrow, 1.5rem below the headline, 4rem below the whole block.

### Showcase Card (signature)

- **Character:** a flat white panel that rises toward the pointer and lets its image bloom into color.
- **Corner Style:** 1.5rem (`{rounded.showcase}`) or 2rem for the largest grids.
- **Background:** Wall, on either Wall or Gallery Floor sections.
- **Border:** transparent, or a `{colors.hairline-faint}` hairline that becomes `{colors.brand-edge}` on hover.
- **Shadow Strategy:** Resting → Approach, 500ms (see Elevation & Depth).
- **Image:** 16:10 or 4:3, `object-cover`, fully grayscale at rest, scaling to 1.05 and desaturating to full color over 700–1000ms on group hover. A `from-ink/40` top-down scrim sits at 60% opacity and fades to 20% on hover.
- **Internal Padding:** 2rem (`{spacing.card-pad}`).
- **Title:** Title role in Ink, shifting to Brand over 300ms on group hover.
- **Footer:** the terminating rule — uppercase Micro label, a 1px `{colors.hairline-faint}` divider that flexes to fill, and a Brand Bright arrow that translates 4px right on hover.
- **Lift:** `translateY(-8px)` for 2rem cards, `translateY(-4px)` for 1.5rem cards.

### Buttons

- **Shape:** primary CTAs are full pills (9999px); standard buttons are small-radius (0.375rem).
- **Primary:** the hero pill — flat `{colors.brand}`, white text (5.17:1), 0.875rem × 1.75rem padding, carrying the room's own Resting shadow. On hover it deepens to `{colors.brand-deep}` (6.70:1), rises 2px into the Approach shadow, and the trailing arrow slides 4px right. No gradient and no colored glow: both belonged to the rejected dialect.
- **Outline:** Wall background, hairline border, Ink text, 2.5rem tall at `lg` size. The default for secondary navigation actions like "Veja todos os posts."
- **Secondary:** Wall fill, Hairline border, Ink Secondary text. On hover the border darkens to Ink and the button rises 2px — the fill never changes.
- **Focus:** a 1px ring in the token ring color via `focus-visible`. Never removed.
- **Legacy:** solid `bg-blue-600` buttons on `/sobre`, `/contato`, and `/zero-downtime` predate this system. New buttons do not use them.

### Metadata Pills

Two pills carry every card's marginalia. They sit on one row above the card title, separated by `justify-between`.

- **Meta pill** (category, format, platform — "Chrome", "Plugin"): Hairline Faint ground, Ink Secondary text (9.44:1), Micro type uppercase at `0.05em`, 0.25rem × 0.625rem, fully round, no border. An optional 14px leading icon.
- **Status pill** (affirmative state — "Grátis", "Ao vivo"): Status Ground fill, Status Ink text (6.78:1), a 1px inset Status Edge ring for definition against Wall, otherwise identical geometry to the meta pill.
- **Never** more than one status pill per card, and never a status pill without a meta pill to anchor it.

### Chips / Tags

- **Style:** pill, `{colors.hairline-faint}` or 5% Ink fill, Ink Secondary text, Micro type, 0.25rem × 0.75rem padding, no border.
- **State:** background deepens to 10% Ink on hover. Article tag chips link to `/blog/tag/[tag]`.
- **Hero variant:** the stack badges follow the standard chip spec — Hairline Faint ground, Ink Secondary text (9.48:1) — and warm to Brand Wash with Brand Deep text on hover. The old translucent/blurred variant existed only to sit on the aurora, which is gone.

### Inputs / Fields

- **Style:** transparent background, hairline border, 0.375rem radius, 2.25rem tall, 0.875rem text, subtle inset shadow.
- **Focus:** outline removed, replaced by a 1px ring in the ring token.
- **Placeholder:** Quiet.
- **Disabled:** 50% opacity with `not-allowed` cursor.

### Navigation

- **Style:** a floating pill menubar, fixed and horizontally centered, Wall background at 95% opacity with an Ink border and a lifted shadow, containing the avatar and text links at Label size.
- **States:** items sit transparent and take a Hairline Faint fill on hover, 200ms.
- **Mobile:** below `md` the bar collapses to avatar + a round icon toggle; the open menu is a full-screen overlay at 80% Wall with backdrop blur, links stacked at 1.5rem, fading and sliding 1rem into place over 300ms.

### Footer

- **Style:** Gallery Floor background with a Hairline top edge, crowned by a 1px gradient hairline that fades in from transparent through 40% Brand Bright and back out — the system's one purely decorative flourish, and the only gradient the Flat Accent Rule allows.
- **Structure:** four columns at `lg` (identity + social, site map, projects, plugins), stacking to one column centered on mobile.
- **Column headings:** uppercase Micro in Brand. Headings that lead somewhere are links carrying a 14px arrow that translates diagonally on hover.
- **Social buttons:** 2.25rem round icon buttons, transparent with a transparent border, taking a Wall fill, a Hairline border, and Brand icon color on hover.

### Article Body (Read surface)

- **Measure:** `max-w-4xl`, Body type in Ink Secondary.
- **Headings:** Ink, bold, tight tracking. `h2` carries a Hairline bottom rule with 0.5rem of padding beneath it.
- **Links:** Brand, medium weight, underline appearing on hover, deepening to Brand Deep. The accent is blue now, so prose links are simply the accent — the old Reading Blue Exception is retired rather than duplicated.
- **Blockquote:** 4px Brand left border, Gallery Floor fill, italic Quiet text, right corners rounded to 0.5rem.
- **Code:** inline code is Code Magenta on Hairline Faint at 0.375rem; blocks are Ink-background with light text at 1.5rem radius and a heavy shadow.
- **Tables:** Hairline Faint header fill, hairline cell borders, Gallery Floor on even rows.
- **Images:** 1.5rem radius with a soft shadow.

## Do's and Don'ts

### Do:

- **Do** open every section with the triad: uppercase Label eyebrow in Brand, Headline in Ink, one serif italic Deck line in Quiet.
- **Do** keep surfaces flat at rest and let elevation be the response to a pointer — Resting shadow to Approach shadow over 500ms.
- **Do** ship showcase imagery grayscale and let it bloom to full color on hover over 700–1000ms.
- **Do** use `{colors.brand}` as a highlighter on under 10% of a screen: eyebrow, one hover, one hairline, one arrow.
- **Do** give showcase sections 6rem of vertical padding (8rem at `md`) and 4rem between a header and its grid.
- **Do** set anything Headline-sized or larger at `-0.02em` to `-0.025em` tracking and a line-height at or below 1.1.
- **Do** reference neutrals by role — `text-ink`, `text-quiet`, `border-hairline` — never by Tailwind shade.
- **Do** make metadata recede with a pale ground and dark text — the meta pill and status pill, never light grey type.
- **Do** compute contrast before shipping a color: text ≥4.5:1, icons and controls ≥3:1, on the ground it actually sits on.
- **Do** left-align showcase section headers.
- **Do** keep content surfaces at 1.5–2rem radius and controls at 0.375rem or fully round.

### Don't:

- **Don't** use `{colors.brand}` anywhere outside article prose links and blockquote borders. Outside `.prose`, blue is legacy.
- **Don't** introduce `stone` or `gray` neutrals for text in new work — those are legacy ramps surviving in the footer, the layout wrapper, and dark-mode surfaces.
- **Don't** build full-bleed two-hue gradient banners, gradient text, or blurred accent blobs. They belong to the rejected dialect on `/sobre`, `/contato`, `/zero-downtime`, and the article header.
- **Don't** put a visible shadow on a card at rest, or use elevation to rank two items on the same page.
- **Don't** use the 150ms default transition on card hover, lift, or image reveal — this system's motion is deliberately slower.
- **Don't** set a heading in the serif, or bold the serif, or use more than one serif line per section. The serif is the deck slot only.
- **Don't** add a second accent color. Green is a *state*, not an accent — it may fill a status pill or a signal dot and nothing else. If something needs to stand out and the accent is taken, use scale, space, or weight.
- **Don't** set Quiet Faint or Quiet Lifted as text on any light ground (2.83:1 and 1.6:1). They are correct only on night surfaces.
- **Don't** put text on `green-500` or use it as a text color — it is a 2.22:1 fill for dots and blocks only.
- **Don't** put both a strong border and a strong shadow on the same surface.
- **Don't** ship a new component that is light-only. Dark mode is currently partial — the layout shell, nav, footer, and featured-posts band handle `.dark`, while every showcase page hardcodes white and slate. New work adds `dark:` variants rather than widening the gap.
- **Don't** center a showcase section header. Centering belongs to the hero and to legacy pages.
