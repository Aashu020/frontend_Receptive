import React, { useState, useEffect } from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'
import visitor from "../../assets/HomepageImages/visitorvisa.avif"
import permannet from "../../assets/HomepageImages/permannentvisa.avif"
import secondvisa from "../../assets/HomepageImages/secondcitizenship.avif"
import studentvisa from "../../assets/HomepageImages/studentvisa.png"
import workvisa from "../../assets/HomepageImages/workvisa.png"

function Services() {
  const location = useLocation()
  const [searchParams] = useSearchParams()
  
  // Initialize activeService based on navigation data
  const [activeService, setActiveService] = useState(() => {
    // Check for state from navigation
    if (location.state?.activeService !== undefined) {
      return location.state.activeService
    }
    
    // Check for query parameter
    const serviceParam = searchParams.get('service')
    if (serviceParam !== null && !isNaN(serviceParam)) {
      return parseInt(serviceParam)
    }
    
    // Check for hash
    if (location.hash) {
      const hashMatch = location.hash.match(/service-(\d+)/)
      if (hashMatch) {
        return parseInt(hashMatch[1])
      }
    }
    
    // Default to first service
    return 0
  })

  // Update activeService when navigation data changes
  useEffect(() => {
    let newActiveService = 0;
    
    // Check for state from navigation
    if (location.state?.activeService !== undefined) {
      newActiveService = location.state.activeService;
    }
    // Check for query parameter
    else if (searchParams.get('service') !== null && !isNaN(searchParams.get('service'))) {
      newActiveService = parseInt(searchParams.get('service'));
    }
    // Check for hash
    else if (location.hash) {
      const hashMatch = location.hash.match(/service-(\d+)/);
      if (hashMatch) {
        newActiveService = parseInt(hashMatch[1]);
      }
    }
    
    // Update active service
    setActiveService(newActiveService);
    
    // Scroll to services section when navigating from footer with more margin
    if (location.state?.activeService !== undefined || 
        searchParams.get('service') !== null || 
        location.hash.includes('service-')) {
      // Small delay to ensure component is rendered
      setTimeout(() => {
        window.scrollTo({
          top: 0, // Added more margin from top (100px instead of 0)
          behavior: 'smooth'
        })
      }, 100)
    }
  }, [location.state, searchParams, location.hash])

  const services = [
    {
      id: "s1",
      title: "Visitor Visa",
      shortTitle: "Visitor Visa",
      image: visitor,
      description: "Travel with the desire of family fun or business, for religious purposes or for leisure, the overseas tourism industry has a lot to offer. Hundreds of places to visit, lots of knowledge acquaintances, a penny to earn and a tour for faith, all depends upon the visitor visa.",
      subServices: ["Visitor Visa"]
    },
    {
      id: "s2",
      title: "Student Visa",
      shortTitle: "Student Visa",
      image: studentvisa,
      description: "Today it is extremely necessary for people to go out of their own world and explore a modern environment that is served by places of the foreign world. Understanding diverse cultures, improving language skills, personal development and various experiences of life is all you get through studies abroad.",
      subServices: ["Canada Student Visa", "UK Student Visa", "Australia Student Visa", "New Zealand"]
    },
    {
      id: "s3",
      title: "Work Visa",
      shortTitle: "Work Visa",
      image: workvisa,
      description: "There are certain options for Work Visa where you can take your family along. But that depends on the company and the Visa norms. All you need is a high level of Education, strong Profile and company selection in most matters. If you possess the required qualities, no doubt you'll easily fly to some offshore country.",
      subServices: ["Work Permit Canada", "Tier2 Work Permit Canada", "Tier5 Work Permit Canada"]
    },
    {
      id: "s4",
      title: "Permanent Residence Visa",
      shortTitle: "Permanent Residence",
      image: permannet,
      description: "Immigrant visas are issued to foreign nationals who intend to live permanently in the United States. Nonimmigrant visas are for foreign nationals wishing to enter the United States on a temporary basis.",
      subServices: ["Australia Immigration Visa", "Canada Immigration Visa", "Denmark Immigration Visa"]
    },
    {
      id: "s5",
      title: "Second Citizenship through Investment",
      shortTitle: "Second Citizenship",
      image: secondvisa,
      description: "Immigrant visas are issued to foreign nationals who intend to live permanently in the United States. Nonimmigrant visas are for foreign nationals wishing to enter the United States on a temporary basis.",
      subServices: ["Australia Immigration Visa", "Canada Immigration Visa", "Denmark Immigration Visa"]
    }
  ]

  return (
    <div className="bg-gray-50 py-16 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text">
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
                    ? 'bg-[#D8C287] text-[#0a2d27] shadow-md'
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