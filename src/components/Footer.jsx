import React from 'react';
import Receptive from "../assets/images/IMMIGRATION_logo.jpg"
import Investemnt from "../assets/images/INVESTMENTS.jpg"
import Properties from "../assets/images/PROPERTIES.jpg"

function Footer() {
  const portfolioLogos = {
    'Receptive Group': Receptive,
    'Receptive Investment': Investemnt,
    'Receptive Properties': Properties
  };

  return (
    <footer className="bg-[#0C3B34] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        {/* Top Section: Logos on left, text on right */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10">
          {/* Logos on the left */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-lg font-semibold text-[#D8C287] mb-4 text-center md:text-left">Our Portfolio</h3>
            <div className="flex space-x-6">
              {['Receptive Group', 'Receptive Investment', 'Receptive Properties'].map((company, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto mb-2 bg-white rounded-lg p-2 flex items-center justify-center">
                    <img 
                      src={portfolioLogos[company]} 
                      alt={`${company} logo`}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <span className="text-[#D8C287] text-sm font-medium">{company}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Text on the right */}
          <div className="text-center md:text-right">
            <h2 className="text-2xl font-bold text-[#D8C287] mb-3">Connect With Us</h2>
            <p className="text-gray-200 max-w-md">
              Building bridges across borders with exceptional service and innovative solutions
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-[#D8C287] mb-4">Our Services</h3>
            <ul className="space-y-2">
              {['Tourism & Hospitality', 'Business Solutions', 'Consulting Services', 'Event Management', 'Travel Arrangements'].map((service, index) => (
                <li key={index} className="text-gray-200 text-sm flex items-center">
                  <span className="w-1.5 h-1.5 bg-[#D8C287] rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </div>

          {/* Global Offices */}
          <div className="lg:col-span-2">
            <h3 className="text-lg font-semibold text-[#D8C287] mb-4">Global Offices</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              
              {/* UAE Branch */}
              <div className="bg-[#092620]/30 p-4 rounded-lg">
                <h4 className="font-medium text-[#D8C287] mb-2">🇦🇪 UAE Branch</h4>
                <p className="text-xs text-gray-300 mb-2">
                  Suite No -201, Al Salemiyah Tower, Deria Riggat Al Buteen, Dubai, UAE
                </p>
                <p className="text-[#D8C287] text-xs font-medium">+971 565344435</p>
                <p className="text-[#D8C287] text-xs">info@receptivegroup.com</p>
              </div>

              {/* Mumbai Branch */}
              <div className="bg-[#092620]/30 p-4 rounded-lg">
                <h4 className="font-medium text-[#D8C287] mb-2">🇮🇳 Mumbai Branch</h4>
                <p className="text-xs text-gray-300 mb-2">
                  425 Gemstar Commerical Complex, Ramchandra Lane Extn, Kanchpada, Malad West, Mumbai 400064
                </p>
                <p className="text-[#D8C287] text-xs font-medium">+91 77380 56424</p>
                <p className="text-[#D8C287] text-xs">info@receptivesolutions.co.in</p>
              </div>

              {/* Ahmedabad Branch */}
              <div className="bg-[#092620]/30 p-4 rounded-lg">
                <h4 className="font-medium text-[#D8C287] mb-2">🇮🇳 Ahmedabad Branch</h4>
                <p className="text-xs text-gray-300 mb-2">
                  106, Dev Prime, Nr. Vodafone House, Corporate Road, Makarba, Ahmedabad - 380051
                </p>
                <p className="text-[#D8C287] text-xs font-medium">+91 8104767778</p>
                <p className="text-[#D8C287] text-xs">ketan@receptivesolutions.co.in</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-[#D8C287]/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            
            <div className="flex items-center mb-4 md:mb-0">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center mr-3 p-1">
                <img 
                  src={portfolioLogos['Receptive Group']} 
                  alt="Receptive Group logo"
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <p className="text-sm text-[#D8C287]">
                © {new Date().getFullYear()} Receptive Solutions. All rights reserved.
              </p>
            </div>

            <div className="flex space-x-6">
              {['Privacy Policy', 'Terms of Service', 'Careers', 'Contact'].map((link, index) => (
                <a key={index} href="#" className="text-sm text-gray-300 hover:text-[#D8C287] transition-colors">
                  {link}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;