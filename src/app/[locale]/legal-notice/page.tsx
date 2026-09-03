// English URL for the `/aviso-legal` route. The page itself lives in the Spanish
// route; a static export has no middleware to rewrite localized pathnames,
// so each language needs its own directory. See `src/i18n/routing.ts`.
export { default, generateMetadata } from "../aviso-legal/page";

export function generateStaticParams() {
  return [{ locale: "en" }];
}
