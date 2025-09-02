import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const heroItems = [
  { 
    id: 1,
    title: "Immigration", 
    img: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80", 
    desc: "Receptive Immigration a division of the Receptive Group of Companies, is a trusted name in the investment industry. With a focus on creating wealth and financial security for our clients, Receptive Investments offers expert guidance and personalized services to help individuals and businesses navigate the investment landscape. ",
    buttonText: "Explore Immigration",
    buttonLink: "/immigration"
  },
  { 
    id: 2,
    title: "Properties", 
    img: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&q=80", 
    desc: "Receptive Properties is a new vertical of the Receptive Group of Companies, specializing in real estate services. Our dedicated team of professionals offers expert guidance and personalized services to assist individuals and businesses in buying, selling, and managing properties across India and UAE.",
    buttonText: "Browse Properties",
    buttonLink: "/properties"
  },
  { 
    id: 3,
    title: "Investment", 
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80", 
    desc: "Receptive Investments a division of the Receptive Group of Companies, is a trusted name in the investment industry. With a focus on creating wealth and financial security for our clients, Receptive Investments offers expert guidance and personalized services to help individuals and businesses navigate the investment landscape.",
    buttonText: "Investment Options",
    buttonLink: "/investment"
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
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <img 
              src={heroItems[currentIndex].img} 
              alt={heroItems[currentIndex].title}
              className="w-full h-full object-cover"
            />
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-transparent"></div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Content */}
      <div className="relative h-full flex items-center">
        <div className="container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl text-white"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {heroItems[currentIndex].title}
              </h1>
              <p className="text-xl md:text-2xl mb-8">
                {heroItems[currentIndex].desc}
              </p>
              <a
                href={heroItems[currentIndex].buttonLink}
                className="inline-block px-8 py-3 bg-[#D8C287] text-[#0a2d27]' : 'hover:bg-[#0a2d27] hover:text-white' font-semibold rounded-lg  transition-colors duration-300"
              >
                {heroItems[currentIndex].buttonText}
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Square Navigation Cards - Bottom Right */}
      <div className="absolute bottom-8 right-8 z-10 flex gap-4">
        {heroItems.map((item, index) => (
          <motion.div
            key={item.id}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
              currentIndex === index ? "ring-2 ring-[#043927]" : "opacity-80 hover:opacity-100"
            }`}
            onClick={() => goToSlide(index)}
            style={{ width: "100px", height: "100px" }}
          >
            <div className="h-2/3 overflow-hidden">
              <img 
                src={item.img} 
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="h-1/3 flex items-center justify-center p-2">
              <p className="text-xs font-medium text-gray-800 text-center">{item.title}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {heroItems.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}