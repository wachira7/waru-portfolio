"use client"

import React from 'react'
import { ArrowRight, Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

const Hero = () => {
  return (
    <section className="min-h-[calc(100vh-80px)] flex items-center">
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Full Stack Developer
                <span className="text-primary block">Emmanuel Warutsz</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-400">
                Building modern web applications with cutting-edge technologies.
                Specializing in React, Next.js, and full-stack development.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4">
              <a 
                href="#projects"
                className="px-6 py-3 bg-primary hover:bg-primary-dark text-white rounded-lg 
                  flex items-center gap-2 transition-colors"
              >
                View Projects
                <ArrowRight size={20} />
              </a>
              <a 
                href="#contact"
                className="px-6 py-3 border border-gray-700 hover:border-primary 
                  text-white rounded-lg transition-colors"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <a 
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Github size={24} />
              </a>
              <a 
                href={SOCIAL_LINKS.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={SOCIAL_LINKS.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={24} />
              </a>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden bg-dark-lighter">
              <img 
                src="/api/placeholder/600/600" 
                alt="Emmanuel Warutsz" 
                className="w-full h-full object-cover"
              />
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero