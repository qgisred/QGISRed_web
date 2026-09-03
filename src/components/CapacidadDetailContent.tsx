import Image from "@/components/AppImage";
import { Link } from "@/i18n/navigation";
import type { CapacidadArticle } from "@/data/capacidades-articles";
import { anchorHash } from "@/i18n/anchors";

export function CapacidadDetailContent({ article, locale }: { article: CapacidadArticle; locale: string }) {
  const isEn = locale === "en";
  // Both group names double as anchor keys on the capabilities page.
  const backAnchor = anchorHash(article.group, locale);

  const displayTitle = isEn ? (article.titleEn ?? article.title) : article.title;
  const displayParagraphs = isEn ? (article.paragraphsEn ?? article.paragraphs) : article.paragraphs;
  const displayBulletList = isEn ? (article.bulletListEn ?? article.bulletList) : article.bulletList;
  const displayParagraphsAfterList = isEn
    ? (article.paragraphsAfterListEn ?? article.paragraphsAfterList)
    : article.paragraphsAfterList;
  const backLinkText = isEn ? "Back to Capabilities" : "Volver a Capacidades";
  const buttonText = isEn ? "See all capabilities" : "Ver todas las capacidades";

  return (
    <main>
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          {/* Back link */}
          <Link
            href={{ pathname: "/capacidades", hash: backAnchor }}
            className="inline-flex items-center gap-2 mb-8 text-[14px] font-medium transition-colors duration-150"
            style={{ color: "rgb(95, 189, 211)" }}
          >
            <span style={{ fontSize: "18px" }}>‹</span>
            {backLinkText}
          </Link>

          {/* Title */}
          <h1
            className="font-semibold mb-8"
            style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "rgb(0, 9, 25)", lineHeight: "1.2", maxWidth: "900px" }}
          >
            {displayTitle}
          </h1>

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            {/* Text content */}
            <div style={{ flex: article.image ? "1 1 55%" : "1 1 100%" }}>
              {displayParagraphs.map((p, i) => (
                <p
                  key={i}
                  className="mb-4"
                  style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}
                >
                  {p}
                </p>
              ))}

              {displayBulletList && (
                <ul className="mb-4 list-disc pl-5" style={{ color: "rgb(51, 51, 51)" }}>
                  {displayBulletList.map((item, i) => (
                    <li
                      key={i}
                      className="mb-2"
                      style={{ fontSize: "15px", lineHeight: "1.7" }}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {displayParagraphsAfterList?.map((p, i) => (
                <p
                  key={i}
                  className="mb-4"
                  style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}
                >
                  {p}
                </p>
              ))}

              <div className="mt-10">
                <Link
                  href={{ pathname: "/capacidades", hash: backAnchor }}
                  className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    padding: "12px 32px",
                    textDecoration: "none",
                  }}
                >
                  {buttonText}
                </Link>
              </div>
            </div>

            {/* Image */}
            {article.image && (
              <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
                <Image
                  src={article.image}
                  alt={(isEn ? article.imageAltEn : article.imageAlt) ?? displayTitle}
                  width={article.imageWidth}
                  height={article.imageHeight}
                  className="w-full h-auto shadow-md"
                />
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
