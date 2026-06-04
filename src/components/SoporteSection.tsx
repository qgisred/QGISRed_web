"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export function SoporteSection() {
  const t = useTranslations("soporteSection");

  const bulletItems = [
    "issues",
    "technicalSupport",
    "businessServices",
    "projects",
  ] as const;

  const formFields = [
    { key: "nombre" as const, type: "text" },
    { key: "email" as const, type: "email" },
    { key: "empresa" as const, type: "text" },
    { key: "telefono" as const, type: "tel" },
  ];

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "rgb(0, 14, 40)",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div
        className="mx-auto flex flex-col md:flex-row gap-[60px] items-start"
        style={{ maxWidth: "1280px", padding: "0 60px" }}
      >
        {/* Left text column */}
        <div style={{ flex: "0 0 45%", maxWidth: "45%" }}>
          <h2
            className="font-bold mb-5 leading-tight"
            style={{
              fontSize: "48px",
              color: "rgb(255, 255, 255)",
              lineHeight: "1.2",
            }}
          >
            {t("title")}
          </h2>

          <p
            className="mb-6"
            style={{
              fontSize: "15px",
              color: "rgba(255, 255, 255, 0.85)",
              lineHeight: "1.7",
            }}
          >
            {t("body")}
          </p>

          {/* Bullet list */}
          <ul className="flex flex-col gap-2 p-0 list-none mb-8">
            {bulletItems.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 rounded-full"
                  style={{
                    width: "8px",
                    height: "8px",
                    backgroundColor: "rgb(95, 189, 211)",
                  }}
                />
                <span
                  style={{
                    fontSize: "14px",
                    color: "rgb(255, 255, 255)",
                    fontWeight: "500",
                  }}
                >
                  {t(`bulletItems.${item}`)}
                </span>
              </li>
            ))}
          </ul>

          <Link
            href="/contacto"
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

        {/* Right form column */}
        <div style={{ flex: "0 0 55%", maxWidth: "55%" }} className="w-full">
          <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
            {formFields.map((field) => (
              <input
                key={field.key}
                type={field.type}
                name={field.key}
                placeholder={t(`form.${field.key}`)}
                className="w-full transition-all duration-150 focus:outline-none"
                style={{
                  backgroundColor: "rgb(255, 255, 255)",
                  border: "1px solid rgb(193, 193, 193)",
                  borderRadius: "2px",
                  padding: "12px 16px",
                  fontSize: "14px",
                  color: "rgb(34, 34, 34)",
                }}
              />
            ))}
            <textarea
              name="mensaje"
              placeholder={t("form.mensaje")}
              rows={5}
              className="w-full transition-all duration-150 focus:outline-none resize-none"
              style={{
                backgroundColor: "rgb(255, 255, 255)",
                border: "1px solid rgb(193, 193, 193)",
                borderRadius: "2px",
                padding: "12px 16px",
                fontSize: "14px",
                color: "rgb(34, 34, 34)",
              }}
            />
            <button
              type="submit"
              className="w-full font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 cursor-pointer"
              style={{
                background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                fontSize: "13px",
                letterSpacing: "0.08em",
                padding: "14px",
                border: "none",
              }}
            >
              {t("form.submit")}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
