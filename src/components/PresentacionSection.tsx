import Image from "@/components/AppImage";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { anchorHash, anchorId } from "@/i18n/anchors";

export function PresentacionSection() {
  const t = useTranslations("presentacionSection");
  const locale = useLocale();

  const listItems = [
    { key: "whatIs", hash: anchorHash("quees", locale) },
    { key: "background", hash: anchorHash("antecedentes", locale) },
    { key: "applications", hash: anchorHash("aplicaciones", locale) },
    { key: "installation", hash: anchorHash("instalacion", locale) },
    { key: "github", hash: anchorHash("github", locale) },
    { key: "credits", hash: anchorHash("creditos", locale) },
  ] as const;

  return (
    <section
      id={anchorId("bajo", locale)}
      className="w-full bg-white"
      style={{
        paddingTop: "64px",
        paddingBottom: "80px",
      }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row items-center gap-[60px]"
        style={{
          maxWidth: "1280px",
          padding: "0 clamp(20px, 5vw, 60px)",
        }}
      >
        {/* Left text column */}
        <div className="flex-1 min-w-0">
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
              fontSize: "clamp(30px, 6vw, 48px)",
              color: "rgb(0, 9, 25)",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            {t("title")}
          </h2>

          <p
            className="mb-6"
            style={{
              fontSize: "15px",
              color: "rgb(51, 51, 51)",
              lineHeight: "1.7",
            }}
          >
            {t("body")}
          </p>

          {/* Icon list */}
          <ul className="mb-8 flex flex-col gap-2 p-0 list-none">
            {listItems.map((item) => (
              <li key={item.key} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "rgb(126, 167, 40)",
                  }}
                />
                <Link
                  href={{ pathname: "/presentacion", hash: item.hash }}
                  className="transition-colors duration-150 hover:text-[rgb(95,189,211)]"
                  style={{
                    fontSize: "14px",
                    fontWeight: "500",
                    color: "rgb(0, 9, 25)",
                    textDecoration: "none",
                  }}
                >
                  {t(`listItems.${item.key}`)}
                </Link>
              </li>
            ))}
          </ul>

          <Link
            href="/presentacion"
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
        <div className="flex-1 min-w-0 hidden md:block">
          <Image
            src="/images/presentacion-screenshot.jpg"
            alt="QGISRed software screenshot"
            width={1000}
            height={1000}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
