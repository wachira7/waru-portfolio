import React from 'react'
import Sidebar from './Sidebar'
import Footer from './Footer'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="min-h-screen bg-dark text-white">
      {/* Main Content Layout */}
      <div className="flex">
        <Sidebar />
        
        {/* Main Content */}
        <main className="flex-1 ml-20 transition-all duration-300">
          {/* Content Container */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen pb-20">
            {children}
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default RootLayout