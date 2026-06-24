import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24 lg:py-32">

        {/* ── Mobile & Tablet (<1024px): stacked layout ── */}
        <div className="flex flex-col items-center text-center lg:hidden">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory/70 px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            Available for freelance
          </span>

          <h1 className="mt-5 text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl">
            Building fast,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">reliable</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-limeglow/70 z-0" />
            </span>{" "}
            web apps.
          </h1>

          <p className="mt-4 max-w-lg text-base sm:text-lg text-ink/70">
            I&apos;m <strong className="text-ink">Neaz Morshed</strong> — a MERN stack developer
            from Bangladesh. I craft production-grade SaaS, e-commerce, and marketing sites with
            React, Next.js, and Node.js.
          </p>

          {/* Image — centered between paragraph and buttons */}
          <div className="relative mt-8 w-full max-w-[260px] sm:max-w-[300px]">
            <div className="absolute -inset-6 bg-limeglow/40 blur-3xl rounded-full" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 aspect-[4/5] w-full">
              <Image
                src="/Neaz.webp"
                alt="Neaz Morshed — MERN Stack Developer"
                fill
                priority
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            <Link
              href="#work"
              className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory hover:bg-lime hover:text-ink transition-colors"
            >
              View my work →
            </Link>
            <Link
              href="#contact"
              className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:border-ink transition-colors"
            >
              Get in touch
            </Link>
          </div>

          <dl className="mt-10 grid grid-cols-3 gap-6 w-full max-w-sm">
            <div>
              <dt className="text-2xl sm:text-3xl font-bold tracking-tight">2+</dt>
              <dd className="text-xs text-ink/60 mt-1">Years building</dd>
            </div>
            <div>
              <dt className="text-2xl sm:text-3xl font-bold tracking-tight">15+</dt>
              <dd className="text-xs text-ink/60 mt-1">Projects shipped</dd>
            </div>
            <div>
              <dt className="text-2xl sm:text-3xl font-bold tracking-tight">100%</dt>
              <dd className="text-xs text-ink/60 mt-1">Client focused</dd>
            </div>
          </dl>
        </div>

        {/* ── Desktop (≥1024px): two-column grid ── */}
        <div className="hidden lg:grid lg:grid-cols-[1.2fr_1fr] lg:gap-16 items-center">

          {/* Left: text */}
          <div className="fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory/70 px-3 py-1 text-xs font-medium">
              <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
              Available for freelance
            </span>

            <h1 className="mt-5 text-5xl font-bold leading-[1.05] tracking-tight xl:text-7xl">
              Building fast,{" "}
              <span className="relative inline-block">
                <span className="relative z-10">reliable</span>
                <span className="absolute inset-x-0 bottom-1 h-3 bg-limeglow/70 z-0" />
              </span>{" "}
              web apps.
            </h1>

            <p className="mt-5 max-w-xl text-lg text-ink/70">
              I&apos;m <strong className="text-ink">Neaz Morshed</strong> — a MERN stack developer
              from Bangladesh. I craft production-grade SaaS, e-commerce, and marketing sites with
              React, Next.js, and Node.js.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="#work"
                className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory hover:bg-lime hover:text-ink transition-colors"
              >
                View my work →
              </Link>
              <Link
                href="#contact"
                className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:border-ink transition-colors"
              >
                Get in touch
              </Link>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <dt className="text-3xl font-bold tracking-tight">2+</dt>
                <dd className="text-xs text-ink/60 mt-1">Years building</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold tracking-tight">15+</dt>
                <dd className="text-xs text-ink/60 mt-1">Projects shipped</dd>
              </div>
              <div>
                <dt className="text-3xl font-bold tracking-tight">100%</dt>
                <dd className="text-xs text-ink/60 mt-1">Client focused</dd>
              </div>
            </dl>
          </div>

          {/* Right: image */}
          <div className="relative fade-up">
            <div className="absolute -inset-6 bg-limeglow/40 blur-3xl rounded-full" aria-hidden />
            <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 aspect-[4/5] w-full">
              <Image
                src="/Neaz.webp"
                alt="Neaz Morshed — MERN Stack Developer"
                fill
                priority
                sizes="40vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}