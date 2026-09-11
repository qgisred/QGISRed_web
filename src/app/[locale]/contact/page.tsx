// English AND French URL for the `/contacto` route (both happen to use the
// word "contact"). The page itself lives in the Spanish route; a static
// export has no middleware to rewrite localized pathnames, so each language
// needs its own directory. See `src/i18n/routing.ts`.
export { default, generateMetadata } from "../contacto/page";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}
