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

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6 text-[#0C3B34] border-b-2 border-[#D8C287] pb-2">
        Client Reviews
      </h2>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] p-4 rounded-lg text-white text-center">
          <div className="text-2xl font-bold">4.8</div>
          <div className="text-sm opacity-90">Average Rating</div>
          <div className="flex justify-center mt-1">
            {renderStars(5)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D8C287] to-[#c4a567] p-4 rounded-lg text-[#0C3B34] text-center">
          <div className="text-2xl font-bold">500+</div>
          <div className="text-sm font-semibold">Happy Clients</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-4 rounded-lg text-white text-center">
          <div className="text-2xl font-bold">95%</div>
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

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] p-8 rounded-2xl text-white">
          <h3 className="text-2xl font-bold mb-4">Ready to Start Your Journey?</h3>
          <p className="mb-6 opacity-90">Join thousands of satisfied clients who achieved their immigration dreams with us.</p>
          <button className="bg-[#D8C287] hover:bg-[#c4a567] text-[#0C3B34] font-bold py-3 px-8 rounded-full transition-colors duration-300 hover:scale-105 transform">
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}

export default Reviews;