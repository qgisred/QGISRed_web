import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";

// Spanish AND Portuguese URL (both happen to use the word "aviso-legal") — the
// English one is `/legal-notice`, generated from `../legal-notice/page.tsx`,
// and the French one is `/mentions-legales`, generated from
// `../mentions-legales/page.tsx`. See `src/i18n/routing.ts`.
export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "pt" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
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
  setRequestLocale(locale);
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
        {locale === "es" ? <AvisoLegalEs />
          : locale === "fr" ? <AvisoLegalFr />
          : locale === "pt" ? <AvisoLegalPt />
          : <LegalWarningEn />}
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

function AvisoLegalFr() {
  return (
    <>
      <LegalSection>
        <p className="font-semibold mb-3">LOI RELATIVE AUX SERVICES DE LA SOCIÉTÉ DE L&apos;INFORMATION (LSSI)</p>
        <p className="mb-4">
          Fernando Martínez Alzamora, responsable du site web, ci-après le RESPONSABLE, met à la disposition des
          utilisateurs le présent document, avec lequel il entend se conformer aux obligations prévues par la loi
          espagnole 34/2002 du 11 juillet relative aux Services de la Société de l&apos;Information et au Commerce
          Électronique (LSSICE), BOE n° 166, ainsi qu&apos;informer tous les utilisateurs du site web des conditions
          d&apos;utilisation. Toute personne accédant à ce site web assume le rôle d&apos;utilisateur et s&apos;engage
          à respecter scrupuleusement les dispositions énoncées ici, ainsi que toute autre disposition légale
          applicable.
        </p>
        <p className="mb-4">
          Fernando Martínez Alzamora se réserve le droit de modifier toute information pouvant apparaître sur le site
          web, sans obligation de préavis ni d&apos;information préalable des utilisateurs, la publication sur le
          site web de QGISRed étant considérée comme suffisante.
        </p>
      </LegalSection>

      <LegalSection title="1. DONNÉES D'IDENTIFICATION">
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Nom de domaine :</strong> qgisred.upv.es et qgisred.webs.upv.es</li>
          <li><strong>Nom commercial :</strong> QGISRed</li>
          <li><strong>Titulaire du site web :</strong> Fernando Martínez Alzamora</li>
          <li><strong>NIF :</strong> 19.827.162N</li>
          <li><strong>Siège social :</strong> Univ. Politècnica València. IIAMA</li>
          <li><strong>Téléphone :</strong> 963879610</li>
          <li><strong>e-mail :</strong>{" "}
            <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.upv.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. DROITS DE PROPRIÉTÉ INTELLECTUELLE ET INDUSTRIELLE">
        <p className="mb-4">
          Le site web, y compris, à titre indicatif mais non limitatif, sa programmation, son édition, sa
          compilation et les autres éléments nécessaires à son fonctionnement, les créations graphiques, logos,
          textes et/ou graphismes, sont la propriété du RESPONSABLE ou, le cas échéant, celui-ci dispose d&apos;une
          licence ou d&apos;une autorisation expresse de la part des auteurs. Tous les contenus du site web sont
          dûment protégés par la réglementation en matière de propriété intellectuelle et industrielle, et inscrits
          dans les registres publics correspondants.
        </p>
        <p className="mb-4">
          Quelle que soit la finalité à laquelle ils seraient destinés, la reproduction totale ou partielle,
          l&apos;utilisation, l&apos;exploitation, la distribution et la commercialisation nécessitent, dans tous les
          cas, l&apos;autorisation écrite préalable du RESPONSABLE. Toute utilisation non préalablement autorisée est
          considérée comme une atteinte grave aux droits de propriété intellectuelle ou industrielle de l&apos;auteur.
        </p>
        <p className="mb-4">
          Les créations graphiques, logos, textes et/ou graphismes étrangers au RESPONSABLE et pouvant apparaître sur
          le site web appartiennent à leurs propriétaires respectifs, qui sont eux-mêmes responsables de toute
          controverse pouvant survenir à leur sujet. Le RESPONSABLE autorise expressément les tiers à rediriger
          directement vers des contenus précis du site web, et dans tous les cas à rediriger vers le site web
          principal de QGISRed.
        </p>
        <p className="mb-4">
          Le RESPONSABLE reconnaît en faveur de leurs titulaires les droits de propriété intellectuelle et
          industrielle correspondants, leur seule mention ou apparition sur le site web n&apos;impliquant
          l&apos;existence d&apos;aucun droit ni responsabilité à leur égard, ni aucun appui, parrainage ou
          recommandation de sa part.
        </p>
        <p>
          Pour toute observation concernant d&apos;éventuelles atteintes aux droits de propriété intellectuelle ou
          industrielle, ainsi que sur tout contenu du site web, vous pouvez le faire par courrier électronique à{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. EXONÉRATION DE RESPONSABILITÉ">
        <p className="mb-4">
          Le RESPONSABLE dégage sa responsabilité pour toute information publiée sur son site web dès lors que cette
          information aurait été manipulée ou introduite par un tiers qui lui est étranger.
        </p>
        <p className="mb-3 font-semibold">Utilisation des cookies</p>
        <p className="mb-4">
          Ce site web peut utiliser des cookies techniques (petits fichiers d&apos;information que le serveur envoie
          à l&apos;ordinateur de la personne accédant à la page) pour exécuter certaines fonctions considérées comme
          indispensables au bon fonctionnement et à l&apos;affichage du site. Les cookies utilisés ont, dans tous les
          cas, un caractère temporaire, dans le seul but de rendre la navigation plus efficace, et disparaissent à la
          fin de la session de l&apos;utilisateur. En aucun cas ces cookies ne fournissent en eux-mêmes des données à
          caractère personnel et ils ne seront pas utilisés pour leur collecte.
        </p>
        <p className="mb-4">
          L&apos;utilisateur a la possibilité de configurer son navigateur pour être alerté de la réception de
          cookies et pour empêcher leur installation sur son équipement.
        </p>
        <p className="mb-3 font-semibold">Politique de liens</p>
        <p className="mb-4">
          Depuis le site web, il est possible d&apos;être redirigé vers des contenus de sites web tiers. Étant donné
          que le RESPONSABLE ne peut pas toujours contrôler les contenus introduits par des tiers sur leurs sites web
          respectifs, il n&apos;assume aucune responsabilité à l&apos;égard de ces contenus.
        </p>
        <p className="mb-4">
          Ce site web a été révisé et testé pour assurer son bon fonctionnement. Toutefois, le RESPONSABLE
          n&apos;écarte pas la possibilité de l&apos;existence de certaines erreurs de programmation, ni la survenue
          de cas de force majeure rendant impossible l&apos;accès au site web.
        </p>
        <p className="mb-3 font-semibold">Adresses IP</p>
        <p>
          Les serveurs du site web pourront détecter automatiquement l&apos;adresse IP et le nom de domaine utilisés
          par l&apos;utilisateur. Une adresse IP est un numéro attribué automatiquement à un ordinateur lorsque
          celui-ci se connecte à Internet. Toute cette information est enregistrée dans un fichier d&apos;activité du
          serveur dûment inscrit, qui permet le traitement ultérieur des données à des fins exclusivement
          statistiques.
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

function AvisoLegalPt() {
  return (
    <>
      <LegalSection>
        <p className="font-semibold mb-3">LEI DOS SERVIÇOS DA SOCIEDADE DA INFORMAÇÃO (LSSI)</p>
        <p className="mb-4">
          Fernando Martínez Alzamora, responsável pelo site, doravante RESPONSÁVEL, disponibiliza aos usuários o
          presente documento, com o qual pretende dar cumprimento às obrigações previstas na Lei espanhola 34/2002, de
          11 de julho, de Serviços da Sociedade da Informação e de Comércio Eletrônico (LSSICE), BOE Nº 166, bem como
          informar todos os usuários do site sobre quais são as condições de uso. Toda pessoa que acesse este site
          assume o papel de usuário, comprometendo-se à observância e ao cumprimento rigoroso das disposições aqui
          previstas, bem como de qualquer outra disposição legal que seja aplicável.
        </p>
        <p className="mb-4">
          Fernando Martínez Alzamora reserva-se o direito de modificar qualquer tipo de informação que possa aparecer
          no site, sem que exista obrigação de avisar previamente ou dar conhecimento aos usuários de tais alterações,
          entendendo-se como suficiente a publicação no site do QGISRed.
        </p>
      </LegalSection>

      <LegalSection title="1. DADOS IDENTIFICATIVOS">
        <ul className="list-none p-0 flex flex-col gap-1">
          <li><strong>Nome de domínio:</strong> qgisred.upv.es e qgisred.webs.upv.es</li>
          <li><strong>Nome comercial:</strong> QGISRed</li>
          <li><strong>Titular do site:</strong> Fernando Martínez Alzamora</li>
          <li><strong>NIF:</strong> 19.827.162N</li>
          <li><strong>Domicílio social:</strong> Univ. Politècnica València. IIAMA</li>
          <li><strong>Telefone:</strong> 963879610</li>
          <li><strong>e-mail:</strong>{" "}
            <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
              fmartine@hma.upv.es
            </a>
          </li>
        </ul>
      </LegalSection>

      <LegalSection title="2. DIREITOS DE PROPRIEDADE INTELECTUAL E INDUSTRIAL">
        <p className="mb-4">
          O site, incluindo a título enunciativo mas não limitativo sua programação, edição, compilação e demais
          elementos necessários ao seu funcionamento, os desenhos, logotipos, textos e/ou gráficos, são propriedade do
          RESPONSÁVEL ou, se for o caso, dispõe de licença ou autorização expressa por parte dos autores. Todos os
          conteúdos do site encontram-se devidamente protegidos pela normativa de propriedade intelectual e
          industrial, bem como inscritos nos registros públicos correspondentes.
        </p>
        <p className="mb-4">
          Independentemente da finalidade a que se destinem, a reprodução total ou parcial, uso, exploração,
          distribuição e comercialização exigem, em todo caso, autorização escrita prévia por parte do RESPONSÁVEL.
          Qualquer uso não previamente autorizado é considerado uma violação grave dos direitos de propriedade
          intelectual ou industrial do autor.
        </p>
        <p className="mb-4">
          Os desenhos, logotipos, textos e/ou gráficos alheios ao RESPONSÁVEL que possam aparecer no site pertencem
          aos seus respectivos proprietários, sendo eles próprios responsáveis por qualquer possível controvérsia que
          possa surgir a respeito deles. O RESPONSÁVEL autoriza expressamente que terceiros possam redirecionar
          diretamente para conteúdos específicos do site, e em todo caso redirecionar para o site principal do
          QGISRed.
        </p>
        <p className="mb-4">
          O RESPONSÁVEL reconhece em favor de seus titulares os correspondentes direitos de propriedade intelectual e
          industrial, não implicando a sua mera menção ou aparição no site a existência de nenhum direito ou
          responsabilidade sobre os mesmos, nem tampouco apoio, patrocínio ou recomendação por parte do RESPONSÁVEL.
        </p>
        <p>
          Para realizar qualquer tipo de observação a respeito de possíveis violações dos direitos de propriedade
          intelectual ou industrial, bem como sobre qualquer um dos conteúdos do site, pode fazê-lo através do
          correio eletrônico{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection title="3. ISENÇÃO DE RESPONSABILIDADES">
        <p className="mb-4">
          O RESPONSÁVEL isenta-se de qualquer tipo de responsabilidade derivada da informação publicada em seu site,
          sempre que essa informação tenha sido manipulada ou introduzida por um terceiro alheio ao mesmo.
        </p>
        <p className="mb-3 font-semibold">Uso de Cookies</p>
        <p className="mb-4">
          Este site pode utilizar cookies técnicos (pequenos arquivos de informação que o servidor envia ao computador
          de quem acessa a página) para realizar determinadas funções que são consideradas imprescindíveis para o
          correto funcionamento e visualização do site. Os cookies utilizados têm, em todo caso, caráter temporário,
          com a única finalidade de tornar a navegação mais eficaz, e desaparecem ao término da sessão do usuário. Em
          nenhum caso esses cookies fornecem por si mesmos dados de caráter pessoal e não serão utilizados para a
          coleta dos mesmos.
        </p>
        <p className="mb-4">
          O usuário tem a possibilidade de configurar seu navegador para ser alertado sobre o recebimento de cookies e
          para impedir sua instalação em seu equipamento.
        </p>
        <p className="mb-3 font-semibold">Política de links</p>
        <p className="mb-4">
          A partir do site, é possível que ocorra o redirecionamento para conteúdos de sites de terceiros. Uma vez que
          o RESPONSÁVEL nem sempre pode controlar os conteúdos introduzidos por terceiros em seus respectivos sites,
          não assume nenhum tipo de responsabilidade a respeito desses conteúdos.
        </p>
        <p className="mb-4">
          Este site foi revisado e testado para que funcione corretamente. Entretanto, o RESPONSÁVEL não descarta a
          possibilidade de existirem certos erros de programação, ou que ocorram causas de força maior que tornem
          impossível o acesso à página web.
        </p>
        <p className="mb-3 font-semibold">Endereços IP</p>
        <p>
          Os servidores do site poderão detectar automaticamente o endereço IP e o nome de domínio utilizados pelo
          usuário. Um endereço IP é um número atribuído automaticamente a um computador quando este se conecta à
          Internet. Toda essa informação é registrada em um arquivo de atividade do servidor devidamente inscrito, que
          permite o posterior processamento dos dados com o objetivo de obter medições unicamente estatísticas.
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
