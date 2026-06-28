import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "WorkRight Health", tag: "Wellness SaaS", index: "01", desc: "Production wellness platform with role-based auth, Firebase Admin, Cloudinary, and a gamified badge leaderboard.", stack: ["React 19", "Node.js", "MongoDB", "Firebase"], img: "/projects/workright.webp", href: "https://workrighthealth.com" },
  { title: "Prographr Templates", tag: "E-commerce", index: "02", desc: "Template marketplace with SSLCommerz payments, Google One Tap auth, and a complete admin panel.", stack: ["React", "Node.js", "MongoDB", "SSLCommerz"], img: "/projects/Templates.webp", href: "https://prographr-templates.netlify.app" },
  { title: "Cuisine", tag: "Restaurant", index: "03", desc: "Restaurant site with live kitchen status, signature menu, and silky Framer Motion animations.", stack: ["React", "Vite", "Tailwind", "Framer Motion"], img: "/projects/cuisine.jpg", href: "https://cuisine-food-website.netlify.app" },
  { title: "Mojito", tag: "Cocktail Landing", index: "04", desc: "Premium cocktail bar landing page with cinematic scroll interactions and parallax effects.", stack: ["HTML", "SCSS", "GSAP"], img: "/projects/mojitos.webp", href: "https://mojito-refresh.netlify.app" },
  { title: "Green Nest", tag: "Garden & Landscaping", index: "05", desc: "Garden and landscaping business landing page with nature-inspired design, GSAP animations, team profiles, client testimonials, Swiper slider, and EmailJS contact form.", stack: ["React 18", "Vite", "GSAP", "Swiper", "Tailwind CSS", "EmailJS"], img: "/projects/gardening.webp", href: "https://green-nest-omega.vercel.app" },
  { title: "Artificial Intelligence", tag: "Product Site", index: "06", desc: "AI-themed marketing site with animated typographic components and a modern editorial layout.", stack: ["React", "Vite", "Tailwind"], img: "/projects/artificial.webp", href: "https://artificial-intelligences.netlify.app" },
  { title: "Tickzo — Smart Watch", tag: "Product Page", index: "07", desc: "Interactive smart-watch showcase with crisp product imagery and a polished feature grid.", stack: ["React", "Tailwind", "Framer Motion"], img: "/projects/watches.webp", href: "https://tickzo.vercel.app" },
  { title: "Lumivio", tag: "Premium Agency", index: "08", desc: "Premium creative agency landing page with cinematic GSAP scroll animations, Framer Motion page transitions, Lenis smooth scroll, and a bold dark-themed UI.", stack: ["React 19", "Vite 7", "GSAP", "Framer Motion", "Lenis", "Tailwind CSS v4", "Lucide React"], img: "/projects/lumivio.webp", href: "https://lumivio.vercel.app" },
  { title: "Galaxmind", tag: "AI SaaS Landing", index: "09", desc: "Next-generation AI SaaS landing page with a cinematic space-themed UI, Framer Motion animations, interactive planet showcase, features, pricing, and CTA sections.", stack: ["React 19", "Vite 7", "Framer Motion", "Tailwind CSS v4", "Lucide React"], img: "/projects/galaxmind.webp", href: "https://galaxmind.netlify.app" },
  { title: "EcoVolt", tag: "Clean Energy", index: "10", desc: "High-performance clean energy landing page with AI-powered SmartGrid showcase, animated impact stats, feature comparison table, and a fully responsive zero-framework build.", stack: ["HTML", "SCSS", "Vite", "Vanilla JS"], img: "/projects/energy.png", href: "https://ecovolt-energy.netlify.app" },
];

