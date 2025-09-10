import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../features/authSlice"; // Adjust path as needed
import termsPDF from "../assets/ReceptiveTerms&Conditions.pdf";
import logo from "../assets/images/logo.jpg";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiUsers,
  FiStar,
  FiMapPin,
  FiGlobe,
  FiTrendingUp,
  FiMail,
  FiArrowLeft,
  FiChevronRight,
  FiUserPlus,
  FiLogOut,
  FiUser,
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
import { useNavigate } from "react-router-dom";

function UpperHeader() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handlePhoneClick = (phoneNumber) => {
    window.open(`tel:${phoneNumber}`, "_self");
  };

  const handleEmailClick = (email) => {
    window.open(
      `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
      "_blank"
    );
  };

  return (
    <div
      style={{
        background: "var(--primary)",
        color: "var(--accent)",
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        transition: "transform 0.3s ease-in-out",
      }}
      className="hidden sm:hidden md:flex lg:flex xl:flex fixed w-full z-100 justify-between items-center py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 top-0"
    >
      <div className="flex flex-col md:flex-row gap-1 md:gap-2 lg:gap-3 xl:gap-8 text-xs lg:text-sm">
        <div className="flex items-center gap-1 md:gap-2">
          <button
            onClick={() => handlePhoneClick("+919876543210")}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
            aria-label="Call +91 98765 43210"
          >
            <FaPhone className="text-xs lg:text-sm" />
            <span className="ml-1 text-xs lg:text-sm hidden lg:inline hover:text-white cursor-pointer">
              +91 77380 56424
            </span>
          </button>
          <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
          <button
            onClick={() => handleEmailClick("info@receptivegroup.com")}
            className="flex items-center gap-1 hover:opacity-80 hover:text-white cursor-pointer transition-opacity"
            aria-label="Email info@receptivegroup.com"
          >
            <FaEnvelope className="text-xs lg:text-sm" />
            <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
              info@receptivesolutions.co.in
            </span>
          </button>
        </div>
        <div className="flex items-center gap-1 md:gap-2">
          <button
            onClick={() => handlePhoneClick("+919885602560")}
            className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
            aria-label="Call +91 98856 02560"
          >
            <FaPhone className="text-xs lg:text-sm" />
            <span className="ml-1 text-xs lg:text-sm hidden hover:text-white cursor-pointer lg:inline">
              +971 562744455
            </span>
          </button>
          <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
          <button
            onClick={() => handleEmailClick("info@receptivesolutions.com")}
            className="flex items-center gap-1 hover:opacity-80 hover:text-white cursor-pointer transition-opacity"
            aria-label="Email info@receptivesolutions.com"
          >
            <FaEnvelope className="text-xs lg:text-sm" />
            <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
              info@receptivegroup.com
            </span>
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        <a
          href={termsPDF}
          download="Terms-and-Conditions.pdf"
          className="hidden lg:flex items-center hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
        >
          <FaRegFileAlt className="mr-1 text-xs lg:text-sm" />
          <span className="text-xs lg:text-sm hover:text-white cursor-pointer">
            Terms
          </span>
        </a>
        <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
          <a
            href="https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Instagram"
          >
            <FaInstagram className="text-sm lg:text-base" />
          </a>
          <a
            href="https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="Facebook"
          >
            <FaFacebookF className="text-sm lg:text-base" />
          </a>
          <a
            href="https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="text-sm lg:text-base" />
          </a>
          <a
            href="https://www.youtube.com/@receptivegroup"
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
  const [isUpperHeaderVisible, setIsUpperHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const navRef = useRef(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Redux state
  const { user } = useSelector((state) => state.auth);

  const countries = {
    UAE: [
      { title: "UAE", link: "/country/uae" },
      { title: "Golden Visa", link: "/country/uae#golden-visa" },
      { title: "Company Investor", link: "/country/uae#company-investor-visa" },
      { title: "Property Investor", link: "/country/uae#property-investor-visa" },
      { title: "UAE Employment", link: "/country/uae#employment-visa" },
      { title: "UAE Student", link: "/country/uae#student-visa" },
    ],
    Canada: [
      { title: "Canada", link: "/country/canada" },
      { title: "Tourist", link: "/country/canada#canada-tourist" },
      { title: "Skilled Immigration", link: "/country/canada#canada-skilled-immigration" },
      { title: "Start-Up", link: "/country/canada#canada-start-up" },
      { title: "AIP", link: "/country/canada#canada-aip" },
      { title: "SINP", link: "/country/canada#canada-sinp" },
      { title: "Alberta Tech Pathway", link: "/country/canada#canada-alberta-tech-pathway" },
      { title: "BC PNP", link: "/country/canada#canada-bc-pnp" },
    ],
    UK: [
      { title: "UK", link: "/country/uk" },
      { title: "Study", link: "/country/uk#uk-study" },
      { title: "Visitor", link: "/country/uk#uk-visitor" },
      { title: "Skilled Worker", link: "/country/uk#uk-skilled-worker" },
      { title: "Self-sponsorship", link: "/country/uk#uk-self-sponsorship" },
      { title: "The Innovator", link: "/country/uk#uk-the-innovator" },
    ],
    US: [
      { title: "USA", link: "/country/usa" },
      { title: "Study Visa", link: "/country/usa#us-study-visa" },
      { title: "Tourist", link: "/country/usa#us-tourist" },
    ],
    Europe: [
      { title: "Europe", link: "/country/europe" },
      { title: "Eligible", link: "/country/europe#europe-eligible" },
      { title: "Immigration", link: "/country/europe#europe-immigration" },
    ],
    Australia: [
      { title: "Australia", link: "/country/australia" },
      { title: "Visitor", link: "/country/australia#australia-visitor" },
      { title: "Subclass 400", link: "/country/australia#australia-subclass-400" },
      { title: "Subclass 482", link: "/country/australia#australia-subclass-482" },
      { title: "Subclass 186", link: "/country/australia#australia-subclass-186" },
    ],
    Singapore: [
      { title: "Singapore", link: "/country/singapore" },
      { title: "E-pass", link: "/country/singapore#singapore-e-pass" },
      { title: "Eligible", link: "/country/singapore#singapore-s-pass" },
    ],
  };

  // Function to get user initials
  const getUserInitials = (user) => {
    if (!user || !user.name) return "U";
    const names = user.name.split(" ");
    if (names.length >= 2) {
      return (names[0][0] + names[1][0]).toUpperCase();
    }
    return names[0][0].toUpperCase();
  };

  const handleLogout = () => {
    dispatch(logout());
    setIsUserMenuOpen(false);
    navigate('/');
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 10);

      if (window.innerWidth >= 768) {
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsUpperHeaderVisible(false);
        } else {
          setIsUpperHeaderVisible(true);
        }
      } else {
        setIsUpperHeaderVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsUpperHeaderVisible(false);
      } else {
        setIsUpperHeaderVisible(
          window.scrollY <= 100 || window.scrollY < lastScrollY
        );
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [lastScrollY]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsCountriesOpen(false);
        setSelectedCountry(null);
        setIsMobileMenuOpen(false);
        setIsUserMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);
  };

  const closeAllDropdowns = () => {
    setIsCountriesOpen(false);
    setSelectedCountry(null);
    setIsMobileMenuOpen(false);
    setIsUserMenuOpen(false);
  };

  const handleNavigation = (path) => {
    closeAllDropdowns();
    navigate(path);
  };

  const handleVisaClick = (visa) => {
    closeAllDropdowns();
    
    if (visa.link.includes('#')) {
      const [route, hash] = visa.link.split('#');
      
      navigate(route);
      
      setTimeout(() => {
        const section = document.getElementById(hash);
        if (section) {
          const navbarHeight = window.innerWidth >= 768 && isUpperHeaderVisible ? 
            44 + 80 + 20 : 
            64 + 20;
          
          const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - navbarHeight;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth"
          });
        } else {
          console.log(`Section with ID "${hash}" not found`);
        }
      }, 300);
    } else {
      navigate(visa.link);
    }
  };

  const navItems = [
    { name: "About Us", icon: FiUsers, path: "/about" },
    {
      name: "Countries",
      icon: FiGlobe,
      hasDropdown: true,
    },
    { name: "Success Stories", icon: FiTrendingUp, path: "/succes_story" },
    { name: "Reviews", icon: FiStar, path: "/reviews" },
    { name: "Contact", icon: FiMail, path: "/contact" },
  ];

  return (
    <header ref={navRef} className="relative">
      <UpperHeader />
      <nav
        className={`bg-white/95 backdrop-blur-md border-b border-gray-200 fixed w-full z-[100] transition-all duration-300 ${
          isScrolled ? "shadow-xl bg-white/98" : "shadow-lg"
        }`}
        style={{
          top:
            window.innerWidth >= 768 && isUpperHeaderVisible ? "2.75rem" : "0",
        }}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex justify-between items-center h-16 lg:h-20">
            <div
              className="flex items-center group cursor-pointer"
              onClick={() => handleNavigation('/')}
            >
              <div className="relative">
                <img
                  src={logo}
                  alt="Receptive Logo"
                  className="h-11 lg:h-13 transition-all duration-300 group-hover:scale-105"
                />
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] transition-all duration-300 group-hover:w-full"></div>
              </div>
            </div>
            <div className="hidden lg:flex items-center space-x-1 xl:space-x-2 cursor-pointer">
              {navItems.map((item, index) => (
                <div key={index} className="relative group">
                  {item.hasDropdown ? (
                    <button
                      onClick={() => {
                        setIsCountriesOpen(!isCountriesOpen);
                        setSelectedCountry(null);
                      }}
                      className={`flex items-center space-x-2 px-4 xl:px-6 py-2.5 xl:py-3 rounded-full transition-all duration-300 font-medium text-sm xl:text-base relative overflow-hidden group ${
                        isCountriesOpen
                          ? "bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] text-white shadow-lg scale-105"
                          : "text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#0C3B34] hover:to-[#1a5f54]"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D8C287] to-[#e6d098] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <item.icon className="w-4 h-4 xl:w-5 xl:h-5 relative z-10" />
                      <span className="relative z-10">{item.name}</span>
                      <FiChevronDown
                        className={`w-3 h-3 xl:w-4 xl:h-4 transition-all duration-300 relative z-10 ${
                          isCountriesOpen
                            ? "rotate-180"
                            : "group-hover:rotate-12"
                        }`}
                      />
                    </button>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="flex items-center space-x-2 px-4 xl:px-6 py-2.5 xl:py-3 rounded-full transition-all duration-300 font-medium text-sm xl:text-base text-gray-700 hover:text-white hover:bg-gradient-to-r hover:from-[#0C3B34] hover:to-[#1a5f54] hover:shadow-lg hover:scale-105 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-[#D8C287] to-[#e6d098] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                      <item.icon className="w-4 h-4 xl:w-5 xl:h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                      <span className="relative z-10">{item.name}</span>
                    </button>
                  )}
                </div>
              ))}
              
              {/* Auth Section - Desktop */}
              <div className="ml-2 xl:ml-4 relative">
                {user ? (
                  <div className="relative">
                    <button
                      onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                      className="flex items-center space-x-2 px-4 xl:p-3 py-2.5 cursor-pointer rounded-full bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] text-white font-bold text-sm xl:text-base hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-transparent hover:border-[#D8C287]/20"
                    >
                      <div className="w-10 h-8 xl:w-9 xl:h-9 cursor-pointer rounded-full bg-gradient-to-r from-[#D8C287] to-[#e6d098] flex items-center justify-center text-[#0C3B34] font-bold text-sm xl:text-base">
                        {getUserInitials(user)}
                      </div>
                      
                      
                    </button>
                    
                    {/* User Dropdown Menu */}
                    {isUserMenuOpen && (
                      <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-2xl border border-gray-100 py-2 z-50 animate-slideDown">
                        <div className="px-4 py-3 border-b border-gray-100">
                          <p className="text-sm font-medium text-gray-900">{user.name}</p>
                          <p className="text-xs text-gray-500 truncate">{user.email}</p>
                        </div>
                      
                        <button
                          onClick={handleLogout}
                          className="w-full flex items-center space-x-3 px-4 py-3 text-sm text-red-600 hover:bg-red-50 transition-colors duration-200"
                        >
                          <FiLogOut className="w-4 h-4" />
                          <span>Logout</span>
                        </button>
                      </div>
                    )}
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation('/register')}
                    className="flex items-center space-x-2 px-6 xl:px-8 py-2.5 xl:py-3  rounded-full bg-gradient-to-r from-[#D8C287] to-[#e6d098] text-[#0C3B34] font-bold text-sm xl:text-base hover:shadow-xl hover:scale-105 transition-all duration-300 relative overflow-hidden group border-2 border-transparent hover:border-[#0C3B34]/20"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] cursor-pointer opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                    <FiUserPlus className="w-4 h-4 xl:w-5 xl:h-5 relative z-10 transition-transform duration-300 group-hover:scale-110" />
                    <span className="relative z-10 group-hover:text-[#0C3B34] transition-colors duration-300 cursor-pointer">Sign Up</span>
                  </button>
                )}
              </div>
            </div>
            <div className="lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2.5 rounded-xl bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
              >
                {isMobileMenuOpen ? (
                  <FiX className="w-5 h-5" />
                ) : (
                  <FiMenu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>
        </div>
        
        {/* Desktop Countries Dropdown */}
        {isCountriesOpen && (
          <div className="absolute left-0 right-0 bg-gradient-to-br from-gray-50 to-white shadow-2xl border-t border-gray-100 hidden lg:block animate-slideDown">
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0C3B34] via-[#D8C287] to-[#0C3B34]"></div>
            <div className="container mx-auto px-6 py-6 xl:py-8">
              {!selectedCountry ? (
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
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] opacity-0 group-hover:opacity-5 transition-opacity duration-300"></div>
                        <div className="flex items-center justify-between relative z-10">
                          <span className="font-semibold text-base xl:text-lg">
                            {country}
                          </span>
                          <FiChevronRight className="w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                        <div className="mt-2 text-xs text-gray-500 relative z-10">
                          {countries[country].length} visa
                        </div>
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#D8C287] to-[#e6d098] rounded-full opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      </button>
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center">
                      <button
                        onClick={() => setSelectedCountry(null)}
                        className="flex items-center space-x-2 text-[#0C3B34] hover:text-[#1a5f54] transition-colors duration-300 mr-4 p-2 rounded-lg hover:bg-gray-100"
                      >
                        <FiArrowLeft className="w-5 h-5" />
                        <span className="font-medium">Back</span>
                      </button>
                      <div className="flex items-center">
                        <FiMapPin className="w-6 h-6 text-[#0C3B34] mr-3" />
                        <h3 className="text-xl xl:text-2xl font-bold text-[#0C3B34]">
                          {selectedCountry} - Available Visa
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4 xl:gap-6">
                    {countries[selectedCountry].map((visa, locIndex) => (
                      <button
                        key={locIndex}
                        onClick={() => handleVisaClick(visa)}
                        className="block p-3 rounded-lg text-sm bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] text-white hover:shadow-lg transition-all duration-300 hover:scale-105"
                      >
                        <div className="font-medium">{visa.title}</div>
                        <div className="text-xs text-white/75 mt-1">View Details →</div>
                      </button>
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
                <div
                  key={index}
                  className="border-b border-gray-100 last:border-b-0"
                >
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => {
                          setIsCountriesOpen(!isCountriesOpen);
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
                            isCountriesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      {isCountriesOpen && (
                        <div className="ml-4 mb-4 bg-gradient-to-br from-gray-50 to-white rounded-xl p-4 border border-gray-100">
                          {!selectedCountry ? (
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
                                    <span className="font-semibold">
                                      {country}
                                    </span>
                                    <div className="text-xs text-gray-500">
                                      {countries[country].length} Programs
                                    </div>
                                  </div>
                                  <FiChevronRight className="w-4 h-4" />
                                </button>
                              ))}
                            </div>
                          ) : (
                            <div>
                              <div className="flex items-center mb-3">
                                <button
                                  onClick={() => setSelectedCountry(null)}
                                  className="flex items-center space-x-2 text-[#0C3B34] hover:text-[#1a5f54] transition-colors duration-300 mr-3 p-2 rounded-lg hover:bg-gray-100"
                                >
                                  <FiArrowLeft className="w-4 h-4" />
                                  <span className="text-sm font-medium">
                                    Back
                                  </span>
                                </button>
                                <h4 className="font-semibold text-[#0C3B34] flex items-center">
                                  <FiMapPin className="w-4 h-4 mr-2" />
                                  {selectedCountry}
                                </h4>
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                {countries[selectedCountry].map((visa, index) => (
                                  <button
                                    key={index}
                                    onClick={() => handleVisaClick(visa)}
                                    className="group block p-4 xl:p-6 rounded-2xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-[#0C3B34] to-[#1a5f54] text-white hover:shadow-2xl border border-[#D8C287]/30 hover:border-[#D8C287]"
                                    style={{ animationDelay: `${index * 50}ms` }}
                                  >
                                    <div className="font-bold text-xs xl:text-sm mb-2 group-hover:text-[#D8C287] transition-colors duration-300">
                                      {visa.title}
                                      <span className="ml-2 transform group-hover:translate-x-2 transition-transform duration-300">
                                        →
                                      </span>
                                    </div>
                                    <div className="absolute top-3 right-3 w-2 h-2 bg-[#D8C287] rounded-full opacity-50 group-hover:opacity-100 group-hover:scale-125 transition-all duration-300"></div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ) : (
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="w-full flex items-center space-x-3 py-4 px-3 text-gray-700 hover:text-[#0C3B34] transition-colors duration-300 rounded-lg hover:bg-gray-50 text-left"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="font-medium">{item.name}</span>
                    </button>
                  )}
                </div>
              ))}
              
              {/* Mobile Auth Section */}
              <div className="border-t border-gray-100 pt-4 mt-4">
                {user ? (
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3 px-3 py-2 bg-gradient-to-r from-gray-50 to-white rounded-lg">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#0C3B34] to-[#1a5f54] flex items-center justify-center text-white font-bold">
                        {getUserInitials(user)}
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{user.name}</p>
                        <p className="text-xs text-gray-500 truncate">{user.email}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        handleNavigation('/profile');
                      }}
                      className="w-full flex items-center space-x-3 py-3 px-3 text-gray-700 hover:text-[#0C3B34] transition-colors duration-300 rounded-lg hover:bg-gray-50"
                    >
                      <FiUser className="w-5 h-5" />
                      <span className="font-medium">Profile</span>
                    </button>
                    <button
                      onClick={handleLogout}
                      className="w-full flex items-center space-x-3 py-3 px-3 text-red-600 hover:text-red-700 transition-colors duration-300 rounded-lg hover:bg-red-50"
                    >
                      <FiLogOut className="w-5 h-5" />
                      <span className="font-medium">Logout</span>
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => handleNavigation('/register')}
                    className="w-full flex items-center justify-center space-x-3 py-4 px-6 bg-gradient-to-r from-[#D8C287] to-[#e6d098] text-[#0C3B34] font-bold rounded-xl hover:shadow-lg transition-all duration-300 hover:scale-105"
                  >
                    <FiUserPlus className="w-5 h-5" />
                    <span>Sign Up</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
        
        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-30 animate-fadeIn"
            onClick={closeAllDropdowns}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;