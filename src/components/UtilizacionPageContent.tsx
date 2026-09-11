import Image from "@/components/AppImage";
import { anchorHash, anchorId } from "@/i18n/anchors";
import { localize } from "@/i18n/localize";

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

interface Ejemplo {
  name: string;
  nameEn: string;
  nameFr?: string;
  namePt?: string;
  description: string;
  descriptionEn: string;
  descriptionFr?: string;
  descriptionPt?: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}

const ejemplos: Ejemplo[] = [
  {
    name: "Red1_SI.inp (Unidades SI)",
    nameEn: "Red1_SI.inp (SI Units)",
    nameFr: "Red1_SI.inp (Unités SI)",
    namePt: "Red1_SI.inp (Unidades SI)",
    description: "Se trata de un ejemplo sencillo para mostrar el decaimiento del cloro. Incluye coeficientes de reacción en el medio y en las paredes. Todas las unidades están expresadas en el Sistema Internacional. Incorpora además una válvula de regulación que puede configurarse de diferentes modos cambiando su tipo y consigna.",
    descriptionEn: "This is a simple example to show chlorine decay. It includes reaction coefficients in the bulk and at the wall. All units are expressed in the International System. It also incorporates a regulation valve that can be configured in different ways by changing its type and set point.",
    descriptionFr: "Il s'agit d'un exemple simple pour illustrer la décroissance du chlore. Il inclut des coefficients de réaction dans le volume et aux parois. Toutes les unités sont exprimées dans le Système International. Il intègre également une vanne de régulation qui peut être configurée de différentes manières en changeant son type et sa consigne.",
    descriptionPt: "Trata-se de um exemplo simples para mostrar o decaimento do cloro. Inclui coeficientes de reação no meio e nas paredes. Todas as unidades estão expressas no Sistema Internacional. Incorpora também uma válvula de regulação que pode ser configurada de diferentes modos alterando seu tipo e ponto de ajuste.",
    imageSrc: "/images/utilizacion-red1.jpg",
    imageWidth: 100,
    imageHeight: 126,
  },
];

