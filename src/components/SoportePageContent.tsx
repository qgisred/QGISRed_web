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

const serviciosEmpresas = [
  "Confección de modelos hidráulicos de redes de distribución de agua",
  "Modelación de redes de regadío y transporte",
  "Calibración de modelos hidráulicos",
  "Análisis y auditoría del balance hídrico de la red",
  "Sectorización de redes de distribución de agua",
  "Planes Directores de abastecimiento",
  "Configuración e implementación de Gemelos Digitales",
  "Formación personalizada en el uso de QGISRed",
  "Desarrollo de capacidades específicas a petición del cliente",
];

const participacionProyectos = [
  "Proyectos de investigación financiados por organismos públicos",
  "Contratos de I+D con empresas gestoras del agua",
  "Proyectos de cooperación internacional",
  "Proyectos de digitalización y Gemelos Digitales en el sector hídrico",
];

export function SoportePageContent() {
  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            El objetivo de esta sección es dar soporte a cualquier usuario de QGISRed. Aunque la aplicación es libre,
            no por ello está desatendida. Encontrarás aquí varios niveles de ayuda para sentirte apoyado en tus
            primeros pasos, y también cuando seas ya un profesional en el uso de la aplicación.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En primer lugar, te recordamos que existe un portal para reportar cualquier incidencia observada en el uso
            de QGISRed. Aunque tienes que registrarte previamente, se trata de un portal público vinculado a la
            plataforma de desarrollo en GitHub.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Pero si quieres una atención más continua y personalizada, puedes suscribirte al Servicio de Soporte
            Técnico para tener una respuesta más inmediata a tus problemas.
          </p>
          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            La atención a tus necesidades puede ir aún más lejos, ofreciendo un Servicio de Asistencia directo a las
            Empresas bajo contrato. Finalmente, nuestro espíritu universitario nos lleva a proponerte la forma preferida
            de colaboración por nuestra parte, que es mediante la participación en Proyectos de Investigación y
            Desarrollo.
          </p>
        </div>
      </section>

      {/* Incidencias */}
      <section id="incidencias" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Incidencias" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En la sección de Presentación ya te hemos contado que una parte del código de QGISRed es pública, y
                está alojada en el portal de GitHub{" "}
                <a
                  href="https://github.com/qgisred/QGISRed/issues"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                >
                  https://github.com/qgisred/QGISRed/issues
                </a>
                . Allí se comentó también la existencia de la pestaña Issues reservada para que los usuarios puedan
                notificar cualquier incidencia detectada en el uso de la aplicación.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A continuación, se muestra de nuevo la página de QGISRed en GitHub, abierta ahora por la pestaña
                Issues. Observa que la información se divide en dos partes, una relativa a los temas aún Abiertos, y
                otra a los temas ya Cerrados.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Cada Issue tiene un título y número precedido de un hashtag, y por cada uno puedes ver también la fecha
                en que se originó y cerró, los usuarios que han participado, y una etiqueta de color que califica el
                tipo de incidencia, si era un fallo o una sugerencia, si ha sido resuelta, si queda para el futuro, etc.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Para seguir el hilo de la conversación solo tienes que entrar en ella y añadir nuevos mensajes al
                final. También puedes crear una nueva incidencia pulsando en el botón en verde New Issue. Pero para
                participar activamente, tienes que registrarte antes en el proyecto de GitHub.
              </p>

              <a
                href="https://github.com/qgisred/QGISRed/issues"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "12px 32px",
                  textDecoration: "none",
                }}
              >
                Ver incidencias en GitHub
              </a>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/soporte-github.png"
                alt="GitHub Issues QGISRed"
                width={800}
                height={500}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Soporte Técnico */}
      <section id="soportetecnico" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Soporte técnico" />

          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Una de las cosas que se les suele criticar a las aplicaciones de uso libre, es la falta de una ayuda
            directa al usuario, frente a la ventaja de no tener que pagar licencias. Aunque está la opción de utilizar
            el portal de incidencias, o el foro de usuarios, no hay garantía de una respuesta rápida y efectiva.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Sin embargo, podemos prestar un servicio de{" "}
            <strong>Soporte Técnico personalizado</strong>, con respuesta prioritaria, a cambio de una suscripción
            anual que aún está por concretar. La opción de garantizar una respuesta ante cualquier fallo en un tiempo
            reducido puede animar a cualquier empresa a adoptar QGISRed como su herramienta principal de trabajo.
          </p>
          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Este soporte incluiría también la orientación sobre el mejor modo de abordar un problema determinado, pero
            no el análisis de los datos del cliente, ni la ayuda técnica para confeccionar el modelo de la red, ni
            tampoco el desarrollo de capacidades específicas solicitadas por los clientes. Estas opciones están
            contempladas en la sección de Servicios a Empresas.
          </p>

          <a
            href="/contacto"
            className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
              fontSize: "13px",
              letterSpacing: "0.08em",
              padding: "12px 32px",
              textDecoration: "none",
            }}
          >
            Solicitar soporte técnico
          </a>
        </div>
      </section>

      {/* Servicios a Empresas */}
      <section id="empresas" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Servicios a empresas" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El Profesor Fernando Martínez, responsable y director de la aplicación QGISRed, tiene más de 40 años de
                experiencia en la confección de modelos de redes de abastecimiento y de riego para muchas instalaciones
                reales. Algunas tan complejas como el Sistema de Abastecimiento a Valencia y su área metropolitana.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El IIAMA puede ofrecer una amplia variedad de servicios a las empresas gestoras de los suministros de
                agua potable.
              </p>

              <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                Algunos de los servicios que podemos ofrecer:
              </p>

              <ul className="flex flex-col gap-3 mb-8 list-none p-0">
                {serviciosEmpresas.map((servicio) => (
                  <li key={servicio} className="flex items-start gap-3">
                    <span
                      className="flex-shrink-0 mt-1.5 rounded-full"
                      style={{ width: "8px", height: "8px", backgroundColor: "rgb(126, 167, 40)" }}
                    />
                    <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>
                      {servicio}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="/contacto"
                className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "12px 32px",
                  textDecoration: "none",
                }}
              >
                Solicitar información
              </a>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/soporte-team.jpg"
                alt="Equipo de innovadores"
                width={800}
                height={540}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Participación en Proyectos */}
      <section id="participacion" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Participación en Proyectos" />

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Los proyectos públicos o privados son una forma de abordar nuevos retos, contando con la colaboración de
            expertos en diversas áreas complementarias entre sí.
          </p>

          <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Nuestro espíritu universitario nos lleva a proponerte la forma preferida de colaboración por nuestra parte,
            y es mediante la participación en Proyectos de Investigación y Desarrollo, buscando siempre avanzar para
            conseguir metas cada vez más exigentes.
          </p>

          <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
            Ámbitos de colaboración en proyectos:
          </p>

          <ul className="flex flex-col gap-3 mb-8 list-none p-0">
            {participacionProyectos.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 mt-1.5 rounded-full"
                  style={{ width: "8px", height: "8px", backgroundColor: "rgb(95, 189, 211)" }}
                />
                <span style={{ fontSize: "14px", fontWeight: "500", color: "rgb(0, 9, 25)" }}>
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <a
            href="/contacto"
            className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
            style={{
              background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
              fontSize: "13px",
              letterSpacing: "0.08em",
              padding: "12px 32px",
              textDecoration: "none",
            }}
          >
            Proponer colaboración
          </a>
        </div>
      </section>
    </main>
  );
}
