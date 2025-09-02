import React, { useState, useEffect, useRef } from "react";
import { 
  FiChevronDown, 
  FiMenu, 
  FiX,
  FiHome,
  FiUsers,
  FiMapPin,
  FiGlobe,
  FiTrendingUp,
  FiMail,
  FiArrowLeft,
  FiChevronRight
} from "react-icons/fi";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
  FaRegFileAlt,
} from "react-icons/fa";

function UpperHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        setIsVisible(false);
      } else {
        // Scrolling up - show header
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, '_self');
  };

  const handleEmailClick = (email) => {
    window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
  };

  return (
    <div
      style={{
        background: "var(--primary)",
        color: "var(--accent)",
        transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
        transition: 'transform 0.3s ease-in-out',
      }}
      className="upperHeader hidden sm:hidden md:flex lg:flex xl:flex fixed w-full z-50 justify-between items-center py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 top-0 "
    >
      {/* Contact information - responsive layout */}
      <div className="upper-contact  flex flex-col md:flex-row gap-1 md:gap-2 lg:gap-3 xl:gap-8 text-xs lg:text-sm">
        {/* First contact group */}
        <div className="flex items-center gap-1 md:gap-2">
          <button 
            onClick={() => handlePhoneClick('+919876543210')}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
            aria-label="Call +91 98765 43210"
          >
            <FaPhone className="text-xs lg:text-sm" />
            <span className="ml-1 text-xs lg:text-sm hidden lg:inline hover:text-white cursor-pointer">+91 98765 43210</span>
          </button>
          <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
          <button 
            onClick={() => handleEmailClick('info@receptivegroup.com')}
            className="flex items-center gap-1 hover:opacity-80 hover:text-white cursor-pointer transition-opacity"
            aria-label="Email info@receptivegroup.com"
          >
            <FaEnvelope className="text-xs lg:text-sm" />
            <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
              info@receptivegroup.com
            </span>
          </button>
        </div>

        {/* Second contact group */}
        <div className="flex items-center gap-1 md:gap-2 ">
          <button 
            onClick={() => handlePhoneClick('+919885602560')}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
            aria-label="Call +91 98856 02560"
          >
            <FaPhone className="text-xs lg:text-sm" />
            <span className="ml-1 text-xs lg:text-sm hidden  hover:text-white cursor-pointer lg:inline">+91 98856 02560</span>
          </button>
          <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
          <button 
            onClick={() => handleEmailClick('info@receptivesolutions.com')}
            className="flex items-center gap-1 hover:opacity-80   hover:text-white cursor-pointer transition-opacity"
            aria-label="Email info@receptivesolutions.com"
          >
            <FaEnvelope className="text-xs lg:text-sm" />
            <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
              info@receptivesolutions.com
            </span>
          </button>
        </div>
      </div>

      {/* Right side - Terms and Social icons */}
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {/* Terms */}
        <a 
          href="/terms" 
          className="hidden lg:flex items-center hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
        >
          <FaRegFileAlt className="mr-1 text-xs lg:text-sm" />
          <span className="text-xs lg:text-sm hover:text-white cursor-pointer">Terms</span>
        </a>

        {/* Social media icons */}
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
  );
}

