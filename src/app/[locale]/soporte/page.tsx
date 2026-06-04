import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { SoportePageContent } from "@/components/SoportePageContent";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return {
    title: `${t("support")} – QGISRed`,
  };
}

export default async function SoportePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return (
    <>
      <NavBar />
      <PageHero
        title={t("support")}
        backgroundImage="/images/soporte-bg.jpg"
        overlayOpacity={0.6}
      />
      <SoportePageContent />
      <Footer />
    </>
  );
}
