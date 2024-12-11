"use client"

import React from 'react'
import { Code, Server, Globe } from 'lucide-react'
import TechStackCarousel from '@/components/ui/TechStackCarousel'

const skills = [
  {
    category: "Frontend Development",
    icon: <Code className="w-6 h-6 text-primary" />,
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Javascript"]
  },
  {
    category: "Backend Development",
    icon: <Server className="w-6 h-6 text-primary" />,
    skills: ["Node.js", "Python", "RESTful APIs", "SQLite", "PostgreSQL","Flask"]
  },
  {
    category: "Other Skills",
    icon: <Globe className="w-6 h-6 text-primary" />,
    skills: ["Git", "Testing", "Agile Methodologies","Solidity"]
  }
]

const About = () => {
  return (
    <section id="about" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
          I&apos;m a passionate Full Stack Developer with expertise in building modern web applications using cutting-edge technologies. {/* eslint-disable-line react/no-unescaped-entities */}
          </p>
        </div>

       

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column - Background & Summary */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Background</h3>
            <p className="text-gray-400">
             With a year of hands-on experience in web development, I&apos;ve worked on various projects
             that have helped me develop strong skills in modern web technologies. I&apos;m passionate
             about creating efficient, scalable, and user-friendly solutions while continuously
             learning and growing in this dynamic field.
            </p>
            
            <div className="space-y-4">
              <h4 className="text-xl font-semibold">Professional Summary</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  Focused on building full-stack web applications using modern technologies
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  Experience with agile development methodologies and team collaboration
                </li>
                <li className="flex items-start">
                  <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-2 flex-shrink-0" />
                  Strong focus on code quality, performance, and user experience
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Skills */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Skills & Expertise</h3>
            <div className="grid gap-6">
              {skills.map((category, index) => (
                <div 
                  key={index} 
                  className="p-6 bg-dark-light rounded-lg transition-transform hover:scale-[1.02]"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {category.icon}
                    <h4 className="text-lg font-semibold">{category.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-dark rounded-full text-sm text-gray-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/*Tech Stack Carousel*/}
        <TechStackCarousel />
      </div>
    </section>
  )
}

export default About