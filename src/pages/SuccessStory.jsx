// SuccessStory.jsx
import React, { useState } from "react";
import Reviews from "./Reviews";
import receptiveThumbnial from "../assets/images/recpetive-thumbnial.png"

// Grab images from multiple folders (recursive glob)
const images = import.meta.glob(
  [
    "/src/assets/visaCopy/canada/*.{png,jpg,jpeg,svg}",
    "/src/assets/visaCopy/unitedKingdom/*.{png,jpg,jpeg,svg}",
    "/src/assets/testimoniels/**/*.{png,jpg,jpeg,svg}",
  ],
  { eager: true }
);

// Grab videos from testimonialsVideos folder
const videos = import.meta.glob(
  "/src/assets/testimonielsVideos/*.{mp4,webm,mov,avi}",
  { eager: true }
);

// Mock reviews data (replace with your actual reviews)
const reviews = [
  {
    id: 1,
    name: "Rajesh Kumar",
    country: "Canada",
    rating: 5,
    text: "The visa process was smooth and hassle-free. The team guided me at every step and made sure all documents were perfect.",
  },
  {
    id: 2,
    name: "Priya Sharma",
    country: "United Kingdom",
    rating: 4,
    text: "Great service! I got my UK student visa within the expected timeframe. Would recommend to others.",
  },
  {
    id: 3,
    name: "Amit Patel",
    country: "Canada",
    rating: 5,
    text: "Excellent consultation services. They helped me navigate the complex PR process with ease.",
  },
  {
    id: 4,
    name: "Sneha Gupta",
    country: "Australia",
    rating: 4,
    text: "Professional and knowledgeable staff. Made my visa application process much simpler than I expected.",
  },
];

function SuccessStory() {
  const [activeTab, setActiveTab] = useState("clients");
  const [selectedImage, setSelectedImage] = useState(null);

  // Convert into array with folder info
  const imageList = Object.entries(images).map(([path, mod]) => ({
    src: mod.default,
    folder: path.includes("canada")
      ? "Canada"
      : path.includes("unitedKingdom")
      ? "United Kingdom"
      : path.includes("testimoniels")
      ? "Testimonials"
      : "Other",
  }));

  // Convert videos into array
  const videoList = Object.entries(videos).map(([path, mod]) => ({
    src: mod.default,
    name: path.split("/").pop().split(".")[0], // Extract filename without extension
  }));

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

  return (
    <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header with tabs */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-[#0C3B34] mb-8">
            Success Stories
          </h1>

          <div className="flex justify-center space-x-8 border-b border-gray-200">
            <button
              onClick={() => setActiveTab("clients")}
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeTab === "clients"
                  ? "border-b-4 border-[#0C3B34] text-[#0C3B34]"
                  : "text-gray-500 hover:text-[#0C3B34] hover:border-b-4 hover:border-[#D8C287]"
              }`}
            >
              Our Clients
            </button>
            <button
              onClick={() => setActiveTab("visa")}
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeTab === "visa"
                  ? "border-b-4 border-[#0C3B34] text-[#0C3B34]"
                  : "text-gray-500 hover:text-[#0C3B34] hover:border-b-4 hover:border-[#D8C287]"
              }`}
            >
              Visa Stories
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`py-4 px-6 font-medium text-lg transition-colors ${
                activeTab === "reviews"
                  ? "border-b-4 border-[#0C3B34] text-[#0C3B34]"
                  : "text-gray-500 hover:text-[#0C3B34] hover:border-b-4 hover:border-[#D8C287]"
              }`}
            >
              Reviews
            </button>
          </div>
        </div>

        {/* Content based on active tab */}
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {activeTab === "clients" && (
            <div className="space-y-16">
              {["Testimonials", "Canada", "United Kingdom"].map((section) => (
                <div key={section}>
                  <h2 className="text-3xl font-semibold mb-8 text-[#0C3B34] border-b border-[#D8C287] pb-4">
                    {section}
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {imageList
                      .filter((img) => img.folder === section)
                      .map((img, i) => (
                        <div
                          key={i}
                          className="overflow-hidden rounded-md shadow hover:shadow-lg transition-shadow cursor-pointer group"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img
                            src={img.src}
                            alt={`${section} ${i + 1}`}
                            className="w-full h-72 object-cover transition-transform group-hover:scale-110 duration-300"
                          />
                        </div>
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === "visa" && (
            <div>
              <style>{`
                video::-webkit-media-controls-panel {
                  display: flex !important;
                  opacity: 1 !important;
                }
              `}</style>
              <h2 className="text-3xl font-semibold mb-8 text-[#0C3B34] border-b border-[#D8C287] pb-4">
                Visa Success Stories
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videoList.map((video, i) => (
                  <div
                    key={i}
                    className="bg-gray-50 rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow h-[450px] flex flex-col"
                  >
                    <div className="flex-grow">
                      <video
                        className="w-full h-[350px] object-fit"
                        controls
                       poster={receptiveThumbnial}
                      >
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="p-2 bg-white">
                      <h3 className="font-semibold text-[#0C3B34] text-lg">
                        #Our Stories
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <Reviews></Reviews>

          
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 pt-20"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className={`relative max-w-${
              selectedImage.folder === "Testimonials" ? "md" : "xl"
            } max-h-full overflow-auto`}
          >
            <img
              src={selectedImage.src}
              alt="Enlarged view"
              className="w-full h-auto rounded-md shadow-2xl"
            />
            <button
              className="absolute top-2 right-2 bg-white text-[#0C3B34] rounded-full p-1 hover:bg-[#D8C287] transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
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
        </div>
      )}
    </div>
  );
}

export default SuccessStory;
