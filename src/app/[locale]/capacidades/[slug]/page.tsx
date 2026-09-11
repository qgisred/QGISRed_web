import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CapacidadDetailContent } from "@/components/CapacidadDetailContent";
import { capacidadesArticles, getArticleBySlug } from "@/data/capacidades-articles";
import { localize } from "@/i18n/localize";

interface Params {
  locale: string;
  slug: string;
}

// Spanish and Portuguese URLs (both happen to use the same slugs) — the
// English ones are `/capabilities/[slug]` (generated from
// `../../capabilities/[slug]/page.tsx`) and the French ones are
// `/capacites/[slug]` (generated from `../../capacites/[slug]/page.tsx`).
// The Portuguese entries are filtered to articles that already have a
// `slugPt`, so an untranslated article simply isn't generated yet rather
// than building a broken `/undefined` path. See `src/i18n/routing.ts`.
export function generateStaticParams(): Params[] {
  return [
    ...capacidadesArticles.map((article) => ({ locale: "es", slug: article.slug })),
    ...capacidadesArticles
      .filter((article) => article.slugPt)
      .map((article) => ({ locale: "pt", slug: article.slugPt as string })),
  ];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug, locale);
  if (!article) return {};
  const title = localize(locale, article.title, article.titleEn, article.titleFr, article.titlePt);
  return { title: `${title} – QGISRed` };
}

export default async function CapacidadSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(slug, locale);
  if (!article) notFound();

  return (
    <>
      <NavBar
        localeParams={{
          es: { slug: article.slug },
          en: { slug: article.slugEn },
          ...(article.slugFr ? { fr: { slug: article.slugFr } } : {}),
          ...(article.slugPt ? { pt: { slug: article.slugPt } } : {}),
        }}
      />
      <PageHero
        title={localize(locale, article.title, article.titleEn, article.titleFr, article.titlePt)}
        backgroundImage="/images/capacidades-bg.jpg"
        overlayOpacity={0.65}
      />
      <CapacidadDetailContent article={article} locale={locale} />
      <Footer />
    </>
  );
}