const Navbar = () => {
  const [isCountriesOpen, setIsCountriesOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdownView, setDropdownView] = useState('countries'); // 'countries' or 'cities'
  const [isNavbarAtTop, setIsNavbarAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const navRef = useRef(null);

  const countries = {
    UAE: ['Dubai', 'Abu Dhabi', 'Sharjah', 'Ajman', 'Fujairah', 'Ras Al Khaimah'],
    Canada: ['Toronto', 'Vancouver', 'Montreal', 'Calgary', 'Ottawa', 'Edmonton'],
    UK: ['London', 'Manchester', 'Birmingham', 'Edinburgh', 'Liverpool', 'Glasgow'],
    US: ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix', 'Philadelphia'],
    Europe: ['Germany', 'France', 'Netherlands', 'Italy', 'Spain', 'Belgium'],
    Australia: ['Sydney', 'Melbourne', 'Brisbane', 'Perth', 'Adelaide', 'Darwin'],
    Singapore: ['Central', 'East', 'West', 'North', 'Northeast', 'Northwest']
  };

  // Handle scroll effect for navbar positioning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Check if scrolled past a certain point
      setIsScrolled(currentScrollY > 10);
      
      // Handle navbar positioning
      if (window.innerWidth >= 768) { // Desktop behavior
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          // Scrolling down - move navbar to top
          setIsNavbarAtTop(false);
        } else {
          // Scrolling up - move navbar down to make room for upper header
          setIsNavbarAtTop(true);
        }
      } else {
        // Mobile behavior - always at top
        setIsNavbarAtTop(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsCountriesOpen(false);
        setSelectedCountry(null);
        setDropdownView('countries');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
    setDropdownView('cities');
  };

  const handleBackToCountries = () => {
    setDropdownView('countries');
    setSelectedCountry(null);
  };

  const closeAllDropdowns = () => {
    setIsCountriesOpen(false);
    setSelectedCountry(null);
    setDropdownView('countries');
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { name: 'Home', icon: FiHome, path: '/' },
    { name: 'About Us', icon: FiUsers, path: '/about' },
    { name: 'Branches', icon: FiMapPin, path: '/branches' },
    { 
      name: 'Countries', 
      icon: FiGlobe, 
      hasDropdown: true
    },
    { name: 'Success Stories', icon: FiTrendingUp, path: '/success' },
    { name: 'Contact', icon: FiMail, path: '/contact' }
  ];

  return (
    <header ref={navRef} className="relative">
      {/* Upper Header */}
      <UpperHeader />

      {/* Main Navbar - Dynamic positioning based on scroll and screen size */}
      <nav 
        className={`bg-white/95 backdrop-blur-md border-b border-gray-200 fixed w-full z-[100] transition-all duration-300 ${
          isScrolled ? 'shadow-xl bg-white/98' : 'shadow-lg'
        }`}
        style={{
          top: isNavbarAtTop ? '2.75rem' : '0', // 11 (2.75rem) when at top, 0 when scrolled down
        }}
      >
        <div className="container mx-auto px-4 lg:px-6 ">
          <div className="flex justify-between items-center h-16 lg:h-20">
            
            {/* Logo */}
            <div className="flex items-center group cursor-pointer" onClick={closeAllDropdowns}>
              <div className="relative">
                <div 
                  className="text-2xl lg:text-3xl font-bold tracking-tight transition-all duration-300 group-hover:scale-105"
                  style={{ 
                    background: 'linear-gradient(135deg, #0C3B34 0%, #1a5f54 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  YourLogo
                </div>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 cursor-pointer">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        setIsCountriesOpen(!isCountriesOpen);
                        setDropdownView('countries');
                        setSelectedCountry(null);
                      }}
                      className={`flex items-center space-x-2 px-4 xl:px-6 py-2.5 xl:py-3 rounded-full transition-all duration-300 font-medium text-sm xl:text-base relative overflow-hidden group ${
                        isCountriesOpen 
                          ? 'bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] text-white shadow-lg scale-105' 
                          : 'text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#0C3B34] hover:to-[#1a5f54]'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D8C287] to-[#e6d098] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <item.icon className="w-4 h-4 xl:w-5 xl:h-5 relative z-10" />
                      <span className="relative z-10">{item.name}</span>
                      <FiChevronDown 
                        className={`w-3 h-3 xl:w-4 xl:h-4 transition-all duration-300 relative z-10 ${
                          isCountriesOpen ? 'rotate-180' : 'group-hover:rotate-12'
                        }`} 
                      />
                    </button>
                  ) : (
                    <a
                      href={item.path}
                      onClick={closeAllDropdowns}
                      className="flex items-center space-x-2 px-4 xl:px-6 py-2.5 xl:py-3 rounded-full transition-all duration-300 font-medium text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#0C3B34] hover:to-[#1a5f54] hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D8C287] to-[#e6d098] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <item.icon className="w-4 h-4 xl:w-5 xl:h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative z-10">{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isMobileMenuOpen ? <FiX className="w-5 h-5" /> : <FiMenu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Desktop Dropdown */}
        {isCountriesOpen && (
          <div className="absolute left-0 right-0 bg-gradient-to-br from-gray-50 to-white shadow-2xl border-t border-gray-100 hidden lg:block animate-slideDown">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C3B34] via-[#D8C287] to-[#0C3B34]"></div>
            <div className="container mx-auto px-6 py-6 xl:py-8">
              
              {/* Countries View */}
              {dropdownView === 'countries' && (
                <>
                  <div className="flex items-center mb-6">
                    <FiGlobe className="w-6 h-6 text-[#0C3B34] mr-3" />
                    <h3 className="text-xl xl:text-2xl font-bold text-[#0C3B34]">
                      Choose Your Country
                    </h3>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-3 xl:gap-4">
                    {Object.keys(countries).map((country, index) => (
                      <button
                        key={country}
                        onClick={() => handleCountryClick(country)}
                        className="text-left p-4 xl:p-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl relative overflow-hidden group bg-white text-gray-700 hover:bg-gradient-to-br hover:from-white hover:to-gray-50 shadow-md border border-gray-200 hover:border-[#D8C287]"
                        style={{ 
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="flex items-center justify-between relative z-10">
                          <span className="font-semibold text-base xl:text-lg">{country}</span>
                          <FiChevronRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                        <div className="mt-2 text-xs text-gray-500 relative z-10">
                          {countries[country].length} locations
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#D8C287] to-[#e6d098] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {/* Cities View */}
              {dropdownView === 'cities' && selectedCountry && (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <button
                        onClick={handleBackToCountries}
                        className="flex items-center space-x-2 text-[#0C3B34] hover:text-[#1a5f54] transition-colors duration-300 mr-4 p-2 rounded-lg hover:bg-gray-100"
                      >
                        <FiArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                      </button>
                      <div className="flex items-center">
                        <FiMapPin className="w-6 h-6 text-[#0C3B34] mr-3" />
                        <h3 className="text-xl xl:text-2xl font-bold text-[#0C3B34]">
                          {selectedCountry} - Available Locations
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 xl:gap-6">
                    {countries[selectedCountry].map((location, index) => (
                      <a
                        key={index}
                        href={`/countries/${selectedCountry.toLowerCase()}/${location.toLowerCase()}`}
                        onClick={closeAllDropdowns}
                        className="group block p-4 xl:p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] text-white hover:shadow-2xl border border-[#D8C287]/30 hover:border-[#D8C287]"
                        style={{ 
                          animationDelay: `${index * 50}ms`
                        }}
                      >
                        <div className="font-bold text-lg xl:text-xl mb-2 group-hover:text-[#D8C287] transition-colors duration-300">
                          {location}
                        </div>
                        <div className="text-white/75 text-sm flex items-center group-hover:text-white transition-all duration-300">
                          View Details 
                          <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">→</span>
                        </div>
                        <div className="absolute top-3 right-3 w-2 h-2 bg-[#D8C287] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                      </a>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute left-0 right-0 bg-white shadow-2xl border-t border-gray-100 z-40 animate-slideDown">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C3B34] via-[#D8C287] to-[#0C3B34]"></div>
            <div className="px-4 py-4 max-h-[80vh] overflow-y-auto">
              {navItems.map((item, index) => (
                <div key={index} className="border-b border-gray-100 last:border-b-0">
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          setIsCountriesOpen(!isCountriesOpen);
                          setDropdownView('countries');
                          setSelectedCountry(null);
                        }}
                        className="w-full flex items-center justify-between py-4 px-3 text-gray-700 hover:text-[#0C3B34] transition-colors duration-300 rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex items-center space-x-3">
                          <item.icon className="w-5 h-5" />
                          <span className="font-medium">{item.name}</span>
                        </div>
                        <FiChevronDown 
                          className={`w-5 h-5 transition-transform duration-300 ${
                            isCountriesOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {/* Mobile Countries/Cities View */}
                      {isCountriesOpen && (
                        <div className="ml-4 mb-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                          
                          {/* Countries View */}
                          {dropdownView === 'countries' && (
                            <div className="space-y-2">
                              <h4 className="font-semibold text-[#0C3B34] mb-3 flex items-center">
                                <FiGlobe className="w-4 h-4 mr-2" />
                                Select Country
                              </h4>
                              {Object.keys(countries).map((country) => (
                                <button
                                  key={country}
                                  onClick={() => handleCountryClick(country)}
                                  className="w-full text-left p-3 rounded-xl flex items-center justify-between transition-all duration-300 bg-white text-gray-700 hover:bg-gray-50 shadow-sm border border-gray-200 hover:border-[#D8C287]"
                                >
                                  <div>
                                    <span className="font-semibold">{country}</span>
                                    <div className="text-xs text-gray-500">{countries[country].length} locations</div>
                                  </div>
                                  <FiChevronRight className="w-4 h-4" />
                                </button>
                              ))}
                            </div>
                          )}

                          {/* Cities View */}
                          {dropdownView === 'cities' && selectedCountry && (
                            <div>
                              <div className="flex items-center mb-3">
                                <button
                                  onClick={handleBackToCountries}
                                  className="flex items-center space-x-2 text-[#0C3B34] hover:text-[#1a5f54] transition-colors duration-300 mr-3 p-2 rounded-lg hover:bg-gray-100"
                                >
                                  <FiArrowLeft className="w-4 h-4" />
                                  <span className="text-sm font-medium">Back</span>
                                </button>
                                <h4 className="font-semibold text-[#0C3B34] flex items-center">
                                  <FiMapPin className="w-4 h-4 mr-2" />
                                  {selectedCountry}
                                </h4>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {countries[selectedCountry].map((location, locIndex) => (
                                  <a
                                    key={locIndex}
                                    href={`/countries/${selectedCountry.toLowerCase()}/${location.toLowerCase()}`}
                                    className="block p-3 rounded-lg text-sm bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    onClick={closeAllDropdowns}
                                  >
                                    <div className="font-medium">{location}</div>
                                    <div className="text-xs text-white/75 mt-1">View Details →</div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="flex items-center space-x-3 py-4 px-3 text-gray-700 hover:text-[#0C3B34] transition-all duration-300 rounded-lg hover:bg-gray-50"
                      onClick={closeAllDropdowns}
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Overlay for mobile menu */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30 animate-fadeIn"
          onClick={closeAllDropdowns}
        />
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes slideDown {
          from { 
            opacity: 0;
            transform: translateY(-10px);
          }
          to { 
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </header>
  );
};

export default Navbar;