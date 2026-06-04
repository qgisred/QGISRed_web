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

interface PublicationItemProps {
  children: React.ReactNode;
}

function PublicationItem({ children }: PublicationItemProps) {
  return (
    <li
      className="pb-4 mb-4"
      style={{
        borderBottom: "1px solid rgb(230,230,230)",
        fontSize: "14px",
        color: "rgb(51, 51, 51)",
        lineHeight: "1.7",
      }}
    >
      {children}
    </li>
  );
}

const articulos = [
  {
    authors: "Martínez Alzamora, F., Conejos, P., Castro-Gama, M., Vertommen. I. (2021).",
    title: "Digital Twins. A new paradigm for Water Supply and Distribution Networks",
    journal: "Hydrolink IAHR, nº 2, 2021, pp 48-54",
    url: "https://www.iahr.org/library/infor?pid=10798",
  },
  {
    authors: "Vegas Niño, O.T., Martínez Alzamora, F., Tzatchkov, V.G. (2021).",
    title: "A Decision Support Tool for Water Supply System Decentralization via Distribution Network Sectorization",
    journal: "Processes MDPI 2021, Vol 9, Issue 4",
    url: "https://doi.org/10.3390/pr9040642",
  },
  {
    authors: "Martínez Alzamora, F., Lerma, N., Vegas, O.T. (2020).",
    title: "Hydraulic model calibration for WDNs using pressure flow data during the COVID lockdown",
    journal: "Urban Water Journal, 2020",
    url: "https://doi.org/10.1080/1573062X.2020.1771382",
  },
  {
    authors: "Martínez, F. (2018).",
    title: "EPANET 2.0 en Español – Manual del Usuario",
    journal: "IMTA Mexico, 2018",
    url: "https://www.researchgate.net/publication/330530679",
  },
];

const comunicaciones = [
  {
    authors: "Martínez Alzamora, F., Lerma, N., Vegas, O.T. (2021).",
    title: "QGISRed, un plugin libre y profesional sobre QGIS para gestionar modelos avanzados de redes de distribución de agua",
    journal: "SIGTE Jornada GIS libre. Universidad de Gerona. Congreso on-line",
    url: "http://diobma.udg.edu/handle/10256.1/6227",
  },
  {
    authors: "Martínez Alzamora, F., Lerma, N., Bartolin, H., Vegas Niño, O.T. (2019).",
    title: "Upgrade of the GISRed application for the free analysis of WDN under GIS environment",
    journal: "17th Int. Conf CCWI 2019. Exeter (UK)",
    url: "#",
  },
];

const noticias = [
  {
    title: "iAgua – QGISRed en el Congreso WDSA-CCWI 2022",
    description: "Artículo sobre la presentación de QGISRed en el congreso internacional WDSA-CCWI 2022 celebrado en Valencia.",
    imageSrc: "/images/difusion-iagua.jpg",
    url: "https://www.iagua.es",
  },
  {
    title: "UdG – SIGTE Jornada GIS libre",
    description: "Comunicación presentada en las Jornadas GIS libre de la Universidad de Girona sobre QGISRed.",
    imageSrc: "/images/difusion-udg.jpg",
    url: "http://diobma.udg.edu/handle/10256.1/6227",
  },
];

