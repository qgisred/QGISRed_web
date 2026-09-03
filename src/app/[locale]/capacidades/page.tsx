import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { CapacidadesPageContent } from "@/components/CapacidadesPageContent";
import { Footer } from "@/components/Footer";

// Spanish URL only — the English one is `/capabilities`, generated from
// `../capabilities/page.tsx`. See `src/i18n/routing.ts`.
export function generateStaticParams() {
  return [{ locale: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "pageHero" });
  return {
    title: `${t("capabilities")} – QGISRed`,
  };
}

export default async function CapacidadesPage({
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
        title={t("capabilities")}
        backgroundImage="/images/capacidades-bg.jpg"
        overlayOpacity={0.65}
      />
      <CapacidadesPageContent locale={locale} />
      <Footer />
    </>
  );
}
