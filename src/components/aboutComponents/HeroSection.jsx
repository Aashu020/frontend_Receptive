import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

// Using placeholder images since we don't have access to your assets
const heroItems = [
  { 
    title: "Immigration", 
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80", 
    desc: "Seamless global relocation services tailored for you.",
    gradient: "from-blue-600 to-purple-600"
  },
  { 
    title: "Properties", 
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&q=80", 
    desc: "Find premium properties that match your dreams.",
    gradient: "from-emerald-600 to-teal-600"
  },
  { 
    title: "Investment", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80", 
    desc: "Smart investment opportunities for a secure future.",
    gradient: "from-orange-600 to-red-600"
  },
];

export default function HeroSection() {
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  // Scroll calculation for mobile
  useEffect(() => {
    if (!sliderRef.current) return;

    const slider = sliderRef.current;
    const containerWidth = slider.offsetWidth;
    const cardWidth = containerWidth * 0.8; // 80% of container
    const gap = 16; // Tailwind gap-4
    const totalContentWidth = heroItems.length * (cardWidth + gap) - gap; // Total width of all cards
    const maxScroll = totalContentWidth - containerWidth; // Maximum scrollable distance

    // Calculate scroll position
    let scrollLeft = currentIndex * (cardWidth + gap);

    // For the last slide, align it to the right to ensure full visibility
    if (currentIndex === heroItems.length - 1) {
      scrollLeft = maxScroll;
    }

    slider.scrollTo({
      left: scrollLeft,
      behavior: "smooth",
    });
  }, [currentIndex]);

  // Handle left and right navigation
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + heroItems.length) % heroItems.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % heroItems.length);
  };

  return (
    <section className=" relative lg:top-12 py-30 overflow-hidden ">
      {/* Animated Background */}
      <div className="absolute inset-0 ">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full bg-gradient-to-r from-transparent via-white/5 to-transparent animate-pulse"></div>
        </div>
      </div>

      <div className="relative mx-auto px-2 md:px-20 text-center text-[#043927]">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 pb-2">
            Explore Immigration, Properties & Investments
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto rounded-full"></div>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-3 gap-8 ">
          {heroItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                z: 50
              }}
              onHoverStart={() => setIsHovering(true)}
              onHoverEnd={() => setIsHovering(false)}
              className="group relative bg-white/10 rounded-3xl overflow-hidden shadow-2xl cursor-pointer backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-500"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 z-20"></div>
              
              <div className="relative overflow-hidden">
                <img 
                  src={item.img} 
                  alt={item.title} 
                  className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700" 
                />
              </div>
              
              <div className="p-8 relative z-10">
                <h2 className="text-2xl font-bold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#cf9a09] group-hover:to-yellow-900 group-hover:bg-clip-text transition-all duration-300">
                  {item.title}
                </h2>
                <p className="text-gray-800 text-sm leading-relaxed group-hover:text-gray-950 transition-colors duration-300">
                  {item.desc}
                </p>
                
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden relative">
          <div
            ref={sliderRef}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-4 overflow-y-hidden"
            // style={{ paddingRight: '20%' }} // Ensure last slide is fully visible
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
            onTouchStart={() => setIsHovering(true)}
            onTouchEnd={() => setIsHovering(false)}
          >
            {heroItems.map((item, idx) => (
              <motion.div
                key={idx}
                className="flex-none w-[80vw] snap-center bg-white/10 rounded-3xl overflow-hidden shadow-2xl cursor-pointer backdrop-blur-xl border border-white/20 group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
              >
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-t ${item.gradient} opacity-0 group-active:opacity-20 transition-opacity duration-300 z-10`}></div>
                
                <div className="relative overflow-hidden">
                  <img 
                    src={item.img} 
                    alt={item.title} 
                    className="w-full h-60 object-cover" 
                  />
                </div>
                
                <div className="p-6 text-left">
                  <h2 className="text-2xl font-bold mb-3">{item.title}</h2>
                  <p className="text-gray-300 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Buttons for Mobile */}
          <div className="md:hidden flex justify-between px-4 mt-4">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className={`p-2 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
                currentIndex === 0 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === heroItems.length - 1}
              className={`p-2 rounded-full bg-white/20 hover:bg-white/40 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 ${
                currentIndex === heroItems.length - 1 ? 'cursor-not-allowed' : 'cursor-pointer'
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Mobile Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {heroItems.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  idx === currentIndex 
                    ? 'bg-white scale-125' 
                    : 'bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}