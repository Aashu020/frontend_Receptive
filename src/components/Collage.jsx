import React from 'react'

function Collage() {
  // Grab images from multiple folders (recursive glob)
  const images = import.meta.glob(
    [
      "/src/assets/testimoniels/**/*.{png,jpg,jpeg,svg}",
    ],
    { eager: true }
  );

  // Convert the images object to an array
  const imageArray = Object.values(images).map(module => module.default);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="p-8 pb-0">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">Testimonials Collage</h1>
      </div>
      
      {/* Grid layout with no gaps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {imageArray.map((imageSrc, index) => (
          <div
            key={index}
            className="relative group overflow-hidden aspect-square"
          >
            <img
              src={imageSrc}
              alt={`Testimonial ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center">
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white font-semibold text-lg">Testimonial {index + 1}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Masonry layout with no gaps */}
      {imageArray.length > 0 && (
        <div className="mt-12 p-8 pt-0">
          <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">Masonry Layout (No Gaps)</h2>
          <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4">
            {imageArray.map((imageSrc, index) => (
              <div
                key={index}
                className="break-inside-avoid relative group overflow-hidden"
              >
                <img
                  src={imageSrc}
                  alt={`Testimonial ${index + 1}`}
                  className="w-full h-auto object-cover block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default Collage