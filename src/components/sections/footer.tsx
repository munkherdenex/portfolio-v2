'use client'

import { Heart, ArrowUp } from 'lucide-react'

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-slate-950 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
              Munkh-Erdene
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Developer | Creating modern web experiences with clean code and great design.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-cyan-400 transition">About</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-cyan-400 transition">Projects</a></li>
              <li><a href="#resume" className="text-gray-400 hover:text-cyan-400 transition">Resume</a></li>
              <li><a href="#gallery" className="text-gray-400 hover:text-cyan-400 transition">Gallery</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-cyan-400 transition">Contact</a></li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Social</h4>
            <ul className="space-y-2">
              <li><a href="https://github.com/munkherdenex" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">GitHub</a></li>
              <li><a href="https://www.linkedin.com/in/munkh-erdene-batsaikhan-27256220a/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">LinkedIn</a></li>
              <li><a href="https://www.facebook.com/kazu.mika.1" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">Facebook</a></li>
              <li><a href="https://www.instagram.com/james_46663/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-cyan-400 transition">Instagram</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="mailto:munkherdenex@gmail.com" className="hover:text-cyan-400 transition">
                  munkherdenex@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://munkherdenex.github.io/portfolio/MunkhErdene_Resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition font-semibold inline-block"
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800/50 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-400 text-sm flex items-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Munkh-Erdene © {new Date().getFullYear()}
            </p>

            {/* Scroll to Top Button */}
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 hover:bg-blue-600/40 border border-slate-800 hover:border-cyan-500/50 text-gray-400 hover:text-cyan-400 rounded-lg transition-all transform hover:scale-110"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

