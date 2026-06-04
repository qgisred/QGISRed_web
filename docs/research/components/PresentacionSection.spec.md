# PresentacionSection Specification

## Overview
- **Target file:** `src/components/PresentacionSection.tsx`
- **Screenshot:** `docs/design-references/presentacion-section.png`
- **Interaction model:** Static

## DOM Structure
section#bajo > container > [left text column | right image column]

Left column (~50%):
- Small teal label: "QGISRED"
- H2: "Presentación"
- Long paragraph text
- Unordered icon list (6 items, each with teal check/arrow icon)
- Teal CTA button: "Ver más"

Right column (~50%):
- Image of laptop/software screenshot: `4.jpg`

## Computed Styles (exact values from getComputedStyle)

### Section
- id: "bajo"
- paddingTop: 64px
- paddingBottom: 80px
- backgroundColor: rgb(255, 255, 255)
- width: 100%

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- flexDirection: row
- alignItems: center
- gap: 60px

### Left column
- flex: 1
- maxWidth: 50%

### Small label "QGISRED" (above heading)
- fontSize: 12px
- fontWeight: 600
- letterSpacing: 0.15em
- textTransform: uppercase
- color: rgb(95, 189, 211)
- marginBottom: 8px
- display: block

### H2 "Presentación"
- fontSize: 36px
- fontWeight: 700
- color: rgb(0, 9, 25)
- marginBottom: 20px
- lineHeight: 1.2

### Body paragraph
- fontSize: 15px
- fontWeight: 400
- color: rgb(51, 51, 51)
- lineHeight: 1.7
- marginBottom: 24px

### Icon list (ul)
- listStyle: none
- padding: 0
- marginBottom: 32px
- display: flex
- flexDirection: column
- gap: 8px

### Icon list item (li)
- display: flex
- alignItems: center
- gap: 12px
- fontSize: 14px
- color: rgb(0, 9, 25)
- fontWeight: 500

### List item icon (small teal circle)
- width: 8px
- height: 8px
- borderRadius: 50%
- backgroundColor: rgb(126, 167, 40)  — green dot
- flexShrink: 0

### CTA Button "Ver más"
- backgroundColor: rgb(95, 189, 211)
- background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 0.05em
- padding: 12px 32px
- display: inline-block
- cursor: pointer

### Right image column
- flex: 1
- maxWidth: 50%

### Image
- width: 100%
- height: auto
- objectFit: cover
- display: block

## States & Behaviors

### Button hover
- filter: brightness(1.1)
- transition: filter 0.2s ease

### List item link hover
- color: rgb(95, 189, 211)

## Assets
- Right image: `public/images/presentacion-screenshot.jpg`

## Text Content (verbatim)
- Label: "QGISRED"
- Heading: "Presentación"
- Paragraph: "Bienvenido a QGISRed. En esta página encontrarás todo aquello que probablemente desearías conocer al tomar contacto por primera vez con este producto. ¿Qué es y cuáles son los objetivos buscados? ¿Cómo surge? ¿Para qué sirve? ¿Cómo puedo instalarlo? ¿Quiénes están detrás de él?. Te animo a visitar las secciones siguientes de esta página para contestar a todas tus preguntas de principiante."
- List items:
  - "Qué es QGISRed" → /presentacion/#quees
  - "Antecedentes" → /presentacion/#antecedentes
  - "Aplicaciones" → /presentacion/#aplicaciones
  - "Instalación" → /presentacion/#instalacion
  - "Proyecto en GitHub" → /presentacion/#github
  - "Créditos" → /presentacion/#creditos
- Button: "Ver más" → /presentacion/

## Responsive Behavior
- **Desktop (1440px):** Two columns side by side
- **Tablet (768px):** Two columns, narrower gap
- **Mobile (390px):** Single column, image hidden or below text
- **Breakpoint:** ~768px
