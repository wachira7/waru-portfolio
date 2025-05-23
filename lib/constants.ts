export const NAVIGATION = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Blog', href: '/blog' },  // Added blog
    { name: 'Contact', href: '#contact' }
  ]
  
  export const SOCIAL_LINKS = {
    githubPersonal: 'https://github.com/wachira7',
    githubWork: 'https://github.com/waru-emmanuel',
    linkedin: 'https://www.linkedin.com/in/emmanuelwaruts77/',
    twitter: 'your-twitter-url'
  }
  
  export const BLOG_CATEGORIES = [
    'Web Development',
    'Programming',
    'Technology',
    'Career',
    'Tutorial'
  ]
  
  export const SAMPLE_BLOG_POSTS = [
    {
      id: '1',
      title: 'Getting Started with Next.js and TypeScript',
      slug: 'getting-started-nextjs-typescript',
      excerpt: 'Learn how to set up a new Next.js project with TypeScript and best practices for type safety.',
      publishedAt: '2024-11-26',
      readingTime: '5 min read',
      tags: ['Next.js', 'TypeScript', 'Web Development'],
      author: {
        name: 'Emmanuel Warutsz',
        image: '/images/author.jpg'
      }
    },
    {
      id: '2',
      title: 'Building Modern Web Applications',
      slug: 'building-modern-web-applications',
      excerpt: 'Explore the latest techniques and best practices for building scalable web applications.',
      publishedAt: '2024-11-25',
      readingTime: '8 min read',
      tags: ['Web Development', 'Architecture', 'Performance'],
      author: {
        name: 'Emmanuel Warutsz',
        image: '/images/author.jpg'
      }
    },
    {
      id: '3',
      title: 'Mastering React Hooks',
      slug: 'mastering-react-hooks',
      excerpt: 'Deep dive into React Hooks and learn how to write more efficient functional components.',
      publishedAt: '2024-11-24',
      readingTime: '6 min read',
      tags: ['React', 'JavaScript', 'Web Development'],
      author: {
        name: 'Emmanuel Warutsz',
        image: '/images/author.jpg'
      }
    }
  ]
  
  // Add services section constants
  import { Service } from '@/types'

export const SERVICES: Service[] = [
  {
    id: '1',
    title: 'Web Development',
    description: 'Building modern, responsive websites and web applications with React, Next.js, and other cutting-edge technologies.',
    icon: 'code',  // Now TypeScript knows this must be one of our IconName values
    features: [
      'Custom website development',
      'Single Page Applications (SPA)',
      'Progressive Web Apps (PWA)',
      'Responsive design implementation'
    ],
    isAvailable: true
  },
  {
    id: '2',
    title: 'Technical SEO',
    description: 'Optimizing your website performance and search engine visibility through technical improvements.',
    icon: 'search',
    features: [
      'Performance optimization',
      'Search engine optimization',
      'Website audits',
      'Core Web Vitals improvement'
    ],
    isAvailable: true
  },
  {
    id: '3',
    title: 'API Development',
    description: 'Designing and building robust APIs to power your web and mobile applications.',
    icon: 'api',
    features: [
      'RESTful API design',
      'API documentation',
      'Integration services',
      'Performance optimization'
    ],
    isAvailable: true
  }
]
  
  // Add skills section constants
  export const SKILLS = {
    technical: [
      { name: 'React', level: 90 },
      { name: 'TypeScript', level: 55 },
      { name: 'Node.js', level: 50 },
      { name: 'Next.js', level: 65 },
      { name: 'Python', level: 75 }
    ],
    soft: [
      'Problem Solving',
      'Team Collaboration',
      'Communication',
      'Project Management',
      'Agile Methodologies'
    ]
  }

  export interface Project {
    id: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    github?: string;
    demo?: string;
  }
 
  export const PROJECTS: Project[] = [
    {
      id: '1',
      title: 'Portfolio Website',
      description: 'Modern portfolio website built with Next.js, React, and Tailwind CSS. Features smooth animations and responsive design.',
      image: '/images/projects/portfolio.jpg',
      tags: ['Next.js', 'React', 'Tailwind CSS', 'TypeScript'],
      github: 'https://github.com/yourusername/portfolio',
      demo: 'https://your-portfolio.com'
    },
    {
      id: '2',
      title: 'Logistics Management App',
      description: 'A Logistics management app built with Python, Flask, React, and Tailwind CSS. Features smooth animations, responsive design and highly secure authentication.',
      image: '/images/projectimg/LMP-APP.png',
      tags: ['Python', 'Flask', 'React', 'Tailwind CSS', 'PostgreSQL','SQLite'],
      github: 'https://github.com/Fuata-tech/logistic_management_system',
      demo: 'https://fuata-tech-client.onrender.com/welcome'
    }
  ];