export default function Footer() {
  const year = new Date().getFullYear();

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <footer className="bg-ink text-ivory">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="border-t border-ivory/8" />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6">

        {/* ── MOBILE / TABLET (< md) ── */}
        <div className="md:hidden py-6 flex flex-col items-center gap-5">
          {/* Logo */}
          <a href="#top" className="font-semibold tracking-tight text-lg text-ivory">
            neaz<span className="text-lime">.</span>
          </a>

          {/* Nav links — horizontal wrap */}
          <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-[13px] font-medium text-ivory/50 hover:text-ivory transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-[11px] text-ivory/30">
            © {year} Neaz Morshed. All rights reserved.
          </p>
        </div>

        {/* ── DESKTOP (md+) — original layout ── */}
        <div className="hidden md:flex relative items-center justify-between py-4">
          {/* Logo */}
          <a href="#top" className="font-semibold tracking-tight text-lg text-ivory">
            neaz<span className="text-lime">.</span>
          </a>

          {/* Links */}
          <ul className="flex gap-8 text-sm font-medium">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-ivory/50 hover:text-ivory transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Spacer ghost keeps links centered */}
          <div className="flex items-center rounded-full px-4 py-2 text-sm font-medium opacity-0 pointer-events-none select-none">
            Hire me
          </div>

          {/* Copyright */}
          <p className="absolute right-0 text-[11px] text-ivory/45 whitespace-nowrap">
            © {year} Neaz Morshed. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}