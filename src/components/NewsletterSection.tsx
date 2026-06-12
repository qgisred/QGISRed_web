"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Link from "next/link";

export function NewsletterSection() {
  const [email, setEmail] = useState("");
  const [accepted, setAccepted] = useState(false);
  const t = useTranslations("newsletterSection");

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
        style={{ maxWidth: "800px", padding: "0 60px" }}
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

        <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder={t("emailPlaceholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full focus:outline-none transition-all duration-150"
            style={{
              backgroundColor: "rgb(255, 255, 255)",
              border: "1px solid rgb(193, 193, 193)",
              borderRadius: "2px",
              padding: "14px 16px",
              fontSize: "14px",
              color: "rgb(34, 34, 34)",
            }}
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

          {/* reCAPTCHA placeholder */}
          <div
            className="flex items-center gap-3 rounded"
            style={{
              border: "1px solid rgb(193, 193, 193)",
              backgroundColor: "rgb(249, 249, 249)",
              padding: "12px 16px",
              maxWidth: "300px",
            }}
          >
            <div
              className="flex-shrink-0 rounded"
              style={{ width: "24px", height: "24px", border: "1px solid rgb(193, 193, 193)" }}
            />
            <span style={{ fontSize: "13px", color: "rgb(51, 51, 51)" }}>
              {t("recaptcha")}
            </span>
          </div>

          <button
            type="submit"
            className="w-full font-bold uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 cursor-pointer"
            style={{
              background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
              fontSize: "13px",
              letterSpacing: "0.1em",
              padding: "16px",
              border: "none",
              marginTop: "8px",
            }}
          >
            {t("submit")}
          </button>
        </form>

        {/* Legal text */}
        <div
          className="mt-4"
          style={{ fontSize: "10px", lineHeight: "1.6", color: "rgb(51, 51, 51)" }}
        >
          <p className="uppercase font-semibold mb-1" style={{ fontSize: "10px" }}>
            {t("dataProtectionTitle")}
          </p>
          <p>
            <strong>{t("responsible")}</strong>{" "}
            <Link href="/presentacion#creditos" style={{ color: "rgb(95, 189, 211)" }}>
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
