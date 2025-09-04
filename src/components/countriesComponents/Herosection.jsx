import React from "react";

const HeroSection = ({ title, subtitle, bgImage, flag }) => {
  return (
    <section
      className="relative w-full h-[96vh] flex items-center justify-center text-center text-white pt-4"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 px-4 w-full max-w-7xl mx-auto">
        <h1
          className="text-4xl sm:text-6xl md:text-8xl lg:text-9xl xl:text-[170px] font-extrabold uppercase tracking-tight text-transparent w-full leading-none"
          style={{
            backgroundImage: `url(${flag})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            WebkitTextStroke: "2px white",
          }}
        >
          {title}
        </h1>

        <div className="inline-block mt-4 sm:mt-6 md:mt-8">
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-white font-bold px-3 py-2 sm:px-4 sm:py-2 md:px-5 md:py-3 rounded-lg backdrop-blur-md bg-black/20 shadow-lg border border-white/10">
            {subtitle}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;