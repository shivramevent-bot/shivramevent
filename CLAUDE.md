# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing website for **Shiv Ram Event**, an event management company in Ahmedabad, India. Next.js 16 (App Router) + React 19 + TypeScript + Tailwind v4.

This is a port of a hand-written static HTML site that lives in the sibling folder `../shiv ram`. That folder is the **design source of truth**: when a visual detail is ambiguous, read its `assets/css/style.css` rather than inventing one. Run it side by side for comparison with `powershell -ExecutionPolicy Bypass -File "../shiv ram/server.ps1"`, which serves the old site on :8080 while `next dev` runs on :3000.

## Commands

```bash
npm run dev      # dev server on :3000
npm run build    # production build; every route prerenders static
npm run lint     # eslint (React 19 rules — see gotcha below)
```

There is no test suite.

## Architecture

**Content is data, not markup.** `src/lib/site.ts` holds every business constant (phone, email, WhatsApp, Instagram, maps, nav, footer links) — in the legacy site the phone number alone appeared ~100 times across ten files. `src/lib/content.ts` holds page content: the `services` array, testimonials, gallery items, team, featured events, form event types. Adding or editing a service means editing that array, not writing a page.

**The four service detail pages are one route.** `src/app/services/[slug]/page.tsx` renders any entry in the `services` array via `generateStaticParams`, with per-service metadata from `metaTitle`/`metaDescription`. Each service object carries its own hero image, copy, feature list, and CTA text.

**Shared chrome lives in `src/app/layout.tsx`** — TopBar, Header, Footer, WhatsAppFloat, ScrollUtilities wrap every page, replacing ten copy-pasted copies. `Header` is the only client component in the chrome; it derives the active nav state from `usePathname()` rather than a hand-set class.

**Fonts** are Cinzel (headings) and Lato (body) via `next/font/google`, exposed as `--font-cinzel` / `--font-lato` on `<html>` and consumed by the `--font-heading` / `--font-body` theme tokens.

### Styling

Tailwind v4, configured CSS-first in `src/app/globals.css` — there is no `tailwind.config`. The `@theme` block defines the palette carried over from the legacy stylesheet:

| Token | Value | Legacy name |
| --- | --- | --- |
| `--color-gold` | `#c5a059` | `--gold` |
| `--color-gold-light` | `#d4af37` | `--gold-light` |
| `--color-gold-dark` | `#9a7b3c` | `--gold-dark` |
| `--color-ink` | `#0a0a0a` | `--black` |
| `--color-ink-soft` | `#121212` | `--black-soft` |
| `--color-ink-card` | `#1a1a1a` | `--black-card` |
| `--color-ink-border` | `#2a2a2a` | `--black-border` |
| `--color-cream` | `#f5f5f5` | `--text` |
| `--color-muted` | `#a8a8a8` | `--text-muted` |

Use the tokens (`text-gold`, `bg-ink-card`, `border-ink-border`) — never raw hex.

Custom utilities defined with `@utility`: **`shell`** is the page container (`width: min(1140px, 92%)`, centred — the legacy `.container`), **`rule-gold`** is the thin gold divider under section titles, **`text-gradient-gold`** is gold gradient text, and **`grid-fit-240/260/280/300`** are the auto-fit card grids. Section vertical rhythm is `py-14 sm:py-20`.

Use `grid-fit-*` rather than writing `[grid-template-columns:repeat(auto-fit,minmax(280px,1fr))]` by hand. The bare form forces a 280px track even when the container is narrower than that, which pushed every card grid past the viewport on a 320px phone; `grid-fit-*` wraps the floor in `min(_, 100%)` so the track collapses instead.

### Motion

Two client components carry all of it, and both are opt-in per element rather than applied by a global selector list the way the legacy script did:

- **`Reveal`** (`src/components/ui/Reveal.tsx`) wraps content in `[data-reveal="up|left|right|scale"]`; the CSS in `globals.css` handles the transition and `.is-revealed` end state. One module-level `IntersectionObserver` is shared by every instance on the page. Pass `delay` for grid stagger and `as="li"` when the element sits inside a list.
- **`Counter`** counts up once on scroll-in, easing out over 2.6s. Reduced motion and missing `IntersectionObserver` both short-circuit to the final value.

**Timing is tokenised** — tune motion in the `@theme` block, not in component class strings:

| Token | Value | Used for |
| --- | --- | --- |
| `--ease-glide` | `cubic-bezier(0.33, 1, 0.68, 1)` | one-way motion — the scroll reveal, the button's gold sweep |
| `--ease-soft` | `cubic-bezier(0.4, 0, 0.2, 1)` | anything reversible — every hover and toggle |
| `--default-transition-duration` | `300ms` | the ~20 bare `transition-colors` link hovers |

