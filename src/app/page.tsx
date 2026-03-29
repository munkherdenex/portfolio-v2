import { About } from "@/components/sections/about";
import { Projects } from "@/components/sections/projects";
import { Gallery } from "@/components/sections/gallery";
import { Contact } from "@/components/sections/contact";
import { Resume } from "@/components/sections/resume";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-800">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" style={{animationDelay: '2s'}}></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="mb-8 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-400/50 rounded-full text-blue-300 text-sm font-medium mb-6">
              Welcome to my portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Munkh-Erdene
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-cyan-300 mb-4 font-semibold">
            Developer | Creating Digital Experiences
          </p>
          
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed">
            I craft beautiful, functional web experiences with modern technologies. 
            I specialize in building responsive applications that users love.
            Let's collaborate and bring your ideas to life.
          </p>
          
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/50"
            >
              View My Work
              <span className="absolute inset-0 rounded-lg bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></span>
            </a>
            <a
              href="#contact"
              className="px-8 py-4 rounded-lg font-semibold text-white border-2 border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </section>

      {/* Main Sections */}
      <About />
      <Projects />
      <Resume />
      <Gallery />
      <Contact />
    </main>
  );
}
