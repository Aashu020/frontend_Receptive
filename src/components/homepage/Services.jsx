import React, { useState } from 'react'

function Services() {
  const [activeService, setActiveService] = useState(0)

  const services = [
    {
      id: 1,
      title: "Visitor Visa",
      shortTitle: "Visitor Visa",
      image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Travel with the desire of family fun or business, for religious purposes or for leisure, the overseas tourism industry has a lot to offer. Hundreds of places to visit, lots of knowledge acquaintances, a penny to earn and a tour for faith, all depends upon the visitor visa.",
      subServices: ["Visitor Visa"]
    },
    {
      id: 2,
      title: "Student Visa",
      shortTitle: "Student Visa",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9d1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Today it is extremely necessary for people to go out of their own world and explore a modern environment that is served by places of the foreign world. Understanding diverse cultures, improving language skills, personal development and various experiences of life is all you get through studies abroad.",
      subServices: ["Canada Student Visa", "UK Student Visa", "Australia Student Visa", "New Zealand"]
    },
    {
      id: 3,
      title: "Work Visa",
      shortTitle: "Work Visa",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "There are certain options for Work Visa where you can take your family along. But that depends on the company and the Visa norms. All you need is a high level of Education, strong Profile and company selection in most matters. If you possess the required qualities, no doubt you'll easily fly to some offshore country.",
      subServices: ["Work Permit Canada", "Tier2 Work Permit Canada", "Tier5 Work Permit Canada"]
    },
    {
      id: 4,
      title: "Permanent Residence Visa",
      shortTitle: "Permanent Residence",
      image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Immigrant visas are issued to foreign nationals who intend to live permanently in the United States. Nonimmigrant visas are for foreign nationals wishing to enter the United States on a temporary basis.",
      subServices: ["Australia Immigration Visa", "Canada Immigration Visa", "Denmark Immigration Visa"]
    },
    {
      id: 5,
      title: "Second Citizenship through Investment",
      shortTitle: "Second Citizenship",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
      description: "Immigrant visas are issued to foreign nationals who intend to live permanently in the United States. Nonimmigrant visas are for foreign nationals wishing to enter the United States on a temporary basis.",
      subServices: ["Australia Immigration Visa", "Canada Immigration Visa", "Denmark Immigration Visa"]
    }
  ]

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text" >
            Our Services
          </h2>
          <p className="text-lg text-gray-600">
            Comprehensive visa and immigration services tailored to your needs
          </p>
        </div>

        {/* Services Navigation Bar */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-2 p-2 rounded-xl shadow-lg" style={{ backgroundColor: '#0C3B34' }}>
            {services.map((service, index) => (
              <button
                key={service.id}
                onClick={() => setActiveService(index)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 text-sm sm:text-base ${
                  activeService === index
                    ? 'bg-[#D8C287] text-[#0a2d27]  shadow-md'
                    : 'hover:bg-[#0a2d27] hover:text-white'
                }`}
                style={{
                  color: activeService === index ? '#0C3B34' : 'white'
                }}
              >
                <span className="hidden sm:inline">{String(index + 1).padStart(2, '0')}. {service.shortTitle}</span>
                <span className="sm:hidden">{String(index + 1).padStart(2, '0')}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Active Service Display */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="lg:flex">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={services[activeService].image}
                alt={services[activeService].title}
                className="w-full h-64 lg:h-full object-cover"
              />
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12">
              <div className="flex items-center gap-4 mb-6">
                <span 
                  className="text-6xl font-bold opacity-20"
                  style={{ color: '#D8C287' }}
                >
                  {String(activeService + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-3xl font-bold mb-2" style={{ color: '#0C3B34' }}>
                    {services[activeService].title}
                  </h3>
                  <p className="text-sm font-medium" style={{ color: '#D8C287' }}>
                    12 Years Of Experience In This Industry
                  </p>
                </div>
              </div>

              <p className="text-gray-600 leading-relaxed mb-8">
                {services[activeService].description}
              </p>

              {/* Sub-services */}
              <div className="space-y-3">
                <h4 className="text-lg font-semibold mb-4" style={{ color: '#0C3B34' }}>
                  Available Services:
                </h4>
                {services[activeService].subServices.map((subService, index) => (
                  <div key={index} className="flex items-center gap-3 group">
                    <div 
                      className="w-2 h-2 rounded-full flex-shrink-0"
                      style={{ backgroundColor: '#D8C287' }}
                    ></div>
                    <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                      {subService}
                    </span>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>

        {/* Service Cards Grid - Mobile Alternative */}
        <div className="lg:hidden mt-12 grid gap-6">
          {services.filter((_, index) => index !== activeService).map((service, index) => (
            <div key={service.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span 
                    className="text-2xl font-bold"
                    style={{ color: '#D8C287' }}
                  >
                    {String(services.findIndex(s => s.id === service.id) + 1).padStart(2, '0')}
                  </span>
                  <h3 className="text-xl font-bold" style={{ color: '#0C3B34' }}>
                    {service.title}
                  </h3>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  {service.description.substring(0, 120)}...
                </p>
                <button
                  onClick={() => setActiveService(services.findIndex(s => s.id === service.id))}
                  className="text-sm font-medium hover:underline"
                  style={{ color: '#0C3B34' }}
                >
                  View Details →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services