import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
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
  const t = await getTranslations({ locale, namespace: "legalPages.legalNotice" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function AvisoLegalPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legalPages.legalNotice" });
  const th = await getTranslations({ locale, namespace: "pageHero" });

  return (
    <>
      <NavBar />
      <PageHero
        title={th("legalNotice")}
        backgroundImage="/images/hero-bg.png"
        overlayOpacity={0.7}
      />
      <LegalPageLayout title={t("title")}>
        {locale === "es" ? <AvisoLegalEs /> : <LegalWarningEn />}
      </LegalPageLayout>
      <Footer />
    </>
  );
}

function AvisoLegalEs() {
  return (
    <>
      <LegalSection>
        <p className="font-semibold mb-3">LEY DE LOS SERVICIOS DE LA SOCIEDAD DE LA INFORMACIÓN (LSSI)</p>
        <p className="mb-4">
          Fernando Martínez Alzamora, responsable del sitio web, en adelante RESPONSABLE, pone a disposición de los
          usuarios el presente documento, con el que pretende dar cumplimiento a las obligaciones dispuestas en la Ley
          34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de Comercio Electrónico (LSSICE),
          BOE Nº 166, así como informar a todos los usuarios del sitio web respecto a cuáles son las condiciones de
          uso. Toda persona que acceda a este sitio web asume el papel de usuario, comprometiéndose a la observancia y
          cumplimiento riguroso de las disposiciones aquí dispuestas, así como a cualquier otra disposición legal que
          fuera de aplicación.
        </p>
        <p className="mb-4">
          Fernando Martínez Alzamora se reserva el derecho de modificar cualquier tipo de información que pudiera
          aparecer en el sitio web, sin que exista obligación de preavisar o poner en conocimiento de los usuarios
          dichas obligaciones, entendiéndose como suficiente con la publicación en el sitio web de QGISRed.
        </p>
      </LegalSection>

      <LegalSection title="1. DATOS IDENTIFICATIVOS">
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Nombre de dominio:</strong> qgisred.upv.es y qgisred.webs.upv.es</li>
          <li><strong>Nombre comercial:</strong> QGISRed</li>
          <li><strong>Titular de la web:</strong> Fernando Martínez Alzamora</li>
          <li><strong>NIF:</strong> 19.827.162N</li>
          <li><strong>Domicilio social:</strong> Univ. Politècnica València. IIAMA</li>
          <li><strong>Teléfono:</strong> 963879610</li>
          <li><strong>e-mail:</strong>{" "}
            <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.upv.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. DERECHOS DE PROPIEDAD INTELECTUAL E INDUSTRIAL">
        <p className="mb-4">
          El sitio web, incluyendo a título enunciativo pero no limitativo su programación, edición, compilación y
          demás elementos necesarios para su funcionamiento, los diseños, logotipos, texto y/o gráficos, son propiedad
          del RESPONSABLE o, si es el caso, dispone de licencia o autorización expresa por parte de los autores. Todos
          los contenidos del sitio web se encuentran debidamente protegidos por la normativa de propiedad intelectual e
          industrial, así como inscritos en los registros públicos correspondientes.
        </p>
        <p className="mb-4">
          Independientemente de la finalidad para la que fueran destinados, la reproducción total o parcial, uso,
          explotación, distribución y comercialización, requiere en todo caso de la autorización escrita previa por
          parte del RESPONSABLE. Cualquier uso no autorizado previamente se considera un incumplimiento grave de los
          derechos de propiedad intelectual o industrial del autor.
        </p>
        <p className="mb-4">
          Los diseños, logotipos, texto y/o gráficos ajenos al RESPONSABLE y que pudieran aparecer en el sitio web,
          pertenecen a sus respectivos propietarios, siendo ellos mismos responsables de cualquier posible controversia
          que pudiera suscitarse respecto a los mismos. El RESPONSABLE autoriza expresamente a que terceros puedan
          redirigir directamente a los contenidos concretos del sitio web, y en todo caso redirigir al sitio web
          principal de QGISRed.
        </p>
        <p className="mb-4">
          El RESPONSABLE reconoce a favor de sus titulares los correspondientes derechos de propiedad intelectual e
          industrial, no implicando su sola mención o aparición en el sitio web la existencia de derechos o
          responsabilidad alguna sobre los mismos, como tampoco respaldo, patrocinio o recomendación por parte del
          mismo.
        </p>
        <p>
          Para realizar cualquier tipo de observación respecto a posibles incumplimientos de los derechos de propiedad
          intelectual o industrial, así como sobre cualquiera de los contenidos del sitio web, puede hacerlo a través
          del correo electrónico{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. EXENCIÓN DE RESPONSABILIDADES">
        <p className="mb-4">
          El RESPONSABLE se exime de cualquier tipo de responsabilidad derivada de la información publicada en su
          sitio web siempre que esta información haya sido manipulada o introducida por un tercero ajeno al mismo.
        </p>
        <p className="mb-3 font-semibold">Uso de Cookies</p>
        <p className="mb-4">
          Este sitio web puede utilizar cookies técnicas (pequeños archivos de información que el servidor envía al
          ordenador de quien accede a la página) para llevar a cabo determinadas funciones que son consideradas
          imprescindibles para el correcto funcionamiento y visualización del sitio. Las cookies utilizadas tienen, en
          todo caso, carácter temporal, con la única finalidad de hacer más eficaz la navegación, y desaparecen al
          terminar la sesión del usuario. En ningún caso, estas cookies proporcionan por sí mismas datos de carácter
          personal y no se utilizarán para la recogida de los mismos.
        </p>
        <p className="mb-4">
          El usuario tiene la posibilidad de configurar su navegador para ser alertado de la recepción de cookies y
          para impedir su instalación en su equipo.
        </p>
        <p className="mb-3 font-semibold">Política de enlaces</p>
        <p className="mb-4">
          Desde el sitio web, es posible que se redirija a contenidos de terceros sitios web. Dado que el RESPONSABLE
          no puede controlar siempre los contenidos introducidos por los terceros en sus respectivos sitios web, no
          asume ningún tipo de responsabilidad respecto a dichos contenidos.
        </p>
        <p className="mb-4">
          Este sitio web ha sido revisado y probado para que funcione correctamente. Sin embargo, el RESPONSABLE no
          descarta la posibilidad de que existan ciertos errores de programación, o que acontezcan causas de fuerza
          mayor que hagan imposible el acceso a la página web.
        </p>
        <p className="mb-3 font-semibold">Direcciones IP</p>
        <p>
          Los servidores del sitio web podrán detectar de manera automática la dirección IP y el nombre de dominio
          utilizados por el usuario. Una dirección IP es un número asignado automáticamente a un ordenador cuando éste
          se conecta a Internet. Toda esta información es registrada en un fichero de actividad del servidor
          debidamente inscrito que permite el posterior procesamiento de los datos con el fin de obtener mediciones
          únicamente estadísticas.
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

function LegalWarningEn() {
  return (
    <>
      <LegalSection>
        <p className="font-semibold mb-3">INFORMATION SOCIETY SERVICES ACT</p>
        <p className="mb-4">
          Fernando Martínez Alzamora, website owner, hereinafter THE CONTROLLER, makes this document available to
          users in order to comply with the obligations set out in Law 34/2002 of 11 July on Information Society
          Services and Electronic Commerce (LSSICE), BOE No 166, as well as to inform all users of the website about
          the conditions of use. Any person accessing this website assumes the role of user, undertaking to observe and
          strictly comply with the provisions set out herein, as well as any other applicable legal provision.
        </p>
        <p className="mb-4">
          Fernando Martínez Alzamora reserves the right to modify any type of information that may appear on the
          website, without any obligation to give prior notice or inform users of such changes, it being sufficient to
          publish such changes on the QGISRed website.
        </p>
      </LegalSection>

      <LegalSection title="1. IDENTIFYING INFORMATION">
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Domain name:</strong> qgisred.upv.es and qgisred.webs.upv.es</li>
          <li><strong>Trade name:</strong> QGISRed</li>
          <li><strong>Website owner:</strong> Fernando Martínez Alzamora</li>
          <li><strong>Tax ID:</strong> 19.827.162N</li>
          <li><strong>Registered address:</strong> Univ. Politècnica València. IIAMA</li>
          <li><strong>Phone:</strong> 963879610</li>
          <li><strong>e-mail:</strong>{" "}
            <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.upv.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. INTELLECTUAL AND INDUSTRIAL PROPERTY RIGHTS">
        <p className="mb-4">
          The website, including but not limited to its programming, editing, compilation and other elements necessary
          for its operation, designs, logos, text and/or graphics, are the property of THE CONTROLLER or, where
          applicable, they hold an express licence or authorisation from the authors. All website content is duly
          protected by intellectual and industrial property regulations and is registered in the corresponding public
          registries.
        </p>
        <p>
          Regardless of the intended purpose, total or partial reproduction, use, exploitation, distribution and
          commercialisation require prior written authorisation from THE CONTROLLER. Any previously unauthorised use
          is considered a serious breach of the author&apos;s intellectual or industrial property rights.
        </p>
      </LegalSection>

      <LegalSection title="3. EXEMPTION FROM LIABILITY">
        <p className="mb-4">
          THE CONTROLLER is exempt from any liability arising from information published on the website provided that
          such information has been manipulated or entered by a third party unrelated to THE CONTROLLER.
        </p>
        <p className="mb-4">
          This website has been reviewed and tested to ensure it works correctly. However, THE CONTROLLER does not rule
          out the possibility of certain programming errors, or the occurrence of force majeure, natural disasters,
          strikes or similar circumstances that make it impossible to access the website.
        </p>
      </LegalSection>

      <LegalSection title="4. APPLICABLE LAW AND JURISDICTION">
        <p>
          For the resolution of all disputes or matters relating to this website or the activities carried out thereon,
          Spanish legislation shall apply, to which the parties expressly submit, with the Courts and Tribunals
          closest to Valencia being competent to resolve all disputes arising from or related to its use.
        </p>
      </LegalSection>
    </>
  );
}
