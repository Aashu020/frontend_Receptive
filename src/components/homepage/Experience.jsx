import React, { useState } from 'react';
import { 
  FaHandshake, 
  FaHistory, 
  FaLightbulb, 
  FaHeadset, 
  FaFileAlt, 
  FaEye 
} from 'react-icons/fa';

function Experience() {
  const [expandedCard, setExpandedCard] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const toggleExpand = (index) => {
    if (expandedCard === index) {
      setExpandedCard(null);
    } else {
      setExpandedCard(index);
    }
  };

  const cards = [
    {
      icon: <FaHandshake className="text-3xl md:text-4xl" />,
      title: "What We Provide",
      content: "Receptive Group of Companies (RGC) offers a wide range of Human Resources (HR) consultancy services designed to optimize workforce management and enhance organizational performance.",
      fullContent: "Our HR consultancy services include talent acquisition, employee training and development, performance management systems, HR policy development, compensation and benefits structuring, and organizational development. We work closely with businesses to create tailored HR solutions that drive growth and efficiency.",
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaHistory className="text-3xl md:text-4xl" />,
      title: "12+ years of experience",
      content: "With over 12 years of expertise, we have established ourselves as pioneers in successful visa consultations.",
      fullContent: "Throughout our 12+ years in the industry, we've helped thousands of clients achieve their immigration goals. Our extensive experience means we're familiar with even the most complex cases and changing immigration laws. We've navigated countless visa processes and have built strong relationships with immigration authorities.",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaLightbulb className="text-3xl md:text-4xl" />,
      title: "We Understand Your requirement",
      content: "RGC excels in providing exceptional customer service by demonstrating a thorough understanding of client queries and offering assistance at every step of the process.",
      fullContent: "We take the time to listen to your unique situation, goals, and concerns. Our advisors are trained to ask the right questions to fully comprehend your needs. This deep understanding allows us to provide personalized solutions rather than one-size-fits-all approaches, ensuring the best possible outcomes for your specific circumstances.",
      image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80"
    },
    {
      icon: <FaHeadset className="text-3xl md:text-4xl" />,
      title: "Continuous Support",
      content: "We prioritize client satisfaction by ensuring that no client leaves our services unsatisfied. Our unwavering commitment to delivering exceptional support in all desired international services is consistently recognized by our clients.",
      fullContent: "Our support doesn't end when your visa is approved. We provide ongoing assistance with post-arrival services, accommodation guidance, and settling-in support. Our team remains available to address any concerns or questions that may arise during your transition. We're committed to being your reliable partner throughout your entire journey.",
      image: "https://images.unsplash.com/photo-1588200908342-23b585c03e26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaFileAlt className="text-3xl md:text-4xl" />,
      title: "Perfect Documentation",
      content: "At RGC Immigration, we place a strong emphasis on 'Perfect Documentation'. This means that we meticulously review and ensure that all documentation required for visa applications and immigration processes is accurate, complete, and in compliance with relevant laws and regulations.",
      fullContent: "Our document specialists are trained to identify even the smallest errors that could lead to application rejection. We maintain a comprehensive checklist for each visa category and conduct multiple reviews of all documents. Our thorough approach to documentation has resulted in one of the highest approval rates in the industry.",
      image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      icon: <FaEye className="text-3xl md:text-4xl" />,
      title: "Client Transparency",
      content: "At RGC, we stand out from other immigration companies by prioritizing client transparency. We firmly believe in maintaining open and honest communication with our clients throughout the entire immigration process.",
      fullContent: "We provide clear explanations of all processes, fees, and potential challenges. You'll have access to your case status through our client portal and regular updates from your dedicated consultant. We believe informed clients make better decisions, and we're committed to ensuring you have all the information you need at every step.",
      image: "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1174&q=80"
    }
  ];

  return (
    <div className="relative pt-16 md:py10 px-6 md:px-12 lg:px-24 bg-[#F8F8F8] overflow-hidden">
      <h2 className="text-xl md:text-4xl font-bold text-center mb-3 md:mb-16 text-transparent bg-gradient-to-r from-[#D8C287] to-[#0C3B34] bg-clip-text relative z-20">
        HOW RECEPTIVE GROUP OF COMPANIES CAN HELP?
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-20">
        {cards.map((card, index) => (
          <div 
            key={index}
            className="relative h-100 h-96 cursor-pointer group" // Increased height to h-96
            onMouseEnter={() => setHoveredCard(index)}
            onMouseLeave={() => setHoveredCard(null)}
            
          >
            {/* Card with background image on hover */}
            <div 
              className={`absolute inset-0 rounded-2xl py-10 p-4 md:p-6 shadow-lg transition-all duration-500 ease-in-out overflow-hidden flex flex-col items-center justify-center h-full
                ${hoveredCard === index ? 'bg-cover bg-center' : 'bg-white'} ${expandedCard === index ? 'py-10' : 'py-4'}`}
              style={{ 
                backgroundImage: hoveredCard === index ? `linear-gradient(rgba(121, 128, 127, 0.85), rgba(98, 99, 99, 0.9)), url(${card.image})` : 'none'
              }}
            >
              {/* Content */}
              <div className="flex justify-center mb-4">
                <div className={`p-2 md:p-4 rounded-full transition-all duration-300 ${hoveredCard === index ? 'bg-[#D8C287]/20 text-[#D8C287]' : 'bg-[#D8C287]/20 text-[#0C3B34]'}`}>
                  {card.icon}
                </div>
              </div>
              
              <h3 className={`text-lg md:text-xl font-bold text-center mb-4 transition-colors duration-300 ${hoveredCard === index ? 'text-[#D8C287]' : 'text-[#0C3B34]'}`}>
                {card.title}
              </h3>
              
              <p className={`text-justify text-sm md:text-md transition-colors duration-300 ${hoveredCard === index ? 'text-white' : 'text-[#333333]'}`}>
                {expandedCard === index ? card.fullContent : card.content}
              </p>
              
              <div className=" md:mt-auto mt-3 md:pt-4 text-center" onClick={() => toggleExpand(index)}>
                <span className={`inline-block px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${hoveredCard === index ? 'bg-[#D8C287] text-[#0C3B34]' : 'bg-[#0C3B34] text-white'}`}>
                  {expandedCard === index ? 'Read Less' : 'Read More'}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experience;