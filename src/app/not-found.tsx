"use client";

import { usePathname } from "next/navigation";
import { routing, type Locale } from "@/i18n/routing";
import esMessages from "../../messages/es.json";
import enMessages from "../../messages/en.json";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
const copy: Record<Locale, typeof esMessages.notFound> = {
  es: esMessages.notFound,
  en: enMessages.notFound,
};

function detectLocale(pathname: string | null): Locale {
  const path = pathname?.startsWith(basePath) ? pathname.slice(basePath.length) : pathname;
  return path === "/en" || path?.startsWith("/en/") ? "en" : routing.defaultLocale;
}

// This is the single static 404.html served by the host for every unmatched
// URL (see static export docs), so there is no build-time way to know the
// locale — `usePathname` reads the browser's actual URL once this hydrates,
// per Next's own guidance for path-based content in not-found pages.
export default function NotFound() {
  const locale = detectLocale(usePathname());
  const t = copy[locale];

  return (
    <html lang={locale}>
      <head>
        <title>{t.title}</title>
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
            padding: 24px;
            box-sizing: border-box;
          }
          .card {
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 16px;
            text-align: center;
            max-width: 420px;
          }
          .code {
            margin: 0;
            font-size: 14px;
            font-weight: 600;
            letter-spacing: 0.08em;
            color: rgb(95, 189, 211);
          }
          h1 {
            margin: 0;
            font-size: 28px;
            color: rgb(0, 14, 40);
          }
          p.description {
            margin: 0;
            color: rgb(0, 14, 40);
            opacity: 0.75;
            line-height: 1.6;
          }
          .button {
            margin-top: 8px;
            display: inline-block;
            color: #ffffff;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 0.08em;
            font-size: 13px;
            text-decoration: none;
            padding: 12px 32px;
            background: linear-gradient(135deg, rgb(95, 189, 211) 0%, rgb(95, 189, 211) 100%);
          }
        `}</style>
      </head>
      <body>
        <div className="card">
          <p className="code">404</p>
          <h1>{t.title}</h1>
          <p className="description">{t.description}</p>
          <a className="button" href={`${basePath}/${locale}/`}>
            {t.backHome}
          </a>
        </div>
      </body>
    </html>
  );
}
