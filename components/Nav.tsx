"use client";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];

  const close = () => setOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 backdrop-blur bg-ivory/70 border-b border-ink/10">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          {/* Logo */}
          <a href="#top" className="font-semibold tracking-tight text-lg" onClick={close}>
            neaz<span className="text-lime">.</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden gap-8 text-sm font-medium md:flex">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="hover:text-lime transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
            <a
            href="mailto:neazmorshed666@gmail.com"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-ink text-ivory px-4 py-2 text-sm font-medium hover:bg-lime hover:text-ink transition-colors"
          >
            Hire me
          </a>

          {/* Hamburger */}
          <button
            onClick={() => setOpen((prev) => !prev)}
            className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-1.5 rounded-md hover:bg-ink/5 transition-colors"
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            <span
              className={`block h-0.5 w-5 bg-ink rounded transition-all duration-300 origin-center ${
                open ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink rounded transition-all duration-300 ${
                open ? "opacity-0 scale-x-0" : ""
              }`}
            />
            <span
              className={`block h-0.5 w-5 bg-ink rounded transition-all duration-300 origin-center ${
                open ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </nav>
      </header>

      {/* Full-screen overlay */}
      <div
        onClick={close}
        className={`md:hidden fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />

      {/* Floating card menu */}
      <div
        className={`md:hidden fixed top-20 left-4 right-4 z-50 rounded-2xl bg-ivory border border-ink/10 shadow-xl overflow-hidden transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
        }`}
      >
        <ul className="flex flex-col p-2">
          {links.map((l, i) => (
            <li key={l.href}>
                <a
                href={l.href}
                onClick={close}
                className="flex items-center justify-between px-4 py-3.5 rounded-xl text-sm font-medium hover:bg-ink/5 hover:text-lime transition-colors group"
                style={{ transitionDelay: open ? `${i * 40}ms` : "0ms" }}
              >
                <span>{l.label}</span>
                <span className="text-ink/20 group-hover:text-lime transition-colors text-xs">→</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="px-4 pb-4 pt-1 border-t border-ink/10">
          <a
            href="mailto:neazmorshed666@gmail.com"
            onClick={close}
            className="flex items-center justify-center w-full rounded-full bg-ink text-ivory py-3 text-sm font-medium hover:bg-lime hover:text-ink transition-colors"
          >
            Hire me
          </a>
        </div>
      </div>
    </>
  );
}