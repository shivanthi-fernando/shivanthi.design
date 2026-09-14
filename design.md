# Design decisions — shivanthi.design

This document records the design decisions behind the portfolio: the colour
system, typography, key libraries and the notable UI conventions. It is the
reference to keep the site visually consistent as it grows.

---

## 1. Design direction

A soft, **pastel** personal portfolio on a warm-white paper base. The tone is
friendly and hand-made rather than corporate: rounded shapes, gentle pastel
washes, "folder" work cards and a handwritten wordmark. Motion is subtle
(scroll reveals, a slow marquee, floating mockups) and always respects
`prefers-reduced-motion`.

**Ink is purple, not black.** The default text/UI colour is a pastel-leaning
deep purple that harmonises with the lavender accent — the site intentionally
avoids pure black anywhere.

---

## 2. Colour system

All colours are defined as design tokens in `app/globals.css` under the
Tailwind v4 `@theme` block, and consumed as Tailwind utilities
(`text-ink`, `bg-lavender`, `border-line`, …).

### Surfaces & ink (purple, no black)

| Token                | Value     | Role |
|----------------------|-----------|------|
| `--color-paper`      | `#fbfaf7` | Page background (warm white) |
| `--color-paper-2`    | `#f3f0f9` | Muted alt surface (faint lavender tint) |
| `--color-card`       | `#ffffff` | Cards / raised surfaces |
| `--color-ink`        | `#453a78` | **Primary text & dark UI — pastel purple (replaces black)** |
| `--color-ink-soft`   | `#61569b` | Secondary text, softer purple |
| `--color-muted`      | `#8079a3` | Tertiary / small labels, muted purple-grey |
| `--color-line`       | `#e9e4f2` | Hairline borders (lavender-tinted) |
| `--color-line-strong`| `#d8d1ea` | Stronger borders |

> **Decision:** the original theme used near-black ink (`#1a1917`). It has been
> replaced with a pastel purple (`#453a78`) so that body copy, dark buttons and
> the dark contact block all read as purple while staying accessible. `ink-soft`
> and `muted` are purple-tinted to match; the border tokens carry a faint
> lavender tint too.

### Pastel accent swatches

Each accent has a soft **fill** and a readable **ink** for text/icons on that
fill. Accents are assigned per section/card via `lib/pastel.ts` and the `tint`
field in `lib/site.ts`.

| Accent    | Fill      | Ink       |
|-----------|-----------|-----------|
| Butter    | `#fbeab4` | `#7a5c00` |
| Mint      | `#cbe9d2` | `#1f6b46` |
| Lavender  | `#e3daf9` | `#5a45a8` |
| Peach     | `#fbd9c5` | `#a1522b` |
| Sky       | `#d2e6fb` | `#2f5f9e` |
| Blush     | `#f9d3e0` | `#a63d68` |

Text selection uses a **butter** highlight; inline "highlight chips" (`.hl`)
use the pastel fills behind words in headlines and copy.

---

## 3. Typography

Fonts are loaded with **`next/font/google`** in `app/layout.tsx` (self-hosted,
zero external requests) and exposed as CSS variables, then mapped to Tailwind
font tokens in `app/globals.css`.

| Token           | Font                    | Used for |
|-----------------|-------------------------|----------|
| `--font-sans`   | **Inter**               | Body copy, UI, default |
| `--font-display`| **Bricolage Grotesque** | Headings (`h1–h3`) |
| `--font-mono`   | **JetBrains Mono**      | Code-like bits (slugs, years, email, URLs) |
| `--font-label`  | **Space Grotesk**       | Small section labels / eyebrows |
| `--font-script` | **Dancing Script**      | The "Shivanthi Fernando" wordmark in the nav |

### Notable typography decisions

- **No block-letter (ALL CAPS) labels.** Eyebrows and small labels were
  previously rendered `uppercase` in JetBrains Mono. They are now **sentence /
  Title case** and set in a **distinct label font — Space Grotesk**
  (`font-label`) with light tracking. This applies to the `Eyebrow` component
  and every section label (Work, Services, Process, Testimonials, About),
  plus small labels in the hero mock cards, work cards, contact block and
  footer.
- **Handwritten wordmark.** The name in the top nav is set in **Dancing
  Script** (`font-script`) — a flowing, signature-style cursive chosen to match
  the handwritten reference logo — sitting next to the profile photo.
- Headings use Bricolage Grotesque with tight tracking (`-0.02em`).

---

## 4. Brand / imagery

- **Profile picture:** `public/Imgs/shivanthi.png`, rendered by the shared
  `Avatar` component (`components/ui.tsx`) via `next/image`, cropped to a circle
  with a lavender ring. Used in the header and footer. (It replaced the old
  "SF" monogram avatar.)
- **Favicon:** `public/favicon.svg`.
- **Product mockups** are pure CSS/SVG (`components/mocks.tsx`) — the site ships
  with no binary screenshot assets.

---

## 5. Layout conventions

- Max content width `max-w-6xl`, horizontal padding `px-4 sm:px-6`.
- Generous rounded radii (`rounded-full`, `rounded-2xl`, `rounded-[2rem]`).
- **Hero is left-aligned** (headline, subcopy and CTAs) rather than centred.
- Sticky header that condenses on scroll; centre nav pill; mobile slide-down
  menu.
- Fixed content model: **all copy, links and data live in `lib/site.ts`** —
  a single source of truth every section reads from.

---

## 6. Motion & interaction

- **Scroll reveals** via `IntersectionObserver` (`components/Reveal.tsx`,
  `.reveal` in `globals.css`).
- **Marquee** of client wordmarks, paused on hover.
- **Floating** hero mockups (`.float-y`) and a pulsing availability dot
  (`.pulse-dot`).
- All of the above disable under `prefers-reduced-motion: reduce`.
- Buttons lift slightly on hover with soft shadows; `easeOutSoft`
  (`cubic-bezier(0.22, 1, 0.36, 1)`) is the shared easing.

---

## 7. Tech stack & libraries

| Area        | Choice |
|-------------|--------|
| Framework   | **Next.js 15** (App Router) |
| UI runtime  | **React 19** |
| Language    | **TypeScript 5.7** |
| Styling     | **Tailwind CSS v4** (`@tailwindcss/postcss`), tokens via `@theme` |
| Fonts       | `next/font/google` — Inter, Bricolage Grotesque, JetBrains Mono, Space Grotesk, Dancing Script |
| Images      | `next/image` |
| Icons       | Local inline SVG components (`components/icons.tsx`) — no icon library |
| Tooling     | `playwright-core` (dev dependency) |

No CSS-in-JS, component library or external icon package — styling is
Tailwind utilities plus a small set of custom CSS utilities in `globals.css`.

---

## 8. Accessibility

- Purple ink tokens chosen to keep text/background contrast readable on the
  warm-white paper base.
- Semantic landmarks, keyboard-visible focus rings (`:focus-visible`, purple
  outline), and `aria-label`s on icon-only buttons.
- Motion respects `prefers-reduced-motion`.
- Fonts self-hosted; no external image or font requests.
