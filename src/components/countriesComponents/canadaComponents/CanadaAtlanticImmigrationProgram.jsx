import React from 'react';
import img1 from "../../../assets/images/atlanticImm.jpg"
import img2 from "../../../assets/images/SNIP.jpg"

export default function CanadaAtlanticImmigrationProgram() {
  return (
    <div className="px-[15px] md:px-[3rem] lg:px-[10rem] bg-white min-h-screen pt-2" style={{ fontSize: '16px' }}>
      {/* Atlantic Immigration Program Section */}
      <div className="mb-8">
        <div className="flex items-start flex-col md:flex-row gap-6">
          <div className="md:w-[60%]">
            <h1 className="text-xl md:text:2xl font-bold text-[#0C3B34] mb-4">
              Canada Atlantic Immigration Program:
            </h1>
            <p className="text-gray-700 mb-4 leading-relaxed text-[15px] text-justify">
              The Atlantic Immigration Pilot (AIP) is a partnership between the Government of Canada and the Atlantic 
              Provinces aimed at attracting skilled foreign workers and international graduates to the Atlantic region. The program 
              focuses on addressing labour market needs and supporting economic growth in Nova Scotia, New Brunswick, 
              and New Brunswick by facilitating the immigration of individuals who can contribute to the economic growth and 
              development of the region through the AIP. eligible candidates can obtain job offers from a designated 
              employer in one of the Atlantic provinces and, with their support, can apply for permanent residency. In 
              essence, the Atlantic High Skilled Program, Atlantic Intermediate-Skilled Program, and Atlantic International 
              Graduate Program. Each aiming to address labor gaps of immigration classes stemming from Atlantic's unique 
              economic and labor market demands. Through the AIP, the Canadian government seeks to the Atlantic region has 
              continued to be vibrant and developed.
            </p>
          </div>
          <div className="md:w-[40%]">
            <img src={img1} className='w-full'/>
          </div>
        </div>
      </div>

      {/* How does AIP work section */}
      <div className=" mb-8">
        <h2 className="text-xl md:text-2xl font-bold text-[#0C3B34] mb-4">
          How does the Atlantic Immigration Program
        </h2>
        <p className="text-gray-700 leading-relaxed text-[15px] text-justify">
          The Canada Atlantic Immigration Pilot (AIP) is a program designed to address labour market needs in the Atlantic provinces of Canada - Newfoundland and Labrador, 
          Prince Edward Island, Nova Scotia, and New Brunswick. The AIP aims to attract skilled immigrants and international graduates to the region, supporting economic growth 
          and addressing demographic challenges.
        </p>
      </div>

      {/* Key features section */}
      <div className=" mb-8">
        <h3 className="text-lg md:text:xl font-semibold text-[#0C3B34] mb-4">
          Key features of the AIP include:
        </h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">1.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Employer-driven:</p>
              <p className="text-gray-600 text-[15px] text-justify">The AIP is employer-driven, meaning that employers in the Atlantic Provinces can recruit and hire foreign workers for positions that they have been unable to fill locally.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">2.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Three immigration streams:</p>
              <p className="text-gray-600 text-[15px] text-justify">The program includes the Atlantic High-skilled Program, the Atlantic Intermediate-Skilled Program, and Atlantic International Graduate Program – each targeting different categories of immigrants based on their skill level and work experience.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">3.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Streamlined process:</p>
              <p className="text-gray-600 text-[15px] text-justify">The AIP aims to streamline the immigration process by reducing processing times and cutting through bureaucratic red tape to meet most current criteria, including being full-time, non-seasonal, and meeting local wage standards.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">4.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Settlement plan:</p>
              <p className="text-gray-600 text-[15px] text-justify">Applicants are required to develop a settlement plan outlining how they plan to establish roots and live and work in the Atlantic region, as well as their plans for integration into the local community.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">5.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Permanent residency:</p>
              <p className="text-gray-600 text-[15px] text-justify">Successful applicants to the AIP and their families can obtain permanent residency in Canada, allowing them to live and work in the Atlantic Provinces.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">6.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Provincial support:</p>
              <p className="text-gray-600 text-[15px] text-justify">The Canada Atlantic Immigration Pilot program offers a pathway for skilled workers and international graduates to contribute to the economic development of the Atlantic region while fulfilling their goal of obtaining permanent residency in Canada.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SINP Program Section */}
      <div className=" mb-8">
        <div className="flex items-start flex-col md:flex-row gap-6">
          <div className="md:w-[60%]">
            <h2 className="text-xl md:text-2xl font-bold text-[#0C3B34] mb-4">
              SINP Program:
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed text-[15px] text-justify">
              The Saskatchewan Immigrant Nominee Program (SINP) is a popular choice for individuals seeking Canadian 
              permanent residency. With its various streams catering to skilled workers, entrepreneurs, and international 
              graduates, the SINP offers a pathway to residency that is tailored to the specific needs and qualifications of 
              applicants. Saskatchewan, known for its strong economy, diverse industries, and welcoming community, 
              provides ample opportunities for newcomers to thrive and succeed. By choosing the SINP program, individuals 
              can benefit from a streamlined application process, faster processing times, and the chance to build a rewarding 
              future in a diverse and growing province in Canada.
            </p>
          </div>
          <div className="md:w-[40%]">
            <div className="rounded-lg flex items-center justify-center relative overflow-hidden">
              <img src={img2} className='w-full'/>
            </div>
          </div>
        </div>
      </div>

      {/* SINP Options Section */}
      <div className=" mb-8">
        <h3 className="text-lg md:text-xl font-semibold text-[#0C3B34] mb-4">
          If you wish to immigrate to the Saskatchewan Immigrant Nominee Program (SINP), then you have three options to choose from:
        </h3>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">1.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">International Skilled Worker:</p>
              <p className="text-gray-600 text-[15px] text-justify">Saskatchewan International Skilled is a collection of immigration streams of the Saskatchewan Immigrant program (SINP), a Provincial Nominee Program (PNP) operated by the province of Saskatchewan. Saskatchewan International Skilled subcategory includes Express Entry and Occupations In-Demand which correspond to requirements of the federal immigration program. Saskatchewan On Demand targets migrant professionals with skills in high-demand occupations in Saskatchewan.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">2.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Saskatchewan Experience:</p>
              <p className="text-gray-600 text-[15px] text-justify">Saskatchewan Experience is a collection of immigration streams the Saskatchewan Immigrant Program (SINP), a Provincial Program (PNP), operated by the province of Saskatchewan. Saskatchewan Experience subcategory includes Existing Work Permit, Health Professionals, Hospitality Sector Project, Long-Haul Truck Driver and Students, which corresponds to requirements of the federal immigration program.</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <span className="text-[#0C3B34] font-bold mr-3">3.</span>
            <div>
              <p className="text-gray-700 font-semibold mb-1 text-[15px]">Saskatchewan Entrepreneur and Farm:</p>
              <p className="text-gray-600 text-[15px] text-justify">Saskatchewan Entrepreneur is a stream of Saskatchewan Entrepreneur and Farm Immigration which targets experienced business owners and business managers who have significant personal net worth and are able and are willing to establish, purchase or partner in a business in Saskatchewan. Saskatchewan Entrepreneur and Farms is a stream of Saskatchewan Entrepreneur and Farm Immigration.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Eligibility Section */}
      <div className="pb-4">
        <h3 className="text-xl font-semibold text-[#0C3B34] mb-4">
          Eligibility:
        </h3>
        <p className="text-gray-700 text-[15px] text-justify">
          12th Pass or secondary School, Age: 21 to 55, Experience: Any, IELTS: 5 Band
        </p>
      </div>
    </div>
  );
}