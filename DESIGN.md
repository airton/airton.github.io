---
name: Airton Vancin
description: The Quiet Gallery — an engineer's work hung on white walls, lifting toward you as you approach.
colors:
  indigo-accent: "oklch(51.1% 0.262 276.966)"
  indigo-accent-bright: "oklch(58.5% 0.233 277.117)"
  indigo-accent-lifted: "oklch(67.3% 0.182 276.935)"
  indigo-edge: "oklch(93% 0.034 272.788)"
  indigo-wash: "oklch(96.2% 0.018 272.314)"
  accent-violet: "oklch(60.6% 0.25 292.717)"
  ink: "oklch(20.8% 0.042 265.755)"
  ink-secondary: "oklch(37.2% 0.044 257.287)"
  quiet: "oklch(55.4% 0.046 257.417)"
  quiet-faint: "oklch(70.4% 0.04 256.788)"
  quiet-lifted: "oklch(86.9% 0.022 252.894)"
  hairline: "oklch(92.9% 0.013 255.508)"
  hairline-faint: "oklch(96.8% 0.007 247.896)"
  gallery-floor: "oklch(98.4% 0.003 247.858)"
  wall: "#ffffff"
  reading-link: "oklch(54.6% 0.245 262.881)"
  code-magenta: "oklch(52.5% 0.223 3.958)"
  live-signal: "oklch(72.3% 0.219 149.579)"
  status-ground: "oklch(98.2% 0.018 155.826)"
  status-edge: "oklch(96.2% 0.044 156.743)"
  status-ink: "oklch(44.8% 0.119 151.328)"
  night-wall: "oklch(21% 0.034 264.665)"
  night-floor: "oklch(13% 0.028 261.692)"
typography:
  display:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 8vw, 4.5rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.025em"
  title:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
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
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.75
  label:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 500
    lineHeight: 1.4
    letterSpacing: "0.05em"
  micro:
    fontFamily: "ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.3
    letterSpacing: "0.05em"
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
    textColor: "{colors.indigo-accent}"
  eyebrow:
    textColor: "{colors.indigo-accent}"
    typography: "{typography.label}"
  deck-line:
    textColor: "{colors.quiet}"
    typography: "{typography.deck}"
  button-primary:
    backgroundColor: "{colors.indigo-accent-bright}"
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

This is a white-walled room with the work hung on it. Nothing on the page competes with the thing being shown — a project, a plugin, a client site, an article. Surfaces are white or near-white, type is near-black, and the single accent is used so sparingly that it registers as a highlight rather than a color scheme. Images arrive in grayscale and bloom into full color only when the visitor moves toward them; cards sit flat until a pointer approaches, then rise. The whole system is built on that one gesture: **the room is still, and it responds to attention.**

The register is editorial, not promotional. Every section opens with the same three-part statement — a small uppercase kicker, an oversized headline set tight enough that the lines stack into a block, and exactly one serif italic line underneath. That serif line is the only serif on the site, and it does more work than its size suggests: it is what makes a page of engineering work read as something written and curated rather than something generated. Density is deliberately low. Sections breathe at six to eight rem of vertical air, grids run at 2.5rem gutters, and cards carry 2rem of interior padding. When in doubt, the answer is more space, not more color.

The rejected direction is the generic SaaS marketing look this project drifted toward on its older pages: full-bleed blue-to-purple gradient banners, stock card shadows, and a button color used as a substitute for hierarchy. Those pages (`/sobre`, `/contato`, `/zero-downtime`, the blog index, the article header) are **legacy, not reference.** They are the anti-reference; new work follows the showcase pattern and existing pages migrate toward it.

**Key Characteristics:**

- White walls, slate ink, one indigo accent used at highlight strength only
- Flat at rest, lifting on approach — depth is a response, never a default
- The section triad: uppercase kicker → oversized tight headline → one serif italic deck line
- Grayscale imagery that blooms to color on hover, over 700–1000ms
- Large soft corners (1.5–2rem) on content surfaces, small or fully round on controls
- Generous vertical air; low density; no section shorter than 6rem of padding

## Colors

A near-monochrome slate room with a single violet-leaning indigo used as a highlighter, plus three colors that exist only to do a specific job.

