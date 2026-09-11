import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { NavBar } from "@/components/NavBar";
import { PageHero } from "@/components/PageHero";
import { Footer } from "@/components/Footer";
import { LegalPageLayout, LegalSection } from "@/components/LegalPageLayout";

// Spanish AND Portuguese URL (both happen to use the word
// "politica-de-cookies") — the English one is `/cookies-policy`, generated
// from `../cookies-policy/page.tsx`, and the French one is
// `/politique-de-cookies`, generated from `../politique-de-cookies/page.tsx`.
// See `src/i18n/routing.ts`.
export function generateStaticParams() {
  return [{ locale: "es" }, { locale: "pt" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.cookiesPolicy" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
  };
}

export default async function PoliticaCookiesPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legalPages.cookiesPolicy" });
  const th = await getTranslations({ locale, namespace: "pageHero" });

  return (
    <>
      <NavBar />
      <PageHero
        title={th("cookiesPolicy")}
        backgroundImage="/images/hero-bg.png"
        overlayOpacity={0.7}
      />
      <LegalPageLayout title={t("title")}>
        {locale === "es" ? <PoliticaCookiesEs />
          : locale === "fr" ? <PoliticaCookiesFr />
          : locale === "pt" ? <PoliticaCookiesPt />
          : <CookiesPolicyEn />}
      </LegalPageLayout>
      <Footer />
    </>
  );
}

