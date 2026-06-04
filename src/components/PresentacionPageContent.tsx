import Image from "next/image";

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
        style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
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
}

function AccordionItem({ title, children }: AccordionItemProps) {
  return (
    <details className="border border-gray-200 mb-2 group">
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

export function PresentacionPageContent() {
  return (
    <main style={{ paddingTop: "0" }}>
      {/* Intro section */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "64px" }}>
        <div className="mx-auto flex flex-col md:flex-row items-start gap-[60px]" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <div style={{ flex: "1 1 55%" }}>
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
          </div>
          <div className="hidden md:flex items-center justify-center" style={{ flex: "0 0 200px" }}>
            <Image
              src="/images/presentacion-logo-svg.svg"
              alt="QGISRed Logo"
              width={150}
              height={150}
              className="w-[150px] h-auto"
            />
          </div>
        </div>
      </section>

      {/* Qué es QGISRed */}
      <section id="quees" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px", borderTop: "1px solid rgb(240,240,240)" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Qué es QGISRed" id="quees-heading" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
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
                puede emular todas las capacidades de EPANET 2.2, ampliando sus opciones de edición y de cálculo.
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

      {/* Antecedentes */}
      <section id="antecedentes" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Antecedentes" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                La idea de potenciar las prestaciones de EPANET mediante su conexión con un GIS no es nueva para nuestro
                grupo de investigación. Ya en 2004 Fernando Martínez, director del actual proyecto QGISRed, dirigió un
                proyecto con similares objetivos y prestaciones, denominado GISRed. Hubo por entonces dos versiones, la
                1.0 y la 2.0, y se difundieron sus capacidades a través de varias publicaciones.
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
                  En los 15 años siguientes ninguna aplicación, dejando aparte los productos comerciales, llegó a
                  proporcionar las prestaciones que GISRed ofrecía para ayudar en la confección de modelos de redes de
                  abastecimiento. Mientras tanto el código de EPANET fue liberalizado, y en 2015 se fundó una sección
                  dentro de la Open Water Analytics (OWA) para continuar desarrollando el módulo de cálculo de EPANET
                  (también conocido como Toolkit), con la contribución ahora de toda la comunidad investigadora.
                  Finalmente, en Diciembre 2019 se lanzó desde esta plataforma la última versión 2.2 de la Toolkit,
                  vigente hasta el día de hoy. Poco después, en Julio de 2020 la EPA mejoró también la interfaz gráfica
                  de EPANET a su versión 2.2, en la cual integró la última versión de la Toolkit.
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
                  QGISRed está aún en construcción, y las prestaciones de la última versión oficial se pueden consultar
                  en la sección CAPACIDADES, donde se detallan especialmente las últimas novedades, y las prestaciones
                  futuras por desarrollar. Se espera completar el alcance de todos los objetivos propuestos en la hoja
                  de ruta, para la versión libre de este producto, en el plazo máximo de un año.
                </p>
              </ToggleSection>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-diapositiva.png"
                alt="Diapositiva antecedentes"
                width={800}
                height={400}
                className="w-full h-auto"
              />
              <div className="flex gap-3 mt-4">
                <Image src="/images/presentacion-app1.jpg" alt="App screenshot 1" width={300} height={200} className="flex-1 h-auto" />
                <Image src="/images/presentacion-app2.jpg" alt="App screenshot 2" width={300} height={200} className="flex-1 h-auto" />
                <Image src="/images/presentacion-app3.png" alt="App screenshot 3" width={300} height={200} className="flex-1 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Aplicaciones */}
      <section id="aplicaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Aplicaciones" />

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

          {/* Tabs */}
          <div className="mb-8">
            {/* Tab: Trabajando con Modelos Estáticos */}
            <details className="border border-gray-200 mb-2 group" open>
              <summary
                className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white"
                style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
              >
                <span>Trabajando con Modelos Estáticos</span>
                <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4">
                  ›
                </span>
              </summary>
              <div className="px-5 pb-4" style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                <ul className="flex flex-col gap-3 list-none p-0">
                  {[
                    "El dimensionado de tuberías y elementos de regulación para el escenario más desfavorable",
                    "La planificación de nuevos escenarios ante ampliaciones de la red, rehabilitación de componentes, reformas, etc.",
                    "La calibración del modelo a partir de medidas en momentos puntuales.",
                    "La simulación de la respuesta del sistema en situaciones extremas como roturas, elementos fuera de servicio, etc.",
                    "El análisis de la criticidad de la red, para detectar los elementos más débiles",
                    "La sectorización de la red garantizando el suministro en las condiciones más desfavorables",
                    "La realización de auditorías energéticas que afecten al diseño y concepción del sistema de transporte y distribución",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 rounded-full mt-2"
                        style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* Tab: Trabajando con Modelos Dinámicos */}
            <details className="border border-gray-200 mb-2 group">
              <summary
                className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white"
                style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
              >
                <span>Trabajando con Modelos Dinámicos</span>
                <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4">
                  ›
                </span>
              </summary>
              <div className="px-5 pb-4" style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                <ul className="flex flex-col gap-3 list-none p-0">
                  {[
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
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 rounded-full mt-2"
                        style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>

            {/* Tab: Trabajando con Gemelos Digitales */}
            <details className="border border-gray-200 mb-2 group">
              <summary
                className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white"
                style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
              >
                <span>Trabajando con Gemelos Digitales</span>
                <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4">
                  ›
                </span>
              </summary>
              <div className="px-5 pb-4" style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                <ul className="flex flex-col gap-3 list-none p-0">
                  {[
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
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <span
                        className="flex-shrink-0 rounded-full mt-2"
                        style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                      />
                      <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </details>
          </div>

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

          <div className="mt-6">
            <Image
              src="/images/presentacion-screenshot.jpg"
              alt="QGISRed software screenshot"
              width={1200}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Instalación */}
      <section id="instalacion" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Instalación de QGISRed" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
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
                embargo, QGISRed funciona por ahora solo sobre Windows y para versiones posteriores a la 3.2. Además,
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
                    En la misma ventana tienes un enlace a la ficha de QGISRed del repositorio de QGIS, donde encontrarás
                    algunos detalles más, y el histórico de versiones desde Septiembre 2019 en que se subió la primera
                    versión de QGISRed al repositorio. Pinchando sobre ellas puedes ver las novedades aportadas en cada
                    una.
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
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/presentacion-install.png"
                alt="Instalación de QGISRed"
                width={800}
                height={500}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar.png"
                alt="Barra de herramientas QGISRed"
                width={800}
                height={60}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-toolbar2.png"
                alt="Barra de herramientas QGISRed 2"
                width={800}
                height={60}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-window.png"
                alt="Ventana principal QGISRed"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Proyecto en GitHub */}
      <section id="github" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Proyecto en GitHub" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed no es un producto cerrado. La parte del código de QGISRed que interacciona con las
                funcionalidades de QGIS está desarrollada en Python y es dominio público, de acuerdo con los términos
                de la licencia GNU GPL 2.0 de QGIS, la cual es extensible a todos los plugins distribuidos a través de
                su repositorio oficial. Dicho código es accesible a través del portal de GitHub QGISRed y aloja todas
                las funcionalidades que afectan a la personalización de la interfaz gráfica de QGIS tras instalar el
                plugin, así como a ciertas capacidades de edición y selección de los elementos de la red.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A continuación, se muestra el contenido de la pestaña que aloja el código de QGISRed. Desde las dos
                últimas líneas se puede acceder también a los manuales en español e inglés.
              </p>

              <ToggleSection title="Saber más sobre el proyecto de QGISRed en GitHub">
                <p className="mb-3">
                  El proyecto QGISRed está en su primera fase de implementación, y por ahora el desarrollo del código
                  libre no es colaborativo, aunque está previsto abrirlo a la comunidad investigadora en el futuro.
                </p>
                <p className="mb-3">
                  En la parte de la derecha de esta pestaña se muestra también la licencia del plugin, la última versión
                  liberada y todas las versiones publicadas anteriormente con sus mejoras.
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
                  Sin embargo, la mayor parte del código de QGISRed está desarrollado en C# para Windows, configurando
                  una serie de librerías denominadas GISRed.xxx.dll, las cuales son utilizadas por la interfaz gráfica.
                  Estas librerías contienen la mayoría de los algoritmos, formularios y cuadros de diálogo propios de la
                  aplicación, y se instalan en la carpeta …/AppData/Roaming/QGISRed/dlls/… del perfil del usuario al
                  pulsar sobre cualquier botón u opción propia del plugin, una vez instalado. Todos los algoritmos
                  contenidos en dicha librería han sido desarrollados desde cero, y no utilizan ninguna otra librería
                  externa, ni las propias de QGIS, no generando así ninguna dependencia, excepto con la librería
                  Epanet2.dll correspondiente a la Toolkit 2.2 de EPANET (Dic 2109), utilizada para lanzar las
                  simulaciones hidráulicas y de calidad, y la librería Shaplibe.dll utilizada para leer y escribir los
                  ficheros .shp; ambas librerías se instalan al mismo tiempo que las librerías de QGISRed. Por otras
                  parte, los diálogos en Python se han construido utilizando la plataforma Qt, que es también de dominio
                  público.
                </p>
              </ToggleSection>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/github-emblem.png"
                alt="GitHub"
                width={960}
                height={540}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-credit1.png"
                alt="GitHub QGISRed"
                width={800}
                height={400}
                className="w-full h-auto mb-4"
              />
              <Image
                src="/images/presentacion-credit2.png"
                alt="GitHub QGISRed Issues"
                width={800}
                height={200}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Créditos */}
      <section id="creditos" className="w-full" style={{ backgroundColor: "rgb(246, 246, 246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Créditos" />

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            El proyecto QGISRed nace por iniciativa del Grupo de Investigación en Redes Hidráulicas y Sistemas a Presión
            (REDHISP), del Instituto de Ingeniería del Agua y Medio Ambiente (IIAMA) de la Universitat Politècnica de
            València (UPV), como una propuesta para retomar las prestaciones de la antigua aplicación GISRed y
            adecuarlas a un entorno de trabajo más actual, promoviendo al mismo tiempo su difusión en todo el mundo.
          </p>
          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            El proyecto arranca con una Ayuda de la Generalitat Valenciana para la contratación de Personal de Apoyo a
            la Transferencia Tecnológica (APOTI/2018/006), por un importe efectivo de 18.300 € y duración desde Nov
            2018 hasta Julio 2019. A partir de esa fecha el proyecto continua adelante a través del soporte económico
            del Fondo de Sostenibilidad I+D del grupo REDHISP, alimentado con recursos propios generados a través de
            contratos y con la colaboración de la empresa WaterPi hasta finales de 2022.
          </p>

          <ToggleSection title="Saber más">
            <p className="mb-3">
              La dirección del Proyecto QGISRed está a cargo del Prof. Fernando Martínez Alzamora, Catedrático de
              Ingeniería Hidráulica de la UPV, con más de 40 años de experiencia en la modelación de sistemas
              hidráulicos a presión. Se adjunta un breve CV, mientras que un listado de las principales publicaciones
              puede encontrarse en su página personal de Research Gate.
            </p>
            <p>
              Fernando Martínez Alzamora es Ingeniero Industrial por la Universitat Politècnica de València (1978) y
              Doctor por la misma universidad (1982). Desde 1995 es Catedrático de Ingeniería Hidráulica de la UPV y
              desde 2001 investigador del Instituto de Ingeniería del Agua y M.A. (IIAMA) de la referida Universidad.
              Imparte docencia en el área de las Máquinas Hidráulicas y sus aplicaciones industriales, incluyendo el
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
              El código de QGISRed fue desarrollado hasta finales de 2022 por Néstor Lerma Elvira, Dr. Ing. Caminos por
              la UPV, y socio fundador de la empresa WaterPi Coop. V. Gran parte de los méritos de la versión de
              QGISRed que aquí se ofrece se deben al buen hacer de Néstor, que ha sabido conjugar sus conocimientos de
              ingeniería con sus habilidades como programador. Puedes visitar su perfil investigador en la página
              personal de Research Gate.
            </p>
            <p>
              Néstor Lerma Elvira es Ingeniero de Caminos, Canales y Puertos por la Universitat Politècnica de València
              (2010) y Doctor por la misma universidad (2017). Durante el periodo 2009-2017 se especializó en recursos
              hídricos, aplicando algoritmos evolutivos para optimizar la gestión en sistemas multi-embalse en el mismo
              proyecto final de carrera, el trabajo final del Máster en Ingeniería Hidráulica y Medio ambiente
              (impartido en la misma universidad) y el propio doctorado ya mencionado.
            </p>
          </ToggleSection>

          <div className="mt-8">
            <div
              className="p-6"
              style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(230,230,230)" }}
            >
              <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                <strong>QGISRed v1.0</strong> está registrado en los servicios de CARTA de la UPV, con el número de
                registro S-072-2021, y licencia GNU GPL 2.0, siendo la titularidad 100 % de la UPV. La descarga y uso
                del plugin es libre, sin requerir ningún tipo de registro previo. Sin embargo, en cualquier uso de tipo
                profesional o educativo que se haga del plugin debe mencionarse su procedencia y proporcionar un enlace
                a esta página web. No obstante, los usuarios que voluntariamente quieran registrarse para estar al día
                de las novedades o contactar con los desarrolladores puede hacerlo desde nuestro formulario de
                contacto. Aunque los resultados ofrecidos por QGISRed han sido contrastados en varias ocasiones con los
                proporcionados por EPANET 2.2, los autores del plugin declinan cualquier responsabilidad sobre la
                exactitud de los mismos y el uso de que se haga de ellos.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6 mt-8">
            <Image
              src="/images/presentacion-team1.jpg"
              alt="Equipo QGISRed"
              width={400}
              height={300}
              className="w-full md:w-1/2 h-auto object-cover"
            />
            <Image
              src="/images/presentacion-team2.jpg"
              alt="Equipo QGISRed"
              width={400}
              height={300}
              className="w-full md:w-1/2 h-auto object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
