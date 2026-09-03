import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { CapacidadDetailContent } from "@/components/CapacidadDetailContent";
import { capacidadesArticles, getArticleBySlug } from "@/data/capacidades-articles";

interface Params {
  locale: string;
  slug: string;
}

export async function generateStaticParams(): Promise<{ locale: string; slug: string }[]> {
  const locales = ["es", "en"];
  return locales.flatMap((locale) =>
    capacidadesArticles.map((article) => ({ locale, slug: article.slug }))
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};
  const title = locale === "en" ? (article.titleEn ?? article.title) : article.title;
  return { title: `${title} – QGISRed` };
}

export default async function CapacidadSlugPage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { locale, slug } = await params;
  setRequestLocale(locale);
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  return (
    <>
      <NavBar />
      <PageHero
        title={locale === "en" ? (article.titleEn ?? article.title) : article.title}
        backgroundImage="/images/capacidades-bg.jpg"
        overlayOpacity={0.65}
      />
      <CapacidadDetailContent article={article} locale={locale} />
      <Footer />
    </>
  );
}
