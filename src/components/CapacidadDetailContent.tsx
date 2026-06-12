import Image from "next/image";
import { Link } from "@/i18n/navigation";
import type { CapacidadArticle } from "@/data/capacidades-articles";

export function CapacidadDetailContent({ article }: { article: CapacidadArticle }) {
  const backAnchor =
    article.group === "novedades" ? "#novedades" : "#capacidadesdestacadas";

  return (
    <main>
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          {/* Back link */}
          <Link
            href={{ pathname: "/capacidades", hash: backAnchor }}
            className="inline-flex items-center gap-2 mb-8 text-[14px] font-medium transition-colors duration-150"
            style={{ color: "rgb(95, 189, 211)" }}
          >
            <span style={{ fontSize: "18px" }}>‹</span>
            Volver a Capacidades
          </Link>

          {/* Title */}
          <h1
            className="font-semibold mb-8"
            style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2", maxWidth: "900px" }}
          >
            {article.title}
          </h1>

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            {/* Text content */}
            <div style={{ flex: article.image ? "1 1 55%" : "1 1 100%" }}>
              {article.paragraphs.map((p, i) => (
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
                  Ver todas las capacidades
                </Link>
              </div>
            </div>

            {/* Image */}
            {article.image && (
              <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
                <Image
                  src={article.image}
                  alt={article.imageAlt ?? article.title}
                  width={800}
                  height={500}
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
