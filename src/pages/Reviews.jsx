import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ReviewScreen from '../components/reviewComponnnents/ReviewScreen';
import axios from 'axios';
import { AiFillHeart } from "react-icons/ai";
import BaseUrl from "../../url";

function Reviews() {
  const { user } = useSelector(state => state.auth);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [expandedImages, setExpandedImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null); // For modal
  const userId = localStorage.getItem("user");
  const userToken = localStorage.getItem("token");
  // const BaseUrl = import.meta.env.VITE_BASE_URL;

  console.log("Base URL:", BaseUrl);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const token = localStorage.getItem("token");
        const storedUserId = localStorage.getItem("user");

        const res = await axios.get(`${BaseUrl}/api/reviews`, {
          headers: token ? { Authorization: `Bearer ${token}` } : {}
        });

        console.log("Backend :", res.data);

        const allReviews = res.data.reviews || [];

        // Filter: show approved OR own reviews only
        const filtered = allReviews.filter((r) => {
          if (r.isapproved) return true;
          if (storedUserId) {
            const authorId = typeof r.author === "string" ? r.author : r.author?._id;
            if (authorId === storedUserId) return true;
          }
          return false;
        });

        console.log("Filtered reviews:", filtered);

        // Map to frontend-friendly shape
        const formatted = filtered.map((r) => {
          const likes = r.likes || [];
          const authorName =
            typeof r.author === "string" ? "Unknown" : r.author?.name || "Unknown";

          return {
            id: r._id,
            name: r.displayName || authorName,
            text: r.content,
            rating: Number(r.ratings) || 0,
            date: new Date(r.createdAt).toLocaleDateString(),
            likes: likes,
            totalLikes: likes.length,
            isLiked: storedUserId ? likes.some((id) => id.toString() === storedUserId) : false,
            // FIX: Convert relative paths to full URLs
            images: (r.images || []).map(img => {
              // If image already has http/https, return as is
              if (img.startsWith('http://') || img.startsWith('https://')) {
                return img;
              }
              // Otherwise, prepend the BaseUrl
              return `${BaseUrl}${img}`;
            }),
          };
        });

        setReviews(formatted);
        console.log("Formatted reviews:", formatted);
      } catch (err) {
        console.error("Error fetching reviews", err);
      }
    };

    fetchReviews();
  }, []);

  // Toggle images visibility for a review
  const toggleImages = (reviewId) => {
    setExpandedImages((prev) => ({
      ...prev,
      [reviewId]: !prev[reviewId],
    }));
  };

  // Open image in modal
  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  // Close image modal
  const closeImageModal = () => {
    setSelectedImage(null);
  };

  const toggleLike = async (reviewId) => {
    if (!userId || !userToken) {
      setShowLoginPrompt(true);
      return;
    }

    try {
      const res = await fetch(
        `${BaseUrl}/api/reviews/${reviewId}/like`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${userToken}`,
          },
        }
      );
      const data = await res.json();

      if (data.success) {
        console.log("userId in toggleLike:", userId, "likes:", data.review.likes);
        setReviews(prevReviews =>
          prevReviews.map(review =>
            review.id === reviewId
              ? {
                ...review,
                likes: data.review.likes,
                totalLikes: data.review.likes.length,
                isLiked: data.review.likes.some(id => id.toString() === userId)
              }
              : review
          )
        );
      } else {
        console.error("API error:", data.message);
      }
    } catch (err) {
      console.error("Error liking review:", err);
    }
  };

  // Render stars for ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span key={i} className={i < rating ? "text-yellow-400" : "text-gray-300"}>
        ★
      </span>
    ));
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

      {/* Review Form Modal */}
      {showReviewForm && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 bg-black/30 flex items-center justify-center z-50 p-4">
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

      {/* Login Prompt Modal */}
      {showLoginPrompt && (
        <div className="fixed inset-0 backdrop-blur bg-opacity-50 flex items-center justify-center z-50 p-4">
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
              <p className="text-gray-600 mt-2">Please log in to like reviews.</p>
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

      {/* Image Modal - Full Screen View */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/10 bg-opacity-90 flex items-center justify-center z-[1000] p-4"
          onClick={closeImageModal}
        >
          <button
            onClick={closeImageModal}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[70]"
            aria-label="Close image"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
            <img
              src={selectedImage}
              alt="Full size review"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}

      {/* Header */}
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
          <div className="text-xl md:text-2xl font-bold">
           4.9
          </div>
          <div className="text-xs md:text-sm opacity-90">Average Rating</div>
          <div className="flex justify-center mt-1 text-sm md:text-base">
            {renderStars(Math.round(reviews.length > 0
              ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
              : 0))}
          </div>
        </div>
        <div className="bg-gradient-to-r from-[#D8C287] to-[#c4a567] p-3 md:p-4 rounded-lg text-[#0C3B34] text-center">
          <div className="text-xl md:text-2xl font-bold">3000+</div>
          <div className="text-xs md:text-sm font-semibold">Happy Clients</div>
        </div>
        <div className="bg-gradient-to-r from-green-500 to-green-600 p-3 md:p-4 rounded-lg text-white text-center">
          <div className="text-xl md:text-2xl font-bold">95%</div>
          <div className="text-xs md:text-sm opacity-90">Success Rate</div>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 items-start mb-20">
        {reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
          >
            {/* Header */}
            <div className="flex justify-between items-start mb-3 md:mb-4">
              <div className="flex items-center space-x-2 md:space-x-3">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                  {review.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <h3 className="font-bold text-base md:text-lg text-[#0C3B34]">
                    {review.name}
                  </h3>
                  <div className="flex items-center space-x-1 md:space-x-2">
                    <span className="text-base md:text-lg">
                      <div className="text-xs text-gray-500">{review.date}</div>
                    </span>
                  </div>
                </div>
              </div>
              <div className="text-right">
                <div className="flex mb-1 text-sm md:text-base">
                  {renderStars(review.rating)}
                </div>
                <div className="text-xs text-gray-500">{review.rating}</div>
              </div>
            </div>

            {/* Review Text */}
            <div className="relative">
              <div className="text-3xl md:text-4xl text-[#D8C287] absolute -top-2 -left-1 opacity-50">
                "
              </div>
              <p className="text-sm md:text-base text-gray-700 italic pl-4 md:pl-6 leading-relaxed">
                {review.text}
              </p>
              <div className="text-3xl md:text-4xl text-[#D8C287] absolute -bottom-6 right-2 opacity-50">
                "
              </div>
            </div>

            {/* Bottom Border - Like Button and Images */}
            <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#D8C287] flex items-center gap-2">
              <button
                onClick={() => toggleLike(review.id)}
                className="p-1 rounded-full hover:scale-110 transition-transform"
              >
                <AiFillHeart className="text-red-500" size={22} />
              </button>
              <p className="text-sm md:text-base text-[#2c2c2c]">{review.totalLikes}</p>
              {review.images?.length > 0 && (
                <button
                  onClick={() => toggleImages(review.id)}
                  className="ml-auto text-sm md:text-base text-[#0C3B34] hover:text-[#1a5a4f] font-semibold flex items-center gap-1"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  {expandedImages[review.id] ? "Hide Images" : `View Images (${review.images.length})`}
                </button>
              )}
            </div>

            {/* Images Section */}
            {expandedImages[review.id] && review.images?.length > 0 && (
              <div className="mt-4 grid grid-cols-2 gap-2">
                {review.images.map((img, index) => (
                  <div
                    key={index}
                    className="relative group cursor-pointer overflow-hidden rounded-lg"
                    onClick={() => openImageModal(img)}
                  >
                    <img
                      src={img}
                      alt={`Review image ${index + 1}`}
                      className="h-32 w-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
                      onError={(e) => {
                        console.error(`Failed to load image: ${img}`);
                        e.target.style.display = "none";
                      }}
                    />
                    <div className="absolute inset-0 bg-black\20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>

      {/* External Review Platforms
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
      </div> */}
    </div>
  );
}

export default Reviews;