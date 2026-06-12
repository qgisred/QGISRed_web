import Image from "@/components/AppImage";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { TwitterIcon, GitHubIcon } from "./icons";

interface FooterLogo {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const footerLogos: FooterLogo[] = [
  { src: "/images/footer-logo-qgisred.png", alt: "QGISRed", width: 118, height: 118 },
  { src: "/images/footer-logo-redhisp.png", alt: "RedHisp", width: 118, height: 124 },
  { src: "/images/footer-logo-iiama.png", alt: "IIAMA", width: 118, height: 70 },
  { src: "/images/footer-logo-upv.png", alt: "UPV", width: 118, height: 118 },
];

function NavColumn({ items }: { items: { text: string; href: string }[] }) {
  return (
    <nav>
      <ul className="flex flex-col gap-3 list-none p-0 m-0">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href as "/"}
              className="transition-colors duration-150 hover:text-[rgb(95,189,211)]"
              style={{
                fontSize: "14px",
                color: "rgb(0, 9, 25)",
                textDecoration: "none",
                fontWeight: "400",
                lineHeight: "1.5",
              }}
            >
              {item.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export function Footer() {
  const t = useTranslations("footer");
  const tn = useTranslations("nav");

  const navCol1 = [
    { text: tn("presentation"), href: "/presentacion" as "/" },
    { text: tn("capabilities"), href: "/capacidades" as "/" },
    { text: tn("usage"), href: "/utilizacion" as "/" },
  ];

  const navCol2 = [
    { text: tn("diffusion"), href: "/difusion" as "/" },
    { text: tn("support"), href: "/soporte" as "/" },
    { text: tn("contact"), href: "/contacto" as "/" },
  ];

  const navCol3 = [
    { text: t("legalNotice"), href: "/aviso-legal" as "/" },
    { text: t("privacyPolicy"), href: "/politica-de-privacidad" as "/" },
    { text: t("cookiesPolicy"), href: "/politica-de-cookies" as "/" },
  ];

  return (
    <footer className="w-full">
      {/* Main footer */}
      <div
        className="bg-white"
        style={{ paddingTop: "48px", paddingBottom: "48px" }}
      >
        <div
          className="mx-auto flex flex-col md:flex-row gap-[48px] md:gap-[60px] items-start"
          style={{ maxWidth: "1280px", padding: "0 60px" }}
        >
          {/* Logos 2x2 grid */}
          <div
            className="grid grid-cols-2 flex-shrink-0"
            style={{ gap: "16px", width: "260px" }}
          >
            {footerLogos.map((logo) => (
              <div key={logo.src} className="flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={logo.width}
                  height={logo.height}
                  className="h-[60px] w-auto object-contain"
                />
              </div>
            ))}
          </div>

          {/* Nav columns */}
          <div className="flex flex-1 gap-[60px] flex-wrap">
            <NavColumn items={navCol1} />
            <NavColumn items={navCol2} />
            <NavColumn items={navCol3} />
          </div>

          {/* Social icons */}
          <div className="flex flex-row md:flex-col gap-2 md:items-end">
            <a
              href="https://twitter.com/qgisred"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-opacity duration-150 hover:opacity-80"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "rgb(95, 189, 211)",
                borderRadius: "4px",
                color: "white",
              }}
              aria-label="Twitter"
            >
              <TwitterIcon className="w-4 h-4" />
            </a>
            <a
              href="https://github.com/nestoralzamora"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center transition-opacity duration-150 hover:opacity-80"
              style={{
                width: "36px",
                height: "36px",
                backgroundColor: "rgb(95, 189, 211)",
                borderRadius: "4px",
                color: "white",
              }}
              aria-label="GitHub"
            >
              <GitHubIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright bar */}
      <div
        className="text-center"
        style={{
          backgroundColor: "rgb(0, 14, 40)",
          paddingTop: "16px",
          paddingBottom: "16px",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            color: "rgb(255, 255, 255)",
            lineHeight: "1.5",
            margin: "0",
          }}
        >
          {t("copyright")}{" "}
          <a
            href="https://brandinamic.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
            style={{ color: "rgb(95, 189, 211)", textDecoration: "none" }}
          >
            brandinàmic
          </a>
        </p>
      </div>
    </footer>
  );
}
