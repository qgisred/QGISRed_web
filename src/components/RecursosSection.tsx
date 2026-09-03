import Image from "@/components/AppImage";
import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { anchorHash, type AnchorKey } from "@/i18n/anchors";

type CardKey = "tutorials" | "examples" | "manual" | "videos" | "dataModel" | "faq";

interface ResourceCard {
  key: CardKey;
  anchor: AnchorKey;
  imageSrc: string;
  imageAlt: string;
  // Intrinsic pixel size of imageSrc. The card crops with object-cover, so these
  // only feed the aspect-ratio hint that reserves space before the image loads.
  imageWidth: number;
  imageHeight: number;
  imageLeft: boolean;
}

const leftColumnCards: ResourceCard[] = [
  {
    key: "tutorials",
    anchor: "tutoriales",
    imageSrc: "/images/soporte-img1.jpg",
    imageAlt: "Young female programmer web developer working on computer software",
    imageWidth: 2000,
    imageHeight: 1333,
    imageLeft: true,
  },
  {
    key: "examples",
    anchor: "repositorioejemplos",
    imageSrc: "/images/presentacion-img3.png",
    imageAlt: "Repository of Examples",
    imageWidth: 1280,
    imageHeight: 720,
    imageLeft: false,
  },
  {
    key: "manual",
    anchor: "manualusuario",
    imageSrc: "/images/soporte-img2.jpg",
    imageAlt: "Girl sitting in front of laptop carefully looking at paper document",
    imageWidth: 2000,
    imageHeight: 1333,
    imageLeft: true,
  },
];

const rightColumnCards: ResourceCard[] = [
  {
    key: "videos",
    anchor: "videosformativos",
    imageSrc: "/images/soporte-img3.jpg",
    imageAlt: "Man Working On Laptop",
    imageWidth: 2000,
    imageHeight: 1333,
    imageLeft: false,
  },
  {
    key: "dataModel",
    anchor: "modelodatos",
    imageSrc: "/images/presentacion-img2.png",
    imageAlt: "Data Model",
    imageWidth: 1280,
    imageHeight: 720,
    imageLeft: true,
  },
  {
    key: "faq",
    anchor: "preguntasfrecuentes",
    imageSrc: "/images/soporte-img4.jpg",
    imageAlt: "Wooden dices with question mark",
    imageWidth: 2000,
    imageHeight: 1339,
    imageLeft: false,
  },
];

function ResourceCardItem({
  card,
  t,
  locale,
}: {
  card: ResourceCard;
  t: (key: CardKey) => string;
  locale: string;
}) {
  const hash = anchorHash(card.anchor, locale);
  const imageBlock = (
    <Link
      href={{ pathname: "/utilizacion", hash }}
      className="block overflow-hidden"
      tabIndex={-1}
      aria-hidden="true"
    >
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        width={card.imageWidth}
        height={card.imageHeight}
        className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.07]"
        style={{ minHeight: "150px" }}
      />
    </Link>
  );

  const titleBlock = (
    <div className="flex items-center justify-center p-5">
      <Link
        href={{ pathname: "/utilizacion", hash }}
        className="font-semibold text-center transition-colors duration-200 group-hover:text-[rgb(95,189,211)]"
        style={{
          fontSize: "16px",
          color: "rgb(0, 9, 25)",
          textDecoration: "none",
          lineHeight: "1.3",
        }}
      >
        {t(card.key)}
      </Link>
    </div>
  );

  return (
    <div className="resource-card-reveal">
      <div className="resource-card group relative grid grid-cols-2" style={{ minHeight: "160px" }}>
        {card.imageLeft ? imageBlock : titleBlock}
        {card.imageLeft ? titleBlock : imageBlock}
        <span
          aria-hidden="true"
          className="resource-card__accent pointer-events-none absolute inset-x-0 bottom-0 h-[3px] bg-[rgb(95,189,211)]"
        />
      </div>
    </div>
  );
}

export function RecursosSection() {
  const t = useTranslations("recursosSection");
  const locale = useLocale();

  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: "24px", paddingBottom: "56px" }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2 gap-5"
        style={{ maxWidth: "1280px", padding: "0 clamp(20px, 5vw, 60px)" }}
      >
        {/* Left column */}
        <div className="flex flex-col gap-5">
          {leftColumnCards.map((card) => (
            <ResourceCardItem key={card.key} card={card} t={t} locale={locale} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col gap-5">
          {rightColumnCards.map((card) => (
            <ResourceCardItem key={card.key} card={card} t={t} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}
