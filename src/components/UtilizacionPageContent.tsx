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

function ComingSoon() {
  return (
    <p
      className="italic"
      style={{ fontSize: "15px", color: "rgb(120, 120, 120)", lineHeight: "1.7" }}
    >
      Próximamente
    </p>
  );
}

const ejemplos = [
  {
    name: "Red1_SI.inp (Unidades SI)",
    description: "Se trata de un ejemplo sencillo para mostrar el decaimiento del cloro. Incluye coeficientes de reacción en el medio y en las paredes. Todas las unidades están expresadas en el Sistema Internacional. Incorpora además una válvula de regulación que puede configurarse de diferentes modos cambiando su tipo y consigna.",
    imageSrc: "/images/utilizacion-red1.jpg",
  },
];

export function UtilizacionPageContent() {
  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Probablemente sea esta la sección más importante de toda la página, pues te enseñará cómo utilizar y sacar
            provecho de QGISRed. Pero la estamos construyendo poco a poco, así que en el futuro tendrá bastante más
            contenido. Por ahora la mayor fuente de información es el Manual, que tienes al final de esta sección.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En una primera parte se ofrecerán aquí un conjunto de Tutoriales para que puedas seguir con calma todos los
            pasos necesarios para alcanzar el objetivo marcado en cada uno de ellos. Serán documentos en PDF que puedes
            descargar y manejar a tu gusto. Sin embargo, los tutoriales más avanzados los reservaremos para su
            desarrollo en los cursos que ofrecemos (enlace a cursos).
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            La sección de Vídeos seguirá el mismo esquema que los tutoriales, y normalmente estarán basados en ellos,
            aunque por limitación de tiempo es probable que se omitan algunas prestaciones, así que si quieres tener
            una información más completa y detallada se recomienda acudir a los tutoriales. Para darle una mayor
            difusión a los vídeos, hemos decidido distribuirlos a través de Youtube.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            También aprovecharemos esta sección para colgar los Ejemplos utilizados en los tutoriales o en los vídeos,
            de modo que te resulte fácil acceder a ellos.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En otro apartado está previsto publicar el Modelo de Datos utilizado por QGISRed para alojar toda la
            información que configura un proyecto, así como la estructura de los diferentes ficheros auxiliares
            utilizados por QGISRed.
          </p>
          <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Para una información más completa de todo lo que hay desarrollado hasta ahora puedes recurrir al Manual de
            la aplicación en PDF, que encontrarás en la sección siguiente. El manual siempre ha estado disponible en
            español y en inglés, y lo vamos actualizando cada vez que sacamos una nueva versión. En el futuro esperamos
            poner esta información en red, ampliarla y compartir sus contenidos.
          </p>
          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            Finalmente habrá en esta sección también un apartado reservado para las preguntas más frecuentes, y otro
            para gestionar un foro de usuarios, los cuales están por ahora deshabilitados.
          </p>
        </div>
      </section>

      {/* Manual del Usuario */}
      <section id="manualusuario" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Manual del usuario" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Desde un principio QGISRed ha ido acompañado de un Manual de Usuario, en español e inglés, que vamos
                actualizando en cada nueva versión. El manual está escrito en Word y se difunde en PDF. En un futuro lo
                migraremos a un entorno web colaborativo.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                A diferencia de los tutoriales, en el manual se refleja toda la información sobre las prestaciones de la
                aplicación, de forma escueta y rigurosa, y sobre todo, de modo ordenado. En él encontrarás al final un
                pequeño tutorial para ejecutar el fichero Red1_SI.inp, así como los pasos para construirlo desde cero.
              </p>

              <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                Para bajarte el Manual de Usuario en español, pincha en el siguiente botón.
              </p>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="https://github.com/qgisred/QGISRed/blob/master/QGISRed_UserManual_ES.pdf"
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
                  Manual en Español
                </a>
                <a
                  href="https://github.com/qgisred/QGISRed/blob/master/QGISRed_UserManual_EN.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110"
                  style={{
                    background: "linear-gradient(135deg, rgb(0, 9, 25) 0%, rgb(0, 9, 25) 100%)",
                    fontSize: "13px",
                    letterSpacing: "0.08em",
                    padding: "12px 32px",
                    textDecoration: "none",
                  }}
                >
                  Manual en Inglés
                </a>
              </div>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/utilizacion-manual.png"
                alt="Manual de usuario QGISRed"
                width={600}
                height={800}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tutoriales */}
      <section id="tutoriales" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Tutoriales" />
          <ComingSoon />
        </div>
      </section>

      {/* Vídeos Formativos */}
      <section id="videosformativos" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Vídeos formativos" />
          <ComingSoon />
        </div>
      </section>

      {/* Repositorio de Ejemplos */}
      <section id="repositorioejemplos" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Repositorio de ejemplos" />

          <div className="flex flex-col gap-8">
            {ejemplos.map((ejemplo) => (
              <div
                key={ejemplo.name}
                className="flex flex-col md:flex-row gap-6 p-6"
                style={{ border: "1px solid rgb(230,230,230)", backgroundColor: "rgb(255,255,255)" }}
              >
                {ejemplo.imageSrc && (
                  <div className="flex-shrink-0">
                    <Image
                      src={ejemplo.imageSrc}
                      alt={ejemplo.name}
                      width={200}
                      height={150}
                      className="w-full md:w-[200px] h-auto object-cover"
                    />
                  </div>
                )}
                <div>
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontSize: "16px", color: "rgb(95, 189, 211)" }}
                  >
                    {ejemplo.name}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    {ejemplo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Datos */}
      <section id="modelodatos" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Modelo de datos" />
          <ComingSoon />
        </div>
      </section>
    </main>
  );
}
