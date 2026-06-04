"use client";

import { useState } from "react";

interface FormState {
  nombre: string;
  telefono: string;
  email: string;
  asunto: string;
  mensaje: string;
  privacidad: boolean;
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
  const [form, setForm] = useState<FormState>({
    nombre: "",
    telefono: "",
    email: "",
    asunto: "",
    mensaje: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div
        className="p-8 text-center"
        style={{ backgroundColor: "rgb(246,246,246)", border: "1px solid rgb(230,230,230)" }}
      >
        <p className="font-semibold" style={{ fontSize: "18px", color: "rgb(0, 9, 25)" }}>
          ¡Gracias por tu mensaje!
        </p>
        <p className="mt-2" style={{ fontSize: "14px", color: "rgb(51, 51, 51)" }}>
          Nos pondremos en contacto contigo a la mayor brevedad posible.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <InputField
          type="text"
          placeholder="Nombre*"
          value={form.nombre}
          onChange={(v) => setForm({ ...form, nombre: v })}
        />
        <InputField
          type="tel"
          placeholder="Teléfono"
          value={form.telefono}
          onChange={(v) => setForm({ ...form, telefono: v })}
        />
      </div>
      <InputField
        type="email"
        placeholder="Email*"
        value={form.email}
        onChange={(v) => setForm({ ...form, email: v })}
      />
      <InputField
        type="text"
        placeholder="Asunto"
        value={form.asunto}
        onChange={(v) => setForm({ ...form, asunto: v })}
      />
      <textarea
        placeholder="Mensaje*"
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
          He leído y acepto la{" "}
          <a href="/politica-de-privacidad/" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
            Política de Privacidad
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!form.nombre || !form.email || !form.mensaje || !form.privacidad}
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
        Enviar mensaje
      </button>

      <details className="mt-2">
        <summary
          className="cursor-pointer list-none"
          style={{ fontSize: "11px", color: "rgb(120, 120, 120)", textDecoration: "underline" }}
        >
          Información básica sobre protección de datos
        </summary>
        <p className="mt-2" style={{ fontSize: "11px", color: "rgb(120, 120, 120)", lineHeight: "1.6" }}>
          <strong>RESPONSABLE:</strong> Fernando Martínez Alzamora. <strong>FINALIDAD:</strong> Gestionar su
          consulta/petición y dar una respuesta a la misma. <strong>LEGITIMACIÓN:</strong> Su consentimiento.{" "}
          <strong>DESTINATARIOS:</strong> Los datos no se cederán a terceros salvo en los casos en los que exista una
          obligación legal. <strong>DERECHOS:</strong> Puede ejercer sus derechos de acceso, rectificación, oposición,
          limitación, portabilidad y supresión ante el responsable del tratamiento.
        </p>
      </details>
    </form>
  );
}

function NewsletterForm() {
  const [form, setForm] = useState<NewsletterState>({
    nombre: "",
    pais: "",
    empresa: "",
    cargo: "",
    email: "",
    privacidad: false,
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="p-6 text-center">
        <p className="font-semibold" style={{ fontSize: "16px", color: "rgb(0, 9, 25)" }}>
          ¡Te has suscrito correctamente!
        </p>
        <p className="mt-2" style={{ fontSize: "14px", color: "rgb(51, 51, 51)" }}>
          Recibirás noticias y novedades de QGISRed en tu email.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <InputField
          type="text"
          placeholder="Nombre*"
          value={form.nombre}
          onChange={(v) => setForm({ ...form, nombre: v })}
        />
        <InputField
          type="text"
          placeholder="País*"
          value={form.pais}
          onChange={(v) => setForm({ ...form, pais: v })}
        />
        <InputField
          type="text"
          placeholder="Empresa/Institución"
          value={form.empresa}
          onChange={(v) => setForm({ ...form, empresa: v })}
        />
        <InputField
          type="text"
          placeholder="Cargo"
          value={form.cargo}
          onChange={(v) => setForm({ ...form, cargo: v })}
        />
      </div>
      <InputField
        type="email"
        placeholder="Email*"
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
          He leído y acepto la{" "}
          <a href="/politica-de-privacidad/" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
            Política de Privacidad
          </a>
          .
        </span>
      </label>

      <button
        type="submit"
        disabled={!form.nombre || !form.pais || !form.email || !form.privacidad}
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
        Suscribirme
      </button>
    </form>
  );
}

export function ContactoPageContent() {
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
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <h2
            className="font-bold mb-8"
            style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
          >
            ¿Quieres contactar con nosotros?
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
                    Instituto de Ingeniería del Agua y del Medio Ambiente
                    <br />
                    Universitat Politècnica de València
                    <br />
                    Camino de Vera s/n, 46022 Valencia, España
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
                    Redes Sociales
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
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
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
              style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
            >
              Regístrate en nuestra Newsletter
            </h2>
            <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              Regístrate en nuestra Newsletter para estar al día de todas las novedades de QGISRed y las próximas
              formaciones.
            </p>

            <NewsletterForm />
          </div>
        </div>
      </section>
    </main>
  );
}
