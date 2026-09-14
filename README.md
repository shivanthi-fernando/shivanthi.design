# shivanthi.design

Personal portfolio for **Shivanthi Fernando** — a product & UI designer helping
SaaS & AI startups design conversion-driven, user-friendly products.

Built as a single-page site with **Next.js 15 (App Router)**, **React 19**,
**TypeScript** and **Tailwind CSS v4**. It follows a soft **pastel** design
direction — butter, mint, lavender, peach, sky and blush highlights on a warm
white base — with Ilya-style "folder" work cards and an inline highlighted bio.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Other scripts:

```bash
npm run build    # production build
npm run start    # serve the production build
```

## Project structure

```
app/
  layout.tsx        # fonts (Bricolage Grotesque / Inter / JetBrains Mono) + metadata
  page.tsx          # section composition
  globals.css       # design tokens (@theme), pastel palette, utilities & animations
components/
  Header.tsx        # sticky nav + mobile menu
  Hero.tsx          # headline, CTAs, trusted-by, floating product mock
  TrustedBy.tsx     # client marquee
  Work.tsx          # folder cards + featured case studies
  Services.tsx      # what I help with
  Process.tsx       # how I work
  Testimonials.tsx  # founder quotes
  About.tsx         # inline-highlighted bio + stats + device mockups
  Contact.tsx       # dark CTA block
  Footer.tsx
  mocks.tsx         # pure CSS/SVG product previews (no image assets)
  Reveal.tsx        # scroll-in animation wrapper (IntersectionObserver)
  ui.tsx / icons.tsx
lib/
  site.ts           # ← ALL content, links & project data live here
  pastel.ts         # static Tailwind class maps per pastel tint
```

## Editing content

Everything is data-driven from **`lib/site.ts`** — name, email, booking link,
socials, work folders, featured projects, services, process, testimonials and
stats. Change copy and links there and every section updates.

### Placeholders to replace before launch

- **Booking link** (`site.bookingUrl`) — currently `https://cal.com/shivanthi`.
- **Social URLs** (`site.socials`) — point X / Dribbble / LinkedIn at real profiles.
- **Projects & clients** — `Fluxpay`, `Cortex AI`, testimonials and the marquee
  wordmarks are illustrative placeholders. Swap in real work.
- **Project previews** — `components/mocks.tsx` renders CSS mockups so the site
  ships with zero binary assets. Replace with real screenshots (e.g. add images
  to `public/` and use `next/image`) when available.
- **Stats** (`stats` in `lib/site.ts`) — `100+ products` / `10 yrs` are
  placeholders; `50+ founders` is from the brief.

The contact email is set to `wscsfernando@gmail.com` per request.

## Deploy

Static-friendly (the page prerenders). Deploy to Vercel/Netlify, or any Node
host with `npm run build && npm run start`.

## Accessibility & performance

- Respects `prefers-reduced-motion` (reveals, marquee and floats disable).
- Keyboard-focus styles, semantic landmarks, `aria-label`s on icon buttons.
- No external image requests; fonts self-hosted via `next/font`.
