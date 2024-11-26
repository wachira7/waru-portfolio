export type IconName = 'code' | 'consulting' | 'api' | 'web' | 'mobile' | 'design' | 'search'
export type Status = 'draft' | 'published' | 'archived'

// Project interface
export interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  link?: string
  github?: string
  featured: boolean
  completedAt: string
  category: 'web' | 'mobile' | 'desktop' | 'other'
  technologies: string[]
}

// Service interface
export interface Service {
  id: string
  title: string
  description: string
  icon: IconName
  features: string[]
  isAvailable: boolean
}

// Testimonial interface
export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  image: string
  rating: number
  date: string
  isPublic: boolean
}

// Blog related interfaces
export interface Author {
  id: string
  name: string
  image: string
  bio?: string
  socialLinks?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  publishedAt: string
  readingTime: string
  tags: string[]
  author: Author
  status: Status
  views?: number
  likes?: number
  featured: boolean
  seoDescription?: string
  previousPost?: { slug: string; title: string }
  nextPost?: { slug: string; title: string }
}

// Add NavItem type for navigation
export interface NavItem {
  name: string
  href: string
  icon?: IconName
  isExternal?: boolean
}

// Add ContactForm type
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}