"use client"

import React from 'react'
import * as SimpleIcons from 'simple-icons'

const TechStackCarousel = () => {
  const techs = [
    {
      name: 'react',
      displayName: 'React',
      color: '#61DAFB'
    },
    {
      name: 'nextdotjs',
      displayName: 'Next.js',
      color: '#000000'
    },
    {
      name: 'typescript',
      displayName: 'TypeScript',
      color: '#3178C6'
    },
    {
      name: 'javascript',
      displayName: 'JavaScript',
      color: '#F7DF1E'
    },
    {
      name: 'nodedotjs',
      displayName: 'Node.js',
      color: '#339933'
    },
    {
      name: 'python',
      displayName: 'Python',
      color: '#3776AB'
    },
    {
      name: 'postgresql',
      displayName: 'PostgreSQL',
      color: '#4169E1'
    },
    {
      name: 'tailwindcss',
      displayName: 'Tailwind CSS',
      color: '#06B6D4'
    },
    {
      name: 'git',
      displayName: 'Git',
      color: '#F05032'
    },
    {
      name: 'solidity',
      displayName: 'Solidity',
      color: '#363636'
    }
  ];

  return (
    <div className="tech-carousel w-full overflow-hidden bg-dark-light/10 py-8">
      <div className="tech-slider flex">
        {techs.map((tech, index) => {
          const iconKey = `si${tech.name}`
          const icon = SimpleIcons[iconKey]

          if (!icon) return null

          return (
            <div 
              key={`${tech.name}-1-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-dark-light rounded-lg hover:scale-110 transition-all duration-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill={tech.color}
                  dangerouslySetInnerHTML={{ __html: icon.path }}
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-light rounded text-sm text-white 
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.displayName}
              </span>
            </div>
          )
        })}
        {/* Duplicate set for seamless loop */}
        {techs.map((tech, index) => {
          const iconKey = `si${tech.name}`
          const icon = SimpleIcons[iconKey]

          if (!icon) return null

          return (
            <div 
              key={`${tech.name}-2-${index}`}
              className="flex-shrink-0 mx-6 group"
            >
              <div className="w-16 h-16 flex items-center justify-center bg-dark-light rounded-lg hover:scale-110 transition-all duration-300">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill={tech.color}
                  dangerouslySetInnerHTML={{ __html: icon.path }}
                />
              </div>
              <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-light rounded text-sm text-white 
                opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {tech.displayName}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default TechStackCarousel