export function UtilizacionPageContent({ locale = "es" }: { locale?: string }) {
  const comingSoonText = localize(locale, "Próximamente", "Coming soon", "Prochainement", "Em breve");

  return (
    <main>
      {/* Intro */}
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          {localize(locale,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Probablemente sea esta la sección más importante de toda la página, pues te enseñará cómo utilizar y sacar
                provecho de QGISRed. Pero la estamos construyendo poco a poco, así que en el futuro tendrá bastante más
                contenido. Por ahora la mayor fuente de información es el Manual, que tienes al final de esta sección.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En una primera parte se ofrecerán aquí un conjunto de{" "}
                <a href={anchorHash("tutoriales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutoriales</strong></a>
                {" "}para que puedas seguir con calma todos los pasos necesarios para alcanzar el objetivo marcado en cada uno de ellos. Serán documentos en PDF que puedes descargar y manejar a tu gusto. Sin embargo, los tutoriales más avanzados los reservaremos para su desarrollo en los cursos que ofrecemos <span style={{ fontStyle: "italic" }}>(enlace a cursos).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                La sección de{" "}
                <a href={anchorHash("videosformativos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Vídeos </strong></a>
                seguirá el mismo esquema que los tutoriales, y normalmente estarán basados en ellos, aunque por limitación de tiempo es probable que se omitan algunas prestaciones, así que si quieres tener una información más completa y detallada se recomienda acudir a los tutoriales. Para darle una mayor difusión a los vídeos, hemos decidido distribuirlos a través de Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                También aprovecharemos esta sección para colgar los{" "}
                <a href={anchorHash("repositorioejemplos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Ejemplos</strong></a>
                {" "}utilizados en los tutoriales o en los vídeos, de modo que te resulte fácil acceder a ellos.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                En otro apartado está previsto publicar el{" "}
                <a href={anchorHash("modelodatos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Modelo de Datos</strong></a>
                {" "}utilizado por QGISRed para alojar toda la información que configura un proyecto, así como la estructura de los diferentes ficheros auxiliares utilizados por QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Para una información más completa de todo lo que hay desarrollado hasta ahora puedes recurrir al{" "}
                <a href={anchorHash("manualusuario", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manual</strong></a>
                {" "}de la aplicación en PDF, que encontrarás en la sección siguiente. El manual siempre ha estado disponible en español y en inglés, y lo vamos actualizando cada vez que sacamos una nueva versión. En el futuro esperamos poner esta información en red, ampliarla y compartir sus contenidos.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finalmente habrá en esta sección también un apartado reservado para las preguntas más frecuentes, y otro
                para gestionar un foro de usuarios, los cuales están por ahora deshabilitados.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                This is probably the most important section of the entire website, as it will show you how to use and get the most out of QGISRed. But we are building it little by little, so in the future it will have considerably more content. For now the main source of information is the Manual, which you will find at the end of this section.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                In the first part, a set of{" "}
                <a href={anchorHash("tutoriales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutorials</strong></a>
                {" "}will be offered here so that you can calmly follow all the steps needed to achieve the goal set in each one of them. They will be PDF documents that you can download and use at your leisure. However, the more advanced tutorials will be reserved for development in the courses we offer <span style={{ fontStyle: "italic" }}>(link to courses).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                The{" "}
                <a href={anchorHash("videosformativos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Videos </strong></a>
                section will follow the same scheme as the tutorials, and will normally be based on them, although due to time constraints it is likely that some features will be omitted, so if you want more complete and detailed information it is recommended to refer to the tutorials. To give the videos a wider reach, we have decided to distribute them through Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                We will also use this section to post the{" "}
                <a href={anchorHash("repositorioejemplos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Examples</strong></a>
                {" "}used in the tutorials or in the videos, so that you can easily access them.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                In another section, the{" "}
                <a href={anchorHash("modelodatos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Data Model</strong></a>
                {" "}used by QGISRed to store all the information that configures a project is planned to be published, as well as the structure of the different auxiliary files used by QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                For more complete information on everything developed so far you can refer to the application{" "}
                <a href={anchorHash("manualusuario", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manual</strong></a>
                {" "}in PDF, which you will find in the following section. The manual has always been available in Spanish and English, and we update it every time we release a new version. In the future we hope to put this information online, expand it and share its contents.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Finally, this section will also include a section reserved for frequently asked questions, and another to manage a user forum, both of which are currently disabled.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                C&apos;est probablement la section la plus importante de tout le site, car elle vous apprendra à utiliser QGISRed et à en tirer parti. Mais nous la construisons petit à petit, elle disposera donc de bien plus de contenu à l&apos;avenir. Pour l&apos;instant, la principale source d&apos;information est le Manuel, que vous trouverez à la fin de cette section.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Dans un premier temps, un ensemble de{" "}
                <a href={anchorHash("tutoriales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutoriels</strong></a>
                {" "}sera proposé ici afin que vous puissiez suivre calmement toutes les étapes nécessaires pour atteindre l&apos;objectif fixé dans chacun d&apos;eux. Il s&apos;agira de documents PDF que vous pourrez télécharger et utiliser à votre convenance. Cependant, les tutoriels les plus avancés seront réservés au développement des cours que nous proposons <span style={{ fontStyle: "italic" }}>(lien vers les cours).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                La section{" "}
                <a href={anchorHash("videosformativos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Vidéos </strong></a>
                suivra le même schéma que les tutoriels, et sera généralement basée sur ceux-ci, bien qu&apos;en raison de contraintes de temps il soit probable que certaines fonctionnalités soient omises. Si vous souhaitez une information plus complète et détaillée, il est donc recommandé de consulter les tutoriels. Pour donner une plus grande diffusion aux vidéos, nous avons décidé de les distribuer via Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Nous profiterons également de cette section pour publier les{" "}
                <a href={anchorHash("repositorioejemplos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Exemples</strong></a>
                {" "}utilisés dans les tutoriels ou dans les vidéos, afin que vous puissiez y accéder facilement.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Dans une autre section, il est prévu de publier le{" "}
                <a href={anchorHash("modelodatos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Modèle de Données</strong></a>
                {" "}utilisé par QGISRed pour héberger toutes les informations qui configurent un projet, ainsi que la structure des différents fichiers auxiliaires utilisés par QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Pour une information plus complète sur tout ce qui a été développé jusqu&apos;à présent, vous pouvez consulter le{" "}
                <a href={anchorHash("manualusuario", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manuel</strong></a>
                {" "}de l&apos;application en PDF, que vous trouverez dans la section suivante. Le manuel a toujours été disponible en espagnol et en anglais, et nous le mettons à jour à chaque nouvelle version. À l&apos;avenir, nous espérons mettre cette information en ligne, l&apos;enrichir et partager son contenu.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Enfin, cette section comportera également une rubrique réservée aux questions les plus fréquentes, ainsi qu&apos;une autre pour gérer un forum d&apos;utilisateurs, toutes deux actuellement désactivées.
              </p>
            </>,
            <>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Esta é provavelmente a seção mais importante de todo o site, pois vai ensinar você a usar e tirar proveito do QGISRed. Mas estamos construindo-a aos poucos, então no futuro ela terá bem mais conteúdo. Por enquanto, a maior fonte de informação é o Manual, que você encontra ao final desta seção.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Em uma primeira etapa, será oferecido aqui um conjunto de{" "}
                <a href={anchorHash("tutoriales", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Tutoriais</strong></a>
                {" "}para que você possa seguir com calma todos os passos necessários para alcançar o objetivo definido em cada um deles. Serão documentos em PDF que você poderá baixar e usar como quiser. No entanto, os tutoriais mais avançados serão reservados para os cursos que oferecemos <span style={{ fontStyle: "italic" }}>(link para os cursos).</span>
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                A seção de{" "}
                <a href={anchorHash("videosformativos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Vídeos </strong></a>
                seguirá o mesmo esquema dos tutoriais, e normalmente será baseada neles, embora por limitação de tempo seja provável que algumas funcionalidades sejam omitidas. Assim, se você quiser uma informação mais completa e detalhada, recomenda-se consultar os tutoriais. Para dar maior alcance aos vídeos, decidimos distribuí-los pelo Youtube.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Também aproveitaremos esta seção para publicar os{" "}
                <a href={anchorHash("repositorioejemplos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Exemplos</strong></a>
                {" "}usados nos tutoriais ou nos vídeos, para que seja fácil acessá-los.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Em outra seção, está prevista a publicação do{" "}
                <a href={anchorHash("modelodatos", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Modelo de Dados</strong></a>
                {" "}usado pelo QGISRed para armazenar todas as informações que configuram um projeto, assim como a estrutura dos diferentes arquivos auxiliares usados pelo QGISRed.
              </p>
              <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Para uma informação mais completa de tudo o que foi desenvolvido até agora, você pode recorrer ao{" "}
                <a href={anchorHash("manualusuario", locale)} style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}><strong>Manual</strong></a>
                {" "}do aplicativo em PDF, que você encontrará na seção seguinte. O manual sempre esteve disponível em espanhol e em inglês, e o vamos atualizando a cada nova versão. No futuro esperamos disponibilizar essa informação online, ampliá-la e compartilhar seu conteúdo.
              </p>
              <p style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7", maxWidth: "800px" }}>
                Por fim, esta seção também terá um espaço reservado para as perguntas mais frequentes, e outro para gerenciar um fórum de usuários, ambos desativados por enquanto.
              </p>
            </>
          )}
        </div>
      </section>

      {/* Manual del Usuario */}
      <section id={anchorId("manualusuario", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Manual del usuario", "User's Manual", "Manuel de l'utilisateur", "Manual do Usuário")} />

          <div className="flex flex-col md:flex-row gap-[40px] items-start">
            <div style={{ flex: "1 1 45%" }}>
              {localize(locale,
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
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    From the beginning QGISRed has been accompanied by a User Manual, in Spanish and English, which we update with each new version. The manual is written in Word and distributed in PDF format. In the future we will migrate it to a collaborative web environment.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Unlike the tutorials, the manual contains all the information about the application&apos;s features, in a concise and rigorous manner, and above all, in an orderly fashion. At the end you will find a short tutorial to run the Red1_SI.inp file, as well as the steps to build it from scratch.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    To download the User Manual in English, click the following button.
                  </p>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Dès le début, QGISRed a été accompagné d&apos;un Manuel de l&apos;Utilisateur, en espagnol et en anglais, que nous mettons à jour à chaque nouvelle version. Le manuel est rédigé sous Word et diffusé en PDF. À l&apos;avenir, nous le migrerons vers un environnement web collaboratif.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Contrairement aux tutoriels, le manuel reflète toutes les informations sur les fonctionnalités de l&apos;application, de manière concise et rigoureuse, et surtout, de façon ordonnée. Vous y trouverez à la fin un court tutoriel pour exécuter le fichier Red1_SI.inp, ainsi que les étapes pour le construire à partir de zéro.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    Pour télécharger le Manuel de l&apos;Utilisateur, cliquez sur le bouton correspondant ci-dessous.
                  </p>
                </>,
                <>
                  <p className="mb-4" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Desde o início, o QGISRed é acompanhado por um Manual do Usuário, em espanhol e inglês, que vamos atualizando a cada nova versão. O manual é escrito em Word e distribuído em PDF. No futuro o migraremos para um ambiente web colaborativo.
                  </p>
                  <p className="mb-6" style={{ fontSize: "15px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    Ao contrário dos tutoriais, o manual reúne todas as informações sobre as funcionalidades do aplicativo, de forma concisa e rigorosa, e sobretudo, de modo ordenado. Nele você encontrará ao final um pequeno tutorial para executar o arquivo Red1_SI.inp, assim como os passos para construí-lo do zero.
                  </p>
                  <p className="mb-4 font-medium" style={{ fontSize: "15px", color: "rgb(0, 9, 25)" }}>
                    Para baixar o Manual do Usuário em espanhol, clique no botão a seguir.
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
                  {localize(locale, "Manual en Español", "Manual in Spanish", "Manuel en espagnol", "Manual em Espanhol")}
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
                  {localize(locale, "Manual en Inglés", "Manual in English", "Manuel en anglais", "Manual em Inglês")}
                </a>
              </div>
            </div>

            <div className="hidden md:block" style={{ flex: "0 0 52%" }}>
              <Image
                src={localize(locale, "/images/utilizacion-manual-es.png", "/images/utilizacion-manual-en.png")}
                alt={localize(locale, "Manual de usuario de QGISRed en GitBook", "QGISRed User's Manual on GitBook", "Manuel de l'utilisateur de QGISRed sur GitBook", "Manual do Usuário do QGISRed no GitBook")}
                width={1160}
                height={805}
                className="w-full h-auto shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tutoriales */}
      <section id={anchorId("tutoriales", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Tutoriales", "Tutorials", "Tutoriels", "Tutoriais")} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>

      {/* Vídeos Formativos */}
      <section id={anchorId("videosformativos", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Vídeos formativos", "Training Videos", "Vidéos de formation", "Vídeos de Treinamento")} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>

      {/* Repositorio de Ejemplos */}
      <section id={anchorId("repositorioejemplos", locale)} className="w-full bg-white" style={{ paddingTop: "48px", paddingBottom: "48px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Repositorio de ejemplos", "Examples Repository", "Répertoire d'exemples", "Repositório de Exemplos")} />

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
                      alt={localize(locale, ejemplo.name, ejemplo.nameEn, ejemplo.nameFr, ejemplo.namePt)}
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
                    {localize(locale, ejemplo.name, ejemplo.nameEn, ejemplo.nameFr, ejemplo.namePt)}
                  </h3>
                  <p style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.7" }}>
                    {localize(locale, ejemplo.description, ejemplo.descriptionEn, ejemplo.descriptionFr, ejemplo.descriptionPt)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modelo de Datos */}
      <section id={anchorId("modelodatos", locale)} className="w-full" style={{ backgroundColor: "rgb(246,246,246)", paddingTop: "48px", paddingBottom: "64px" }}>
        <div className="mx-auto" style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <SectionHeading title={localize(locale, "Modelo de datos", "Data Model", "Modèle de données", "Modelo de Dados")} />
          <ComingSoon text={comingSoonText} />
        </div>
      </section>
    </main>
  );
}