Reach for `ease-soft` on hover states specifically: a hover plays backwards when the pointer leaves, and the one-way `easeOutExpo` this codebase used to apply everywhere looked fine going in and abrupt coming out. The rough scale is 300ms for colour-only hovers, 500–550ms for transform/shadow hovers, 1000ms for the scroll reveal, 1100ms for image zooms, and a 140ms stagger between siblings in a grid.

`prefers-reduced-motion` is handled centrally at the bottom of `globals.css`.

### The contact form has no backend

`src/components/ContactForm.tsx` serializes its fields into a WhatsApp message and calls `window.open` on a `wa.me` link. That is deliberate — it is how the agency actually receives enquiries. There is no API route, no email service, no database anywhere in the project. If a real submission path is ever added, the WhatsApp hand-off should stay as the fallback.

## Gotchas

**React 19 lint rules ban `setState` in an effect body.** `react-hooks/set-state-in-effect` fails the build-adjacent lint. Two places work around it deliberately: `Header` closes the mobile sheet from the click handler on `<nav>` (with `stopPropagation` on the submenu toggle) instead of an effect keyed on `pathname`; `Counter` defers its reduced-motion assignment into a `requestAnimationFrame` callback. Don't "simplify" either back into a plain effect.

**`agentRules: false` in `next.config.ts` is intentional.** Next 16 otherwise regenerates `AGENTS.md` and `CLAUDE.md` in the project root on every dev run, overwriting this file.

**Mobile layout has three tripwires, all previously stepped on.** (1) `Button` hardcodes `inline-flex`, and Tailwind emits `inline-flex` after `hidden`, so passing `hidden md:inline-flex` through `className` does *nothing* — put visibility on a wrapper element instead. (2) The `--spacing-header` token is 68px on phones and 90px from `sm` up, so anything sizing against the header must use the token, never a literal. (3) The mobile nav sheet is `absolute top-full` inside the sticky header — it used to be `fixed` at a hardcoded offset that assumed the TopBar was still on screen, and detached from the header as soon as the page scrolled.

The desktop nav needs ~410px of its own and switches on at `lg`, not `md`; at `md` it shared a 768px row with the logo lockup and the CTAs and forced the document to 1001px wide.

**Images are all local.** Everything is in `public/images/`, shot by the agency — the legacy site hot-linked most of its photography from Unsplash. `public/logo/` holds the brand marks; `src/app/icon.png` and `apple-icon.png` are the favicons. No `remotePatterns` are configured, so a remote image source would need `next.config.ts` updated first.

### SEO and structured data

`src/lib/site.ts` carries `url`, the canonical origin everything absolute derives from — canonicals, OG tags, the sitemap, JSON-LD `@id`s. It reads `NEXT_PUBLIC_SITE_URL` first, so pointing a custom domain at the site is an env var, not a find-and-replace.

- **`src/lib/metadata.ts`** — `pageMetadata({ title, description, path })`. Every static page's `metadata` export goes through it. Use it rather than hand-writing an `openGraph` block: Next **replaces** rather than merges `openGraph` when a child segment declares one, so a page that sets `openGraph: { title, url }` silently drops the inherited `images` and ships with no social card.
- **`src/lib/schema.ts`** — JSON-LD builders, rendered by `src/components/JsonLd.tsx` as a server component so the markup is in the static HTML (most structured-data crawlers do not run JS). `LocalBusiness` + `WebSite` come from the root layout on every route; `BreadcrumbList` is emitted by `PageHero` from the same crumbs it renders; `Service` comes from the service detail route.
- **`src/app/robots.ts`** and **`src/app/sitemap.ts`** are metadata routes serving `/robots.txt` and `/sitemap.xml`. The sitemap is built from the `services` array, so a new service cannot leave it stale.
- **`src/app/opengraph-image.tsx`** generates the 1200x630 card with `ImageResponse`. It is drawn rather than photographed because every event photo in `public/images` is portrait, and any of them would be cropped to a ribbon at that aspect ratio.

Deliberately **not** in the schema: `geo`, `openingHours` and `priceRange` are not known and inventing them would put false claims in machine-readable form. `aggregateRating`/`Review` are omitted on purpose — review markup a business supplies about itself is self-serving under Google's policy and is ignored or penalised, so the on-page testimonials stay plain HTML.

## Routes

`/` · `/about` · `/services` · `/services/[slug]` (corporate-events, birthday-parties, cultural-events, decoration-services) · `/gallery` · `/testimonials` · `/contact`

The legacy URLs were flat (`corporate-events.html`); service pages now nest under `/services/`. If the old site is already indexed, add redirects before going live.
