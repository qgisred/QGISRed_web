# Behavior Bible — qgisred.upv.es

## Scroll Behavior
- The header/navbar is `position: fixed`, `z-index: 99`, always on top.
- No scroll-driven animations detected (no IntersectionObserver animations, no Lenis/Locomotive scroll library found).
- No scroll-snap points detected.
- Background sections use CSS `background-image` with `background-attachment: scroll` (not parallax).

## Navbar Behavior
- Fixed at top, white background `rgb(255, 255, 255)`, height ~105px.
- Contains logo (left), main nav (center), language switcher (right).
- Nav items with dropdowns (`has-submenu` class) show submenus on hover (CSS).
- No scroll-triggered state change observed for navbar.
- Top-level nav items: Inicio, Presentación (dropdown), Capacidades (dropdown), Utilización (dropdown), Difusión (dropdown), Soporte (dropdown), Contacto.
- Language switcher: Español / English.

## Click Sweep
- Nav items have dropdown submenus on hover/click.
- "Saber más" button in hero scrolls to `#bajo` (smooth scroll anchor).
- "Ver más", "Ver todo sobre las capacidades", "Saber más", "Contacta con nosotros" — all are anchor links to other pages.
- Newsletter form has an email field, privacy checkbox, reCAPTCHA, and submit button.
- Capacidades section has 5 cards with icons — static display, not interactive tabs.

## Hover Behavior
- Buttons: background-color brightens slightly on hover, all buttons use `rgb(95, 189, 211)` (teal/cyan) as primary color.
- Nav links: color change on hover, current page item has distinct active style.
- Cards: subtle hover effect (box-shadow increase probable based on layout).
- Footer links: color change on hover.

## Responsive Behavior
- Desktop (1440px): Fixed header with horizontal nav, multi-column sections.
- Tablet (768px): Nav collapses to hamburger menu, single column content.
- Mobile (390px): Full mobile layout, hamburger menu, stacked columns.
- There is a mobile-specific header section duplicated in DOM (elementor pattern).

## Animations
- Elementor's `slideInLeft` and `fadeInLeft`, `fadeInRight` animation classes are loaded but whether they trigger on scroll depends on viewport — standard Elementor scroll animation.
- No heavy JS animation libraries detected.
- Section transitions: none, just CSS background images.

## Key Interactive Elements
- Cookie consent banner (dismissable).
- Newsletter form with reCAPTCHA widget.
- Dropdown navigation menus.
- Anchor links for section navigation.
