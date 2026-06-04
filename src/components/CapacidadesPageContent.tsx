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

interface AccordionItemProps {
  title: string;
  children: React.ReactNode;
}

function AccordionItem({ title, children }: AccordionItemProps) {
  return (
    <details className="border border-gray-200 mb-2 group">
      <summary
        className="flex items-center justify-between px-5 py-4 cursor-pointer list-none bg-white hover:bg-gray-50 transition-colors"
        style={{ fontSize: "15px", fontWeight: "500", color: "rgb(0, 9, 25)" }}
      >
        <span>{title}</span>
        <span className="flex-shrink-0 text-[rgb(95,189,211)] transition-transform duration-200 group-open:rotate-90 ml-4 text-lg">
          ›
        </span>
      </summary>
      <div className="px-5 pb-4 pt-2" style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
        {children}
      </div>
    </details>
  );
}

interface CapacidadCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

function CapacidadCard({ title, description, imageSrc, imageAlt }: CapacidadCardProps) {
  return (
    <div
      className="p-6 mb-8"
      style={{ border: "1px solid rgb(230,230,230)", backgroundColor: "rgb(255,255,255)" }}
    >
      <h3 className="font-semibold mb-3" style={{ fontSize: "20px", color: "rgb(0, 9, 25)" }}>
        {title}
      </h3>
      <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
        {description}
      </p>
      {imageSrc && (
        <Image
          src={imageSrc}
          alt={imageAlt ?? title}
          width={800}
          height={400}
          className="w-full h-auto"
        />
      )}
    </div>
  );
}

const prestacionesActuales = [
  "Gestión de Proyecto",
  "Datos del Proyecto",
  "Herramientas de Edición Gráfica",
  "Edición de Propiedades",
  "Asistentes para completar los Datos del Modelo",
  "Importación/exportación de Datos",
  "Verificación y Depuración de los Datos del Modelo",
  "Gestión de Escenarios",
  "Análisis y visualización de Resultados",
  "Extensión para trabajar con Gemelos Digitales",
  "Conexión del Gemelo con los Datos Reales",
  "Herramientas de Exploración",
  "Información",
];

const proximasPrestaciones = [
  "De carácter General de Proyecto",
  "Edición de los Elementos",
  "Asistentes para completar los Datos del Modelo",
  "Nuevos Elementos del Modelo",
  "Visualización de Datos y Resultados",
  "Flujos y Balances",
  "Gemelo Digital",
];

const historico = [
  { version: "0.18", fecha: "30 abril 2026", content: "Se recogen muchos de los avances realizados en los últimos 3 años desde que se terminó la versión 0.17. Incluye mejoras en el almacenamiento de resultados y su visualización sobre el mapa, curvas de evolución de variables dinámicas, confección de mapas temáticos, propiedades de los elementos, consultas por propiedades, editor de leyendas, identificador de elementos a través de su ID, y otras mejoras y depuración de errores." },
  { version: "0.17", fecha: "febrero 2026", content: "Versión mayor con múltiples mejoras en la gestión de escenarios, visualización de resultados y compatibilidad con EPANET 2.2. Incorporación de nuevas herramientas de análisis y mejoras en la interfaz de usuario." },
  { version: "0.16", fecha: "14 julio 2022", content: "Mejoras en la importación y exportación de datos, nuevas herramientas de edición gráfica y corrección de errores detectados en versiones anteriores." },
  { version: "0.15", fecha: "10 marzo 2022", content: "Incorporación de asistentes para completar los datos del modelo, mejoras en la verificación de datos y nuevas funcionalidades para la gestión de escenarios." },
  { version: "0.14", fecha: "11 junio 2021", content: "Nuevas herramientas de exploración, mejoras en la visualización de resultados y corrección de errores." },
  { version: "0.13", fecha: "26 mayo 2021", content: "Mejoras en la edición de propiedades, nuevos asistentes y corrección de errores detectados por los usuarios." },
  { version: "0.12", fecha: "7 enero 2021", content: "Incorporación de nuevas funcionalidades para trabajar con Gemelos Digitales y mejoras en la gestión de proyectos." },
  { version: "0.11", fecha: "15 septiembre 2020", content: "Mejoras en la interfaz de usuario, nuevas herramientas de edición y corrección de errores." },
  { version: "0.10", fecha: "12 mayo 2020", content: "Versión con importantes mejoras en el rendimiento y nuevas funcionalidades para el análisis de redes." },
  { version: "0.9", fecha: "10 marzo 2020", content: "Corrección de errores y mejoras menores en la interfaz de usuario." },
];