function PoliticaCookiesEs() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          Esta política de cookies fue actualizada por última vez el julio 15, 2022 y se aplica a los ciudadanos y
          residentes legales permanentes del Espacio Económico Europeo y Suiza.
        </p>
      </LegalSection>

      <LegalSection title="1. Introducción">
        <p>
          Nuestra web, https://qgisred.upv.es utiliza cookies y otras tecnologías relacionadas (para mayor comodidad,
          todas las tecnologías se denominan «cookies»). Las cookies también son colocadas por terceros a los que hemos
          contratado. En el siguiente documento te informamos sobre el uso de cookies en nuestra web.
        </p>
      </LegalSection>

      <LegalSection title="2. ¿Qué son las cookies?">
        <p>
          Una cookie es un pequeño archivo que se envía junto con las páginas de esta web y que tu navegador almacena
          en el disco duro de su ordenador u otro dispositivo. La información almacenada puede ser devuelta a nuestros
          servidores o a los servidores de terceros apropiados durante una visita posterior.
        </p>
      </LegalSection>

      <LegalSection title="3. ¿Qué son los scripts?">
        <p>
          Un script es un fragmento de código de programa que se utiliza para hacer que nuestra web funcione
          correctamente y de forma interactiva. Este código se ejecuta en nuestro servidor o en tu dispositivo.
        </p>
      </LegalSection>

      <LegalSection title="4. ¿Qué es una baliza web?">
        <p>
          Una baliza web (o una etiqueta de píxel) es una pequeña e invisible pieza de texto o imagen en una web que
          se utiliza para monitorear el tráfico en una web. Para ello, se almacenan varios datos sobre usted mediante
          estas balizas web.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Cookies técnicas o funcionales</strong><br />
          Algunas cookies aseguran que ciertas partes de la web funcionen correctamente y que tus preferencias de
          usuario sigan recordándose. Al colocar cookies funcionales, te facilitamos la visita a nuestra web. Podemos
          colocar estas cookies sin tu consentimiento.
        </p>
        <p className="mb-4">
          <strong>5.2 Cookies de estadísticas</strong><br />
          Utilizamos cookies estadísticas para optimizar la experiencia de la web para nuestros usuarios. Con estas
          cookies estadísticas obtenemos información sobre el uso de nuestra web. Te pedimos tu permiso para colocar
          cookies de estadísticas.
        </p>
        <p className="mb-4">
          <strong>5.3 Cookies de marketing/seguimiento</strong><br />
          Las cookies de marketing/seguimiento son cookies, o cualquier otra forma de almacenamiento local, usadas para
          crear perfiles de usuario para mostrar publicidad o para hacer el seguimiento del usuario en esta web o en
          varias webs con fines de marketing similares.
        </p>
        <p>
          <strong>5.4 Redes sociales</strong><br />
          En nuestra web hemos incluido contenido de X (Formerly Twitter) para promover páginas web o compartir en
          redes sociales. Este contenido está incrustado con código derivado de X (Formerly Twitter) y guarda cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies usadas">
        <p className="mb-4">
          Usamos cookies de: <strong>Elementor</strong>, <strong>WordPress</strong>, <strong>Polylang</strong>,{" "}
          <strong>mailpoet</strong>, <strong>Google Analytics</strong>, <strong>Google reCAPTCHA</strong>,{" "}
          <strong>YouTube</strong> y <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consentimiento">
        <p>
          Cuando visites nuestra web por primera vez, te mostraremos una ventana emergente con una explicación sobre
          las cookies. Tan pronto como hagas clic en «Guardar preferencias», aceptas que usemos las categorías de
          cookies y plugins que has seleccionado en la ventana emergente, tal y como se describe en esta política de
          cookies. Puedes desactivar el uso de cookies a través de tu navegador, pero, por favor, ten en cuenta que
          nuestra web puede dejar de funcionar correctamente.
        </p>
      </LegalSection>

      <LegalSection title="8. Activación/desactivación y borrado de cookies">
        <p>
          Puedes utilizar tu navegador de Internet para eliminar automáticamente o manualmente las cookies. También
          puedes especificar que determinadas cookies no pueden ser colocadas. Otra opción es cambiar los ajustes de tu
          navegador de Internet para que recibas un mensaje cada vez que se coloca una cookie.
        </p>
      </LegalSection>

      <LegalSection title="9. Tus derechos con respecto a los datos personales">
        <p>
          Tienes los siguientes derechos con respecto a tus datos personales: derecho de acceso, rectificación,
          portabilidad y supresión de tus datos, derecho de limitación y oposición al tratamiento, y derecho a
          presentar una reclamación ante la Autoridad de control (agpd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Datos de contacto">
        <p>
          Para preguntas y/o comentarios sobre nuestra política de cookies y esta declaración, por favor contáctanos
          por email:{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}

function PoliticaCookiesFr() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          Cette politique de cookies a été mise à jour pour la dernière fois le 15 juillet 2022 et s&apos;applique
          aux citoyens et résidents légaux permanents de l&apos;Espace Économique Européen et de la Suisse.
        </p>
      </LegalSection>

      <LegalSection title="1. Introduction">
        <p>
          Notre site web, https://qgisred.upv.es, utilise des cookies et d&apos;autres technologies apparentées (par
          commodité, toutes ces technologies sont désignées par le terme « cookies »). Des cookies sont également
          déposés par des tiers que nous avons engagés. Dans le document suivant, nous vous informons de
          l&apos;utilisation des cookies sur notre site web.
        </p>
      </LegalSection>

      <LegalSection title="2. Que sont les cookies ?">
        <p>
          Un cookie est un petit fichier envoyé avec les pages de ce site web et que votre navigateur enregistre sur
          le disque dur de votre ordinateur ou de tout autre appareil. Les informations qui y sont stockées peuvent
          être renvoyées à nos serveurs ou aux serveurs des tiers concernés lors d&apos;une visite ultérieure.
        </p>
      </LegalSection>

      <LegalSection title="3. Que sont les scripts ?">
        <p>
          Un script est un fragment de code de programme utilisé pour faire fonctionner notre site web correctement
          et de manière interactive. Ce code s&apos;exécute sur notre serveur ou sur votre appareil.
        </p>
      </LegalSection>

      <LegalSection title="4. Qu'est-ce qu'un pixel espion ?">
        <p>
          Un pixel espion (ou balise pixel) est un petit élément de texte ou d&apos;image, invisible, présent sur un
          site web et utilisé pour surveiller le trafic sur ce site. À cette fin, diverses données vous concernant
          sont stockées au moyen de ces pixels espions.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Cookies techniques ou fonctionnels</strong><br />
          Certains cookies garantissent le bon fonctionnement de certaines parties du site web et permettent de
          conserver vos préférences d&apos;utilisateur. En déposant des cookies fonctionnels, nous facilitons votre
          visite sur notre site web. Nous pouvons déposer ces cookies sans votre consentement.
        </p>
        <p className="mb-4">
          <strong>5.2 Cookies statistiques</strong><br />
          Nous utilisons des cookies statistiques pour optimiser l&apos;expérience du site web pour nos utilisateurs.
          Ces cookies statistiques nous permettent d&apos;obtenir des informations sur l&apos;utilisation de notre
          site web. Nous vous demandons votre autorisation pour déposer des cookies statistiques.
        </p>
        <p className="mb-4">
          <strong>5.3 Cookies marketing/de suivi</strong><br />
          Les cookies marketing/de suivi sont des cookies, ou toute autre forme de stockage local, utilisés pour
          créer des profils d&apos;utilisateurs afin d&apos;afficher de la publicité ou de suivre
          l&apos;utilisateur sur ce site web ou sur plusieurs sites web à des fins marketing similaires.
        </p>
        <p>
          <strong>5.4 Réseaux sociaux</strong><br />
          Sur notre site web, nous avons inclus du contenu de X (anciennement Twitter) afin de promouvoir des pages
          web ou de partager sur les réseaux sociaux. Ce contenu est intégré avec du code provenant de X
          (anciennement Twitter) et enregistre des cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies utilisés">
        <p className="mb-4">
          Nous utilisons des cookies de : <strong>Elementor</strong>, <strong>WordPress</strong>,{" "}
          <strong>Polylang</strong>, <strong>mailpoet</strong>, <strong>Google Analytics</strong>,{" "}
          <strong>Google reCAPTCHA</strong>, <strong>YouTube</strong> et <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consentement">
        <p>
          Lors de votre première visite sur notre site web, une fenêtre contextuelle s&apos;affichera pour vous
          expliquer l&apos;utilisation des cookies. Dès que vous cliquez sur « Enregistrer les préférences », vous
          acceptez que nous utilisions les catégories de cookies et de modules que vous avez sélectionnées dans la
          fenêtre contextuelle, comme décrit dans cette politique de cookies. Vous pouvez désactiver
          l&apos;utilisation des cookies via votre navigateur, mais veuillez noter que notre site web pourrait alors
          ne plus fonctionner correctement.
        </p>
      </LegalSection>

      <LegalSection title="8. Activation/désactivation et suppression des cookies">
        <p>
          Vous pouvez utiliser votre navigateur Internet pour supprimer automatiquement ou manuellement les cookies.
          Vous pouvez également indiquer que certains cookies ne peuvent pas être déposés. Une autre option consiste
          à modifier les paramètres de votre navigateur Internet afin de recevoir un message chaque fois qu&apos;un
          cookie est déposé.
        </p>
      </LegalSection>

      <LegalSection title="9. Vos droits concernant les données personnelles">
        <p>
          Vous disposez des droits suivants concernant vos données personnelles : droit d&apos;accès, de
          rectification, de portabilité et de suppression de vos données, droit de limitation et d&apos;opposition
          au traitement, et droit d&apos;introduire une réclamation auprès de l&apos;Autorité de contrôle (agpd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Coordonnées">
        <p>
          Pour toute question et/ou commentaire concernant notre politique de cookies et cette déclaration, veuillez
          nous contacter par email :{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}

function PoliticaCookiesPt() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          Esta política de cookies foi atualizada pela última vez em 15 de julho de 2022 e aplica-se aos cidadãos e
          residentes legais permanentes do Espaço Econômico Europeu e da Suíça.
        </p>
      </LegalSection>

      <LegalSection title="1. Introdução">
        <p>
          Nosso site, https://qgisred.upv.es, utiliza cookies e outras tecnologias relacionadas (para maior
          comodidade, todas as tecnologias são denominadas «cookies»). Os cookies também são colocados por terceiros
          que contratamos. No documento a seguir, informamos você sobre o uso de cookies em nosso site.
        </p>
      </LegalSection>

      <LegalSection title="2. O que são cookies?">
        <p>
          Um cookie é um pequeno arquivo enviado junto com as páginas deste site e que o seu navegador armazena no
          disco rígido do seu computador ou de outro dispositivo. As informações armazenadas podem ser devolvidas aos
          nossos servidores ou aos servidores de terceiros apropriados durante uma visita posterior.
        </p>
      </LegalSection>

      <LegalSection title="3. O que são scripts?">
        <p>
          Um script é um fragmento de código de programa que é utilizado para fazer com que nosso site funcione
          corretamente e de forma interativa. Esse código é executado em nosso servidor ou no seu dispositivo.
        </p>
      </LegalSection>

      <LegalSection title="4. O que é um web beacon?">
        <p>
          Um web beacon (ou pixel de rastreamento) é um pequeno elemento invisível de texto ou imagem em um site que é
          utilizado para monitorar o tráfego em um site. Para isso, são armazenados diversos dados sobre você por
          meio desses web beacons.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Cookies técnicos ou funcionais</strong><br />
          Alguns cookies garantem que determinadas partes do site funcionem corretamente e que suas preferências de
          usuário continuem sendo lembradas. Ao colocar cookies funcionais, facilitamos a sua visita ao nosso site.
          Podemos colocar esses cookies sem o seu consentimento.
        </p>
        <p className="mb-4">
          <strong>5.2 Cookies estatísticos</strong><br />
          Utilizamos cookies estatísticos para otimizar a experiência do site para os nossos usuários. Com esses
          cookies estatísticos, obtemos informações sobre o uso do nosso site. Pedimos a sua permissão para colocar
          cookies estatísticos.
        </p>
        <p className="mb-4">
          <strong>5.3 Cookies de marketing/rastreamento</strong><br />
          Os cookies de marketing/rastreamento são cookies, ou qualquer outra forma de armazenamento local, usados
          para criar perfis de usuário a fim de exibir publicidade ou rastrear o usuário neste site ou em vários
          sites com fins de marketing similares.
        </p>
        <p>
          <strong>5.4 Redes sociais</strong><br />
          Em nosso site, incluímos conteúdo do X (anteriormente Twitter) para promover páginas web ou compartilhar em
          redes sociais. Esse conteúdo está incorporado com código derivado do X (anteriormente Twitter) e salva
          cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies utilizados">
        <p className="mb-4">
          Usamos cookies de: <strong>Elementor</strong>, <strong>WordPress</strong>, <strong>Polylang</strong>,{" "}
          <strong>mailpoet</strong>, <strong>Google Analytics</strong>, <strong>Google reCAPTCHA</strong>,{" "}
          <strong>YouTube</strong> e <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consentimento">
        <p>
          Quando você visitar nosso site pela primeira vez, mostraremos uma janela pop-up com uma explicação sobre os
          cookies. Assim que você clicar em «Salvar preferências», você aceita que usemos as categorias de cookies e
          plugins que você selecionou na janela pop-up, conforme descrito nesta política de cookies. Você pode
          desativar o uso de cookies por meio do seu navegador, mas, por favor, tenha em conta que nosso site pode
          deixar de funcionar corretamente.
        </p>
      </LegalSection>

      <LegalSection title="8. Ativação/desativação e exclusão de cookies">
        <p>
          Você pode utilizar o seu navegador de Internet para excluir automática ou manualmente os cookies. Você
          também pode especificar que determinados cookies não possam ser colocados. Outra opção é alterar as
          configurações do seu navegador de Internet para que você receba uma mensagem sempre que um cookie for
          colocado.
        </p>
      </LegalSection>

      <LegalSection title="9. Os seus direitos em relação aos dados pessoais">
        <p>
          Você tem os seguintes direitos em relação aos seus dados pessoais: direito de acesso, retificação,
          portabilidade e supressão dos seus dados, direito de limitação e oposição ao tratamento, e direito de
          apresentar uma reclamação perante a Autoridade de controle (agpd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Dados de contato">
        <p>
          Para perguntas e/ou comentários sobre nossa política de cookies e esta declaração, por favor entre em
          contato conosco por email:{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}

function CookiesPolicyEn() {
  return (
    <>
      <LegalSection>
        <p className="mb-4 text-sm" style={{ color: "rgb(120,120,120)" }}>
          This cookies policy was last updated on July 15, 2022 and applies to citizens and permanent legal residents
          of the European Economic Area and Switzerland.
        </p>
      </LegalSection>

      <LegalSection title="1. Introduction">
        <p>
          Our website, https://qgisred.upv.es uses cookies and other related technologies (for convenience, all
          technologies are referred to as &quot;cookies&quot;). Cookies are also placed by third parties we have
          engaged. In the following document we inform you about the use of cookies on our website.
        </p>
      </LegalSection>

      <LegalSection title="2. What are cookies?">
        <p>
          A cookie is a small file that is sent along with the pages of this website and stored by your browser on the
          hard drive of your computer or other device. The information stored can be returned to our servers or to the
          servers of the relevant third parties during a subsequent visit.
        </p>
      </LegalSection>

      <LegalSection title="3. What are scripts?">
        <p>
          A script is a piece of program code that is used to make our website function properly and interactively.
          This code is executed on our server or on your device.
        </p>
      </LegalSection>

      <LegalSection title="4. What is a web beacon?">
        <p>
          A web beacon (or a pixel tag) is a small, invisible piece of text or image on a website that is used to
          monitor traffic on a website. In order to do this, various data about you is stored using web beacons.
        </p>
      </LegalSection>

      <LegalSection title="5. Cookies">
        <p className="mb-4">
          <strong>5.1 Technical or functional cookies</strong><br />
          Some cookies ensure that certain parts of the website work properly and that your user preferences remain
          known. By placing functional cookies, we make it easier for you to visit our website. We may place these
          cookies without your consent.
        </p>
        <p className="mb-4">
          <strong>5.2 Statistics cookies</strong><br />
          We use statistics cookies to optimise the website experience for our users. With these statistics cookies we
          get insights into the use of our website. We ask your permission to place statistics cookies.
        </p>
        <p className="mb-4">
          <strong>5.3 Marketing/tracking cookies</strong><br />
          Marketing/tracking cookies are cookies, or any other form of local storage, used to create user profiles to
          display advertising or to track the user on this website or across several websites for similar marketing
          purposes.
        </p>
        <p>
          <strong>5.4 Social networks</strong><br />
          On our website we have included content from X (Formerly Twitter) to promote web pages or share on social
          networks. This content is embedded with code derived from X (Formerly Twitter) and places cookies.
        </p>
      </LegalSection>

      <LegalSection title="6. Cookies used">
        <p className="mb-4">
          We use cookies from: <strong>Elementor</strong>, <strong>WordPress</strong>, <strong>Polylang</strong>,{" "}
          <strong>mailpoet</strong>, <strong>Google Analytics</strong>, <strong>Google reCAPTCHA</strong>,{" "}
          <strong>YouTube</strong> and <strong>Twitter</strong>.
        </p>
      </LegalSection>

      <LegalSection title="7. Consent">
        <p>
          When you first visit our website, we will show you a pop-up with an explanation about cookies. As soon as
          you click on &quot;Save preferences&quot;, you consent to us using the categories of cookies and plugins you
          selected in the pop-up, as described in this cookies policy. You can disable the use of cookies via your
          browser, but please note that our website may no longer work properly.
        </p>
      </LegalSection>

      <LegalSection title="8. Enabling/disabling and deleting cookies">
        <p>
          You can use your internet browser to automatically or manually delete cookies. You can also specify that
          certain cookies may not be placed. Another option is to change the settings of your internet browser so that
          you receive a message each time a cookie is placed.
        </p>
      </LegalSection>

      <LegalSection title="9. Your rights with respect to personal data">
        <p>
          You have the following rights with respect to your personal data: rights of access, rectification,
          portability and erasure of your data, rights to restriction and objection to processing, and the right to
          lodge a complaint with the supervisory authority (aepd.es).
        </p>
      </LegalSection>

      <LegalSection title="10. Contact details">
        <p>
          For questions and/or comments about our cookies policy and this statement, please contact us by email:{" "}
          <a href="mailto:fmartine@hma.upv.es" style={{ color: "rgb(95, 189, 211)" }}>
            fmartine@hma.upv.es
          </a>
        </p>
      </LegalSection>
    </>
  );
}
