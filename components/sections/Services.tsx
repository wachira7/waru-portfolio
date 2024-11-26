import React from 'react'
import { Code, Search, Database } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import { Service } from '@/types'

const IconMap = {
  code: Code,
  search: Search,
  api: Database,
}

const ServiceCard = ({ service }: { service: Service }) => {
  const IconComponent = IconMap[service.icon as keyof typeof IconMap]

  return (
    <div className="group p-6 bg-dark-light rounded-lg transition-all duration-300 ease-in-out hover:scale-[1.02] hover:shadow-2xl">
      {/* Icon Container */}
      <div className="w-12 h-12 bg-dark/50 rounded-lg flex items-center justify-center mb-4 transition-transform group-hover:-translate-y-1">
        <IconComponent className="w-6 h-6 text-primary transition-colors group-hover:text-white" />
      </div>

      {/* Title & Description */}
      <h3 className="text-xl font-semibold mb-3 transition-colors group-hover:text-primary">
        {service.title}
      </h3>
      <p className="text-gray-400 mb-6">
        {service.description}
      </p>

      {/* Features List */}
      <ul className="space-y-3">
        {service.features.map((feature, index) => (
          <li 
            key={index} 
            className="text-gray-300 flex items-center transition-all duration-300 hover:translate-x-2"
          >
            <span className="w-1.5 h-1.5 bg-primary rounded-full mr-2 transition-all group-hover:scale-125" />
            {feature}
          </li>
        ))}
      </ul>
    </div>
  )
}

const Services = () => {
  return (
    <section id="services" className="py-20 bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            My Services
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            I offer a wide range of web development services to help bring your ideas to life
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services