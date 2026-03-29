'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-950/95 backdrop-blur-md border-b border-slate-800/50 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent hover:from-blue-300 hover:to-cyan-300 transition-all">
          Munkh-Erdene
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
              }}
              className="px-4 py-2 text-gray-300 hover:text-cyan-400 font-medium transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-300 hover:text-cyan-400 transition-colors"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800/50 px-4 py-4 space-y-2 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  element.scrollIntoView({ behavior: 'smooth' })
                }
                setMobileMenuOpen(false)
              }}
              className="block px-4 py-2 text-gray-300 hover:text-cyan-400 hover:bg-slate-800/50 rounded-lg font-medium transition-all duration-300"
            >
              {item.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  )
}

