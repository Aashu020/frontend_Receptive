// import React, { useState, useEffect } from "react";
// import {
//   FaPhone,
//   FaEnvelope,
//   FaInstagram,
//   FaFacebookF,
//   FaLinkedinIn,
//   FaYoutube,
//   FaRegFileAlt,
//   FaLock,
// } from "react-icons/fa";

// function UpperHeader() {
//   const [isVisible, setIsVisible] = useState(true);
//   const [lastScrollY, setLastScrollY] = useState(0);

//   useEffect(() => {
//     const handleScroll = () => {
//       const currentScrollY = window.scrollY;
      
//       if (currentScrollY > lastScrollY && currentScrollY > 100) {
//         // Scrolling down - hide header
//         setIsVisible(false);
//       } else {
//         // Scrolling up - show header
//         setIsVisible(true);
//       }
      
//       setLastScrollY(currentScrollY);
//     };

//     window.addEventListener('scroll', handleScroll, { passive: true });
    
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, [lastScrollY]);

//   const handlePhoneClick = (phoneNumber) => {
//     window.open(`tel:${phoneNumber}`, '_self');
//   };

//   const handleEmailClick = (email) => {
//     window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`, '_blank');
//   };

//   return (
//     <div
//       style={{
//         background: "var(--primary)",
//         color: "var(--accent)",
//         transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
//         transition: 'transform 0.3s ease-in-out',
//       }}
//       className="upperHeader hidden sm:hidden md:flex lg:flex xl:flex fixed z-50 justify-between items-center py-3 md:py-3 lg:py-4 px-4 md:px-4 lg:px-5 top-0 "
//     >
//       {/* Contact information - responsive layout */}
//       <div className="upper-contact  flex flex-col md:flex-row gap-1 md:gap-2 lg:gap-3 xl:gap-8 text-xs lg:text-sm">
//         {/* First contact group */}
//         <div className="flex items-center gap-1 md:gap-2">
//           <button 
//             onClick={() => handlePhoneClick('+919876543210')}
//             className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
//             aria-label="Call +91 98765 43210"
//           >
//             <FaPhone className="text-xs lg:text-sm" />
//             <span className="ml-1 text-xs lg:text-sm hidden lg:inline hover:text-white cursor-pointer">+91 98765 43210</span>
//           </button>
//           <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
//           <button 
//             onClick={() => handleEmailClick('info@receptivegroup.com')}
//             className="flex items-center gap-1 hover:opacity-80 hover:text-white cursor-pointer transition-opacity"
//             aria-label="Email info@receptivegroup.com"
//           >
//             <FaEnvelope className="text-xs lg:text-sm" />
//             <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
//               info@receptivegroup.com
//             </span>
//           </button>
//         </div>

//         {/* Second contact group */}
//         <div className="flex items-center gap-1 md:gap-2 ">
//           <button 
//             onClick={() => handlePhoneClick('+919885602560')}
//             className="flex items-center gap-1 hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
//             aria-label="Call +91 98856 02560"
//           >
//             <FaPhone className="text-xs lg:text-sm" />
//             <span className="ml-1 text-xs lg:text-sm hidden  hover:text-white cursor-pointer lg:inline">+91 98856 02560</span>
//           </button>
//           <span className="mx-1 text-xs lg:text-sm opacity-60">|</span>
//           <button 
//             onClick={() => handleEmailClick('info@receptivesolutions.com')}
//             className="flex items-center gap-1 hover:opacity-80   hover:text-white cursor-pointer transition-opacity"
//             aria-label="Email info@receptivesolutions.com"
//           >
//             <FaEnvelope className="text-xs lg:text-sm" />
//             <span className="ml-1 hover:underline hover:text-white cursor-pointer text-xs lg:text-sm truncate max-w-[100px] md:max-w-[140px] lg:max-w-[180px] xl:max-w-none">
//               info@receptivesolutions.com
//             </span>
//           </button>
//         </div>
//       </div>

//       {/* Right side - Terms and Social icons */}
//       <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
//         {/* Terms */}
//         <a 
//           href="/terms" 
//           className="hidden lg:flex items-center hover:opacity-80 transition-opacity hover:text-white cursor-pointer"
//         >
//           <FaRegFileAlt className="mr-1 text-xs lg:text-sm" />
//           <span className="text-xs lg:text-sm hover:text-white cursor-pointer">Terms</span>
//         </a>

//         {/* Social media icons */}
//         <div className="flex items-center gap-1 md:gap-2 lg:gap-3">
//           <a 
//             href="https://instagram.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
//             aria-label="Instagram"
//           >
//             <FaInstagram className="text-sm lg:text-base" />
//           </a>
//           <a 
//             href="https://facebook.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
//             aria-label="Facebook"
//           >
//             <FaFacebookF className="text-sm lg:text-base" />
//           </a>
//           <a 
//             href="https://linkedin.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
//             aria-label="LinkedIn"
//           >
//             <FaLinkedinIn className="text-sm lg:text-base" />
//           </a>
//           <a 
//             href="https://youtube.com" 
//             target="_blank" 
//             rel="noopener noreferrer"
//             className="p-1 hover:text-white hover:scale-110 transition-all duration-200"
//             aria-label="YouTube"
//           >
//             <FaYoutube className="text-sm lg:text-base" />
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default UpperHeader;