Every token below is declared as a CSS custom property in `src/styles/global.css` (`--color-ink`, `--color-quiet`, …) and each one equals a Tailwind default shade, noted alongside it. Components written in utilities keep using `text-slate-900`; a scoped `<style>` block that cannot reach a utility class uses `var(--color-ink)`. A raw hex in either place is drift.

### Primary

- **Indigo Accent** (`{colors.indigo-accent}`, Tailwind `indigo-600`): the brand voice. Section eyebrows, link hover states, the icon-hover color in the footer, focus and active affordances, the arrow that terminates a card. This is the only color allowed to mean "this is mine."
- **Indigo Accent Bright** (`{colors.indigo-accent-bright}`, `indigo-500`): the luminous variant. The hero's aurora field, particles, gradient headline, and the primary pill button. Reserved for atmosphere and the single most important control on a page.
- **Indigo Accent Lifted** (`{colors.indigo-accent-lifted}`, `indigo-400`): the dark-mode substitution for Indigo Accent. Never used on white.
- **Indigo Edge** (`{colors.indigo-edge}`, `indigo-100`): the border a card takes on hover, and the hairline under a "Case Study" row. Almost invisible by design.
- **Indigo Wash** (`{colors.indigo-wash}`, `indigo-50`): the fill behind a hovered icon chip and the background of a callout block. The palest tint that still reads as accent.
- **Accent Violet** (`{colors.accent-violet}`, `violet-500`): the hue that *terminates* a gradient begun in Indigo Accent Bright — the primary pill, the hero headline, the aurora field. It never appears on its own: there is no violet text, border, or fill anywhere, only the far end of an indigo ramp. This is what keeps the hero's glow reading as one accent with depth rather than as a second color.

### Neutral

- **Ink** (`{colors.ink}`, `slate-900`): all headlines, card titles, strong text, and the code-block background. The default color of anything that matters.
- **Ink Secondary** (`{colors.ink-secondary}`, `slate-700`): article body copy, list items, table cells. One step softer than a headline so long-form reading stays comfortable.
- **Quiet** (`{colors.quiet}`, `slate-500`): deck lines, card descriptions, metadata, footer links. The color of supporting information.
- **Quiet Faint** (`{colors.quiet-faint}`, `slate-400`): **non-text only.** At 2.63:1 on Wall it fails AA for text and fails the 3:1 floor for meaningful icons, so it survives strictly as a decorative tint — a divider wash, a disabled surface paired with a non-color cue. Anything a visitor reads or clicks uses Quiet or darker. On Ink-backed sections (`slate-900`), `slate-300` and `slate-400` are correct and reach 12:1 and 6.8:1 respectively.
- **Quiet Lifted** (`{colors.quiet-lifted}`, `slate-300`): **night surfaces only.** The dark-mode counterpart to Ink Secondary — emphasised body copy and control labels sitting on Night Wall or Night Floor, where it reaches 12:1. On any light ground it is 1.48:1 and must never carry text.
- **Hairline** (`{colors.hairline}`, `slate-200`): the rule under an `h2`, the divider above the share row, table borders, the footer's top edge.
- **Hairline Faint** (`{colors.hairline-faint}`, `slate-100`): card borders, the horizontal rule inside a card footer, inline code background.
- **Gallery Floor** (`{colors.gallery-floor}`, `slate-50`): the alternating section background and the fill of blockquotes and inset panels. The only "off-white" the system uses.
- **Wall** (`{colors.wall}`, `#ffffff`): the default background of every showcase section and every card.
- **Night Wall** (`{colors.night-wall}`, `gray-900`) and **Night Floor** (`{colors.night-floor}`, `gray-950`): the dark-mode page and footer backgrounds. Dark mode is currently partial (see Do's and Don'ts).

### Tertiary — the three job-specific colors

- **Reading Link** (`{colors.reading-link}`, `blue-600`): links inside article prose, and the left border of a blockquote. Blue is a reading convention, and article text is the one place convention beats brand.
- **Code Magenta** (`{colors.code-magenta}`, `pink-700`): inline `code` spans on the light code background. Nowhere else. `pink-600` reads better in isolation but lands at 4.14:1 on Hairline Faint; `pink-700` clears AA at 5.38:1.
- **Live Signal** (`{colors.live-signal}`, `green-500`): the pulsing availability dot beside the hero eyebrow and the "free" indicator dot. A **fill only** — at 2.22:1 it must never carry text.
- **Status Ground / Edge / Ink** (`{colors.status-ground}` `green-50`, `{colors.status-edge}` `green-100`, `{colors.status-ink}` `green-800`): the affirmative state pill — "Grátis", "Ao vivo". Green is the one hue besides indigo allowed to mean something, and it means *state*, never brand. It appears at most once per card and never on a heading, a link, or a control.

