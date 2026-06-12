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
        style={{ fontSize: "36px", color: "rgb(0, 9, 25)", lineHeight: "1.2" }}
      >
        {title}
      </h2>
    </div>
  );
}

const serviciosEmpresas = [
  "Confeccionar y calibrar un modelo hidráulico que reproduzca fielmente el comportamiento de la red, a partir de la información cartográfica, datos de consumos y medidas de campo",
  "Calibrar un modelo de calidad del agua para el análisis de diversas estrategias de operación, a fin de controlar los parámetros de calidad establecidos por la normativa",
  "Planificar mejoras en la red para un futuro próximo, conforme a los objetivos propuestos en los planes directores, incluida la sectorización",
  "Proponer estrategias de operación para el ahorro energético, u con cualquier otro objetivo",
  "Analizar la integración de las energías renovables en el transporte y distribución del agua a través de la red",
  "Confeccionar un Gemelo Digital de la red, contemplando todos los elementos inventariados en el GIS",
  "Obtener modelos ajustados a la realidad para cualquier fecha por consulta a las bases de datos corporativas de la empresa",
  "Conectar el modelo de QGISRed con las bases de datos de la empresa para mantener el Gemelo siempre vivo, y trabajando en tiempo real",
  "Utilizar el Gemelo para la detección y localización de fugas, o la detección de cualquier funcionamiento anómalo de la red",
  "Obtener modelos simplificados a partir del Gemelo para su uso en procesos de optimización",
  "Utilizar el Gemelo para realizar balances en tiempo real, o mantener un sistema de indicadores siempre actualizado",
  "Integrar la algoritmia del núcleo de QGISRed en la plataforma de gestión de los datos de la Empresa, para darle un valor añadido a la información simplemente almacenada",
  "Otros servicios o desarrollos a propuesta de la Empresa, en la línea de las actuaciones anteriores",
];

const serviciosEmpresasEn = [
  "Build and calibrate a hydraulic model that faithfully reproduces the behaviour of the network, based on cartographic information, consumption data and field measurements",
  "Calibrate a water quality model for the analysis of various operational strategies, in order to control the quality parameters established by regulations",
  "Plan network improvements for the near future, in line with the objectives proposed in the master plans, including sectorisation",
  "Propose operating strategies for energy savings, or for any other objective",
  "Analyse the integration of renewable energies in the transport and distribution of water through the network",
  "Build a Digital Twin of the network, covering all the elements inventoried in the GIS",
  "Obtain models adjusted to reality for any date by querying the company's corporate databases",
  "Connect the QGISRed model with the company's databases to keep the Twin always alive and working in real time",
  "Use the Twin for the detection and location of leaks, or the detection of any anomalous operation of the network",
  "Obtain simplified models from the Twin for use in optimisation processes",
  "Use the Twin to carry out real-time balances, or to maintain an always up-to-date system of indicators",
  "Integrate the QGISRed core algorithms into the Company's data management platform, to add value to the information that is simply stored",
  "Other services or developments proposed by the Company, in line with the above activities",
];

