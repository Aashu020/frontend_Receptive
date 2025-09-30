import React, { useState } from "react";
import axios from "axios";
import { FiPlus } from "react-icons/fi";

function ReviewScreen({ onClose }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(false);
  const [images, setImages] = useState([]); // Store selected images
  const BaseUrl = import.meta.env.VITE_BASE_URL;

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
      const response = await axios.post(`${BaseUrl}/api/reviews/`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
      });

      window.location.reload();
      onClose();
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Failed to submit review";
      console.error("Error submitting review:", error.response?.data || error.message);
      alert(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-[#0C3B34] mb-4">Write a Review</h2>
      <form onSubmit={handleSubmit}>
        {/* Rating */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Rating</label>
          <div className="flex space-x-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type="button"
                className={`text-2xl ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
                onClick={() => setRating(star)}
              >
                ★
              </button>
            ))}
          </div>
        </div>

        {/* Comment */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Comment</label>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0C3B34]"
            rows="4"
            required
          />
        </div>

        {/* Images */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2">Images (Optional, up to 4)</label>
          {images.map((img, index) => (
            <div key={index} className="flex items-center mb-2">
              <input
                type="file"
                name="images"
                accept="image/*"
                onChange={(e) => handleImageChange(e, index)}
                className="w-full border border-gray-300 rounded-md px-2 py-1"
              />
              {img && (
                <div className="ml-2">
                  <img
                    src={URL.createObjectURL(img)}
                    alt={`Preview ${index + 1}`}
                    className="h-20 w-20 object-cover rounded"
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="text-red-500 text-sm mt-1"
                  >
                    Remove
                  </button>
                </div>
              )}
            </div>
          ))}
          {images.length < 4 && (
            <button
              type="button"
              onClick={handleAddImageInput}
              className="flex items-center text-[#0C3B34] hover:text-[#1a5a4f] mt-2"
            >
              <FiPlus className="mr-1" /> Add Image
            </button>
          )}
        </div>

        {/* Actions */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800"
            disabled={loading}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#0C3B34] text-white rounded-md hover:bg-[#1a5a4f]"
            disabled={loading || rating === 0}
          >
            {loading ? "Submitting..." : "Submit Review"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default ReviewScreen;