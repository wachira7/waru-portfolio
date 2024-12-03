import React from 'react'
import Link from 'next/link'
import { Github, Linkedin, Twitter } from 'lucide-react'
import { SOCIAL_LINKS } from '@/lib/constants'

const Footer = () => {
  return (
    <footer className="bg-dark-lighter">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Emmanuel Warutsz</h3>
            <p className="text-gray-400">
              Full-stack developer specializing in modern web technologies and creating exceptional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-gray-400 hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex flex-col space-y-4">
              <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.githubPersonal}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github size={24} />
                  <span className="text-sm">Personal GitHub</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.githubWork}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Github size={24} />
                  <span className="text-sm">Work GitHub</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Linkedin size={24} />
                  <span className="text-sm">LinkedIn</span>
                </a>
              </div>
              <div className="flex space-x-4">
                <a 
                  href={SOCIAL_LINKS.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-2"
                >
                  <Twitter size={24} />
                  <span className="text-sm">Twitter</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-dark-light mt-8 pt-8 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Emmanuel Warutsz. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer