import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import RootLayout from '@/components/layout/RootLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Emmanuel Wachira - Portfolio',
  description: 'Full Stack Developer Portfolio',
}

export default function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} w-full`}>
        <RootLayout>
          {children}
        </RootLayout>
      </body>
    </html>
  )
}