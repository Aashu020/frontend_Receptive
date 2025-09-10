import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ReviewScreen from '../components/reviewComponnnents/ReviewScreen'; // Assuming this is your review form component

// Mock reviews data (same as yours)
const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    country: "Canada",
    rating: 5,
    text: "The visa process was smooth and hassle-free. The team guided me at every step and made sure all documents were perfect.",
    date: "March 2024"
  },
  // ... other reviews
];

function Reviews() {
  const { user } = useSelector(state => state.auth);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);

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

  // Handle add review button click
  const handleAddReviewClick = () => {
    if (user) {
      setShowReviewForm(true);
    } else {
      setShowLoginPrompt(true);
    }
  };

  // Handle closing the review form
  const handleCloseReviewForm = () => {
    setShowReviewForm(false);
  };

  // Handle closing the login prompt
  const handleCloseLoginPrompt = () => {
    setShowLoginPrompt(false);
  };

  return (
    <div className="mt-20 md:mt-45 px-4 lg:px-8 max-w-7xl mx-auto">
      {/* Add Review Button */}
      <div className="flex justify-end mb-6">
        <button 
          onClick={handleAddReviewClick}
          className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] hover:from-[#1a5a4f] hover:to-[#0C3B34] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add Review
        </button>
      </div>

      {/* Review Form Modal (shown when user is logged in) */}
      {showReviewForm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button 
              onClick={handleCloseReviewForm}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <ReviewScreen onClose={handleCloseReviewForm} />
          </div>
        </div>
      )}

      {/* Login Prompt Modal (shown when user is not logged in) */}
      {showLoginPrompt && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg w-full max-w-md p-6 relative">
            <button 
              onClick={handleCloseLoginPrompt}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-[#0C3B34]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              <h3 className="text-xl font-bold text-[#0C3B34] mt-4">Login Required</h3>
              <p className="text-gray-600 mt-2">Please log in to write a review.</p>
              <button 
                onClick={handleCloseLoginPrompt}
                className="mt-6 bg-[#0C3B34] text-white font-semibold py-2 px-6 rounded-lg hover:bg-[#1a5a4f] transition-colors"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Rest of your existing Reviews component */}
      <div className="text-center mb-8 md:mb-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C3B34] mb-3 md:mb-4">What Our Clients Say</h1>
        <p className="text-base md:text-lg text-gray-700 max-w-3xl mx-auto px-2 sm:px-0">
          For over a decade, we've helped thousands of clients achieve their immigration dreams. 
          Here's what some of them have to say about their experience with our services.
        </p>
      </div>
      
      <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#0C3B34] border-b-2 border-[#D8C287] pb-2">
        Client Reviews
      </h2>
      
      {/* Statistics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
        <div className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] p-3 md:p-4 rounded-lg text-white text-center">
          <div className="text-xl md:text-2xl font-bold">4.2</div>
          <div className="text-xs md:text-sm opacity-90">Average Rating</div>
          <div className="flex justify-center mt-1 text-sm md:text-base">
            {renderStars(5)}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D8C287] to-[#c4a567] p-3 md:p-4 rounded-lg text-[#0C3B34] text-center">
          <div className="text-xl md:text-2xl font-bold">2000+</div>
          <div className="text-xs md:text-sm font-semibold">Happy Clients</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 md:p-4 rounded-lg text-white text-center">
          <div className="text-xl md:text-2xl font-bold">70%</div>
          <div className="text-xs md:text-sm opacity-90">Success Rate</div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            {/* Header */}
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                  {review.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-[#0C3B34]">{review.name}</h3>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-base md:text-lg">{getCountryFlag(review.country)}</span>
                    <span className="text-xs md:text-sm text-gray-600">{review.country}</span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex mb-1 text-sm md:text-base">
                  {renderStars(review.rating)}
                </div>
                <div className="text-xs text-gray-500">{review.date}</div>
              </div>
            </div>

            {/* Review Text */}
            <div className="relative">
              <div className="text-3xl md:text-4xl text-[#D8C287] absolute -top-2 -left-1 opacity-50">"</div>
              <p className="text-sm md:text-base text-gray-700 italic pl-4 md:pl-6 leading-relaxed">{review.text}</p>
              <div className="text-3xl md:text-4xl text-[#D8C287] absolute -bottom-6 right-2 opacity-50">"</div>
            </div>

            {/* Bottom Border */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#D8C287] opacity-30"></div>
          </div>
        ))}
      </div>

      {/* External Review Platforms */}
      <div className="mb-8 md:mb-12 mt-8 md:mt-10 bg-gradient-to-r from-[#f8f5ea] to-[#faf7ee] p-4 md:p-6 rounded-xl border border-[#D8C287]">
        <h3 className="text-lg md:text-xl font-bold text-[#0C3B34] mb-3 md:mb-4 text-center">Read More Reviews on These Platforms</h3>
        <p className="text-sm md:text-base text-gray-700 text-center mb-4 md:mb-6 max-w-2xl mx-auto px-2 md:px-0">
          Our clients have shared their experiences on various platforms. Click below to read more reviews about our services.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mt-4 md:mt-6">
          <button 
            onClick={() => handleExternalRedirect('https://www.justdial.com/Mumbai/Receptive-Solutions-Malad-West/022PXX22-XX22-210525154644-Y9W8_BZDET')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] hover:from-[#1a5a4f] hover:to-[#0C3B34] text-white font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
            </svg>
            Read Reviews on JustDial
          </button>
          <button 
            onClick={() => handleExternalRedirect('https://www.mouthshut.com/product-reviews/receptive-solutaions-reviews-926102567')}
            className="flex items-center justify-center gap-2 bg-gradient-to-r from-[#D8C287] to-[#c4a567] hover:from-[#c4a567] hover:to-[#D8C287] text-[#0C3B34] font-semibold py-2 md:py-3 px-4 md:px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 md:h-5 md:w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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