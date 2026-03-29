'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Download, FileText } from 'lucide-react'

export function Resume() {
  const experiences = [
    {
      title: 'Software Developer',
      company: 'AgroMongol Platform',
      period: '2024 - Present',
      description: 'Building modern web platform for agricultural trade, connecting farmers and buyers across Mongolia.',
      skills: ['React', 'Node.js', 'PostgreSQL', 'Vercel', 'TypeScript']
    },
    {
      title: 'Developer',
      company: 'Freelance Projects',
      period: '2022 - 2024',
      description: 'Developed various web applications including landing pages, e-commerce sites, and interactive web experiences.',
      skills: ['HTML/CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS']
    }
  ]

  const education = [
    {
      school: 'Mongolian University of Science and Technology (MUST)',
      degree: 'Bachelor of Computer Science',
      year: '2024',
      highlights: ['Web Development', 'Database Design', 'Software Engineering']
    }
  ]

  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'] },
    { category: 'Tools', items: ['Git', 'Vercel', 'Render', 'VS Code', 'Figma'] },
    { category: 'Soft Skills', items: ['Problem Solving', 'Team Collaboration', 'Communication', 'Creative Thinking'] }
  ]

  return (
    <section id="resume" className="py-20 bg-slate-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center gap-3 mb-4">
          <FileText className="w-8 h-8 text-cyan-400" />
          <h2 className="text-4xl font-bold text-white">Resume</h2>
        </div>
        
        <p className="text-gray-300 mb-12 text-lg max-w-2xl">
          Download my full resume or explore my professional experience and skills below.
        </p>

        {/* Resume Download Card */}
        <div className="mb-12 p-6 bg-gradient-to-r from-blue-600/20 to-cyan-600/20 border border-cyan-400/30 rounded-lg flex items-center justify-between">
          <div>
            <h3 className="text-xl font-semibold text-white mb-1">Full Resume Available</h3>
            <p className="text-gray-300">Download my complete resume as PDF</p>
          </div>
          <a
            href="https://munkherdenex.github.io/portfolio/MunkhErdene_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white rounded-lg font-semibold transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
          >
            <Download className="w-5 h-5" />
            Download PDF
          </a>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience & Education */}
          <div className="lg:col-span-2 space-y-8">
            {/* Experience */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Experience</h3>
              <div className="space-y-4">
                {experiences.map((exp, idx) => (
                  <Card key={idx} className="bg-slate-800/80 border-slate-700 hover:border-cyan-500/50 transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-white">{exp.title}</CardTitle>
                          <CardDescription className="text-cyan-400 font-semibold">{exp.company}</CardDescription>
                        </div>
                        <span className="text-sm text-gray-400 font-medium">{exp.period}</span>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <p className="text-gray-300">{exp.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge key={skill} className="bg-blue-600/40 text-blue-200 border border-blue-500/50 hover:bg-blue-600/60">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Education</h3>
              <div className="space-y-4">
                {education.map((edu, idx) => (
                  <Card key={idx} className="bg-slate-800/80 border-slate-700 hover:border-cyan-500/50 transition-all">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg text-white">{edu.degree}</CardTitle>
                          <CardDescription className="text-cyan-400 font-semibold">{edu.school}</CardDescription>
                        </div>
                        <span className="text-sm text-gray-400 font-medium">{edu.year}</span>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {edu.highlights.map((highlight) => (
                          <Badge key={highlight} className="bg-green-600/40 text-green-200 border border-green-500/50">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Sidebar */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">Skills</h3>
            <div className="space-y-6">
              {skills.map((skillGroup, idx) => (
                <div key={idx} className="bg-slate-800/80 p-4 rounded-lg border border-slate-700 hover:border-cyan-500/50 transition-all">
                  <h4 className="font-semibold text-cyan-400 mb-3">{skillGroup.category}</h4>
                  <div className="space-y-2">
                    {skillGroup.items.map((skill) => (
                      <div key={skill} className="flex items-center gap-2">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                        <span className="text-gray-300 text-sm">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
