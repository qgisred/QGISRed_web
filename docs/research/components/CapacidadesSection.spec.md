# CapacidadesSection Specification

## Overview
- **Target file:** `src/components/CapacidadesSection.tsx`
- **Screenshot:** `docs/design-references/capacidades-section.png`
- **Interaction model:** Static

## DOM Structure
section (dark background photo) > container (centered text + cards grid) >
- H2: "Capacidades de QGISRed"
- Subtitle paragraph (white text)
- Grid of 5 capability cards (2+3 or responsive grid)
- CTA button: "Ver todo sobre las capacidades"

## Computed Styles (exact values from getComputedStyle)

### Section
- width: 100%
- height: 652px
- backgroundImage: url("/images/capacidades-bg.jpg")
- backgroundSize: cover
- backgroundPosition: center
- backgroundRepeat: no-repeat
- paddingTop: 80px
- paddingBottom: 32px
- display: flex
- alignItems: flex-start (content top-aligned)
- position: relative

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- textAlign: center
- display: flex
- flexDirection: column
- alignItems: center

### H2 "Capacidades de QGISRed"
- fontSize: 40px
- fontWeight: 700
- color: rgb(255, 255, 255)
- marginBottom: 16px
- lineHeight: 1.2

### Subtitle paragraph
- fontSize: 16px
- color: rgb(255, 255, 255)
- lineHeight: 1.6
- marginBottom: 40px
- maxWidth: 700px

### Cards grid
- display: grid
- gridTemplateColumns: repeat(3, 1fr) — desktop (2 top + 3 bottom? or 3+2)
- gap: 20px
- width: 100%
- marginBottom: 40px

### Individual card
- backgroundColor: rgba(255, 255, 255, 0.95)
- borderRadius: 4px
- padding: 24px
- display: flex
- flexDirection: column
- alignItems: flex-start
- gap: 12px
- cursor: pointer
- transition: box-shadow 0.2s ease

### Card icon container
- width: 40px
- height: 40px
- marginBottom: 8px

### Card title
- fontSize: 16px
- fontWeight: 600
- color: rgb(0, 9, 25)
- lineHeight: 1.3

### CTA Button "Ver todo sobre las capacidades"
- backgroundColor: rgb(95, 189, 211)
- background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 0.05em
- padding: 12px 32px
- display: inline-block

## States & Behaviors

### Card hover
- boxShadow: 0 8px 24px rgba(0, 9, 25, 0.2)
- transition: box-shadow 0.2s ease

## Assets
- Background image: `public/images/capacidades-bg.jpg`

## Text Content (verbatim)
- Heading: "Capacidades de QGISRed"
- Subtitle: "Estarás ansioso por saber qué capacidades ofrece al usuario el plugin QGISRed. En esta sección te las contamos. Pero puesto que es un producto aún en desarrollo, iniciado hace algunos años, lo vamos a hacer por etapas."
- Cards (5 items):
  1. "Novedades" → /capacidades/#novedades
  2. "Capacidades Destacadas" → /capacidades/#capacidadesdestacadas
  3. "Prestaciones Actuales" → /capacidades/#prestacionesactuales
  4. "Próximas Prestaciones" → /capacidades/#proximasprestaciones
  5. "Histórico de Versiones" → /capacidades/#historicodeversiones
- Button: "Ver todo sobre las capacidades" → /capacidades/

## Responsive Behavior
- **Desktop (1440px):** Cards in 2+3 layout (2 on first row, 3 on second), centered
- **Tablet (768px):** 2 columns grid
- **Mobile (390px):** 1 column stack
- **Breakpoint:** ~768px
