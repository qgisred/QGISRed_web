// English AND French URL for the `/presentacion` route (both happen to use the
// word "presentation"). The page itself lives in the Spanish route; a static
// export has no middleware to rewrite localized pathnames, so each language
// needs its own directory. See `src/i18n/routing.ts`.
export { default, generateMetadata } from "../presentacion/page";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "fr" }];
}
