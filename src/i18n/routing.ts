import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  // Keys are the internal pathnames used in code (always the Spanish ones, since
  // `es` is the default locale); the values are the URL each locale actually gets.
  // There is no middleware to rewrite these — the site is a static export — so
  // every localized pathname below must also exist as a directory under
  // `src/app/[locale]/`, whose page restricts `generateStaticParams` to the
  // matching locale. See `src/app/[locale]/presentation/page.tsx` for the shape.
  pathnames: {
    "/": "/",
    "/presentacion": { es: "/presentacion", en: "/presentation" },
    "/capacidades": { es: "/capacidades", en: "/capabilities" },
    "/capacidades/[slug]": { es: "/capacidades/[slug]", en: "/capabilities/[slug]" },
    "/utilizacion": { es: "/utilizacion", en: "/usage" },
    "/difusion": { es: "/difusion", en: "/dissemination" },
    "/soporte": { es: "/soporte", en: "/support" },
    "/contacto": { es: "/contacto", en: "/contact" },
    "/aviso-legal": { es: "/aviso-legal", en: "/legal-notice" },
    "/politica-de-privacidad": { es: "/politica-de-privacidad", en: "/privacy-policy" },
    "/politica-de-cookies": { es: "/politica-de-cookies", en: "/cookies-policy" },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;

/** Pathnames without dynamic segments, i.e. those `Link` accepts on their own. */
export type StaticPathname = Exclude<Pathname, `${string}[${string}`>;

/**
 * A pathname plus an anchor. Distributed over each pathname so every member
 * keeps its literal type, which is what `Link` needs to type-check the target.
 */
export type PathnameWithHash = {
  [P in StaticPathname]: { pathname: P; hash: string };
}[StaticPathname];
