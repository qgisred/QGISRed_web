# RecursosSection Specification (Utilización resource cards)

## Overview
- **Target file:** `src/components/RecursosSection.tsx`
- **Screenshot:** `docs/design-references/utilizacion-cards-section.png`
- **Interaction model:** Static, each card is a link

## DOM Structure
section (white/light bg) > container > 2-column major grid:

Left column: 3 resource cards (stacked vertically)
  - Card: image | title heading link
Right column: 3 resource cards (stacked vertically)
  - Card: title heading link | image

Each card is a pair: (photo image) + (title text with link), displayed side by side.

Cards:
- Row 1: Tutoriales (left: photo of programmer, right: title) | Repositorio de Ejemplos (left: title, right: Diapositiva16.png)
- Row 2: Manual del Usuario (left: title, right: girl with laptop photo) — wait, looking at screenshot:
  - Left column: Tutoriales (top), Repositorio de Ejemplos (middle), Manual del Usuario (bottom)
  - Right column: Videos Formativos (top), Modelo de Datos (middle), Preguntas Frecuentes (bottom)

## Computed Styles

### Section
- paddingTop: 16px
- paddingBottom: 48px
- backgroundColor: rgb(255, 255, 255) or very light
- width: 100%

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: grid
- gridTemplateColumns: 1fr 1fr
- gap: 0

### Each card (inner row)
- display: grid
- gridTemplateColumns: 1fr 1fr
- minHeight: 150px
- border: 1px solid rgb(242, 242, 242)

### Card image half
- overflow: hidden

### Card image
- width: 100%
- height: 100%
- objectFit: cover

### Card title half
- display: flex
- alignItems: center
- justifyContent: center
- padding: 20px
- backgroundColor: rgb(255, 255, 255)

### Card title link
- fontSize: 18px
- fontWeight: 600
- color: rgb(0, 9, 25)
- textDecoration: none
- textAlign: center
- lineHeight: 1.3

## States & Behaviors

### Card hover
- The card link color changes to rgb(95, 189, 211)
- Possible image scale transform(1.05) on image

## Assets
Left column images:
- Tutoriales: `public/images/soporte-img1.jpg` (young female programmer)
- Repositorio de Ejemplos: `public/images/presentacion-img3.png` (Diapositiva16)
- Manual del Usuario: `public/images/soporte-img2.jpg` (girl with laptop)

Right column images:
- Videos Formativos: `public/images/soporte-img3.jpg` (man on laptop)
- Modelo de Datos: `public/images/presentacion-img2.png` (Diapositiva13)
- Preguntas Frecuentes: `public/images/soporte-img4.jpg` (wooden dices)

## Text Content (verbatim)
Left column cards:
1. Title: "Tutoriales" → /utilizacion/#tutoriales (image LEFT, title RIGHT)
2. Title: "Repositorio de Ejemplos" → /utilizacion/#repositorioejemplos (title LEFT, image RIGHT)
3. Title: "Manual del Usuario" → /utilizacion/#manualusuario (image LEFT, title RIGHT)

Right column cards:
4. Title: "Videos Formativos" → /utilizacion/#videosformativos (title LEFT, image RIGHT — alternating)
5. Title: "Modelo de Datos" → /utilizacion/#modelodatos (image LEFT, title RIGHT)
6. Title: "Preguntas Frecuentes" → /utilizacion/#preguntasfrecuentes (title LEFT, image RIGHT)

Note: Cards alternate image/title position for visual interest.

## Responsive Behavior
- **Desktop (1440px):** 2 major columns, each card 50/50 split
- **Tablet (768px):** 2 major columns maintained
- **Mobile (390px):** Single column, cards stack
- **Breakpoint:** ~768px
