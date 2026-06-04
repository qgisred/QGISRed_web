# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/footer-section.png` (bottom portion)
- **Interaction model:** Static

## DOM Structure
footer >
  main-footer (white/light bg, padding) > container >
    [left logos 2x2 grid | nav col 1 | nav col 2 | nav col 3 | social icons]
  copyright-bar (dark navy bg) >
    centered paragraph with copyright text and link

## Computed Styles

### Footer (outer)
- width: 100%
- backgroundColor: transparent (white)

### Main footer section
- paddingTop: 48px
- paddingBottom: 48px
- backgroundColor: rgb(255, 255, 255)
- width: 100%

### Main footer container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- flexDirection: row
- alignItems: flex-start
- gap: 60px

### Logo grid (left column)
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 16px
- width: 260px

### Each logo image
- width: 118px
- height: auto
- objectFit: contain

### Nav column
- display: flex
- flexDirection: column
- gap: 12px

### Nav column heading (if any) — there's no heading, just links

### Nav link
- fontSize: 14px
- color: rgb(0, 9, 25)
- textDecoration: none
- fontWeight: 400
- lineHeight: 1.5

### Nav link hover
- color: rgb(95, 189, 211)

### Social icons column
- display: flex
- flexDirection: column
- alignItems: flex-end
- gap: 8px

### Social icon link
- display: inline-flex
- alignItems: center
- justifyContent: center
- width: 36px
- height: 36px
- backgroundColor: rgb(95, 189, 211)
- borderRadius: 4px
- color: white

### Copyright bar
- backgroundColor: rgb(0, 14, 40)
- paddingTop: 16px
- paddingBottom: 16px
- textAlign: center

### Copyright text
- fontSize: 13px
- color: rgb(255, 255, 255)
- lineHeight: 1.5

### Copyright link "brandinàmic"
- color: rgb(95, 189, 211)
- textDecoration: none

## States & Behaviors

### Nav link hover
- color: rgb(95, 189, 211)
- transition: color 0.2s ease

### Social icon hover
- opacity: 0.85

## Assets
- QGISRed logo: `public/images/footer-logo-qgisred.png`
- RedHisp logo: `public/images/footer-logo-redhisp.png`
- IIAMA logo: `public/images/footer-logo-iiama.png`
- UPV logo: `public/images/footer-logo-upv.png`

## Text Content (verbatim)
Nav column 1:
- Presentación → /presentacion/
- Capacidades → /capacidades/
- Utilización → /utilizacion/

Nav column 2:
- Difusión → /difusion/
- Soporte → /soporte/
- Contacto → /contacto/

Nav column 3:
- Aviso Legal → /aviso-legal/
- Política de Privacidad → /politica-de-privacidad/
- Política de Cookies → /politica-de-cookies/

Social icons:
- Twitter → https://twitter.com/qgisred
- GitHub → (extract URL from page — link visible in footer screenshot)

Copyright: "© 2022 QGISRed Todos los derechos reservados – diseñado por brandinàmic"
brandinàmic link: https://brandinamic.com

## Responsive Behavior
- **Desktop (1440px):** Horizontal layout logos + 3 nav columns + social
- **Mobile (390px):** Stacked layout, logos above, nav below
- **Breakpoint:** ~768px
