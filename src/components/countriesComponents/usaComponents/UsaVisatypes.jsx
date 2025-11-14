import React from 'react';
import img1 from "../../../assets/images/usadeg.jpg"
import img2 from "../../../assets/images/uaevisa.jpg"

const UsaVisatypes = () => {
  return (
    <div className="p-2 bg-white px-[15px] md:px-[3rem] lg:px-[10rem]">
      <div className="mb-6" id='us-study-visa'>
        <h2 className="text-xl md:text:2xl 2xl:text-5xl font-bold text-gray-700 mb-2">Visa types:</h2>
      </div>
      <div className="mb-6">
        <div className="flex flex-col md:flex-row items-center 2xl:items-start mb-4 2xl:space-x-15">
          <div className="md:w-1/2 2x:w-[60%]">
            <h3 className="text-lg md:text-xl 2xl:text-3xl  font-semibold text-gray-700">1. Student/Study Visa:</h3>
            <p className="text-gray-600 mt-2 2xl:mb-8 text-[15px] 2xl:text-2xl 2xl:tracking-wider 2xl:leading-normal  text-justify">
              Elevate your academic journey with Receptive Immigration, your reliable guide to obtaining a study visa for the
              USA. Explore endless possibilities and unlock a world of educational opportunities with our expert assistance
              and personalized support.
            </p>
            <h4 className="text-lg 2xl:text-3xl font-medium text-gray-700 mt-2">Eligibility:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-1 text-[15px] 2xl:text-2xl 2xl:tracking-wider 2xl:leading-normal  text-justify">
              <li>Valid Passport: Ensure your passport is valid for at least six months from the date of your intended entry to the UAE. An expired passport could lead to visa application rejection, so be sure to renew it if necessary.</li>
              <li>Completed Visa Application Form</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <img
              src={img1}
              alt="Student Visa"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col md:flex-row items-center 2xl:space-x-15 pb-8" id='us-tourist'>
          <div className="md:w-1/2">
            <h3 className="text-xl 2xl:text-5xl font-semibold text-gray-700">2. Tourist Visa:</h3>
            <p className="text-gray-600 mt-2 text-[15px] 2xl:text-2xl tracking-wider leading-normal text-justify">
              Embark on a journey of discovery with Receptive Immigration's tourist visa services for the USA. Let us simplify
              the process and help you create unforgettable memories in this diverse and welcoming country.
            </p>
            <h4 className="text-lg font-medium text-gray-700 mt-2 2xl:text-4xl 2xl:mt-8">Eligibility:</h4>
            <ul className="list-disc list-inside text-gray-600 mt-1 2xl:text-2xl 2xl:tracking-wider 2xl:leading-normal text-justify">
              <li>Valid Passport</li>
            </ul>
          </div>
          <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
            <img
              src={img2}
              alt="Tourist Visa"
              className="w-full h-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsaVisatypes