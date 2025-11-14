import React, { useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";
import BaseUrl from "../../../url";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ReviewScreen({ onClose }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // Store selected images

  // Add a new image input
  const handleAddImageInput = () => {
    if (images.length < 4) {
      setImages([...images, null]);
    }
  };

  // Update image file in the array
  const handleImageChange = (e, index) => {
    const file = e.target.files[0];
    if (file) {
      const newImages = [...images];
      newImages[index] = file;
      setImages(newImages);
    }
  };

  // Remove an image
  const handleRemoveImage = (index) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("content", comment);
      formData.append("ratings", rating.toString());

      images.forEach((img) => {
        if (img) formData.append("images", img);
      });

      const token = localStorage.getItem("token");
      await axios.post(`${BaseUrl}/api/reviews/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      toast.success("Review has been successfully posted.", {
        position: "bottom-left",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "colored",
      });

      // Delay reload so toast shows
      setTimeout(() => {
        window.location.reload();
        onClose();
      }, 2000);
    } catch (error) {
      console.error(
        "Error submitting review:",
        error.response?.data || error.message
      );

      toast.error(
        `Failed to post review: ${
          error.response?.data?.message ||
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
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-5 sm:p-6 md:p-8  rounded-xl shadow-lg relative w-full max-h-[85vh] overflow-y-auto">
      <h2 className="text-2xl sm:text-3xl 2xl:text-4xl font-bold text-[#0C3B34] mb-6">
        Write a Review
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 2xl:text-2xl">
            Rating <span className="text-red-500">*</span>
          </label>
          <div className="flex space-x-2 sm:space-x-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-3xl sm:text-4xl 2xl:text-6xl transition-all duration-200 transform hover:scale-110 ${
                  star <= rating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
          {rating > 0 && (
            <p className="mt-2 text-sm text-gray-600 2xl:text-xl">
              You rated: {rating} star{rating > 1 ? "s" : ""}
            </p>
          )}
        </div>

        {/* Comment */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-3 2xl:text-2xl">
            Comment <span className="text-red-500">*</span>
          </label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 2xl:text-2xl rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0C3B34] focus:border-transparent transition-all resize-none"
            rows="5"
            placeholder="Share your experience..."
            required
          />
          <p className="mt-2 text-xs 2xl:text-2xl text-gray-500">
            {comment.length} characters
          </p>
        </div>

        {/* Images */}
        <div>
          <label className="block text-sm font-medium 2xl:text-2xl text-gray-700 mb-3">
            Images (Optional, up to 4)
          </label>
          <div className="space-y-4">
            {images.map((img, index) => (
              <div
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-3 p-3 border border-gray-200 rounded-lg bg-gray-50"
              >
                <input
                  type="file"
                  name="images"
                  accept="image/*"
                  onChange={(e) => handleImageChange(e, index)}
                  className="w-full sm:flex-1 text-sm 2xl:text-2xl file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-medium file:bg-[#0C3B34] file:text-white hover:file:bg-[#1a5a4f] file:cursor-pointer cursor-pointer"
                />
                {img && (
                  <div className="flex items-center gap-3">
                    <img
                      src={URL.createObjectURL(img)}
                      alt={`Preview ${index + 1}`}
                      className="h-20 w-20 sm:h-24 sm:w-24 2xl:w-30 2xl:h-30 object-cover rounded-lg border-2 border-gray-200 shadow-sm"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveImage(index)}
                      className="px-3 py-2 bg-red-50 2xl:text-2xl text-red-600 rounded-lg text-sm font-medium hover:bg-red-100 transition-colors"
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {images.length < 4 && (
            <button
              type="button"
              onClick={handleAddImageInput}
              className="flex items-center  2xl:text-2xl gap-2 mt-4 px-4 py-2 text-[#0C3B34] border-2 border-dashed border-[#0C3B34] rounded-lg hover:bg-[#0C3B34] hover:text-white transition-all duration-200 font-medium"
            >
              <FiPlus className="text-lg" /> Add Image
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex flex-col-reverse sm:flex-row justify-end gap-3 sm:gap-4 pt-4 border-t border-gray-200">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto 2xl:text-2xl px-6 py-2.5 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200 font-medium transition-colors"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full 2xl:text-2xl sm:w-auto px-6 py-2.5 bg-[#0C3B34] text-white rounded-lg hover:bg-[#1a5a4f] font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={loading || rating === 0}
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <svg
                  className="animate-spin h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Submitting...
              </span>
            ) : (
              "Submit Review"
            )}
          </button>
        </div>
      </form>

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
  );
}

export default ReviewScreen;