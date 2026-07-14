# Lumeva Digital — Website

Next.js 14 (App Router) + TypeScript + Tailwind CSS + Framer Motion.

## Getting started

```bash
npm install
npm run dev
```

Visit `http://localhost:3000`.

## Deploying (Netlify)

This repo includes `netlify.toml` configured for the official Next.js runtime
(`@netlify/plugin-nextjs`). Connect the repo in Netlify and it will build and
deploy automatically — no manual config needed beyond adding the plugin if
Netlify doesn't auto-detect it.

## Architecture

- `app/` — one route per top-level nav item, App Router conventions
- `app/services/[slug]/page.tsx` — dynamically generates all six consulting
  practice pages from a single template + `lib/site-config.ts` data, so adding
  a seventh practice later is a data change, not a new page
- `components/` — shared UI (`Header`, `Footer`, `Logo`) and primitives
  (`components/ui/`)
- `components/framework-explorer.tsx` — the interactive Business Efficiency
  Framework, used on both the homepage preview and the full `/framework` page
- `lib/site-config.ts` — single source of truth for nav, framework stages,
  consulting practices, industries, testimonials, FAQs, etc. Extend this file
  first when adding content

## Design system

- **Color:** Dark Navy (`#0B1B2B`) + Teal (`#0F6E6E` / `#1FB8A6`) + warm
  off-white (`#FBFAF7`) — see `tailwind.config.ts` for the full token set
- **Type:** Fraunces (display/serif) paired with Inter (body) and IBM Plex
  Mono (labels, step numbers, data) — loaded via `next/font/google` in
  `app/layout.tsx`
- **Signature element:** the six-stage Framework Explorer — a connected node
  sequence, since the stages are a genuine dependency chain, not an arbitrary
  list

## Still needs real assets / integrations before launch

Logo assets are now integrated (see below). These are intentionally built as
clearly-labeled placeholders per the brief, ready to wire up:

- **Calendly:** `/contact` has a labeled placeholder block — drop in the
  Calendly inline embed script/iframe.
- **Map:** `/contact` has a labeled placeholder block for a service-area or
  office map embed.
- **Forms:** Both `contact` and `early-access` forms are wired for Netlify
  Forms (`data-netlify="true"` + matching hidden `form-name` field). Netlify
  detects these automatically from the rendered HTML at build time — no
  extra config needed, but confirm the forms appear under Site
  configuration → Forms after the first deploy.
- **Business Health Assessment:** `/business-health-assessment` ships as a
  polished intro + "launching soon" panel per the brief. The scored,
  interactive version is a future build (see `app/business-health-assessment/`).

## Brand assets

The real Lumeva logo is in `public/`, derived from the client-provided files:

- `logo-full.png` / `logo-mark.png` — full lockup and monogram, full color,
  for light backgrounds
- `logo-full-light.png` / `logo-mark-light.png` — recolored paper-tone
  versions for dark navy backgrounds (hero, footer, header while over the
  hero)
- `app/icon.png` — favicon/app icon, cropped and centered from the monogram
- `public/og-image.jpg` — social share image, composited from the full
  lockup on navy

`components/logo.tsx` (`Logo` and `LumevaMark`) wraps these as `next/image`
components and picks the right variant via a `tone` prop — swap the source
files here if the brand assets are ever updated.

## Future-ready structure

Room was left in the nav, footer, and content model for: Client Portal, AI
Business Navigator, Technology Solutions Marketplace, Knowledge Base,
Workshops, Case Studies, and Executive Dashboards — each can be added as a
new route under `app/` without restructuring existing pages.
