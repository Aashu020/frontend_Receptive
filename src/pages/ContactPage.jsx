import React from 'react'
import ContactForm from '../components/ContactForm'
import { Building2, MapPin, Phone, Mail } from 'lucide-react';

const ContactPage = () => {
    const branches = [
    {
      title: "UAE Branch",
      address: "Suite No -201, Al Salemiyah Tower, Deria Riggat Al Buteen, Dubai, UAE",
      phone: "+971 562744455",
      email: "info@receptivegroup.com"
    },
    {
      title: "Mumbai Branch", 
      address: "425 Gemstar Commercial Complex, Ramchandra Lane Extn, Malad West, Mumbai 400064",
      phone: "+91 7738056424",
      email: "info@receptivesolutions.co.in"
    },
    {
      title: "Ahmedabad Branch",
      address: "106, Dev Prime, Nr. Vodafone House, Makarba, Ahmedabad - 380051", 
      phone: "+91 8104767778",
      email: "ketan@receptivesolutions.co.in"
    }
  ];

    return (
        <>
            <div className="pt-16 md:pt-24 lg:pt-28 xl:pt-32">
      <div className="bg-[#0C3B34] py-20 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-emerald-400 to-green-500 rounded-full filter blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400 to-emerald-500 rounded-full filter blur-3xl transform translate-x-1/2 translate-y-1/2"></div>
        </div>
        
        <div className="relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Our Global Presence
            </h2>
            <div className="w-24 h-1 mx-auto rounded-full"></div>
            <p className="text-white mt-6 text-lg max-w-2xl mx-auto">
              Strategically located across key markets to serve you better
            </p>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 px-6">
            {branches.map((branch, index) => (
              <div 
                key={index}
                className="group bg-white/95 backdrop-blur-sm shadow-2xl rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-500 hover:shadow-emerald-500/20 border border-emerald-100/20"
              >
                {/* Icon Container */}
                <div className="flex justify-center mb-6">
                  <div className="bg-gradient-to-br from-emerald-600 to-green-700 text-white p-4 rounded-2xl shadow-lg group-hover:shadow-emerald-500/30 group-hover:from-emerald-500 group-hover:to-green-600 transition-all duration-300">
                    <Building2 size={32} className="group-hover:scale-110 transition-transform duration-300" />
                  </div>
                </div>

                {/* Branch Title */}
                <h3 className="text-2xl font-bold text-emerald-800 mb-6 group-hover:text-emerald-700 transition-colors">
                  {branch.title}
                </h3>

                {/* Contact Details */}
                <div className="space-y-4 text-left">
                  {/* Address */}
                  <div className="flex items-start space-x-3 group-hover:translate-x-1 transition-transform duration-300">
                    <MapPin size={20} className="text-emerald-600 mt-1 flex-shrink-0" />
                    <p className="text-gray-700 leading-relaxed">
                      {branch.address}
                    </p>
                  </div>

                  {/* Phone */}
                  <div className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300 delay-75">
                    <Phone size={18} className="text-emerald-600 flex-shrink-0" />
                    <a 
                      href={`tel:${branch.phone}`}
                      className="text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                    >
                      {branch.phone}
                    </a>
                  </div>

                  {/* Email */}
                  <div className="flex items-center space-x-3 group-hover:translate-x-1 transition-transform duration-300 delay-150">
                    <Mail size={18} className="text-emerald-600 flex-shrink-0" />
                    <a 
                      href={`mailto:${branch.email}`}
                      className="text-gray-700 hover:text-emerald-600 transition-colors break-all"
                    >
                      {branch.email}
                    </a>
                  </div>
                </div>

                
              </div>
            ))}
          </div>

          
          
        </div>
      </div>
    </div>
            <ContactForm />
        </>
    )
}

export default ContactPage