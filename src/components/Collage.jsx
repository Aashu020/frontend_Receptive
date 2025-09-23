import React from 'react'

function Collage() {
  // Grab images from multiple folders (recursive glob)
  const images = import.meta.glob(
    [
      "/src/assets/caullagePhotos/**/*.{png,jpg,jpeg,svg}",
    ],
    { eager: true }
  );

  // Convert the images object to an array
  const imageArray = Object.values(images).map(module => module.default);

  return (
    <div className="min-h-screen relative mt-30">
      {/* All images as background - 3 rows with 6 images each */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="grid grid-rows-3 grid-cols-6 gap-2 p-4 h-full">
          {imageArray.slice(0, 18).map((imageSrc, index) => (
            <div
              key={index}
              className="aspect-square"
              style={{ zIndex: -1 }}
            >
              <img
                src={imageSrc}
                alt=""
                className="w-full h-full object-cover rounded shadow-lg"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center px-8 bg-black/50">
        <div className="text-center text-white">
          <h1 className="text-8xl font-bold mb-8">
            TESTIMONIALS
          </h1>
          <p className="text-2xl mb-12">
            Real stories from real customers
          </p>
          <button className="bg-white text-black px-12 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
            View All
          </button>
        </div>
      </div>
    </div>
  )
}

export default Collage