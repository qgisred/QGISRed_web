import { routing } from "@/i18n/routing";

const target = `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}/${routing.defaultLocale}/`;

// The root layout is a pass-through (the real <html>/<body> live in [locale]/layout.tsx),
// so this page must render a full document itself, with its own inline styles —
// globals.css is only imported by [locale]/layout.tsx. Static export can't use
// middleware, hence the meta refresh to the default locale.
export default function RootPage() {
  return (
    <html lang={routing.defaultLocale}>
      <head>
        <meta httpEquiv="refresh" content={`0; url=${target}`} />
        <style>{`
          html, body {
            height: 100%;
            margin: 0;
          }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            background: #ffffff;
            font-family: system-ui, sans-serif;
          }
          .loader {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 20px;
          }
          .spinner {
            width: 44px;
            height: 44px;
            border-radius: 50%;
            border: 3px solid rgb(246, 246, 246);
            border-top-color: rgb(95, 189, 211);
            animation: spin 0.8s linear infinite;
          }
          .brand {
            color: rgb(0, 14, 40);
            font-size: 14px;
            letter-spacing: 0.08em;
            text-decoration: none;
            opacity: 0.85;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
      </head>
      <body>
        <a className="loader" href={target}>
          <span className="spinner" />
          <span className="brand">QGISRed</span>
        </a>
      </body>
    </html>
  );
}
