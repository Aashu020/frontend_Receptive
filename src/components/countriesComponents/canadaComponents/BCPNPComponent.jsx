import React from 'react';
import img1 from "../../../assets/images/BCPNP.jpg"

const BCPNPComponent = () => {
  return (
    <div className="px-[15px] md:px-[3rem] lg:px-[10rem] bg-white pt-2">
      <div className="flex flex-col md:flex-row items-center mb-6">
        <div className="md:w-1/2">
          <h2 className="text-2xl font-bold text-[#0C3B34] mb-2">BC PNP Program:</h2>
          <p className="text-gray-600 text-[15px] text-justify">
            British Columbia Provincial Nominee Program (BC PNP) offers various pathways for skilled workers,
            international graduates, and entrepreneurs to obtain Canadian permanent residency. The program aims to address
            the specific economic and labor market needs of the province by selecting candidates who have the skills, experience,
            and intention to contribute to the local economy. With different streams catering to different categories of applicants,
            BC PNP provides a streamlined and efficient route to permanent residency for those interested in living and working
            in British Columbia.
          </p>
        </div>
        <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
          <img
            src={img1}
            alt="British Columbia Provincial Nominee Program"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#0C3B34] text-[15px] ">If you wish to immigrate to British Columbia, then you have three options to choose from:</h3>
        <ol className="list-decimal list-inside text-gray-600 mt-2">
          <li>Skills Immigration Stream</li>
          <li>Express Entry British Columbia Stream</li>
          <li>Entrepreneur Immigration</li>
        </ol>
      </div>
      <div className="mb-4">
        <h3 className="text-xl font-semibold text-[#0C3B34] text-[15px] ">Skills Immigration: BC PNP Skills Immigration is divided into the following categories:</h3>
        <ol className="list-decimal list-inside text-gray-600 mt-2 text-[15px] text-justify">
          <li>
            Skilled Worker Category: this category is for individuals who have received an eligible job offer in a skilled occupation. Workers are expected to have several years of
            experience in their skilled occupation.
          </li>
          <li>
            Healthcare Professional Category: under these categories' individuals with experience and eligible job offers, such as physicians, nurses, psychiatric nurses; or allied
            health professionals may apply. An eligible job offer must be acquired for one of 11 qualifying health occupations.
          </li>
          <li>
            International Graduate Category: this category is for individuals who have graduated from a recognized Canadian university or college in the last three years. A job
            offer must be obtained from a BC employer to be eligible under this sub-category.
          </li>
          <li>
            International Post-Graduate Category: this category is for graduates with Masters or Doctoral degrees from an eligible educational institution in British Columbia in
            the natural, applied, or health sciences programs of study. No job offer is required to apply under this sub-category.
          </li>
          <li>
            Entry Level and Semi-Skilled Worker Category: Workers in certain entry-level semi-skilled positions in tourism/hospitality, food processing, or long-haul trucking,
            or those entry-level or semi-skilled positions living and working in the Northeast Development Region of British Columbia, may be eligible for immigration through
            this program.
          </li>
        </ol>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-[#0C3B34] text-[15px]">Eligibility:</h3>
        <p className="text-gray-600 mt-2 text-[15px] text-justify">
          Min 12th Pass, or secondary School Diploma or Bachelors, Age: 21 to 55, Experience: min 2 years and above in the last 5 years
        </p>
      </div>
    </div>
  );
};

export default BCPNPComponent;