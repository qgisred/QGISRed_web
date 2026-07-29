interface LegalPageLayoutProps {
  title: string;
  children: React.ReactNode;
}

export function LegalPageLayout({ title, children }: LegalPageLayoutProps) {
  return (
    <main style={{ paddingTop: "0" }}>
      <section className="w-full bg-white" style={{ paddingTop: "64px", paddingBottom: "80px" }}>
        <div className="mx-auto" style={{ maxWidth: "900px", padding: "0 clamp(20px, 5vw, 60px)" }}>
          <h1
            className="font-bold mb-8"
            style={{
              fontSize: "clamp(28px, 4vw, 42px)",
              color: "rgb(0, 9, 25)",
              lineHeight: "1.2",
            }}
          >
            {title}
          </h1>
          <div
            className="prose-legal"
            style={{
              fontSize: "14px",
              color: "rgb(51, 51, 51)",
              lineHeight: "1.8",
            }}
          >
            {children}
          </div>
        </div>
      </section>
    </main>
  );
}

interface LegalSectionProps {
  title?: string;
  children: React.ReactNode;
}

export function LegalSection({ title, children }: LegalSectionProps) {
  return (
    <div className="mb-8">
      {title && (
        <h2
          className="font-semibold mb-3"
          style={{
            fontSize: "16px",
            color: "rgb(0, 9, 25)",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          {title}
        </h2>
      )}
      <div style={{ fontSize: "14px", color: "rgb(51, 51, 51)", lineHeight: "1.8" }}>
        {children}
      </div>
    </div>
  );
}
