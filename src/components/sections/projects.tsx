'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    id: 1,
    title: 'Essay V.2',
    description: 'A lightweight, elegant platform for reading and sharing essays in Mongolian with beautiful typography',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://munkherdenex.github.io/essay/',
    gradient: 'from-blue-600 to-cyan-600',
    icon: '📝',
  },
  {
    id: 2,
    title: 'Dairy Product Web',
    description: 'Modern landing page for a traditional dairy business, celebrating Mongolian heritage and products',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://mongonsuu.vercel.app',
    gradient: 'from-orange-600 to-red-600',
    icon: '🥛',
  },
  {
    id: 3,
    title: 'TicTac Toe',
    description: 'Interactive Tic Tac Toe game with smart logic and responsive design for all devices',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://munkherdenex.github.io/tic-tac-toe/',
    gradient: 'from-green-600 to-teal-600',
    icon: '🎮',
  },
  {
    id: 4,
    title: 'Mongolian Agricultural Trade Platform',
    description: 'Full-stack platform simplifying agricultural trade by directly connecting farmers with buyers across Mongolia',
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Vercel', 'TypeScript'],
    link: 'https://www.agromongol.store/',
    gradient: 'from-yellow-600 to-orange-600',
    icon: '🌾',
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-4xl font-bold mb-4 text-white">Featured Projects</h2>
          <p className="text-gray-300 text-lg max-w-2xl">
            A showcase of my recent work demonstrating my ability to build modern, responsive web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="overflow-hidden h-full bg-slate-900 border-slate-800 hover:border-cyan-500/50 transition-all duration-300 cursor-pointer transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20">
                {/* Gradient Banner */}
                <div className={`bg-gradient-to-r ${project.gradient} h-40 relative overflow-hidden flex items-center justify-center`}>
                  <div className="text-6xl group-hover:scale-125 transition-transform duration-300">{project.icon}</div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-white text-xl group-hover:text-cyan-400 transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-gray-300 line-clamp-2">{project.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} className="bg-slate-800 text-gray-200 border border-slate-700 text-xs hover:bg-slate-700 transition-colors">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <Button 
                    className="w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-semibold group-hover:shadow-lg group-hover:shadow-cyan-500/50 transition-all"
                    asChild
                  >
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      View Project
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 text-lg">Want to see more of my work?</p>
          <a
            href="https://github.com/munkherdenex"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-cyan-500/50 text-white rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            <GitBranch className="w-5 h-5" />
            Visit My GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

