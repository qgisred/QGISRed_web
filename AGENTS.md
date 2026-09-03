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
messages/             # es.json / en.json translation catalogs
public/
  images/             # Site imagery
  seo/                # Favicon and SEO assets
```

## Routing and URLs

Each route has a different URL per language (`/es/capacidades`, `/en/capabilities`).
The map lives in `pathnames` in `src/i18n/routing.ts`; the keys are the internal
pathnames used throughout the code, and they are always the Spanish ones because
`es` is the default locale. `Link`, `usePathname` and friends from
`src/i18n/navigation.ts` take and return those internal pathnames and translate
to the real URL, so nothing outside `routing.ts` should hardcode an English URL.

Localized pathnames are normally rewritten by next-intl's middleware, which a
static export cannot run. So **every localized pathname also needs its own
directory** under `src/app/[locale]/`, and each page must restrict
`generateStaticParams` to its own locale — otherwise both languages get both
URLs and the site ships duplicate content. The Spanish directory holds the real
page; the English one re-exports it (see `src/app/[locale]/presentation/page.tsx`).
Adding a route therefore means: a `pathnames` entry, the Spanish directory, and
the English one.

Capability articles are translated too (`slug` / `slugEn` in
`src/data/capacidades-articles.ts`). Because their URL segment differs per
language, the language switcher in `NavBar` cannot derive the counterpart URL on
its own — the article page passes it down via the `localeParams` prop.

The same applies to in-page anchors, mapped in `src/i18n/anchors.ts`
(`/en/capabilities#news`, not `#novedades`). Never write a raw `#anchor` in
a component: the section `id` and every link to it come from `anchorId()` /
`anchorHash()`, keyed by the internal (Spanish) name. A mismatch between the two
is silent — the link just scrolls nowhere — so they have to share one source.

Types in `routing.ts` keep link targets honest: `Pathname` is every route,
`StaticPathname` drops the ones needing params (what `Link` accepts on its own),
and `PathnameWithHash` is the `{ pathname, hash }` form. Prefer them over casts:
an unrecognized pathname is emitted verbatim and 404s in English.

## Content
- All user-facing copy lives in `messages/es.json` and `messages/en.json` — keep both in sync when adding keys.

## Forms and email
The site is a static export, so there is no backend to send mail from. Both form
flows live in `src/lib/forms.ts` and delegate to external services. The four forms
are: contact (`/contacto`), support (home), and two newsletter sign-ups (home and
`/contacto`).

- **Contact and support → Static Forms** (`api.staticforms.dev/submit`). Delivers to
  the address that owns the API key, which must be `info@qgisred.com`; the recipient is
  never sent from the client. That mailbox is deliberately **not** `qgisred@upv.es`:
  the latter sits behind the UPV's Microsoft 365 filtering, which silently quarantined
  the provider's own verification mail. A form whose messages vanish into an
  organisation quarantine fails invisibly — the visitor still sees a success screen. `replyTo` is set to the visitor's address. Free tier is
  500 submissions/month with email notification included. Fields other than the API's
  own (`apiKey`, `subject`, `replyTo`, `honeypot`) are dumped verbatim into the email
  body, so their names are the labels the recipient sees. Any field whose name
  contains `honeypot` is stripped from the email — hence the trap field is named
  exactly `honeypot`. Errors come back in `error`, not the documented `message`.
- **Newsletter → Brevo**, via the hosted `<account>.sibforms.com/v2/serve/...`
  endpoint. The field names in `subscribeToNewsletter` must match the ones the Brevo
  form actually renders — fetch the form URL with GET and read its `name=` attributes
  rather than assuming. They are currently `EMAIL`, `NOMBRE`, `PAIS`, `COMPANY_NAME`
  (Empresa) and `JOB_TITLE` (Cargo) — Brevo's own standard contact attributes, not the
  `EMPRESA`/`CARGO` names the form builder shows. Every field the Brevo form marks
  `required` must be optional there, because the home newsletter submits an email
  address and nothing else. `locale` is sent as the literal `es`
  the form declares — the site's own locale is deliberately not forwarded, since an
  unexpected value could be rejected. The endpoint sends no CORS headers, so the
  request uses `mode: "no-cors"` and the response is opaque: only network failures are
  detectable, not Brevo-side rejections, which makes any field-name drift fail
  silently.

Both keys are public by design: they ship in the client bundle, grant no account
access, and are injected at build time from GitHub Actions **variables** (not
secrets). See `.env.example`.

### Newsletter sender address
Campaigns are sent from `info@qgisred.com` through Brevo, with `qgisred.com`
authenticated in Brevo (DKIM + SPF) so DMARC aligns properly. All of this is Brevo
dashboard and DNS configuration — nothing in this repo depends on it.

`qgisred.com` DNS is hosted at `servicio-online.net`, i.e. under project control
rather than the university's, which is what makes domain authentication possible
without going through UPV IT.

Why not an `@upv.es` From address: `upv.es` publishes `p=quarantine` DMARC (with
`sp=quarantine`, so subdomains inherit it) and an SPF record authorising only the
UPV's own SMTP servers and Microsoft 365. Brevo can never align there, so those
campaigns would land in spam. Authorising Brevo on `upv.es` would also let it send as
any address in the university, which is why UPV IT would realistically refuse.

Watch out when editing DNS: the pre-existing `qgisred.com` SPF record was
`v=spf1 redirect=qgisred.upv.es`, and that name is a CNAME to `genablo.cc.upv.es`
with no SPF record of its own — an RFC 7208 `permerror`. It must be **replaced**,
not appended to.
