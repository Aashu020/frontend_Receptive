// SuccessStory.jsx
import React, { useState } from "react";
import Reviews from "./Reviews";
import { Helmet } from "react-helmet-async";

// Grab images from multiple folders
const images = import.meta.glob(
  [
    "/src/assets/visaCopy/canada/*.{png,jpg,jpeg,svg}",
    "/src/assets/visaCopy/unitedKingdom/*.{png,jpg,jpeg,svg}",
    "/src/assets/visaCopy/europe/*.{png,jpg,jpeg,svg}",
    "/src/assets/testimoniels/**/*.{png,jpg,jpeg,svg}",
  ],
  { eager: true }
);

// Grab videos
const videos = import.meta.glob(
  "/src/assets/testimonielsVideos/*.{mp4,webm,mov,avi}",
  { eager: true }
);

function SuccessStory() {
  const [activeTab, setActiveTab] = useState("clients");
  const [selectedImage, setSelectedImage] = useState(null);

  const imageList = Object.entries(images).map(([path, mod]) => ({
    src: mod.default,
    folder: path.includes("canada")
      ? "Canada"
      : path.includes("unitedKingdom")
        ? "United Kingdom"
        : path.includes("europe")
          ? "Europe"
          : path.includes("testimoniels")
            ? "Testimonials"
            : "Other",
  }));

  const videoList = Object.entries(videos).map(([path, mod]) => ({
    src: mod.default,
    name: path.split("/").pop().split(".")[0],
  }));

  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Success Stories | Visa Approvals & Testimonials | Receptive Solutions</title>
        <meta
          name="description"
          content="See how Receptive Solutions has helped clients achieve their visa and overseas placement dreams. Watch success stories, testimonials, and approval videos."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/success-story" />

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
                "name": "Success Stories",
                "item": "https://www.receptivesolutions.co.in/success-story"
              }
            ]
          })}
        </script>

        {/* ✅ CollectionPage Schema (Main content type) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Success Stories - Visa Approvals & Testimonials",
            "url": "https://www.receptivesolutions.co.in/success-story",
            "description":
              "Browse client success stories and testimonials of Receptive Solutions, featuring real visa approvals and overseas placement achievements.",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://receptivesolutions.co.in/assets/IMMIGRATION_logo-C2HZCFoU.jpg",
              "sameAs": [
                "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
                "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
                "https://www.youtube.com/@receptivegroup",
                "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
              ]
            }
          })}
        </script>
      </Helmet>


      {/* ✅ PAGE CONTENT */}
      <div className="min-h-screen bg-gray-100 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-extrabold text-[#0C3B34] mb-8 mt-20">
              Success Stories
            </h1>

            <div className="flex justify-center space-x-8 border-b border-gray-200">
              <button
                onClick={() => setActiveTab("clients")}
                className={`py-4 px-6 font-medium text-lg transition-colors ${activeTab === "clients"
                    ? "border-b-4 border-[#0C3B34] text-[#0C3B34]"
                    : "text-gray-500 hover:text-[#0C3B34] hover:border-b-4 hover:border-[#D8C287]"
                  }`}
              >
                Our Clients
              </button>

              <button
                onClick={() => setActiveTab("visa")}
                className={`py-4 px-6 font-medium text-lg transition-colors ${activeTab === "visa"
                    ? "border-b-4 border-[#0C3B34] text-[#0C3B34]"
                    : "text-gray-500 hover:text-[#0C3B34] hover:border-b-4 hover:border-[#D8C287]"
                  }`}
              >
                Visa Stories
              </button>
            </div>
          </div>

          {/* ✅ CLIENT IMAGES */}
          <div className="bg-white rounded-2xl shadow-xl p-8">
            {activeTab === "clients" && (
              <div className="space-y-16">
                {["Testimonials", "Canada", "United Kingdom", "Europe"].map(
                  (section) => (
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
                  )
                )}
              </div>
            )}

            {/* ✅ VISA VIDEOS */}
            {activeTab === "visa" && (
              <div>
                <h2 className="text-3xl font-semibold mb-8 text-[#0C3B34] border-b border-[#D8C287] pb-4">
                  Visa Success Stories
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {videoList.map((video, i) => (
                    <div
                      key={i}
                      className="bg-gray-50 rounded-md overflow-hidden shadow hover:shadow-lg transition-shadow h-[450px] flex flex-col"
                    >
                      <video className="w-full h-[350px]" controls>
                        <source src={video.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>

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
          </div>
        </div>

        {/* ✅ Image Modal */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 pt-20"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-xl max-h-full overflow-auto">
              <img
                src={selectedImage.src}
                alt="Enlarged view"
                className="w-full h-auto rounded-md shadow-2xl"
              />
              <button
                className="absolute top-2 right-2 bg-white text-[#0C3B34] rounded-full p-1 hover:bg-[#D8C287] transition-colors"
                onClick={() => setSelectedImage(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default SuccessStory;
