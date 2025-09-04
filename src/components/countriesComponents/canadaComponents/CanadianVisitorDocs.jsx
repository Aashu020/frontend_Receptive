// CanadianVisitorDocs.jsx
import React from "react";

const CanadianVisitorDocs = ({ title, points, image }) => {
  return (
    <section className="w-full py-12 md:px-[3rem] px-[15px] lg:px-[10rem]">
          <h2 className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#0C3B34] mb-6 lg:mb-15 [word-spacing:4px]">
            {title}
          </h2>
      <div className=" grid grid-cols-1 md:grid-cols-2 gap-10 items-start justify-center">
        
        {/* Text Section */}
        <div>
          <ul className="space-y-8">
            {points.map((item, index) => (
              <li key={index}>
                <h3 className="text-lg font-semibold text-[#D8C287]">
                  {index + 1}. {item.title}
                </h3>
                <p className="text-gray-700 text-sm sm:text-base text-justify leading-relaxed mt-1 md:text-[15px]">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </div>

        {/* Image Section */}
        <div className="">
          <img
            src={image}
            alt={title}
            className="rounded-xl shadow-lg w-full  object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CanadianVisitorDocs;
