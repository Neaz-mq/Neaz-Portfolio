import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

export default function Page() {
  return (
    <main className="min-h-screen">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <footer className="border-t border-ink/10 py-8 text-center text-sm text-ink/60">
        © {new Date().getFullYear()} Neaz Morshed. Crafted with Next.js.
      </footer>
    </main>
  );
}