export function SoportePageContent({ locale = "es" }: { locale?: string }) {
  const isEn = locale === "en";
  const servicios = isEn ? serviciosEmpresasEn : serviciosEmpresas;

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                The objective of this section is to provide support to any QGISRed user. Although the application is free, it is not neglected. You will find here <strong>several levels of help</strong> to feel supported in your first steps, and also when you are already a professional in using the application.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                First of all, we remind you that there is a portal to report any{" "}
                <a
                  href="#incidencias"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  issue
                </a>
                {" "}observed in the use of QGISRed. Although you have to register first, it is a public portal linked to the development platform on GitHub.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                But if you want more continuous and personalised attention, you can subscribe to the{" "}
                <a
                  href="#soportetecnico"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Technical Support Service
                </a>
                {" "}to get a more immediate response to your problems.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Attention to your needs can go even further, offering a{" "}
                <a
                  href="#empresas"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Direct Assistance Service to Companies
                </a>
                {" "}under contract. Check the corresponding section, and you will get an idea of the many ways in which we can collaborate, so that you get the most out of QGISRed and make it your preferred modelling tool.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finally, our university spirit leads us to propose our preferred form of collaboration, which is through participation in{" "}
                <a
                  href="#participacion"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Research and Development Projects
                </a>
                , always seeking to advance towards increasingly demanding goals.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Come in and you will learn about all these proposals in more detail.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                El objetivo de esta sección es dar soporte a cualquier usuario de QGISRed. Aunque la aplicación es libre,
                no por ello está desatendida. Encontrarás aquí <strong>varios niveles de ayuda</strong> para sentirte apoyado en tus
                primeros pasos, y también cuando seas ya un profesional en el uso de la aplicación.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En primer lugar, te recordamos que existe un portal para reportar cualquier{" "}
                <a
                  href="#incidencias"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  incidencia
                </a>
                {" "}observada en el uso de QGISRed. Aunque tienes que registrarte previamente, se trata de un portal público vinculado a la
                plataforma de desarrollo en GitHub.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Pero si quieres una atención más continua y personalizada, puedes suscribirte al{" "}
                <a
                  href="#soportetecnico"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Servicio de Soporte Técnico
                </a>
                {" "}para tener una respuesta más inmediata a tus problemas.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                La atención a tus necesidades puede ir aún más lejos, ofreciendo un{" "}
                <a
                  href="#empresas"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Servicio de Asistencia directo a las Empresas
                </a>
                {" "}bajo contrato. Revisa la sección correspondiente, y te harás una idea de las múltiples formas en que podemos colaborar,
                para que saques el mayor provecho de QGISRed y la conviertas en tu herramienta de modelación preferida.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finalmente, nuestro espíritu universitario nos lleva a proponerte la forma preferida de colaboración por nuestra parte,
                y es mediante la participación en{" "}
                <a
                  href="#participacion"
                  style={{ color: "rgb(95, 189, 211)", fontWeight: "bold" }}
                >
                  Proyectos de Investigación y Desarrollo
                </a>
                , buscando siempre avanzar para conseguir metas cada vez más exigentes.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Entra y conocerás todas estas propuestas con más detalle.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Incidencias / Issues */}
      <section id="incidencias" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title={isEn ? "Issues" : "Incidencias"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    In the Presentation section we already told you that part of QGISRed's code is public and hosted on the GitHub portal{" "}
                    <a
                      href="https://github.com/qgisred/QGISRed/issues"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: "rgb(95, 189, 211)", textDecoration: "none", wordBreak: "break-all" }}
                    >
                      https://github.com/qgisred/QGISRed/issues
                    </a>
                    . There, the existence of the <strong>Issues</strong> tab was also mentioned, reserved for users to report any incident observed in the use of the application, although in practice some users are also using this section to make suggestions to us. In the future you will also be able to make suggestions through this website, and the GitHub portal will be reserved for reporting only incidents and bugs found in the use of the application.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Below, the QGISRed page on GitHub is shown again, now open on the <em>Issues</em> tab. Note that the information is divided into two parts, one relating to still <em>Open</em> topics, and another to already <em>Closed</em> topics. If you click on any of them you can follow the thread of the conversation. In some cases very interesting information is contributed as a result of the topic raised, especially in our responses.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Each <em>Issue</em> has a title and number preceded by a hashtag, and for each one you can also see the date it was created and closed, the users who have participated, and a colour label that qualifies the type of incident — whether it was a bug or a suggestion, whether it has been resolved, whether it remains for the future, etc. All of this can be used to classify incidents using the buttons on the right, as column headers.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    To follow the thread of the conversation you just need to enter it and add new messages at the end. You can also create a new issue by clicking the green <em>New Issue</em> button, located at the top right. But to participate actively, you must first register on the <em>GitHub</em> project by clicking the <em>Sign up</em> button at the top right of the window and filling in the requested data.
                  </p>
                </>
              ) : (
                <>
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
                    . Allí se comentó también la existencia de la pestaña <strong>Issues</strong> reservada para que los usuarios puedan
                    notificar cualquier incidencia observada en el uso de la aplicación, aunque en la práctica algunos usuarios están
                    utilizando también esta sección para hacernos sugerencias. En el futuro podrás hacer las sugerencias también a través
                    de esta página web, y el portal de GitHub quedará reservado para reportar solo las incidencias y fallos encontrados
                    en el uso de la aplicación.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    A continuación, se muestra de nuevo la página de QGISRed en GitHub, abierta ahora por la pestaña{" "}
                    <em>Issues</em>. Observa que la información se divide en dos partes, una relativa a los temas aún{" "}
                    <em>Abiertos</em>, y otra a los temas ya <em>Cerrados</em>. Si entras en cualquiera de ellos podrás seguir
                    el hilo de la conversación. En algunos casos se aporta información muy interesante a raíz del tema planteado,
                    sobre todo en nuestras respuestas.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Cada <em>Issue</em> tiene un título y número precedido de un hashtag, y por cada uno puedes ver también la fecha
                    en que se originó y cerró, los usuarios que han participado, y una etiqueta de color que califica el
                    tipo de incidencia, si era un fallo o una sugerencia, si ha sido resuelta, si queda para el futuro, etc.
                    Todo ello se puede utilizar para clasificar las incidencias desde los botones que figuran a la derecha, a modo
                    de cabeceras.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Para seguir el hilo de la conversación solo tienes que entrar en ella y añadir nuevos mensajes al
                    final. También puedes crear una nueva incidencia pulsando en el botón en verde <em>New Issue</em>,
                    situado arriba a la derecha. Pero para participar activamente, tienes que registrarte antes en el proyecto de{" "}
                    <em>GitHub</em>, pulsando en el botón <em>Sign up</em> de la parte superior derecha de la ventana, y
                    cumplimentar los datos solicitados.
                  </p>
                </>
              )}

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
                {isEn ? "View issues on GitHub" : "Ver incidencias en GitHub"}
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

      {/* Soporte Técnico / Technical Support */}
      <section id="soportetecnico" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title={isEn ? "Technical Support" : "Soporte técnico"} />

          {isEn ? (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                One of the things that free-to-use applications are usually criticised for is the lack of direct user assistance, compared to the advantage of not having to pay for licences. Although there is the option of using the{" "}
                <a href="#incidencias" style={{ color: "rgb(95, 189, 211)" }}>issues</a>
                {" "}portal, or the user forum, there is no guarantee of a quick and effective response.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                However, we can provide a personalised Technical Support service, with priority response, in exchange for an{" "}
                <strong>annual subscription </strong>that is yet to be finalised. The option of guaranteeing a response to any failure in a short time can encourage any company to adopt QGISRed as its reference product when developing and maintaining network models. If this is your case,{" "}
                <strong>
                  you can contact us through the{" "}
                  <Link href="/contacto" style={{ color: "inherit" }}>Contact</Link>
                  {" "}section
                </strong>
                , to establish the conditions of assistance, which would always be done remotely, either by email, video conference or remote access.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                This support would also include guidance on the best way to approach a specific problem, but not the analysis of client data, nor technical help to build the network model, nor the development of specific capabilities requested by clients. These options are also possible and are detailed in the next section, but are subject to our response capacity at any given time.
              </p>
            </>
          ) : (
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Una de las cosas que se les suele criticar a las aplicaciones de uso libre, es la falta de una ayuda
                directa al usuario, frente a la ventaja de no tener que pagar licencias. Aunque está la opción de utilizar
                el portal de{" "}
                <a href="#incidencias" style={{ color: "rgb(95, 189, 211)" }}>incidencias</a>
                , o el foro de usuarios, no hay garantía de una respuesta rápida y efectiva.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Sin embargo, podemos prestar un servicio de Soporte Técnico personalizado, con respuesta prioritaria, a cambio de una{" "}
                <strong>suscripción anual </strong>que aún está por concretar. La opción de garantizar una respuesta ante cualquier
                fallo en un tiempo reducido puede animar a cualquier empresa a adoptar QGISRed como su producto de referencia a la hora
                de desarrollar y mantener los modelos de las redes. Si este fuera tu caso,{" "}
                <strong>
                  puedes ponerte en contacto con nosotros a través de la sección{" "}
                  <Link href="/contacto" style={{ color: "inherit" }}>Contacto</Link>
                </strong>
                , para establecer las condiciones de la asistencia, la cual se haría siempre a distancia, bien por correo,
                por videoconferencia o por acceso remoto.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Este soporte incluiría también la orientación sobre el mejor modo de abordar un problema determinado, pero
                no el análisis de los datos del cliente, ni la ayuda técnica para confeccionar el modelo de la red, ni
                tampoco el desarrollo de capacidades específicas solicitadas por los clientes. Estas opciones son también
                posibles y se detallan en la sección siguiente, pero quedan supeditadas a nuestra capacidad de respuesta
                en cada momento.
              </p>
            </>
          )}

          <Link
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
            {isEn ? "Request technical support" : "Solicitar soporte técnico"}
          </Link>
        </div>
      </section>

      {/* Servicios a Empresas / Business Services */}
      <section id="empresas" className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title={isEn ? "Business Services" : "Servicios a empresas"} />

          <div className="flex flex-col md:flex-row gap-[60px] items-start">
            <div style={{ flex: "1 1 55%" }}>
              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Professor Fernando Martínez, the person responsible for and director of the QGISRed application, has more than{" "}
                    <strong>40 years of experience in building models</strong> of water supply and irrigation networks for many real installations. Some as complex as the Water Supply System for Valencia and its metropolitan area, which supplies 1.5 million inhabitants, and whose Digital Twin is currently a world reference.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    All this experience is being used to create the core of the QGISRed application and give each of its capabilities the greatest possible practical meaning.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    But, although QGISRed is free, and will surely be used by many engineering firms to offer modelling services to other companies, direct contact with the application's authors is always a guarantee of success.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    IIAMA can offer a <strong>wide variety of services to the managing companies</strong> of drinking water supplies.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    Expand to see some of the business services:
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    El Profesor Fernando Martínez, responsable y director de la aplicación QGISRed, tiene más de{" "}
                    <strong>40 años de experiencia en la confección de modelos</strong> de redes de abastecimiento y de riego
                    para muchas instalaciones reales. Algunas tan complejas como el Sistema de Abastecimiento a Valencia y su
                    área metropolitana, que abastece a 1,5 millones de habitantes, y cuyo Gemelo Digital es actualmente un
                    referente mundial.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Toda esta experiencia está sirviendo para crear el núcleo de la aplicación QGISRed y darle a cada una de
                    sus capacidades el mayor sentido práctico posible.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Pero, aunque QGISRed es libre, y seguramente sea utilizado por muchas ingenierías para ofrecer servicios
                    de modelación a otras empresas, el contacto directo con los autores de la aplicación es siempre una
                    garantía de éxito.
                  </p>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    El IIAMA puede ofrecer una <strong>amplia variedad de servicios a las empresas gestoras</strong> de los
                    suministros de agua potable.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    Despliega para ver algunos de los servicios a empresas:
                  </p>
                </>
              )}

              <ul className="flex flex-col gap-3 mb-8 list-none p-0">
                {servicios.map((servicio) => (
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

              {isEn ? (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    The hiring of these services will always depend on the group's capacity to take on the proposed challenges, whose main objective for now is to complete the capabilities and features of QGISRed, and increase its robustness and reach.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Another way for our team to collaborate with the business environment is by providing{" "}
                    <strong>technical assistance under contract</strong> in the use of QGISRed,{" "}
                    <strong>to consulting companies,</strong> which in turn offer their engineering services to other water management companies or directly to end users.
                  </p>
                </>
              ) : (
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    La contratación de estos servicios dependerá siempre de la capacidad del grupo para abordar los retos
                    propuestos, cuyo principal objetivo es por ahora completar las capacidades y prestaciones de QGISRed,
                    y aumentar su robustez y alcance.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Otra forma de colaborar nuestro equipo con el entorno empresarial es prestando{" "}
                    <strong>asistencia técnica bajo contrato</strong> en el uso de QGISRed,{" "}
                    <strong>a las empresas consultoras,</strong> que a su vez ofrecen sus servicios de ingeniería a otras
                    empresas gestoras del agua o bien directamente a los usuarios finales.
                  </p>
                </>
              )}

              <Link
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
                {isEn ? "Request information" : "Solicitar información"}
              </Link>
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

      {/* Participación en Proyectos / Participation in Projects */}
      <section id="participacion" className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 60px" }}>
          <SectionHeading title={isEn ? "Participation in Projects" : "Participación en Proyectos"} />

          {isEn ? (
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Public or private projects are a way to tackle new challenges, counting on the collaboration of experts in various complementary areas.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                In this regard, IIAMA as a University, and the consultancy WaterPi as a private partner, can{" "}
                <strong>participate as partners or as subcontractors, in any project of local, national or European scope,</strong>{" "}
                contributing expertise in the modelling of distribution networks, on the one hand, and on the other the possibility of translating the project results into an already operational and free-to-use platform, which would immediately make the project results available to users.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Furthermore, in a research project the hydraulic model does not normally constitute the end in itself, but the means to achieve the intended results: minimising energy consumption, reducing losses, facilitating leak detection, managing demand, detecting the entry of a contaminant in advance, planning investments, recovering 24-hour continuous supply, etc. In this regard, IIAMA can equally contribute its know-how in all these matters, as demonstrated through the numerous{" "}
                <Link href={{ pathname: "/difusion", hash: "#publicaciones" }} style={{ color: "rgb(95, 189, 211)" }}>publications</Link>{" "}
                on these topics.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finally, QGISRed, due to its public nature and its link to a University, can also serve as a{" "}
                <strong>testing platform </strong>for testing various alternatives to solving any given problem, giving open participation to all proposals. For example, to test algorithms that compete to anticipate the detection of an event or a leak, to optimise system operating costs, to maximise network resilience at minimum cost, etc., using common databases and a{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#modelodatos" }} style={{ color: "rgb(95, 189, 211)" }}>data model</Link>{" "}
                that is public and compatible with other applications, which covers all the elements that make up real networks. To this end, QGISRed's libraries could also be made public one day, if necessary.
              </p>
            </>
          ) : (
            <>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Los proyectos públicos o privados son una forma de abordar nuevos retos, contando con la colaboración de
                expertos en diversas áreas complementarias entre sí.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En este sentido, el IIAMA como Universidad, y la consultora WaterPi como socio privado, pueden{" "}
                <strong>participar como socios o como subcontratados, en cualquier proyecto de ámbito local, nacional o europeo,</strong>{" "}
                aportando la experiencia en la modelación de redes distribución, por un lado, y por otro la posibilidad de
                plasmar los resultados del proyecto en una plataforma ya operativa y de uso libre, que pondría de inmediato
                al alcance de los usuarios los resultados del proyecto.
              </p>
              <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Además, en un proyecto de investigación el modelo hidráulico no constituye normalmente el fin, sino el medio
                para conseguir los resultados pretendidos: minimizar el consumo energético, reducir pérdidas, facilitar la
                detección de fugas, gestionar la demanda, detectar anticipadamente la entrada de un contaminante, planificar
                inversiones, recuperar el suministro permanente 24 h, etc. En este sentido, el IIAMA puede aportar igualmente
                su know-how en todas estas cuestiones, puesto de manifiesto a través de las numerosas{" "}
                <Link href={{ pathname: "/difusion", hash: "#publicaciones" }} style={{ color: "rgb(95, 189, 211)" }}>publicaciones</Link>{" "}
                sobre dichos temas.
              </p>
              <p className="mb-8" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finalmente, QGISRed, por su carácter público y vinculado a una Universidad, puede servir también de{" "}
                <strong>plataforma de ensayos </strong>para testar diversas alternativas a la solución de cualquier problema
                planteado, dando participación abierta a todas las propuestas. Por ejemplo, para testar algoritmos que compitan
                por anticiparse a la detección de un evento o de una fuga, por optimizar los costes de operación del sistema,
                por maximizar la resiliencia de la red al mínimo coste, etc. utilizando para ello bases de datos comunes, y un{" "}
                <Link href={{ pathname: "/utilizacion", hash: "#modelodatos" }} style={{ color: "rgb(95, 189, 211)" }}>modelo de datos</Link>{" "}
                que es público y compatible con otras aplicaciones, el cual alcanza a contemplar todos los elementos que
                configuran las redes reales. A tal fin, las librerías de QGISRed podrían hacerse también públicas algún día,
                si fuera necesario.
              </p>
            </>
          )}

          <Link
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
            {isEn ? "Propose collaboration" : "Proponer colaboración"}
          </Link>
        </div>
      </section>
    </main>
  );
}
