"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import {
  sendContactMessage,
  subscribeToNewsletter,
  type SubmitStatus,
} from "@/lib/forms";

interface FormState {
  nombre: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
  privacidad: boolean;
}

function HoneypotField({
  name,
  value,
  onChange,
}: {
  name: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type="text"
      name={name}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="hidden"
      tabIndex={-1}
      autoComplete="off"
      aria-hidden="true"
    />
  );
}

function ErrorMessage({ children }: { children: React.ReactNode }) {
  return (
    <p role="alert" style={{ fontSize: "13px", color: "rgb(185, 28, 28)", lineHeight: "1.5" }}>
      {children}
    </p>
  );
}

interface NewsletterState {
  nombre: string;
  pais: string;
  empresa: string;
  cargo: string;
  email: string;
  privacidad: boolean;
}

function InputField({
  type,
  placeholder,
  value,
  onChange,
}: {
  type: string;
  placeholder: string;
  value: string;
  onChange: (val: string) => void;
}) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[rgb(95,189,211)]"
      style={{
        border: "1px solid rgb(193, 193, 193)",
        borderRadius: "2px",
        padding: "12px 16px",
        fontSize: "14px",
        color: "rgb(34, 34, 34)",
        backgroundColor: "rgb(255, 255, 255)",
      }}
    />
  );
}

function ContactForm() {
  const t = useTranslations("contactPage.form");
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
    privacidad: false,
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      await sendContactMessage({
        origen: "Contacto",
        nombre: form.nombre,
        telefono: form.telefono,
        email: form.email,
        asunto: form.asunto,
        mensaje: form.mensaje,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : t("errorMessage"),
      );
    }
  };

  if (status === "success") {
    return (
      <div
        className="p-8 text-center"
        style={{ backgroundColor: "rgb(246,246,246)", border: "1px solid rgb(230,230,230)" }}
      >
        <p className="font-semibold" style={{ fontSize: "18px", color: "rgb(0, 9, 25)" }}>
          {t("successTitle")}
        </p>
        <p className="mt-2" style={{ fontSize: "14px", color: "rgb(51, 51, 51)" }}>
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          type="text"
          placeholder={t("name")}
          value={form.nombre}
          onChange={(v) => setForm({ ...form, nombre: v })}
        />
        <InputField
          type="tel"
          placeholder={t("phone")}
          value={form.telefono}
          onChange={(v) => setForm({ ...form, telefono: v })}
        />
      </div>
      <InputField
        type="email"
        placeholder={t("email")}
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
      />
      <InputField
        type="text"
        placeholder={t("subject")}
        value={form.asunto}
        onChange={(v) => setForm({ ...form, asunto: v })}
      />
      <textarea
        placeholder={t("message")}
        value={form.mensaje}
        onChange={(e) => setForm({ ...form, mensaje: e.target.value })}
        rows={6}
        className="w-full transition-all duration-150 focus:outline-none focus:ring-1 focus:ring-[rgb(95,189,211)] resize-none"
        style={{
          border: "1px solid rgb(193, 193, 193)",
          borderRadius: "2px",
          padding: "12px 16px",
          fontSize: "14px",
          color: "rgb(34, 34, 34)",
          backgroundColor: "rgb(255, 255, 255)",
        }}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.privacidad}
          onChange={(e) => setForm({ ...form, privacidad: e.target.checked })}
          className="mt-1 flex-shrink-0"
          style={{ accentColor: "rgb(95, 189, 211)" }}
        />
        <span style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.5" }}>
          {t("privacy")}{" "}
          <Link href="/politica-de-privacidad" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
            {t("privacyLink")}
          </Link>
          .
        </span>
      </label>

      <HoneypotField name="honeypot" value={honeypot} onChange={setHoneypot} />

      {status === "error" && <ErrorMessage>{error}</ErrorMessage>}

      <button
        type="submit"
        disabled={
          status === "sending" ||
          !form.nombre ||
          !form.email ||
          !form.mensaje ||
          !form.privacidad
        }
        className="w-full font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
          fontSize: "13px",
          letterSpacing: "0.08em",
          padding: "14px",
          border: "none",
          borderRadius: "2px",
        }}
      >
        {status === "sending" ? t("submitting") : t("submit")}
      </button>

      <details className="mt-2">
        <summary
          className="cursor-pointer list-none"
          style={{ fontSize: "11px", color: "rgb(120, 120, 120)", textDecoration: "underline" }}
        >
          {t("dataProtectionSummary")}
        </summary>
        <p className="mt-2" style={{ fontSize: "11px", color: "rgb(120, 120, 120)", lineHeight: "1.6" }}>
          <strong>{t("responsible")}</strong> {t("responsibleName")} <strong>{t("purpose")}</strong>{" "}
          {t("purposeText")} <strong>{t("legitimation")}</strong> {t("legitimationText")}{" "}
          <strong>{t("recipients")}</strong> {t("recipientsText")} <strong>{t("rights")}</strong>{" "}
          {t("rightsText")}
        </p>
      </details>
    </form>
  );
}

