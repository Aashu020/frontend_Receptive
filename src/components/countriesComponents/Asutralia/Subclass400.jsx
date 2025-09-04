import React from 'react';
import subclass from '../../../assets/flags/Subclass400.webp'
function Subclass400() {
  return (
    <div className="w-full rounded-xl overflow-hidden bg-white mt-10  px-6 md:px-12 lg:px-24 text-left">
      {/* Heading Section */}
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: '#0C3B34' }}>
          Subclass 400 Visa Program
        </h2>
        
        {/* Image positioned below heading and aligned left */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-lg">
            <img 
              src={subclass}
              alt="Subclass 400 Visa" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            What is Subclass Program 400 and why should one opt for it?
          </h3>
          <p className="text-left text-gray-700">
            The Subclass 400 Temporary Work (Short Stay Specialist) visa is a temporary visa that allows individuals to come to Australia for short-term, highly specialized work or activity. It is designed for individuals who need to undertake short-term, non-ongoing work in Australia that cannot be done by the local workforce. The visa is typically granted for up to 3 to 6 months, with the possibility of extensions. This visa is suitable for individuals who need to conduct specialized work, participate in an event, or fulfil an obligation in Australia for a short period of time.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Pathway to Permanent Residency
          </h3>
          <p className="text-left text-gray-700">
            Securing a Subclass 400 visa does not directly lead to permanent residency in Australia. However, gaining work experience in Australia through this visa may enhance an individual's eligibility for other visa pathways that could lead to permanent residency, such as the Employer Nomination Scheme (subclass 186) or the General Skilled Migration program.
          </p>
          <p className="mt-3 text-left text-gray-700">
            Pathway from Subclass 400 to Subclass 482 and Subclass 482 visa now serves as a direct pathway to Permanent Residency (PR), allowing individuals to transition seamlessly without the need for an intermediate visa subclass.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Requirements */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Requirements
            </h3>
            <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
              <li>Basic English Speaking and understanding ability</li>
              <li>Minimum 2 years' experience</li>
              <li>Above 18 years of age</li>
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Benefits
            </h3>
            <ul className="list-disc list-inside space-y-2 text-left text-gray-700">
              <li>Salary $25 to $27 per Hour</li>
              <li>Pathway to Subclass 482 and then PR</li>
              <li>Family Sponsored Visa</li>
              <li>High Demand occupations</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subclass400;