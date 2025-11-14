
import React from "react";

const CountrySection = ({ countryName, mainTitle, title, desc, img }) => {
  return (
    <section className="w-full py-12 px-4 bg-white 2xl:pt-18">
      <div className="max-w-6xl 2xl:max-w-[100rem] mx-auto">
        {/* Country Name Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl 2xl:text-6xl font-extrabold uppercase text-teal-900 tracking-wider">
            {countryName}
          </h1>
        </div>
        
        {/* Top Section - Main Title, Title & Image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          
          {/* Left Column - Main Title & Title */}
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl md:text-3xl 2xl:text-5xl font-bold text-green-900 mb-3 leading-tight">
                {mainTitle}
              </h2>
              <h3 className="text-lg md:text-xl 2xl:text-3xl text-green-800 font-medium">
                {title}
              </h3>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full">
              <img
                src={img}
                alt={countryName}
                className="w-full h-64 md:h-80 2xl:h-100 object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

        </div>

        {/* Bottom Section - Full Width Description */}
        <div className="w-full">
          <div className="prose prose-base max-w-none">
            <p className="text-gray-700 text-base 2xl:text-2xl 2xl:tracking-wider 2xl:leading-normal  text-justify">
              {desc}
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CountrySection;
