import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import ReviewScreen from "../components/reviewComponnnents/ReviewScreen";
import axios from "axios";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import BaseUrl from "../../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

function Reviews() {
  const { user } = useSelector((state) => state.auth);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [showLoginPrompt, setShowLoginPrompt] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [expandedImages, setExpandedImages] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [editReview, setEditReview] = useState(null);
  const userId = user?._id || localStorage.getItem("user");
  const userToken = localStorage.getItem("token");
  const [newImagePreviews, setNewImagePreviews] = useState([]);
  const [newImageFiles, setNewImageFiles] = useState([]);
  const [existingImages, setExistingImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Helper function to format image URLs
  const formatImageUrl = (img) => {
    if (!img) return null;
    if (img.startsWith("http://") || img.startsWith("https://")) return img;
    const cleanBaseUrl = BaseUrl.replace(/\/$/, "");
    const cleanImgPath = img.replace(/^\/+/, "").replace(/^uploads\//, "");
    const imageUrl = `${cleanBaseUrl}/uploads/${cleanImgPath}`;
    console.log("Generated image URL:", imageUrl);
    return imageUrl;
  };

  // Fetch reviews
  const fetchReviews = async () => {
    // console.log("Starting fetchReviews...");
    setIsLoading(true);
    try {
      const token = localStorage.getItem("token");
      const storedUserId = localStorage.getItem("user");
      // console.log("Token:", token, "UserID:", storedUserId);

      const res = await axios.get(`${BaseUrl}/api/reviews`, {
        headers: token ? { Authorization: `Bearer ${token}` } : {},
      });
      // console.log("Backend response:", JSON.stringify(res.data, null, 2));

      const allReviews = res.data.reviews || [];
      // console.log("Raw reviews data:", allReviews);

      const filtered = allReviews.filter((r) => {
        if (r.isapproved) return true;
        if (storedUserId) {
          const authorId =
            typeof r.author === "string" ? r.author : r.author?._id;
          return authorId === storedUserId;
        }
        return false;
      });
      // console.log("Filtered reviews:", filtered);

      const formatted = filtered.map((r) => {
        const likes = r.likes || [];
        const authorName =
          typeof r.author === "string"
            ? "Unknown"
            : r.author?.name || "Unknown";
        const authorId =
          typeof r.author === "string" ? r.author : r.author?._id;

        const images = (r.images || [])
          .filter(
            (img) =>
              img &&
              typeof img === "string" &&
              (img.endsWith(".jpg") ||
                img.endsWith(".jpeg") ||
                img.endsWith(".png"))
          )
          .map(formatImageUrl)
          .filter(Boolean);

        return {
          id: r._id,
          name: r.displayName || authorName,
          text: r.content,
          rating: Number(r.ratings) || 0,
          date: new Date(r.createdAt).toLocaleDateString(),
          likes: likes,
          totalLikes: likes.length,
          isLiked: storedUserId
            ? likes.some((id) => id.toString() === storedUserId)
            : false,
          author: authorId,
          images,
        };
      });

      setReviews(formatted);

      // Initialize expandedImages with all reviews having images set to true (visible by default)
      const initialExpandedState = {};
      formatted.forEach((review) => {
        if (review.images && review.images.length > 0) {
          initialExpandedState[review.id] = true;
        }
      });
      setExpandedImages(initialExpandedState);

      // console.log("Formatted reviews set:", formatted);
    } catch (err) {
      console.error("Error fetching reviews:", err);
      toast.error("Failed to fetch reviews", {
        position: "bottom-left",
        autoClose: 4000,
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchReviews();
  }, []);

  // Handle delete review
  const handleDelete = async (reviewId) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;

    try {
      const url = `${BaseUrl}/api/reviews/${reviewId}/delete`;
      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("No token found. Please log in.");
      }

      const res = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) {
        const errData = await res.json();
        console.error("Delete failed:", errData);
        throw new Error(errData.message || "Failed to delete review");
      }

      setReviews((prev) => prev.filter((r) => r.id !== reviewId));
      toast.success("Review deleted!", {
        position: "bottom-left",
        autoClose: 4000,
      });
    } catch (err) {
      console.error("Delete error:", err.message);
      toast.error(err.message, {
        position: "bottom-left",
        autoClose: 4000,
      });
    }
  };

  // Initialize existing images when opening edit form
  const openEditForm = (review) => {
    setEditReview(review);
    setExistingImages(review.images || []);
    setNewImagePreviews([]);
    setNewImageFiles([]);
  };

  // Handle new image preview
  const handleNewImagePreview = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + newImageFiles.length + existingImages.length > 5) {
      toast.error("You can upload a maximum of 5 images in total", {
        position: "bottom-left",
        autoClose: 4000,
      });
      return;
    }

    const previews = files.map((file) => URL.createObjectURL(file));
    setNewImagePreviews([...newImagePreviews, ...previews]);
    setNewImageFiles([...newImageFiles, ...files]);
  };

  // Remove existing image
  const handleRemoveExistingImage = (index) => {
    const updatedImages = existingImages.filter((_, i) => i !== index);
    setExistingImages(updatedImages);
  };

  // Remove new image
  const handleRemoveNewImage = (index) => {
    const updatedPreviews = newImagePreviews.filter((_, i) => i !== index);
    const updatedFiles = newImageFiles.filter((_, i) => i !== index);
    setNewImagePreviews(updatedPreviews);
    setNewImageFiles(updatedFiles);
  };

  // Handle edit with images
  const handleEditWithImages = async (reviewId, formData) => {
    try {
      if (!reviewId) {
        throw new Error("Review ID is missing");
      }

      const trimmedReviewId = String(reviewId).trim();
      const url = `${BaseUrl}/api/reviews/${trimmedReviewId}`;

      const response = await fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${userToken}`,
        },
        body: formData,
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.error("Edit failed:", errorData);
        throw new Error(errorData.message || "Failed to update review");
      }

      const data = await response.json();
      await fetchReviews();
      closeEditForm();
      return data.review;
    } catch (error) {
      console.error("Error updating review:", error);
      toast.error(`Failed to update review: ${error.message}`, {
        position: "bottom-left",
        autoClose: 4000,
      });
    }
  };

  // Handle edit form submission
  const handleEditSubmit = async (e, reviewId) => {
    e.preventDefault();

    const rating = e.target.rating.value;
    const comment = e.target.comment.value.trim();

    if (!rating || !comment) {
      toast.error("Please provide both a rating and a comment", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });
      return;
    }

    // Show loading toast
    const loadingToast = toast.loading("Updating your review...", {
      position: "bottom-left",
    });

    try {
      const formData = new FormData();
      formData.append("rating", rating);
      formData.append("comment", comment);

      // Normalize existing image paths for backend
      const imagesToSend = existingImages.map((img) => {
        let path = img.startsWith(BaseUrl) ? img.replace(BaseUrl, "") : img;
        path = path.startsWith("/Uploads/") ? path : `/Uploads/${path}`;
        return path;
      });

      formData.append("existingImages", JSON.stringify(imagesToSend));

      console.log(
        "New image files:",
        newImageFiles.map((f) => f.name)
      );
      newImageFiles.forEach((file) => {
        formData.append("images", file);
      });

      await handleEditWithImages(reviewId, formData);

      // Dismiss loading toast and show success
      toast.dismiss(loadingToast);
      toast.success("Review has been successfully updated!", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Delay closing so toast shows
      setTimeout(() => {
        closeEditForm();
      }, 2000);
    } catch (error) {
      toast.dismiss(loadingToast);
      console.error("Error updating review:", error);
      toast.error(
        `Failed to update review: ${error.response?.data?.message ||
        error.message ||
        "Please try again later."
        }`,
        {
          position: "bottom-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          theme: "colored",
        }
      );
    }
  };

  // Close edit form
  const closeEditForm = () => {
    setEditReview(null);
    setNewImagePreviews([]);
    setNewImageFiles([]);
    setExistingImages([]);
    newImagePreviews.forEach((url) => URL.revokeObjectURL(url));
  };

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

  // Render stars for ratings
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={i < rating ? "text-yellow-400" : "text-gray-300"}
      >
        ★
      </span>
    ));
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
    fetchReviews();
  };

  // Handle closing the login prompt
  const handleCloseLoginPrompt = () => {
    setShowLoginPrompt(false);
  };

  return (
    <>
      <Helmet>
        {/* ✅ SEO Essentials */}
        <title>Client Reviews & Testimonials | Receptive Solutions</title>
        <meta
          name="description"
          content="Read authentic client experiences and verified reviews of Receptive Solutions. Rated 4.4/5 by clients for visa success, reliability, and professional service."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/reviews" />

        {/* ✅ Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": "https://www.receptivesolutions.co.in/"
              },
              {
                "@type": "ListItem",
                "position": 2,
                "name": "Client Reviews",
                "item": "https://www.receptivesolutions.co.in/reviews"
              }
            ]
          })}
        </script>

        {/* ✅ WebPage + Review Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "ReviewCollectionPage"],
            "name": "Client Reviews & Testimonials - Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/reviews",
            "description":
              "Explore genuine client reviews and visa success experiences from Receptive Solutions' immigration consultancy clients.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo":
                "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.4",
                "ratingCount": "19"
              },
              "review": [
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Sam Daniel" },
                  "datePublished": "2025-10-03",
                  "reviewBody":
                    "Impeccable support from a dedicated team led to a swift visa approval. They handled every detail with care, and their communication was top-notch. Thank you for the amazing service!",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  },
                  "image": "https://res.cloudinary.com/dwu1b3y1v/image/upload/v1761124385/reviews/aay9nef9s5u8ttoptren.jpg"
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Isha Chawla" },
                  "datePublished": "2025-10-03",
                  "reviewBody":
                    "Great service with clear explanations at every step. The staff’s dedication ensured a successful application, making immigration feel achievable.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Maya Kapoor" },
                  "datePublished": "2025-10-03",
                  "reviewBody":
                    "The staff’s attention to detail was impressive during my visa process. They provided expert guidance, ensuring a smooth experience from start to finish.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Rahul Gupta" },
                  "datePublished": "2025-10-03",
                  "reviewBody":
                    "The process was smooth thanks to their attentive and reliable service. They addressed all my concerns promptly, ensuring a successful outcome.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "4",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                },
                {
                  "@type": "Review",
                  "author": { "@type": "Person", "name": "Sophia Ansari" },
                  "datePublished": "2025-10-03",
                  "reviewBody":
                    "Fast, reliable, and very transparent throughout the process. Highly recommend Receptive Solutions for immigration help.",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5",
                    "bestRating": "5",
                    "worstRating": "1"
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>

``


      <div className="mt-20 md:mt-45 px-4 lg:px-8 max-w-7xl mx-auto md:mb-4">
        {/* Add Review Button */}
        <div className="flex justify-end mb-6">
          <button
            onClick={handleAddReviewClick}
            className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] hover:from-[#1a5a4f] hover:to-[#0C3B34] text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg flex items-center mt-2 md:mt-0"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
              />
            </svg>
            Post Review
          </button>
        </div>

        {/* Review Form Modal */}
        {showReviewForm && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-[9999] p-4 overflow-y-auto pt-20 sm:pt-24">
            <div className="bg-white rounded-xl w-full max-w-2xl lg:max-w-3xl shadow-2xl relative my-8">
              <button
                onClick={handleCloseReviewForm}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <ReviewScreen onClose={handleCloseReviewForm} />
            </div>
          </div>
        )}

        {/* Edit Review Form Modal */}
        {editReview && (
          <div className="fixed inset-0 backdrop-blur-sm bg-black/40 flex items-center justify-center z-[9999] p-4 overflow-y-auto pt-20 sm:pt-24">
            <div className="bg-white rounded-xl w-full max-w-2xl lg:max-w-3xl shadow-2xl relative my-8">
              <button
                onClick={closeEditForm}
                className="absolute top-4 right-4 z-10 text-gray-400 hover:text-gray-600 bg-white rounded-full p-1.5 shadow-md hover:shadow-lg transition-all"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              <div className="p-5 sm:p-6 md:p-8 bg-white rounded-xl relative w-full max-h-[85vh] overflow-y-auto">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#0C3B34] mb-6">
                  Edit Review
                </h3>

                <form
                  onSubmit={(e) => handleEditSubmit(e, editReview.id)}
                  className="space-y-6"
                >
                  {/* Rating */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Rating <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="rating"
                      defaultValue={editReview.rating}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C3B34] focus:border-transparent transition-all bg-white"
                    >
                      {[1, 2, 3, 4, 5].map((num) => (
                        <option key={num} value={num}>
                          {num} Star{num > 1 ? "s" : ""}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Comment */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Comment <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      name="comment"
                      defaultValue={editReview.text}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C3B34] focus:border-transparent transition-all resize-none"
                      rows="5"
                      placeholder="Share your experience..."
                    />
                  </div>

                  {/* Existing Images */}
                  {existingImages && existingImages.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        Current Images
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {existingImages.map((image, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={image}
                              alt={`Review ${index + 1}`}
                              className="w-full h-28 sm:h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                              onError={(e) => {
                                console.error(`Failed to load existing image: ${image}`);
                                e.target.src = "/images/placeholder.jpg";
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveExistingImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600 shadow-lg"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* New Images Upload */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Add New Images
                    </label>
                    <div className="flex items-center justify-center w-full">
                      <label className="flex flex-col items-center justify-center w-full h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all">
                        <div className="flex flex-col items-center justify-center pt-5 pb-6">
                          <svg
                            className="w-10 h-10 mb-3 text-gray-400"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 20 16"
                          >
                            <path
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="2"
                              d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                            />
                          </svg>
                          <p className="mb-2 text-sm text-gray-600">
                            <span className="font-semibold">Click to upload</span>{" "}
                            or drag and drop
                          </p>
                          <p className="text-xs text-gray-500">
                            PNG, JPG or JPEG (MAX. 5 images)
                          </p>
                        </div>
                        <input
                          type="file"
                          name="images"
                          multiple
                          accept="image/*"
                          onChange={handleNewImagePreview}
                          className="hidden"
                        />
                      </label>
                    </div>
                  </div>

                  {/* Preview New Images */}
                  {newImagePreviews && newImagePreviews.length > 0 && (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        New Images Preview
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                        {newImagePreviews.map((preview, index) => (
                          <div key={index} className="relative group">
                            <img
                              src={preview}
                              alt={`New ${index + 1}`}
                              className="w-full h-28 sm:h-32 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                              onError={(e) => {
                                console.error(`Failed to load new image preview: ${preview}`);
                                e.target.src = "/images/placeholder.jpg";
                              }}
                            />
                            <button
                              type="button"
                              onClick={() => handleRemoveNewImage(index)}
                              className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600 shadow-lg"
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-4 w-4"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M6 18L18 6M6 6l12 12"
                                />
                              </svg>
                            </button>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-4 border-t border-gray-200">
                    <button
                      type="button"
                      onClick={closeEditForm}
                      className="w-full sm:w-auto px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="w-full sm:w-auto px-6 py-2.5 bg-[#0C3B34] text-white rounded-lg hover:bg-[#1a5a4f] font-medium transition-colors"
                    >
                      Save
                    </button>
                  </div>
                </form>
              </div>
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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <div className="text-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-16 w-16 mx-auto text-[#0C3B34]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
                <h3 className="text-xl font-bold text-[#0C3B34] mt-4">
                  Login Required
                </h3>
                <p className="text-gray-600 mt-2">
                  Please log in to post or edit reviews.
                </p>
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
            className="fixed inset-0 bg-black/90 flex items-center justify-center z-1000 p-4"
            onClick={closeImageModal}
          >
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors z-[70]"
              aria-label="Close image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center">
              <img
                src={selectedImage}
                alt="Full size review"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                onClick={(e) => e.stopPropagation()}
                onError={(e) => {
                  console.error(`Failed to load modal image: ${selectedImage}`);
                  e.target.src = "/images/placeholder.jpg";
                }}
              />
            </div>
          </div>
        )}

        {/* Loader */}
        {isLoading ? (
          <div className="flex flex-col items-center justify-center py-20">
            <div className="relative">
              <div className="w-20 h-20 border-[#D8C287] border-4 rounded-full"></div>
              <div className="w-20 h-20 border-[#0C3B34] border-t-4 animate-spin rounded-full absolute left-0 top-0"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 font-medium">Loading reviews...</p>
          </div>
        ) : (
          <>
            {/* Header */}
            <div className="text-center mb-8 md:mb-12">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#0C3B34] mb-3 md:mb-4">
                What Our Clients Say
              </h1>
              <p className="text-base md:text-lg text-gray-700 text-justify max-w-3xl mx-auto px-2 sm:px-0">
                For over a decade, we've helped thousands of clients achieve their
                immigration dreams. Here's what some of them have to say about their
                experience with our services.
              </p>
            </div>

            <h2 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-[#0C3B34] border-b-2 border-[#D8C287] pb-2">
              Client Reviews
            </h2>

            {/* Statistics */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 mb-6 md:mb-8">
              <div className="bg-gradient-to-r from-[#0C3B34] to-[#1a5a4f] p-3 md:p-4 rounded-lg text-white text-center">
                <div className="text-xl md:text-2xl font-bold">4.9</div>
                <div className="text-xs md:text-sm opacity-90">Average Rating</div>
                <div className="flex justify-center mt-1 text-sm md:text-base">
                  {renderStars(
                    Math.round(
                      reviews.length > 0
                        ? reviews.reduce((sum, review) => sum + review.rating, 0) /
                        reviews.length
                        : 0
                    )
                  )}
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
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
              {reviews.map((review) => (
                <div
                  key={review.id}
                  className="mb-6 break-inside-avoid bg-white p-4 md:p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  {/* Header */}
                  <div className="flex justify-between items-start mb-3 md:mb-4">
                    <div className="flex items-center space-x-2 md:space-x-3">
                      <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-[#0C3B34] to-[#D8C287] rounded-full flex items-center justify-center text-white font-bold text-base md:text-lg">
                        {review.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
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
                      <div className="flex mb-1 text-lg md:text-xl">
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

                  {/* Images Section - Now Visible by Default */}
                  {review.images?.length > 0 && (
                    <div className="mt-4">
                      {expandedImages[review.id] && (
                        <div className="grid grid-cols-2 gap-2 mb-3">
                          {review.images.map((img, index) => {
                            if (!img) return null;

                            return (
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
                                    e.target.src = "/images/placeholder.jpg";
                                  }}
                                />
                                <div className="absolute inset-0 bg-black/20 bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-8 w-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                    />
                                  </svg>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Bottom Border - Delete/Edit Buttons and Hide/Show Images Toggle */}
                  <div className="mt-3 md:mt-4 pt-3 md:pt-4 border-t border-[#D8C287] flex items-center gap-2">
                    {(user?.isAdmin ||
                      (userId && review.author?.toString() === userId?.toString())) && (
                        <>
                          <button
                            onClick={() => handleDelete(review.id)}
                            className="p-1 rounded-full hover:scale-110 transition-transform"
                            title="Delete Review"
                          >
                            <AiOutlineDelete className="text-red-500" size={22} />
                          </button>
                          <button
                            onClick={() => openEditForm(review)}
                            className="p-1 rounded-full hover:scale-110 transition-transform"
                            title="Edit Review"
                          >
                            <AiOutlineEdit className="text-orange-500" size={22} />
                          </button>
                        </>
                      )}
                    {review.images?.length > 0 && (
                      <button
                        onClick={() => toggleImages(review.id)}
                        className="ml-auto text-sm md:text-base text-[#0C3B34] hover:text-[#1a5a4f] font-semibold flex items-center gap-1"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          />
                        </svg>
                        {expandedImages[review.id]
                          ? "Hide Images"
                          : `Show Images (${review.images.length})`}
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {/* Toast notifications */}
        <ToastContainer
          position="bottom-left"
          autoClose={4000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          style={{ zIndex: 10000 }}
        />
      </div>
    </>
  );
}

export default Reviews;