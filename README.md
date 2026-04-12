# qgisred_web

Sitio web estático de [qgisred.upv.es](https://qgisred.upv.es), migrado desde WordPress a HTML/CSS/JS puro. Bilingüe (ES/EN), sin frameworks ni herramientas de compilación.

## Requisitos

- [Node.js](https://nodejs.org/) v18 o superior (solo para levantar el servidor local de desarrollo)

## Levantar el servidor local

```bash
# 1. Instalar dependencias (solo la primera vez)
npm install

# 2. Arrancar el servidor
npm run dev
```

El sitio queda disponible en **http://localhost:3000**.

La raíz (`/`) redirige automáticamente a `/es/`. El idioma se cambia desde el selector del header en cualquier página.

## Estructura del proyecto

```
qgisred_web/
├── index.html              # Redirect raíz → /es/
├── 404.html
├── assets/
│   ├── css/main.css        # Hoja de estilos única
│   ├── js/components.js    # Inyecta header y footer en todas las páginas
│   └── img/                # Imágenes organizadas por categoría
│       ├── logos/
│       ├── sections/
│       ├── capacidades/
│       ├── team/
│       ├── noticias/
│       └── ui/
├── files/
│   ├── manuals/            # PDFs del manual de usuario (ES y EN)
│   └── examples/           # Fichero Red1_SI.inp
├── es/                     # Páginas en español
│   ├── index.html
│   ├── presentacion.html
│   ├── capacidades.html
│   ├── novedades-0.16.html
│   ├── novedades-0.17.html
│   ├── capacidad-*.html    # Páginas de detalle de capacidades destacadas
│   ├── utilizacion.html
│   ├── difusion.html
│   ├── soporte.html
│   ├── contacto.html
│   ├── aviso-legal.html
│   ├── politica-de-privacidad.html
│   └── politica-de-cookies.html
└── en/                     # Páginas en inglés (misma estructura)
    ├── index.html
    ├── presentation.html
    ├── capabilities.html
    ├── news-0.16.html
    ├── news-0.17.html
    ├── capability-*.html
    ├── usage.html
    ├── diffusion.html
    ├── support.html
    └── contact.html
```

## Archivos pendientes de añadir

Los siguientes archivos no están incluidos en el repositorio y hay que obtenerlos del sitio vivo:

| Archivo | Origen |
|---|---|
| `files/manuals/QGISRed_manualusuario_es.pdf` | https://qgisred.upv.es |
| `files/manuals/QGISRed_manualusuario_en.pdf` | https://qgisred.upv.es |
| `files/examples/Red1_SI.inp` | https://qgisred.upv.es |

## Cómo funciona el sistema de componentes

El header y el footer se generan dinámicamente mediante `assets/js/components.js`. Cada página HTML declara dos atributos en su `<body>`:

```html
<body data-page="presentacion" data-lang="es">
```

- `data-lang`: idioma de la página (`es` o `en`)
- `data-page`: clave de la página, usada para marcar el ítem activo en la navegación y para calcular el enlace del selector de idioma

No se necesita ningún proceso de compilación: el JS se ejecuta en el navegador al cargar cada página.

## Despliegue en producción

El sitio es HTML estático puro y puede alojarse en cualquier servidor web (Apache, Nginx, GitHub Pages, Netlify, Vercel…) simplemente copiando el contenido de esta carpeta, sin `node_modules` ni `package.json`.

La carpeta `old/` contiene el backup del servidor WordPress original y no debe publicarse.