### Named Rules

**The One Indigo Rule.** Indigo covers less than 10% of any screen. It is a highlighter: an eyebrow, one hover state, one hairline, one arrow. It is never a section background, never a large fill, and never used twice at full strength in the same viewport. Its rarity is what makes it read as identity instead of decoration.

**The Reading Blue Exception.** `{colors.reading-link}` exists exclusively inside `.prose` article bodies. If blue appears anywhere outside an article's running text, it is legacy and should become indigo or ink.

**The Recede-By-Ground Rule.** Metadata recedes through its *ground*, never through faded ink. A label that should feel secondary gets a pale pill and keeps dark text — it never becomes light grey text on white. Audit test: every piece of text on a light surface computes ≥4.5:1, and every meaningful icon ≥3:1, with no exceptions for "it's only a badge."

**The Single Ramp Rule.** Slate is the only neutral ramp in new work. The project also contains `stone` (footer, layout wrapper) and `gray` (section backgrounds, dark mode) — both are legacy. Audit test: if a new file introduces `text-stone-*` or `text-gray-*` for body copy, it is wrong.

## Typography

**Display Font:** system UI sans (`ui-sans-serif, system-ui, sans-serif`)
**Body Font:** the same system sans
**Deck Font:** system serif (`ui-serif, Georgia, Cambria, "Times New Roman", Times, serif`), italic only

**Character:** the sans does the structural work — set very large, very tight, and very heavy for headlines, then dropped to a calm 1.125rem for reading. Against that, a single italic serif line per section supplies the entire editorial voice. The pairing works because the serif never competes: it appears once, small, and grey.

### Hierarchy

- **Display** (800, `clamp(2.5rem, 8vw, 4.5rem)`, 1.1, `-0.02em`): the hero `h1` only. One per site-entry page.
- **Headline** (700, `clamp(2.25rem, 5vw, 3.75rem)`, 1.1, `-0.025em`): the section `h2` in every showcase header. Set tight enough that two or three lines read as a single typographic block.
- **Title** (700, 1.5rem, 1.2, `-0.025em`): card titles, article `h2`s. Shifts to Indigo Accent on card hover.
- **Deck** (400 italic serif, 1.125rem, 1.6, in Quiet): exactly one line under each headline. Never bold, never dark, never more than two sentences.
- **Body** (400, 1.125rem, 1.75, in Ink Secondary): article prose. Constrained to a `max-w-4xl` measure.
- **Label** (500, 0.875rem, `0.05em`, uppercase): section eyebrows, paired with a 1rem icon.
- **Micro** (600, 0.75rem, `0.05em`, uppercase): footer column headings, tag chips, "Case Study" row markers, copyright.

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

The system is flat at rest and lifts on approach. A card's resting shadow is deliberately below the threshold of notice — a 15px blur at 5% black — so a grid of cards reads as flat panels on a white wall. On hover, the card translates up 1–2px into a wide, soft, low-opacity shadow over a slow 500ms transition. Nothing snaps. The effect should feel like the surface leaning toward the pointer, not like a button depressing.

Depth is never used to signal importance at rest. Between two cards on the same page, elevation is identical until one is approached.

### Shadow Vocabulary

- **Resting** (`box-shadow: 0 2px 15px -3px rgba(0,0,0,0.05), 0 10px 20px -2px rgba(0,0,0,0.02)`): the default state of every showcase card. Two layers, both nearly invisible.
- **Resting (denser)** (`box-shadow: 0 2px 15px -3px rgba(0,0,0,0.07), 0 10px 20px -2px rgba(0,0,0,0.04)`): the variant used where cards sit on Gallery Floor rather than Wall and need marginally more separation.
- **Approach** (`box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1)`): the hover state. Wide, soft, and directional — the shadow of something that has risen.
- **Code surface** (`shadow-xl` on an Ink background): the one place a heavy shadow is correct, because a code block is a physically different material from the page.

