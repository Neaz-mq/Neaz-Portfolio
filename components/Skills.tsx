const skills = [
  "React 19", "Next.js 16", "TypeScript", "Tailwind v4", "Node.js", "Express 5",
  "MongoDB", "Redis", "Socket.IO", "NextAuth v5", "Firebase Admin", "Cloudinary",
  "SSLCommerz", "GSAP", "Framer Motion", "Vite", "AI / Groq", "REST API",
  "Vercel", "Netlify", "Cloudways", "Render",
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex items-end justify-between mb-10">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            The stack I <span className="text-lime">build with</span>
          </h2>
          <span className="text-sm text-ink/60 hidden md:block">Modern · Fast · Reliable</span>
        </div>
      </div>
      <div className="relative overflow-hidden border-y border-ink/10 py-6">
        <div className="marquee flex gap-3 whitespace-nowrap w-max">
          {[...skills, ...skills].map((s, i) => (
            <span
              key={i}
              className="rounded-full border border-ink/15 bg-ivory px-5 py-2 text-sm font-medium"
            >
              {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}