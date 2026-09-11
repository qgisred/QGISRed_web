import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en", "fr", "pt"],
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
    "/presentacion": { es: "/presentacion", en: "/presentation", fr: "/presentation", pt: "/apresentacao" },
    "/capacidades": { es: "/capacidades", en: "/capabilities", fr: "/capacites", pt: "/capacidades" },
    "/capacidades/[slug]": { es: "/capacidades/[slug]", en: "/capabilities/[slug]", fr: "/capacites/[slug]", pt: "/capacidades/[slug]" },
    "/utilizacion": { es: "/utilizacion", en: "/usage", fr: "/utilisation", pt: "/utilizacao" },
    "/difusion": { es: "/difusion", en: "/dissemination", fr: "/diffusion", pt: "/difusao" },
    "/soporte": { es: "/soporte", en: "/support", fr: "/assistance", pt: "/suporte" },
    "/contacto": { es: "/contacto", en: "/contact", fr: "/contact", pt: "/contato" },
    "/aviso-legal": { es: "/aviso-legal", en: "/legal-notice", fr: "/mentions-legales", pt: "/aviso-legal" },
    "/politica-de-privacidad": { es: "/politica-de-privacidad", en: "/privacy-policy", fr: "/politique-de-confidentialite", pt: "/politica-de-privacidade" },
    "/politica-de-cookies": { es: "/politica-de-cookies", en: "/cookies-policy", fr: "/politique-de-cookies", pt: "/politica-de-cookies" },
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