export function DifusionPageContent() {
  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
            En esta sección se recogen aquellas actividades destinadas a dar difusión de la aplicación QGISRed,
            destacando los{" "}
            <a href="/difusion/#cursos" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
              Cursos de Formación
            </a>
            , cuya programación se irá anunciando oportunamente. Además, se incluyen también enlaces a algunas{" "}
            <a href="/difusion/#publicaciones" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
              Publicaciones
            </a>{" "}
            del grupo REDHISP del IIAMA relacionadas con la aplicación, así como las{" "}
            <a href="/difusion/#noticias" style={{ color: "rgb(95, 189, 211)", textDecoration: "none", fontWeight: "600" }}>
              Noticias y Redes Sociales
            </a>{" "}
            donde ha aparecido QGISRed.
          </p>
        </div>
      </section>

      {/* Cursos de Formación */}
      <section id="cursos" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Cursos de formación" />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                El primer curso de formación sobre QGISRed se va a impartir en la Universidad Politécnica de Valencia,
                el próximo 18 de julio, con motivo de la celebración del{" "}
                <strong>2º Congreso conjunto WDSA-CCWI 2022</strong>, que reúne a profesionales e investigadores de
                todo el mundo en el ámbito del agua urbana, contando con la colaboración de la Dra. Paloma Batanero
                Akerman.
              </p>

              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En el siguiente botón se puede acceder a un breve resumen de sus contenidos.
              </p>

              <a
                href="https://wdsa-ccwi2022.upv.es/managing-advanced-hydraulic-models-with-qgisred-plugin-from-epanet-to-digital-twins/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-semibold uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 mb-8"
                style={{
                  background: "linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)",
                  fontSize: "13px",
                  letterSpacing: "0.08em",
                  padding: "12px 32px",
                  textDecoration: "none",
                }}
              >
                Ver contenidos del curso
              </a>

              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                En el futuro, en esta sección se irán anunciando nuevas ediciones de este curso básico, así como el{" "}
                <strong>Catálogo de Cursos</strong> que estamos preparando, para cubrir desde el aprendizaje de los
                principios básicos de la hidráulica urbana, a la confección de modelos y la gestión de escenarios para
                Planes Directores, hasta la migración a los Gemelos Digitales en conexión con los datos reales,
                utilizando siempre como base la plataforma QGISRed.
              </p>

              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                Serán fundamentalmente cursos on-line con asistencia tutorizada. Además, cabe la posibilidad de
                impartir cursos presenciales a petición de cualquier institución o empresa.
              </p>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 40%" }}>
              <Image
                src="/images/difusion-curso.png"
                alt="Curso Managing Advanced Hydraulic Models with QGISRed"
                width={800}
                height={500}
                className="w-full h-auto shadow-md"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Publicaciones */}
      <section id="publicaciones" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Publicaciones" />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            En esta sección se reflejan algunas de las publicaciones más relevantes que, junto con el desarrollo de
            numerosos contratos, nos han permitido adquirir gran experiencia en la modelación de redes de distribución
            de agua, la cual poco a poco vamos trasladando a la aplicación QGISRed.
          </p>

          <div className="mb-8">
            <h3 className="font-semibold mb-4" style={{ fontSize: "20px", color: "rgb(0, 9, 25)" }}>
              Artículos y libros
            </h3>
            <ul className="list-none p-0 m-0">
              {articulos.map((pub, i) => (
                <PublicationItem key={i}>
                  <span>{pub.authors} </span>
                  <em>{pub.title}</em>
                  <span>. {pub.journal}. </span>
                  <a
                    href={pub.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                  >
                    {pub.url}
                  </a>
                </PublicationItem>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4" style={{ fontSize: "20px", color: "rgb(0, 9, 25)" }}>
              Comunicaciones a Congresos
            </h3>
            <ul className="list-none p-0 m-0">
              {comunicaciones.map((pub, i) => (
                <PublicationItem key={i}>
                  <span>{pub.authors} </span>
                  <em>{pub.title}</em>
                  <span>. {pub.journal}. </span>
                  {pub.url !== "#" && (
                    <a
                      href={pub.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      {pub.url}
                    </a>
                  )}
                </PublicationItem>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Noticias y Redes Sociales */}
      <section id="noticias" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title="Noticias y Redes Sociales" />

          <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
            A continuación, se adjuntan enlaces a noticias y podcast aparecidos en los medios y redes sociales, en la
            relación con la repercusión que la aplicación QGISRed está teniendo en el mundo de la gestión del agua y
            la formación de nuevos profesionales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {noticias.map((noticia, i) => (
              <a
                key={i}
                href={noticia.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block transition-shadow duration-200 hover:shadow-lg"
                style={{ textDecoration: "none", backgroundColor: "rgb(255,255,255)", border: "1px solid rgb(230,230,230)" }}
              >
                <Image
                  src={noticia.imageSrc}
                  alt={noticia.title}
                  width={800}
                  height={400}
                  className="w-full h-[200px] object-cover"
                />
                <div className="p-5">
                  <h3
                    className="font-semibold mb-2"
                    style={{ fontSize: "16px", color: "rgb(0, 9, 25)", lineHeight: "1.4" }}
                  >
                    {noticia.title}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.6" }}>
                    {noticia.description}
                  </p>
                </div>
              </a>
            ))}
          </div>

          <div
            className="p-6"
            style={{ backgroundColor: "rgb(255,255,255)", border: "1px solid rgb(230,230,230)" }}
          >
            <p style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
              Síguenos en nuestras redes sociales para estar al día de todas las novedades del proyecto QGISRed.
              También puedes suscribirte a nuestra{" "}
              <a href="/contacto/" style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}>
                Newsletter
              </a>{" "}
              desde la página de Contacto.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
