# NewsletterSection Specification

## Overview
- **Target file:** `src/components/NewsletterSection.tsx`
- **Screenshot:** `docs/design-references/footer-section.png` (top portion)
- **Interaction model:** Static form (no real submission)

## DOM Structure
section#newsletter (light grey bg) > container (centered) >
- Heading paragraph: "Regístrate en nuestra Newsletter..."
- Form:
  - Email input field
  - Checkbox: "He leído y acepto la política de privacidad"
  - reCAPTCHA placeholder widget
  - Submit button: "REGISTRARME"
- Legal text paragraph (small print)

## Computed Styles

### Section
- id: "newsletter"
- backgroundColor: rgb(246, 246, 246)
- paddingTop: 64px
- paddingBottom: 64px
- width: 100%

### Container
- maxWidth: 800px
- margin: 0 auto
- padding: 0 60px
- textAlign: center

### Newsletter heading paragraph
- fontSize: 20px
- fontWeight: 600
- color: rgb(0, 9, 25)
- marginBottom: 32px
- lineHeight: 1.4

### Form
- display: flex
- flexDirection: column
- gap: 16px
- textAlign: left

### Email input
- width: 100%
- padding: 14px 16px
- fontSize: 14px
- color: rgb(34, 34, 34)
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgb(193, 193, 193)
- borderRadius: 2px

### Checkbox row
- display: flex
- alignItems: center
- gap: 10px
- fontSize: 14px
- color: rgb(51, 51, 51)

### Privacy link
- color: rgb(95, 189, 211)
- textDecoration: none

### reCAPTCHA container
- marginTop: 8px
- (placeholder box showing reCAPTCHA UI)

### Submit button "REGISTRARME"
- width: 100%
- backgroundColor: rgb(95, 189, 211)
- background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%)
- color: rgb(255, 255, 255)
- fontSize: 13px
- fontWeight: 700
- textTransform: uppercase
- letterSpacing: 0.1em
- padding: 16px
- border: none
- cursor: pointer
- marginTop: 8px

### Legal text
- fontSize: 10px
- color: rgb(95, 189, 211)  — links in teal
- lineHeight: 1.5
- marginTop: 16px
- textAlign: left

## States & Behaviors

### Input focus
- outline: 2px solid rgb(95, 189, 211)

### Button hover
- filter: brightness(1.1)

## Text Content (verbatim)
- Heading: "Regístrate en nuestra Newsletter para estar al día de todas las novedades"
- Email placeholder: "Email*"
- Checkbox label: "He leído y acepto la política de privacidad"
- Privacy link: "política de privacidad" → /politica-de-privacidad/
- Button: "REGISTRARME"
- Legal text:
  "INFORMACIÓN BÁSICA SOBRE PROTECCIÓN DE DATOS RESPONSABLE DEL TRATAMIENTO
  RESPONSABLE: Fernando Martínez Alzamora
  FINALIDAD: Envío de emails informativos sobre novedades de QGISRed y formaciones.
  LEGITIMACIÓN: Su consentimiento
  DESTINATARIOS: Los datos no se cederán a terceros salvo en los casos en los que exista una obligación legal o comunicación necesaria para dar contestación a su consulta.
  DERECHOS: Puede ejercer sus Derechos a acceder, rectificar, oponerse, limitar, portar y suprimir los datos ante el responsable del tratamiento; además de acudir a la autoridad de control competente (AEPD).
  INFORMACIÓN ADICIONAL: Puede consultar la información adicional sobre el tratamiento de sus datos personales aquí."

## Responsive Behavior
- **Desktop (1440px):** Centered form, max-width 800px
- **Mobile (390px):** Full-width form
- **Breakpoint:** ~768px
