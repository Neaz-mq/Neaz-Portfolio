import Image from "next/image";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="dot-grid absolute inset-0 opacity-60" aria-hidden />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 py-20 md:grid-cols-[1.2fr_1fr] md:py-28 lg:py-32">
        <div className="fade-up">
          <span className="inline-flex items-center gap-2 rounded-full border border-ink/15 bg-ivory/70 px-3 py-1 text-xs font-medium">
            <span className="h-2 w-2 rounded-full bg-lime animate-pulse" />
            Available for freelance
          </span>
          <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl">
            Building fast,{" "}
            <span className="relative inline-block">
              <span className="relative z-10">reliable</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-limeglow/70 z-0" />
            </span>{" "}
            web apps.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-ink/70">
            I&apos;m <strong className="text-ink">Neaz Morshed</strong> — a MERN stack developer from Bangladesh.
            I craft production-grade SaaS, e-commerce, and marketing sites with React, Next.js, and Node.js.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#work" className="rounded-full bg-ink px-6 py-3 text-sm font-medium text-ivory hover:bg-lime hover:text-ink transition-colors">
              View my work →
            </a>
            <a href="#contact" className="rounded-full border border-ink/20 px-6 py-3 text-sm font-medium hover:border-ink transition-colors">
              Get in touch
            </a>
          </div>
          <dl className="mt-12 grid grid-cols-3 gap-6 max-w-md">
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
        <div className="relative fade-up">
          <div className="absolute -inset-4 bg-limeglow/40 blur-3xl rounded-full" aria-hidden />
          <div className="relative overflow-hidden rounded-3xl border border-ink/10 bg-ink/5 aspect-[4/5]">
            <Image
              src="/neaz.png"
              alt="Neaz Morshed — MERN Stack Developer"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}