export default function About() {
  return (
    <section id="about" className="border-y border-ink/10 bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <h2 className="text-sm font-medium uppercase tracking-widest text-limeglow">About</h2>
          <div>
            <p className="text-2xl leading-snug md:text-3xl">
              MERN Stack Developer focused on impactful web applications. I shipped a wellness SaaS with
              role-based auth and gamification, and I specialize in real-time apps, AI integrations, and clean architecture.
            </p>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ivory/50">Currently</h3>
                <p className="mt-2">Web Application Developer at <strong>Prographr Creative Agency</strong></p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ivory/50">Based in</h3>
                <p className="mt-2">Bogura, Bangladesh — open to remote</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ivory/50">Education</h3>
                <p className="mt-2">B.Sc. CSE, IUBAT — GPA 3.72</p>
              </div>
              <div>
                <h3 className="text-xs uppercase tracking-widest text-ivory/50">Languages</h3>
                <p className="mt-2">Bengali (Native), English (Professional)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}