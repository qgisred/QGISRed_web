import Image from "@/components/AppImage";
import { useTranslations } from "next-intl";

type CardKey = "tutorials" | "examples" | "manual" | "videos" | "dataModel" | "faq";

interface ResourceCard {
  key: CardKey;
  href: string;
  imageSrc: string;
  imageAlt: string;
  imageLeft: boolean;
}

const leftColumnCards: ResourceCard[] = [
  {
    key: "tutorials",
    href: "/utilizacion#tutoriales",
    imageSrc: "/images/soporte-img1.jpg",
    imageAlt: "Young female programmer web developer working on computer software",
    imageLeft: true,
  },
  {
    key: "examples",
    href: "/utilizacion#repositorioejemplos",
    imageSrc: "/images/presentacion-img3.png",
    imageAlt: "Repository of Examples",
    imageLeft: false,
  },
  {
    key: "manual",
    href: "/utilizacion#manualusuario",
    imageSrc: "/images/soporte-img2.jpg",
    imageAlt: "Girl sitting in front of laptop carefully looking at paper document",
    imageLeft: true,
  },
];

const rightColumnCards: ResourceCard[] = [
  {
    key: "videos",
    href: "/utilizacion#videosformativos",
    imageSrc: "/images/soporte-img3.jpg",
    imageAlt: "Man Working On Laptop",
    imageLeft: false,
  },
  {
    key: "dataModel",
    href: "/utilizacion#modelodatos",
    imageSrc: "/images/presentacion-img2.png",
    imageAlt: "Data Model",
    imageLeft: true,
  },
  {
    key: "faq",
    href: "/utilizacion#preguntasfrecuentes",
    imageSrc: "/images/soporte-img4.jpg",
    imageAlt: "Wooden dices with question mark",
    imageLeft: false,
  },
];

function ResourceCardItem({ card, t }: { card: ResourceCard; t: (key: CardKey) => string }) {
  const imageBlock = (
    <a href={card.href} className="block overflow-hidden" tabIndex={-1} aria-hidden="true">
      <Image
        src={card.imageSrc}
        alt={card.imageAlt}
        width={300}
        height={200}
        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        style={{ minHeight: "150px" }}
      />
    </a>
  );

  const titleBlock = (
    <div
      className="flex items-center justify-center p-5"
      style={{ backgroundColor: "rgb(255, 255, 255)" }}
    >
      <a
        href={card.href}
        className="font-semibold text-center transition-colors duration-150 hover:text-[rgb(95,189,211)]"
        style={{
          fontSize: "16px",
          color: "rgb(0, 9, 25)",
          textDecoration: "none",
          lineHeight: "1.3",
        }}
      >
        {t(card.key)}
      </a>
    </div>
  );

  return (
    <div
      className="grid grid-cols-2"
      style={{ border: "1px solid rgb(242, 242, 242)", minHeight: "160px" }}
    >
      {card.imageLeft ? imageBlock : titleBlock}
      {card.imageLeft ? titleBlock : imageBlock}
    </div>
  );
}

export function RecursosSection() {
  const t = useTranslations("recursosSection");

  return (
    <section
      className="w-full bg-white"
      style={{ paddingTop: "16px", paddingBottom: "48px" }}
    >
      <div
        className="mx-auto grid grid-cols-1 md:grid-cols-2"
        style={{ maxWidth: "1280px", padding: "0 60px", gap: "0" }}
      >
        {/* Left column */}
        <div className="flex flex-col">
          {leftColumnCards.map((card) => (
            <ResourceCardItem key={card.key} card={card} t={t} />
          ))}
        </div>

        {/* Right column */}
        <div className="flex flex-col">
          {rightColumnCards.map((card) => (
            <ResourceCardItem key={card.key} card={card} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
