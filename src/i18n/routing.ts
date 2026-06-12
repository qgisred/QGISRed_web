import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/presentacion": {
      es: "/presentacion",
      en: "/presentation",
    },
    "/capacidades": {
      es: "/capacidades",
      en: "/capabilities",
    },
    "/utilizacion": {
      es: "/utilizacion",
      en: "/usage",
    },
    "/difusion": {
      es: "/difusion",
      en: "/diffusion",
    },
    "/soporte": {
      es: "/soporte",
      en: "/support",
    },
    "/contacto": {
      es: "/contacto",
      en: "/contact",
    },
    "/aviso-legal": {
      es: "/aviso-legal",
      en: "/legal-warning",
    },
    "/politica-de-privacidad": {
      es: "/politica-de-privacidad",
      en: "/privacy-policy",
    },
    "/politica-de-cookies": {
      es: "/politica-de-cookies",
      en: "/cookies-policy",
    },
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
