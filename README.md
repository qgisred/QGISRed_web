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
`basePath`, el sitio vive en la raíz del subdominio) y publica el contenido de `out/` en la rama
`deploy`.

El Plesk de `new.qgisred.webs.upv.es` tiene el repositorio enganchado a la rama `deploy` en modo
automático: recibe el webhook de GitHub, hace pull y copia los ficheros a `httpdocs_new`. Todo el
build ocurre en el runner; el servidor solo recibe ficheros compilados y no necesita Node.

El workflow no usa ningún secret configurable, solo el `GITHUB_TOKEN` que GitHub inyecta.

Subir los ficheros por FTPS desde Actions no es viable: el cortafuegos de la UPV deja pasar el
canal de control (puerto 21) pero bloquea el rango de puertos pasivos, y la transferencia muere
con `ECONNRESET` en el socket de datos.

## Licencia

MIT — ver [LICENSE](LICENSE).
