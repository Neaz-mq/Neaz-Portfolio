import Image from "next/image";
import Link from "next/link";

const projects = [
  { title: "WorkRight Health", tag: "Wellness SaaS", index: "01", desc: "Production wellness platform with role-based auth, Firebase Admin, Cloudinary, and a gamified badge leaderboard.", stack: ["React 19", "Node.js", "MongoDB", "Firebase"], img: "/projects/workright.webp", href: "https://workrighthealth.com" },
  { title: "Prographr Templates", tag: "E-commerce", index: "02", desc: "Template marketplace with SSLCommerz payments, Google One Tap auth, and a complete admin panel.", stack: ["React", "Node.js", "MongoDB", "SSLCommerz"], img: "/projects/Templates.webp", href: "https://prographr-templates.netlify.app" },
  { title: "Cuisine", tag: "Restaurant", index: "03", desc: "Restaurant site with live kitchen status, signature menu, and silky Framer Motion animations.", stack: ["React", "Vite", "Tailwind", "Framer Motion"], img: "/projects/cuisine.jpg", href: "https://cuisine-food-website.netlify.app" },
  { title: "Mojito", tag: "Cocktail Landing", index: "04", desc: "Premium cocktail bar landing page with cinematic scroll interactions and parallax effects.", stack: ["HTML", "SCSS", "GSAP"], img: "/projects/mojito.png", href: "https://mojito-refresh.netlify.app" },
  { title: "Artificial Intelligence", tag: "Product Site", index: "05", desc: "AI-themed marketing site with animated typographic components and a modern editorial layout.", stack: ["React", "Vite", "Tailwind"], img: "/projects/ai.png", href: "https://artificial-intelligences.netlify.app" },
  { title: "Tickzo — Smart Watch", tag: "Product Page", index: "06", desc: "Interactive smart-watch showcase with crisp product imagery and a polished feature grid.", stack: ["Next.js", "React", "Tailwind"], img: "/projects/tickzo.png", href: "https://tickzo.vercel.app" },
];

export default function Projects() {
  return (
    <section id="work" className="py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-6">

        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-lime">Selected work</span>
            <div className="w-8 h-px bg-ink/20" />
            <span className="text-[11px] text-ink/30 tabular-nums">03</span>
          </div>
          <span className="hidden sm:block text-[11px] uppercase tracking-[0.15em] text-ink/30">Modern · Fast · Reliable</span>
        </div>

        <h2 className="text-[38px] font-bold tracking-tight leading-none mb-10">
          Things I&apos;ve{" "}
          <span className="relative inline-block">
            <span className="relative z-10">shipped</span>
            <span className="absolute inset-x-0 bottom-0.5 h-2.5 bg-limeglow/50 z-0" />
          </span>
        </h2>

        <div className="border-t border-ink/10">
          {projects.map((p) => (
            <Link
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-0 border-b border-ink/10 py-5"
            >
              {/* Number */}
              <span className="text-[11px] text-ink/30 tabular-nums w-11 flex-shrink-0 pt-1 group-hover:text-ink transition-colors duration-200">
                {p.index}
              </span>

              {/* Body */}
              <div className="flex-1 flex flex-col gap-1.5 min-w-0">
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
                    <span key={s} className="text-[10px] text-ink/40 border border-ink/10 rounded-full px-2.5 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Thumbnail */}
              <div className="w-[220px] h-[130px] flex-shrink-0 ml-6 rounded-[10px] overflow-hidden bg-ink/5 border border-ink/10 group-hover:scale-[1.03] group-hover:-translate-y-0.5 transition-all duration-300">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={220}
                  height={130}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>

              {/* Arrow */}
              <div className="w-8 h-8 ml-4 flex-shrink-0 rounded-full border border-ink/15 flex items-center justify-center text-sm text-ink/35 group-hover:bg-ink group-hover:text-ivory group-hover:border-transparent transition-all duration-200">
                ↗
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}