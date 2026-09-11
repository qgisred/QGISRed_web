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
  bajo: { es: "bajo", en: "presentation", fr: "presentation", pt: "apresentacao" },
  // Presentación
  quees: { es: "quees", en: "what-is", fr: "quest-ce-que", pt: "o-que-e" },
  antecedentes: { es: "antecedentes", en: "background", fr: "contexte", pt: "antecedentes" },
  aplicaciones: { es: "aplicaciones", en: "applications", fr: "applications", pt: "aplicacoes" },
  instalacion: { es: "instalacion", en: "installation", fr: "installation", pt: "instalacao" },
  github: { es: "github", en: "github", fr: "github", pt: "github" },
  creditos: { es: "creditos", en: "credits", fr: "credits", pt: "creditos" },
  // Capacidades
  novedades: { es: "novedades", en: "news", fr: "actualites", pt: "novidades" },
  capacidadesdestacadas: { es: "capacidadesdestacadas", en: "featured-capabilities", fr: "capacites-phares", pt: "capacidades-em-destaque" },
  prestacionesactuales: { es: "prestacionesactuales", en: "current-capabilities", fr: "prestations-actuelles", pt: "funcionalidades-atuais" },
  proximasprestaciones: { es: "proximasprestaciones", en: "road-map", fr: "prochaines-prestations", pt: "proximas-funcionalidades" },
  historicodeversiones: { es: "historicodeversiones", en: "version-history", fr: "historique-des-versions", pt: "historico-de-versoes" },
  // Utilización
  manualusuario: { es: "manualusuario", en: "user-manual", fr: "manuel-utilisateur", pt: "manual-do-usuario" },
  tutoriales: { es: "tutoriales", en: "tutorials", fr: "tutoriels", pt: "tutoriais" },
  videosformativos: { es: "videosformativos", en: "training-videos", fr: "videos-formation", pt: "videos-de-treinamento" },
  repositorioejemplos: { es: "repositorioejemplos", en: "examples-repository", fr: "repertoire-exemples", pt: "repositorio-de-exemplos" },
  modelodatos: { es: "modelodatos", en: "data-model", fr: "modele-donnees", pt: "modelo-de-dados" },
  preguntasfrecuentes: { es: "preguntasfrecuentes", en: "faq", fr: "faq", pt: "perguntas-frequentes" },
  // Difusión
  cursos: { es: "cursos", en: "courses", fr: "cours", pt: "cursos" },
  publicaciones: { es: "publicaciones", en: "publications", fr: "publications", pt: "publicacoes" },
  noticias: { es: "noticias", en: "news", fr: "actualites", pt: "noticias" },
  // Soporte
  incidencias: { es: "incidencias", en: "issues", fr: "incidents", pt: "incidentes" },
  soportetecnico: { es: "soportetecnico", en: "technical-support", fr: "support-technique", pt: "suporte-tecnico" },
  empresas: { es: "empresas", en: "company-services", fr: "services-entreprises", pt: "servicos-para-empresas" },
  participacion: { es: "participacion", en: "participation", fr: "participation", pt: "participacao" },
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
