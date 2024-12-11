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
        <main className="flex-1 ml-20 w-full">
          {/* Content Container */}
          <div className="max-w-[1600px] mx-auto w-full">
            {children}
          </div>
          
          <Footer />
        </main>
      </div>
    </div>
  )
}

export default RootLayout