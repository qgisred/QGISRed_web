import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import type { PathnameWithHash } from "@/i18n/routing";
import { anchorHash } from "@/i18n/anchors";

export function DifusionSection() {
  const t = useTranslations("difusionSection");
  const locale = useLocale();

  const buttons: Array<{ key: "courses" | "publications" | "news"; href: PathnameWithHash }> = [
    { key: "courses", href: { pathname: "/difusion", hash: anchorHash("cursos", locale) } },
    { key: "publications", href: { pathname: "/difusion", hash: anchorHash("publicaciones", locale) } },
    { key: "news", href: { pathname: "/difusion", hash: anchorHash("noticias", locale) } },
  ];

  return (
    <section
      className="relative w-full flex items-center"
      style={{
        backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/difusion-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        minHeight: "707px",
      }}
    >
      {/* White gradient overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(120deg, rgb(255, 255, 255) 30%, rgba(30, 30, 32, 0) 60%)",
        }}
      />

      <div
        className="relative z-10 w-full mx-auto flex items-center"
        style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)", minHeight: "707px" }}
      >
        {/* Left text column */}
        <div style={{ maxWidth: "480px" }}>
          <h2
            className="font-bold mb-5 leading-tight"
            style={{
              fontSize: "clamp(30px, 6vw, 48px)",
              color: "rgb(0, 9, 25)",
              lineHeight: "1.2",
            }}
          >
            {t("title")}
          </h2>

          <p
            className="mb-8"
            style={{
              fontSize: "15px",
              color: "rgb(51, 51, 51)",
              lineHeight: "1.7",
            }}
          >
            {t("body")}
          </p>

          <div className="flex flex-col gap-3">
            {buttons.map((btn) => (
              <Link
                key={btn.key}
                href={btn.href}
                className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "12px 32px",
                  textDecoration: "none",
                  width: "fit-content",
                }}
              >
                {t(btn.key)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
