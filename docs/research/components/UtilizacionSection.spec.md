# UtilizacionSection Specification

## Overview
- **Target file:** `src/components/UtilizacionSection.tsx`
- **Screenshot:** `docs/design-references/utilizacion-section.png`
- **Interaction model:** Static

## DOM Structure
section (city map background photo with white-left gradient overlay) > container > [left text column | right image column]

Left column:
- Small uppercase label: "CÓMO SE UTILIZA QGISRED"
- H2: "Utilización"
- Paragraph text
- CTA button: "Saber más"

Right column:
- Image: `Diapositiva26.png` (software UI screenshot)

## Computed Styles (exact values from getComputedStyle)

### Section
- width: 100%
- height: 568px
- backgroundImage: url("/images/utilizacion-bg.jpg")
- backgroundSize: cover
- backgroundPosition: center right
- backgroundRepeat: no-repeat
- paddingTop: 112px
- paddingBottom: 112px
- position: relative

### Background overlay (pseudo-element or div)
- position: absolute
- top: 0; left: 0; right: 0; bottom: 0
- background: linear-gradient(120deg, rgb(255, 255, 255) 30%, rgba(30, 30, 32, 0) 60%)
- pointerEvents: none

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- flexDirection: row
- alignItems: center
- gap: 60px
- position: relative
- zIndex: 1

### Left column
- flex: 1
- maxWidth: 45%

### Small label "CÓMO SE UTILIZA QGISRED"
- fontSize: 11px
- fontWeight: 600
- letterSpacing: 0.15em
- textTransform: uppercase
- color: rgb(95, 189, 211)
- marginBottom: 8px
- display: block

### H2 "Utilización"
- fontSize: 36px
- fontWeight: 700
- color: rgb(0, 9, 25)
- marginBottom: 20px
- lineHeight: 1.2

### Body paragraph
- fontSize: 15px
- color: rgb(51, 51, 51)
- lineHeight: 1.7
- marginBottom: 32px

### CTA Button "Saber más"
- backgroundColor: rgb(95, 189, 211)
- background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- letterSpacing: 0.05em
- padding: 12px 32px
- display: inline-block

### Right image column
- flex: 1
- maxWidth: 55%

### Image
- width: 100%
- height: auto
- objectFit: contain

## States & Behaviors

### Button hover
- filter: brightness(1.1)
- transition: filter 0.2s ease

## Assets
- Section background: `public/images/utilizacion-bg.jpg`
- Right column image: `public/images/utilizacion-img.png`

## Text Content (verbatim)
- Label: "CÓMO SE UTILIZA QGISRED"
- Heading: "Utilización"
- Paragraph: "Probablemente sea esta la sección más importante de toda la página, pues te enseñará cómo utilizar y sacar provecho de QGISRed. Pero la estamos construyendo poco a poco, así que en el futuro tendrá bastante más contenido. Por ahora la mayor fuente de información es el Manual, que tienes al final de esta sección."
- Button: "Saber más" → /utilizacion/

## Responsive Behavior
- **Desktop (1440px):** Left text + right image, white gradient left half
- **Tablet (768px):** Narrower columns, gradient still visible
- **Mobile (390px):** Single column, image hidden or below text
- **Breakpoint:** ~768px
