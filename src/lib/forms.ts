const STATICFORMS_ENDPOINT = "https://api.staticforms.dev/submit";

export const STATICFORMS_API_KEY = process.env.NEXT_PUBLIC_STATICFORMS_KEY ?? "";
export const BREVO_FORM_URL = process.env.NEXT_PUBLIC_BREVO_FORM_URL ?? "";

export type SubmitStatus = "idle" | "sending" | "success" | "error";

export interface ContactPayload {
  origen: string;
  nombre: string;
  email: string;
  mensaje: string;
  telefono?: string;
  asunto?: string;
  empresa?: string;
}

interface StaticFormsResponse {
  success?: boolean;
  message?: string;
  error?: string;
}

export async function sendContactMessage(payload: ContactPayload): Promise<void> {
  if (!STATICFORMS_API_KEY) {
    throw new Error("El formulario no está configurado (falta NEXT_PUBLIC_STATICFORMS_KEY).");
  }

  const response = await fetch(STATICFORMS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json", Accept: "application/json" },
    body: JSON.stringify({
      apiKey: STATICFORMS_API_KEY,
      subject: `[QGISRed · ${payload.origen}] ${payload.asunto || "Nuevo mensaje desde la web"}`,
      replyTo: payload.email,
      honeypot: "",
      Origen: payload.origen,
      Nombre: payload.nombre,
      Email: payload.email,
      Teléfono: payload.telefono || "—",
      Empresa: payload.empresa || "—",
      Asunto: payload.asunto || "—",
      Mensaje: payload.mensaje,
    }),
  });

  const result = (await response.json()) as StaticFormsResponse;
  if (!response.ok || result.success !== true) {
    throw new Error(result.error ?? result.message ?? "No se ha podido enviar el mensaje.");
  }
}

export interface NewsletterPayload {
  email: string;
  locale: string;
  nombre?: string;
  pais?: string;
  empresa?: string;
  cargo?: string;
}

export async function subscribeToNewsletter(payload: NewsletterPayload): Promise<void> {
  if (!BREVO_FORM_URL) {
    throw new Error("La newsletter no está configurada (falta NEXT_PUBLIC_BREVO_FORM_URL).");
  }

  const body = new URLSearchParams({
    EMAIL: payload.email,
    locale: payload.locale,
    html_type: "simple",
    email_address_check: "",
  });
  if (payload.nombre) body.set("NOMBRE", payload.nombre);
  if (payload.pais) body.set("PAIS", payload.pais);
  if (payload.empresa) body.set("EMPRESA", payload.empresa);
  if (payload.cargo) body.set("CARGO", payload.cargo);

  await fetch(BREVO_FORM_URL, {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });
}
