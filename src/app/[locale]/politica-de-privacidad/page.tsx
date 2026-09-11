import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";

// Spanish URL only — the English one is `/privacy-policy` (generated from
// `../privacy-policy/page.tsx`), the French one is
// `/politique-de-confidentialite` (generated from
// `../politique-de-confidentialite/page.tsx`), and the Portuguese one is
// `/politica-de-privacidade` (generated from
// `../politica-de-privacidade/page.tsx`). See `src/i18n/routing.ts`.
export function generateStaticParams() {
  return [{ locale: "es" }];
}

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
        {locale === "es" ? <PoliticaPrivacidadEs />
          : locale === "fr" ? <PoliticaPrivacidadFr />
          : locale === "pt" ? <PoliticaPrivacidadPt />
          : <PrivacyPolicyEn />}
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

function PoliticaPrivacidadFr() {
  return (
    <>
      <LegalSection title="1. INFORMATION À L'UTILISATEUR">
        <p className="mb-4">
          Fernando Martínez Alzamora, ci-après le RESPONSABLE, est le Responsable du traitement des données
          personnelles de l&apos;Utilisateur et l&apos;informe que ces données seront traitées conformément aux
          dispositions de la réglementation en vigueur en matière de protection des données personnelles, le
          Règlement (UE) 2016/679 du 27 avril 2016 (RGPD) relatif à la protection des personnes physiques à
          l&apos;égard du traitement des données à caractère personnel et à la libre circulation de ces données, les
          informations de traitement suivantes lui étant ainsi communiquées :
        </p>
        <p className="mb-3 font-medium">Finalité du traitement : maintenir une relation commerciale avec l&apos;Utilisateur. Les opérations prévues pour réaliser le traitement sont :</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
          <li>Élaboration de profils : le RESPONSABLE pourra également réaliser, avec le consentement préalable de l&apos;Utilisateur, une élaboration de profils basée sur un traitement automatisé.</li>
          <li>Critères de conservation des données : elles seront conservées tant qu&apos;il existera un intérêt mutuel à maintenir la finalité du traitement.</li>
          <li>Communication des données : les données ne seront pas communiquées à des tiers, sauf obligation légale.</li>
        </ul>
        <p className="mb-3 font-medium">Droits dont bénéficie l&apos;Utilisateur :</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-1">
          <li>Droit de retirer son consentement à tout moment.</li>
          <li>Droit d&apos;accès, de rectification, de portabilité et de suppression de ses données.</li>
          <li>Droit de limitation et d&apos;opposition au traitement.</li>
          <li>Droit d&apos;introduire une réclamation auprès de l&apos;Autorité de contrôle (agpd.es).</li>
        </ul>
        <p className="mb-3 font-medium">Coordonnées pour exercer vos droits :</p>
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Adresse postale :</strong> Univ. Politècnica València, IIAMA- Grupo REDHISP, blq 5J – bajo</li>
          <li><strong>Email :</strong>{" "}
            <a href="mailto:fmartine@hma.uvp.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.uvp.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. CARACTÈRE OBLIGATOIRE OU FACULTATIF DE L'INFORMATION FOURNIE PAR L'UTILISATEUR">
        <p className="mb-4">
          Les Utilisateurs, en cochant les cases correspondantes et en saisissant des données dans les champs marqués
          d&apos;un astérisque (*) dans le formulaire de contact ou présentés dans les formulaires de téléchargement,
          acceptent expressément et de manière libre et non équivoque que leurs données sont nécessaires pour
          répondre à leur demande de la part du prestataire, la saisie de données dans les autres champs étant
          facultative.
        </p>
        <p>
          Le RESPONSABLE informe et garantit expressément aux utilisateurs que leurs données personnelles ne seront
          en aucun cas cédées à des tiers, et que si une cession de données personnelles devait avoir lieu, le
          consentement exprès, informé et non équivoque des Utilisateurs serait préalablement demandé.
        </p>
      </LegalSection>

      <LegalSection title="3. MESURES DE SÉCURITÉ">
        <p className="mb-4">
          Conformément aux dispositions de la réglementation en vigueur en matière de protection des données
          personnelles, le RESPONSABLE se conforme à toutes les dispositions du RGPD pour le traitement des données
          personnelles relevant de sa responsabilité, et manifestement aux principes décrits à l&apos;article 5 du
          RGPD.
        </p>
        <p>
          Le RESPONSABLE garantit avoir mis en œuvre des politiques techniques et organisationnelles appropriées pour
          appliquer les mesures de sécurité établies par le RGPD afin de protéger les droits et libertés des
          Utilisateurs.
        </p>
      </LegalSection>

      <LegalSection title="4. LOI APPLICABLE ET JURIDICTION">
        <p>
          Pour la résolution de tous les litiges ou questions relatifs au présent site web ou aux activités qui y
          sont développées, la législation espagnole sera d&apos;application, à laquelle les parties se soumettent
          expressément, les Tribunaux les plus proches de Valence étant compétents pour la résolution de tous les
          conflits découlant de ou liés à son utilisation.
        </p>
      </LegalSection>
    </>
  );
}

