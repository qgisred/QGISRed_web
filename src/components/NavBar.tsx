"use client";

import { useState } from "react";
import Image from "next/image";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import { ChevronDownIcon, MenuIcon, CloseIcon } from "./icons";

interface NavSubmenuItem {
  text: string;
  href: string;
}

interface NavItem {
  text: string;
  href: string;
  submenu?: NavSubmenuItem[];
}

function useNavItems(): NavItem[] {
  const t = useTranslations("nav");
  return [
    { text: t("home"), href: "/" },
    {
      text: t("presentation"),
      href: "/presentacion",
      submenu: [
        { text: t("presentationSubmenu.whatIs"), href: "/presentacion#quees" },
        { text: t("presentationSubmenu.background"), href: "/presentacion#antecedentes" },
        { text: t("presentationSubmenu.applications"), href: "/presentacion#aplicaciones" },
        { text: t("presentationSubmenu.installation"), href: "/presentacion#instalacion" },
        { text: t("presentationSubmenu.github"), href: "/presentacion#github" },
        { text: t("presentationSubmenu.credits"), href: "/presentacion#creditos" },
      ],
    },
    {
      text: t("capabilities"),
      href: "/capacidades",
      submenu: [
        { text: t("capabilitiesSubmenu.news"), href: "/capacidades#novedades" },
        { text: t("capabilitiesSubmenu.featured"), href: "/capacidades#capacidadesdestacadas" },
        { text: t("capabilitiesSubmenu.current"), href: "/capacidades#prestacionesactuales" },
        { text: t("capabilitiesSubmenu.upcoming"), href: "/capacidades#proximasprestaciones" },
        { text: t("capabilitiesSubmenu.history"), href: "/capacidades#historicodeversiones" },
      ],
    },
    {
      text: t("usage"),
      href: "/utilizacion",
      submenu: [
        { text: t("usageSubmenu.manual"), href: "/utilizacion#manualusuario" },
        { text: t("usageSubmenu.tutorials"), href: "/utilizacion#tutoriales" },
        { text: t("usageSubmenu.videos"), href: "/utilizacion#videosformativos" },
        { text: t("usageSubmenu.examples"), href: "/utilizacion#repositorioejemplos" },
        { text: t("usageSubmenu.dataModel"), href: "/utilizacion#modelodatos" },
      ],
    },
    {
      text: t("diffusion"),
      href: "/difusion",
      submenu: [
        { text: t("diffusionSubmenu.courses"), href: "/difusion#cursos" },
        { text: t("diffusionSubmenu.publications"), href: "/difusion#publicaciones" },
        { text: t("diffusionSubmenu.news"), href: "/difusion#noticias" },
      ],
    },
    {
      text: t("support"),
      href: "/soporte",
      submenu: [
        { text: t("supportSubmenu.issues"), href: "/soporte#incidencias" },
        { text: t("supportSubmenu.technicalSupport"), href: "/soporte#soportetecnico" },
        { text: t("supportSubmenu.businessServices"), href: "/soporte#empresas" },
        { text: t("supportSubmenu.projects"), href: "/soporte#participacion" },
      ],
    },
    { text: t("contact"), href: "/contacto" },
  ];
}

function NavDropdownItem({ item }: { item: NavItem }) {
  const [open, setOpen] = useState(false);
  return (
    <li
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href as "/"}
        className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] transition-colors duration-200 whitespace-nowrap"
      >
        {item.text}
        {item.submenu && (
          <ChevronDownIcon className="w-2.5 h-2.5 ml-0.5 opacity-60" />
        )}
      </Link>
      {item.submenu && open && (
        <ul className="absolute left-0 top-full z-50 bg-white shadow-[0_4px_20px_rgba(0,9,25,0.13)] min-w-[200px] py-2">
          {item.submenu.map((sub) => (
            <li key={sub.href}>
              <a
                href={sub.href}
                className="block px-5 py-2 text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] hover:bg-[rgb(249,249,249)] transition-colors duration-150"
              >
                {sub.text}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

export function NavBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale = useLocale();
  const t = useTranslations("nav");
  const navItems = useNavItems();
  const pathname = usePathname();

  // Compute alternate locale href for language switcher
  const otherLocale = locale === "es" ? "en" : "es";
  const otherLocaleLabel = locale === "es" ? t("english") : t("spanish");
  const currentLocaleLabel = locale === "es" ? t("spanish") : t("english");

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99] bg-white"
      style={{ transition: "background 0.3s, border 0.3s, box-shadow 0.3s" }}
    >
      {/* Desktop nav */}
      <div className="hidden md:flex items-center h-[105px] px-[60px] max-w-[1440px] mx-auto">
        {/* Logo */}
        <div className="flex-shrink-0 w-[192px]">
          <Link href="/">
            <Image
              src="/images/logo-qgisred.jpeg"
              alt="QGISRed"
              width={234}
              height={119}
              className="h-[60px] w-auto object-contain"
              priority
            />
          </Link>
        </div>

        {/* Main nav */}
        <nav className="flex-1 flex justify-center">
          <ul className="flex items-center gap-0">
            {navItems.map((item) => (
              <NavDropdownItem key={item.href} item={item} />
            ))}
          </ul>
        </nav>

        {/* Language switcher */}
        <div className="flex-shrink-0 w-[188px] flex justify-end">
          <div
            className="relative"
            onMouseEnter={() => setLangOpen(true)}
            onMouseLeave={() => setLangOpen(false)}
          >
            <button className="flex items-center gap-1 px-3 py-2 text-[15px] font-medium text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] transition-colors">
              <span className="mr-1">{locale === "es" ? "🇪🇸" : "🇬🇧"}</span>
              {currentLocaleLabel}
              <ChevronDownIcon className="w-2.5 h-2.5 ml-0.5 opacity-60" />
            </button>
            {langOpen && (
              <ul className="absolute right-0 top-full z-50 bg-white shadow-[0_4px_20px_rgba(0,9,25,0.13)] min-w-[140px] py-2">
                <li>
                  <Link
                    href={pathname as "/"}
                    locale={locale as "es" | "en"}
                    className="block px-5 py-2 text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)]"
                  >
                    {currentLocaleLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={pathname as "/"}
                    locale={otherLocale as "es" | "en"}
                    className="block px-5 py-2 text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)]"
                  >
                    {otherLocaleLabel}
                  </Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>

      {/* Mobile nav */}
      <div className="md:hidden flex items-center justify-between h-[70px] px-4 bg-white">
        <Link href="/">
          <Image
            src="/images/logo-qgisred.jpeg"
            alt="QGISRed"
            width={234}
            height={119}
            className="h-[45px] w-auto object-contain"
            priority
          />
        </Link>
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="p-2 text-[rgb(0,9,25)]"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <CloseIcon className="w-5 h-5" /> : <MenuIcon className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <ul className="py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href as "/"}
                  className="block px-6 py-3 text-[15px] font-medium text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.text}
                </Link>
                {item.submenu && (
                  <ul className="bg-gray-50">
                    {item.submenu.map((sub) => (
                      <li key={sub.href}>
                        <a
                          href={sub.href}
                          className="block px-10 py-2 text-[13px] text-[rgb(51,51,51)] hover:text-[rgb(95,189,211)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile language switcher */}
          <div className="px-6 py-3 border-t border-gray-100">
            <Link
              href={pathname as "/"}
              locale={otherLocale as "es" | "en"}
              className="text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)]"
              onClick={() => setMobileOpen(false)}
            >
              {locale === "es" ? "🇬🇧" : "🇪🇸"} {otherLocaleLabel}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
