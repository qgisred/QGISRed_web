import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function CapacidadesSection() {
  const t = useTranslations("capacidadesSection");

  const cards = [
    { key: "news", href: "/capacidades#novedades", icon: "✦" },
    { key: "featured", href: "/capacidades#capacidadesdestacadas", icon: "⊞" },
    { key: "current", href: "/capacidades#prestacionesactuales", icon: "✓" },
    { key: "upcoming", href: "/capacidades#proximasprestaciones", icon: "◷" },
    { key: "history", href: "/capacidades#historicodeversiones", icon: "≡" },
  ] as const;

  return (
    <section
      className="relative w-full flex items-start"
      style={{
        backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/capacidades-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        paddingTop: "80px",
        paddingBottom: "32px",
        minHeight: "652px",
      }}
    >
      {/* Dark overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: "rgb(0, 9, 25)", opacity: 0.7 }}
      />

      <div
        className="relative z-10 w-full mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: "1280px", padding: "0 60px" }}
      >
        <h2
          className="font-bold text-white mb-4 leading-tight"
          style={{ fontSize: "clamp(28px, 3vw, 42px)", lineHeight: "1.2" }}
        >
          {t("title")}
        </h2>
        <p
          className="text-white mb-10"
          style={{ fontSize: "16px", lineHeight: "1.6", maxWidth: "700px" }}
        >
          {t("body")}
        </p>

        {/* Cards grid: 3 top, 2 bottom centered */}
        <div className="w-full mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
            {cards.slice(0, 3).map((card) => (
              <a
                key={card.key}
                href={card.href}
                className="flex items-center gap-4 p-6 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,9,25,0.25)]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                <span className="flex-shrink-0 text-2xl" style={{ color: "rgb(95, 189, 211)" }}>
                  {card.icon}
                </span>
                <span
                  className="font-semibold text-left"
                  style={{ fontSize: "16px", color: "rgb(0, 9, 25)", lineHeight: "1.3" }}
                >
                  {t(`cards.${card.key}`)}
                </span>
              </a>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:max-w-[66%] lg:mx-auto">
            {cards.slice(3).map((card) => (
              <a
                key={card.key}
                href={card.href}
                className="flex items-center gap-4 p-6 transition-shadow duration-200 hover:shadow-[0_8px_24px_rgba(0,9,25,0.25)]"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "4px",
                  textDecoration: "none",
                }}
              >
                <span className="flex-shrink-0 text-2xl" style={{ color: "rgb(95, 189, 211)" }}>
                  {card.icon}
                </span>
                <span
                  className="font-semibold text-left"
                  style={{ fontSize: "16px", color: "rgb(0, 9, 25)", lineHeight: "1.3" }}
                >
                  {t(`cards.${card.key}`)}
                </span>
              </a>
            ))}
          </div>
        </div>

        <Link
          href="/capacidades"
          className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
          style={{
            background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
            fontSize: "13px",
            letterSpacing: "0.08em",
            padding: "12px 32px",
          }}
        >
          {t("cta")}
        </Link>
      </div>
    </section>
  );
}
