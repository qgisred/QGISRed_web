import Image from "@/components/AppImage";
import { Link } from "@/i18n/navigation";

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
  const isEn = locale === "en";

  return (
    <main style={{ paddingTop: "0" }}>
      {/* Intro section */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="mx-auto flex flex-col md:flex-row items-start gap-[60px]" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <div style={{ flex: "1 1 55%" }}>
            {isEn ? (
              <>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", marginBottom: "16px" }}>
                  Welcome to QGISRed. On this page you will find everything you would probably want to know when making contact with this product for the first time. What is it and what are its objectives? How did it come about? What is it for? How can I install it? Who is behind it? I encourage you to visit the following sections of this page to answer all your beginner questions.
                </p>
                <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                  If you want to learn more about all the product's capabilities and its current development status, how to use the application, the publications where its foundations are described, or how to contact us to get support or collaborate on this exciting project, visit the other sections of this website. Oh! And you can also register to be permanently informed of new developments.
                </p>
              </>
            ) : (
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
      <section id="quees" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px", borderTop: "1px solid rgb(240,240,240)" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "What is QGISRed" : "Qué es QGISRed"} id="quees-heading" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
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
                      Emulating EPANET's capabilities allows accelerating the learning curve in handling QGISRed. Moreover, the QGIS knowledge required for its use is minimal, since dedicated tools have been developed to carry out all necessary operations. However, QGIS specialists will be able to get even more out of the features offered by QGISRed.
                    </p>
                    <p className="mb-3">
                      Through this page, numerous resources are offered to quickly become an expert in network modelling, and to offer professional solutions to companies using the tools associated with the Digital Twin. Finally, it is worth noting that the data model used by QGISRed is public and has a very simple structure, fundamentally oriented to carrying out all types of analysis, which allows QGISRed to connect with other network modelling applications such as EPANET, InfoWorks or WaterGEMS.
                    </p>
                    <p>
                      QGISRed (pronounced as Koo_his_rred following Spanish phonetics) is currently offered only in English, and will soon be available in Spanish as well. It could potentially be offered in more than 40 languages supported by QGIS.
                    </p>
                  </ToggleSection>
                </>
              ) : (
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
      <section id="antecedentes" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Background" : "Antecedentes"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The idea of enhancing EPANET's capabilities by connecting it with a GIS is not new for our research group. Back in 2004, Fernando Martínez, director of the current QGISRed project, directed a project with similar objectives and features, called <strong>GISRed. </strong>There were two versions at the time, 1.0 and 2.0, and its capabilities were disseminated through several{" "}
                    <Link href={{ pathname: "/difusion", hash: "#publicaciones" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publications</Link>.
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
                      However, these advances in EPANET did not enhance the tools for building models, nor did they incorporate new types of elements into the network. They were basically limited to making all the data in a scenario accessible to programmers and offering the option of using the function library in concurrent mode, with the greatest contribution being the possibility of running models with pressure-dependent demands (PDA). The challenges of the old GISRed were still present, so in 2018, following the spectacular advances of the free software QGIS, we decided to reproduce GISRed's features in this new environment, and in the process improve both the features of that initial product, bringing them up to the level offered by the latest version of EPANET 2.2. The first public presentation of the new product, now called QGISRed, took place during the CCWI 2019 Conference, in Exeter (UK).
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
                </>
              ) : (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    La idea de potenciar las prestaciones de EPANET mediante su conexión con un GIS no es nueva para nuestro grupo de investigación. Ya en 2004 Fernando Martínez, director del actual proyecto QGISRed, dirigió un proyecto con similares objetivos y prestaciones, denominado <strong>GISRed. </strong>Hubo por entonces dos versiones, la 1.0 y la 2.0, y se difundieron sus capacidades a través de varias{" "}
                    <Link href={{ pathname: "/difusion", hash: "#publicaciones" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>publicaciones</Link>.
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
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-diapositiva.png"
                alt="Diapositiva antecedentes"
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
      <section id="aplicaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Applications" : "Aplicaciones"} />

          {isEn ? (
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
            </>
          ) : (
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
            </>
          )}

          {/* Accordion tabs */}
          <div className="mb-8">
            {/* Tab: Static Models */}
            <AccordionItem title={isEn ? "Working with Static Models" : "Trabajando con Modelos Estáticos"} open>
              <ul className="flex flex-col gap-3 list-none p-0">
                {(isEn ? [
                  "Sizing pipes and regulation elements for the most unfavourable scenario",
                  "Planning new scenarios for network extensions, rehabilitation of components, reforms, etc.",
                  "Calibrating the model from measurements at specific moments",
                  "Simulating the system response in extreme situations such as pipe breaks, elements out of service, etc.",
                  "Analysing network criticality to detect the weakest elements",
                  "Sectorising the network guaranteeing supply under the most unfavourable conditions",
                  "Carrying out energy audits affecting the design and conception of the transport and distribution system",
                ] : [
                  "El dimensionado de tuberías y elementos de regulación para el escenario más desfavorable",
                  "La planificación de nuevos escenarios ante ampliaciones de la red, rehabilitación de componentes, reformas, etc.",
                  "La calibración del modelo a partir de medidas en momentos puntuales.",
                  "La simulación de la respuesta del sistema en situaciones extremas como roturas, elementos fuera de servicio, etc.",
                  "El análisis de la criticidad de la red, para detectar los elementos más débiles",
                  "La sectorización de la red garantizando el suministro en las condiciones más desfavorables",
                  "La realización de auditorías energéticas que afecten al diseño y concepción del sistema de transporte y distribución",
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
            <AccordionItem title={isEn ? "Working with Dynamic Models" : "Trabajando con Modelos Dinámicos"}>
              <ul className="flex flex-col gap-3 list-none p-0">
                {(isEn ? [
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
                ] : [
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
            <AccordionItem title={isEn ? "Working with Digital Twins" : "Trabajando con Gemelos Digitales"}>
              <ul className="flex flex-col gap-3 list-none p-0">
                {(isEn ? [
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
                ] : [
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

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                In any case, it must be made clear that the free version of QGISRed is not going to offer solutions to all these formulated problems, nor is it its intention. QGISRed is limited to simulating the behaviour of the network under predefined conditions, as EPANET currently does. Only it offers many more modelling tools, covers more types of elements, and allows the model to be connected with real data.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                While reproducing reality is a verifiable challenge, offering solutions to many of the problems raised requires taking into account the criteria of those responsible for managing the network. The solution in these cases is not unique, and optimisation or artificial intelligence techniques are often used to reach feasible solutions. These techniques are currently beyond the scope of the free version of QGISRed. However, the user will be able to check with the product on offer the response to any given situation, which already represents an important advance. Consequently, engineering judgement and the good expertise of specialists are still of great value in offering the right solutions to these problems.
              </p>
            </>
          ) : (
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
      <section id="instalacion" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Installing QGISRed" : "Instalación de QGISRed"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
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
                </>
              ) : (
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
                </>
              )}
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-install.png"
                alt="Instalación de QGISRed"
                width={880}
                height={511}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar.png"
                alt="Barra de herramientas QGISRed"
                width={483}
                height={65}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar2.png"
                alt="Barra de herramientas QGISRed 2"
                width={423}
                height={65}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-window.png"
                alt="Ventana principal QGISRed"
                width={521}
                height={204}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto en GitHub / GitHub Project */}
      <section id="github" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "GitHub Project" : "Proyecto en GitHub"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    QGISRed is not a closed product. The part of QGISRed's code that interacts with QGIS functionalities is developed in <em>Python</em> and is in the public domain, in accordance with the terms of the{" "}
                    <a href="https://docs.qgis.org/3.22/en/docs/user_manual/appendices/GNU_GPL.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>GNU GPL 2.0 QGIS licence</a>
                    , which is extensible to all plugins distributed through its official repository. This code is accessible through the GitHub portal{" "}
                    <a href="https://github.com/qgisred/qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>QGISRed</a>
                    {" "}and hosts all the functionalities affecting the customisation of the QGIS graphical interface after installing the plugin, as well as certain editing and selection capabilities of the network elements.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Below, the content of the tab hosting the QGISRed code is shown. From the last two lines you can also access the{" "}
                    <Link href={{ pathname: "/utilizacion", hash: "#manualusuario" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuals in Spanish and English</Link>
                  </p>

                  <ToggleSection title="Learn more about the QGISRed project on GitHub">
                    <p className="mb-3">
                      The QGISRed project is in its first implementation phase, and for now the development of the free code is not collaborative, although it is planned to open it to the research community in the future.
                    </p>
                    <p className="mb-3">
                      On the right-hand side of this tab, the plugin's licence is also shown,{" "}
                      <Link href={{ pathname: "/capacidades", hash: "#novedades" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>the latest released version</Link>
                      {" "}and all{" "}
                      <Link href={{ pathname: "/capacidades", hash: "#historicodeversiones" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>previously published versions with their improvements</Link>
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
                      However, <strong>the majority of QGISRed's code is developed in C# for Windows</strong>, configuring a series of libraries called <strong><em>GISRed.xxx.dll</em>,</strong> which are used by the graphical interface. These libraries contain the majority of the algorithms, forms and dialogue boxes specific to the application, and are installed in the …/AppData/Roaming/QGISRed/dlls/… folder of the user's profile when any button or option of the plugin is pressed, once installed. All the algorithms contained in this library have been developed from scratch, and do not use any other external library, nor those of QGIS itself, thus not generating any dependency, except with the <em>Epanet2.dll</em> library corresponding to the EPANET 2.3 Toolkit (version 2.3.4), used to launch hydraulic and quality simulations, and the <em>Shapelib.dll</em> library used to read and write .shp files; both libraries are installed at the same time as the QGISRed libraries. On the other hand, the Python dialogues have been built using the{" "}
                      <a href="https://www.qt.io/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Qt</a>
                      {" "}platform, which is also in the public domain.
                    </p>
                  </ToggleSection>
                </>
              ) : (
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
                    <Link href={{ pathname: "/utilizacion", hash: "#manualusuario" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>manuales en español e inglés</Link>
                  </p>

                  <ToggleSection title="Saber más sobre el proyecto de QGISRed en GitHub">
                    <p className="mb-3">
                      El proyecto QGISRed está en su primera fase de implementación, y por ahora el desarrollo del código
                      libre no es colaborativo, aunque está previsto abrirlo a la comunidad investigadora en el futuro.
                    </p>
                    <p className="mb-3">
                      En la parte de la derecha de esta pestaña se muestra también la licencia del plugin,{" "}
                      <Link href={{ pathname: "/capacidades", hash: "#novedades" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>la última versión liberada</Link>
                      {" "}y todas las{" "}
                      <Link href={{ pathname: "/capacidades", hash: "#historicodeversiones" }} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>versiones publicadas anteriormente con sus mejoras</Link>
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
      <section id="creditos" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Credits" : "Créditos"} />

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The QGISRed project was born at the <strong>initiative of the{" "}
                <a href="https://www.iiama.upv.es/iiama/es/investigacion/grupos-de-investigacion/redes-hidraulicas-y-sistemas-a-presion.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Research Group on Hydraulic Networks and Pressurised Systems</a>
                </strong>{" "}(REDHISP), of the{" "}
                <a href="https://www.iiama.upv.es/iiama/es/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Institute for Water and Environmental Engineering</a>
                {" "}(IIAMA) of the{" "}
                <a href="http://www.upv.es/es" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Universitat Politècnica de València</a>
                {" "}(UPV), as a proposal to resume the features of the old GISRed application and adapt them to a more modern working environment, while promoting its dissemination worldwide.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                The project started with a <strong>Grant from the Generalitat Valenciana</strong> for the hiring of Technology Transfer Support Staff (APOTI/2018/006), for an effective amount of €18,300 and duration from November 2018 to July 2019. From that date the project continued through the economic support of the REDHISP group's R&D Sustainability Fund, fed by its own resources generated through contracts and with the collaboration of the company{" "}
                <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "bold" }}>WaterPi</a>
                {" "}until the end of 2022.
              </p>

              <ToggleSection title="Learn more">
                <p className="mb-3">
                  The <strong>direction </strong>of the QGISRed Project is in the hands of <strong>Prof. Fernando Martínez Alzamora,</strong> Full Professor of Hydraulic Engineering at the UPV, with more than 40 years of experience in the modelling of pressurised hydraulic systems. A brief CV is attached, while a list of main publications can be found on his{" "}
                  <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>personal page</a>
                  {" "}on Research Gate.
                </p>
                <p>
                  Fernando Martínez Alzamora holds a degree in Industrial Engineering from the Universitat Politècnica de València (1978) and a PhD from the same university (1982). Since 1995 he has been Full Professor of Hydraulic Engineering at the UPV and since 2001 a researcher at the Institute for Water and Environmental Engineering (IIAMA) of the aforementioned University. He teaches in the area of Hydraulic Machinery and its industrial applications, including the harnessing of renewable energies through Hydroelectric Power Plants and Wind Farms. He has also taught subjects in doctoral and master's courses on the Modelling of Hydraulic Networks and the use of Geographic Information Systems (GIS). His research has focused on the analysis, design and operation of water distribution networks, both for urban water supply and pressurised irrigation. In particular he has worked on improving simulation algorithms, integrating hydraulic models into GIS for the preparation of master plans, and using models in real time for decision-making, in connection with SCADA systems. On these topics he has published 40 articles in prestigious journals, 70 papers at national and international Conferences, and supervised 11 doctoral theses. He has been principal investigator of 12 national research projects and has participated as team leader in 4 European projects under the framework programme. He regularly collaborates as a consultant or in the development of contracts with companies in the water transport and distribution sector, having been responsible to date for a total of 62 contracts.
                </p>
              </ToggleSection>

              <ToggleSection title="Learn more">
                <p className="mb-3">
                  The <strong>QGISRed code</strong> was developed until the end of 2022 by <strong>Néstor Lerma Elvira</strong>, PhD in Civil Engineering from the UPV, and founding partner of the company{" "}
                  <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                  . Much of the credit for the version of QGISRed offered here is due to Néstor's excellent work, which has managed to combine his engineering knowledge with his skills as a programmer. You can visit his research profile on his{" "}
                  <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>personal page</a>
                  {" "}on Research Gate.
                </p>
                <p>
                  Néstor Lerma Elvira holds a degree in Civil Engineering from the Universitat Politècnica de València (2010) and a PhD from the same university (2017). During the period 2009-2017 he specialised in water resources, applying evolutionary algorithms to optimise management in multi-reservoir systems in his final degree project, the final project of the Master's in Hydraulic Engineering and Environment (taught at the same university) and the aforementioned doctorate.
                </p>
              </ToggleSection>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proyecto QGISRed nace por <strong>iniciativa del{" "}
                <a href="https://www.iiama.upv.es/iiama/es/investigacion/grupos-de-investigacion/redes-hidraulicas-y-sistemas-a-presion.html" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>Grupo de Investigación en Redes Hidráulicas y Sistemas a Presión</a>
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

              <ToggleSection title="Saber más">
                <p className="mb-3">
                  La <strong>dirección </strong>del Proyecto QGISRed está a cargo del <strong>Prof. Fernando Martínez Alzamora,</strong> Catedrático de Ingeniería Hidráulica de la UPV, con más de 40 años de experiencia en la modelación de sistemas hidráulicos a presión. Se adjunta un breve CV, mientras que un listado de las principales publicaciones puede encontrarse en su{" "}
                  <a href="https://www.researchgate.net/profile/Fernando-Martinez-Alzamora" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página personal</a>
                  {" "}de Research Gate.
                </p>
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
              </ToggleSection>

              <ToggleSection title="Saber más">
                <p className="mb-3">
                  El <strong>código de QGISRed</strong> fue desarrollado hasta finales de 2022 por <strong>Néstor Lerma Elvira</strong>, Dr. Ing. Caminos por la UPV, y socio fundador de la empresa{" "}
                  <a href="https://waterpi.com/" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>WaterPi Coop. V</a>
                  . Gran parte de los méritos de la versión de QGISRed que aquí se ofrece se deben al buen hacer de Néstor, que ha sabido conjugar sus conocimientos de ingeniería con sus habilidades como programador. Puedes visitar su perfil investigador en la{" "}
                  <a href="https://www.researchgate.net/profile/Nestor-Lerma" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>página personal</a>
                  {" "}de Research Gate.
                </p>
                <p>
                  Néstor Lerma Elvira es Ingeniero de Caminos, Canales y Puertos por la Universitat Politècnica de València
                  (2010) y Doctor por la misma universidad (2017). Durante el periodo 2009-2017 se especializó en recursos
                  hídricos, aplicando algoritmos evolutivos para optimizar la gestión en sistemas multi-embalse en el mismo
                  proyecto final de carrera, el trabajo final del Máster en Ingeniería Hidráulica y Medio ambiente
                  (impartido en la misma universidad) y el propio doctorado ya mencionado.
                </p>
              </ToggleSection>
            </>
          )}

          <div className="mt-8">
            <div
              className="p-6"
              style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(230,230,230)" }}
            >
              {isEn ? (
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> is <strong>registered with the{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA services of the UPV</a>
                  </strong>, with registration number S-072-2021, and GNU GPL 2.0 licence, with 100% ownership belonging to the UPV. Downloading and using the plugin is free, without requiring any prior registration. However, in any professional or educational use of the plugin, its origin must be mentioned and a link to this website provided. Nevertheless, <strong>users who voluntarily wish to register</strong> to keep up to date with new developments or contact the developers can do so from our{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contact</Link>
                  {" "}form.
                </p>
              ) : (
                <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                  <strong>QGISRed v1.0</strong> está <strong>registrado en los servicios de{" "}
                  <a href="https://aplicat.upv.es/exploraupv/ficha-tecnologia/patente_software/34082?busqueda=qgisred" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>CARTA de la UPV</a>
                  </strong>, con el número de registro S-072-2021, y licencia GNU GPL 2.0, siendo la titularidad 100 % de la UPV. La descarga y uso del plugin es libre, sin requerir ningún tipo de registro previo. Sin embargo, en cualquier uso de tipo profesional o educativo que se haga del plugin debe mencionarse su procedencia y proporcionar un enlace a esta página web. No obstante, los <strong>usuarios que voluntariamente quieran registrarse</strong> para estar al día de las novedades o contactar con los desarrolladores puede hacerlo desde nuestro formulario de{" "}
                  <Link href="/contacto" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>contacto</Link>
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Image
              src="/images/presentacion-team1.jpg"
              alt="Equipo QGISRed"
              width={500}
              height={600}
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <Image
              src="/images/presentacion-team2.jpg"
              alt="Equipo QGISRed"
              width={500}
              height={600}
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
