# NavBar Specification

## Overview
- **Target file:** `src/components/NavBar.tsx`
- **Screenshot:** `docs/design-references/hero-section.png` (top portion)
- **Interaction model:** Static with hover dropdowns; fixed position overlay

## DOM Structure
header > section (fixed) > div.container (flex row) > [logo col | nav col | language col]

- Left column (33%): Logo image linked to homepage
- Center column (33%): Horizontal nav menu with dropdown items
- Right column (33%): Language switcher dropdown (Español/English)

## Computed Styles (exact values from getComputedStyle)

### Header / outer wrapper
- position: fixed
- top: 0
- left: 0
- right: 0
- z-index: 99
- width: 100%
- height: 105px
- backgroundColor: rgb(255, 255, 255)
- transition: background 0.3s, border 0.3s, border-radius 0.3s, box-shadow 0.3s

### Inner container
- display: flex
- flexDirection: row
- alignItems: center
- maxWidth: 1280px
- margin: 0 auto
- padding: 12px 60px
- height: 81px

### Logo image
- width: auto
- height: 60px (approx, as loaded image is 234x119 natural)
- objectFit: contain

### Nav links (top level)
- fontSize: 15px
- fontWeight: 500
- fontFamily: "Work Sans", sans-serif
- color: rgb(0, 9, 25)
- padding: 8px 12px
- textDecoration: none
- display: inline-flex
- alignItems: center
- gap: 4px

### Nav link (active/current page)
- color: rgb(0, 9, 25)
- fontWeight: 600

### Dropdown submenu container
- backgroundColor: rgb(255, 255, 255)
- boxShadow: 0 4px 20px rgba(0, 9, 25, 0.13)
- padding: 8px 0
- position: absolute
- top: 100%
- left: 0
- minWidth: 200px
- zIndex: 100
- display: none (visible on hover)

### Dropdown submenu item
- fontSize: 14px
- fontWeight: 400
- color: rgb(0, 9, 25)
- padding: 8px 20px
- display: block

## States & Behaviors

### Hover on nav item with submenu
- **Trigger:** Mouse hover on top-level nav item with `has-submenu` class
- **State A (before):** submenu display: none
- **State B (after):** submenu display: block (or block with opacity transition)
- **Transition:** instant show on hover
- **Implementation approach:** CSS :hover + group-hover pattern

### Active nav item
- Current page link has stronger styling (color: rgb(95, 189, 211) or fontWeight: 700)

## Assets
- Logo image: `public/images/logo-qgisred.jpeg`

## Text Content (verbatim)
Top-level nav items: Inicio | Presentación | Capacidades | Utilización | Difusión | Soporte | Contacto | Español

Presentación submenu: Qué es QGISRed, Antecedentes, Aplicaciones, Instalación, Proyecto en GitHub, Créditos
Capacidades submenu: Novedades, Capacidades Destacadas, Prestaciones Actuales, Próximas Prestaciones, Histórico de Versiones
Utilización submenu: Manual del Usuario, Tutoriales, Vídeos Formativos, Repositorio de Ejemplos, Modelo de Datos
Difusión submenu: Cursos de Formación, Publicaciones, Noticias y Redes Sociales
Soporte submenu: Incidencias, Foro, Soporte Técnico, Servicios a Empresas, Participación en Proyectos
Español submenu: Español (https://qgisred.upv.es/), English (https://qgisred.upv.es/en/)

## Responsive Behavior
- **Desktop (1440px):** Full horizontal nav visible
- **Tablet (768px):** Hamburger menu replaces nav
- **Mobile (390px):** Hamburger menu, logo visible
- **Breakpoint:** ~768px
