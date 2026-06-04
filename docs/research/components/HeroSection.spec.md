# HeroSection Specification

## Overview
- **Target file:** `src/components/HeroSection.tsx`
- **Screenshot:** `docs/design-references/hero-section.png`
- **Interaction model:** Static, button scrolls to #bajo

## DOM Structure
section (full width, 810px tall) > container (max-width 1280px) > [text column left | empty right]

- Full-width section with dark network map background image
- Content positioned in left ~60% of width
- Heading (h1 or h2): "Modelado de redes hidráulicas desde QGIS"
- Subtitle paragraph
- CTA button: "Saber más" → scrolls to #bajo

## Computed Styles (exact values from getComputedStyle)

### Section container
- width: 100%
- height: 810px
- backgroundImage: url("/images/hero-bg.png")
- backgroundSize: cover
- backgroundPosition: center
- backgroundRepeat: no-repeat
- display: flex
- alignItems: center
- paddingTop: 105px (account for fixed navbar)

### Inner container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- alignItems: center

### Content column (left)
- width: 60%
- paddingRight: 40px

### Heading
- fontSize: 48px (approx from visual)
- fontWeight: 700
- fontFamily: "Work Sans", sans-serif
- color: rgb(255, 255, 255)
- lineHeight: 1.2
- marginBottom: 20px

### Subtitle paragraph
- fontSize: 18px
- fontWeight: 400
- color: rgb(255, 255, 255)
- lineHeight: 1.6
- marginBottom: 32px
- maxWidth: 500px

### CTA Button "Saber más"
- backgroundColor: rgb(95, 189, 211)  — via linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 0.05em
- padding: 12px 32px
- border: none
- cursor: pointer
- display: inline-block

## States & Behaviors

### Button hover
- **Trigger:** hover
- **State A:** opacity: 1
- **State B:** opacity: 0.9 / filter: brightness(1.1)
- **Transition:** opacity 0.2s ease

## Assets
- Background image: `public/images/hero-bg.png`

## Text Content (verbatim)
- Heading: "Modelado de redes hidráulicas desde QGIS"
- Subtitle: "Extensión libre de QGIS para construir y analizar Modelos Avanzados de Redes de Distribución de Agua y Gemelos Digitales"
- Button: "Saber más"

## Responsive Behavior
- **Desktop (1440px):** Left-aligned text, 60% width column, button below
- **Tablet (768px):** Full-width text column, centered
- **Mobile (390px):** Full-width, text and button stacked, heading smaller (~32px)
- **Breakpoint:** ~768px
