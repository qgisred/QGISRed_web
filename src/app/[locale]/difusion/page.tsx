import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { DifusionPageContent } from "@/components/DifusionPageContent";
import { Footer } from "@/components/Footer";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return {
    title: `${t("diffusion")} – QGISRed`,
  };
}

export default async function DifusionPage({
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
        title={t("diffusion")}
        backgroundImage="/images/difusion-bg.jpg"
        overlayOpacity={0.5}
      />
      <DifusionPageContent />
      <Footer />
    </>
  );
}
