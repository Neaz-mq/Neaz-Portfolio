"use client";

const stack = [
  {
    layer: "Frontend",
    index: "01",
    items: [
      { name: "React 19", note: "Primary UI" },
      { name: "Next.js 15", note: "App Router" },
      { name: "TypeScript", note: "Always" },
      { name: "Tailwind v4", note: "Styling" },
      { name: "shadcn/ui", note: "Component lib" },
      { name: "Zustand", note: "State mgmt" },
      { name: "GSAP", note: "Animation" },
      { name: "Framer Motion", note: "UI motion" },
    ],
  },
  {
    layer: "Backend",
    index: "02",
    items: [
      { name: "Node.js", note: "Runtime" },
      { name: "Express 5", note: "API layer" },
      { name: "MongoDB", note: "Primary DB" },
      { name: "Redis", note: "Cache / queue" },
      { name: "Socket.IO", note: "Real-time" },
      { name: "NextAuth v5", note: "Auth" },
      { name: "Firebase Admin", note: "Push notifications" },
      { name: "REST API", note: "Architecture" },
    ],
  },
  {
    layer: "AI & Integrations",
    index: "03",
    items: [
      { name: "AI / Groq", note: "LLM inference" },
      { name: "OpenAI API", note: "GPT models" },
      { name: "Cloudinary", note: "Media & AI" },
      { name: "SSLCommerz", note: "BD payments" },
      { name: "Stripe", note: "Intl payments" },
    ],
  },
  {
    layer: "Deployment & Infra",
    index: "04",
    items: [
      { name: "Vercel", note: "Frontend deploy" },
      { name: "Netlify", note: "Deployment" },
      { name: "Render", note: "Backend deploy" },
      { name: "Cloudways", note: "VPS hosting" },
      { name: "DigitalOcean", note: "Cloud infra" },
      { name: "Hostinger", note: "Hosting" },
      { name: "Vite", note: "Build tool" },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-6">

        {/* Section header */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
            Stack
          </span>
          <div className="flex-1 h-px bg-ink/10" />
          <span className="text-[11px] text-ink/30 tabular-nums">02</span>
        </div>

        {/* Title row */}
        <div className="flex items-end justify-between gap-6 mb-14">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-[1.05]">
            The stack I{" "}
            <span className="relative inline-block">
              <span className="relative z-10">build with</span>
              <span className="absolute inset-x-0 bottom-1 h-3 bg-limeglow/60 z-0" />
            </span>
          </h2>
          <p className="hidden sm:block text-xs uppercase tracking-[0.18em] text-ink/40 whitespace-nowrap pb-1">
            Modern · Fast · Reliable
          </p>
        </div>

        {/* Stack layers */}
        <div className="border-t border-ink/10">
          {stack.map((group) => (
            <div
              key={group.layer}
              className="grid md:grid-cols-[200px_1fr] border-b border-ink/10"
            >
              {/* Layer label */}
              <div className="flex md:flex-col gap-3 md:gap-2 items-center md:items-start pt-8 pb-4 md:pb-8 md:pr-8 border-b md:border-b-0 md:border-r border-ink/10">
                <span className="text-xs font-bold uppercase tracking-[0.18em] text-ink/70">
                  {group.layer}
                </span>
                <span className="text-xs tabular-nums text-ink/35 font-medium">{group.index}</span>
              </div>

              {/* Skills grid */}
              <div className="py-8 md:pl-10">
                <div className="flex flex-wrap gap-0 border border-ink/10">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="
                        group relative
                        w-1/2 sm:w-1/3 lg:w-1/4
                        border-r border-b border-ink/10
                        px-5 py-5
                        bg-ivory hover:bg-ink
                        transition-colors duration-200
                        cursor-default
                      "
                    >
                      <span className="absolute top-4 right-4 h-1.5 w-1.5 rounded-full bg-lime opacity-0 group-hover:opacity-100 transition-opacity" />
                      <p className="text-sm font-bold text-ink group-hover:text-ivory transition-colors leading-none mb-2">
                        {item.name}
                      </p>
                      <p className="text-[11px] uppercase tracking-[0.1em] text-ink/50 group-hover:text-ivory/45 transition-colors">
                        {item.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}