function NewsletterForm() {
  const t = useTranslations("contactPage.newsletter");
  const [form, setForm] = useState<NewsletterState>({
    nombre: "",
    pais: "",
    empresa: "",
    cargo: "",
    email: "",
    privacidad: false,
  });
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (honeypot) {
      setStatus("success");
      return;
    }

    setStatus("sending");
    setError("");
    try {
      await subscribeToNewsletter({
        email: form.email,
        nombre: form.nombre,
        pais: form.pais,
        empresa: form.empresa,
        cargo: form.cargo,
      });
      setStatus("success");
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error ? err.message : t("errorMessage"),
      );
    }
  };

  if (status === "success") {
    return (
      <div className="p-6 text-center">
        <p className="font-semibold" style={{ fontSize: "16px", color: "rgb(0, 9, 25)" }}>
          {t("successTitle")}
        </p>
        <p className="mt-2" style={{ fontSize: "14px", color: "rgb(51, 51, 51)" }}>
          {t("successBody")}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InputField
          type="text"
          placeholder={t("name")}
          value={form.nombre}
          onChange={(v) => setForm({ ...form, nombre: v })}
        />
        <InputField
          type="text"
          placeholder={t("country")}
          value={form.pais}
          onChange={(v) => setForm({ ...form, pais: v })}
        />
        <InputField
          type="text"
          placeholder={t("company")}
          value={form.empresa}
          onChange={(v) => setForm({ ...form, empresa: v })}
        />
        <InputField
          type="text"
          placeholder={t("jobTitle")}
          value={form.cargo}
          onChange={(v) => setForm({ ...form, cargo: v })}
        />
      </div>
      <InputField
        type="email"
        placeholder={t("email")}
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
      />
      <label className="flex items-start gap-3 cursor-pointer">
        <input
          type="checkbox"
          checked={form.privacidad}
          onChange={(e) => setForm({ ...form, privacidad: e.target.checked })}
          className="mt-1 flex-shrink-0"
          style={{ accentColor: "rgb(95, 189, 211)" }}
        />
        <span style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.5" }}>
          {t("privacy")}{" "}
          <Link href="/politica-de-privacidad" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
            {t("privacyLink")}
          </Link>
          .
        </span>
      </label>

      <HoneypotField name="email_address_check" value={honeypot} onChange={setHoneypot} />

      {status === "error" && <ErrorMessage>{error}</ErrorMessage>}

      <button
        type="submit"
        disabled={
          status === "sending" ||
          !form.nombre ||
          !form.pais ||
          !form.empresa ||
          !form.email ||
          !form.privacidad
        }
        className="w-full font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
        style={{
          background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
          fontSize: "13px",
          letterSpacing: "0.08em",
          padding: "14px",
          border: "none",
          borderRadius: "2px",
        }}
      >
        {status === "sending" ? t("submitting") : t("submit")}
      </button>
    </form>
  );
}

export function ContactoPageContent() {
  const t = useTranslations("contactPage");
  return (
    <main>
      {/* Contact Form Section */}
      <section
        className="w-full"
        style={{
          background: "linear-gradient(330deg, rgba(0, 14, 40, 0.27) 0%, rgb(246, 246, 246) 100%)",
          paddingTop: "64px",
          paddingBottom: "64px",
        }}
      >
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
          >
            {t("title")}
          </h2>

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%", maxWidth: "600px" }}>
              <ContactForm />
            </div>

            <div style={{ flex: "0 0 35%" }} className="hidden md:block">
              <div className="flex flex-col gap-6">
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ fontSize: "14px", color: "rgb(95, 189, 211)", textTransform: "uppercase", letterSpacing: "2px" }}
                  >
                    IIAMA – UPV
                  </p>
                  <p style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    {t("info.institute")}
                    <br />
                    {t("info.university")}
                    <br />
                    {t("info.address")}
                  </p>
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ fontSize: "14px", color: "rgb(95, 189, 211)", textTransform: "uppercase", letterSpacing: "2px" }}
                  >
                    GitHub
                  </p>
                  <a
                    href="https://github.com/qgisred/QGISRed"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ fontSize: "14px", color: "rgb(0, 9, 25)", textDecoration: "none", lineHeight: "1.7" }}
                    className="hover:text-[rgb(95,189,211)] transition-colors"
                  >
                    github.com/qgisred/QGISRed
                  </a>
                </div>
                <div>
                  <p
                    className="font-semibold mb-1"
                    style={{ fontSize: "14px", color: "rgb(95, 189, 211)", textTransform: "uppercase", letterSpacing: "2px" }}
                  >
                    {t("info.social")}
                  </p>
                  <div className="flex gap-3">
                    <a
                      href="https://twitter.com/qgisred"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center transition-opacity hover:opacity-80"
                      style={{
                        width: "36px",
                        height: "36px",
                        backgroundColor: "rgb(95, 189, 211)",
                        borderRadius: "4px",
                        color: "white",
                        textDecoration: "none",
                        fontSize: "13px",
                        fontWeight: "600",
                      }}
                    >
                      𝕏
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section
        className="w-full"
        style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "64px", paddingBottom: "64px" }}
      >
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div className="max-w-[600px]">
            <p
              className="font-semibold mb-2"
              style={{
                fontSize: "14px",
                color: "rgb(95, 189, 211)",
                textTransform: "uppercase",
                letterSpacing: "2px",
              }}
            >
              NEWSLETTER
            </p>
            <h2
              className="font-bold mb-6"
              style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
            >
              {t("newsletter.title")}
            </h2>
            <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              {t("newsletter.body")}
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
