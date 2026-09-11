// French URLs for the `/capacidades/[slug]` route. The page itself lives in the
// Spanish route; a static export has no middleware to rewrite localized pathnames,
// so each language needs its own directory. See `src/i18n/routing.ts`.
//
// Filtered to articles that already have a `slugFr` — while a translation is
// still missing, its French detail page simply isn't generated yet rather than
// building a broken `/undefined` path.
import { capacidadesArticles } from "@/data/capacidades-articles";

export { default, generateMetadata } from "../../capacidades/[slug]/page";

export function generateStaticParams() {
  return capacidadesArticles
    .filter((article) => article.slugFr)
    .map((article) => ({ locale: "fr", slug: article.slugFr as string }));
}
