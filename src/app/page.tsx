import { routing } from "@/i18n/routing";

const target = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${routing.defaultLocale}/`;

// The root layout is a pass-through (the real <html>/<body> live in [locale]/layout.tsx),
// so this page must render a full document itself. Static export can't use middleware,
// hence the meta refresh to the default locale.
export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
      </head>
      <body>
        <a href={target}>QGISRed</a>
      </body>
    </html>
  );
}
