"use client"

import React, {useState} from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, FileText, Menu, Settings, X } from 'lucide-react'

interface NavItemProps {
  href: string
  isActive: boolean
  icon: React.ReactNode
  label: string
  isExpannded: boolean
}

const NavItem = ({ href, isActive, icon, label, isExpanded }: NavItemProps) => {
  return (
    <Link 
      href={href} 
      className={`flex items-center p-3 rounded-lg transition-all duration-300 ${
        isActive 
          ? 'bg-dark-light text-white' 
          : 'text-gray-400 hover:text-white'
      }`}
    >
       <span className="min-w-[24px]">{icon}</span>
      {isExpanded && (
        <span className="ml-3 whitespace-nowrap">{label}</span>
      )}
    </Link>
  )
}

const Sidebar = () => {
  const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <nav 
    className={`fixed left-0 top-0 h-screen bg-dark-lighter flex flex-col py-8 
      transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'}`}
  >
    {/* Profile Image */}
    <div className={`flex items-center px-4 mb-8 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
      <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-light">
        <img 
          src="/images/profile/20241114_160833.jpg" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
      {isExpanded && (
        <div className="ml-3">
          <h3 className="text-sm font-medium">Emmanuel Warutsz</h3>
          <p className="text-xs text-gray-400">Full Stack Developer</p>
        </div>
      )}
    </div>
    
    {/* Navigation Items */}
    <div className="flex flex-col space-y-2 px-3">
      <button 
        onClick={() => setIsExpanded(!isExpanded)}
        className="flex items-center p-3 text-gray-400 hover:text-white transition-colors"
      >
        {isExpanded ? <X size={24} /> : <Menu size={24} />}
      </button>
      
      <div className="w-full h-px bg-gray-700 my-3" />
      
      <NavItem 
        href="/" 
        isActive={pathname === '/'} 
        icon={<Home size={20} />}
        label="Home"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#about" 
        isActive={pathname === '/about'} 
        icon={<User size={20} />}
        label="About"
        isExpanded={isExpanded}
      />

      <NavItem 
        href="#services" 
        isActive={pathname === '/services'} 
        icon={<Settings size={20} />}
        label="Services"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#projects" 
        isActive={pathname === '/projects'} 
        icon={<Briefcase size={20} />}
        label="Projects"
        isExpanded={isExpanded}
      />

      <NavItem 
        href="/blog" 
        isActive={pathname === '/blog'} 
        icon={<FileText size={20} />}
        label="Blog"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#contact" 
        isActive={pathname === '/contact'} 
        icon={<Mail size={20} />}
        label="Contact"
        isExpanded={isExpanded}
      />
    </div>
  </nav>
)
}

export default Sidebar