# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.

# QGISRed Website

## What This Is
The public website for QGISRed, built as a statically exported Next.js site and deployed to a Plesk server.

## Tech Stack
- **Framework:** Next.js 16 (App Router, React 19, TypeScript strict)
- **Styling:** Tailwind CSS v4 with brand design tokens in `src/app/globals.css`
- **i18n:** `next-intl` — locales `es` (default) and `en`, messages in `messages/`
- **Icons:** hand-written SVG components in `src/components/icons.tsx`
- **Output:** `output: "export"` static build → `out/`
- **Deployment:** `.github/workflows/deploy.yml` builds on push to `master` and publishes `out/` to the `deploy` branch. Plesk pulls that branch into the docroot (`httpdocs_new`) of `new.qgisred.webs.upv.es`; the server never builds and needs no Node. FTPS is not an option — the UPV firewall blocks the passive port range. No `basePath` — the site lives at the subdomain root.

## Commands
- `npm run dev` — Start dev server
- `npm run build` — Production static export
- `npm run lint` — ESLint check
- `npm run typecheck` — TypeScript check
- `npm run check` — Run lint + typecheck + build

## Code Style
- TypeScript strict mode, no `any`
- Named exports, PascalCase components, camelCase utils
- Tailwind utility classes, no inline styles
- 2-space indentation
- Responsive: mobile-first
- Route-aware links go through `src/i18n/navigation.ts`, never bare `next/link`
- Images go through `src/components/AppImage.tsx` so `basePath` is applied

## Project Structure
```
src/
  app/
    [locale]/         # Localized routes (es | en)
    globals.css       # Tailwind v4 theme + brand tokens + utility classes
  components/         # React components (one per page section / page body)
    icons.tsx         # SVG icons as React components
  data/               # Static content data
  i18n/               # next-intl routing, navigation and request config
  proxy.ts            # next-intl locale middleware
messages/             # es.json / en.json translation catalogs
public/
  images/             # Site imagery
  seo/                # Favicon and SEO assets
```

## Content
- All user-facing copy lives in `messages/es.json` and `messages/en.json` — keep both in sync when adding keys.
