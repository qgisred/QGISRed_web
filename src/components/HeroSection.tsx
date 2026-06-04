import { useTranslations } from "next-intl";

export function HeroSection() {
  const t = useTranslations("hero");
  return (
    <section
      className="relative w-full flex items-center"
      style={{
        height: "810px",
        backgroundImage: 'url("/images/hero-bg.png")',
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark overlay — rgb(0,9,25) at 70% opacity, matching original */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundColor: "rgb(0, 9, 25)",
          opacity: 0.7,
        }}
      />

      <div
        className="relative z-10 w-full px-[60px] mx-auto"
        style={{ maxWidth: "1440px" }}
      >
        <div className="max-w-[640px]">
          <h1
            className="font-bold text-white mb-5 leading-tight"
            style={{
              fontSize: "clamp(32px, 3.75vw, 54px)",
              lineHeight: "1.15",
              fontFamily: "var(--font-work-sans), 'Work Sans', sans-serif",
            }}
          >
            {t("title")}
          </h1>
          <p
            className="text-white mb-8"
            style={{
              fontSize: "18px",
              lineHeight: "1.6",
              maxWidth: "500px",
            }}
          >
            {t("subtitle")}
          </p>
          <a
            href="#bajo"
            className="inline-block text-white font-semibold uppercase tracking-wider transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
              fontSize: "13px",
              letterSpacing: "0.08em",
              padding: "12px 32px",
            }}
          >
            {t("cta")}
          </a>
        </div>
      </div>
    </section>
  );
}
