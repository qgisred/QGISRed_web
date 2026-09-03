/**
 * In-page anchors, translated like the pathnames in `./routing.ts`: they are
 * part of the URL, so `/en/capabilities#novedades` would read as Spanish.
 *
 * Keys are the internal names used in code (the Spanish ones, since `es` is the
 * default locale). Never write a raw `#anchor` in a component: the section `id`
 * and every link to it have to come from here, or they drift apart silently —
 * a wrong anchor doesn't error, it just scrolls nowhere.
 */
const anchors = {
  // Home
  bajo: { es: "bajo", en: "presentation" },
  // Presentación
  quees: { es: "quees", en: "what-is" },
  antecedentes: { es: "antecedentes", en: "background" },
  aplicaciones: { es: "aplicaciones", en: "applications" },
  instalacion: { es: "instalacion", en: "installation" },
  github: { es: "github", en: "github" },
  creditos: { es: "creditos", en: "credits" },
  // Capacidades
  novedades: { es: "novedades", en: "news" },
  capacidadesdestacadas: { es: "capacidadesdestacadas", en: "featured-capabilities" },
  prestacionesactuales: { es: "prestacionesactuales", en: "current-capabilities" },
  proximasprestaciones: { es: "proximasprestaciones", en: "road-map" },
  historicodeversiones: { es: "historicodeversiones", en: "version-history" },
  // Utilización
  manualusuario: { es: "manualusuario", en: "user-manual" },
  tutoriales: { es: "tutoriales", en: "tutorials" },
  videosformativos: { es: "videosformativos", en: "training-videos" },
  repositorioejemplos: { es: "repositorioejemplos", en: "examples-repository" },
  modelodatos: { es: "modelodatos", en: "data-model" },
  preguntasfrecuentes: { es: "preguntasfrecuentes", en: "faq" },
  // Difusión
  cursos: { es: "cursos", en: "courses" },
  publicaciones: { es: "publicaciones", en: "publications" },
  noticias: { es: "noticias", en: "news" },
  // Soporte
  incidencias: { es: "incidencias", en: "issues" },
  soportetecnico: { es: "soportetecnico", en: "technical-support" },
  empresas: { es: "empresas", en: "company-services" },
  participacion: { es: "participacion", en: "participation" },
} as const;

export type AnchorKey = keyof typeof anchors;

/** The `id` to put on the section, in the given locale. */
export function anchorId(key: AnchorKey, locale: string): string {
  return locale === "en" ? anchors[key].en : anchors[key].es;
}

/** The same anchor as a link target, i.e. prefixed with `#`. */
export function anchorHash(key: AnchorKey, locale: string): string {
  return `#${anchorId(key, locale)}`;
}
