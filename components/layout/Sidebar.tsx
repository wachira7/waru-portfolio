"use client"

import React, {useState, useEffect} from 'react'
import Link from 'next/link'
//import { usePathname } from 'next/navigation'
import { Home, User, Briefcase, Mail, FileText, Menu, Settings, X } from 'lucide-react'
import Image from 'next/image'


interface NavItemProps {
  href: string
  isActive: boolean
  icon: React.ReactNode
  label: string
  isExpanded: boolean
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
     
      {/* Icon with transition */}
      <span className="relative min-w-[24px] transition-transform duration-300 ease-in-out">
        {icon}
      </span>

      {/* Label with fade transition */}
      {isExpanded && (
        <span className="ml-3 whitespace-nowrap transition-all duration-300 ease-in-out relative">
          {label}
        </span>
      )}
    </Link>
  )
}

const Sidebar = () => {
//const pathname = usePathname()
  const [isExpanded, setIsExpanded] = useState(false)
  const [activeSection,setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      // Get all the sections
      const sections = document.querySelectorAll('section[id]');
      let currentActive = 'home';
  
      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop = sectionElement.offsetTop - 100; // Offset for better trigger point
        const sectionBottom = sectionTop + sectionElement.clientHeight;
        const scrollPosition = window.scrollY;
  
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          currentActive = section.getAttribute('id') || 'home';
        }
      });
  
      // when one is at the very top, set active to home
      if (window.scrollY < 100) {
        currentActive = 'home';
      }
  
      setActiveSection(currentActive);
    };
  
    //  scroll event listener with debouncing
    let timeoutId: NodeJS.Timeout;
    const onScroll = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(handleScroll, 100);
    };
  
    window.addEventListener('scroll', onScroll);
    handleScroll(); // Check initial position
  
    return () => {
      window.removeEventListener('scroll', onScroll);
      clearTimeout(timeoutId);
    };
  }, []);
   

  const isActive = (href: string) => {
    if (href === '/') {
      return activeSection === 'home'
    }
    return href.replace('#', '') === activeSection
    }

  return (
    <nav 
    className={`fixed left-0 top-0 h-screen bg-dark-lighter flex flex-col py-8 
      transition-all duration-300 ${isExpanded ? 'w-64' : 'w-20'} z-50`}
  >
     {/* Profile Image */}
     <div className={`flex items-center px-4 mb-8 ${isExpanded ? 'justify-between' : 'justify-center'}`}>
        <div className="w-12 h-12 rounded-full overflow-hidden bg-dark-light relative">
          <Image
            src="/images/profile/20241114_160833.jpg"
            alt="Profile"
            width={48}
            height={48}
            className="object-cover"
          />
        </div>
        {isExpanded && (
          <div className="ml-3">
            <h3 className="text-sm font-medium">Emmanuel Wachira</h3>
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
        isActive={isActive('/')}
        icon={<Home size={20} />}
        label="Home"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#about" 
        isActive={isActive('#about')}
        icon={<User size={20} />}
        label="About"
        isExpanded={isExpanded}
      />

      <NavItem 
        href="#services" 
        isActive={isActive('#services')}
        icon={<Settings size={20} />}
        label="Services"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#projects" 
        isActive={isActive('#projects')}
        icon={<Briefcase size={20} />}
        label="Projects"
        isExpanded={isExpanded}
      />

      <NavItem 
        href="/blog" 
        isActive={isActive('#blog')}
        icon={<FileText size={20} />}
        label="Blog"
        isExpanded={isExpanded}
      />
      
      <NavItem 
        href="#contact" 
        isActive={isActive('#contact')}
        icon={<Mail size={20} />}
        label="Contact"
        isExpanded={isExpanded}
      />
    </div>
  </nav>
)
}

export default Sidebar