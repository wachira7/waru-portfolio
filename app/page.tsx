import { Metadata } from 'next'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Skills from '@/components/sections/Skills'
import Services from '@/components/sections/Services'
import Projects from '@/components/sections/Projects'
//import Blogs from '@/components/sections/Blogs'
import Contact from '@/components/sections/Contact'

export const metadata: Metadata = {
  title: 'Emmanuel Wachira - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
}

export default function Home() {
  return (
    <main className="bg-dark text-white">
      <Hero />
      <About />
      <Skills />
      <Services />
      <Projects />
      {/* <Blog /> */}
      <Contact />

    </main>
  )
}