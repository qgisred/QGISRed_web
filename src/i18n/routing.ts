import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["es", "en"],
  defaultLocale: "es",
  localePrefix: "always",
  pathnames: {
    "/": "/",
    "/presentacion": "/presentacion",
    "/capacidades": "/capacidades",
    "/utilizacion": "/utilizacion",
    "/difusion": "/difusion",
    "/soporte": "/soporte",
    "/contacto": "/contacto",
    "/aviso-legal": "/aviso-legal",
    "/politica-de-privacidad": "/politica-de-privacidad",
    "/politica-de-cookies": "/politica-de-cookies",
  },
});

export type Locale = (typeof routing.locales)[number];
export type Pathname = keyof typeof routing.pathnames;
