import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.cookiesPolicy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PoliticaCookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.cookiesPolicy" });
  const th = await getTranslations({ locale, namespace: "pageHero" });

  return (
    <>
      <NavBar />
      <PageHero
        title={th("cookiesPolicy")}
        backgroundImage="/images/hero-bg.png"
        overlayOpacity={0.7}
      />
      <LegalPageLayout title={t("title")}>
        {locale === "es" ? <PoliticaCookiesEs /> : <CookiesPolicyEn />}
      </LegalPageLayout>
      <Footer />
    </>
  );
}

function PoliticaCookiesEs() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          Esta política de cookies fue actualizada por última vez el julio 15, 2022 y se aplica a los ciudadanos y
          residentes legales permanentes del Espacio Económico Europeo y Suiza.
        </p>
      </LegalSection>

      <LegalSection title="1. Introducción">
        <p>
          Nuestra web, https://qgisred.upv.es utiliza cookies y otras tecnologías relacionadas (para mayor comodidad,
          todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos
          contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena
          en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros
          servidores o a los servidores de terceros apropiados durante una visita posterior.
        </p>
      </LegalSection>

      <LegalSection title="3. ¿Qué son los scripts?">
        <p>
          Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione
          correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.
        </p>
      </LegalSection>

      <LegalSection title="4. ¿Qué es una baliza web?">
        <p>
          Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que
          se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante
          estas balizas web.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Cookies técnicas o funcionales</strong><br />
          Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de
          usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. Podemos
          colocar estas cookies sin tu consentimiento.
        </p>
        <p className="mb-4">
          <strong>5.2 Cookies de estadísticas</strong><br />
          Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas
          cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar
          cookies de estadísticas.
        </p>
        <p className="mb-4">
          <strong>5.3 Cookies de marketing/seguimiento</strong><br />
          Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para
          crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en
          varias webs con fines de marketing similares.
        </p>
        <p>
          <strong>5.4 Redes sociales</strong><br />
          En nuestra web hemos incluido contenido de X (Formerly Twitter) para promover páginas web o compartir en
          redes sociales. Este contenido está incrustado con código derivado de X (Formerly Twitter) y guarda cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies usadas">
        <p className="mb-4">
          Usamos cookies de: <strong>Elementor</strong>, <strong>WordPress</strong>, <strong>Polylang</strong>,{" "}
          <strong>mailpoet</strong>, <strong>Google Analytics</strong>, <strong>Google reCAPTCHA</strong>,{" "}
          <strong>YouTube</strong> y <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consentimiento">
        <p>
          Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre
          las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de
          cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de
          cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que
          nuestra web puede dejar de funcionar correctamente.
        </p>
      </LegalSection>

      <LegalSection title="8. Activación/desactivación y borrado de cookies">
        <p>
          Puedes utilizar tu navegador de Internet para eliminar automáticamente o manualmente las cookies. También
          puedes especificar que determinadas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu
          navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie.
        </p>
      </LegalSection>

      <LegalSection title="9. Tus derechos con respecto a los datos personales">
        <p>
          Tienes los siguientes derechos con respecto a tus datos personales: derecho de acceso, rectificación,
          portabilidad y supresión de tus datos, derecho de limitación y oposición al tratamiento, y derecho a
          presentar una reclamación ante la Autoridad de control (agpd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Datos de contacto">
        <p>
          Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor contáctanos
          por email:{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}

function CookiesPolicyEn() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          This cookies policy was last updated on July 15, 2022 and applies to citizens and permanent legal residents
          of the European Economic Area and Switzerland.
        </p>
      </LegalSection>

      <LegalSection title="1. Introduction">
        <p>
          Our website, https://qgisred.upv.es uses cookies and other related technologies (for convenience, all
          technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have
          engaged. In the following document we inform you about the use of cookies on our website.
        </p>
      </LegalSection>

      <LegalSection title="2. What are cookies?">
        <p>
          A cookie is a small file that is sent along with the pages of this website and stored by your browser on the
          hard drive of your computer or other device. The information stored can be returned to our servers or to the
          servers of the relevant third parties during a subsequent visit.
        </p>
      </LegalSection>

      <LegalSection title="3. What are scripts?">
        <p>
          A script is a piece of program code that is used to make our website function properly and interactively.
          This code is executed on our server or on your device.
        </p>
      </LegalSection>

      <LegalSection title="4. What is a web beacon?">
        <p>
          A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to
          monitor traffic on a website. In order to do this, various data about you is stored using web beacons.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Technical or functional cookies</strong><br />
          Some cookies ensure that certain parts of the website work properly and that your user preferences remain
          known. By placing functional cookies, we make it easier for you to visit our website. We may place these
          cookies without your consent.
        </p>
        <p className="mb-4">
          <strong>5.2 Statistics cookies</strong><br />
          We use statistics cookies to optimise the website experience for our users. With these statistics cookies we
          get insights into the use of our website. We ask your permission to place statistics cookies.
        </p>
        <p className="mb-4">
          <strong>5.3 Marketing/tracking cookies</strong><br />
          Marketing/tracking cookies are cookies, or any other form of local storage, used to create user profiles to
          display advertising or to track the user on this website or across several websites for similar marketing
          purposes.
        </p>
        <p>
          <strong>5.4 Social networks</strong><br />
          On our website we have included content from X (Formerly Twitter) to promote web pages or share on social
          networks. This content is embedded with code derived from X (Formerly Twitter) and places cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies used">
        <p className="mb-4">
          We use cookies from: <strong>Elementor</strong>, <strong>WordPress</strong>, <strong>Polylang</strong>,{" "}
          <strong>mailpoet</strong>, <strong>Google Analytics</strong>, <strong>Google reCAPTCHA</strong>,{" "}
          <strong>YouTube</strong> and <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consent">
        <p>
          When you first visit our website, we will show you a pop-up with an explanation about cookies. As soon as
          you click on &quot;Save preferences&quot;, you consent to us using the categories of cookies and plugins you
          selected in the pop-up, as described in this cookies policy. You can disable the use of cookies via your
          browser, but please note that our website may no longer work properly.
        </p>
      </LegalSection>

      <LegalSection title="8. Enabling/disabling and deleting cookies">
        <p>
          You can use your internet browser to automatically or manually delete cookies. You can also specify that
          certain cookies may not be placed. Another option is to change the settings of your internet browser so that
          you receive a message each time a cookie is placed.
        </p>
      </LegalSection>

      <LegalSection title="9. Your rights with respect to personal data">
        <p>
          You have the following rights with respect to your personal data: rights of access, rectification,
          portability and erasure of your data, rights to restriction and objection to processing, and the right to
          lodge a complaint with the supervisory authority (aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Contact details">
        <p>
          For questions and/or comments about our cookies policy and this statement, please contact us by email:{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}
