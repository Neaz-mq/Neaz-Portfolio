export default function About() {
  const facts = [
    { label: "Currently", value: "Web Application Developer", sub: "Prographr Creative Agency" },
    { label: "Based in", value: "Bogura, Bangladesh", sub: "Open to remote" },
    { label: "Education", value: "B.Sc. CSE, IUBAT", sub: "GPA 3.72" },
    { label: "Languages", value: "Bengali (Native)", sub: "English (Professional)" },
  ];

  return (
    <section id="about" className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">

        {/* Top rule + label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-limeglow">
            About
          </span>
          <div className="flex-1 h-px bg-ivory/10" />
          <span className="text-[11px] text-ivory/30 tabular-nums">01</span>
        </div>

        {/* Main statement */}
        <div className="max-w-4xl mb-20">
          <p className="text-3xl font-bold leading-[1.15] tracking-tight sm:text-4xl md:text-5xl">
            MERN Stack Developer focused on{" "}
            <span className="text-ivory/40">impactful web applications.</span>
          </p>
          <p className="mt-6 text-base sm:text-lg text-ivory/50 max-w-2xl leading-relaxed">
            I shipped a wellness SaaS with role-based auth and gamification — and I specialize
            in real-time apps, AI integrations, and clean architecture that scales.
          </p>
        </div>

        {/* Facts grid with left-border cards */}
        <div className="grid grid-cols-2 gap-px bg-ivory/10 border border-ivory/10 md:grid-cols-4">
          {facts.map((fact, i) => (
            <div
              key={i}
              className="bg-ink px-6 py-7 flex flex-col justify-between gap-4 group hover:bg-ivory/[0.04] transition-colors"
            >
              <span className="text-[10px] uppercase tracking-[0.18em] text-ivory/30 font-medium">
                {fact.label}
              </span>
              <div>
                <p className="text-sm font-semibold text-ivory leading-snug">{fact.value}</p>
                <p className="text-sm text-ivory/45 mt-0.5">{fact.sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}