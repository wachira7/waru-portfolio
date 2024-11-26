import { Metadata } from 'next'
import Services from '@/components/sections/Services'

export const metadata: Metadata = {
  title: 'Emmanuel Warutsz - Full Stack Developer',
  description: 'Full Stack Developer specializing in modern web technologies',
}

export default function Home() {
  return (
    <main className="bg-dark text-white">
      <Services />
    </main>
  )
}