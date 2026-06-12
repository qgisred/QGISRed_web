import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { UtilizacionPageContent } from "@/components/UtilizacionPageContent";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return {
    title: `${t("usage")} – QGISRed`,
  };
}

export default async function UtilizacionPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return (
    <>
      <NavBar />
      <PageHero
        title={t("usage")}
        backgroundImage="/images/utilizacion-bg.jpg"
        overlayOpacity={0.6}
      />
      <UtilizacionPageContent locale={locale} />
      <Footer />
    </>
  );
}
