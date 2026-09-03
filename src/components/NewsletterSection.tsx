"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { anchorHash } from "@/i18n/anchors";
import { subscribeToNewsletter, type SubmitStatus } from "@/lib/forms";

const fieldStyle = {
  backgroundColor: "rgb(255, 255, 255)",
  border: "1px solid rgb(193, 193, 193)",
  borderRadius: "2px",
  padding: "14px 16px",
  fontSize: "14px",
  color: "rgb(34, 34, 34)",
} as const;

export function NewsletterSection() {
  const [nombre, setNombre] = useState("");
  const [pais, setPais] = useState("");
  const [empresa, setEmpresa] = useState("");
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const t = useTranslations("newsletterSection");
  const locale = useLocale();

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    try {
      await subscribeToNewsletter({ email, nombre, pais, empresa });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full"
      style={{
        backgroundColor: "rgb(246, 246, 246)",
        paddingTop: "64px",
        paddingBottom: "64px",
      }}
    >
      <div
        className="mx-auto"
        style={{ maxWidth: "800px", padding: "0 clamp(20px, 5vw, 60px)" }}
      >
        <p
          className="font-semibold mb-8 text-center"
          style={{
            fontSize: "20px",
            color: "rgb(0, 9, 25)",
            lineHeight: "1.4",
          }}
        >
          {t("title")}
        </p>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder={t("namePlaceholder")}
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
              className="w-full focus:outline-none transition-all duration-150"
              style={fieldStyle}
            />
            <input
              type="text"
              placeholder={t("countryPlaceholder")}
              value={pais}
              onChange={(e) => setPais(e.target.value)}
              required
              className="w-full focus:outline-none transition-all duration-150"
              style={fieldStyle}
            />
          </div>

          <input
            type="text"
            placeholder={t("companyPlaceholder")}
            value={empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            required
            className="w-full focus:outline-none transition-all duration-150"
            style={fieldStyle}
          />

          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full focus:outline-none transition-all duration-150"
            style={fieldStyle}
          />

          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              id="privacy"
              checked={accepted}
              onChange={(e) => setAccepted(e.target.checked)}
              className="mt-0.5 flex-shrink-0 cursor-pointer"
              style={{ width: "16px", height: "16px" }}
            />
            <label
              htmlFor="privacy"
              style={{ fontSize: "14px", color: "rgb(51, 51, 51)", cursor: "pointer" }}
            >
              {t("privacyText")}{" "}
              <Link
                href="/politica-de-privacidad"
                style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                className="hover:underline"
              >
                {t("privacyLink")}
              </Link>
            </label>
          </div>

          <input
            type="text"
            name="email_address_check"
            value={honeypot}
            onChange={(e) => setHoneypot(e.target.value)}
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
          />

          {status === "success" && (
            <p
              role="status"
              style={{ fontSize: "14px", color: "rgb(21, 128, 61)", lineHeight: "1.5" }}
            >
              {t("successMessage")}
            </p>
          )}
          {status === "error" && (
            <p
              role="alert"
              style={{ fontSize: "14px", color: "rgb(185, 28, 28)", lineHeight: "1.5" }}
            >
              {t("errorMessage")}
            </p>
          )}

          <button
            type="submit"
            disabled={
              status === "sending" ||
              status === "success" ||
              !nombre ||
              !pais ||
              !empresa ||
              !email ||
              !accepted
            }
            className="w-full font-bold uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
              fontSize: "13px",
              letterSpacing: "0.1em",
              padding: "16px",
              border: "none",
              marginTop: "8px",
            }}
          >
            {status === "sending" ? t("submitting") : t("submit")}
          </button>
        </form>

        <div
          className="mt-4"
          style={{ fontSize: "10px", lineHeight: "1.6", color: "rgb(51, 51, 51)" }}
        >
          <p className="uppercase font-semibold mb-1" style={{ fontSize: "10px" }}>
            {t("dataProtectionTitle")}
          </p>
          <p>
            <strong>{t("responsible")}</strong>{" "}
            <Link href={{ pathname: "/presentacion", hash: anchorHash("creditos", locale) }} style={{ color: "rgb(95, 189, 211)" }}>
              {t("responsibleLink")}
            </Link>
          </p>
          <p>
            <strong>{t("purpose")}</strong>{" "}
            <span style={{ color: "rgb(95, 189, 211)" }}>{t("purposeText")}</span>
          </p>
          <p>
            <strong>{t("legitimation")}</strong>{" "}
            <span style={{ color: "rgb(95, 189, 211)" }}>{t("legitimationText")}</span>
          </p>
          <p>
            <strong>{t("recipients")}</strong>{" "}
            <span style={{ color: "rgb(95, 189, 211)" }}>{t("recipientsText")}</span>
          </p>
          <p>
            <strong>{t("rights")}</strong> {t("rightsText")}
          </p>
          <p>
            <strong>{t("additionalInfo")}</strong>{" "}
            <Link href="/politica-de-privacidad" style={{ color: "rgb(95, 189, 211)" }}>
              {t("additionalInfoLink")}
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}