export function CapacidadesPageContent() {
  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Después de la{" "}
            <a href="/presentacion/" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
              Presentación
            </a>
            , estarás ansioso por saber qué capacidades ofrece al usuario el plugin QGISRed. En esta sección te las
            contamos. Pero puesto que es un producto aún en desarrollo, iniciado hace algunos años, lo vamos a hacer
            por etapas.
          </p>
        </div>
      </section>

      {/* Novedades */}
      <section id="novedades" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Novedades versión 0.18" />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En esta nueva versión 0.18 de QGISRed se recogen muchos de los avances realizados en los últimos 3 años
            desde que se terminó la versión 0.17, aunque el lanzamiento de ésta última se haya retrasado hasta ahora.
          </p>

          <CapacidadCard
            title="Mejoras en el almacenamiento de resultados y su visualización sobre el mapa"
            description="Hasta la versión 0.17 los resultados de una simulación se guardaban en un fichero propio desde donde se configuraban los diferentes ficheros shape asociados a cada variable. Las filas de la tabla de atributos de cada shape representaban las instancias de tiempo del análisis de periodo extendido. Ahora los resultados se almacenan directamente en ficheros GeoPackage, mejorando la integración con el entorno QGIS."
          />

          <CapacidadCard
            title="Curvas de evolución de las variables dinámicas"
            description="Nueva funcionalidad para visualizar las curvas de evolución temporal de cualquier variable dinámica del análisis de periodo extendido, tanto para nudos como para tuberías, directamente desde el mapa."
          />

          <CapacidadCard
            title="Confección de mapas temáticos"
            description="Herramienta mejorada para la generación automática de mapas temáticos a partir de los resultados de simulación, con control total sobre los rangos, colores y simbología."
          />

          <CapacidadCard
            title="Propiedades de los elementos"
            description="Nuevo editor de propiedades mejorado que permite consultar y modificar los atributos de cualquier elemento directamente desde el mapa, con validación automática de los datos."
          />

          <CapacidadCard
            title="Consultas por Propiedades"
            description="Nueva herramienta para realizar consultas y filtros sobre los elementos del modelo en función de sus propiedades o de los resultados de la simulación."
            imageSrc="/images/capacidades-diapositiva12.png"
            imageAlt="Consultas por propiedades"
          />

          <CapacidadCard
            title="Editor de leyendas"
            description="Nuevo editor de leyendas que permite personalizar completamente la simbología de las capas de resultados, con soporte para leyendas graduadas, categorizadas y de rulos."
          />

          <CapacidadCard
            title="Identificador de elementos a través de su ID"
            description="Nueva funcionalidad para localizar rápidamente cualquier elemento del modelo a través de su identificador, facilitando la navegación en redes de gran tamaño."
          />

          <CapacidadCard
            title="Otras mejoras y depuración de errores"
            description="Numerosas mejoras menores y corrección de errores detectados por los usuarios en versiones anteriores, mejorando la estabilidad y el rendimiento general de la aplicación."
          />
        </div>
      </section>

      {/* Capacidades Destacadas */}
      <section id="capacidadesdestacadas" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Capacidades destacadas" />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En esta sección queremos resaltar las capacidades más destacadas de QGISRed, en lo que llevamos desarrollado
            hasta ahora. Aunque en el Manual se reflejan todas las capacidades de la aplicación, su lectura puede ser
            ardua. Por eso hemos seleccionado las que creemos más significativas para mostrártelas aquí de forma más
            visual.
          </p>

          <CapacidadCard
            title="Incorporación de las Válvulas de Corte al Modelo de QGISRed"
            description="Si quieres utilizar el modelo de la red para analizar cómo se ven afectados los flujos al seccionar la red por las válvulas de corte, bien para separar zonas de forma permanente, o para aislar una zona en caso de avería o para realizar trabajos de mantenimiento, ahora puedes incorporar las válvulas de corte al modelo con QGISRed."
            imageSrc="/images/capacidades-valvulas.jpg"
            imageAlt="Válvulas de corte en QGISRed"
          />

          <CapacidadCard
            title="Soporte a las Nuevas Opciones de Análisis de EPANET 2.2"
            description="QGISRed soporta todas las nuevas opciones de análisis incorporadas en EPANET 2.2, incluyendo el análisis basado en presión (PDA), la modelación de bombas de velocidad variable mejorada, y nuevas opciones para la calidad del agua."
            imageSrc="/images/capacidades-diapositiva16.png"
            imageAlt="EPANET 2.2 opciones"
          />

          <CapacidadCard
            title="Asignación de Demandas a los Nudos por Sectores y desde los Puntos de Consumo"
            description="Herramienta avanzada para asignar demandas a los nudos del modelo a partir de los puntos de consumo reales, utilizando criterios geográficos de proximidad o mediante la definición de sectores de distribución."
          />

          <CapacidadCard
            title="Mejoras en la Navegación desde el Editor de Propiedades"
            description="El editor de propiedades permite ahora navegar directamente entre elementos conectados, facilitando la revisión del modelo y la comprobación de la topología de la red."
          />

          <CapacidadCard
            title="Nueva Herramienta para cambiar el Estado de los Elementos y Simbolización según su Estado"
            description="Nueva funcionalidad para cambiar el estado operacional de los elementos del modelo (abierto/cerrado) directamente desde el mapa, con actualización automática de la simbología para reflejar el estado actual."
          />
        </div>
      </section>

      {/* Prestaciones Actuales */}
      <section id="prestacionesactuales" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Prestaciones actuales" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                QGISRed ha cumplido ya casi cuatro años de vida, desde que comenzó su andadura a finales de 2018. Desde
                entonces no hemos parado de introducir mejoras, aunque quizás no al ritmo deseado por no haberle podido
                dedicar todos los recursos necesarios.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {prestacionesActuales.map((prestacion) => (
                  <div key={prestacion} className="flex items-center gap-3">
                    <span
                      className="flex-shrink-0 rounded-full"
                      style={{ width: "8px", height: "8px", backgroundColor: "rgb(95, 189, 211)" }}
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>
                      {prestacion}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/capacidades-diapositiva11.png"
                alt="Prestaciones actuales QGISRed"
                width={800}
                height={500}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Próximas Prestaciones */}
      <section id="proximasprestaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Próximas prestaciones" />

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            Como ya sabes, la versión 1.0 de QGISRed está aún en desarrollo. A continuación, te adjuntamos una lista de
            las principales mejoras que tenemos previsto incorporar para completar esta versión. La lista no es
            exhaustiva, pero sí indicativa del camino que queremos recorrer.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
            {proximasPrestaciones.map((prestacion) => (
              <div key={prestacion} className="flex items-center gap-3">
                <span
                  className="flex-shrink-0"
                  style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)", borderRadius: "2px" }}
                />
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>
                  {prestacion}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histórico de Versiones */}
      <section id="historicodeversiones" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Histórico de versiones" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 100%" }}>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El proceso de desarrollo de un producto de software es complejo y requiere muchas horas de dedicación y
                revisión del código. Desde la concepción inicial de un procedimiento hasta su implementación final, se
                sigue un proceso de prueba y error.
              </p>

              <div className="mb-4">
                {historico.map((item) => (
                  <AccordionItem key={item.version} title={`Cambios en la versión ${item.version}  – ${item.fecha}`}>
                    <p>{item.content}</p>
                  </AccordionItem>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
