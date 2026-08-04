import Image from "@/components/AppImage";

const MANUAL_ES = `https://qgisred.gitbook.io/manual-de-usuario`;
const MANUAL_EN = `https://qgisred.gitbook.io/usermanual`;

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

function ComingSoon({ text }: { text: string }) {
  return (
    <p
      className="italic"
      style={{ fontSize: "15px", color: "rgb(120, 120, 120)", lineHeight: "1.7" }}
    >
      {text}
    </p>
  );
}

const ejemplos = [
  {
    name: "Red1_SI.inp (Unidades SI)",
    description: "Se trata de un ejemplo sencillo para mostrar el decaimiento del cloro. Incluye coeficientes de reacción en el medio y en las paredes. Todas las unidades están expresadas en el Sistema Internacional. Incorpora además una válvula de regulación que puede configurarse de diferentes modos cambiando su tipo y consigna.",
    descriptionEn: "This is a simple example to show chlorine decay. It includes reaction coefficients in the bulk and at the wall. All units are expressed in the International System. It also incorporates a regulation valve that can be configured in different ways by changing its type and set point.",
    imageSrc: "/images/utilizacion-red1.jpg",
    imageWidth: 100,
    imageHeight: 126,
  },
];

export function UtilizacionPageContent({ locale = "es" }: { locale?: string }) {
  const isEn = locale === "en";
  const comingSoonText = isEn ? "Coming soon" : "Próximamente";

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                This is probably the most important section of the entire website, as it will show you how to use and get the most out of QGISRed. But we are building it little by little, so in the future it will have considerably more content. For now the main source of information is the Manual, which you will find at the end of this section.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                In the first part, a set of{" "}
                <a href="#tutoriales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutorials</strong></a>
                {" "}will be offered here so that you can calmly follow all the steps needed to achieve the goal set in each one of them. They will be PDF documents that you can download and use at your leisure. However, the more advanced tutorials will be reserved for development in the courses we offer <span style={{ fontStyle: "italic" }}>(link to courses).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                The{" "}
                <a href="#videosformativos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Videos </strong></a>
                section will follow the same scheme as the tutorials, and will normally be based on them, although due to time constraints it is likely that some features will be omitted, so if you want more complete and detailed information it is recommended to refer to the tutorials. To give the videos a wider reach, we have decided to distribute them through Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                We will also use this section to post the{" "}
                <a href="#repositorioejemplos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Examples</strong></a>
                {" "}used in the tutorials or in the videos, so that you can easily access them.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                In another section, the{" "}
                <a href="#modelodatos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Data Model</strong></a>
                {" "}used by QGISRed to store all the information that configures a project is planned to be published, as well as the structure of the different auxiliary files used by QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                For more complete information on everything developed so far you can refer to the application{" "}
                <a href="#manualusuario" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manual</strong></a>
                {" "}in PDF, which you will find in the following section. The manual has always been available in Spanish and English, and we update it every time we release a new version. In the future we hope to put this information online, expand it and share its contents.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finally, this section will also include a section reserved for frequently asked questions, and another to manage a user forum, both of which are currently disabled.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Probablemente sea esta la sección más importante de toda la página, pues te enseñará cómo utilizar y sacar
                provecho de QGISRed. Pero la estamos construyendo poco a poco, así que en el futuro tendrá bastante más
                contenido. Por ahora la mayor fuente de información es el Manual, que tienes al final de esta sección.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En una primera parte se ofrecerán aquí un conjunto de{" "}
                <a href="#tutoriales" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutoriales</strong></a>
                {" "}para que puedas seguir con calma todos los pasos necesarios para alcanzar el objetivo marcado en cada uno de ellos. Serán documentos en PDF que puedes descargar y manejar a tu gusto. Sin embargo, los tutoriales más avanzados los reservaremos para su desarrollo en los cursos que ofrecemos <span style={{ fontStyle: "italic" }}>(enlace a cursos).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                La sección de{" "}
                <a href="#videosformativos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Vídeos </strong></a>
                seguirá el mismo esquema que los tutoriales, y normalmente estarán basados en ellos, aunque por limitación de tiempo es probable que se omitan algunas prestaciones, así que si quieres tener una información más completa y detallada se recomienda acudir a los tutoriales. Para darle una mayor difusión a los vídeos, hemos decidido distribuirlos a través de Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                También aprovecharemos esta sección para colgar los{" "}
                <a href="#repositorioejemplos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Ejemplos</strong></a>
                {" "}utilizados en los tutoriales o en los vídeos, de modo que te resulte fácil acceder a ellos.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En otro apartado está previsto publicar el{" "}
                <a href="#modelodatos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Modelo de Datos</strong></a>
                {" "}utilizado por QGISRed para alojar toda la información que configura un proyecto, así como la estructura de los diferentes ficheros auxiliares utilizados por QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Para una información más completa de todo lo que hay desarrollado hasta ahora puedes recurrir al{" "}
                <a href="#manualusuario" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manual</strong></a>
                {" "}de la aplicación en PDF, que encontrarás en la sección siguiente. El manual siempre ha estado disponible en español y en inglés, y lo vamos actualizando cada vez que sacamos una nueva versión. En el futuro esperamos poner esta información en red, ampliarla y compartir sus contenidos.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finalmente habrá en esta sección también un apartado reservado para las preguntas más frecuentes, y otro
                para gestionar un foro de usuarios, los cuales están por ahora deshabilitados.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Manual del Usuario */}
      <section id="manualusuario" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "User's Manual" : "Manual del usuario"} />

          <div className="flex flex-col md:flex-row gap-[40px] items-start">
            <div style={{ flex: "1 1 45%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    From the beginning QGISRed has been accompanied by a User Manual, in Spanish and English, which we update with each new version. The manual is written in Word and distributed in PDF format. In the future we will migrate it to a collaborative web environment.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Unlike the tutorials, the manual contains all the information about the application's features, in a concise and rigorous manner, and above all, in an orderly fashion. At the end you will find a short tutorial to run the Red1_SI.inp file, as well as the steps to build it from scratch.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    To download the User Manual in English, click the following button.
                  </p>
                </>
              ) : (
                <>
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
                </>
              )}

              <div className="flex gap-4 flex-wrap">
                <a
                  href={MANUAL_ES}
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
                  {isEn ? "Manual in Spanish" : "Manual en Español"}
                </a>
                <a
                  href={MANUAL_EN}
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
                  {isEn ? "Manual in English" : "Manual en Inglés"}
                </a>
              </div>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 52%" }}>
              <Image
                src={isEn ? "/images/utilizacion-manual-en.png" : "/images/utilizacion-manual-es.png"}
                alt={isEn ? "QGISRed User's Manual on GitBook" : "Manual de usuario de QGISRed en GitBook"}
                width={1160}
                height={805}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tutoriales */}
      <section id="tutoriales" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Tutorials" : "Tutoriales"} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>

      {/* Vídeos Formativos */}
      <section id="videosformativos" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Training Videos" : "Vídeos formativos"} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>

      {/* Repositorio de Ejemplos */}
      <section id="repositorioejemplos" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Examples Repository" : "Repositorio de ejemplos"} />

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
                      width={ejemplo.imageWidth}
                      height={ejemplo.imageHeight}
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
                    {isEn ? ejemplo.descriptionEn : ejemplo.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Datos */}
      <section id="modelodatos" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={isEn ? "Data Model" : "Modelo de datos"} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>
    </main>
  );
}
