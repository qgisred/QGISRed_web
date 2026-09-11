/**
 * Picks the right-language value out of a set of per-locale variants, falling
 * back to the Spanish one when a translation is still missing — the same
 * "es is always present, the rest are optional overrides" convention already
 * used throughout `src/data/capacidades-articles.ts` (`title`/`titleEn`/...).
 *
 * Replaces the old `isEn ? en : es` ternary now that there are 4 locales.
 */
export function localize<T>(locale: string, es: T, en?: T, fr?: T, pt?: T): T {
  if (locale === "en") return en ?? es;
  if (locale === "fr") return fr ?? es;
  if (locale === "pt") return pt ?? es;
  return es;
}
