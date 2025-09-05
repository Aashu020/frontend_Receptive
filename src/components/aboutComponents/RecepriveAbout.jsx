import React, { useState, useEffect } from "react";
import logo from '../../assets/images/RGC_Clear-removebg-preview.png';

export default function ReceptiveAbout() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-6 md:py-16 bg-[#F8F8F8]">
      <div className="flex flex-col items-center">
        {/* Animated Logo */}
        <div className={`md:mb-10 w-72 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <img
            src={logo}
            alt="Receptive Group"
            className="w-full object-contain"
          />
        </div>

        {/* Main Content */}
        <div className="md:text-center md:px-[3rem] lg:px-[10rem]">
          <h1 className={`text-justify md:text-center  md:[word-spacing:10px] text-2xl md:text-3xl font-bold bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text mb-8 transform transition-all duration-700 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
            Welcome to Receptive Group of Companies
          </h1>
          
          <div className="text-[#333333] text-md md:text-lg leading-relaxed space-y-6 md:text-justify">
            <p className={`transform transition-all duration-700 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              A trusted name in the Immigration and HR consultancy industry for over 12 years in India with now global presence in UK and Dubai. We take pride in our commitment to excellence and personalized service, helping individuals and businesses navigate the complexities of immigration and HR processes with ease across the globe.
            </p>
            
            <p className={`transform transition-all duration-700 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              Our team of experienced professionals is dedicated to providing tailored solutions to meet the unique needs of each client, ensuring a smooth and successful journey towards achieving your immigration and HR goals.
            </p>
            
            <p className={`transform transition-all duration-700 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              Whether you are seeking assistance with visa applications, employee recruitment, or Permanent Residence, Receptive Group of Companies is here to support you every step of the way.
            </p>
            
            <div className={`p-6 bg-gradient-to-r from-[#0C3B34]/10 to-[#0C3B34]/5 rounded-xl border-l-4 border-[#D8C287] transform transition-all duration-700 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              <p className="font-semibold text-[#0C3B34] text-md md:text-xl">
                We are excited to announce our expansion into two new verticals, Receptive Investments and Receptive Properties.
              </p>
            </div>
            
            <p className={`font-medium text-[#333333] mt-6 transform transition-all duration-700 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'}`}>
              Trust in our expertise, reliability, and unwavering dedication to your success. Let us be your partner in realizing your dreams and aspirations.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        
      </div>
    </div>
  );
}