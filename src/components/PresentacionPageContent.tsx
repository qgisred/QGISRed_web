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
              nosotros para obtener soporte o colaborar en este apasionante proyecto, visita las otras secciones de la
              web.
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
                operaciones con los datos, etc.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A diferencia de otros plugins, QGISRed no es un conjunto de herramientas aisladas para facilitar
                determinadas tareas, sino que constituye una plataforma de trabajo desde la cual se puede construir o
                importar el modelo de la red, editar su trazado, declarar las propiedades de los elementos, construir y
                gestionar los escenarios de simulación, lanzar las simulaciones y visualizar sus resultados, además de
                muchas otras funciones.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Además de ello, QGISRed ofrece algunas ayudas para confeccionar los modelos, como la verificación de
                todos los datos, el cálculo automático de longitudes, la interpolación de cotas a partir de un MDT, la
                asignación de rugosidades a las tuberías a partir del material y edad, la asignación de las demandas a
                los nudos a partir de los puntos de consumo, etc.
              </p>

              <ToggleSection title="Saber más">
                <p>
                  QGISRed integra el motor de simulación EPANET 2.2 (desarrollado por la US EPA), que calcula el
                  comportamiento hidráulico y de calidad del agua para un tiempo extendido. El resultado de cualquier
                  simulación puede visualizarse directamente sobre el mapa, o exportarse a diferentes formatos.
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
                proyecto con similares objetivos y prestaciones, denominado GISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                GISRed se programó en el lenguaje Avenue para ArcView 3.2, un precedente de lo que después fue ArcGIS,
                y llegó a estar configurado por más de 600 scripts. Se utilizó internamente como herramienta de ayuda
                para confeccionar varios planes directores de mejora de abastecimientos.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Sin embargo, la falta de robustez del producto limitó su difusión en primera instancia, y al poco
                tiempo ArcView quedó obsoleto, siendo abandonado también el lenguaje Avenue.
              </p>

              <ToggleSection title="Leer más">
                <p>
                  El proyecto QGISRed nace en 2018 como sucesor natural de GISRed, aprovechando la madurez alcanzada
                  por QGIS como plataforma GIS libre y su capacidad para alojar complementos desarrollados en Python.
                  El objetivo es ofrecer a los ingenieros de agua una plataforma robusta, libre y en continuo
                  desarrollo para la modelación avanzada de redes.
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
            manejar, por su continua expansión y adaptación en función de las necesidades.
          </p>
          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Los modelos se emplearon en principio con fines de diseño, y para ello bastaba con simular el caso más
            desfavorable, normalmente la situación punta, sobre una red simplificada. Con el tiempo se extendió su uso
            para simular el comportamiento dinámico de las redes en explotación.
          </p>

          <p className="mb-4 font-semibold" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
            QGISRed pretende cubrir todas estas situaciones, siendo las principales aplicaciones:
          </p>

          <ul className="flex flex-col gap-3 mb-8 list-none p-0">
            {[
              "Diseño de nuevas redes o ampliaciones",
              "Rehabilitación y renovación de infraestructuras",
              "Explotación: análisis de escenarios de operación",
              "Planes Directores de abastecimiento",
              "Gestión de la calidad del agua",
              "Implementación de Gemelos Digitales",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0 rounded-full"
                  style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                />
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>{item}</span>
              </li>
            ))}
          </ul>

          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En cualquier caso, hay que dejar claro que la versión libre del QGISRed no va a ofrecer soluciones a todos
            estos problemas formulados, ni es su intención. QGISRed se limita a simular el comportamiento de la red bajo
            unas condiciones predefinidas, tal como hace actualmente EPANET.
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
                y formato de los datos.
              </p>

              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Una vez instalado QGIS, para instalar el complemento QGISRed basta con seguir los siguientes pasos:
              </p>

              <div className="mb-6">
                <AccordionItem title="Instalación del complemento QGISRed">
                  <ol className="flex flex-col gap-2 list-decimal pl-5">
                    <li>Abre QGIS y ve al menú <strong>Complementos → Administrar e instalar complementos</strong></li>
                    <li>En la barra de búsqueda escribe «QGISRed»</li>
                    <li>Selecciona el complemento y haz clic en <strong>Instalar complemento</strong></li>
                    <li>Una vez instalado, aparecerá en el menú Complementos y en la barra de herramientas</li>
                  </ol>
                </AccordionItem>
                <AccordionItem title="El repositorio de complementos de QGIS">
                  <p>
                    QGISRed está disponible en el repositorio oficial de complementos de QGIS. Puedes buscarlo directamente
                    desde el gestor de complementos integrado en QGIS o visitar{" "}
                    <a href="https://plugins.qgis.org" target="_blank" rel="noopener noreferrer" style={{ color: "rgb(95, 189, 211)" }}>
                      plugins.qgis.org
                    </a>
                    .
                  </p>
                </AccordionItem>
                <AccordionItem title="Versiones beta y actualizaciones">
                  <p>
                    Las versiones beta de QGISRed se publican en el repositorio de GitHub del proyecto. Para acceder a
                    ellas, consulta la sección del Proyecto en GitHub. Las actualizaciones estables se distribuyen
                    automáticamente a través del repositorio oficial de QGIS.
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
                su repositorio oficial.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proyecto QGISRed está en su primera fase de implementación, y por ahora el desarrollo del código
                libre no es colaborativo, aunque está previsto abrirlo a la comunidad en cuanto se tenga una versión
                suficientemente madura.
              </p>

              <ToggleSection title="Saber más sobre el proyecto de QGISRed en GitHub">
                <p>
                  Puedes acceder al código fuente de QGISRed en{" "}
                  <a
                    href="https://github.com/qgisred/QGISRed"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgb(95, 189, 211)" }}
                  >
                    https://github.com/qgisred/QGISRed
                  </a>
                  . Allí encontrarás también la pestaña Issues para reportar incidencias y la documentación del proyecto.
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
            (REDHISP), del Instituto de Ingeniería de Agua y del Medio Ambiente (IIAMA) de la Universitat Politècnica de
            València (UPV).
          </p>

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            La dirección del Proyecto QGISRed está a cargo del Prof. Fernando Martínez Alzamora, Catedrático de
            Ingeniería Hidráulica de la UPV, con más de 40 años de experiencia en el campo de la hidráulica urbana y la
            modelación de redes de distribución de agua.
          </p>

          <ToggleSection title="Saber más">
            <p className="mb-3">
              El equipo de desarrollo está integrado por ingenieros e investigadores del grupo REDHISP del IIAMA-UPV,
              con la colaboración puntual de otros investigadores y profesionales del sector.
            </p>
          </ToggleSection>

          <ToggleSection title="Saber más">
            <p>
              QGISRed v1.0 está registrado en los servicios de CARTA de la UPV, con el número de registro S-072-2021, y
              licencia GNU GPL 2.0, siendo la titularidad de los derechos de explotación compartida entre los autores y
              la UPV.
            </p>
          </ToggleSection>

          <div className="mt-8">
            <div
              className="p-6"
              style={{ backgroundColor: "rgb(255, 255, 255)", border: "1px solid rgb(230,230,230)" }}
            >
              <p style={{ fontSize: "13px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                <strong>QGISRed v1.0</strong> está registrado en los servicios de CARTA de la UPV, con el número de
                registro S-072-2021, y licencia GNU GPL 2.0, siendo la titularidad de los derechos de explotación
                compartida entre los autores y la UPV.
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
