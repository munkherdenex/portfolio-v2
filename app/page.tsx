import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800 text-white py-32">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-6xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Munkh-Erdene
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8">
            Software Developer | Building Modern Web Applications
          </p>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12">
            I craft beautiful, functional web experiences with modern technologies.
            Let's work together to bring your ideas to life.
          </p>
          
          <div className="flex gap-4 justify-center">
            <a
              href="#projects"
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-lg font-semibold transition"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="bg-slate-700 hover:bg-slate-600 px-8 py-3 rounded-lg font-semibold transition"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Projects />
      <Gallery />
      <Contact />
    </main>
  );
}
