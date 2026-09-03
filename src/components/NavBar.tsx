"use client";

import { useState } from "react";
import Image from "@/components/AppImage";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";
import type { Locale, PathnameWithHash, StaticPathname } from "@/i18n/routing";
import { anchorHash } from "@/i18n/anchors";
import { ChevronDownIcon, MenuIcon, CloseIcon } from "./icons";

interface NavSubmenuItem {
  text: string;
  href: PathnameWithHash;
}

interface NavItem {
  text: string;
  href: StaticPathname;
  submenu?: NavSubmenuItem[];
}

function useNavItems(): NavItem[] {
  const t = useTranslations("nav");
  const locale = useLocale();
  return [
    { text: t("home"), href: "/" },
    {
      text: t("presentation"),
      href: "/presentacion",
      submenu: [
        { text: t("presentationSubmenu.whatIs"), href: { pathname: "/presentacion", hash: anchorHash("quees", locale) } },
        { text: t("presentationSubmenu.background"), href: { pathname: "/presentacion", hash: anchorHash("antecedentes", locale) } },
        { text: t("presentationSubmenu.applications"), href: { pathname: "/presentacion", hash: anchorHash("aplicaciones", locale) } },
        { text: t("presentationSubmenu.installation"), href: { pathname: "/presentacion", hash: anchorHash("instalacion", locale) } },
        { text: t("presentationSubmenu.github"), href: { pathname: "/presentacion", hash: anchorHash("github", locale) } },
        { text: t("presentationSubmenu.credits"), href: { pathname: "/presentacion", hash: anchorHash("creditos", locale) } },
      ],
    },
    {
      text: t("capabilities"),
      href: "/capacidades",
      submenu: [
        { text: t("capabilitiesSubmenu.news"), href: { pathname: "/capacidades", hash: anchorHash("novedades", locale) } },
        { text: t("capabilitiesSubmenu.featured"), href: { pathname: "/capacidades", hash: anchorHash("capacidadesdestacadas", locale) } },
        { text: t("capabilitiesSubmenu.current"), href: { pathname: "/capacidades", hash: anchorHash("prestacionesactuales", locale) } },
        { text: t("capabilitiesSubmenu.upcoming"), href: { pathname: "/capacidades", hash: anchorHash("proximasprestaciones", locale) } },
        { text: t("capabilitiesSubmenu.history"), href: { pathname: "/capacidades", hash: anchorHash("historicodeversiones", locale) } },
      ],
    },
    {
      text: t("usage"),
      href: "/utilizacion",
      submenu: [
        { text: t("usageSubmenu.manual"), href: { pathname: "/utilizacion", hash: anchorHash("manualusuario", locale) } },
        { text: t("usageSubmenu.tutorials"), href: { pathname: "/utilizacion", hash: anchorHash("tutoriales", locale) } },
        { text: t("usageSubmenu.videos"), href: { pathname: "/utilizacion", hash: anchorHash("videosformativos", locale) } },
        { text: t("usageSubmenu.examples"), href: { pathname: "/utilizacion", hash: anchorHash("repositorioejemplos", locale) } },
        { text: t("usageSubmenu.dataModel"), href: { pathname: "/utilizacion", hash: anchorHash("modelodatos", locale) } },
      ],
    },
    {
      text: t("diffusion"),
      href: "/difusion",
      submenu: [
        { text: t("diffusionSubmenu.courses"), href: { pathname: "/difusion", hash: anchorHash("cursos", locale) } },
        { text: t("diffusionSubmenu.publications"), href: { pathname: "/difusion", hash: anchorHash("publicaciones", locale) } },
        { text: t("diffusionSubmenu.news"), href: { pathname: "/difusion", hash: anchorHash("noticias", locale) } },
      ],
    },
    {
      text: t("support"),
      href: "/soporte",
      submenu: [
        { text: t("supportSubmenu.issues"), href: { pathname: "/soporte", hash: anchorHash("incidencias", locale) } },
        { text: t("supportSubmenu.technicalSupport"), href: { pathname: "/soporte", hash: anchorHash("soportetecnico", locale) } },
        { text: t("supportSubmenu.businessServices"), href: { pathname: "/soporte", hash: anchorHash("empresas", locale) } },
        { text: t("supportSubmenu.projects"), href: { pathname: "/soporte", hash: anchorHash("participacion", locale) } },
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
        href={item.href}
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
            <li key={sub.href.hash}>
              <Link
                href={sub.href}
                className="block px-5 py-2 text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] hover:bg-[rgb(249,249,249)] transition-colors duration-150"
              >
                {sub.text}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

interface NavBarProps {
  /**
   * Route params to use per locale in the language switcher. Only needed on
   * routes whose dynamic segments are translated (capability articles): the
   * current URL's slug is not valid in the other language, and this component
   * has no access to the article data to translate it.
   */
  localeParams?: Partial<Record<Locale, { slug: string }>>;
}

export function NavBar({ localeParams }: NavBarProps = {}) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const locale: Locale = useLocale() === "en" ? "en" : "es";
  const t = useTranslations("nav");
  const navItems = useNavItems();
  const pathname = usePathname();

  // Compute alternate locale href for language switcher
  const otherLocale: Locale = locale === "es" ? "en" : "es";
  const otherLocaleLabel = locale === "es" ? t("english") : t("spanish");
  const currentLocaleLabel = locale === "es" ? t("spanish") : t("english");

  // The same page in the given locale. `usePathname` returns the internal
  // (Spanish) route, which `Link` maps back to the localized URL.
  function localeHref(target: Locale) {
    if (pathname === "/capacidades/[slug]") {
      const params = localeParams?.[target];
      // Without the translated slug the URL would 404, so fall back to the index.
      return params ? { pathname, params } : ("/capacidades" as const);
    }
    return pathname;
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-[99] bg-white"
      style={{ transition: "background 0.3s, border 0.3s, box-shadow 0.3s" }}
    >
      {/* Desktop nav */}
      <div className="hidden md:flex items-center h-[105px] px-[clamp(20px,5vw,60px)] max-w-[1440px] mx-auto">
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
                    href={localeHref(locale)}
                    locale={locale}
                    className="block px-5 py-2 text-[14px] text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)]"
                  >
                    {currentLocaleLabel}
                  </Link>
                </li>
                <li>
                  <Link
                    href={localeHref(otherLocale)}
                    locale={otherLocale}
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
                  href={item.href}
                  className="block px-6 py-3 text-[15px] font-medium text-[rgb(0,9,25)] hover:text-[rgb(95,189,211)] border-b border-gray-50"
                  onClick={() => setMobileOpen(false)}
                >
                  {item.text}
                </Link>
                {item.submenu && (
                  <ul className="bg-gray-50">
                    {item.submenu.map((sub) => (
                      <li key={sub.href.hash}>
                        <Link
                          href={sub.href}
                          className="block px-10 py-2 text-[13px] text-[rgb(51,51,51)] hover:text-[rgb(95,189,211)]"
                          onClick={() => setMobileOpen(false)}
                        >
                          {sub.text}
                        </Link>
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
              href={localeHref(otherLocale)}
              locale={otherLocale}
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
