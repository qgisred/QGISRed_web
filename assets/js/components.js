/**
 * QGISRed – components.js
 * Injects header and footer into every page.
 * Reads body.dataset.lang and body.dataset.page to build correct nav links,
 * active states, language switcher, and hreflang meta tags.
 */

(function () {
  'use strict';

  /* ── Base path (GitHub Pages project repos live under /<repo>/) ───────── */
  // On github.io the first path segment is the repo name → use it as base.
  // On localhost or a custom domain the hostname doesn't end in github.io → base is ''.
  const BASE = window.location.hostname.endsWith('github.io')
    ? '/' + window.location.pathname.split('/').filter(Boolean)[0]
    : '';

  /* ── Site map ─────────────────────────────────────────────────────────── */

  const NAV_ES = [
    { key: 'presentacion', label: 'Presentación', href: '/es/presentacion.html' },
    { key: 'capacidades',  label: 'Capacidades',  href: '/es/capacidades.html' },
    { key: 'utilizacion',  label: 'Utilización',  href: '/es/utilizacion.html' },
    { key: 'difusion',     label: 'Difusión',     href: '/es/difusion.html' },
    { key: 'soporte',      label: 'Soporte',      href: '/es/soporte.html' },
    { key: 'contacto',     label: 'Contacto',     href: '/es/contacto.html' },
  ];

  const NAV_EN = [
    { key: 'presentation', label: 'Presentation', href: '/en/presentation.html' },
    { key: 'capabilities', label: 'Capabilities', href: '/en/capabilities.html' },
    { key: 'usage',        label: 'Usage',        href: '/en/usage.html' },
    { key: 'diffusion',    label: 'Dissemination',href: '/en/diffusion.html' },
    { key: 'support',      label: 'Support',      href: '/en/support.html' },
    { key: 'contact',      label: 'Contact',      href: '/en/contact.html' },
  ];

  // Map each ES page key → equivalent EN page URL and vice-versa
  const LANG_MAP = {
    es: {
      index:          '/en/',
      presentacion:   '/en/presentation.html',
      capacidades:    '/en/capabilities.html',
      utilizacion:    '/en/usage.html',
      difusion:       '/en/diffusion.html',
      soporte:        '/en/support.html',
      contacto:       '/en/contact.html',
      'aviso-legal':  '/en/',
      'politica-de-privacidad': '/en/',
      'politica-de-cookies':    '/en/',
      // novedades + capacidad detail pages
      'novedades-0.16': '/en/news-0.16.html',
      'novedades-0.17': '/en/news-0.17.html',
      'capacidad-gemelo-digital-valvulas': '/en/capability-digital-twin-valves.html',
      'capacidad-analisis-epanet22':       '/en/capability-epanet22-analysis.html',
      'capacidad-asignacion-demandas':     '/en/capability-demand-assignment.html',
      'capacidad-editor-propiedades':      '/en/capability-property-editor.html',
      'capacidad-estado-elementos':        '/en/capability-element-status.html',
      'capacidad-segmentos-aislados':      '/en/capability-isolated-segments.html',
    },
    en: {
      index:          '/es/',
      presentation:   '/es/presentacion.html',
      capabilities:   '/es/capacidades.html',
      usage:          '/es/utilizacion.html',
      diffusion:      '/es/difusion.html',
      support:        '/es/soporte.html',
      contact:        '/es/contacto.html',
      'news-0.16':    '/es/novedades-0.16.html',
      'news-0.17':    '/es/novedades-0.17.html',
      'capability-digital-twin-valves': '/es/capacidad-gemelo-digital-valvulas.html',
      'capability-epanet22-analysis':   '/es/capacidad-analisis-epanet22.html',
      'capability-demand-assignment':   '/es/capacidad-asignacion-demandas.html',
      'capability-property-editor':     '/es/capacidad-editor-propiedades.html',
      'capability-element-status':      '/es/capacidad-estado-elementos.html',
      'capability-isolated-segments':   '/es/capacidad-segmentos-aislados.html',
    },
  };

  // For dynamic capability detail pages: es/capacidad-XXX ↔ en/capability-XXX
  function getAltLangHref(lang, page) {
    if (LANG_MAP[lang] && LANG_MAP[lang][page]) return LANG_MAP[lang][page];
    // Handle capacidad-* / capability-*
    if (lang === 'es' && page.startsWith('capacidad-')) {
      return '/en/capability-' + page.slice('capacidad-'.length) + '.html';
    }
    if (lang === 'en' && page.startsWith('capability-')) {
      return '/es/capacidad-' + page.slice('capability-'.length) + '.html';
    }
    return lang === 'es' ? '/en/' : '/es/';
  }

  /* ── Read page context ────────────────────────────────────────────────── */
  const body   = document.body;
  const lang   = body.dataset.lang  || 'es';
  const page   = body.dataset.page  || 'index';
  const nav    = lang === 'es' ? NAV_ES : NAV_EN;
  const altHref = getAltLangHref(lang, page);

  /* Determine path prefix for assets (root or /es/ or /en/) */
  const depth = window.location.pathname.split('/').filter(Boolean).length;
  const prefix = depth >= 1 ? '../' : './';

  /* ── Inject hreflang ─────────────────────────────────────────────────── */
  function injectHreflang() {
    const canonical = window.location.href;
    const head = document.head;

    // Remove any existing hreflang
    head.querySelectorAll('link[rel="alternate"]').forEach(el => el.remove());

    function addAlt(hl, href) {
      const link = document.createElement('link');
      link.rel = 'alternate';
      link.hreflang = hl;
      link.href = href;
      head.appendChild(link);
    }
    const altFull = location.origin + BASE + altHref;
    addAlt(lang, canonical);
    addAlt(lang === 'es' ? 'en' : 'es', altFull);
    addAlt('x-default', lang === 'es' ? canonical : altFull);
  }

  /* ── Build header HTML ───────────────────────────────────────────────── */
  function buildHeader() {
    const navItems = nav.map(item => {
      const active = item.key === page ? ' aria-current="page"' : '';
      return `<li><a href="${item.href}"${active}>${item.label}</a></li>`;
    }).join('');

    const altLang   = lang === 'es' ? 'en' : 'es';
    const altLabel  = lang === 'es' ? 'EN' : 'ES';
    const altFlag   = altLang === 'en' ? 'flag-en.svg' : 'flag-es.svg';
    const curFlag   = lang   === 'es' ? 'flag-es.svg' : 'flag-en.svg';
    const curLabel  = lang   === 'es' ? 'ES' : 'EN';

    return `
<header class="site-header">
  <div class="header-inner">
    <div class="header-logo">
      <a href="/${lang}/">
        <img src="${prefix}assets/img/logos/logoqgisred.png" alt="QGISRed" height="40">
      </a>
    </div>

    <input type="checkbox" id="nav-toggle" class="nav-toggle" aria-hidden="true">
    <label for="nav-toggle" class="nav-toggle-label" aria-label="Menú">
      <span></span><span></span><span></span>
    </label>

    <nav class="site-nav" aria-label="Navegación principal">
      <ul>${navItems}</ul>
    </nav>

    <div class="lang-switcher">
      <span class="lang-btn active">
        <img src="${prefix}assets/img/logos/${curFlag}" alt="${curLabel}">
        <span>${curLabel}</span>
      </span>
      <a href="${altHref}" class="lang-btn" hreflang="${altLang}" aria-label="${altLabel}">
        <img src="${prefix}assets/img/logos/${altFlag}" alt="${altLabel}">
        <span>${altLabel}</span>
      </a>
    </div>
  </div>
</header>`;
  }

  /* ── Build footer HTML ───────────────────────────────────────────────── */
  function buildFooter() {
    const isEs = lang === 'es';
    const t = {
      about:     isEs ? 'Plugin de código abierto para el modelado hidráulico de redes de distribución de agua, integrando GIS con el motor EPANET.' : 'Open-source plugin for hydraulic modelling of water distribution networks, integrating GIS with the EPANET engine.',
      links:     isEs ? 'Secciones' : 'Sections',
      resources: isEs ? 'Recursos' : 'Resources',
      contact:   isEs ? 'Contacto' : 'Contact',
      manual:    isEs ? 'Manual de usuario' : 'User manual',
      examples:  isEs ? 'Ejemplos' : 'Examples',
      issues:    isEs ? 'Reportar incidencias' : 'Report issues',
      legal:     isEs ? 'Aviso legal' : 'Legal notice',
      privacy:   isEs ? 'Privacidad' : 'Privacy',
      cookies:   isEs ? 'Cookies' : 'Cookies',
      rights:    isEs ? 'Todos los derechos reservados.' : 'All rights reserved.',
      developed: isEs ? 'Desarrollado en el IIAMA – Universitat Politècnica de València.' : 'Developed at IIAMA – Universitat Politècnica de València.',
    };

    const navLinks = nav.map(item =>
      `<li><a href="${item.href}">${item.label}</a></li>`
    ).join('');

    return `
<footer class="site-footer">
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <img src="${prefix}assets/img/logos/logoqgisred.png" alt="QGISRed">
        <p>${t.about}</p>
        <div class="footer-logos">
          <a href="https://www.upv.es" target="_blank" rel="noopener" title="UPV">
            <img src="${prefix}assets/img/logos/logoUPV.png" alt="UPV">
          </a>
          <a href="https://www.iiama.upv.es" target="_blank" rel="noopener" title="IIAMA">
            <img src="${prefix}assets/img/logos/logoIiama.png" alt="IIAMA">
          </a>
          <a href="https://redhisp.upv.es" target="_blank" rel="noopener" title="RedhiSP">
            <img src="${prefix}assets/img/logos/logoRedhisp.png" alt="RedhiSP">
          </a>
        </div>
      </div>

      <div class="footer-col">
        <h4>${t.links}</h4>
        <ul>${navLinks}</ul>
      </div>

      <div class="footer-col">
        <h4>${t.resources}</h4>
        <ul>
          <li><a href="${prefix}files/manuals/QGISRed_manualusuario_es.pdf" target="_blank">${t.manual}</a></li>
          <li><a href="${prefix}files/examples/Red1_SI.inp" download>${t.examples}</a></li>
          <li><a href="https://github.com/qgisred/QGISRed/issues" target="_blank" rel="noopener">${t.issues}</a></li>
          <li><a href="https://github.com/qgisred/QGISRed" target="_blank" rel="noopener">GitHub</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>${t.contact}</h4>
        <ul>
          <li><a href="mailto:qgisred@upv.es">qgisred@upv.es</a></li>
        </ul>
        <div class="footer-social" style="margin-top:16px">
          <a href="https://twitter.com/qgisred" target="_blank" rel="noopener" title="Twitter/X" aria-label="Twitter">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://github.com/qgisred/QGISRed" target="_blank" rel="noopener" title="GitHub" aria-label="GitHub">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
          </a>
        </div>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© ${new Date().getFullYear()} QGISRed – IIAMA, UPV. ${t.rights}</span>
      <div class="footer-bottom-links">
        <a href="/${lang}/aviso-legal.html">${t.legal}</a>
        <a href="/${lang}/politica-de-privacidad.html">${t.privacy}</a>
        <a href="/${lang}/politica-de-cookies.html">${t.cookies}</a>
      </div>
    </div>
  </div>
</footer>`;
  }

  /* ── Section anchor nav active state ────────────────────────────────── */
  function initSectionNav() {
    const sectionNav = document.querySelector('.section-nav');
    if (!sectionNav) return;

    const links = Array.from(sectionNav.querySelectorAll('a[href^="#"]'));
    if (!links.length) return;

    const sections = links.map(a => document.querySelector(a.getAttribute('href'))).filter(Boolean);
    if (!sections.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          links.forEach(a => a.classList.remove('active'));
          const active = links.find(a => a.getAttribute('href') === '#' + entry.target.id);
          if (active) active.classList.add('active');
        }
      });
    }, { rootMargin: '-20% 0px -70% 0px' });

    sections.forEach(s => observer.observe(s));
    if (links[0]) links[0].classList.add('active');
  }

  /* ── Mount ───────────────────────────────────────────────────────────── */
  const headerEl = document.getElementById('site-header');
  const footerEl = document.getElementById('site-footer');

  if (headerEl) headerEl.outerHTML = buildHeader();
  if (footerEl) footerEl.outerHTML = buildFooter();

  // Rewrite every absolute link in the page so they work under a sub-path
  // (e.g. GitHub Pages: /qgisred_web/es/ instead of /es/).
  // This handles hardcoded hrefs in breadcrumbs, cards, buttons, etc.
  if (BASE) {
    document.querySelectorAll('a[href^="/"]').forEach(a => {
      const h = a.getAttribute('href');
      if (!h.startsWith(BASE)) a.setAttribute('href', BASE + h);
    });
  }

  injectHreflang();

  document.addEventListener('DOMContentLoaded', initSectionNav);
  // Also try immediately if DOM already loaded
  if (document.readyState !== 'loading') initSectionNav();

})();
