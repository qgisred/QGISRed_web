/**
 * In-page anchors, translated like the pathnames in `./routing.ts`: they are
 * part of the URL, so `/en/capabilities#novedades` would read as Spanish.
 *
 * Keys are the internal names used in code (the Spanish ones, since `es` is the
 * default locale). Never write a raw `#anchor` in a component: the section `id`
 * and every link to it have to come from here, or they drift apart silently —
 * a wrong anchor doesn't error, it just scrolls nowhere.
 *
 * `fr`/`pt` are optional while those translations are still in progress —
 * `anchorId` falls back to the Spanish anchor when missing.
 */
interface AnchorEntry {
  es: string;
  en: string;
  fr?: string;
  pt?: string;
}

const anchors = {
  // Home
  bajo: { es: "bajo", en: "presentation", fr: "presentation" },
  // Presentación
  quees: { es: "quees", en: "what-is", fr: "quest-ce-que" },
  antecedentes: { es: "antecedentes", en: "background", fr: "contexte" },
  aplicaciones: { es: "aplicaciones", en: "applications", fr: "applications" },
  instalacion: { es: "instalacion", en: "installation", fr: "installation" },
  github: { es: "github", en: "github", fr: "github" },
  creditos: { es: "creditos", en: "credits", fr: "credits" },
  // Capacidades
  novedades: { es: "novedades", en: "news", fr: "actualites" },
  capacidadesdestacadas: { es: "capacidadesdestacadas", en: "featured-capabilities", fr: "capacites-phares" },
  prestacionesactuales: { es: "prestacionesactuales", en: "current-capabilities", fr: "prestations-actuelles" },
  proximasprestaciones: { es: "proximasprestaciones", en: "road-map", fr: "prochaines-prestations" },
  historicodeversiones: { es: "historicodeversiones", en: "version-history", fr: "historique-des-versions" },
  // Utilización
  manualusuario: { es: "manualusuario", en: "user-manual", fr: "manuel-utilisateur" },
  tutoriales: { es: "tutoriales", en: "tutorials", fr: "tutoriels" },
  videosformativos: { es: "videosformativos", en: "training-videos", fr: "videos-formation" },
  repositorioejemplos: { es: "repositorioejemplos", en: "examples-repository", fr: "repertoire-exemples" },
  modelodatos: { es: "modelodatos", en: "data-model", fr: "modele-donnees" },
  preguntasfrecuentes: { es: "preguntasfrecuentes", en: "faq", fr: "faq" },
  // Difusión
  cursos: { es: "cursos", en: "courses", fr: "cours" },
  publicaciones: { es: "publicaciones", en: "publications", fr: "publications" },
  noticias: { es: "noticias", en: "news", fr: "actualites" },
  // Soporte
  incidencias: { es: "incidencias", en: "issues", fr: "incidents" },
  soportetecnico: { es: "soportetecnico", en: "technical-support", fr: "support-technique" },
  empresas: { es: "empresas", en: "company-services", fr: "services-entreprises" },
  participacion: { es: "participacion", en: "participation", fr: "participation" },
} satisfies Record<string, AnchorEntry>;

export type AnchorKey = keyof typeof anchors;

/** The `id` to put on the section, in the given locale. */
export function anchorId(key: AnchorKey, locale: string): string {
  const entry: AnchorEntry = anchors[key];
  if (locale === "en") return entry.en;
  if (locale === "fr") return entry.fr ?? entry.es;
  if (locale === "pt") return entry.pt ?? entry.es;
  return entry.es;
}

/** The same anchor as a link target, i.e. prefixed with `#`. */
export function anchorHash(key: AnchorKey, locale: string): string {
  return `#${anchorId(key, locale)}`;
}
