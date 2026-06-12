import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { PresentacionPageContent } from "@/components/PresentacionPageContent";
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
    title: `${t("presentation")} – QGISRed`,
  };
}

export default async function PresentacionPage({
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
        title={t("presentation")}
        backgroundImage="/images/presentacion-screenshot.jpg"
        overlayOpacity={0.6}
      />
      <PresentacionPageContent />
      <Footer />
    </>
  );
}
