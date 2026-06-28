export default function Contact() {
  const socials = [
    { label: "GitHub", href: "https://github.com/Neaz-mq" },
    { label: "LinkedIn", href: "https://linkedin.com/in/neaz-morshed" },
    { label: "Fiverr", href: "https://fiverr.com/neaztech" },
    { label: "Upwork", href: "https://upwork.com/neazmorshed" },
  ];

  return (
    <section id="contact" className="relative overflow-hidden bg-ink text-ivory">
      {/* Dot grid */}
      <div className="dot-grid absolute inset-0 opacity-10" aria-hidden />

      {/* Top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-limeglow/8 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-14 sm:pt-20 pb-12 sm:pb-16">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-8 sm:mb-12">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-limeglow">Let&apos;s talk</span>
          <div className="w-8 h-px bg-ivory/15" />
          <span className="text-[11px] text-ivory/30 tabular-nums">04</span>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">

          {/* Left */}
          <div>
            <h2 className="text-[32px] sm:text-[40px] md:text-[52px] font-bold tracking-tight leading-[1.05] mb-4 sm:mb-5">
              Have a project<br />
              <span className="text-limeglow">in mind?</span>
            </h2>
            <p className="text-ivory/50 text-[13px] sm:text-[14px] leading-relaxed max-w-xs mb-6 sm:mb-8">
              I&apos;m available for freelance projects and full-time roles.
              Drop me a line — I reply within 24 hours.
            </p>

            {/* Availability badge */}
            <div className="inline-flex items-center gap-2.5 rounded-full border border-ivory/10 bg-ivory/5 px-4 py-2.5">
              <span className="flex gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-lime animate-pulse" />
                <span className="w-1.5 h-1.5 rounded-full bg-lime" />
              </span>
              <span className="text-[11px] font-medium text-ivory/60">Available for new work</span>
            </div>
          </div>

          {/* Right — cards */}
          <div className="flex flex-col gap-3">

            {/* Email */}
            <a
              href="mailto:neazmorshed666@gmail.com"
              className="group flex items-center justify-between gap-3 rounded-2xl border border-ivory/10 bg-ivory/5 hover:bg-ivory/8 hover:border-limeglow/30 px-4 sm:px-5 py-4 transition-all duration-200 overflow-hidden"
            >
              <div className="min-w-0 flex-1">
                <p className="text-[10px] uppercase tracking-widest text-ivory/30 mb-0.5">Email</p>
                <p className="text-[12px] sm:text-[14px] font-semibold text-ivory group-hover:text-limeglow transition-colors truncate">
                  neazmorshed666@gmail.com
                </p>
              </div>
              <div className="w-8 h-8 rounded-full border border-ivory/15 flex items-center justify-center text-ivory/30 group-hover:bg-limeglow group-hover:text-ink group-hover:border-transparent transition-all duration-200 flex-shrink-0 text-xs">
                ↗
              </div>
            </a>

            {/* Socials 2×2 */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3">
              {socials.map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-between rounded-xl border border-ivory/10 bg-ivory/5 hover:bg-ivory/8 hover:border-limeglow/25 px-3 sm:px-4 py-3 sm:py-3.5 transition-all duration-200 overflow-hidden"
                >
                  <span className="text-[12px] sm:text-[13px] font-medium text-ivory/60 group-hover:text-ivory transition-colors truncate">{s.label}</span>
                  <span className="text-[10px] text-ivory/20 group-hover:text-limeglow transition-colors flex-shrink-0 ml-1">↗</span>
                </a>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}