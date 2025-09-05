import React from 'react';
import subclass from '../../../assets/flags/SingaporeEPass.webp'

function SingaporeEPass() {
  return (
    <div id='singapore-e-pass' className="w-full rounded-xl overflow-hidden mt-10 mb-10 px-6 md:px-12 lg:px-24 text-left">
      {/* Heading Section */}
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: '#0C3B34' }}>
          Singapore Employment Pass (E Pass) Program
        </h2>
        
        {/* Image positioned below heading and aligned left */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-lg">
            <img 
              src={subclass}
              alt="Singapore Employment Pass" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Why Singapore Employment Pass (E Pass)?
          </h3>
          <p className="text-left text-gray-700">
            The Singapore Employment Pass (E Pass) is a type of work visa that allows foreign professionals, managers, executives, and business owners to live and work in Singapore. The E Pass provides access to a host of career opportunities in Singapore's thriving economy, particularly in sectors like finance, tech, and healthcare.
          </p>
          <p className="mt-3 text-left text-gray-700">
            Singapore is renowned for its strong business infrastructure, strategic location, and a robust economy, thereby providing excellent prospects for career growth. The E Pass offers flexibility as it is not tied to a specific employer and allows for job mobility, meaning holders can change jobs without reapplying for a new pass, as long as they continue to meet the criteria.
          </p>
          <p className="mt-3 text-left text-gray-700">
            The E Pass has a validity of up to three years and is renewable as long as the pass holder remains employed. It also allows holders to bring their family members to Singapore under certain conditions, making it an excellent choice for professionals seeking to expand their career options in one of the world's most vibrant and multicultural cities.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Why Temporary Employment Permit?
          </h3>
          <p className="text-left text-gray-700">
            Choosing a Temporary Employment Permit for Singapore offers several advantages:
          </p>
          <ul className="list-disc list-inside mt-3 space-y-2 text-left text-gray-700">
            <li><strong>Flexibility:</strong> Work in Singapore for a limited period with the flexibility to explore different job opportunities without long-term commitment.</li>
            <li><strong>Experience:</strong> Gain invaluable international work experience and understanding of the Asian market in a multicultural environment.</li>
            <li><strong>Potential for Permanent Employment:</strong> Serves as a stepping stone towards obtaining permanent employment, as many companies prefer hiring temporarily before offering permanent positions.</li>
            <li><strong>Lower Commitment:</strong> Ideal for those wanting to experience Singapore without making a long-term commitment.</li>
            <li><strong>Easier to Obtain:</strong> Generally quicker and easier to obtain than permanent employment permits.</li>
            <li><strong>Opportunity to Explore:</strong> Perfect for deciding if Singapore suits your lifestyle and career goals.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id='singapore-s-pass'>
          {/* Eligibility Criteria */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Eligibility Criteria
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li><span className="font-semibold">Age:</span> 21 Years and Above</li>
              <li><span className="font-semibold">Work Permit (Semi-skilled/Unskilled):</span> No Minimum Qualification Required</li>
              <li><span className="font-semibold">S Pass (Skilled workers):</span> Graduation is a must</li>
              <li><span className="font-semibold">Prior Experience:</span> Not required</li>
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Benefits of Working in Singapore
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li><span className="font-semibold">Strong Economy:</span> Robust financial sector and business opportunities</li>
              <li><span className="font-semibold">High Standard of Living:</span> Quality infrastructure and services</li>
              <li><span className="font-semibold">Career Growth:</span> Excellent opportunities for professional development</li>
              <li><span className="font-semibold">Competitive Salaries:</span> Attractive compensation packages</li>
              <li><span className="font-semibold">Multicultural Environment:</span> Diverse and inclusive workplace</li>
              <li><span className="font-semibold">Strategic Location:</span> Gateway to Asia-Pacific markets</li>
              <li><span className="font-semibold">Work-Life Balance:</span> Focus on employee wellbeing</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingaporeEPass;