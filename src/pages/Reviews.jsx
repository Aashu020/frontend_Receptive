import React from 'react';

// Mock reviews data
const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    country: "Canada",
    rating: 5,
    text: "The visa process was smooth and hassle-free. The team guided me at every step and made sure all documents were perfect.",
    date: "March 2024"
  },
  {
    id: 2,
    name: "Priya Sharma",
    country: "United Kingdom",
    rating: 4,
    text: "Great service! I got my UK student visa within the expected timeframe. Would recommend to others.",
    date: "February 2024"
  },
  {
    id: 3,
    name: "Amit Patel",
    country: "Canada",
    rating: 5,
    text: "Excellent consultation services. They helped me navigate the complex PR process with ease.",
    date: "January 2024"
  },
  {
    id: 4,
    name: "Sneha Gupta",
    country: "Australia",
    rating: 4,
    text: "Professional and knowledgeable staff. Made my visa application process much simpler than I expected.",
    date: "December 2023"
  },
  {
    id: 5,
    name: "Mohammad Ali",
    country: "United Kingdom",
    rating: 5,
    text: "Outstanding support throughout the entire process. They made my dream of studying in the UK come true.",
    date: "November 2023"
  },
  {
    id: 6,
    name: "Sarah Johnson",
    country: "Canada",
    rating: 5,
    text: "The team's expertise and dedication are unmatched. My family's immigration process was handled professionally.",
    date: "October 2023"
  },
  {
    id: 7,
    name: "Vikram Singh",
    country: "Australia",
    rating: 5,
    text: "Exceptional service! They made my spouse visa process incredibly smooth. Highly recommended!",
    date: "September 2023"
  },
  {
    id: 8,
    name: "Neha Patel",
    country: "Canada",
    rating: 4,
    text: "Very professional team. They explained everything in detail and helped me with my work permit application.",
    date: "August 2023"
  }
];

function Reviews() {
  // Render stars for ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
  };

  // Get country flag emoji
  const getCountryFlag = (country) => {
    const flags = {
      "Canada": "🇨🇦",
      "United Kingdom": "🇬🇧",
      "Australia": "🇦🇺",
      "United States": "🇺🇸"
    };
    return flags[country] || "🌍";
  };

  // Function to handle external link redirection
  const handleExternalRedirect = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="mt-45 px-4"> {/* Increased margin from top and added horizontal padding */}
      {/* Introductory Text Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0C3B34] mb-4">What Our Clients Say</h1>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          For over a decade, we've helped thousands of clients achieve their immigration dreams. 
          Here's what some of them have to say about their experience with our services.
        </p>
      </div>
      
      <h2 className="text-2xl font-bold mb-6 text-[#0C3B34] border-b-2 border-[#D8C287] pb-2">
        Client Reviews
      </h2>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] p-4 rounded-lg text-white text-center">
          <div className="text-2xl font-bold">4.2</div>
          <div className="text-sm opacity-90">Average Rating</div>
          <div className="flex justify-center mt-1">
            {renderStars(5)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D8C287] to-[#c4a567] p-4 rounded-lg text-[#0C3B34] text-center">
          <div className="text-2xl font-bold">2000+</div>
          <div className="text-sm font-semibold">Happy Clients</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white text-center">
          <div className="text-2xl font-bold">70%</div>
          <div className="text-sm opacity-90">Success Rate</div>
        </div>
      </div>

      

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Header */}
            <div className="flex justify-between items-start mb-4">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] rounded-full flex items-center justify-center text-white font-bold text-lg">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#0C3B34]">{review.name}</h3>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg">{getCountryFlag(review.country)}</span>
                    <span className="text-sm text-gray-600">{review.country}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex mb-1">
                  {renderStars(review.rating)}
                </div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>
            </div>

            {/* Review Text */}
            <div className="relative">
              <div className="text-4xl text-[#D8C287] absolute -top-2 -left-1 opacity-50">"</div>
              <p className="text-gray-700 italic pl-6 leading-relaxed">{review.text}</p>
              <div className="text-4xl text-[#D8C287] absolute -bottom-6 right-2 opacity-50">"</div>
            </div>

            {/* Bottom Border */}
            <div className="mt-4 pt-4 border-t border-[#D8C287] opacity-30"></div>
          </div>
        ))}
      </div>

      {/* External Review Platforms */}
      <div className="mb-12 mt-10 bg-gradient-to-r from-[#f8f5ea] to-[#faf7ee] p-6 rounded-xl border border-[#D8C287]">
        <h3 className="text-xl font-bold text-[#0C3B34] mb-4 text-center">Read More Reviews on These Platforms</h3>
        <p className="text-gray-700 text-center mb-6 max-w-2xl mx-auto">
          Our clients have shared their experiences on various platforms. Click below to read more reviews about our services.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mt-6">
          <button 
            onClick={() => handleExternalRedirect('https://www.justdial.com/Mumbai/Receptive-Solutions-Malad-West/022PXX22-XX22-210525154644-Y9W8_BZDET')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] hover:from-[#1a5a4f] hover:to-[#0C3B34] text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Read Reviews on JustDial
          </button>
          <button 
            onClick={() => handleExternalRedirect('https://www.mouthshut.com/product-reviews/receptive-solutaions-reviews-926102567')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D8C287] to-[#c4a567] hover:from-[#c4a567] hover:to-[#D8C287] text-[#0C3B34] font-semibold py-3 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Read Reviews on MouthShut
          </button>
        </div>
      </div>

     
    </div>
  );
}

export default Reviews;