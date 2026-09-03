// English URL for the `/politica-de-privacidad` route. The page itself lives in the Spanish
// route; a static export has no middleware to rewrite localized pathnames,
// so each language needs its own directory. See `src/i18n/routing.ts`.
export { default, generateMetadata } from "../politica-de-privacidad/page";

export function generateStaticParams() {
  return [{ locale: "en" }];
}
