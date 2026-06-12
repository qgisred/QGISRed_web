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
  const t = await getTranslations({ locale, namespace: "legalPages.privacyPolicy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PoliticaPrivacidadPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.privacyPolicy" });
  const th = await getTranslations({ locale, namespace: "pageHero" });

  return (
    <>
      <NavBar />
      <PageHero
        title={th("privacyPolicy")}
        backgroundImage="/images/hero-bg.png"
        overlayOpacity={0.7}
      />
      <LegalPageLayout title={t("title")}>
        {locale === "es" ? <PoliticaPrivacidadEs /> : <PrivacyPolicyEn />}
      </LegalPageLayout>
      <Footer />
    </>
  );
}

function PoliticaPrivacidadEs() {
  return (
    <>
      <LegalSection title="1. INFORMACIÓN AL USUARIO">
        <p className="mb-4">
          Fernando Martínez Alzamora en adelante RESPONSABLE, es el Responsable del tratamiento de los datos
          personales del Usuario y le informa que estos datos serán tratados de conformidad con lo dispuesto en las
          normativas vigentes en protección de datos personales, el Reglamento (UE) 2016/679 de 27 de abril de 2016
          (GDPR) relativo a la protección de las personas físicas en lo que respecta al tratamiento de datos personales
          y a la libre circulación de estos datos, por lo que se le facilita la siguiente información del tratamiento:
        </p>
        <p className="mb-3 font-medium">Fin del tratamiento: mantener una relación comercial con el Usuario. Las operaciones previstas para realizar el tratamiento son:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
          <li>Elaboración de Perfiles: el RESPONSABLE también podrá realizar, previo consentimiento del Usuario, una elaboración de perfiles basada en un tratamiento automatizado.</li>
          <li>Criterios de conservación de los datos: se conservarán mientras exista un interés mutuo para mantener el fin del tratamiento.</li>
          <li>Comunicación de los datos: No se comunicarán los datos a terceros, salvo obligación legal.</li>
        </ul>
        <p className="mb-3 font-medium">Derechos que asisten al Usuario:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-1">
          <li>Derecho a retirar el consentimiento en cualquier momento.</li>
          <li>Derecho de acceso, rectificación, portabilidad y supresión de sus datos.</li>
          <li>Derecho de limitación y oposición al tratamiento.</li>
          <li>Derecho a presentar una reclamación ante la Autoridad de control (agpd.es).</li>
        </ul>
        <p className="mb-3 font-medium">Datos de contacto para ejercer sus derechos:</p>
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Dirección postal:</strong> Univ. Politècnica València, IIAMA- Grupo REDHISP, blq 5J – bajo</li>
          <li><strong>Email:</strong>{" "}
            <a href="mailto:fmartine@hma.uvp.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.uvp.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. CARÁCTER OBLIGATORIO O FACULTATIVO DE LA INFORMACIÓN FACILITADA POR EL USUARIO">
        <p className="mb-4">
          Los Usuarios, mediante la marcación de las casillas correspondientes y entrada de datos en los campos,
          marcados con un asterisco (*) en el formulario de contacto o presentados en formularios de descarga, aceptan
          expresamente y de forma libre e inequívoca, que sus datos son necesarios para atender su petición, por parte
          del prestador, siendo voluntaria la inclusión de datos en los campos restantes.
        </p>
        <p>
          El RESPONSABLE informa y garantiza expresamente a los usuarios que sus datos personales no serán cedidos en
          ningún caso a terceros, y que siempre que realizara algún tipo de cesión de datos personales, se pedirá
          previamente el consentimiento expreso, informado e inequívoco por parte los Usuarios.
        </p>
      </LegalSection>

      <LegalSection title="3. MEDIDAS DE SEGURIDAD">
        <p className="mb-4">
          Que de conformidad con lo dispuesto en las normativas vigentes en protección de datos personales, el
          RESPONSABLE está cumpliendo con todas las disposiciones de las normativas GDPR para el tratamiento de los
          datos personales de su responsabilidad, y manifiestamente con los principios descritos en el artículo 5 del
          GDPR.
        </p>
        <p>
          El RESPONSABLE garantiza que ha implementado políticas técnicas y organizativas apropiadas para aplicar las
          medidas de seguridad que establecen el GDPR con el fin de proteger los derechos y libertades de los Usuarios.
        </p>
      </LegalSection>

      <LegalSection title="4. LEY APLICABLE Y JURISDICCIÓN">
        <p>
          Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las
          actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten
          expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o
          relacionados con su uso los Juzgados y Tribunales más cercanos a Valencia.
        </p>
      </LegalSection>
    </>
  );
}

