import Image from "next/image";

const projects = [
  {
    title: "WorkRight Health",
    tag: "Wellness SaaS",
    desc: "Production wellness platform with role-based auth, Firebase Admin, Cloudinary, and a gamified badge leaderboard.",
    stack: ["React 19", "Node.js", "MongoDB", "Firebase"],
    img: "/projects/workright.png",
    href: "https://workrighthealth.com",
  },
  {
    title: "Prographr Templates",
    tag: "E-commerce",
    desc: "Template marketplace with SSLCommerz payments, Google One Tap auth, and a complete admin panel.",
    stack: ["React", "Node.js", "MongoDB", "SSLCommerz"],
    img: "/projects/prographr.png",
    href: "https://prographr-templates.netlify.app",
  },
  {
    title: "Cuisine",
    tag: "Restaurant",
    desc: "Restaurant site with live kitchen status, signature menu, and silky Framer Motion animations.",
    stack: ["React", "Vite", "Tailwind", "Framer Motion"],
    img: "/projects/cuisine.jpg",
    href: "https://cuisine-food-website.netlify.app",
  },
  {
    title: "Mojito",
    tag: "Cocktail Landing",
    desc: "Premium cocktail bar landing page with cinematic scroll interactions and parallax effects.",
    stack: ["HTML", "SCSS", "GSAP"],
    img: "/projects/mojito.png",
    href: "https://mojito-refresh.netlify.app",
  },
  {
    title: "Artificial Intelligence",
    tag: "Product Site",
    desc: "AI-themed marketing site with animated typographic components and a modern editorial layout.",
    stack: ["React", "Vite", "Tailwind"],
    img: "/projects/ai.png",
    href: "https://artificial-intelligences.netlify.app",
  },
  {
    title: "Tickzo — Smart Watch",
    tag: "Product Page",
    desc: "Interactive smart-watch showcase with crisp product imagery and a polished feature grid.",
    stack: ["Next.js", "React", "Tailwind"],
    img: "/projects/tickzo.png",
    href: "https://tickzo.vercel.app",
  },
];

export default function Projects() {
  return (
    <section id="work" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <span className="text-xs font-medium uppercase tracking-widest text-lime">Selected work</span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold tracking-tight">Things I&apos;ve shipped</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <a
              key={p.title}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-ink/10 bg-white transition-all hover:-translate-y-1 hover:shadow-xl hover:border-ink/20"
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-ink/5">
                <Image
                  src={p.img}
                  alt={p.title + " — " + p.tag}
                  fill
                  loading={i < 2 ? "eager" : "lazy"}
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-xl font-semibold tracking-tight">{p.title}</h3>
                  <span className="rounded-full bg-limeglow/40 px-3 py-1 text-xs font-medium">{p.tag}</span>
                </div>
                <p className="mt-3 text-sm text-ink/70">{p.desc}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {p.stack.map((s) => (
                    <span key={s} className="text-xs text-ink/60 border border-ink/10 rounded-full px-2 py-0.5">
                      {s}
                    </span>
                  ))}
                </div>
                <span className="mt-5 inline-flex items-center gap-1 text-sm font-medium text-lime">
                  Visit site
                  <span className="transition-transform group-hover:translate-x-1">→</span>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}