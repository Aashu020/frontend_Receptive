import React from "react";

const HeroSection = ({ title, subtitle, bgImage }) => {
  return (
    <section
      className="relative w-full h-[96vh] flex items-center justify-center text-center text-white pt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat:"no-repeat"
      }}
    >
      {/* Content */}
      <div className="relative z-10 max-w-2xl px-4 backdrop-blur-xs bg-black/0.1">
        <h1 className="text-4xl font-bold mb-4 drop-shadow-lg ">{title}</h1>
        <p className="text-lg drop-shadow-md">{subtitle}</p>
      </div>
    </section>
  );
};

export default HeroSection;
