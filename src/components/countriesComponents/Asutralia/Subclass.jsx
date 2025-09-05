import React from 'react'
import subclass from '../../../assets/flags/subclass482.webp'

const Subclass = () => {
  return (
    <div id='australia-subclass-482' className="w-full rounded-xl overflow-hidden mt-10 px-6 md:px-12 lg:px-24 text-left">
      {/* Heading Section */}
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: '#0C3B34' }}>
          Subclass 482 Visa Program
        </h2>
        
        {/* Image positioned below heading and aligned left */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-lg">
            <img 
              src={subclass}
              alt="Subclass 482 Visa" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Pathway to PR through Subclass 482 visa
          </h3>
          <p className="text-left text-gray-700">
            The Subclass 482 Temporary Skill Shortage visa can provide a pathway to permanent residency in Australia through the Temporary Residence Transition stream of the Employer Nomination Scheme (subclass 186) visa. To be eligible for this pathway, individuals must have held a Subclass 482 visa under the same employer for at least three years, and their employer must nominate them for permanent residency.
          </p>
          <p className="mt-3 text-left text-gray-700">
            The process involves meeting certain requirements, including having the necessary skills, qualifications, and experience for the nominated occupation, as well as meeting English language proficiency and health and character requirements. Applicants must also demonstrate a genuine intention to work for the nominating employer in the nominated position on a permanent basis.
          </p>
          <p className="mt-3 text-left text-gray-700">
            Securing a Subclass 482 visa can provide skilled workers with the opportunity to gain valuable work experience in Australia and potentially transition to permanent residency, allowing them to build a future in the country.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Requirements to apply for a Subclass 482 visa program?
          </h3>
          <p className="text-left text-gray-700">
            The eligibility criteria for the Subclass 482 Temporary Skill Shortage visa include:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-left text-gray-700">
            <li>Nomination by an approved sponsor: The applicant must have a job offer from an Australian employer who is approved as a sponsor by the Department of Home Affairs.</li>
            <li>Occupation on the relevant skilled occupation list: The nominated occupation must be on the relevant skilled occupation list for the visa subclass.</li>
            <li>Skills assessment: The applicant must have their skills assessed by the relevant assessing authority for their nominated occupation.</li>
            <li>English language proficiency: The applicant must meet the English language requirements unless exempt based on their nationality or occupation.</li>
            <li>Work experience: The applicant must have at least two years of relevant work experience in their nominated occupation, unless exempt based on exceptional circumstances.</li>
            <li>Health and character requirements: The applicant must meet the health and character requirements set by the Department of Home Affairs.</li>
            <li>Genuine Temporary Entrant: The applicant must demonstrate that they intend to stay in Australia temporarily and comply with the visa conditions.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Criteria */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Eligibility Criteria
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li><span className="font-semibold">Age:</span> No requirement</li>
              <li><span className="font-semibold">Education:</span> No requirement</li>
              <li><span className="font-semibold">Work Experience:</span> 2 Years</li>
              <li><span className="font-semibold">IELTS:</span> 5 Band (not less than 5 in all)</li>
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Benefits
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li><span className="font-semibold">Annual Income:</span> AUD 65,000 – 70,000</li>
              <li><span className="font-semibold">Superannuation Contribution from Employer:</span> 11%</li>
              <li><span className="font-semibold">Family Sponsored Visa</span></li>
              <li><span className="font-semibold">Apply for PR:</span> Minimum after 1 Year (Age below 45 Years while applying)</li>
              <li><span className="font-semibold">Family Benefits</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Subclass