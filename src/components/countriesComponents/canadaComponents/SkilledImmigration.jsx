// SkilledImmigration.jsx
import React from "react";
import SkilledImmigrationImg from "../../../assets/images/SkilledImmigration.jpg"

export default function SkilledImmigration() {
  return (
    <section id="canada-skilled-immigration" className="w-full bg-white py-10 px-[15px] md:px-[3rem] lg:px-[10rem]">
      <div className="container flex flex-col md:flex-row items-start gap-8">
        {/* Left Content */}
        <div className="md:w-[70%]">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">
            Skilled Immigration:
          </h2>
          <h3 className="text-lg md:text-xl font-semibold text-gray-700 mb-3">
            Express Entry
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed text-[15px] text-justify">
            The Canadian Express Entry program is an online system used by the
            Canadian government to manage applications for immigration to
            Canada. It is designed to select skilled workers for immigration to
            Canada based on their qualifications, work experience, language
            proficiency, and other factors. Candidates who meet the eligibility
            criteria can create an online profile and enter the Express Entry
            pool. From there, they may receive an Invitation to Apply (ITA) for
            permanent residency based on their Comprehensive Ranking System
            (CRS) score. The Express Entry program includes three main economic
            immigration categories: the Federal Skilled Worker Program, the
            Federal Skilled Trades Program, and the Canadian Experience Class. <br />
            To be eligible for the Canadian Express Entry program, candidates
            must meet the requirements of one of the three economic immigration
            programs managed through Express Entry.
          </p>

          <div className="space-y-6">
            {/* FSWP */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                1. Federal Skilled Worker Program (FSWP):
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>
                  Have at least one year of continuous full-time or equivalent
                  part-time work experience in a skilled occupation within the
                  last 10 years.
                </li>
                <li>
                  Meet the minimum language requirements in English or French.
                </li>
                <li>
                  Have a valid Educational Credential Assessment (ECA) if
                  educated outside of Canada.
                </li>
                <li>
                  Score a minimum number of points based on factors such as age,
                  education, work experience, language proficiency, and
                  adaptability.
                </li>
              </ul>
            </div>

            {/* FSTP */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                2. Federal Skilled Trades Program (FSTP):
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>
                  Have at least two years of full-time work experience in a
                  skilled trade within the last five years.
                </li>
                <li>
                  Meet the minimum language requirements in English or French.
                </li>
                <li>
                  Have a valid job offer in a skilled trade (or a certificate of
                  qualification in that skilled trade issued by a Canadian
                  authority).
                </li>
              </ul>
            </div>

            {/* CEC */}
            <div>
              <h4 className="font-semibold text-gray-800 mb-2">
                3. Canadian Experience Class (CEC):
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>
                  Have at least one year of skilled work experience in Canada
                  within the last three years.
                </li>
                <li>
                  Meet the minimum language requirements in English or French.
                </li>
                <li>Plan to live outside the province of Quebec.</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed text-justify text-[15px]">
            In addition to meeting the specific requirements of one of these
            programs, candidates must also create an Express Entry profile,
            obtain a minimum Comprehensive Ranking System (CRS) score, and
            receive an Invitation to Apply (ITA) for permanent residency from
            the Canadian government.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-2/3 flex justify-center">
          <img
            src={SkilledImmigrationImg}// replace with your image path
            alt="The Canadian Express Entry Program"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
