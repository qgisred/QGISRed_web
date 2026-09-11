import Image from "@/components/AppImage";
import { Link } from "@/i18n/navigation";
import { anchorHash, anchorId } from "@/i18n/anchors";
import { localize } from "@/i18n/localize";

interface SectionHeadingProps {
  title: string;
  id?: string;
}

function SectionHeading({ title, id }: SectionHeadingProps) {
  return (
    <div className="flex items-center gap-4 mb-6" id={id}>
      <span
        className="flex-shrink-0 rounded-full"
        style={{ width: "12px", height: "12px", backgroundColor: "rgb(95, 189, 211)" }}
      />
      <h2
        className="font-semibold"
        style={{ fontSize: "clamp(24px, 5vw, 36px)", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}

interface ToggleSectionProps {
  title: string;
  children: React.ReactNode;
}

function ToggleSection({ title, children }: ToggleSectionProps) {
  return (
    <details className="border-t border-gray-200 group">
      <summary
        className="flex items-center justify-between py-4 cursor-pointer list-none"
        style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
      >
        <span>{title}</span>
        <span
          className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90"
          style={{ fontSize: "18px" }}
        >
          ›
        </span>
      </summary>
      <div className="pb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
        {children}
      </div>
    </details>
  );
}

interface CreditPersonProps {
  photoSrc: string;
  name: string;
  /** Visible lead paragraph shown under the portrait. */
  intro: React.ReactNode;
  /** Full biography, revealed by the toggle. */
  bio: React.ReactNode;
  toggleLabel: string;
}

function CreditPerson({ photoSrc, name, intro, bio, toggleLabel }: CreditPersonProps) {
  return (
    // Full height + `mt-auto` on the toggle keeps both toggles on the same row,
    // whatever the length of each lead paragraph.
    <div className="flex flex-col h-full">
      <div className="flex justify-center mb-6">
        <Image
          src={photoSrc}
          alt={name}
          width={500}
          height={600}
          className="w-[200px] h-auto object-cover"
        />
      </div>
      <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
        {intro}
      </p>
      <div className="mt-auto">
        <ToggleSection title={toggleLabel}>{bio}</ToggleSection>
      </div>
    </div>
  );
}

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
  open?: boolean;
}

function AccordionItem({ title, children, open }: AccordionItemProps) {
  return (
    <details className="border border-gray-200 mb-2 group" open={open}>
      <summary
        className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white"
        style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
      >
        <span>{title}</span>
        <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4">
          ›
        </span>
      </summary>
      <div
        className="px-5 pb-4"
        style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}
      >
        {children}
      </div>
    </details>
  );
}

export function PresentacionPageContent({ locale = "es" }: { locale?: string }) {
  return (
    <main style={{ paddingTop: "0" }}>
      {/* Intro section */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="mx-auto flex flex-col md:flex-row items-start gap-[60px]" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div style={{ flex: "1 1 55%" }}>
            {localize(locale,
              <>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", marginBottom: "16px" }}>
                  Bienvenido a QGISRed. En esta página encontrarás todo aquello que probablemente desearías conocer al tomar
                  contacto por primera vez con este producto. ¿Qué es y cuáles son los objetivos buscados? ¿Cómo surge?
                  ¿Para qué sirve? ¿Cómo puedo instalarlo? ¿Quiénes están detrás de él?. Te animo a visitar las secciones
                  siguientes de esta página para contestar a todas tus preguntas de principiante.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                  Si quieres profundizar más en conocer todas las capacidades del producto y su estado actual de desarrollo,
                  sobre cómo usar la aplicación, las publicaciones donde se cuentan sus fundamentos, o cómo conectar con
                  nosotros para obtener soporte o colaborar en este apasionante proyecto, visita las otras secciones de esta
                  web. Ah! Y también puedes registrarte para estar permanentemente informado de las novedades.
                </p>
              </>,
              <>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", marginBottom: "16px" }}>
                  Welcome to QGISRed. On this page you will find everything you would probably want to know when making contact with this product for the first time. What is it and what are its objectives? How did it come about? What is it for? How can I install it? Who is behind it? I encourage you to visit the following sections of this page to answer all your beginner questions.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                  If you want to learn more about all the product&apos;s capabilities and its current development status, how to use the application, the publications where its foundations are described, or how to contact us to get support or collaborate on this exciting project, visit the other sections of this website. Oh! And you can also register to be permanently informed of new developments.
                </p>
              </>,
              <>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", marginBottom: "16px" }}>
                  Bienvenue sur QGISRed. Sur cette page, vous trouverez tout ce que vous voudriez probablement savoir en prenant
                  contact pour la première fois avec ce produit. Qu&apos;est-ce que c&apos;est et quels sont les objectifs recherchés ?
                  Comment est-il né ? À quoi sert-il ? Comment puis-je l&apos;installer ? Qui est derrière ? Nous vous invitons à
                  visiter les sections suivantes de cette page pour répondre à toutes vos questions de débutant.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                  Si vous souhaitez approfondir vos connaissances sur toutes les capacités du produit et son état actuel de
                  développement, sur la façon d&apos;utiliser l&apos;application, les publications où sont exposés ses fondements, ou
                  comment nous contacter pour obtenir un support ou collaborer à ce projet passionnant, visitez les autres
                  sections de ce site. Ah ! Et vous pouvez également vous inscrire pour être informé en permanence des
                  nouveautés.
                </p>
              </>,
              <>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", marginBottom: "16px" }}>
                  Bem-vindo ao QGISRed. Nesta página você encontrará tudo aquilo que provavelmente gostaria de saber ao entrar em
                  contato pela primeira vez com este produto. O que é e quais são os objetivos buscados? Como surgiu?
                  Para que serve? Como posso instalá-lo? Quem está por trás dele? Convidamos você a visitar as seções
                  seguintes desta página para responder a todas as suas perguntas de iniciante.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                  Se você quiser aprofundar mais no conhecimento de todas as capacidades do produto e seu estado atual de desenvolvimento,
                  sobre como usar o aplicativo, as publicações onde são explicados seus fundamentos, ou como entrar em contato
                  conosco para obter suporte ou colaborar neste projeto apaixonante, visite as outras seções deste
                  site. Ah! E você também pode se cadastrar para ficar permanentemente informado sobre as novidades.
                </p>
              </>
            )}
          </div>
          <div className="hidden md:flex items-center justify-center" style={{ flex: "0 0 200px" }}>
            <Image
              src="/images/presentacion-logo-svg.svg"
              alt="QGISRed Logo"
              width={118}
              height={118}
              className="w-[150px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Qué es QGISRed / What is QGISRed */}
      <section id={anchorId("quees", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px", borderTop: "1px solid rgb(240,240,240)" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Qué es QGISRed", "What is QGISRed", "Qu'est-ce que QGISRed", "O que é o QGISRed")} id={`${anchorId("quees", locale)}-heading`} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {localize(locale,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed es un complemento de QGIS (o plugin) destinado a facilitar la tarea de construir y analizar
                    modelos hidráulicos de redes de distribución de agua, desde los esquemas más sencillos hasta el nivel de
                    detalle requerido por los Gemelos Digitales.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    El plugin es de uso libre y aprovecha todas las ventajas de trabajar en un entorno GIS para
                    georreferenciar los elementos de la red, superponerlos sobre fondos geográficos, editar la información
                    gráfica y alfanumérica, visualizar la información por capas, personalizar la simbología, realizar
                    operaciones de geoprocesamiento, etc.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A diferencia de otros plugins, QGISRed no es un conjunto de herramientas aisladas para facilitar
                    determinadas tareas, sino que constituye una plataforma de trabajo desde la cual se puede construir o
                    importar el modelo de la red, editar su trazado, declarar las propiedades de los elementos, construir
                    un escenario de cálculo y analizar los resultados, todo desde el mismo entorno. De este modo QGISRed
                    puede emular todas las capacidades de EPANET 2.3, ampliando sus opciones de edición y de cálculo.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Además de ello, QGISRed ofrece algunas ayudas para confeccionar los modelos, como la verificación de
                    todos los datos, el cálculo automático de longitudes, la interpolación de cotas a partir de un MDT, la
                    asignación de rugosidades a las tuberías a partir del material y edad, la asignación de las demandas a
                    los nudos a partir de los datos de población o de los consumos medios registrados, y la gestión de
                    escenarios de cálculo.
                  </p>

                  <ToggleSection title="Saber más">
                    <p className="mb-3">
                      Como herramienta de modelación avanzada, QGISRed ofrece opciones adicionales para ampliar el modelo
                      y conectarlo con los datos reales, convirtiendo así de forma progresiva el modelo hidráulico de la
                      red en un Gemelo Digital. Por ejemplo, a través de las acometidas se pueden cargar los datos de
                      facturación o telelectura al modelo, y a través de los sensores comparar las medidas de campo con
                      los valores simulados. Las válvulas de corte permiten aislar cerradas para realizar operaciones de
                      mantenimiento o para sectorizar la red de modo temporal o permanente. Teniendo acceso a los datos
                      reales se pueden realizar balances hídricos, obtener indicadores de desempeño (o KPIs), etc.
                    </p>
                    <p className="mb-3">
                      Emular las capacidades de EPANET permite acelerar la curva de aprendizaje en el manejo de QGISRed.
                      Además, los conocimientos requeridos de QGIS para su uso son mínimos, pues se han desarrollado
                      herramientas propias para llevar a cabo todas las operaciones necesarias. Sin embargo, los
                      especialistas en QGIS podrán sacar aún mucho más provecho a las prestaciones ofrecidas por QGISRed.
                    </p>
                    <p className="mb-3">
                      A través de esta página se ofrecen numerosas ayudas para convertirse en poco tiempo en un experto en
                      la modelación de redes, y ofrecer soluciones profesionales a las empresas mediante las herramientas
                      asociadas al Gemelo Digital. Finalmente cabe resaltar que el modelo de datos utilizado por QGISRed es
                      público y con una estructura muy simple, orientada fundamentalmente a realizar todo tipo de análisis,
                      lo que permite conectar QGISRed con otras aplicaciones de modelado de redes como EPANET, InfoWorks o
                      WaterGEMS.
                    </p>
                    <p>
                      QGISRed (pronunciado como Koo_his_rred siguiendo la fonética española) se ofrece por ahora solo en
                      Inglés, y en breve estará también en Español. Potencialmente podría llegar a ofrecerse en los más de
                      40 idiomas soportados por QGIS.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed is a QGIS plugin designed to facilitate the task of building and analysing hydraulic models of water distribution networks, from the simplest schemes to the level of detail required by Digital Twins.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The plugin is free to use and takes advantage of all the benefits of working in a GIS environment to geo-reference network elements, overlay them on geographic backgrounds, edit graphic and alphanumeric information, visualise information by layers, customise symbology, perform geoprocessing operations, etc.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Unlike other plugins, QGISRed is not a set of isolated tools to facilitate certain tasks, but rather a working platform from which you can build or import the network model, edit its layout, declare the properties of the elements, build a calculation scenario and analyse the results, all from the same environment. In this way QGISRed can emulate all the capabilities of EPANET 2.3, extending its editing and calculation options.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    In addition to this, QGISRed offers some aids for building models, such as the verification of all data, automatic calculation of lengths, interpolation of elevations from a DEM, assignment of roughness to pipes based on material and age, assignment of demands to nodes from population data or registered average consumption, and management of calculation scenarios.
                  </p>

                  <ToggleSection title="Learn more">
                    <p className="mb-3">
                      As an advanced modelling tool, QGISRed offers additional options to extend the model and connect it with real data, thus progressively converting the hydraulic model of the network into a Digital Twin. For example, through service connections the billing or meter reading data can be loaded into the model, and through sensors the field measurements can be compared with the simulated values. Shut-off valves allow isolation for maintenance operations or to sectorise the network temporarily or permanently. Having access to real data, water balances can be performed, performance indicators (or KPIs) obtained, etc.
                    </p>
                    <p className="mb-3">
                      Emulating EPANET&apos;s capabilities allows accelerating the learning curve in handling QGISRed. Moreover, the QGIS knowledge required for its use is minimal, since dedicated tools have been developed to carry out all necessary operations. However, QGIS specialists will be able to get even more out of the features offered by QGISRed.
                    </p>
                    <p className="mb-3">
                      Through this page, numerous resources are offered to quickly become an expert in network modelling, and to offer professional solutions to companies using the tools associated with the Digital Twin. Finally, it is worth noting that the data model used by QGISRed is public and has a very simple structure, fundamentally oriented to carrying out all types of analysis, which allows QGISRed to connect with other network modelling applications such as EPANET, InfoWorks or WaterGEMS.
                    </p>
                    <p>
                      QGISRed (pronounced as Koo_his_rred following Spanish phonetics) is currently offered only in English, and will soon be available in Spanish as well. It could potentially be offered in more than 40 languages supported by QGIS.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed est un complément de QGIS (ou plugin) destiné à faciliter la tâche de construction et d&apos;analyse
                    de modèles hydrauliques de réseaux de distribution d&apos;eau, depuis les schémas les plus simples jusqu&apos;au
                    niveau de détail requis par les Jumeaux Numériques.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Le plugin est libre d&apos;utilisation et tire parti de tous les avantages du travail dans un environnement
                    SIG pour géoréférencer les éléments du réseau, les superposer sur des fonds géographiques, éditer les
                    informations graphiques et alphanumériques, visualiser les informations par couches, personnaliser la
                    symbologie, réaliser des opérations de géotraitement, etc.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Contrairement à d&apos;autres plugins, QGISRed n&apos;est pas un ensemble d&apos;outils isolés pour faciliter
                    certaines tâches, mais constitue une plateforme de travail à partir de laquelle on peut construire ou
                    importer le modèle du réseau, éditer son tracé, déclarer les propriétés des éléments, construire un
                    scénario de calcul et analyser les résultats, le tout depuis le même environnement. Ainsi, QGISRed peut
                    émuler toutes les capacités d&apos;EPANET 2.3, en étendant ses options d&apos;édition et de calcul.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    En outre, QGISRed offre quelques aides pour la construction des modèles, comme la vérification de toutes
                    les données, le calcul automatique des longueurs, l&apos;interpolation des cotes à partir d&apos;un MNT,
                    l&apos;attribution des rugosités aux conduites à partir du matériau et de l&apos;âge, l&apos;attribution des demandes
                    aux nœuds à partir des données de population ou des consommations moyennes enregistrées, et la gestion
                    des scénarios de calcul.
                  </p>

                  <ToggleSection title="En savoir plus">
                    <p className="mb-3">
                      En tant qu&apos;outil de modélisation avancée, QGISRed offre des options supplémentaires pour étendre le
                      modèle et le connecter aux données réelles, convertissant ainsi progressivement le modèle hydraulique
                      du réseau en un Jumeau Numérique. Par exemple, à travers les branchements, les données de facturation
                      ou de télérelevé peuvent être chargées dans le modèle, et à travers les capteurs, les mesures de
                      terrain peuvent être comparées aux valeurs simulées. Les vannes de sectionnement permettent
                      l&apos;isolement par fermeture pour réaliser des opérations de maintenance ou pour sectoriser le réseau
                      de manière temporaire ou permanente. En ayant accès aux données réelles, il est possible de réaliser
                      des bilans hydriques, d&apos;obtenir des indicateurs de performance (ou KPIs), etc.
                    </p>
                    <p className="mb-3">
                      Émuler les capacités d&apos;EPANET permet d&apos;accélérer la courbe d&apos;apprentissage dans la prise en main
                      de QGISRed. De plus, les connaissances de QGIS requises pour son utilisation sont minimales, car des
                      outils propres ont été développés pour réaliser toutes les opérations nécessaires. Cependant, les
                      spécialistes de QGIS pourront tirer encore davantage parti des fonctionnalités offertes par QGISRed.
                    </p>
                    <p className="mb-3">
                      Cette page propose de nombreuses aides pour devenir rapidement un expert en modélisation de réseaux,
                      et pour offrir des solutions professionnelles aux entreprises grâce aux outils associés au Jumeau
                      Numérique. Enfin, il convient de souligner que le modèle de données utilisé par QGISRed est public et
                      possède une structure très simple, orientée fondamentalement vers la réalisation de tous types
                      d&apos;analyses, ce qui permet de connecter QGISRed à d&apos;autres applications de modélisation de réseaux
                      telles qu&apos;EPANET, InfoWorks ou WaterGEMS.
                    </p>
                    <p>
                      QGISRed (prononcé Koo_his_rred selon la phonétique espagnole) n&apos;est proposé pour l&apos;instant qu&apos;en
                      anglais, et sera bientôt également disponible en espagnol. Il pourrait potentiellement être proposé
                      dans plus de 40 langues prises en charge par QGIS.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O QGISRed é um complemento do QGIS (ou plugin) destinado a facilitar a tarefa de construir e analisar
                    modelos hidráulicos de redes de distribuição de água, desde os esquemas mais simples até o nível de
                    detalhe exigido pelos Gêmeos Digitais.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O plugin é de uso livre e aproveita todas as vantagens de trabalhar em um ambiente GIS para
                    georreferenciar os elementos da rede, sobrepô-los a fundos geográficos, editar a informação
                    gráfica e alfanumérica, visualizar a informação por camadas, personalizar a simbologia, realizar
                    operações de geoprocessamento, etc.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Ao contrário de outros plugins, o QGISRed não é um conjunto de ferramentas isoladas para facilitar
                    determinadas tarefas, mas sim uma plataforma de trabalho a partir da qual é possível construir ou
                    importar o modelo da rede, editar seu traçado, declarar as propriedades dos elementos, construir
                    um cenário de cálculo e analisar os resultados, tudo a partir do mesmo ambiente. Desse modo, o QGISRed
                    pode emular todas as capacidades do EPANET 2.3, ampliando suas opções de edição e de cálculo.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Além disso, o QGISRed oferece algumas ajudas para elaborar os modelos, como a verificação de
                    todos os dados, o cálculo automático de comprimentos, a interpolação de cotas a partir de um MDT, a
                    atribuição de rugosidades às tubulações a partir do material e da idade, a atribuição dos consumos aos
                    nós a partir dos dados de população ou dos consumos médios registrados, e a gestão de
                    cenários de cálculo.
                  </p>

                  <ToggleSection title="Saber mais">
                    <p className="mb-3">
                      Como ferramenta de modelação avançada, o QGISRed oferece opções adicionais para ampliar o modelo
                      e conectá-lo com os dados reais, convertendo assim progressivamente o modelo hidráulico da
                      rede em um Gêmeo Digital. Por exemplo, através das Ligações de Serviço é possível carregar os dados de
                      faturamento ou telemedição no modelo, e através dos sensores comparar as medições de campo com
                      os valores simulados. As Válvulas de Isolamento permitem isolar por fechamento para realizar operações de
                      manutenção ou para setorizar a rede de modo temporário ou permanente. Tendo acesso aos dados
                      reais é possível realizar balanços hídricos, obter indicadores de desempenho (ou KPIs), etc.
                    </p>
                    <p className="mb-3">
                      Emular as capacidades do EPANET permite acelerar a curva de aprendizagem no manuseio do QGISRed.
                      Além disso, os conhecimentos de QGIS necessários para seu uso são mínimos, pois foram desenvolvidas
                      ferramentas próprias para realizar todas as operações necessárias. No entanto, os
                      especialistas em QGIS poderão tirar ainda mais proveito das funcionalidades oferecidas pelo QGISRed.
                    </p>
                    <p className="mb-3">
                      Através desta página são oferecidas numerosas ajudas para se tornar em pouco tempo um especialista na
                      modelação de redes, e oferecer soluções profissionais às empresas por meio das ferramentas
                      associadas ao Gêmeo Digital. Por fim, vale destacar que o modelo de dados utilizado pelo QGISRed é
                      público e possui uma estrutura muito simples, orientada fundamentalmente a realizar todo tipo de análise,
                      o que permite conectar o QGISRed com outros aplicativos de modelação de redes como EPANET, InfoWorks ou
                      WaterGEMS.
                    </p>
                    <p>
                      O QGISRed (pronunciado como Koo_his_rred seguindo a fonética espanhola) é oferecido por enquanto apenas em
                      Inglês, e em breve estará também disponível em Espanhol. Poderia potencialmente vir a ser oferecido em mais de
                      40 idiomas suportados pelo QGIS.
                    </p>
                  </ToggleSection>
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-gisepanet.jpg"
                alt="GISEpanet interface"
                width={957}
                height={358}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Antecedentes / Background */}
      <section id={anchorId("antecedentes", locale)} className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Antecedentes", "Background", "Contexte", "Antecedentes")} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {localize(locale,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    La idea de potenciar las prestaciones de EPANET mediante su conexión con un GIS no es nueva para nuestro grupo de investigación. Ya en 2004 Fernando Martínez, director del actual proyecto QGISRed, dirigió un proyecto con similares objetivos y prestaciones, denominado <strong>GISRed. </strong>Hubo por entonces dos versiones, la 1.0 y la 2.0, y se difundieron sus capacidades a través de varias{" "}
                    <Link href={{ pathname: "/difusion", hash: anchorHash("publicaciones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publicaciones</Link>.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    GISRed se programó en el lenguaje Avenue para ArcView 3.2, un precedente de lo que después fue ArcGIS,
                    y llegó a estar configurado por más de 600 scripts. Se utilizó internamente como herramienta de ayuda
                    para confeccionar varios planes directores de mejora de abastecimientos, entre ellos el abastecimiento a
                    la ciudad de Valencia y su área metropolitana, con una población servida de 1,5 millones de habitantes,
                    como hito más importante.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Sin embargo, la falta de robustez del producto limitó su difusión en primera instancia, y al poco
                    tiempo ArcView quedó obsoleto, siendo abandonado también el lenguaje Avenue.
                  </p>

                  <ToggleSection title="Leer más">
                    <p className="mb-3">
                      En los 15 años siguientes ninguna aplicación, dejando aparte los productos comerciales, llegó a proporcionar las prestaciones que GISRed ofrecía para ayudar en la confección de modelos de redes de abastecimiento. Mientras tanto el código de EPANET fue liberalizado, y en 2015 se fundó una sección dentro de la{" "}
                      <a href="http://community.wateranalytics.org/c/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Open Water Analytics</strong></a>
                      {" "}(OWA) para continuar desarrollando el módulo de cálculo de EPANET (también conocido como Toolkit), con la contribución ahora de toda la comunidad investigadora. Finalmente, en Diciembre 2019 se lanzó desde esta plataforma la última{" "}
                      <a href="https://github.com/OpenWaterAnalytics/EPANET/releases" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versión 2.2 de la Toolkit</a>
                      . Poco después, en Julio de 2020 la EPA mejoró también la interfaz gráfica de{" "}
                      <a href="https://www.epa.gov/water-research/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>EPANET a su versión 2.2</a>
                      , en la cual integró la última versión de la Toolkit. Esta versión 2.2 de la Toolkit se mantuvo vigente hasta Julio de 2025, cuando fue superada por la nueva versión 2.3.
                    </p>
                    <p className="mb-3">
                      Sin embargo, estos avances en EPANET no potenciaron las herramientas de ayuda para confeccionar
                      modelos, ni incorporaron nuevos tipos de elementos a la red. Básicamente se limitaron a hacer
                      accesible a los programadores todos los datos de un escenario y ofrecer la opción de utilizar la
                      librería de funciones en modo concurrente, siendo la mayor aportación la posibilidad de ejecutar
                      modelos con demandas dependientes de la presión (PDA). Los desafíos del antiguo GISRed seguían
                      presentes, de modo que, en 2018, tras los espectaculares avances del software libre QGIS, nos
                      decidimos a reproducir las prestaciones de GISRed en este nuevo entorno, y a mejorar de paso tanto
                      las prestaciones de aquel producto inicial, equiparándolas a las que ofrece la última versión de
                      EPANET 2.2. La primera presentación en público del nuevo producto, ya denominado QGISRed, se realizó
                      durante la Conferencia CCWI de 2019, en Exeter (UK)
                    </p>
                    <p className="mb-3">
                      Por otra parte, la experiencia adquirida por los autores en el desarrollo de uno de los primeros
                      Gemelos Digitales del mundo para la ciudad de Valencia, nos llevó a potenciar aún más las
                      prestaciones del nuevo plugin para permitir migrar de un modelo hidráulico convencional a la
                      construcción de un Gemelo Digital.
                    </p>
                    <p className="mb-3">
                      El resultado de este esfuerzo es el producto QGISRed que aquí se presenta, con la intención de marcar
                      un hito entre los productos de uso libre orientados a facilitar la construcción de modelos de redes de
                      distribución de agua, los cuales van a ser cada vez más requeridos por las empresas gestoras de los
                      servicios de abastecimiento de agua para la toma de decisiones, en un momento en el que la
                      digitalización de este sector empieza a ser galopante.
                    </p>
                    <p>
                      QGISRed está aún en construcción, y las prestaciones de la última versión oficial se pueden consultar en la sección{" "}
                      <Link href="/capacidades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CAPACIDADES</Link>
                      , donde se detallan especialmente las últimas novedades, y las prestaciones futuras por desarrollar. Se espera completar el alcance de todos los objetivos propuestos en la hoja de ruta, para la versión libre de este producto, en el plazo máximo de un año.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The idea of enhancing EPANET&apos;s capabilities by connecting it with a GIS is not new for our research group. Back in 2004, Fernando Martínez, director of the current QGISRed project, directed a project with similar objectives and features, called <strong>GISRed. </strong>There were two versions at the time, 1.0 and 2.0, and its capabilities were disseminated through several{" "}
                    <Link href={{ pathname: "/difusion", hash: anchorHash("publicaciones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publications</Link>.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    GISRed was programmed in the Avenue language for ArcView 3.2, a predecessor of what later became ArcGIS, and came to be configured by more than 600 scripts. It was used internally as a tool to help build several master plans for improving water supplies, including the water supply for the city of Valencia and its metropolitan area, with a served population of 1.5 million inhabitants, as the most important milestone.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    However, the lack of robustness of the product initially limited its dissemination, and before long ArcView became obsolete, and the Avenue language was also abandoned.
                  </p>

                  <ToggleSection title="Read more">
                    <p className="mb-3">
                      In the following 15 years, no application, apart from commercial products, managed to provide the features that GISRed offered to help build water supply network models. Meanwhile the EPANET code was liberalised, and in 2015 a section was founded within{" "}
                      <a href="http://community.wateranalytics.org/c/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Open Water Analytics</strong></a>
                      {" "}(OWA) to continue developing the EPANET calculation module (also known as the Toolkit), with the contribution of the entire research community. Finally, in December 2019 the latest{" "}
                      <a href="https://github.com/OpenWaterAnalytics/EPANET/releases" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>version 2.2 of the Toolkit</a>
                      {" "}was launched from this platform. Shortly afterwards, in July 2020, the EPA also improved the graphical interface of{" "}
                      <a href="https://www.epa.gov/water-research/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>EPANET to version 2.2</a>
                      , integrating the latest version of the Toolkit. This version 2.2 of the Toolkit remained current until July 2025, when it was superseded by the new version 2.3.
                    </p>
                    <p className="mb-3">
                      However, these advances in EPANET did not enhance the tools for building models, nor did they incorporate new types of elements into the network. They were basically limited to making all the data in a scenario accessible to programmers and offering the option of using the function library in concurrent mode, with the greatest contribution being the possibility of running models with pressure-dependent demands (PDA). The challenges of the old GISRed were still present, so in 2018, following the spectacular advances of the free software QGIS, we decided to reproduce GISRed&apos;s features in this new environment, and in the process improve both the features of that initial product, bringing them up to the level offered by the latest version of EPANET 2.2. The first public presentation of the new product, now called QGISRed, took place during the CCWI 2019 Conference, in Exeter (UK).
                    </p>
                    <p className="mb-3">
                      On the other hand, the experience gained by the authors in the development of one of the first Digital Twins in the world for the city of Valencia led us to further enhance the capabilities of the new plugin to allow migration from a conventional hydraulic model to the construction of a Digital Twin.
                    </p>
                    <p className="mb-3">
                      The result of this effort is the QGISRed product presented here, with the intention of marking a milestone among free-to-use products aimed at facilitating the construction of water distribution network models, which will be increasingly required by water supply management companies for decision-making, at a time when the digitalisation of this sector is beginning to gallop ahead.
                    </p>
                    <p>
                      QGISRed is still under construction, and the features of the latest official version can be consulted in the{" "}
                      <Link href="/capacidades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CAPABILITIES</Link>
                      {" "}section, where the latest developments and future features to be developed are detailed. It is expected that the scope of all the objectives proposed in the roadmap will be completed, for the free version of this product, within a maximum of one year.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    L&apos;idée de renforcer les fonctionnalités d&apos;EPANET en le connectant à un SIG n&apos;est pas nouvelle pour notre groupe de recherche. Déjà en 2004, Fernando Martínez, directeur de l&apos;actuel projet QGISRed, a dirigé un projet aux objectifs et fonctionnalités similaires, appelé <strong>GISRed. </strong>Il y eut alors deux versions, la 1.0 et la 2.0, et ses capacités furent diffusées à travers plusieurs{" "}
                    <Link href={{ pathname: "/difusion", hash: anchorHash("publicaciones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publications</Link>.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    GISRed a été programmé dans le langage Avenue pour ArcView 3.2, un précurseur de ce qui devint plus tard
                    ArcGIS, et a fini par être composé de plus de 600 scripts. Il a été utilisé en interne comme outil d&apos;aide
                    pour l&apos;élaboration de plusieurs plans directeurs d&apos;amélioration des réseaux d&apos;approvisionnement, parmi
                    lesquels l&apos;approvisionnement de la ville de Valence et de son aire métropolitaine, desservant 1,5 million
                    d&apos;habitants, comme jalon le plus important.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Cependant, le manque de robustesse du produit a d&apos;abord limité sa diffusion, et peu de temps après,
                    ArcView est devenu obsolète, le langage Avenue étant lui aussi abandonné.
                  </p>

                  <ToggleSection title="Lire la suite">
                    <p className="mb-3">
                      Au cours des 15 années suivantes, aucune application, mis à part les produits commerciaux, n&apos;est
                      parvenue à offrir les fonctionnalités que GISRed proposait pour aider à la construction de modèles de
                      réseaux d&apos;approvisionnement. Entre-temps, le code d&apos;EPANET a été libéré, et en 2015 une section a été
                      fondée au sein d&apos;{" "}
                      <a href="http://community.wateranalytics.org/c/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Open Water Analytics</strong></a>
                      {" "}(OWA) pour poursuivre le développement du module de calcul d&apos;EPANET (également connu sous le nom de Toolkit), avec désormais la contribution de toute la communauté de recherche. Enfin, en décembre 2019, cette plateforme a lancé la dernière{" "}
                      <a href="https://github.com/OpenWaterAnalytics/EPANET/releases" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>version 2.2 de la Toolkit</a>
                      . Peu après, en juillet 2020, l&apos;EPA a également amélioré l&apos;interface graphique d&apos;{" "}
                      <a href="https://www.epa.gov/water-research/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>EPANET dans sa version 2.2</a>
                      , dans laquelle elle a intégré la dernière version de la Toolkit. Cette version 2.2 de la Toolkit est restée en vigueur jusqu&apos;en juillet 2025, date à laquelle elle a été remplacée par la nouvelle version 2.3.
                    </p>
                    <p className="mb-3">
                      Cependant, ces avancées d&apos;EPANET n&apos;ont pas renforcé les outils d&apos;aide à la construction de
                      modèles, ni intégré de nouveaux types d&apos;éléments au réseau. Elles se sont essentiellement limitées à
                      rendre accessibles aux programmeurs toutes les données d&apos;un scénario et à offrir la possibilité
                      d&apos;utiliser la bibliothèque de fonctions en mode concurrent, la contribution la plus importante étant
                      la possibilité d&apos;exécuter des modèles avec des demandes dépendantes de la pression (PDA). Les défis
                      de l&apos;ancien GISRed restaient présents, si bien qu&apos;en 2018, à la suite des avancées spectaculaires du
                      logiciel libre QGIS, nous avons décidé de reproduire les fonctionnalités de GISRed dans ce nouvel
                      environnement, et d&apos;améliorer au passage les fonctionnalités de ce produit initial, en les alignant
                      sur celles offertes par la dernière version d&apos;EPANET 2.2. La première présentation publique du
                      nouveau produit, déjà appelé QGISRed, a eu lieu lors de la Conférence CCWI 2019, à Exeter
                      (Royaume-Uni).
                    </p>
                    <p className="mb-3">
                      Par ailleurs, l&apos;expérience acquise par les auteurs dans le développement de l&apos;un des premiers
                      Jumeaux Numériques au monde pour la ville de Valence nous a conduits à renforcer encore davantage les
                      fonctionnalités du nouveau plugin, afin de permettre la migration d&apos;un modèle hydraulique
                      conventionnel vers la construction d&apos;un Jumeau Numérique.
                    </p>
                    <p className="mb-3">
                      Le résultat de cet effort est le produit QGISRed présenté ici, avec l&apos;intention de marquer une étape
                      parmi les produits libres visant à faciliter la construction de modèles de réseaux de distribution
                      d&apos;eau, qui seront de plus en plus requis par les entreprises gestionnaires des services
                      d&apos;approvisionnement en eau pour la prise de décision, à un moment où la numérisation de ce secteur
                      commence à s&apos;accélérer fortement.
                    </p>
                    <p>
                      QGISRed est encore en cours de construction, et les fonctionnalités de la dernière version officielle
                      peuvent être consultées dans la section{" "}
                      <Link href="/capacidades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CAPACITÉS</Link>
                      , où sont notamment détaillées les dernières nouveautés et les fonctionnalités futures à développer.
                      Il est prévu d&apos;achever la portée de tous les objectifs proposés dans la feuille de route, pour la
                      version libre de ce produit, dans un délai maximal d&apos;un an.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A ideia de potencializar as funcionalidades do EPANET através de sua conexão com um GIS não é nova para o nosso grupo de pesquisa. Já em 2004 Fernando Martínez, diretor do atual projeto QGISRed, dirigiu um projeto com objetivos e funcionalidades semelhantes, denominado <strong>GISRed. </strong>Houve na época duas versões, a 1.0 e a 2.0, e suas capacidades foram divulgadas através de várias{" "}
                    <Link href={{ pathname: "/difusion", hash: anchorHash("publicaciones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publicações</Link>.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O GISRed foi programado na linguagem Avenue para o ArcView 3.2, um precursor do que depois se tornou o ArcGIS,
                    chegando a ser configurado por mais de 600 scripts. Foi utilizado internamente como ferramenta de apoio
                    para elaborar vários planos diretores de melhoria de abastecimentos, entre eles o abastecimento à
                    cidade de Valência e sua área metropolitana, com uma população atendida de 1,5 milhão de habitantes,
                    como marco mais importante.
                  </p>
                  <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    No entanto, a falta de robustez do produto limitou sua difusão em um primeiro momento, e pouco
                    tempo depois o ArcView ficou obsoleto, sendo abandonada também a linguagem Avenue.
                  </p>

                  <ToggleSection title="Ler mais">
                    <p className="mb-3">
                      Nos 15 anos seguintes nenhum aplicativo, deixando de lado os produtos comerciais, chegou a oferecer as funcionalidades que o GISRed oferecia para ajudar na elaboração de modelos de redes de abastecimento. Enquanto isso o código do EPANET foi liberado, e em 2015 foi fundada uma seção dentro da{" "}
                      <a href="http://community.wateranalytics.org/c/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Open Water Analytics</strong></a>
                      {" "}(OWA) para continuar desenvolvendo o módulo de cálculo do EPANET (também conhecido como Toolkit), com a contribuição agora de toda a comunidade de pesquisa. Finalmente, em dezembro de 2019 foi lançada a partir dessa plataforma a última{" "}
                      <a href="https://github.com/OpenWaterAnalytics/EPANET/releases" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versão 2.2 da Toolkit</a>
                      . Pouco depois, em julho de 2020, a EPA também melhorou a interface gráfica do{" "}
                      <a href="https://www.epa.gov/water-research/epanet" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>EPANET para sua versão 2.2</a>
                      , na qual integrou a última versão da Toolkit. Essa versão 2.2 da Toolkit permaneceu vigente até julho de 2025, quando foi superada pela nova versão 2.3.
                    </p>
                    <p className="mb-3">
                      No entanto, esses avanços no EPANET não potencializaram as ferramentas de apoio para elaborar
                      modelos, nem incorporaram novos tipos de elementos à rede. Basicamente se limitaram a tornar
                      acessíveis aos programadores todos os dados de um cenário e oferecer a opção de usar a
                      biblioteca de funções em modo concorrente, sendo a maior contribuição a possibilidade de executar
                      modelos com consumos dependentes da pressão (PDA). Os desafios do antigo GISRed continuavam
                      presentes, de modo que, em 2018, após os espetaculares avanços do software livre QGIS, nos
                      decidimos a reproduzir as funcionalidades do GISRed nesse novo ambiente, e a melhorar de passagem tanto
                      as funcionalidades daquele produto inicial, equiparando-as às oferecidas pela última versão do
                      EPANET 2.2. A primeira apresentação em público do novo produto, já denominado QGISRed, foi realizada
                      durante a Conferência CCWI de 2019, em Exeter (Reino Unido).
                    </p>
                    <p className="mb-3">
                      Por outro lado, a experiência adquirida pelos autores no desenvolvimento de um dos primeiros
                      Gêmeos Digitais do mundo para a cidade de Valência nos levou a potencializar ainda mais as
                      funcionalidades do novo plugin para permitir migrar de um modelo hidráulico convencional para a
                      construção de um Gêmeo Digital.
                    </p>
                    <p className="mb-3">
                      O resultado desse esforço é o produto QGISRed aqui apresentado, com a intenção de marcar
                      um marco entre os produtos de uso livre voltados a facilitar a construção de modelos de redes de
                      distribuição de água, os quais serão cada vez mais requisitados pelas empresas gestoras dos
                      serviços de abastecimento de água para a tomada de decisões, em um momento em que a
                      digitalização desse setor começa a ser galopante.
                    </p>
                    <p>
                      O QGISRed ainda está em construção, e as funcionalidades da última versão oficial podem ser consultadas na seção{" "}
                      <Link href="/capacidades" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CAPACIDADES</Link>
                      , onde são detalhadas especialmente as últimas novidades, e as funcionalidades futuras a serem desenvolvidas. Espera-se completar o alcance de todos os objetivos propostos no roteiro, para a versão livre deste produto, no prazo máximo de um ano.
                    </p>
                  </ToggleSection>
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-diapositiva.png"
                alt={localize(locale, "Diapositiva antecedentes", "Background slide", "Diapositive du contexte", "Slide de antecedentes")}
                width={832}
                height={656}
                className="w-full h-auto"
              />
              <div className="flex gap-3 mt-4">
                <Image src="/images/presentacion-app1.jpg" alt="App screenshot 1" width={1024} height={576} className="flex-1 min-w-0 h-auto" />
                <Image src="/images/presentacion-app2.jpg" alt="App screenshot 2" width={1920} height={1080} className="flex-1 min-w-0 h-auto" />
                <Image src="/images/presentacion-app3.png" alt="App screenshot 3" width={1024} height={576} className="flex-1 min-w-0 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones / Applications */}
      <section id={anchorId("aplicaciones", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Aplicaciones", "Applications", "Applications", "Aplicações")} />

          {localize(locale,
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Todo este esfuerzo no lo habríamos hecho si el uso de los modelos de simulación no fuera cada vez más
                requerido y necesario. Las redes de distribución llegan a convertirse con el tiempo en sistemas complejos de
                manejar, por su continua expansión y adaptación en función de las necesidades. Por otra parte, su
                comportamiento altamente no lineal, debido no ya a la ecuación de pérdidas de las tuberías, sino sobre todo
                por el modo de funcionamiento de los elementos de regulación, con continuos arranques, paros y cambios en
                las consignas, hacen que la intuición de los operadores de las redes a la hora de estimar su comportamiento
                falle en numerosas ocasiones.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Los modelos se emplearon en principio con fines de diseño, y para ello bastaba con simular el caso más
                desfavorable, normalmente la situación punta, sobre una red simplificada. Con el tiempo se extendió su uso
                para simular el comportamiento dinámico de las redes en explotación, normalmente para un día tipo, buscando
                en principio reproducir las variaciones de nivel en los depósitos, o determinar los valores extremos de
                presiones, caudales y velocidades a lo largo del día, y siendo potenciado finalmente su uso para hacer
                predicciones sobre la evolución de la calidad del agua mientras es transportada por la red. Hoy se les pide
                a los modelos que reproduzcan fielmente el comportamiento de la red en cualquier instante del pasado o
                presente, y que predigan su comportamiento a corto plazo a través de los gemelos digitales.
              </p>
              <p className="mb-4 font-semibold" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                QGISRed pretende cubrir todas estas situaciones, siendo las principales aplicaciones cada caso:
              </p>
            </>,
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                We would not have made all this effort if the use of simulation models were not increasingly required and necessary. Water distribution networks become complex systems to manage over time, due to their continuous expansion and adaptation according to needs. On the other hand, their highly non-linear behaviour, caused not so much by the pipe head loss equation, but mainly by the operating mode of the regulation elements, with continuous starts, stops and changes in set points, means that the intuition of network operators in estimating network behaviour fails on numerous occasions.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Models were initially used for design purposes, and for this it was sufficient to simulate the most unfavourable case, normally the peak situation, on a simplified network. Over time their use extended to simulate the dynamic behaviour of networks in operation, normally for a typical day, initially seeking to reproduce variations in reservoir levels, or to determine the extreme values of pressures, flows and velocities throughout the day, and their use was finally enhanced to make predictions about the evolution of water quality as it is transported through the network. Today models are required to faithfully reproduce the behaviour of the network at any instant in the past or present, and to predict its short-term behaviour through digital twins.
              </p>
              <p className="mb-4 font-semibold" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                QGISRed aims to cover all these situations, with the main applications for each case being:
              </p>
            </>,
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Nous n&apos;aurions pas fourni tout cet effort si l&apos;utilisation des modèles de simulation n&apos;était pas de plus
                en plus requise et nécessaire. Les réseaux de distribution finissent par devenir avec le temps des systèmes
                complexes à gérer, en raison de leur expansion et de leur adaptation continues en fonction des besoins. Par
                ailleurs, leur comportement fortement non linéaire, dû non seulement à l&apos;équation de perte de charge des
                conduites, mais surtout au mode de fonctionnement des éléments de régulation, avec des démarrages, arrêts et
                changements de consignes continuels, fait que l&apos;intuition des opérateurs de réseaux pour estimer leur
                comportement se révèle en défaut à de nombreuses reprises.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Les modèles ont d&apos;abord été utilisés à des fins de conception, et pour cela il suffisait de simuler le cas
                le plus défavorable, généralement la situation de pointe, sur un réseau simplifié. Avec le temps, leur
                utilisation s&apos;est étendue à la simulation du comportement dynamique des réseaux en exploitation,
                généralement pour une journée type, cherchant d&apos;abord à reproduire les variations de niveau dans les
                réservoirs, ou à déterminer les valeurs extrêmes de pressions, débits et vitesses tout au long de la
                journée, et leur usage a finalement été renforcé pour faire des prédictions sur l&apos;évolution de la qualité
                de l&apos;eau pendant son transport dans le réseau. Aujourd&apos;hui, on demande aux modèles de reproduire
                fidèlement le comportement du réseau à n&apos;importe quel instant du passé ou du présent, et de prédire son
                comportement à court terme grâce aux jumeaux numériques.
              </p>
              <p className="mb-4 font-semibold" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                QGISRed vise à couvrir toutes ces situations, les principales applications de chaque cas étant :
              </p>
            </>,
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Todo esse esforço não teria sido feito se o uso dos modelos de simulação não fosse cada vez mais
                requerido e necessário. As redes de distribuição acabam se tornando com o tempo sistemas complexos de
                gerenciar, devido à sua contínua expansão e adaptação em função das necessidades. Por outro lado, seu
                comportamento altamente não linear, devido não apenas à equação de perda de carga das tubulações, mas sobretudo
                pelo modo de funcionamento dos elementos de regulação, com contínuas partidas, paradas e mudanças nas
                consignas, fazem com que a intuição dos operadores das redes na hora de estimar seu comportamento
                falhe em numerosas ocasiões.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Os modelos foram empregados a princípio com fins de dimensionamento, e para isso bastava simular o caso mais
                desfavorável, normalmente a situação de pico, sobre uma rede simplificada. Com o tempo estendeu-se seu uso
                para simular o comportamento dinâmico das redes em operação, normalmente para um dia típico, buscando
                a princípio reproduzir as variações de nível nos reservatórios, ou determinar os valores extremos de
                pressões, vazões e velocidades ao longo do dia, sendo potencializado finalmente seu uso para fazer
                previsões sobre a evolução da qualidade da água enquanto é transportada pela rede. Hoje se pede
                aos modelos que reproduzam fielmente o comportamento da rede em qualquer instante do passado ou
                presente, e que prevejam seu comportamento a curto prazo através dos gêmeos digitais.
              </p>
              <p className="mb-4 font-semibold" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                O QGISRed pretende cobrir todas essas situações, sendo as principais aplicações de cada caso:
              </p>
            </>
          )}

          {/* Accordion tabs */}
          <div className="mb-8">
            {/* Tab: Static Models */}
            <AccordionItem title={localize(locale, "Trabajando con Modelos Estáticos", "Working with Static Models", "Travailler avec des Modèles Statiques", "Trabalhando com Modelos Estáticos")} open>
              <ul className="flex flex-col gap-3 list-none p-0">
                {localize(locale, [
                  "El dimensionado de tuberías y elementos de regulación para el escenario más desfavorable",
                  "La planificación de nuevos escenarios ante ampliaciones de la red, rehabilitación de componentes, reformas, etc.",
                  "La calibración del modelo a partir de medidas en momentos puntuales.",
                  "La simulación de la respuesta del sistema en situaciones extremas como roturas, elementos fuera de servicio, etc.",
                  "El análisis de la criticidad de la red, para detectar los elementos más débiles",
                  "La sectorización de la red garantizando el suministro en las condiciones más desfavorables",
                  "La realización de auditorías energéticas que afecten al diseño y concepción del sistema de transporte y distribución",
                ], [
                  "Sizing pipes and regulation elements for the most unfavourable scenario",
                  "Planning new scenarios for network extensions, rehabilitation of components, reforms, etc.",
                  "Calibrating the model from measurements at specific moments",
                  "Simulating the system response in extreme situations such as pipe breaks, elements out of service, etc.",
                  "Analysing network criticality to detect the weakest elements",
                  "Sectorising the network guaranteeing supply under the most unfavourable conditions",
                  "Carrying out energy audits affecting the design and conception of the transport and distribution system",
                ], [
                  "Le dimensionnement des conduites et des éléments de régulation pour le scénario le plus défavorable",
                  "La planification de nouveaux scénarios face aux extensions du réseau, à la réhabilitation de composants, aux réformes, etc.",
                  "La calibration du modèle à partir de mesures à des moments ponctuels.",
                  "La simulation de la réponse du système dans des situations extrêmes telles que des ruptures, des éléments hors service, etc.",
                  "L'analyse de la criticité du réseau, pour détecter les éléments les plus faibles",
                  "La sectorisation du réseau en garantissant l'approvisionnement dans les conditions les plus défavorables",
                  "La réalisation d'audits énergétiques affectant la conception du système de transport et de distribution",
                ], [
                  "O dimensionamento de tubulações e elementos de regulação para o cenário mais desfavorável",
                  "O planejamento de novos cenários diante de ampliações da rede, reabilitação de componentes, reformas, etc.",
                  "A calibração do modelo a partir de medições em momentos pontuais.",
                  "A simulação da resposta do sistema em situações extremas como rupturas, elementos fora de serviço, etc.",
                  "A análise da criticidade da rede, para detectar os elementos mais fracos",
                  "A setorização da rede garantindo o abastecimento nas condições mais desfavoráveis",
                  "A realização de auditorias energéticas que afetem o projeto e a concepção do sistema de transporte e distribuição",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 rounded-full mt-2"
                      style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>

            {/* Tab: Dynamic Models */}
            <AccordionItem title={localize(locale, "Trabajando con Modelos Dinámicos", "Working with Dynamic Models", "Travailler avec des Modèles Dynamiques", "Trabalhando com Modelos Dinâmicos")}>
              <ul className="flex flex-col gap-3 list-none p-0">
                {localize(locale, [
                  "El establecimiento de las consignas de los elementos de regulación para garantizar unos valores adecuados de las variables hidráulicas en todo momento: presiones, velocidades de circulación, etc.",
                  "La calibración del modelo a partir de medidas en periodos prolongados",
                  "El análisis de la fiabilidad y capacidad de respuesta de la red ante cualquier eventualidad y en cualquier momento. Gestión de las reservas en depósitos.",
                  "El análisis del comportamiento dinámico de las redes sectorizadas y las actuaciones a realizar en caso necesario para garantizar el suministro.",
                  "La programación de actuaciones de mantenimiento en la red que afecten al sistema de suministro. Determinación del momento óptimo de inicio de las obras y la duración permitida.",
                  "La optimización del régimen de operación del sistema para reducir el consumo energético en un dia tipo.",
                  "El seguimiento de la calidad del agua y la programación de las actuaciones requeridas para mantener los parámetros de calidad en toda la red: descargas periódicas al alcantarillado, estaciones de recloración, etc.",
                  "El análisis de los modos de operación óptimos ante crecimientos de la demanda puntuales o prolongados (eventos, poblaciones turísticas) o ante reducciones de ésta (fines de semana, despoblación en verano, etc.)",
                  "La gestión de las presiones de suministro para reducir las fugas en la red",
                  "La gestión de la demanda en periodos de escasez. Establecimiento de programas de suministro intermitente si fuera necesario.",
                  "La determinación de indicadores de desempeño (KPIs) para periodos prolongados, considerando la variabilidad de los parámetros hidráulicos y de calidad.",
                ], [
                  "Establishing the set points of regulation elements to guarantee appropriate values of hydraulic variables at all times: pressures, flow velocities, etc.",
                  "Calibrating the model from measurements over extended periods",
                  "Analysing the reliability and responsiveness of the network in any eventuality and at any time. Managing reservoir reserves.",
                  "Analysing the dynamic behaviour of sectorised networks and the actions to be taken when necessary to guarantee supply.",
                  "Programming network maintenance activities that affect the supply system. Determining the optimal start time of works and the permitted duration.",
                  "Optimising the system operating regime to reduce energy consumption on a typical day.",
                  "Monitoring water quality and programming the actions required to maintain quality parameters throughout the network: periodic discharges to sewers, rechlorination stations, etc.",
                  "Analysing optimal operating modes for sudden or prolonged demand increases (events, tourist populations) or reductions (weekends, summer depopulation, etc.)",
                  "Managing supply pressures to reduce network leaks",
                  "Managing demand during scarcity periods. Establishing intermittent supply programmes if necessary.",
                  "Determining performance indicators (KPIs) for extended periods, considering the variability of hydraulic and quality parameters.",
                ], [
                  "L'établissement des consignes des éléments de régulation pour garantir des valeurs adéquates des variables hydrauliques à tout moment : pressions, vitesses d'écoulement, etc.",
                  "La calibration du modèle à partir de mesures sur des périodes prolongées",
                  "L'analyse de la fiabilité et de la capacité de réponse du réseau face à tout imprévu et à tout moment. Gestion des réserves dans les réservoirs.",
                  "L'analyse du comportement dynamique des réseaux sectorisés et des actions à mener si nécessaire pour garantir l'approvisionnement.",
                  "La planification des interventions de maintenance sur le réseau affectant le système d'approvisionnement. Détermination du moment optimal de début des travaux et de la durée autorisée.",
                  "L'optimisation du régime d'exploitation du système pour réduire la consommation énergétique sur une journée type.",
                  "Le suivi de la qualité de l'eau et la programmation des actions requises pour maintenir les paramètres de qualité dans tout le réseau : purges périodiques vers les égouts, stations de rechloration, etc.",
                  "L'analyse des modes d'exploitation optimaux face à des augmentations ponctuelles ou prolongées de la demande (événements, populations touristiques) ou face à des réductions de celle-ci (week-ends, dépeuplement estival, etc.)",
                  "La gestion des pressions d'approvisionnement pour réduire les fuites dans le réseau",
                  "La gestion de la demande en périodes de pénurie. Mise en place de programmes d'approvisionnement intermittent si nécessaire.",
                  "La détermination d'indicateurs de performance (KPIs) pour des périodes prolongées, en tenant compte de la variabilité des paramètres hydrauliques et de qualité.",
                ], [
                  "O estabelecimento das consignas dos elementos de regulação para garantir valores adequados das variáveis hidráulicas em todo momento: pressões, velocidades de escoamento, etc.",
                  "A calibração do modelo a partir de medições em períodos prolongados",
                  "A análise da confiabilidade e capacidade de resposta da rede diante de qualquer eventualidade e a qualquer momento. Gestão das reservas em reservatórios.",
                  "A análise do comportamento dinâmico das redes setorizadas e as ações a realizar em caso necessário para garantir o abastecimento.",
                  "A programação de ações de manutenção na rede que afetem o sistema de abastecimento. Determinação do momento ideal de início das obras e a duração permitida.",
                  "A otimização do regime de operação do sistema para reduzir o consumo energético em um dia típico.",
                  "O acompanhamento da qualidade da água e a programação das ações necessárias para manter os parâmetros de qualidade em toda a rede: descargas periódicas na rede de esgoto, estações de recloração, etc.",
                  "A análise dos modos de operação ideais diante de aumentos de consumo pontuais ou prolongados (eventos, populações turísticas) ou diante de reduções deste (fins de semana, despovoamento no verão, etc.)",
                  "A gestão das pressões de abastecimento para reduzir os vazamentos na rede",
                  "A gestão do consumo em períodos de escassez. Estabelecimento de programas de abastecimento intermitente se necessário.",
                  "A determinação de indicadores de desempenho (KPIs) para períodos prolongados, considerando a variabilidade dos parâmetros hidráulicos e de qualidade.",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 rounded-full mt-2"
                      style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>

            {/* Tab: Digital Twins */}
            <AccordionItem title={localize(locale, "Trabajando con Gemelos Digitales", "Working with Digital Twins", "Travailler avec des Jumeaux Numériques", "Trabalhando com Gêmeos Digitais")}>
              <ul className="flex flex-col gap-3 list-none p-0">
                {localize(locale, [
                  "La carga del modelo con datos reales en cada momento, relativos a demandas, niveles en depósitos, modos de operación de los elementos de regulación, etc.",
                  "El mantenimiento del modelo hidráulico y de calidad permanentemente calibrado",
                  "La inferencia del valor de cualquier magnitud no medida, a través de la simulación.",
                  "El cálculo de cualquier tipo de indicador basado en los datos históricos reales y simulados (no medidos)",
                  "La detección de cualquier anomalía en los parámetros de control de la red, y la estimación de sus posibles causas.",
                  "La simulación de posibles actuaciones previas a su ejecución, ante cualquier evento imprevisto, contando con los elementos de regulación disponibles en ese momento.",
                  "La detección precoz de cualquier evento contaminante del agua y la determinación de las actuaciones requeridas para volver a un estado normal.",
                  "El seguimiento de los caudales nocturnos en redes sectorizadas y el análisis de otras variables para la localización de fugas.",
                  "El contraste continuo de los caudales suministrados con las demandas registradas, si se dispone de telelectura.",
                  "El seguimiento en tiempo real de todo tipo de balances hidráulicos, energéticos o de sustancias disueltas en el agua.",
                  "El entrenamiento de operadores mediante la reproducción de situaciones pasadas y la aplicación de actuaciones para corregir supuestas anomalías.",
                  "La predicción del comportamiento de la red a corto plazo, estimando las demandas y aplicando las leyes de regulación previstas.",
                  "La optimización del esquema de regulación de la red para alcanzar los objetivos buscados en las próximas 24 h, teniendo en cuenta el estado actual de la red, la disponibilidad de recursos, los precios de la energía, etc.",
                ], [
                  "Loading the model with real data at any given moment, relating to demands, reservoir levels, operating modes of regulation elements, etc.",
                  "Keeping the hydraulic and quality model permanently calibrated",
                  "Inferring the value of any unmeasured quantity through simulation",
                  "Calculating any type of indicator based on real historical and simulated (unmeasured) data",
                  "Detecting any anomaly in the network's control parameters, and estimating their possible causes",
                  "Simulating possible actions before executing them, in response to any unforeseen event, using the regulation elements available at that moment",
                  "Early detection of any water contamination event and determination of the actions required to return to a normal state",
                  "Monitoring night flows in sectorised networks and analysing other variables for leak localisation",
                  "Continuously contrasting supplied flows with registered demands, if meter reading is available",
                  "Real-time monitoring of all types of hydraulic, energy or dissolved substance balances in the water",
                  "Training operators by reproducing past situations and applying actions to correct supposed anomalies",
                  "Predicting short-term network behaviour, estimating demands and applying planned regulation rules",
                  "Optimising the network's regulation scheme to achieve the desired objectives in the next 24 h, taking into account the current state of the network, resource availability, energy prices, etc.",
                ], [
                  "Le chargement du modèle avec des données réelles à chaque instant, relatives aux demandes, aux niveaux des réservoirs, aux modes de fonctionnement des éléments de régulation, etc.",
                  "Le maintien du modèle hydraulique et de qualité en permanence calibré",
                  "L'inférence de la valeur de toute grandeur non mesurée, par le biais de la simulation.",
                  "Le calcul de tout type d'indicateur basé sur les données historiques réelles et simulées (non mesurées)",
                  "La détection de toute anomalie dans les paramètres de contrôle du réseau, et l'estimation de ses causes possibles.",
                  "La simulation d'actions possibles avant leur exécution, face à tout événement imprévu, en tenant compte des éléments de régulation disponibles à ce moment-là.",
                  "La détection précoce de tout événement de contamination de l'eau et la détermination des actions requises pour revenir à un état normal.",
                  "Le suivi des débits nocturnes dans les réseaux sectorisés et l'analyse d'autres variables pour la localisation des fuites.",
                  "La comparaison continue des débits fournis avec les demandes enregistrées, si l'on dispose du télérelevé.",
                  "Le suivi en temps réel de tous types de bilans hydrauliques, énergétiques ou de substances dissoutes dans l'eau.",
                  "La formation des opérateurs par la reproduction de situations passées et l'application d'actions pour corriger de supposées anomalies.",
                  "La prédiction du comportement du réseau à court terme, en estimant les demandes et en appliquant les lois de régulation prévues.",
                  "L'optimisation du schéma de régulation du réseau pour atteindre les objectifs recherchés dans les 24 prochaines heures, en tenant compte de l'état actuel du réseau, de la disponibilité des ressources, des prix de l'énergie, etc.",
                ], [
                  "O carregamento do modelo com dados reais a cada momento, relativos a consumos, níveis em reservatórios, modos de operação dos elementos de regulação, etc.",
                  "A manutenção do modelo hidráulico e de qualidade permanentemente calibrado",
                  "A inferência do valor de qualquer grandeza não medida, através da simulação.",
                  "O cálculo de qualquer tipo de indicador baseado nos dados históricos reais e simulados (não medidos)",
                  "A detecção de qualquer anomalia nos parâmetros de controle da rede, e a estimativa de suas possíveis causas.",
                  "A simulação de possíveis ações antes de sua execução, diante de qualquer evento imprevisto, contando com os elementos de regulação disponíveis naquele momento.",
                  "A detecção precoce de qualquer evento de contaminação da água e a determinação das ações necessárias para retornar a um estado normal.",
                  "O acompanhamento das vazões noturnas em redes setorizadas e a análise de outras variáveis para a localização de vazamentos.",
                  "O contraste contínuo das vazões fornecidas com os consumos registrados, se houver telemedição disponível.",
                  "O acompanhamento em tempo real de todo tipo de balanços hidráulicos, energéticos ou de substâncias dissolvidas na água.",
                  "O treinamento de operadores por meio da reprodução de situações passadas e a aplicação de ações para corrigir supostas anomalias.",
                  "A previsão do comportamento da rede a curto prazo, estimando os consumos e aplicando as leis de regulação previstas.",
                  "A otimização do esquema de regulação da rede para alcançar os objetivos buscados nas próximas 24 h, levando em conta o estado atual da rede, a disponibilidade de recursos, os preços da energia, etc.",
                ]).map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 rounded-full mt-2"
                      style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                  </li>
                ))}
              </ul>
            </AccordionItem>
          </div>

          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En cualquier caso, hay que dejar claro que la versión libre del QGISRed no va a ofrecer soluciones a todos
                estos problemas formulados, ni es su intención. QGISRed se limita a simular el comportamiento de la red bajo
                unas condiciones predefinidas, tal como hace actualmente EPANET. Solo que ofrece muchas más herramientas de
                modelación, contempla más tipos de elementos, y permite conectar el modelo con los datos reales.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Mientras que reproducir la realidad es un reto contrastable, ofrecer soluciones a muchos de los problemas
                planteados pasa por tener en cuenta el criterio de los responsables de gestionar la red. La solución en
                estos casos no es única, y a menudo se recurre a técnicas de optimización o de inteligencia artificial para
                alcanzar soluciones factibles. Estas técnicas quedan por ahora fuera del alcance de la versión libre de
                QGISRed. En cambio, el usuario podrá comprobar con el producto que se le ofrece la respuesta ante cualquier
                situación planteada, lo que supone ya un avance importante. En consecuencia, el criterio ingenieril y el
                buen saber hacer de los expertos resultan aún de gran valor para ofrecer soluciones acertadas a estos
                problemas.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                In any case, it must be made clear that the free version of QGISRed is not going to offer solutions to all these formulated problems, nor is it its intention. QGISRed is limited to simulating the behaviour of the network under predefined conditions, as EPANET currently does. Only it offers many more modelling tools, covers more types of elements, and allows the model to be connected with real data.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                While reproducing reality is a verifiable challenge, offering solutions to many of the problems raised requires taking into account the criteria of those responsible for managing the network. The solution in these cases is not unique, and optimisation or artificial intelligence techniques are often used to reach feasible solutions. These techniques are currently beyond the scope of the free version of QGISRed. However, the user will be able to check with the product on offer the response to any given situation, which already represents an important advance. Consequently, engineering judgement and the good expertise of specialists are still of great value in offering the right solutions to these problems.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En tout état de cause, il convient de préciser que la version libre de QGISRed ne va pas offrir de solutions
                à tous ces problèmes formulés, et telle n&apos;est pas son intention. QGISRed se limite à simuler le
                comportement du réseau sous des conditions prédéfinies, comme le fait actuellement EPANET. Seulement, il
                offre beaucoup plus d&apos;outils de modélisation, prend en compte davantage de types d&apos;éléments, et permet
                de connecter le modèle aux données réelles.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Alors que reproduire la réalité est un défi vérifiable, offrir des solutions à bon nombre des problèmes
                posés implique de tenir compte du jugement des responsables de la gestion du réseau. La solution dans ces
                cas n&apos;est pas unique, et l&apos;on a souvent recours à des techniques d&apos;optimisation ou d&apos;intelligence
                artificielle pour parvenir à des solutions réalisables. Ces techniques restent pour l&apos;instant hors du
                champ de la version libre de QGISRed. En revanche, l&apos;utilisateur pourra vérifier avec le produit proposé
                la réponse à toute situation posée, ce qui représente déjà une avancée importante. Par conséquent, le
                jugement d&apos;ingénieur et le savoir-faire des experts demeurent d&apos;une grande valeur pour offrir des
                solutions justes à ces problèmes.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Em qualquer caso, é preciso deixar claro que a versão livre do QGISRed não vai oferecer soluções a todos
                esses problemas formulados, nem essa é sua intenção. O QGISRed se limita a simular o comportamento da rede sob
                condições predefinidas, tal como faz atualmente o EPANET. Apenas oferece muito mais ferramentas de
                modelação, contempla mais tipos de elementos, e permite conectar o modelo com os dados reais.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Enquanto reproduzir a realidade é um desafio verificável, oferecer soluções a muitos dos problemas
                propostos passa por levar em conta o critério dos responsáveis por gerenciar a rede. A solução nesses
                casos não é única, e frequentemente recorre-se a técnicas de otimização ou de inteligência artificial para
                alcançar soluções viáveis. Essas técnicas ficam por enquanto fora do alcance da versão livre do
                QGISRed. Em contrapartida, o usuário poderá comprovar com o produto oferecido a resposta diante de qualquer
                situação proposta, o que já representa um avanço importante. Consequentemente, o critério de engenharia e o
                bom saber fazer dos especialistas continuam sendo de grande valor para oferecer soluções acertadas a esses
                problemas.
              </p>
            </>
          )}

          <div className="mt-6">
            <Image
              src="/images/presentacion-screenshot.jpg"
              alt="QGISRed software screenshot"
              width={1000}
              height={1000}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Instalación / Installation */}
      <section id={anchorId("instalacion", locale)} className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Instalación de QGISRed", "Installing QGISRed", "Installation de QGISRed", "Instalação do QGISRed")} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {localize(locale,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed no es una aplicación autónoma de escritorio al uso, que haya que descargar primero y después
                    instalar ejecutando el fichero descargado. Tampoco es una aplicación web que se descarga al momento de
                    ejecutarla.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed es un complemento de QGIS, y por tanto se requiere instalar previamente este producto, en su
                    versión de escritorio, desde la página oficial{" "}
                    <a
                      href="https://www.qgis.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                    >
                      https://www.qgis.org
                    </a>
                    . Los usuarios pueden instalar la versión más reciente para Windows, aunque también es compatible con
                    versiones anteriores.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGIS es el software de GIS libre de mayor difusión actualmente en el mundo, y ofrece en sus últimas
                    versiones una lista innumerable de prestaciones, incluida la interoperabilidad con todo tipo de entornos
                    y formato de los datos. Está disponible para Windows, macOS, Linux, BSD, móviles y tabletas. Sin
                    embargo, QGISRed funciona por ahora solo sobre Windows y para versiones 3.28 o posteriores. Además,
                    aunque QGIS puede soportar hasta 40 idiomas, QGISRed está disponible por ahora solo en inglés.
                  </p>

                  <div className="mb-6">
                    <AccordionItem title="Instalación del complemento QGISRed">
                      <ol className="flex flex-col gap-2 list-decimal pl-5">
                        <li>Desde el menú Complementos, elegir la opción <strong>Administrar e instalar complementos</strong>.</li>
                        <li>Desde la pestaña Todos, buscar por su nombre el plugin QGISRed, y a continuación deberá mostrarse la pantalla siguiente, al ser un complemento registrado en el repositorio oficial de QGIS</li>
                        <li>Pulsar el botón <strong>Instalar Complemento</strong>, y en cuestión de segundos se habrá instalado la aplicación. Cerrar finalmente la ventana.</li>
                        <li>En la barra de menús aparecerá el nuevo menú de QGISRed y en la botonadura se mostrará también la nueva barra de botones de QGISRed, desde donde alternativamente se puede acceder a todas las prestaciones de QGISRed.</li>
                        <li>Falta un último paso. En cuanto intentes utilizar por primera vez cualquier opción de QGISRed se mostrará una nueva pantalla solicitando que completes la instalación con las librerías (dlls) que contienen todos los algoritmos que configuran el núcleo de QGISRed. Es solo unos segundo más.</li>
                        <li>Con ello ha finalizado la instalación de una aplicación que te sorprenderá por las numerosas prestaciones añadidas sobre las que ya ofrece QGIS, todas ellas orientadas a la confección y explotación de modelos de redes hidráulicas.</li>
                      </ol>
                    </AccordionItem>
                    <AccordionItem title="El repositorio de complementos de QGIS">
                      <p>
                        Actualmente hay registrados más de 1100 complementos activos de QGIS, pero apenas media docena tienen
                        que ver con las redes hidráulicas. De entre ellos, QGISRed es el que más prestaciones ofrece hoy en
                        día. Si vuelves a abrir la ventana del complemento QGISRed puedes ver un resumen de sus prestaciones,
                        el número de descargas actuales y su valoración.
                      </p>
                      <p className="mt-2">
                        En la misma ventana tienes un enlace a la ficha de QGISRed del repositorio de QGIS (puedes llegar también pinchando{" "}
                        <a href="https://plugins.qgis.org/plugins/QGISRed/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>aquí</a>
                        ), donde encontrarás algunos detalles más, y el histórico de versiones desde Septiembre 2019 en que se subió la primera versión de QGISRed al repositorio. Pinchando sobre ellas puedes ver las novedades aportadas en cada una.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="Versiones beta y actualizaciones">
                      <p>
                        QGIS permite también instalar versiones beta provisionales a través de la pestaña Instalar a partir
                        del ZIP de la misma ventana de instalación, pero ello está reservado a los usuarios colaboradores.
                        Cada vez que se lance una nueva versión oficial, se mostrará un mensaje emergente informando de su
                        existencia, el cual llevará al usuario al repositorio de plugins de QGIS para conocer las novedades,
                        aunque también las vas a tener en esta web. Además, desde la propia ventana del complemento QGISRed,
                        se invitará al usuario a actualizar la versión actual. Solo hay que pulsar el botón de la parte
                        inferior de la ventana <strong>Actualizar Complemento</strong>, el cual se mostrará activado, para
                        sustituir automáticamente la versión anterior por la nueva en cuestión de segundos. A continuación,
                        al pulsar cualquier botón de QGISRed, se te pedirá que actualices también las librerías.
                      </p>
                      <p className="mt-2">
                        Finalmente, si quieres saber cuál es la versión de QGISRed actualmente instalada, solo tienes que
                        leerla en la propia ventana del complemento o pinchando en la opción de menú About QGISRed.
                      </p>
                    </AccordionItem>
                  </div>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed is not a conventional standalone desktop application that you first download and then install by running the downloaded file. Nor is it a web application that downloads at the moment you run it.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed is a QGIS plugin, and therefore this product must be installed first, in its desktop version, from the official website{" "}
                    <a
                      href="https://www.qgis.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                    >
                      https://www.qgis.org
                    </a>
                    . Users can install the most recent version for Windows, although it is also compatible with earlier versions.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGIS is currently the most widely distributed free GIS software in the world, and offers in its latest versions an innumerable list of features, including interoperability with all types of environments and data formats. It is available for Windows, macOS, Linux, BSD, mobiles and tablets. However, QGISRed currently only works on Windows and for versions 3.28 or later. Furthermore, although QGIS can support up to 40 languages, QGISRed is currently only available in English.
                  </p>

                  <div className="mb-6">
                    <AccordionItem title="Installing the QGISRed plugin">
                      <ol className="flex flex-col gap-2 list-decimal pl-5">
                        <li>From the Plugins menu, choose the <strong>Manage and Install Plugins</strong> option.</li>
                        <li>From the All tab, search for the QGISRed plugin by name, and the following screen should appear, as it is a plugin registered in the official QGIS repository.</li>
                        <li>Click the <strong>Install Plugin</strong> button, and within seconds the application will be installed. Finally close the window.</li>
                        <li>The new QGISRed menu will appear in the menu bar and the new QGISRed toolbar will also be shown, from which all QGISRed features can alternatively be accessed.</li>
                        <li>One final step remains. As soon as you try to use any QGISRed option for the first time, a new screen will appear asking you to complete the installation with the libraries (dlls) that contain all the algorithms that make up the QGISRed core. It only takes a few more seconds.</li>
                        <li>This completes the installation of an application that will surprise you with the numerous features added on top of those already offered by QGIS, all oriented towards the creation and operation of hydraulic network models.</li>
                      </ol>
                    </AccordionItem>
                    <AccordionItem title="The QGIS plugin repository">
                      <p>
                        There are currently more than 1100 active QGIS plugins registered, but barely half a dozen have to do with hydraulic networks. Among them, QGISRed is the one that offers the most features today. If you open the QGISRed plugin window again you can see a summary of its features, the current number of downloads and its rating.
                      </p>
                      <p className="mt-2">
                        In the same window you have a link to the QGISRed entry in the QGIS repository (you can also get there by clicking{" "}
                        <a href="https://plugins.qgis.org/plugins/QGISRed/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>here</a>
                        ), where you will find some further details, and the version history since September 2019 when the first version of QGISRed was uploaded to the repository. By clicking on them you can see the improvements brought in each one.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="Beta versions and updates">
                      <p>
                        QGIS also allows installing provisional beta versions through the Install from ZIP tab in the same installation window, but this is reserved for collaborating users. Each time a new official version is released, a pop-up message will appear informing you of its existence, which will take the user to the QGIS plugin repository to find out about the new features, although you will also have them on this website. Furthermore, from the QGISRed plugin window itself, the user will be invited to update the current version. Simply click the <strong>Upgrade Plugin</strong> button at the bottom of the window, which will be shown as active, to automatically replace the previous version with the new one in a matter of seconds. Then, when you click any QGISRed button, you will be asked to also update the libraries.
                      </p>
                      <p className="mt-2">
                        Finally, if you want to know which version of QGISRed is currently installed, you only need to read it in the plugin window itself or by clicking on the About QGISRed menu option.
                      </p>
                    </AccordionItem>
                  </div>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed n&apos;est pas une application de bureau autonome classique, qu&apos;il faudrait d&apos;abord télécharger
                    puis installer en exécutant le fichier téléchargé. Ce n&apos;est pas non plus une application web qui se
                    télécharge au moment de son exécution.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed est un complément de QGIS, et il est donc nécessaire d&apos;installer au préalable ce produit, dans
                    sa version de bureau, depuis le site officiel{" "}
                    <a
                      href="https://www.qgis.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                    >
                      https://www.qgis.org
                    </a>
                    . Les utilisateurs peuvent installer la version la plus récente pour Windows, bien qu&apos;elle soit également
                    compatible avec des versions antérieures.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGIS est actuellement le logiciel SIG libre le plus répandu au monde, et offre dans ses dernières
                    versions une liste innombrable de fonctionnalités, y compris l&apos;interopérabilité avec tous types
                    d&apos;environnements et de formats de données. Il est disponible pour Windows, macOS, Linux, BSD, mobiles
                    et tablettes. Cependant, QGISRed ne fonctionne pour l&apos;instant que sur Windows et pour les versions
                    3.28 ou ultérieures. De plus, bien que QGIS puisse prendre en charge jusqu&apos;à 40 langues, QGISRed
                    n&apos;est actuellement disponible qu&apos;en anglais.
                  </p>

                  <div className="mb-6">
                    <AccordionItem title="Installation du complément QGISRed">
                      <ol className="flex flex-col gap-2 list-decimal pl-5">
                        <li>Depuis le menu Extensions, choisir l&apos;option <strong>Gérer et installer les extensions</strong>.</li>
                        <li>Depuis l&apos;onglet Toutes, rechercher le plugin QGISRed par son nom, et l&apos;écran suivant devrait alors s&apos;afficher, s&apos;agissant d&apos;une extension enregistrée dans le dépôt officiel de QGIS</li>
                        <li>Cliquer sur le bouton <strong>Installer l&apos;extension</strong>, et en quelques secondes l&apos;application sera installée. Fermer enfin la fenêtre.</li>
                        <li>Dans la barre de menus apparaîtra le nouveau menu QGISRed, et dans la barre de boutons s&apos;affichera également la nouvelle barre d&apos;outils QGISRed, depuis laquelle on peut aussi accéder à toutes les fonctionnalités de QGISRed.</li>
                        <li>Il manque une dernière étape. Dès que vous essaierez d&apos;utiliser pour la première fois une option de QGISRed, un nouvel écran s&apos;affichera vous demandant de compléter l&apos;installation avec les bibliothèques (dll) contenant tous les algorithmes qui composent le noyau de QGISRed. Il ne s&apos;agit que de quelques secondes de plus.</li>
                        <li>Avec cela, l&apos;installation d&apos;une application qui vous surprendra par les nombreuses fonctionnalités ajoutées à celles déjà offertes par QGIS est terminée, toutes orientées vers la construction et l&apos;exploitation de modèles de réseaux hydrauliques.</li>
                      </ol>
                    </AccordionItem>
                    <AccordionItem title="Le dépôt d&apos;extensions de QGIS">
                      <p>
                        Il existe actuellement plus de 1100 extensions actives enregistrées pour QGIS, mais à peine une
                        demi-douzaine concernent les réseaux hydrauliques. Parmi elles, QGISRed est celle qui offre le plus
                        de fonctionnalités aujourd&apos;hui. Si vous rouvrez la fenêtre de l&apos;extension QGISRed, vous pouvez
                        voir un résumé de ses fonctionnalités, le nombre actuel de téléchargements et son évaluation.
                      </p>
                      <p className="mt-2">
                        Dans la même fenêtre, vous disposez d&apos;un lien vers la fiche de QGISRed du dépôt de QGIS (vous
                        pouvez également y accéder en cliquant{" "}
                        <a href="https://plugins.qgis.org/plugins/QGISRed/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>ici</a>
                        ), où vous trouverez quelques détails supplémentaires, ainsi que l&apos;historique des versions depuis
                        septembre 2019, date à laquelle la première version de QGISRed a été mise en ligne sur le dépôt. En
                        cliquant dessus, vous pouvez voir les nouveautés apportées par chacune d&apos;elles.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="Versions bêta et mises à jour">
                      <p>
                        QGIS permet également d&apos;installer des versions bêta provisoires via l&apos;onglet Installer depuis un
                        ZIP de la même fenêtre d&apos;installation, mais cela est réservé aux utilisateurs collaborateurs. À
                        chaque lancement d&apos;une nouvelle version officielle, un message contextuel s&apos;affichera pour
                        informer de son existence, lequel dirigera l&apos;utilisateur vers le dépôt de plugins de QGIS pour
                        découvrir les nouveautés, bien que vous les retrouviez également sur ce site. De plus, depuis la
                        fenêtre de l&apos;extension QGISRed elle-même, l&apos;utilisateur sera invité à mettre à jour la version
                        actuelle. Il suffit de cliquer sur le bouton en bas de la fenêtre{" "}
                        <strong>Mettre à jour l&apos;extension</strong>, qui s&apos;affichera activé, pour remplacer automatiquement
                        l&apos;ancienne version par la nouvelle en quelques secondes. Ensuite, en cliquant sur n&apos;importe quel
                        bouton de QGISRed, il vous sera également demandé de mettre à jour les bibliothèques.
                      </p>
                      <p className="mt-2">
                        Enfin, si vous souhaitez savoir quelle est la version de QGISRed actuellement installée, il vous
                        suffit de la lire dans la fenêtre de l&apos;extension elle-même ou en cliquant sur l&apos;option de menu
                        About QGISRed.
                      </p>
                    </AccordionItem>
                  </div>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O QGISRed não é um aplicativo autônomo de desktop convencional, que precise ser baixado primeiro e depois
                    instalado executando o arquivo baixado. Também não é um aplicativo web que é baixado no momento de
                    executá-lo.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O QGISRed é um complemento do QGIS, e, portanto, é necessário instalar previamente esse produto, em sua
                    versão de desktop, a partir do site oficial{" "}
                    <a
                      href="https://www.qgis.org"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
                    >
                      https://www.qgis.org
                    </a>
                    . Os usuários podem instalar a versão mais recente para Windows, embora também seja compatível com
                    versões anteriores.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O QGIS é o software GIS livre de maior difusão atualmente no mundo, e oferece em suas últimas
                    versões uma lista inúmera de funcionalidades, incluindo a interoperabilidade com todo tipo de ambientes
                    e formatos de dados. Está disponível para Windows, macOS, Linux, BSD, celulares e tablets. No
                    entanto, o QGISRed funciona por enquanto apenas no Windows e para versões 3.28 ou posteriores. Além disso,
                    embora o QGIS possa suportar até 40 idiomas, o QGISRed está disponível por enquanto somente em inglês.
                  </p>

                  <div className="mb-6">
                    <AccordionItem title="Instalação do complemento QGISRed">
                      <ol className="flex flex-col gap-2 list-decimal pl-5">
                        <li>No menu Complementos, escolha a opção <strong>Gerenciar e instalar complementos</strong>.</li>
                        <li>Na aba Todos, procure pelo nome o plugin QGISRed, e em seguida deverá aparecer a tela a seguir, por se tratar de um complemento registrado no repositório oficial do QGIS</li>
                        <li>Clique no botão <strong>Instalar Complemento</strong>, e em questão de segundos o aplicativo estará instalado. Feche por fim a janela.</li>
                        <li>Na barra de menus aparecerá o novo menu do QGISRed e na barra de botões também será exibida a nova barra de botões do QGISRed, a partir da qual é possível acessar alternativamente todas as funcionalidades do QGISRed.</li>
                        <li>Falta um último passo. Assim que você tentar usar pela primeira vez qualquer opção do QGISRed, será exibida uma nova tela solicitando que você complete a instalação com as bibliotecas (dlls) que contêm todos os algoritmos que compõem o núcleo do QGISRed. São apenas mais alguns segundos.</li>
                        <li>Com isso está concluída a instalação de um aplicativo que vai te surpreender pelas numerosas funcionalidades adicionadas às já oferecidas pelo QGIS, todas voltadas à elaboração e operação de modelos de redes hidráulicas.</li>
                      </ol>
                    </AccordionItem>
                    <AccordionItem title="O repositório de complementos do QGIS">
                      <p>
                        Atualmente há mais de 1100 complementos ativos registrados do QGIS, mas apenas meia dúzia têm
                        relação com redes hidráulicas. Entre eles, o QGISRed é o que oferece mais funcionalidades hoje
                        em dia. Se você abrir novamente a janela do complemento QGISRed pode ver um resumo de suas funcionalidades,
                        o número atual de downloads e sua avaliação.
                      </p>
                      <p className="mt-2">
                        Na mesma janela você tem um link para a ficha do QGISRed no repositório do QGIS (você pode chegar também clicando{" "}
                        <a href="https://plugins.qgis.org/plugins/QGISRed/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>aqui</a>
                        ), onde encontrará mais alguns detalhes, e o histórico de versões desde setembro de 2019, quando foi enviada a primeira versão do QGISRed ao repositório. Clicando sobre elas você pode ver as novidades trazidas em cada uma.
                      </p>
                    </AccordionItem>
                    <AccordionItem title="Versões beta e atualizações">
                      <p>
                        O QGIS também permite instalar versões beta provisórias através da aba Instalar a partir
                        do ZIP da mesma janela de instalação, mas isso é reservado aos usuários colaboradores.
                        Sempre que for lançada uma nova versão oficial, será exibida uma mensagem pop-up informando sobre sua
                        existência, a qual levará o usuário ao repositório de plugins do QGIS para conhecer as novidades,
                        embora você também as encontre neste site. Além disso, a partir da própria janela do complemento QGISRed,
                        o usuário será convidado a atualizar a versão atual. Basta clicar no botão na parte
                        inferior da janela <strong>Atualizar Complemento</strong>, que será exibido ativado, para
                        substituir automaticamente a versão anterior pela nova em questão de segundos. Em seguida,
                        ao clicar em qualquer botão do QGISRed, você será solicitado a atualizar também as bibliotecas.
                      </p>
                      <p className="mt-2">
                        Por fim, se você quiser saber qual é a versão do QGISRed atualmente instalada, basta
                        consultá-la na própria janela do complemento ou clicando na opção de menu About QGISRed.
                      </p>
                    </AccordionItem>
                  </div>
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-install.png"
                alt={localize(locale, "Instalación de QGISRed", "QGISRed installation", "Installation de QGISRed", "Instalação do QGISRed")}
                width={880}
                height={511}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar.png"
                alt={localize(locale, "Barra de herramientas QGISRed", "QGISRed toolbar", "Barre d'outils QGISRed", "Barra de ferramentas do QGISRed")}
                width={483}
                height={65}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar2.png"
                alt={localize(locale, "Barra de herramientas QGISRed 2", "QGISRed toolbar 2", "Barre d'outils QGISRed 2", "Barra de ferramentas do QGISRed 2")}
                width={423}
                height={65}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-window.png"
                alt={localize(locale, "Ventana principal QGISRed", "QGISRed main window", "Fenêtre principale QGISRed", "Janela principal do QGISRed")}
                width={521}
                height={204}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto en GitHub / GitHub Project */}
      <section id={anchorId("github", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Proyecto en GitHub", "GitHub Project", "Projet sur GitHub", "Projeto no GitHub")} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {localize(locale,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed no es un producto cerrado. La parte del código de QGISRed que interacciona con las funcionalidades de QGIS está desarrollada en <em>Python</em> y es dominio público, de acuerdo con los términos de la licencia{" "}
                    <a href="https://docs.qgis.org/3.22/en/docs/user_manual/appendices/GNU_GPL.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GNU GPL 2.0 de QGIS</a>
                    , la cual es extensible a todos los plugins distribuidos a través de su repositorio oficial. Dicho código es accesible a través del portal de GitHub{" "}
                    <a href="https://github.com/qgisred/qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>QGISRed</a>
                    {" "}y aloja todas las funcionalidades que afectan a la personalización de la interfaz gráfica de QGIS tras instalar el plugin, así como a ciertas capacidades de edición y selección de los elementos de la red.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A continuación, se muestra el contenido de la pestaña que aloja el código de QGISRed. Desde las dos últimas líneas se puede acceder también a los{" "}
                    <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuales en español e inglés</Link>
                  </p>

                  <ToggleSection title="Saber más sobre el proyecto de QGISRed en GitHub">
                    <p className="mb-3">
                      El proyecto QGISRed está en su primera fase de implementación, y por ahora el desarrollo del código
                      libre no es colaborativo, aunque está previsto abrirlo a la comunidad investigadora en el futuro.
                    </p>
                    <p className="mb-3">
                      En la parte de la derecha de esta pestaña se muestra también la licencia del plugin,{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("novedades", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>la última versión liberada</Link>
                      {" "}y todas las{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("historicodeversiones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versiones publicadas anteriormente con sus mejoras</Link>
                    </p>
                    <p className="mb-3">
                      Una sección muy importante de este portal es la pestaña Issues, que está plenamente activa, y donde
                      los usuarios pueden reportar cualquier incidencia. Está dividida en dos secciones, una para las
                      incidencias Abiertas (la mayoría son mejoras sugeridas para el futuro) y otra para las incidencias
                      Cerradas o resueltas, que son todas aquellas que afectan seriamente a alguna funcionalidad de la
                      aplicación.
                    </p>
                    <p className="mb-3">
                      Para poder crear una nueva incidencia, los usuarios deben registrarse previamente en GitHub, a través
                      del botón Sign up de la banda superior, y después seguir las instrucciones. A continuación, ya pueden
                      crear una nueva incidencia desde el botón New Issue, o responder a las incidencias abiertas formuladas
                      por otros usuarios.
                    </p>
                    <p className="mb-3">
                      También en el futuro alojaremos en la pestaña Wiki de este portal una versión abierta y colaborativa
                      de los manuales de la aplicación, tanto en español como en inglés.
                    </p>
                    <p>
                      Sin embargo, <strong>la mayor parte del código de QGISRed está desarrollado en C# para Windows</strong>, configurando una serie de librerías denominadas <strong><em>GISRed.xxx.dll</em>,</strong> las cuales son utilizadas por la interfaz gráfica. Estas librerías contienen la mayoría de los algoritmos, formularios y cuadros de diálogo propios de la aplicación, y se instalan en la carpeta …/AppData/Roaming/QGISRed/dlls/… del perfil del usuario al pulsar sobre cualquier botón u opción propia del plugin, una vez instalado. Todos los algoritmos contenidos en dicha librería han sido desarrollados desde cero, y no utilizan ninguna otra librería externa, ni las propias de QGIS, no generando así ninguna dependencia, excepto con la librería <em>Epanet2.dll</em> correspondiente a la Toolkit 2.3 de EPANET (versión 2.3.4), utilizada para lanzar las simulaciones hidráulicas y de calidad, y la librería <em>Shapelib.dll</em> utilizada para leer y escribir los ficheros .shp; ambas librerías se instalan al mismo tiempo que las librerías de QGISRed. Por otras parte, los diálogos en Python se han construido utilizando la plataforma{" "}
                      <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Qt</a>
                      , que es también de dominio público.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed is not a closed product. The part of QGISRed&apos;s code that interacts with QGIS functionalities is developed in <em>Python</em> and is in the public domain, in accordance with the terms of the{" "}
                    <a href="https://docs.qgis.org/3.22/en/docs/user_manual/appendices/GNU_GPL.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GNU GPL 2.0 QGIS licence</a>
                    , which is extensible to all plugins distributed through its official repository. This code is accessible through the GitHub portal{" "}
                    <a href="https://github.com/qgisred/qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>QGISRed</a>
                    {" "}and hosts all the functionalities affecting the customisation of the QGIS graphical interface after installing the plugin, as well as certain editing and selection capabilities of the network elements.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Below, the content of the tab hosting the QGISRed code is shown. From the last two lines you can also access the{" "}
                    <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuals in Spanish and English</Link>
                  </p>

                  <ToggleSection title="Learn more about the QGISRed project on GitHub">
                    <p className="mb-3">
                      The QGISRed project is in its first implementation phase, and for now the development of the free code is not collaborative, although it is planned to open it to the research community in the future.
                    </p>
                    <p className="mb-3">
                      On the right-hand side of this tab, the plugin&apos;s licence is also shown,{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("novedades", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>the latest released version</Link>
                      {" "}and all{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("historicodeversiones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>previously published versions with their improvements</Link>
                    </p>
                    <p className="mb-3">
                      A very important section of this portal is the Issues tab, which is fully active, and where users can report any incident. It is divided into two sections, one for Open issues (most are suggestions for the future) and another for Closed or resolved issues, which are all those that seriously affect some functionality of the application.
                    </p>
                    <p className="mb-3">
                      To create a new issue, users must first register on GitHub, through the Sign up button at the top, and then follow the instructions. They can then create a new issue using the New Issue button, or respond to open issues raised by other users.
                    </p>
                    <p className="mb-3">
                      Also in the future we will host in the Wiki tab of this portal an open and collaborative version of the application manuals, both in Spanish and English.
                    </p>
                    <p>
                      However, <strong>the majority of QGISRed&apos;s code is developed in C# for Windows</strong>, configuring a series of libraries called <strong><em>GISRed.xxx.dll</em>,</strong> which are used by the graphical interface. These libraries contain the majority of the algorithms, forms and dialogue boxes specific to the application, and are installed in the …/AppData/Roaming/QGISRed/dlls/… folder of the user&apos;s profile when any button or option of the plugin is pressed, once installed. All the algorithms contained in this library have been developed from scratch, and do not use any other external library, nor those of QGIS itself, thus not generating any dependency, except with the <em>Epanet2.dll</em> library corresponding to the EPANET 2.3 Toolkit (version 2.3.4), used to launch hydraulic and quality simulations, and the <em>Shapelib.dll</em> library used to read and write .shp files; both libraries are installed at the same time as the QGISRed libraries. On the other hand, the Python dialogues have been built using the{" "}
                      <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Qt</a>
                      {" "}platform, which is also in the public domain.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed n&apos;est pas un produit fermé. La partie du code de QGISRed qui interagit avec les fonctionnalités de QGIS est développée en <em>Python</em> et relève du domaine public, conformément aux termes de la licence{" "}
                    <a href="https://docs.qgis.org/3.22/en/docs/user_manual/appendices/GNU_GPL.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GNU GPL 2.0 de QGIS</a>
                    , laquelle est extensible à tous les plugins distribués via son dépôt officiel. Ce code est accessible via le portail GitHub{" "}
                    <a href="https://github.com/qgisred/qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>QGISRed</a>
                    {" "}et héberge toutes les fonctionnalités relatives à la personnalisation de l&apos;interface graphique de QGIS après l&apos;installation du plugin, ainsi que certaines capacités d&apos;édition et de sélection des éléments du réseau.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Ci-dessous est présenté le contenu de l&apos;onglet hébergeant le code de QGISRed. Depuis les deux dernières lignes, vous pouvez également accéder aux{" "}
                    <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuels en espagnol et en anglais</Link>
                  </p>

                  <ToggleSection title="En savoir plus sur le projet QGISRed sur GitHub">
                    <p className="mb-3">
                      Le projet QGISRed en est à sa première phase de mise en œuvre, et pour l&apos;instant le développement du
                      code libre n&apos;est pas collaboratif, bien qu&apos;il soit prévu de l&apos;ouvrir à la communauté de recherche
                      à l&apos;avenir.
                    </p>
                    <p className="mb-3">
                      Dans la partie droite de cet onglet est également affichée la licence du plugin,{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("novedades", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>la dernière version publiée</Link>
                      {" "}ainsi que toutes les{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("historicodeversiones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versions publiées précédemment avec leurs améliorations</Link>
                    </p>
                    <p className="mb-3">
                      Une section très importante de ce portail est l&apos;onglet Issues, pleinement actif, où les
                      utilisateurs peuvent signaler tout incident. Il est divisé en deux sections, l&apos;une pour les
                      incidents Ouverts (la plupart sont des améliorations suggérées pour l&apos;avenir) et l&apos;autre pour les
                      incidents Fermés ou résolus, qui sont tous ceux qui affectent sérieusement une fonctionnalité de
                      l&apos;application.
                    </p>
                    <p className="mb-3">
                      Pour pouvoir créer un nouvel incident, les utilisateurs doivent d&apos;abord s&apos;inscrire sur GitHub, via
                      le bouton Sign up de la bande supérieure, puis suivre les instructions. Ils peuvent ensuite créer un
                      nouvel incident depuis le bouton New Issue, ou répondre aux incidents ouverts formulés par d&apos;autres
                      utilisateurs.
                    </p>
                    <p className="mb-3">
                      À l&apos;avenir également, nous hébergerons dans l&apos;onglet Wiki de ce portail une version ouverte et
                      collaborative des manuels de l&apos;application, tant en espagnol qu&apos;en anglais.
                    </p>
                    <p>
                      Cependant, <strong>la majeure partie du code de QGISRed est développée en C# pour Windows</strong>, constituant une série de bibliothèques appelées <strong><em>GISRed.xxx.dll</em>,</strong> qui sont utilisées par l&apos;interface graphique. Ces bibliothèques contiennent la plupart des algorithmes, formulaires et boîtes de dialogue propres à l&apos;application, et s&apos;installent dans le dossier …/AppData/Roaming/QGISRed/dlls/… du profil de l&apos;utilisateur lorsqu&apos;on clique sur un bouton ou une option du plugin, une fois celui-ci installé. Tous les algorithmes contenus dans cette bibliothèque ont été développés à partir de zéro, et n&apos;utilisent aucune autre bibliothèque externe, ni celles propres à QGIS, ne générant ainsi aucune dépendance, à l&apos;exception de la bibliothèque <em>Epanet2.dll</em> correspondant à la Toolkit 2.3 d&apos;EPANET (version 2.3.4), utilisée pour lancer les simulations hydrauliques et de qualité, et de la bibliothèque <em>Shapelib.dll</em> utilisée pour lire et écrire les fichiers .shp ; ces deux bibliothèques s&apos;installent en même temps que les bibliothèques de QGISRed. Par ailleurs, les boîtes de dialogue en Python ont été construites en utilisant la plateforme{" "}
                      <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Qt</a>
                      , qui est également du domaine public.
                    </p>
                  </ToggleSection>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    O QGISRed não é um produto fechado. A parte do código do QGISRed que interage com as funcionalidades do QGIS é desenvolvida em <em>Python</em> e é de domínio público, de acordo com os termos da licença{" "}
                    <a href="https://docs.qgis.org/3.22/en/docs/user_manual/appendices/GNU_GPL.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GNU GPL 2.0 do QGIS</a>
                    , a qual é extensível a todos os plugins distribuídos através de seu repositório oficial. Esse código é acessível através do portal do GitHub{" "}
                    <a href="https://github.com/qgisred/qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>QGISRed</a>
                    {" "}e hospeda todas as funcionalidades que afetam a personalização da interface gráfica do QGIS após instalar o plugin, assim como certas capacidades de edição e seleção dos elementos da rede.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A seguir, é mostrado o conteúdo da aba que hospeda o código do QGISRed. A partir das duas últimas linhas também é possível acessar os{" "}
                    <Link href={{ pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuais em espanhol e inglês</Link>
                  </p>

                  <ToggleSection title="Saber mais sobre o projeto do QGISRed no GitHub">
                    <p className="mb-3">
                      O projeto QGISRed está em sua primeira fase de implementação, e por enquanto o desenvolvimento do
                      código livre não é colaborativo, embora esteja previsto abri-lo à comunidade de pesquisa no futuro.
                    </p>
                    <p className="mb-3">
                      Na parte direita desta aba também é exibida a licença do plugin,{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("novedades", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>a última versão liberada</Link>
                      {" "}e todas as{" "}
                      <Link href={{ pathname: "/capacidades", hash: anchorHash("historicodeversiones", locale) }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versões publicadas anteriormente com suas melhorias</Link>
                    </p>
                    <p className="mb-3">
                      Uma seção muito importante deste portal é a aba Issues, que está plenamente ativa, e onde
                      os usuários podem reportar qualquer ocorrência. Está dividida em duas seções, uma para as
                      ocorrências Abertas (a maioria são melhorias sugeridas para o futuro) e outra para as ocorrências
                      Fechadas ou resolvidas, que são todas aquelas que afetam seriamente alguma funcionalidade do
                      aplicativo.
                    </p>
                    <p className="mb-3">
                      Para poder criar uma nova ocorrência, os usuários devem se cadastrar previamente no GitHub, através
                      do botão Sign up da faixa superior, e depois seguir as instruções. Em seguida, já podem
                      criar uma nova ocorrência pelo botão New Issue, ou responder às ocorrências abertas formuladas
                      por outros usuários.
                    </p>
                    <p className="mb-3">
                      Também no futuro hospedaremos na aba Wiki deste portal uma versão aberta e colaborativa
                      dos manuais do aplicativo, tanto em espanhol quanto em inglês.
                    </p>
                    <p>
                      No entanto, <strong>a maior parte do código do QGISRed é desenvolvida em C# para Windows</strong>, configurando uma série de bibliotecas denominadas <strong><em>GISRed.xxx.dll</em>,</strong> as quais são utilizadas pela interface gráfica. Essas bibliotecas contêm a maioria dos algoritmos, formulários e caixas de diálogo próprios do aplicativo, e são instaladas na pasta …/AppData/Roaming/QGISRed/dlls/… do perfil do usuário ao clicar em qualquer botão ou opção própria do plugin, uma vez instalado. Todos os algoritmos contidos nessa biblioteca foram desenvolvidos do zero, e não utilizam nenhuma outra biblioteca externa, nem as próprias do QGIS, não gerando assim nenhuma dependência, exceto com a biblioteca <em>Epanet2.dll</em> correspondente à Toolkit 2.3 do EPANET (versão 2.3.4), utilizada para executar as simulações hidráulicas e de qualidade, e a biblioteca <em>Shapelib.dll</em> utilizada para ler e escrever os arquivos .shp; ambas as bibliotecas são instaladas ao mesmo tempo que as bibliotecas do QGISRed. Por outro lado, os diálogos em Python foram construídos utilizando a plataforma{" "}
                      <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Qt</a>
                      , que também é de domínio público.
                    </p>
                  </ToggleSection>
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/github-emblem.png"
                alt="GitHub"
                width={1024}
                height={576}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-credit1.png"
                alt="GitHub QGISRed"
                width={1243}
                height={841}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-credit2.png"
                alt="GitHub QGISRed Issues"
                width={1024}
                height={307}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Créditos / Credits */}
      <section id={anchorId("creditos", locale)} className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Créditos", "Credits", "Crédits", "Créditos")} />

          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proyecto QGISRed nace por <strong>iniciativa del{" "}
                <a href="https://iiama.webs.upv.es/investigacion/grupos-de-investigacion/redes-hidraulicas-y-sistemas-a-presion/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Grupo de Investigación en Redes Hidráulicas y Sistemas a Presión</a>
                </strong>{" "}(REDHISP), del{" "}
                <a href="https://www.iiama.upv.es/iiama/es/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Instituto de Ingeniería del Agua y Medio Ambiente</a>
                {" "}(IIAMA) de la{" "}
                <a href="http://www.upv.es/es" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Universitat Politècnica de València</a>
                {" "}(UPV), como una propuesta para retomar las prestaciones de la antigua aplicación GISRed y adecuarlas a un entorno de trabajo más actual, promoviendo al mismo tiempo su difusión en todo el mundo.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proyecto arranca con una <strong>Ayuda de la Generalitat Valenciana</strong> para la contratación de Personal de Apoyo a la Transferencia Tecnológica (APOTI/2018/006), por un importe efectivo de 18.300 € y duración desde Nov 2018 hasta Julio 2019. A partir de esa fecha el proyecto continua adelante a través del soporte económico del Fondo de Sostenibilidad I+D del grupo REDHISP, alimentado con recursos propios generados a través de contratos y con la colaboración de la empresa{" "}
                <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "bold" }}>WaterPi</a>
                {" "}hasta finales de 2022.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch">
                <CreditPerson
                  photoSrc="/images/presentacion-team1.jpg"
                  name="Fernando Martínez Alzamora"
                  toggleLabel="Saber más"
                  intro={
                    <>
                      La <strong>dirección </strong>del Proyecto QGISRed está a cargo del <strong>Prof. Fernando Martínez Alzamora,</strong> Catedrático de Ingeniería Hidráulica de la UPV, con más de 40 años de experiencia en la modelación de sistemas hidráulicos a presión. Se adjunta un breve CV, mientras que un listado de las principales publicaciones puede encontrarse en su{" "}
                      <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página personal</a>
                      {" "}de Research Gate.
                    </>
                  }
                  bio={
                    <p>
                  Fernando Martínez Alzamora es Ingeniero Industrial por la Universitat Politècnica de València (1978) y
                  Doctor por la misma universidad (1982). Desde 1995 es Catedrático de Ingeniería Hidráulica de la UPV y
                  desde 2001 investigador del Instituto de Ingeniería del Agua y M.A. (IIAMA) de la referida Universidad.
                  Imparte docencia en el área de las Máquinas Hidráulicas y sus aplicaciones industriales, incluido el
                  aprovechamiento de energías renovables a través de Centrales Hidroeléctricas y Parques Eólicos. Asimismo,
                  ha impartido asignaturas en cursos de doctorado y máster sobre el Modelado de Redes Hidráulicas y el uso
                  de Sistemas de Información Geográfica (SIG). Su investigación se ha centrado en el área del análisis,
                  diseño y operación de las redes de distribución de agua, tanto para abastecimientos urbanos como para el
                  riego a presión. En particular ha trabajado en la mejora de algoritmos de simulación, en la integración
                  de los modelos hidráulicos en SIG para la realización de planes directores, y la utilización de los
                  modelos en tiempo real para la toma de decisiones, en conexión con los sistemas SCADA. En estos temas ha
                  publicado 40 artículos en revistas de prestigio, 70 comunicaciones en Congresos nacionales e
                  internacionales, y dirigido 11 tesis doctorales. Ha sido investigador principal de 12 proyectos de
                  investigación nacionales y participado como team leader en 4 proyectos europeos del programa marco.
                  Colabora asiduamente como consultor o en el desarrollo de contratos con empresas del sector del transporte
                  y distribución de agua, habiendo sido responsable hasta el presente de un total de 62 contratos.
                    </p>
                  }
                />
                <CreditPerson
                  photoSrc="/images/presentacion-team2.jpg"
                  name="Néstor Lerma Elvira"
                  toggleLabel="Saber más"
                  intro={
                    <>
                      El <strong>código de QGISRed</strong> fue desarrollado hasta finales de 2022 por <strong>Néstor Lerma Elvira</strong>, Dr. Ing. Caminos por la UPV, y socio fundador de la empresa{" "}
                      <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                      . Gran parte de los méritos de la versión de QGISRed que aquí se ofrece se deben al buen hacer de Néstor, que ha sabido conjugar sus conocimientos de ingeniería con sus habilidades como programador. Puedes visitar su perfil investigador en la{" "}
                      <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página personal</a>
                      {" "}de Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Néstor Lerma Elvira es Ingeniero de Caminos, Canales y Puertos por la Universitat Politècnica de
                      València (2010) y Doctor por la misma universidad (2017). Durante el periodo 2009-2017 se
                      especializó en recursos hídricos, aplicando algoritmos evolutivos para optimizar la gestión en
                      sistemas multi-embalse en el mismo proyecto final de carrera, el trabajo final del Máster en
                      Ingeniería Hidráulica y Medio ambiente (impartido en la misma universidad) y el propio doctorado ya
                      mencionado.
                    </p>
                  }
                />
              </div>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The QGISRed project was born at the <strong>initiative of the{" "}
                <a href="https://iiama.webs.upv.es/en/research/research-groups/hydraulic-networks-and-pressurised-systems/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Research Group on Hydraulic Networks and Pressurised Systems</a>
                </strong>{" "}(REDHISP), of the{" "}
                <a href="https://www.iiama.upv.es/iiama/es/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Institute for Water and Environmental Engineering</a>
                {" "}(IIAMA) of the{" "}
                <a href="http://www.upv.es/es" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Universitat Politècnica de València</a>
                {" "}(UPV), as a proposal to resume the features of the old GISRed application and adapt them to a more modern working environment, while promoting its dissemination worldwide.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The project started with a <strong>Grant from the Generalitat Valenciana</strong> for the hiring of Technology Transfer Support Staff (APOTI/2018/006), for an effective amount of €18,300 and duration from November 2018 to July 2019. From that date the project continued through the economic support of the REDHISP group&apos;s R&D Sustainability Fund, fed by its own resources generated through contracts and with the collaboration of the company{" "}
                <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "bold" }}>WaterPi</a>
                {" "}until the end of 2022.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch">
                <CreditPerson
                  photoSrc="/images/presentacion-team1.jpg"
                  name="Fernando Martínez Alzamora"
                  toggleLabel="Learn more"
                  intro={
                    <>
                      The <strong>direction </strong>of the QGISRed Project is in the hands of <strong>Prof. Fernando Martínez Alzamora,</strong> Full Professor of Hydraulic Engineering at the UPV, with more than 40 years of experience in the modelling of pressurised hydraulic systems. A brief CV is attached, while a list of main publications can be found on his{" "}
                      <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>personal page</a>
                      {" "}on Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Fernando Martínez Alzamora holds a degree in Industrial Engineering from the Universitat Politècnica de València (1978) and a PhD from the same university (1982). Since 1995 he has been Full Professor of Hydraulic Engineering at the UPV and since 2001 a researcher at the Institute for Water and Environmental Engineering (IIAMA) of the aforementioned University. He teaches in the area of Hydraulic Machinery and its industrial applications, including the harnessing of renewable energies through Hydroelectric Power Plants and Wind Farms. He has also taught subjects in doctoral and master&apos;s courses on the Modelling of Hydraulic Networks and the use of Geographic Information Systems (GIS). His research has focused on the analysis, design and operation of water distribution networks, both for urban water supply and pressurised irrigation. In particular he has worked on improving simulation algorithms, integrating hydraulic models into GIS for the preparation of master plans, and using models in real time for decision-making, in connection with SCADA systems. On these topics he has published 40 articles in prestigious journals, 70 papers at national and international Conferences, and supervised 11 doctoral theses. He has been principal investigator of 12 national research projects and has participated as team leader in 4 European projects under the framework programme. He regularly collaborates as a consultant or in the development of contracts with companies in the water transport and distribution sector, having been responsible to date for a total of 62 contracts.
                    </p>
                  }
                />
                <CreditPerson
                  photoSrc="/images/presentacion-team2.jpg"
                  name="Néstor Lerma Elvira"
                  toggleLabel="Learn more"
                  intro={
                    <>
                      The <strong>QGISRed code</strong> was developed until the end of 2022 by <strong>Néstor Lerma Elvira</strong>, PhD in Civil Engineering from the UPV, and founding partner of the company{" "}
                      <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                      . Much of the credit for the version of QGISRed offered here is due to Néstor&apos;s excellent work, which has managed to combine his engineering knowledge with his skills as a programmer. You can visit his research profile on his{" "}
                      <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>personal page</a>
                      {" "}on Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Néstor Lerma Elvira holds a degree in Civil Engineering from the Universitat Politècnica de València (2010) and a PhD from the same university (2017). During the period 2009-2017 he specialised in water resources, applying evolutionary algorithms to optimise management in multi-reservoir systems in his final degree project, the final project of the Master&apos;s in Hydraulic Engineering and Environment (taught at the same university) and the aforementioned doctorate.
                    </p>
                  }
                />
              </div>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Le projet QGISRed est né à <strong>l&apos;initiative du{" "}
                <a href="https://iiama.webs.upv.es/investigacion/grupos-de-investigacion/redes-hidraulicas-y-sistemas-a-presion/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Groupe de Recherche en Réseaux Hydrauliques et Systèmes sous Pression</a>
                </strong>{" "}(REDHISP), de l&apos;{" "}
                <a href="https://www.iiama.upv.es/iiama/es/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Institut d&apos;Ingénierie de l&apos;Eau et de l&apos;Environnement</a>
                {" "}(IIAMA) de l&apos;{" "}
                <a href="http://www.upv.es/es" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Universitat Politècnica de València</a>
                {" "}(UPV), comme une proposition visant à reprendre les fonctionnalités de l&apos;ancienne application GISRed et à les adapter à un environnement de travail plus moderne, tout en favorisant sa diffusion dans le monde entier.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Le projet démarre avec une <strong>Aide de la Generalitat Valenciana</strong> pour l&apos;engagement de Personnel d&apos;Appui au Transfert Technologique (APOTI/2018/006), pour un montant effectif de 18 300 € et une durée de novembre 2018 à juillet 2019. À partir de cette date, le projet se poursuit grâce au soutien économique du Fonds de Durabilité R&D du groupe REDHISP, alimenté par des ressources propres générées par des contrats et avec la collaboration de l&apos;entreprise{" "}
                <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "bold" }}>WaterPi</a>
                {" "}jusqu&apos;à fin 2022.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch">
                <CreditPerson
                  photoSrc="/images/presentacion-team1.jpg"
                  name="Fernando Martínez Alzamora"
                  toggleLabel="En savoir plus"
                  intro={
                    <>
                      La <strong>direction </strong>du Projet QGISRed est assurée par le <strong>Prof. Fernando Martínez Alzamora,</strong> Professeur titulaire de Génie Hydraulique à l&apos;UPV, avec plus de 40 ans d&apos;expérience dans la modélisation des systèmes hydrauliques sous pression. Un bref CV est joint, tandis qu&apos;une liste des principales publications peut être trouvée sur sa{" "}
                      <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>page personnelle</a>
                      {" "}de Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Fernando Martínez Alzamora est Ingénieur Industriel de l&apos;Universitat Politècnica de València (1978)
                      et Docteur de la même université (1982). Depuis 1995, il est Professeur titulaire de Génie Hydraulique
                      à l&apos;UPV et depuis 2001 chercheur à l&apos;Institut d&apos;Ingénierie de l&apos;Eau et de l&apos;Environnement (IIAMA)
                      de cette même Université. Il enseigne dans le domaine des Machines Hydrauliques et de leurs
                      applications industrielles, y compris la valorisation des énergies renouvelables à travers les
                      Centrales Hydroélectriques et les Parcs Éoliens. Il a également enseigné des matières en doctorat et
                      en master sur la Modélisation des Réseaux Hydrauliques et l&apos;utilisation des Systèmes d&apos;Information
                      Géographique (SIG). Ses recherches se sont concentrées sur l&apos;analyse, la conception et
                      l&apos;exploitation des réseaux de distribution d&apos;eau, tant pour les approvisionnements urbains que pour
                      l&apos;irrigation sous pression. En particulier, il a travaillé sur l&apos;amélioration des algorithmes de
                      simulation, l&apos;intégration des modèles hydrauliques dans les SIG pour la réalisation de plans
                      directeurs, et l&apos;utilisation des modèles en temps réel pour la prise de décision, en lien avec les
                      systèmes SCADA. Sur ces sujets, il a publié 40 articles dans des revues prestigieuses, 70
                      communications lors de congrès nationaux et internationaux, et dirigé 11 thèses doctorales. Il a été
                      chercheur principal de 12 projets de recherche nationaux et a participé en tant que chef d&apos;équipe à
                      4 projets européens du programme cadre. Il collabore régulièrement en tant que consultant ou dans le
                      développement de contrats avec des entreprises du secteur du transport et de la distribution d&apos;eau,
                      ayant été responsable à ce jour d&apos;un total de 62 contrats.
                    </p>
                  }
                />
                <CreditPerson
                  photoSrc="/images/presentacion-team2.jpg"
                  name="Néstor Lerma Elvira"
                  toggleLabel="En savoir plus"
                  intro={
                    <>
                      Le <strong>code de QGISRed</strong> a été développé jusqu&apos;à fin 2022 par <strong>Néstor Lerma Elvira</strong>, Docteur Ingénieur des Ponts et Chaussées de l&apos;UPV, et associé fondateur de l&apos;entreprise{" "}
                      <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                      . Une grande partie des mérites de la version de QGISRed proposée ici sont dus au savoir-faire de Néstor, qui a su conjuguer ses connaissances d&apos;ingénierie avec ses compétences de programmeur. Vous pouvez consulter son profil de chercheur sur sa{" "}
                      <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>page personnelle</a>
                      {" "}de Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Néstor Lerma Elvira est Ingénieur des Ponts, Canaux et Ports de l&apos;Universitat Politècnica de
                      València (2010) et Docteur de la même université (2017). Durant la période 2009-2017, il s&apos;est
                      spécialisé dans les ressources en eau, en appliquant des algorithmes évolutifs pour optimiser la
                      gestion des systèmes multi-réservoirs dans son projet de fin d&apos;études, le mémoire de fin du Master
                      en Génie Hydraulique et Environnement (dispensé dans la même université) et le doctorat déjà
                      mentionné.
                    </p>
                  }
                />
              </div>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                O projeto QGISRed nasce por <strong>iniciativa do{" "}
                <a href="https://iiama.webs.upv.es/investigacion/grupos-de-investigacion/redes-hidraulicas-y-sistemas-a-presion/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Grupo de Pesquisa em Redes Hidráulicas e Sistemas sob Pressão</a>
                </strong>{" "}(REDHISP), do{" "}
                <a href="https://www.iiama.upv.es/iiama/es/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Instituto de Engenharia da Água e Meio Ambiente</a>
                {" "}(IIAMA) da{" "}
                <a href="http://www.upv.es/es" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Universitat Politècnica de València</a>
                {" "}(UPV), como uma proposta para retomar as funcionalidades do antigo aplicativo GISRed e adequá-las a um ambiente de trabalho mais atual, promovendo ao mesmo tempo sua difusão em todo o mundo.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                O projeto começa com uma <strong>Ajuda da Generalitat Valenciana</strong> para a contratação de Pessoal de Apoio à Transferência Tecnológica (APOTI/2018/006), no valor efetivo de 18.300 € e duração de novembro de 2018 a julho de 2019. A partir dessa data, o projeto continua adiante por meio do apoio econômico do Fundo de Sustentabilidade de P&D do grupo REDHISP, alimentado com recursos próprios gerados por meio de contratos e com a colaboração da empresa{" "}
                <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "bold" }}>WaterPi</a>
                {" "}até o final de 2022.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-[60px] items-stretch">
                <CreditPerson
                  photoSrc="/images/presentacion-team1.jpg"
                  name="Fernando Martínez Alzamora"
                  toggleLabel="Saber mais"
                  intro={
                    <>
                      A <strong>direção </strong>do Projeto QGISRed está a cargo do <strong>Prof. Fernando Martínez Alzamora,</strong> Catedrático de Engenharia Hidráulica da UPV, com mais de 40 anos de experiência na modelação de sistemas hidráulicos sob pressão. Segue um breve CV, enquanto uma lista das principais publicações pode ser encontrada em sua{" "}
                      <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página pessoal</a>
                      {" "}no Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Fernando Martínez Alzamora é Engenheiro Industrial pela Universitat Politècnica de València (1978) e
                      Doutor pela mesma universidade (1982). Desde 1995 é Catedrático de Engenharia Hidráulica da UPV e
                      desde 2001 pesquisador do Instituto de Engenharia da Água e Meio Ambiente (IIAMA) da referida Universidade.
                      Leciona na área das Máquinas Hidráulicas e suas aplicações industriais, incluindo o
                      aproveitamento de energias renováveis por meio de Centrais Hidrelétricas e Parques Eólicos. Também
                      lecionou disciplinas em cursos de doutorado e mestrado sobre a Modelação de Redes Hidráulicas e o uso
                      de Sistemas de Informação Geográfica (SIG). Sua pesquisa se concentrou na área da análise,
                      projeto e operação das redes de distribuição de água, tanto para abastecimentos urbanos quanto para a
                      irrigação sob pressão. Em particular, trabalhou na melhoria de algoritmos de simulação, na integração
                      dos modelos hidráulicos em GIS para a realização de planos diretores, e na utilização dos
                      modelos em tempo real para a tomada de decisões, em conexão com os sistemas SCADA. Nesses temas
                      publicou 40 artigos em revistas de prestígio, 70 comunicações em Congressos nacionais e
                      internacionais, e orientou 11 teses de doutorado. Foi pesquisador principal de 12 projetos de
                      pesquisa nacionais e participou como team leader em 4 projetos europeus do programa marco.
                      Colabora assiduamente como consultor ou no desenvolvimento de contratos com empresas do setor de transporte
                      e distribuição de água, tendo sido responsável até o momento por um total de 62 contratos.
                    </p>
                  }
                />
                <CreditPerson
                  photoSrc="/images/presentacion-team2.jpg"
                  name="Néstor Lerma Elvira"
                  toggleLabel="Saber mais"
                  intro={
                    <>
                      O <strong>código do QGISRed</strong> foi desenvolvido até o final de 2022 por <strong>Néstor Lerma Elvira</strong>, Doutor em Engenharia Civil pela UPV, e sócio fundador da empresa{" "}
                      <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                      . Grande parte dos méritos da versão do QGISRed oferecida aqui se deve ao bom trabalho de Néstor, que soube conjugar seus conhecimentos de engenharia com suas habilidades como programador. Você pode visitar seu perfil de pesquisador em sua{" "}
                      <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página pessoal</a>
                      {" "}no Research Gate.
                    </>
                  }
                  bio={
                    <p>
                      Néstor Lerma Elvira é Engenheiro Civil pela Universitat Politècnica de
                      València (2010) e Doutor pela mesma universidade (2017). Durante o período 2009-2017 se
                      especializou em recursos hídricos, aplicando algoritmos evolutivos para otimizar a gestão em
                      sistemas multirreservatório em seu próprio projeto final de graduação, no trabalho final do Mestrado em
                      Engenharia Hidráulica e Meio Ambiente (ministrado na mesma universidade) e no próprio doutorado já
                      mencionado.
                    </p>
                  }
                />
              </div>
            </>
          )}

          <div className="mt-8">
            <div
              className="p-6"
              style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(230,230,230)" }}
            >
              {localize(locale,
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> está <strong>registrado en los servicios de{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA de la UPV</a>
                  </strong>, con el número de registro S-072-2021, y licencia GNU GPL 2.0, siendo la titularidad 100 % de la UPV. La descarga y uso del plugin es libre, sin requerir ningún tipo de registro previo. Sin embargo, en cualquier uso de tipo profesional o educativo que se haga del plugin debe mencionarse su procedencia y proporcionar un enlace a esta página web. No obstante, los <strong>usuarios que voluntariamente quieran registrarse</strong> para estar al día de las novedades o contactar con los desarrolladores puede hacerlo desde nuestro formulario de{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contacto</Link>
                </p>,
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> is <strong>registered with the{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA services of the UPV</a>
                  </strong>, with registration number S-072-2021, and GNU GPL 2.0 licence, with 100% ownership belonging to the UPV. Downloading and using the plugin is free, without requiring any prior registration. However, in any professional or educational use of the plugin, its origin must be mentioned and a link to this website provided. Nevertheless, <strong>users who voluntarily wish to register</strong> to keep up to date with new developments or contact the developers can do so from our{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contact</Link>
                  {" "}form.
                </p>,
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> est <strong>enregistré auprès des services de{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA de l&apos;UPV</a>
                  </strong>, sous le numéro d&apos;enregistrement S-072-2021, et sous licence GNU GPL 2.0, la propriété étant détenue à 100 % par l&apos;UPV. Le téléchargement et l&apos;utilisation du plugin sont libres, sans nécessiter aucun enregistrement préalable. Cependant, pour tout usage professionnel ou éducatif du plugin, son origine doit être mentionnée et un lien vers ce site web doit être fourni. Néanmoins, les <strong>utilisateurs qui souhaitent volontairement s&apos;inscrire</strong> pour se tenir informés des nouveautés ou contacter les développeurs peuvent le faire depuis notre formulaire de{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contact</Link>
                </p>,
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> está <strong>registrado nos serviços do{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA da UPV</a>
                  </strong>, com o número de registro S-072-2021, e licença GNU GPL 2.0, sendo a titularidade 100% da UPV. O download e o uso do plugin são livres, sem exigir nenhum tipo de cadastro prévio. No entanto, em qualquer uso de tipo profissional ou educacional que se faça do plugin, deve-se mencionar sua procedência e fornecer um link para este site. Ainda assim, os <strong>usuários que voluntariamente queiram se cadastrar</strong> para ficar por dentro das novidades ou entrar em contato com os desenvolvedores podem fazê-lo através do nosso formulário de{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contato</Link>
                </p>
              )}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
