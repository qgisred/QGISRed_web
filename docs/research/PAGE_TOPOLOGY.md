# Page Topology — qgisred.upv.es

## Overall Layout
- Standard vertical scroll page.
- Full-width sections stacking vertically.
- No scroll snap.
- No smooth scroll library (native browser scroll).
- Fixed header overlays all content (z-index: 99).
- Page content has `padding-top` to account for fixed header.

## Sections (Top to Bottom)

### 0. Navbar / Header (fixed overlay)
- **Type:** Fixed sticky overlay
- **Interaction:** Hover dropdowns, language switcher
- **Position:** Fixed, top: 0, z-index: 99
- **Height:** 105px
- **Background:** White (rgb(255,255,255))
- **Component:** `NavBar.tsx`

### 1. Hero Section
- **ID:** (no ID, first section in main)
- **Height:** 810px
- **Background:** Dark map image (`Diapositiva23.png`) — shows a water network map in dark teal/grey
- **Content:** White text heading, subtitle, CTA button ("Saber más")
- **Interaction:** Static + button scrolls to #bajo
- **Component:** `HeroSection.tsx`

### 2. Presentación Section
- **ID:** `bajo`
- **Height:** ~723px
- **Background:** White
- **Layout:** Left text column + right image column (2-col)
- **Content:** Small "QGISRed" label, "Presentación" heading, long paragraph, icon list with 6 items, "Ver más" button
- **Icon list items:** Qué es QGISRed, Antecedentes, Aplicaciones, Instalación, Proyecto en GitHub, Créditos
- **Image:** `4.jpg` (laptop/software screenshot)
- **Interaction:** Static
- **Component:** `PresentacionSection.tsx`

### 3. Capacidades Section
- **Height:** 652px
- **Background:** Photo of industrial installation (`acciona-edar-burgos.jpg`) with dark overlay
- **Content:** Centered white text heading, subtitle paragraph, 5 capability cards in grid, CTA button
- **Cards:** Novedades, Capacidades Destacadas, Prestaciones Actuales, Próximas Prestaciones, Histórico de Versiones
- **Interaction:** Static
- **Component:** `CapacidadesSection.tsx`

### 4. Utilización Section
- **Height:** ~568px
- **Background:** Photo of city map (`3-2.jpg`) with white-left overlay gradient
- **Layout:** Left text column + right image (`Diapositiva26.png`)
- **Content:** Small "CÓMO SE UTILIZA QGISRED" label, "Utilización" heading, paragraph, "Saber más" button
- **Interaction:** Static
- **Component:** `UtilizacionSection.tsx`

### 5. Soporte Cards Section (no heading in section 4 index)
- **Height:** ~896px
- **Background:** White/light
- **Content:** A grid of support service cards with icons and images
- **Cards:** 4 service cards (young female programmer, girl with laptop, man on laptop, wooden dices) — each with title, description, link
- **Interaction:** Static
- **Component:** `SoporteCardsSection.tsx`

### 6. Difusión Section
- **Height:** ~707px
- **Background:** Photo of people in seminar (`diverse-people-in-a-seminar.jpg`) with white left overlay (gradient)
- **Content:** Left column with text: "Difusión" heading, paragraph, multiple CTA buttons (Cursos de Formación, etc.)
- **Interaction:** Static
- **Component:** `DifusionSection.tsx`

### 7. Soporte Section (dark background)
- **Height:** ~849px
- **Background:** Dark navy (`rgb(0, 14, 40)`)
- **Layout:** Left text column + right form
- **Content:** Left: "Soporte" heading, paragraph, bullet list, "Contacta con nosotros" button; Right: contact form
- **Interaction:** Static form
- **Component:** `SoporteSection.tsx`

### 8. Newsletter Section
- **ID:** `newsletter`
- **Height:** ~826px
- **Background:** Light grey (`rgb(246, 246, 246)`)
- **Content:** "Regístrate en nuestra Newsletter..." text, email form with privacy checkbox, reCAPTCHA, submit button, legal text
- **Interaction:** Form submission
- **Component:** `NewsletterSection.tsx`

### 9. Footer
- **Background:** White top area + dark navy bottom bar
- **Layout:** Left logo grid (2x2 logos) + 3 nav columns + social icons
- **Content:** 4 logos, nav links, Twitter + GitHub icons, copyright bar
- **Component:** `Footer.tsx`

## Dependencies
- NavBar fixed overlay sits above all sections.
- Hero section must have `padding-top: 0` — the navbar floats over it.
- Body content starts at scroll position 0 under the fixed navbar.
