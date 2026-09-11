export function localize<T>(locale: string, es: T, en?: T, fr?: T, pt?: T): T {
  if (locale === "en") return en ?? es;
  if (locale === "fr") return fr ?? es;
  if (locale === "pt") return pt ?? es;
  return es;
}
