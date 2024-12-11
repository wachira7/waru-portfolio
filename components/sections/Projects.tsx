"use client"

import React from 'react'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import { PROJECTS, Project } from '@/lib/constants'
import Image from 'next/image'

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-dark-light rounded-lg overflow-hidden group hover:transform hover:scale-[1.02] transition-all duration-300">
      {/* Project Image */}
      <div className="aspect-video w-full overflow-hidden relative">
        <Image 
          src={project.image} 
          alt={project.title}
          width={600}
          height={400}
          className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
        />
      </div>

      {/* Project Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3">{project.title}</h3>
        <p className="text-gray-400 mb-4">{project.description}</p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span 
              key={tag}
              className="px-3 py-1 bg-dark rounded-full text-sm text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.github && (
            <a 
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub size={20} />
              <span>Code</span>
            </a>
          )}
          {project.demo && (
            <a 
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <FaExternalLinkAlt size={18} />
              <span>Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-dark">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects