// English URLs for the `/capacidades/[slug]` route. The page itself lives in the
// Spanish route; a static export has no middleware to rewrite localized pathnames,
// so each language needs its own directory. See `src/i18n/routing.ts`.
import { capacidadesArticles } from "@/data/capacidades-articles";

export { default, generateMetadata } from "../../capacidades/[slug]/page";

export function generateStaticParams() {
  return capacidadesArticles.map((article) => ({ locale: "en", slug: article.slugEn }));
}
