// French URLs for the `/capacidades/[slug]` route. The page itself lives in the
// Spanish route; a static export has no middleware to rewrite localized pathnames,
// so each language needs its own directory. See `src/i18n/routing.ts`.
//
// Falls back to the Spanish slug for articles without a `slugFr` yet — an empty
// `generateStaticParams()` array is treated as "missing" under `output: export`,
// so filtering untranslated articles out entirely isn't an option here. The
// page content itself already falls back to Spanish via `localize()`, so this
// is consistent: the URL is just the last piece to catch up once translated.
import { capacidadesArticles } from "@/data/capacidades-articles";

export { default, generateMetadata } from "../../capacidades/[slug]/page";

export function generateStaticParams() {
  return capacidadesArticles.map((article) => ({ locale: "fr", slug: article.slugFr ?? article.slug }));
}
