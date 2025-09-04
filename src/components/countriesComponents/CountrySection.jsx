
import React from "react";

const CountrySection = ({ countryName, mainTitle, title, desc, img }) => {
  return (
    <section className="w-full py-12 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Country Name Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold uppercase text-teal-900 tracking-wide">
            {countryName}
          </h1>
        </div>
        
        {/* Top Section - Main Title, Title & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column - Main Title & Title */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-green-900 mb-3 leading-tight">
                {mainTitle}
              </h2>
              <h3 className="text-lg md:text-xl text-green-800 font-medium">
                {title}
              </h3>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <img
                src={img}
                alt={countryName}
                className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section - Full Width Description */}
        <div className="w-full">
          <div className="prose prose-base max-w-none">
            <p className="text-gray-700 text-base leading-relaxed text-justify">
              {desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountrySection;
