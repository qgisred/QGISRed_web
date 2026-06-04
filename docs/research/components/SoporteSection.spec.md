# SoporteSection Specification

## Overview
- **Target file:** `src/components/SoporteSection.tsx`
- **Screenshot:** `docs/design-references/difusion-soporte-sections.png` (bottom portion)
- **Interaction model:** Static with form (no real backend)

## DOM Structure
section (dark navy background) > container (2 columns) > [left text | right contact form]

Left column:
- H2: "Soporte"
- Paragraph text
- Bullet list (green dots)
- CTA button: "Contacta con nosotros"

Right column:
- Contact form with multiple fields (visual mock)

## Computed Styles

### Section
- width: 100%
- height: 849px
- backgroundColor: rgb(0, 14, 40)  — dark navy
- paddingTop: 64px
- paddingBottom: 64px

### Container
- maxWidth: 1280px
- margin: 0 auto
- padding: 0 60px
- display: flex
- flexDirection: row
- gap: 60px
- alignItems: flex-start

### Left column
- flex: 1
- maxWidth: 45%

### H2 "Soporte"
- fontSize: 40px
- fontWeight: 700
- color: rgb(255, 255, 255)
- marginBottom: 20px
- lineHeight: 1.2

### Body paragraph
- fontSize: 15px
- color: rgba(255, 255, 255, 0.85)
- lineHeight: 1.7
- marginBottom: 24px

### Bullet list
- listStyle: none
- padding: 0
- marginBottom: 32px
- display: flex
- flexDirection: column
- gap: 8px

### Bullet list item
- display: flex
- alignItems: center
- gap: 12px
- fontSize: 14px
- color: rgb(255, 255, 255)

### Bullet dot
- width: 8px
- height: 8px
- borderRadius: 50%
- backgroundColor: rgb(95, 189, 211)
- flexShrink: 0

### CTA Button "Contacta con nosotros"
- backgroundColor: rgb(95, 189, 211)
- color: white
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- padding: 12px 32px

### Right column (form area)
- flex: 1
- maxWidth: 55%

### Form field (text input)
- width: 100%
- backgroundColor: rgb(255, 255, 255)
- border: 1px solid rgb(193, 193, 193)
- padding: 12px 16px
- fontSize: 14px
- color: rgb(34, 34, 34)
- marginBottom: 16px
- borderRadius: 2px

### Form submit button
- width: 100%
- backgroundColor: rgb(95, 189, 211)
- color: white
- fontSize: 13px
- fontWeight: 600
- textTransform: uppercase
- padding: 14px
- cursor: pointer

## States & Behaviors

### Form input focus
- outline: 2px solid rgb(95, 189, 211)
- border-color: rgb(95, 189, 211)

## Text Content (verbatim)
- Heading: "Soporte"
- Paragraph: "El objetivo de esta sección es dar soporte a cualquier usuario de QGISRed. Aunque la aplicación es libre, no por ello está desatendida. Encontrarás aquí varios niveles de ayuda para sentirte apoyado en el uso de la aplicación."
- Bullet list:
  - "Incidencias"
  - "Foro"
  - "Soporte Técnico"
  - "Servicios a Empresas"
  - "Participación en Proyectos"
- Button: "Contacta con nosotros" → /contacto/
- Form fields: Nombre*, Email*, Empresa, Teléfono, Mensaje (textarea), Submit

## Responsive Behavior
- **Desktop (1440px):** Two columns
- **Mobile (390px):** Single column, form below text
- **Breakpoint:** ~768px
