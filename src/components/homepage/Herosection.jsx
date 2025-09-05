import React, { useState, useEffect } from 'react';
import uae from "../../assets/HomepageImages/uae.avif"
import us from "../../assets/HomepageImages/usa.avif"
import uk from "../../assets/HomepageImages/uk.avif"
import canda from "../../assets/HomepageImages/canada.avif"
import singpore from "../../assets/HomepageImages/sinagpore.avif"
import australia from "../../assets/HomepageImages/aus.avif"
import europe from "../../assets/HomepageImages/europe.avif"




function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide data for 7 countries
  const slides = [
    {
      title: "United Kingdom",
      description: "Explore the historic landmarks and vibrant culture of the UK, from London's bustling streets to Scotland's majestic highlands.",
      image: uk,
      alignment: "left"
    },
    {
      title: "United Arab Emirates",
      description: "Experience the blend of traditional heritage and modern innovation in the UAE's stunning desert landscapes and futuristic cities.",
      image: uae,
      alignment: "left"
    },
    {
      title: "United States",
      description: "Discover the diverse landscapes and cultures across America, from New York's skyscrapers to California's sunny beaches.",
      image: us,
      alignment: "left"
    },
    {
      title: "Australia",
      description: "Journey through Australia's unique wildlife, stunning coastlines, and vibrant cities down under.",
      image: australia,
      alignment: "left"
    },
    {
      title: "Europe",
      description: "Immerse yourself in Europe's rich history, diverse cultures, and breathtaking architecture across the continent.",
      image: europe,
      alignment: "left"
    },
    {
      title: "Singapore",
      description: "Experience the perfect fusion of culture, cuisine, and innovation in Singapore's stunning urban landscape.",
      image: singpore,
      alignment: "left"
    },
    {
      title: "Canada",
      description: "Explore Canada's vast wilderness, friendly cities, and diverse cultural experiences from coast to coast.",
      image: canda,
      alignment: "left"
    }
  ];

  // Auto-advance slides
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    
    return () => clearTimeout(timer);
  }, [currentSlide, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
        >
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          
          {/* Dark Overlay for better text visibility */}
          <div className="absolute inset-0 bg-black/20"></div>
          
          {/* Content Container */}
          <div className={`relative h-full flex items-center justify-${slide.alignment === 'left' ? 'start' : 'end'} px-4 md:px-16 lg:px-24`}>
            {/* Text Content with Transparent Background */}
            <div className={`max-w-md md:max-w-xl bg-white/10 md:top-11 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl ${slide.alignment === 'left' ? 'ml-0 md:ml-10' : 'mr-6 md:mr-10'} relative`}>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-md md:text-xl text-white mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <button className="text-sm md:text:md bg-[#D8C287] text-[#0a2d27] px-6 py-3 rounded-lg font-medium hover:bg-[#0a2d27] hover:text-white transition cursor-pointer mb-3 md:mb-8">
                Explore {slide.title}
              </button>
              
              {/* Navigation Arrows positioned below card content */}
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={goToPrev}
                  className="bg-[#0C3B34] bg-opacity-80 text-[#D8C287] p-3 rounded-full hover:bg-opacity-100 transition cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="md:w-5 md:h-5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Slide Indicators in the middle */}
                <div className="flex space-x-2">
                  {slides.map((_, indicatorIndex) => (
                    <button
                      key={indicatorIndex}
                      onClick={() => goToSlide(indicatorIndex)}
                      className={`md:w-2.5 md:h-2.5 h-2 w-2 rounded-full transition-all cursor-pointer ${indicatorIndex === currentSlide ? 'bg-[#D8C287] scale-125' : 'bg-white bg-opacity-70 hover:bg-opacity-100'}`}
                      aria-label={`Go to slide ${indicatorIndex + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={goToNext}
                  className="bg-[#0C3B34] bg-opacity-80 text-[#D8C287] p-3 rounded-full hover:bg-opacity-100 transition cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="md:w-5 md:h-5 h-3 w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Herosection;