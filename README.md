# QGISRed Web

Sitio web público de QGISRed. Next.js 16 (App Router) con exportación estática y despliegue en Plesk.

## Requisitos

- Node.js 24 o superior (ver `.nvmrc`)

## Puesta en marcha

```bash
npm install
npm run dev
```

El sitio queda disponible en http://localhost:3000 y redirige a `/es`.

## Scripts

| Comando | Descripción |
| --- | --- |
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Build estático → `out/` |
| `npm run start` | Sirve el build de producción |
| `npm run lint` | ESLint |
| `npm run typecheck` | Comprobación de tipos |
| `npm run check` | lint + typecheck + build |

## Idiomas

El sitio usa `next-intl` con dos idiomas: `es` (por defecto) y `en`.

- Los textos viven en `messages/es.json` y `messages/en.json`.
- Al añadir una clave hay que añadirla en **ambos** archivos.
- Los enlaces internos deben usar los helpers de `src/i18n/navigation.ts` para conservar el idioma activo.

## Estructura

```
src/
  app/
    [locale]/       # Rutas localizadas
    globals.css     # Tema Tailwind v4 + tokens de marca
  components/       # Componentes de secciones y páginas
  data/             # Contenido estático
  i18n/             # Configuración de next-intl
  proxy.ts          # Middleware de idioma
messages/           # Catálogos de traducción
public/             # Imágenes y assets de SEO
```

## Despliegue

Cada push a `master` dispara `.github/workflows/deploy.yml`, que genera el export estático (sin
`basePath`, el sitio vive en la raíz del subdominio) y sube el contenido de `out/` por FTPS al
docroot del Plesk de `new.qgisred.webs.upv.es`.

Todo el trabajo ocurre en el runner de GitHub: el servidor solo recibe ficheros ya compilados, no
ejecuta ningún build ni necesita Node.

Credenciales en *Settings → Secrets and variables → Actions*: los secrets `FTP_SERVER`,
`FTP_USERNAME` y `FTP_PASSWORD`, y la variable `FTP_SERVER_DIR` con la ruta del docroot.

## Licencia

MIT — ver [LICENSE](LICENSE).
