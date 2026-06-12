import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function UtilizacionSection() {
  const t = useTranslations("utilizacionSection");
  return (
    <section
      className="relative w-full flex items-center"
      style={{
        backgroundImage: `url("${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/images/utilizacion-bg.jpg")`,
        backgroundSize: "cover",
        backgroundPosition: "center right",
        backgroundRepeat: "no-repeat",
        paddingTop: "112px",
        paddingBottom: "112px",
        minHeight: "568px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.97) 50%, rgba(255,255,255,0.7) 100%)",
        }}
      />

      <div
        className="relative z-10 w-full mx-auto flex flex-col md:flex-row items-center gap-[60px]"
        style={{ maxWidth: "1280px", padding: "0 60px" }}
      >
        {/* Left text column */}
        <div style={{ flex: "0 0 45%", maxWidth: "45%" }} className="w-full md:w-auto">
          <h2
            className="font-bold mb-2"
            style={{
              fontSize: "14px",
              color: "rgb(95, 189, 211)",
              textTransform: "uppercase",
              letterSpacing: "2px",
            }}
          >
            {t("label")}
          </h2>

          <h2
            className="font-bold mb-5 leading-tight"
            style={{
              fontSize: "48px",
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

          <Link
            href="/utilizacion"
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

        {/* Right image column */}
        <div className="hidden md:block" style={{ flex: "0 0 55%", maxWidth: "55%" }}>
          <Image
            src="/images/utilizacion-img.png"
            alt="QGISRed software interface"
            width={800}
            height={600}
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}