### Named Rules

**The Approach Rule.** Surfaces are flat at rest. Elevation is a response to a pointer, never a default state and never a hierarchy device. Audit test: screenshot the page with no cursor over it — if any card looks lifted, the resting shadow is too strong.

**The Slow Lift Rule.** Card elevation and translation transition over 500ms; image grayscale reveals over 700–1000ms. Hover motion in this system is slower than instinct expects, and that slowness is the whole character. Never use the 150ms default here.

## Shapes

Two radii and nothing between them. Content surfaces — cards, panels, callouts, image frames, code blocks — take large soft corners at 1.5rem (`rounded-3xl`) or 2rem (`rounded-[2rem]`), generous enough to read as a rounded rectangle rather than a softened box. Controls take either a small 0.375rem radius (buttons, inputs, ordinary form elements) or a full pill at 9999px (the hero CTAs, icon buttons, tag chips, the floating nav bar, social buttons). A 0.75rem card corner is legacy shadcn and should migrate up to 1.5rem.

Borders are hairlines or absent. Showcase cards use either a transparent border (relying on shadow for definition) or a single `{colors.hairline-faint}` stroke that warms to `{colors.indigo-edge}` on hover. There is no heavy border anywhere in the system, and no border and strong shadow on the same element.

Two recurring silhouettes: the **16:10 or 4:3 image frame** at the top of every showcase card, clipped by the card's own radius; and the **terminating rule** — a card footer where a label, a flexible hairline, and an arrow sit on one line, the hairline stretching to fill whatever space remains.

**The Two-Radius Rule.** Content is 1.5–2rem. Controls are 0.375rem or fully round. Nothing in this system has a 0.5rem or 0.75rem corner in new work.

## Components

### Section Header (signature)

The system's defining component and the first thing on nearly every page.

- **Structure:** left-aligned triad — icon + uppercase Label in Indigo Accent, then Headline in Ink at `max-w-2xl`, then one Deck line in Quiet.
- **Optional aside:** a right-aligned Quiet Faint note at `max-w-[200px]`, hidden below `md`, aligned to the baseline of the block via `md:items-end`.
- **Spacing:** 0.75rem below the eyebrow, 1.5rem below the headline, 4rem below the whole block.

### Showcase Card (signature)

- **Character:** a flat white panel that rises toward the pointer and lets its image bloom into color.
- **Corner Style:** 1.5rem (`{rounded.showcase}`) or 2rem for the largest grids.
- **Background:** Wall, on either Wall or Gallery Floor sections.
- **Border:** transparent, or a `{colors.hairline-faint}` hairline that becomes `{colors.indigo-edge}` on hover.
- **Shadow Strategy:** Resting → Approach, 500ms (see Elevation & Depth).
- **Image:** 16:10 or 4:3, `object-cover`, fully grayscale at rest, scaling to 1.05 and desaturating to full color over 700–1000ms on group hover. A `from-slate-900/40` top-down scrim sits at 60% opacity and fades to 20% on hover.
- **Internal Padding:** 2rem (`{spacing.card-pad}`).
- **Title:** Title role in Ink, shifting to Indigo Accent over 300ms on group hover.
- **Footer:** the terminating rule — uppercase Micro label, a 1px `{colors.hairline-faint}` divider that flexes to fill, and an Indigo arrow that translates 4px right on hover.
- **Lift:** `translateY(-8px)` for 2rem cards, `translateY(-4px)` for 1.5rem cards.

### Buttons

- **Shape:** primary CTAs are full pills (9999px); standard buttons are small-radius (0.375rem).
- **Primary:** the hero pill — a `135deg` gradient from `{colors.indigo-accent-bright}` to violet `#8b5cf6`, white text, 0.875rem × 1.75rem padding, carrying a colored glow (`0 4px 20px rgba(99,102,241,0.4)`). On hover it rises 2px, the glow widens, and the trailing arrow slides 4px right.
- **Outline:** Wall background, hairline border, Ink text, 2.5rem tall at `lg` size. The default for secondary navigation actions like "Veja todos os posts."
- **Ghost / Secondary:** translucent white at 80% with a 10px backdrop blur, used over the hero's aurora field only.
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
- **Hero variant:** the stack badges add a translucent white fill, 10px backdrop blur, an Indigo hairline border, and Indigo Accent text — a lit variant that exists only over the aurora.

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