export default function Projects() {
  return (
    <section id="work" className="pt-0 pb-16 md:pb-28">
      <div className="mx-auto max-w-6xl px-4 md:px-6">

        {/* Label row */}
        <div className="flex items-center gap-3 mb-5 md:mb-6">
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime">Selected work</span>
          <div className="w-8 h-px bg-ink/20" />
          <span className="text-[11px] text-ink/30 tabular-nums">03</span>
        </div>

        {/* Title row */}
        <div className="flex items-end justify-between gap-6 mb-8 md:mb-10">
          <h2 className="text-3xl md:text-[38px] font-bold tracking-tight leading-none">
            Things I&apos;ve{" "}
            <span className="relative inline-block">
              <span className="relative z-10">shipped</span>
              <span className="absolute inset-x-0 bottom-0.5 h-2.5 bg-limeglow/50 z-0" />
            </span>
          </h2>
          <p className="hidden min-[400px]:block text-xs uppercase tracking-[0.18em] text-ink/40 whitespace-nowrap pb-1">
            Modern · Fast · Reliable
          </p>
        </div>

        <div className="border-t border-ink/10">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-ink/10 py-5 md:flex md:items-center md:gap-0"
            >
              {/* ── TINY MOBILE layout (< 480px) — pure vertical stack ── */}
              <div className="min-[400px]:hidden">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-ink/30 tabular-nums">{p.index}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/40 border border-ink/15 rounded-full px-2.5 py-0.5">
                      {p.tag}
                    </span>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-ink/15 flex items-center justify-center text-xs text-ink/35 group-hover:bg-ink group-hover:text-ivory group-hover:border-transparent transition-all duration-200">
                    ↗
                  </div>
                </div>
                <div className="w-full h-[160px] rounded-[8px] overflow-hidden bg-ink/5 border border-ink/10 mb-3">
                  <Image src={p.img} alt={p.title} width={600} height={160} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <p className="text-[18px] font-bold tracking-tight text-ink leading-snug mb-1.5">{p.title}</p>
                <p className="text-[12px] text-ink/55 leading-relaxed mb-2">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] text-ink/40 border border-ink/10 rounded-full px-2.5 py-0.5">{s}</span>
                  ))}
                </div>
              </div>

              {/* ── TABLET layout (480px – 767px) — horizontal row ── */}
              <div className="hidden min-[400px]:flex md:hidden items-center gap-4">
                {/* Thumbnail left */}
                <div className="w-[150px] h-[95px] flex-shrink-0 rounded-[8px] overflow-hidden bg-ink/5 border border-ink/10 group-hover:scale-[1.03] transition-all duration-300">
                  <Image src={p.img} alt={p.title} width={150} height={95} className="w-full h-full object-cover" loading="lazy" />
                </div>

                {/* Text middle */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[11px] text-ink/30 tabular-nums">{p.index}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/40 border border-ink/15 rounded-full px-2.5 py-0.5">
                      {p.tag}
                    </span>
                  </div>
                  <p className="text-[16px] font-bold tracking-tight text-ink leading-snug mb-1">{p.title}</p>
                  <p className="text-[12px] text-ink/55 leading-relaxed mb-2 line-clamp-2">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="text-[10px] text-ink/40 border border-ink/10 rounded-full px-2.5 py-0.5">{s}</span>
                    ))}
                  </div>
                </div>

                {/* Arrow right */}
                <div className="w-8 h-8 flex-shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm text-ink/35 group-hover:bg-ink group-hover:text-ivory group-hover:border-transparent transition-all duration-200">
                  ↗
                </div>
              </div>

              {/* ── DESKTOP layout (≥ 768px) — unchanged ── */}
              <span className="hidden md:block text-[11px] text-ink/30 tabular-nums w-11 flex-shrink-0 pt-1 group-hover:text-ink transition-colors duration-200">
                {p.index}
              </span>

              <div className="hidden md:flex flex-1 flex-col gap-1.5 min-w-0">
                <div className="flex items-baseline gap-3 flex-wrap">
                  <span className="text-[22px] font-bold tracking-[-0.015em] text-ink leading-tight group-hover:tracking-[-0.025em] transition-all duration-300">
                    {p.title}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-ink/40 border border-ink/15 rounded-full px-2.5 py-1">
                    {p.tag}
                  </span>
                </div>
                <p className="text-[13px] text-ink/55 leading-relaxed max-w-[520px]">{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-1">
                  {p.stack.map((s) => (
                    <span key={s} className="text-[10px] text-ink/40 border border-ink/10 rounded-full px-2.5 py-0.5">{s}</span>
                  ))}
                </div>
              </div>

              <div className="hidden md:block w-[220px] h-[130px] flex-shrink-0 ml-6 rounded-[10px] overflow-hidden bg-ink/5 border border-ink/10 group-hover:scale-[1.03] group-hover:-translate-y-0.5 transition-all duration-300">
                <Image src={p.img} alt={p.title} width={220} height={130} className="w-full h-full object-cover" loading="lazy" />
              </div>

              <div className="hidden md:flex w-8 h-8 ml-4 flex-shrink-0 rounded-full border border-ink/15 items-center justify-center text-sm text-ink/35 group-hover:bg-ink group-hover:text-ivory group-hover:border-transparent transition-all duration-200">
                ↗
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}