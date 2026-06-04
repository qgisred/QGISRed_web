import { NavBar } from "@/components/NavBar";
import { HeroSection } from "@/components/HeroSection";
import { PresentacionSection } from "@/components/PresentacionSection";
import { CapacidadesSection } from "@/components/CapacidadesSection";
import { UtilizacionSection } from "@/components/UtilizacionSection";
import { RecursosSection } from "@/components/RecursosSection";
import { DifusionSection } from "@/components/DifusionSection";
import { SoporteSection } from "@/components/SoporteSection";
import { NewsletterSection } from "@/components/NewsletterSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <main>
        <HeroSection />
        <PresentacionSection />
        <CapacidadesSection />
        <UtilizacionSection />
        <RecursosSection />
        <DifusionSection />
        <SoporteSection />
        <NewsletterSection />
      </main>
      <Footer />
    </>
  );
}
