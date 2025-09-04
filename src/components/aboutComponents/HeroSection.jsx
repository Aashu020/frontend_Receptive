import { useState, useEffect } from "react";
import visitor from "../../assets/HomepageImages/visitorvisa.avif"  
import properties from "../../assets/HomepageImages/properties.jpeg"
import investment from "../../assets/HomepageImages/investement.jpeg" 
const heroItems = [
  { 
    id: 1,
    title: "Immigration", 
    img: visitor, 
    desc: "Receptive Immigration a division of the Receptive Group of Companies, is a trusted name in the investment industry. With a focus on creating wealth and financial security for our clients.",
    buttonText: "Explore Immigration",
    buttonLink: "#immigration"
  },
  { 
    id: 2,
    title: "Properties", 
    img: properties, 
    desc: "Receptive Properties is a new vertical of the Receptive Group of Companies, specializing in real estate services. Our dedicated team offers expert guidance.",
    buttonText: "Browse Properties",
    buttonLink: "#Properties"
  },
  { 
    id: 3,
    title: "Investment", 
    img: investment, 
    desc: "Receptive Investments a division of the Receptive Group of Companies, is a trusted name in the investment industry. With a focus on creating wealth and financial security.",
    buttonText: "Investment Options",
    buttonLink: "#Investment"
  },
];

export default function HeroSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-advance the slider
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === heroItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    // Resume auto-play after user interaction
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image Slider */}
      <div className="absolute inset-0">
        <div
          key={currentIndex}
          className="absolute inset-0 transition-opacity duration-800 ease-in-out"
        >
          <img 
            src={heroItems[currentIndex].img} 
            alt={heroItems[currentIndex].title}
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30"></div>
        </div>
      </div>

      {/* Content with blur backdrop */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
          <div
            key={currentIndex}
            className="max-w-xl sm:max-w-2xl lg:max-w-3xl text-white transition-all duration-500 ease-in-out"
          >
            {/* Blur backdrop container */}
            <div className="backdrop-blur-sm bg-black/20 rounded-xl p-6 sm:p-8 md:p-10 lg:p-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-3 sm:mb-4 md:mb-6 leading-tight">
                {heroItems[currentIndex].title}
              </h1>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-6 sm:mb-8 leading-relaxed text-gray-100">
                {heroItems[currentIndex].desc}
              </p>
              <a
                href={heroItems[currentIndex].buttonLink}
                className="inline-block px-4 sm:px-6 md:px-8 py-2 sm:py-3 bg-[#D8C287] text-[#0a2d27] hover:bg-[#0a2d27] hover:text-white font-semibold rounded-lg transition-all duration-300 text-sm sm:text-base transform hover:scale-105"
              >
                {heroItems[currentIndex].buttonText}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Cards - Responsive positioning */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-10 flex gap-2 sm:gap-3 md:gap-4">
        {heroItems.map((item, index) => (
          <div
            key={item.id}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 transform hover:scale-105 ${
              currentIndex === index ? "ring-2 ring-[#043927] scale-105" : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => goToSlide(index)}
            style={{ 
              width: window.innerWidth < 640 ? "60px" : window.innerWidth < 768 ? "80px" : "100px",
              height: window.innerWidth < 640 ? "60px" : window.innerWidth < 768 ? "80px" : "100px"
            }}
          >
            <div className="h-2/3 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/3 flex items-center justify-center p-1 sm:p-2">
              <p className="text-[10px] sm:text-xs font-medium text-gray-800 text-center leading-tight">
                {item.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}