function PrivacyPolicyEn() {
  return (
    <>
      <LegalSection title="1. INFORMATION TO THE USER">
        <p className="mb-4">
          Fernando Martínez Alzamora, hereinafter THE CONTROLLER, is responsible for processing the User&apos;s
          personal data and informs the User that such data will be processed in accordance with the provisions of
          current personal data protection regulations, Regulation (EU) 2016/679 of 27 April 2016 (GDPR) on the
          protection of natural persons with regard to the processing of personal data and on the free movement of such
          data.
        </p>
        <p className="mb-3 font-medium">Purpose of processing: to maintain a commercial relationship with the User. The envisaged processing operations are:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
          <li>Profiling: THE CONTROLLER may also, with prior User consent, carry out profiling based on automated processing.</li>
          <li>Data retention criteria: data will be retained for as long as there is a mutual interest in maintaining the purpose of the processing.</li>
          <li>Communication of data: data will not be communicated to third parties except in cases of legal obligation.</li>
        </ul>
        <p className="mb-3 font-medium">User rights:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-1">
          <li>Right to withdraw consent at any time.</li>
          <li>Right of access, rectification, portability and erasure of your data.</li>
          <li>Right to restriction and objection to processing.</li>
          <li>Right to lodge a complaint with the supervisory authority (aepd.es).</li>
        </ul>
        <p className="mb-3 font-medium">Contact details to exercise your rights:</p>
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Postal address:</strong> Univ. Politècnica València, IIAMA- Grupo REDHISP, blq 5J – bajo</li>
          <li><strong>Email:</strong>{" "}
            <a href="mailto:fmartine@hma.uvp.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.uvp.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. MANDATORY OR OPTIONAL NATURE OF INFORMATION PROVIDED BY THE USER">
        <p className="mb-4">
          Users, by checking the corresponding boxes and entering data in the fields marked with an asterisk (*) in
          the contact form or presented in download forms, expressly and freely and unequivocally accept that their
          data is necessary to address their request from the provider, while inclusion of data in the remaining fields
          is voluntary.
        </p>
        <p>
          THE CONTROLLER expressly informs and guarantees users that their personal data will not under any
          circumstances be transferred to third parties.
        </p>
      </LegalSection>

      <LegalSection title="3. SECURITY MEASURES">
        <p className="mb-4">
          In accordance with the provisions of current personal data protection regulations, THE CONTROLLER complies
          with all provisions of the GDPR regulations for the processing of personal data for which it is responsible,
          and manifestly with the principles described in Article 5 of the GDPR.
        </p>
        <p>
          THE CONTROLLER guarantees that it has implemented appropriate technical and organisational policies to apply
          the security measures established by the GDPR in order to protect the rights and freedoms of Users.
        </p>
      </LegalSection>

      <LegalSection title="4. APPLICABLE LAW AND JURISDICTION">
        <p>
          For the resolution of all disputes or matters relating to this website or the activities carried out thereon,
          Spanish legislation shall apply, to which the parties expressly submit, with the Courts and Tribunals closest
          to Valencia being competent to resolve all disputes arising from or related to its use.
        </p>
      </LegalSection>
    </>
  );
}
