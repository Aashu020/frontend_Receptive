import React, { useState, useEffect } from 'react';

function Herosection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  // Slide data for 7 countries
  const slides = [
    {
      title: "United Kingdom",
      description: "Explore the historic landmarks and vibrant culture of the UK, from London's bustling streets to Scotland's majestic highlands.",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alignment: "left"
    },
    {
      title: "United Arab Emirates",
      description: "Experience the blend of traditional heritage and modern innovation in the UAE's stunning desert landscapes and futuristic cities.",
      image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alignment: "right"
    },
    {
      title: "United States",
      description: "Discover the diverse landscapes and cultures across America, from New York's skyscrapers to California's sunny beaches.",
      image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1799&q=80",
      alignment: "left"
    },
    {
      title: "Australia",
      description: "Journey through Australia's unique wildlife, stunning coastlines, and vibrant cities down under.",
      image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alignment: "right"
    },
    {
      title: "Europe",
      description: "Immerse yourself in Europe's rich history, diverse cultures, and breathtaking architecture across the continent.",
      image: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
      alignment: "left"
    },
    {
      title: "Singapore",
      description: "Experience the perfect fusion of culture, cuisine, and innovation in Singapore's stunning urban landscape.",
      image: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1772&q=80",
      alignment: "right"
    },
    {
      title: "Canada",
      description: "Explore Canada's vast wilderness, friendly cities, and diverse cultural experiences from coast to coast.",
      image: "https://images.unsplash.com/photo-1519832979-6fa011b87667?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80",
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
            <div className={`max-w-md md:max-w-xl bg-white/10 top-11 backdrop-blur-lg rounded-xl p-6 md:p-8 shadow-xl ${slide.alignment === 'left' ? 'ml-6 md:ml-10' : 'mr-6 md:mr-10'} relative`}>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white mb-6 drop-shadow-md">
                {slide.description}
              </p>
              <button className="bg-[#D8C287] text-[#0a2d27] px-6 py-3 rounded-lg font-medium hover:bg-[#0a2d27] hover:text-white transition cursor-pointer mb-8">
                Explore {slide.title}
              </button>
              
              {/* Navigation Arrows positioned below card content */}
              <div className="flex justify-between items-center mt-4">
                <button 
                  onClick={goToPrev}
                  className="bg-[#0C3B34] bg-opacity-80 text-[#D8C287] p-3 rounded-full hover:bg-opacity-100 transition cursor-pointer"
                  aria-label="Previous slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                {/* Slide Indicators in the middle */}
                <div className="flex space-x-2">
                  {slides.map((_, indicatorIndex) => (
                    <button
                      key={indicatorIndex}
                      onClick={() => goToSlide(indicatorIndex)}
                      className={`w-2.5 h-2.5 rounded-full transition-all cursor-pointer ${indicatorIndex === currentSlide ? 'bg-[#D8C287] scale-125' : 'bg-white bg-opacity-70 hover:bg-opacity-100'}`}
                      aria-label={`Go to slide ${indicatorIndex + 1}`}
                    />
                  ))}
                </div>
                
                <button 
                  onClick={goToNext}
                  className="bg-[#0C3B34] bg-opacity-80 text-[#D8C287] p-3 rounded-full hover:bg-opacity-100 transition cursor-pointer"
                  aria-label="Next slide"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
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