export default function Nav() {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-ivory/70 border-b border-ink/10">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-semibold tracking-tight text-lg">
          neaz<span className="text-lime">.</span>
        </a>
        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-lime transition-colors">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href="mailto:neazmorshed666@gmail.com"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-4 py-2 text-sm font-medium hover:bg-lime hover:text-ink transition-colors"
        >
          Hire me
        </a>
      </nav>
    </header>
  );
}