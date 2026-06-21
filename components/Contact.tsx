export default function Contact() {
  const links = [
    { label: "GitHub", href: "https://github.com/Neaz-mq" },
    { label: "LinkedIn", href: "https://linkedin.com/in/neaz-morshed" },
    { label: "Fiverr", href: "https://fiverr.com/neaztech" },
    { label: "Upwork", href: "https://upwork.com/neazmorshed" },
  ];
  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-ivory">
      <div className="dot-grid absolute inset-0 opacity-10" aria-hidden />
      <div className="relative mx-auto max-w-6xl px-6 py-24 text-center">
        <span className="text-xs font-medium uppercase tracking-widest text-limeglow">Let&apos;s talk</span>
        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
          Have a project in mind?
        </h2>
        <p className="mt-5 mx-auto max-w-xl text-ivory/70">
          I&apos;m currently available for freelance work and full-time roles. Reach out — I reply within 24 hours.
        </p>
        <a
          href="mailto:neazmorshed666@gmail.com"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-limeglow px-7 py-4 text-base font-semibold text-ink hover:bg-ivory transition-colors"
        >
          neazmorshed666@gmail.com →
        </a>
        <ul className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a
                className="text-ivory/70 hover:text-limeglow transition-colors"
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {l.label} ↗
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}