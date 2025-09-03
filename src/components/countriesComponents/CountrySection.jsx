import React from "react";

const CountrySection = ({ countryName,mainTitle, title, desc, img }) => {
  return (
    <div className="w-full py-8 bg-white">
      
      {/* Left Content */}
        <h1 className="text-3xl font-extrabold text-center md:text-center uppercase text-teal-900 pb-8">
          {countryName}
        </h1>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8 px-8 md:px-16  text-gray-800">
        <div className="md:w-1/2 space-y-4">
        <h2 className="text-2xl font-bold text-center md:text-left text-green-900">{mainTitle}</h2>
        <h3 className="text-lg text-center md:text-left text-green-800">
          {title}
        </h3>
        <p className="text-sm text-justify md:text-left leading-relaxed">{desc}</p>
      </div>

      {/* Right Image */}
      <div >
        <img
          src={img}
          alt={countryName}
          className="rounded-xl shadow-lg w-full max-w-md object-cover"
        />
      </div>
      </div>
    </div>
  );
};

export default CountrySection;
