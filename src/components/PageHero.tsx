interface PageHeroProps {
  title: string;
  backgroundImage: string;
  overlayOpacity?: number;
  overlayColor?: string;
}

export function PageHero({
  title,
  backgroundImage,
  overlayOpacity = 0.6,
  overlayColor = "rgb(0, 9, 25)",
}: PageHeroProps) {
  return (
    <section
      className="relative w-full flex items-center justify-center"
      style={{
        backgroundImage: `url("${backgroundImage}")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "380px",
        paddingTop: "105px",
      }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ backgroundColor: overlayColor, opacity: overlayOpacity }}
      />
      <div className="relative z-10 text-center px-6">
        <h1
          className="font-bold text-white leading-tight"
          style={{
            fontSize: "clamp(36px, 5vw, 64px)",
            lineHeight: "1.15",
          }}
        >
          {title}
        </h1>
      </div>
    </section>
  );
}
