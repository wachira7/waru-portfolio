"use client"

import React from 'react'
import { FaReact, FaNodeJs, FaPython, FaGit } from 'react-icons/fa'
import { SiTypescript, SiJavascript, SiNextdotjs, SiTailwindcss, SiPostgresql, SiSolidity, SiFlask } from 'react-icons/si'

const TechStackCarousel = () => {
  const techs = [
    {
      name: 'React',
      icon: <FaReact size={40} />,
      color: '#61DAFB'
    },
    {
      name: 'Next.js',
      icon: <SiNextdotjs size={40} />,
      color: '#000000'
    },
    {
      name: 'TypeScript',
      icon: <SiTypescript size={40} />,
      color: '#3178C6'
    },
    {
      name: 'Flask',    
      icon: <SiFlask size={40} />,
      color: '#000000'
    },
    {
      name: 'JavaScript',
      icon: <SiJavascript size={40} />,
      color: '#F7DF1E'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs size={40} />,
      color: '#339933'
    },
    {
      name: 'Python',
      icon: <FaPython size={40} />,
      color: '#3776AB'
    },
    {
      name: 'PostgreSQL',
      icon: <SiPostgresql size={40} />,
      color: '#4169E1'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss size={40} />,
      color: '#06B6D4'
    },
    {
      name: 'Git',
      icon: <FaGit size={40} />,
      color: '#F05032'
    },
    {
      name: 'Solidity',
      icon: <SiSolidity size={40} />,
      color: '#363636'
    }
  ];

  return (
    <div className="tech-carousel w-full overflow-hidden bg-dark-light/10 py-8">
      <div className="tech-slider flex">
        {techs.map((tech, index) => (
          <div 
            key={`${tech.name}-1-${index}`}
            className="flex-shrink-0 mx-6 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-dark-light rounded-lg hover:scale-110 transition-all duration-300">
              <div style={{ color: tech.color }}>
                {tech.icon}
              </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-light rounded text-sm text-white 
              opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
        {techs.map((tech, index) => (
          <div 
            key={`${tech.name}-2-${index}`}
            className="flex-shrink-0 mx-6 group"
          >
            <div className="w-16 h-16 flex items-center justify-center bg-dark-light rounded-lg hover:scale-110 transition-all duration-300">
              <div style={{ color: tech.color }}>
                {tech.icon}
              </div>
            </div>
            <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-2 py-1 bg-dark-light rounded text-sm text-white 
              opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStackCarousel