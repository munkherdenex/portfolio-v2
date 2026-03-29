'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Code2, Database, Globe } from 'lucide-react'

export function About() {
  const skills = [
    { icon: Globe, label: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS'] },
    { icon: Code2, label: 'Tools', items: ['Git', 'Vercel', 'Figma', 'VS Code'] },
  ]

  return (
    <section id="about" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-white">About Me</h2>
        
        <div className="grid md:grid-cols-5 gap-8 items-start">
          {/* Image Column */}
          <div className="md:col-span-2">
            <div className="sticky top-32 group">
              <div className="relative">
                {/* Animated border */}
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img
                  src="/img/IMG_2409.jpg"
                  alt="Profile - Munkh-Erdene"
                  className="w-full rounded-2xl shadow-2xl relative z-10 group-hover:shadow-cyan-500/50 transition-shadow duration-500"
                />
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="md:col-span-3 space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Hi there! I'm Munkh-Erdene</h3>
              <p className="text-gray-300 leading-relaxed text-lg mb-4">
                I'm a software developer with a degree in Computer Science from the Mongolian University of Science and Technology (MUST). I'm passionate about building modern, responsive web applications that solve real problems.
              </p>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm a responsible, detail-oriented developer with strong problem-solving abilities. I excel at working both independently and collaboratively. When I'm not coding, I enjoy reading and exploring nature for personal growth and inspiration.
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid gap-4">
              <h4 className="text-xl font-semibold text-white">Core Competencies</h4>
              {skills.map((skillGroup) => {
                const Icon = skillGroup.icon
                return (
                  <div key={skillGroup.label} className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                    <div className="flex items-center gap-2 mb-3">
                      <Icon className="w-5 h-5 text-cyan-400" />
                      <h5 className="font-semibold text-cyan-300">{skillGroup.label}</h5>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.items.map((skill) => (
                        <Badge key={skill} className="bg-blue-600/40 text-blue-200 border border-blue-500/50 hover:bg-blue-600/60 cursor-default">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Quick Facts */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400">5+</div>
                <div className="text-sm text-gray-300">Projects Built</div>
              </div>
              <div className="bg-gradient-to-br from-blue-600/20 to-cyan-600/20 p-4 rounded-lg border border-cyan-500/30">
                <div className="text-2xl font-bold text-cyan-400">100%</div>
                <div className="text-sm text-gray-300">Dedicated</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