- **Style:** Gallery Floor background with a Hairline top edge, crowned by a 1px gradient hairline that fades in from transparent through 40% Indigo and back out — the system's one purely decorative flourish.
- **Structure:** four columns at `lg` (identity + social, site map, projects, plugins), stacking to one column centered on mobile.
- **Column headings:** uppercase Micro in Indigo Accent. Headings that lead somewhere are links carrying a 14px arrow that translates diagonally on hover.
- **Social buttons:** 2.25rem round icon buttons, transparent with a transparent border, taking a Wall fill, a Hairline border, and Indigo Accent icon color on hover.

### Article Body (Read surface)

- **Measure:** `max-w-4xl`, Body type in Ink Secondary.
- **Headings:** Ink, bold, tight tracking. `h2` carries a Hairline bottom rule with 0.5rem of padding beneath it.
- **Links:** Reading Link, medium weight, underline appearing on hover.
- **Blockquote:** 4px Reading Link left border, Gallery Floor fill, italic Quiet text, right corners rounded to 0.5rem.
- **Code:** inline code is Code Magenta on Hairline Faint at 0.375rem; blocks are Ink-background with light text at 1.5rem radius and a heavy shadow.
- **Tables:** Hairline Faint header fill, hairline cell borders, Gallery Floor on even rows.
- **Images:** 1.5rem radius with a soft shadow.

## Do's and Don'ts

### Do:

- **Do** open every section with the triad: uppercase Label eyebrow in Indigo Accent, Headline in Ink, one serif italic Deck line in Quiet.
- **Do** keep surfaces flat at rest and let elevation be the response to a pointer — Resting shadow to Approach shadow over 500ms.
- **Do** ship showcase imagery grayscale and let it bloom to full color on hover over 700–1000ms.
- **Do** use `{colors.indigo-accent}` as a highlighter on under 10% of a screen: eyebrow, one hover, one hairline, one arrow.
- **Do** give showcase sections 6rem of vertical padding (8rem at `md`) and 4rem between a header and its grid.
- **Do** set anything Headline-sized or larger at `-0.02em` to `-0.025em` tracking and a line-height at or below 1.1.
- **Do** use slate for every neutral in new work.
- **Do** make metadata recede with a pale ground and dark text — the meta pill and status pill, never light grey type.
- **Do** compute contrast before shipping a color: text ≥4.5:1, icons and controls ≥3:1, on the ground it actually sits on.
- **Do** left-align showcase section headers.
- **Do** keep content surfaces at 1.5–2rem radius and controls at 0.375rem or fully round.

### Don't:

- **Don't** use `{colors.reading-link}` anywhere outside article prose links and blockquote borders. Outside `.prose`, blue is legacy.
- **Don't** introduce `stone` or `gray` neutrals for text in new work — those are legacy ramps surviving in the footer, the layout wrapper, and dark-mode surfaces.
- **Don't** build full-bleed gradient banners (`from-blue-600 to-purple-600`, `from-slate-100 to-slate-200`). They belong to the rejected dialect on `/sobre`, `/contato`, `/zero-downtime`, and the article header.
- **Don't** put a visible shadow on a card at rest, or use elevation to rank two items on the same page.
- **Don't** use the 150ms default transition on card hover, lift, or image reveal — this system's motion is deliberately slower.
- **Don't** set a heading in the serif, or bold the serif, or use more than one serif line per section. The serif is the deck slot only.
- **Don't** add a second accent color. Green is a *state*, not an accent — it may fill a status pill or a signal dot and nothing else. If something needs to stand out and indigo is taken, use scale, space, or weight.
- **Don't** set text in `slate-400` or `slate-300` on any light ground (2.63:1 and 1.48:1). They are correct only on Ink-backed sections.
- **Don't** put text on `green-500` or use it as a text color — it is a 2.22:1 fill for dots and blocks only.
- **Don't** put both a strong border and a strong shadow on the same surface.
- **Don't** ship a new component that is light-only. Dark mode is currently partial — the layout shell, nav, footer, and featured-posts band handle `.dark`, while every showcase page hardcodes white and slate. New work adds `dark:` variants rather than widening the gap.
- **Don't** center a showcase section header. Centering belongs to the hero and to legacy pages.
