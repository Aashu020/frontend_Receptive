import React from 'react';
import subclass from '../../../assets/flags/Subclass186.webp'

function Subclass186() {
  return (
    <div id='australia-subclass-186' className="w-full rounded-xl overflow-hidden   px-6 md:px-12 lg:px-24 text-left mt-10">
      {/* Heading Section */}
      <div className="flex flex-col items-start mb-6">
        <h2 className="text-3xl font-bold mb-4 text-left" style={{ color: '#0C3B34' }}>
          Subclass 186 Visa Program
        </h2>
        
        {/* Image positioned below heading and aligned left */}
        <div className="w-full md:w-1/2 lg:w-1/3 mb-6">
          <div className="bg-gradient-to-br from-emerald-50 to-teal-100 p-4 rounded-lg">
            <img 
              src={subclass}
              alt="Subclass 186 Visa" 
              className="w-full h-auto rounded-md"
            />
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col">
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Employer Nomination Scheme Visa
          </h3>
          <p className="text-left text-gray-700">
            The subclass 186 Employer Nomination Scheme visa is a permanent residence visa for skilled workers who are nominated by a designated Australian employer. It has three streams: the Direct Entry stream, the Temporary Residence Transition stream, and the Labor Agreement stream.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Direct Entry Stream
          </h3>
          <p className="text-left text-gray-700">
            This is for people who have been nominated by their employer in that stream, people who have never, or only briefly, worked in Australia, or temporary residents who do not qualify for the Temporary Residence Transition stream.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Temporary Residence Transition Stream
          </h3>
          <p className="text-left text-gray-700">
            This is for subclass 482 and 457 visa holders who have worked for their employer for at least three years and the employer wants to offer them a permanent position in that same occupation.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            Labor Agreement Stream
          </h3>
          <p className="text-left text-gray-700">
            This is for people sponsored by an employer through a labor agreement. To secure a PR through the Subclass 186 visa program, the individual must be nominated by a designated Australian employer and meet the skills, qualifications, English language requirements, and health and character checks.
          </p>
          <p className="mt-3 text-left text-gray-700">
            Once granted, the subclass 186 visa allows the holder and any family members who have also been granted this visa to stay in Australia indefinitely, work and study in Australia, enroll in Medicare, sponsor eligible relatives for permanent residence, apply for Australian citizenship if eligible, and travel to and from Australia for five years from the date the visa is granted.
          </p>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
            To apply for a subclass 186 visa, you must:
          </h3>
          <ul className="list-disc list-inside mt-3 space-y-2 text-left text-gray-700">
            <li>Be nominated by an approved Australian employer.</li>
            <li>Be under the age of 45 at the time of application, unless you are exempt.</li>
            <li>Have the required skills and qualifications for the position (you may be required to undergo a skills assessment).</li>
            <li>Have appropriate English language proficiency, usually at least competent English, unless you are exempt.</li>
            <li>Meet health and character requirements.</li>
            <li>Apply for the visa while you are in Australia, unless you are exempt.</li>
            <li>Meet the requirements of the stream in which you apply.</li>
            <li>Work only for your nominating employer or in the nominated position.</li>
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Eligibility Criteria */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Eligibility Criteria
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li>Be nominated by an approved Australian employer within six months of applying.</li>
              <li>Be under 45 years of age (some exceptions apply).</li>
              <li>Have at least competent English (IELTS 6 in each component or equivalent).</li>
              <li>Meet the skills, qualifications, and employment background necessary for the position.</li>
              <li>Your occupation must be on the list of eligible skilled occupations.</li>
              <li>Apply and meet the requirements for a specific stream of the Subclass 186 visa.</li>
              <li>Meet health and character requirements.</li>
              <li>Fulfill any licensing, registration, or membership requirements for your occupation.</li>
              <li>Have worked for your employer full-time for at least three years if applying under the Temporary Residence Transition stream.</li>
              <li>Have a positive skills assessment and at least three years of relevant work experience if applying under the Direct Entry stream.</li>
            </ul>
          </div>
          
          {/* Benefits */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold mb-3 text-left" style={{ color: '#0C3B34' }}>
              Benefits
            </h3>
            <ul className="space-y-2 text-left text-gray-700">
              <li>Permanent residency in Australia for you and your family.</li>
              <li>Freedom to live, work, and study in Australia indefinitely.</li>
              <li>Eligibility to enroll in Australia's public healthcare program, Medicare.</li>
              <li>Access to certain social security payments (subject to a waiting period).</li>
              <li>The ability to apply for Australian citizenship, subject to eligibility.</li>
              <li>The ability to sponsor eligible family members for Australian permanent residency.</li>
              <li>Freedom to travel to and from Australia for five years from the date the visa is granted.</li>
              <li>No restrictions on the type or amount of work you can do.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subclass186;