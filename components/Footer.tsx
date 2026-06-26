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
      <div className="mx-auto max-w-6xl px-6">
        <div className="border-t border-ivory/8" />
      </div>

      <div className="relative mx-auto flex max-w-6xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <a href="#top" className="font-semibold tracking-tight text-lg text-ivory">
          neaz<span className="text-lime">.</span>
        </a>

        {/* Links */}
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-ivory/50 hover:text-ivory transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Ghost "Hire me" — invisible, keeps links perfectly centered */}
        <div className="hidden md:flex items-center rounded-full px-4 py-2 text-sm font-medium opacity-0 pointer-events-none select-none">
          Hire me
        </div>

        {/* Copyright — absolutely on the right, doesn't affect layout */}
        <p className="hidden md:block absolute right-6 text-[11px] text-ivory/45 whitespace-nowrap">
          © {year} Neaz Morshed. All rights reserved.
        </p>

        {/* Mobile */}
        <p className="md:hidden text-[11px] text-ivory/25">© {year}</p>

      </div>
    </footer>
  );
}