function PoliticaPrivacidadPt() {
  return (
    <>
      <LegalSection title="1. INFORMAÇÃO AO USUÁRIO">
        <p className="mb-4">
          Fernando Martínez Alzamora, doravante RESPONSÁVEL, é o Responsável pelo tratamento dos dados pessoais do
          Usuário e informa que esses dados serão tratados em conformidade com o disposto nas normas vigentes em
          matéria de proteção de dados pessoais, o Regulamento (UE) 2016/679, de 27 de abril de 2016 (GDPR), relativo
          à proteção das pessoas físicas no que diz respeito ao tratamento de dados pessoais e à livre circulação
          desses dados, sendo-lhe fornecidas, portanto, as seguintes informações sobre o tratamento:
        </p>
        <p className="mb-3 font-medium">Finalidade do tratamento: manter uma relação comercial com o Usuário. As operações previstas para realizar o tratamento são:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-2">
          <li>Elaboração de Perfis: o RESPONSÁVEL também poderá realizar, mediante consentimento prévio do Usuário, uma elaboração de perfis baseada em tratamento automatizado.</li>
          <li>Critérios de conservação dos dados: serão conservados enquanto existir um interesse mútuo em manter a finalidade do tratamento.</li>
          <li>Comunicação dos dados: os dados não serão comunicados a terceiros, salvo obrigação legal.</li>
        </ul>
        <p className="mb-3 font-medium">Direitos que assistem ao Usuário:</p>
        <ul className="list-disc pl-6 mb-4 flex flex-col gap-1">
          <li>Direito de retirar o consentimento a qualquer momento.</li>
          <li>Direito de acesso, retificação, portabilidade e supressão dos seus dados.</li>
          <li>Direito de limitação e oposição ao tratamento.</li>
          <li>Direito de apresentar uma reclamação perante a Autoridade de controle (agpd.es).</li>
        </ul>
        <p className="mb-3 font-medium">Dados de contato para exercer os seus direitos:</p>
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Endereço postal:</strong> Univ. Politècnica València, IIAMA- Grupo REDHISP, blq 5J – bajo</li>
          <li><strong>Email:</strong>{" "}
            <a href="mailto:fmartine@hma.uvp.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.uvp.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. CARÁTER OBRIGATÓRIO OU FACULTATIVO DA INFORMAÇÃO FORNECIDA PELO USUÁRIO">
        <p className="mb-4">
          Os Usuários, ao marcar as caixas correspondentes e inserir dados nos campos assinalados com um asterisco (*)
          no formulário de contato ou apresentados em formulários de download, aceitam expressamente e de forma livre
          e inequívoca que os seus dados são necessários para atender à sua solicitação por parte do prestador, sendo
          voluntária a inclusão de dados nos campos restantes.
        </p>
        <p>
          O RESPONSÁVEL informa e garante expressamente aos usuários que os seus dados pessoais não serão cedidos em
          nenhum caso a terceiros, e que, sempre que for realizada alguma cessão de dados pessoais, será solicitado
          previamente o consentimento expresso, informado e inequívoco dos Usuários.
        </p>
      </LegalSection>

      <LegalSection title="3. MEDIDAS DE SEGURANÇA">
        <p className="mb-4">
          Em conformidade com o disposto nas normas vigentes em matéria de proteção de dados pessoais, o RESPONSÁVEL
          está cumprindo todas as disposições das normas do GDPR para o tratamento dos dados pessoais sob sua
          responsabilidade, e manifestamente com os princípios descritos no artigo 5 do GDPR.
        </p>
        <p>
          O RESPONSÁVEL garante que implementou políticas técnicas e organizacionais apropriadas para aplicar as
          medidas de segurança estabelecidas pelo GDPR, com o objetivo de proteger os direitos e liberdades dos
          Usuários.
        </p>
      </LegalSection>

      <LegalSection title="4. LEI APLICÁVEL E JURISDIÇÃO">
        <p>
          Para a resolução de todas as controvérsias ou questões relacionadas com o presente site ou com as
          atividades nele desenvolvidas, será aplicável a legislação espanhola, à qual as partes se submetem
          expressamente, sendo competentes para a resolução de todos os conflitos derivados ou relacionados com o seu
          uso os Juizados e Tribunais mais próximos de Valência.
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
