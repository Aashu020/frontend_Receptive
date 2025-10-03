import React from 'react';
import { useNavigate } from 'react-router-dom'; // If using React Router
import Receptive from "../assets/images/IMMIGRATION_logo.jpg"
import Investemnt from "../assets/images/INVESTMENTS.jpg"
import Properties from "../assets/images/PROPERTIES.jpg"
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaRegFileAlt,
} from "react-icons/fa";

function Footer() {
  const navigate = useNavigate(); // For React Router navigation

  const portfolioLogos = {
    'Receptive Group': Receptive,
    'Receptive Investment': Investemnt,
    'Receptive Properties': Properties
  };

  // Service mapping for navigation
  const serviceMapping = {
    'Vistor Visa': 0,
    'Student Visa': 1,
    'Work Visa': 2,
    'Permanennt Residence': 3,
   
  };

  // WhatsApp click handler
  const handleWhatsAppClick = () => {
    const phoneNumber = "919867729568"; // UAE office number
    const message = "Hello! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  // Service click handler
  const handleServiceClick = (serviceName) => {
    const serviceIndex = serviceMapping[serviceName];

    navigate('/services', {
      state: { activeService: serviceIndex }
    });

  };

  return (
    <>
      {/* WhatsApp Button */}
      <div className="fixed bottom-8 right-3 md:bottom-14 md:right-6 z-50">
        <button
          onClick={handleWhatsAppClick}
          className="bg-[#25D366] hover:bg-[#128C3F] text-white p-3 rounded-full shadow-lg transform hover:scale-110 transition-all duration-300 flex items-center justify-center group"
          aria-label="Contact us on WhatsApp"
        >
          {/* WhatsApp SVG Icon */}
          <svg
            className="md:w-8 md:h-8 h-6 w-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486" />
          </svg>
        </button>
      </div>

      {/* Footer */}
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
                    <div className="w-16 h-16 mx-auto mb-2 bg-[#D8C287] rounded-lg p-2 flex items-center justify-center">
                      <img
                        src={portfolioLogos[company]}
                        alt={`${company} logo`}
                        className="max-w-full max-h-full object-contain "
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
          <div className="grid grid-cols-1 lg:grid-cols-3  mb-10">

            {/* Services - Updated with clickable links */}
            <div>
              <h3 className="text-lg font-semibold text-[#D8C287] mb-4">Our Services</h3>
              <ul className="space-y-2">
                {['Vistor Visa', 'Student Visa', 'Work Visa', 'Permanennt Residence',].map((service, index) => (
                  <li key={index} className="text-gray-200 text-sm flex items-center">
                    <span className="w-1.5 h-1.5 bg-[#D8C287] rounded-full mr-3"></span>
                    <button
                      onClick={() => handleServiceClick(service)}
                      className="hover:text-[#D8C287] transition-colors duration-200 text-left cursor-pointer"
                    >
                      {service}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Global Offices */}
            <div className="lg:col-span-2">
              <h3 className="text-lg font-semibold text-[#D8C287] mb-4">Global Offices</h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">

                {/* UAE Branch */}
                <div className="bg-[#D8C287] p-4 rounded-lg">
                  <h4 className="font-medium text-[#0c3b34] mb-2"> UAE Branch</h4>
                  <p className="text-xs font-medium text-[#0c3b34] mb-2">
                    Suite No -201, Al Salemiyah Tower, Deria Riggat Al Buteen, Dubai, UAE
                  </p>
                  <p className="text-[#0c3b34] font-medium text-xs font-medium">+971 565344435</p>
                  <p className="text-[#0c3b34] font-medium text-xs">info@receptivegroup.com</p>
                </div>

                <div className="bg-[#092620]/30 p-4 rounded-lg">
                  <h4 className="font-medium text-[#D8C287] mb-2"> UK Branch</h4>
                  <p className="text-xs text-gray-300 mb-2">
                    PO Box 4385, 15801109 - COMPANIES HOUSE DEFAULT ADDRESS, Cardiff, CF14 8LH
                  </p>
                  {/* <p className="text-[#0c3b34] text-xs font-medium">+971 565344435</p> */}
                  <p className="text-[#0c3b34] text-xs font-medium">info@receptivegroup.com</p>
                </div>

                {/* Mumbai Branch */}
                <div className="bg-[#D8C287] p-4 rounded-lg">
                  <h4 className="font-medium text-[#0c3b34] mb-2"> Mumbai Branch (India)</h4>
                  <p className="text-xs text-[#0c3b34]  font-medium mb-2">
                    425 Gemstar Commerical Complex, Ramchandra Lane Extn, Kanchpada, Malad West, Mumbai 400064
                  </p>
                  <p className="text-[#D8C287] text-xs font-medium">+91 98677 29568</p>
                  <p className="text-[#D8C287] text-xs">info@receptivesolutions.co.in</p>
                </div>

                {/* Ahmedabad Branch */}
                <div className="bg-[#D8C287] p-4 rounded-lg">
                  <h4 className="font-medium text-[#0c3b34] mb-2"> Ahmedabad Branch (India)</h4>
                  <p className="text-xs text-[#0c3b34] font-medium mb-2">
                    106, Dev Prime, Nr. Vodafone House, Corporate Road, Makarba, Ahmedabad - 380051
                  </p>
                  <p className="text-[#D8C287] text-xs font-medium">+91 98677 29568</p>
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


              <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="Instagram"
                >
                  <FaInstagram className="text-sm lg:text-base" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="Facebook"
                >
                  <FaFacebookF className="text-sm lg:text-base" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="LinkedIn"
                >
                  <FaLinkedinIn className="text-sm lg:text-base" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
                  aria-label="YouTube"
                >
                  <FaYoutube className="text-sm lg:text-base" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;