"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, FileText, Menu, Settings } from 'lucide-react'

interface NavItemProps {
  href: string
  isActive: boolean
  icon: React.ReactNode
  label: string
}

const NavItem = ({ href, isActive, icon, label }: NavItemProps) => {
  return (
    <Link 
      href={href} 
      className={`p-3 rounded-lg transition-colors group relative ${
        isActive 
          ? 'bg-dark-light text-white' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
      {icon}
      {/* Tooltip */}
      <span className="absolute left-full ml-2 px-2 py-1 bg-dark-light rounded text-sm invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-200">
        {label}
      </span>
    </Link>
  )
}

const Sidebar = () => {
  const pathname = usePathname()

  return (
    <nav className="fixed left-0 top-0 h-screen w-20 bg-dark-lighter flex flex-col items-center py-8 space-y-8 border-r border-dark-light">
      {/* Profile Image */}
      <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-light hover:ring-2 hover:ring-primary transition-all cursor-pointer">
        <img 
          src="/api/placeholder/48/48" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Navigation Items */}
      <div className="flex flex-col items-center space-y-6">
        <button className="text-gray-400 hover:text-white transition-colors p-3">
          <Menu size={24} />
        </button>
        
        <div className="w-10 h-px bg-gray-700" />
        
        <NavItem 
          href="/" 
          isActive={pathname === '/'} 
          icon={<Home size={20} />}
          label="Home"
        />
        
        <NavItem 
          href="#about" 
          isActive={pathname === '/about'} 
          icon={<User size={20} />}
          label="About"
        />

        <NavItem 
          href="#services" 
          isActive={pathname === '/services'} 
          icon={<Settings size={20} />}
          label="Services"
        />
        
        <NavItem 
          href="#projects" 
          isActive={pathname === '/projects'} 
          icon={<Briefcase size={20} />}
          label="Projects"
        />

        <NavItem 
          href="/blog" 
          isActive={pathname === '/blog'} 
          icon={<FileText size={20} />}
          label="Blog"
        />
        
        <NavItem 
          href="#contact" 
          isActive={pathname === '/contact'} 
          icon={<Mail size={20} />}
          label="Contact"
        />
      </div>
    </nav>
  )
}

export default Sidebar