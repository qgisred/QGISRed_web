# DifusionSection Specification

## Overview
- **Target file:** `src/components/DifusionSection.tsx`
- **Screenshot:** `docs/design-references/difusion-soporte-sections.png` (top portion)
- **Interaction model:** Static

## DOM Structure
section (seminar photo background with white left gradient overlay) > container > left text column (content only on left ~50%)

Left column:
- H2: "Difusión"
- Paragraph text
- Multiple CTA buttons (stacked)

## Computed Styles

### Section
- width: 100%
- height: 707px
- backgroundImage: url("/images/difusion-bg.jpg")
- backgroundSize: cover
- backgroundPosition: center right
- backgroundRepeat: no-repeat
- position: relative

### Background overlay
- position: absolute
- top: 0; left: 0; right: 0; bottom: 0
- background: linear-gradient(120deg, rgb(255, 255, 255) 30%, rgba(30, 30, 32, 0) 60%)
- pointerEvents: none

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- alignItems: center
- height: 100%
- position: relative
- zIndex: 1

### Left text column
- maxWidth: 480px

### H2 "Difusión"
- fontSize: 40px
- fontWeight: 700
- color: rgb(0, 9, 25)
- marginBottom: 20px
- lineHeight: 1.2

### Body paragraph
- fontSize: 15px
- color: rgb(51, 51, 51)
- lineHeight: 1.7
- marginBottom: 32px

### CTA Buttons (stacked, each teal)
- Same button style as other sections
- backgroundColor: rgb(95, 189, 211)
- background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: white
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- padding: 12px 32px
- display: inline-block
- marginBottom: 12px

## States & Behaviors

### Button hover
- filter: brightness(1.1)

## Assets
- Background: `public/images/difusion-bg.jpg`

## Text Content (verbatim)
- Heading: "Difusión"
- Paragraph: "En esta sección se recogen aquellas actividades destinadas a dar difusión de la aplicación QGISRed, destacando los Cursos de Formación, cuya programación se irá anunciando oportunamente. Además, se recogen también las Publicaciones realizadas en torno a QGISRed, así como las Noticias y Redes Sociales."
- Buttons:
  - "Cursos de Formación" → /difusion/#cursos
  - "Publicaciones" → /difusion/#publicaciones
  - "Noticias y Redes Sociales" → /difusion/#noticias

## Responsive Behavior
- **Desktop (1440px):** Left text, right photo visible
- **Mobile (390px):** Full-width, gradient covers background
- **Breakpoint:** ~768px
