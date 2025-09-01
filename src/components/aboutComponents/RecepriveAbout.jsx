import React from "react";
import logo from '../../assets/images/RGC_Clear-removebg-preview.png';
export default function ReceptiveAbout() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div>
          <img
            src={logo}
            alt="Receptive Group"
            className="w-full object-cover "
          />
        </div>

        {/* Text Section */}
        <div className="space-y-2">
          <h1 className="text-2xl font-extrabold text-black text-center">
            " Welcome to Receptive Group of Companies "
          </h1>
          
          <div className="text-gray-700 leading-relaxed space-y-2 " >
            <p>
              A trusted name in the Immigration and HR consultancy industry for over 12 years in India with now global presence in UK and Dubai. We take pride in our commitment to excellence and personalized service, helping individuals and businesses navigate the complexities of immigration and HR processes with ease across the globe.
            </p>
            
            <p>
              Our team of experienced professionals is dedicated to providing tailored solutions to meet the unique needs of each client, ensuring a smooth and successful journey towards achieving your immigration and HR goals.
            </p>
            
            <p>
              Whether you are seeking assistance with visa applications, employee recruitment, or Permanent Residence, Receptive Group of Companies is here to support you every step of the way.
            </p>
            
            <p>
              Trust in our expertise, reliability, and unwavering dedication to your success. Let us be your partner in realizing your dreams and aspirations.
            </p>
            
            <p className="font-semibold text-blue-600">
              We are excited to announce our expansion into two new verticals, Receptive Investments and Receptive Properties.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}