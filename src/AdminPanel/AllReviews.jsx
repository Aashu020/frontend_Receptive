import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminLayout from "../components/adminComponents/AdminLayout";
import BaseUrl from "../../url";
const AllReviews = () => {
  const [reviews, setReviews] = useState([]);
  // const BaseUrl = import.meta.env.VITE_BASE_URL;
  // Fetch reviews on mount
  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // const token = localStorage.getItem("token"); // admin token
        const res = await axios.get(`${BaseUrl}/api/reviews`, {
          // headers: { Authorization: `Bearer ${token}` },
        });
        // console.log(res.data.reviews,"kdjdj");

        // Only keep not-approved reviews
        const unapproved = (res.data.reviews || []).filter(
          (r) => r.isapproved === false
        );
        setReviews(unapproved);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      }
    };

    fetchReviews();
  }, []);

  const approveReview = async (reviewId) => {
  // Ask for confirmation
  const confirm = window.confirm("Do you want to approve this review?");
  if (!confirm) return; // Exit if user clicks "Cancel"

  try {
    const token = localStorage.getItem("token");
    const res = await axios.put(
      `${BaseUrl}/api/reviews/${reviewId}/approve`,
      {},
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );

    if (res.data.success) {
      // Remove the approved review from the frontend list
      alert("Review approved successfully!");
      setReviews((prev) => prev.filter((r) => r._id !== reviewId));
    }
  } catch (err) {
    console.error("Error approving review:", err);
  }
};

const deleteReview = async (reviewId) => {
  // Ask for confirmation
  const confirm = window.confirm("Are you sure you want to delete this review?");
  if (!confirm) return; // Exit if user clicks "Cancel"
  try {
    const token = localStorage.getItem("token");
    const res = await axios.delete(
      `${BaseUrl}/api/reviews/${reviewId}`,
      {
        headers: { Authorization: `Bearer ${token}` },
      }
    );  
    if (res.data.message) {
      alert("Review deleted successfully!");
      setReviews((prev) => prev.filter((r) => r._id !== reviewId));
    }
  } catch (err) {
    console.error("Error deleting review:", err);
  }
};

  return (
    <AdminLayout>
      <h2 className="text-3xl font-bold mb-4">Pending Reviews</h2>

      {reviews.length === 0 ? (
        <p className="text-gray-600">No pending reviews 🎉</p>
      ) : (
        <div className="space-y-4">
          {reviews.map((review) => (
            <div
              key={review._id}
              className="bg-white border rounded-lg p-4 shadow-sm flex justify-between items-start"
            >
              {/* Review Info */}
              <div>
                <h3 className="font-semibold text-lg text-[#0C3B34]">
                  {review.author.name || review.displayName || "Anonymous User"}
                </h3>
                <p className="text-yellow-500">
                  {"★".repeat(review.ratings)}{" "}
                  <span className="text-gray-500">({review.ratings})</span>
                </p>
                <p className="text-gray-700 mt-2">{review.content}</p>
              </div>

              <div className="space-y-2 text-right">
                {/* Approve Button */}
                <div className="flex space-x-2 justify-end">
                  <button
                  onClick={() => approveReview(review._id)}
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md shadow-md transition"
                >
                  Approve
                </button>
                  <button
                  onClick={() => deleteReview(review._id)}
                  className="bg-red-500 hover:bg-green-600 text-white px-4 py-2 rounded-md shadow-md transition"
                >
                  Delete
                </button>

                </div>
                <p className="text-gray-500 text-sm"> Created: 
                  {new Date(review.createdAt).toLocaleString()}
                </p>
                <p className="text-gray-500 text-sm">
                  Updated: {new Date(review.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  );
};

export default AllReviews;
