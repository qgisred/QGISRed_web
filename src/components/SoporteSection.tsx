"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { sendContactMessage, type SubmitStatus } from "@/lib/forms";

const FORM_FIELDS = [
  { key: "nombre", type: "text" },
  { key: "email", type: "email" },
  { key: "empresa", type: "text" },
  { key: "telefono", type: "tel" },
] as const;

type FieldKey = (typeof FORM_FIELDS)[number]["key"];

export function SoporteSection() {
  const t = useTranslations("soporteSection");
  const [values, setValues] = useState<Record<FieldKey | "mensaje", string>>({
    nombre: "",
    email: "",
    empresa: "",
    telefono: "",
    mensaje: "",
  });
  const [accepted, setAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");

  const bulletItems = [
    "issues",
    "technicalSupport",
    "businessServices",
    "projects",
  ] as const;

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      await sendContactMessage({
        origen: "Soporte",
        nombre: values.nombre,
        email: values.email,
        empresa: values.empresa,
        telefono: values.telefono,
        mensaje: values.mensaje,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

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
        style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}
      >
        <div className="w-full min-w-0 md:flex-[1_1_45%] md:max-w-[45%]">
          <h2
            className="font-bold mb-5 leading-tight"
            style={{
              fontSize: "clamp(30px, 6vw, 48px)",
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

        <div className="w-full min-w-0 md:flex-[1_1_55%] md:max-w-[55%]">
          {status === "success" ? (
            <div
              className="p-8 text-center"
              style={{ backgroundColor: "rgba(255, 255, 255, 0.08)", borderRadius: "2px" }}
            >
              <p className="font-semibold text-white" style={{ fontSize: "18px" }}>
                {t("form.successTitle")}
              </p>
              <p className="mt-2" style={{ fontSize: "14px", color: "rgb(210, 216, 228)" }}>
                {t("form.successBody")}
              </p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              {FORM_FIELDS.map((field) => (
                <input
                  key={field.key}
                  type={field.type}
                  name={field.key}
                  placeholder={t(`form.${field.key}`)}
                  value={values[field.key]}
                  onChange={(e) => setValues({ ...values, [field.key]: e.target.value })}
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
                value={values.mensaje}
                onChange={(e) => setValues({ ...values, mensaje: e.target.value })}
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

              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={accepted}
                  onChange={(e) => setAccepted(e.target.checked)}
                  className="mt-1 flex-shrink-0"
                  style={{ accentColor: "rgb(95, 189, 211)" }}
                />
                <span style={{ fontSize: "13px", color: "rgb(210, 216, 228)", lineHeight: "1.5" }}>
                  {t("form.privacy")}{" "}
                  <Link
                    href="/politica-de-privacidad"
                    style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                    className="hover:underline"
                  >
                    {t("form.privacyLink")}
                  </Link>
                </span>
              </label>

              <input
                type="text"
                name="honeypot"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
              />

              {status === "error" && (
                <p role="alert" style={{ fontSize: "13px", color: "rgb(252, 165, 165)" }}>
                  {t("form.errorMessage")}
                </p>
              )}

              <button
                type="submit"
                disabled={
                  status === "sending" ||
                  !values.nombre ||
                  !values.email ||
                  !values.mensaje ||
                  !accepted
                }
                className="w-full font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "14px",
                  border: "none",
                }}
              >
                {status === "sending" ? t("form.submitting") : t("form.submit")}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
