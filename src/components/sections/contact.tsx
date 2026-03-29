'use client'

import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Mail, Phone, MapPin, Send, Loader } from 'lucide-react'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setLoading(false)
      setTimeout(() => setSubmitted(false), 3000)
      setFormData({ name: '', email: '', message: '' })
    }, 1500)
  }

  const socialLinks = [
    { name: 'Email', href: 'mailto:munkherdenex@gmail.com', icon: Mail },
    { name: 'GitHub', href: 'https://github.com/munkherdenex', icon: Phone },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/in/munkh-erdene-batsaikhan-27256220a/', icon: MapPin },
  ]

  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Get In Touch</h2>
          <p className="text-gray-300 text-lg">
            I'm always interested in hearing about new projects and opportunities. Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Contact Info Cards */}
          <a
            href="mailto:munkherdenex@gmail.com"
            className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/40 transition-colors">
                <Mail className="w-6 h-6 text-blue-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Email</h3>
                <p className="text-gray-400 text-sm">munkherdenex@gmail.com</p>
              </div>
            </div>
          </a>

          <a
            href="tel:+97691196159"
            className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-green-600/20 rounded-lg group-hover:bg-green-600/40 transition-colors">
                <Phone className="w-6 h-6 text-green-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">Phone</h3>
                <p className="text-gray-400 text-sm">+976 9119-6159</p>
              </div>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/munkh-erdene-batsaikhan-27256220a/"
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 p-6 rounded-lg transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/20"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-600/20 rounded-lg group-hover:bg-cyan-600/40 transition-colors">
                <MapPin className="w-6 h-6 text-cyan-400" />
              </div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyan-400 transition-colors">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect with me</p>
              </div>
            </div>
          </a>
        </div>

        {/* Contact Form */}
        <Card className="bg-slate-900/80 border-slate-800">
            <div className="p-6 items-center justify-center text-center">
              <h3 className="font-semibold text-gray-300 mb-4">Connect with me on social media</h3>
              <div className="flex flex-wrap justify-center gap-3">
                <a href="https://www.facebook.com/kazu.mika.1" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-600/50 text-blue-300 rounded-lg transition-all transform hover:scale-105 font-medium">
                  Facebook
                </a>
                <a href="https://www.instagram.com/james_46663/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-600/50 text-pink-300 rounded-lg transition-all transform hover:scale-105 font-medium">
                  Instagram
                </a>
                <a href="https://github.com/munkherdenex" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-slate-700/50 hover:bg-slate-700/80 border border-slate-600 text-gray-300 rounded-lg transition-all transform hover:scale-105 font-medium">
                  GitHub
                </a>
                <a href="https://www.linkedin.com/in/munkh-erdene-batsaikhan-27256220a/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-700/20 hover:bg-blue-700/40 border border-blue-700/50 text-blue-300 rounded-lg transition-all transform hover:scale-105 font-medium">
                  LinkedIn
                </a>
              </div>
            </div>
        </Card>
      </div>
    </section>
  )
}

