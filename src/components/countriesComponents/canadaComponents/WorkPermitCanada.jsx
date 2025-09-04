// WorkPermitCanada.jsx
import React from "react";
import img from "../../../assets/images/wrkperimitcanada.jpg"

export default function WorkPermitCanada() {
  return (
    <section className="w-full bg-white py-5 px-[15px] md:px-[3rem] lg:px-[10rem]">
      <div className="container px-1 flex flex-col md:flex-row items-start gap-8">
        
        {/* Left Content */}
        <div className="md:w-[70%]">
          <h2 className="text-lg font-bold text-[#0C3B34] mb-4">
            Work in Canada - Canadian work permit & visa process:
          </h2>

          <p className="text-gray-700 font-medium mb-2 text-justify text-[15px]">
            If you are uncertain about whether you require a work permit to work in Canada or which type of work
            permit is appropriate for your situation, please answer a few questions to help us determine the
            appropriate course of action.
          </p>

          <p className="text-gray-600 mb-4 leading-relaxed text-justify text-[15px]">
            <strong>Canadian work Permit made easy;</strong> <br />
            The ultimate guide to the Canadian work permit and visa process.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify text-[15px]">
            Embark on your journey to Canada by exploring our detailed guide on the Canadian work permit and visa
            process. From understanding the requirements to navigating the application procedures, we provide valuable
            insights to help you achieve your goal of working in Canada. Let us be your trusted companion on this
            exciting adventure towards new opportunities in the Great White North.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-[35%] flex justify-center">
          <img
            src={img} // replace this with the actual image URL
            alt="Canadian Work Permit & Visa"
            className="w-full max-w-sm rounded-lg shadow-md"
          />
        </div>
      </div>
      <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3 text-justify text-[17px] mt-10 md:mt-0">
            Who is eligible to work in Canada?
          </h3>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify text-[15px]">
            Foreign nationals who wish to work in Canada must meet certain eligibility criteria to obtain a work permit.
            Some of the factors that determine eligibility include having a valid job offer from a Canadian employer,
            meeting the requirements of the specific work permit category, demonstrating sufficient funds to support
            oneself and any accompanying family members, possessing the necessary qualifications and skills for the job,
            and being admissible to Canada based on factors such as criminal history and health. Additionally, certain
            individuals, such as international students and spouses of Canadian citizens or permanent residents, may be
            eligible to work in Canada under specific programs or permits. It is important to carefully review the
            eligibility requirements for the intended work permit category to ensure compliance with Canadian immigration
            regulations.
          </p>

          <p className="text-gray-600 mb-6 leading-relaxed text-justify text-[15px]">
            A Canadian work permit can be obtained through various avenues, each with its own set of requirements. Some
            work permits necessitate a job offer from a Canadian employer, while others mandate the employer to obtain a
            Labour Market Impact Assessment (LMIA). Alternatively, certain permits may require the applicant to have a
            connection to Canada, such as previous education or spousal sponsorship. To determine the most suitable work
            permit category for your needs, please refer to the following classifications:
          </p>

          {/* Classifications */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-justify text-[16px]">
                Requiring a Labour Market Impact Assessment (LMIA):
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>Facilitated LMIA (Quebec)</li>
                <li>Temporary Foreign Worker Program (TFWP)</li>
                <li>Global Talent Stream</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-justify text-[16px]">
                LMIA-Exempt but requiring a job offer or employment contract:
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>CETA Work Permits</li>
                <li>NAFTA Work Permits</li>
                <li>Intra-Company Transfers</li>
                <li>International Mobility Program (IMP)</li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold text-gray-800 mb-2 text-justify text-[16px]">
                Open Work Permits (no job offer or LMIA required):
              </h4>
              <ul className="list-disc pl-6 text-gray-600 space-y-1 text-justify text-[15px]">
                <li>Bridging Open Work Permit (BOWP)</li>
                <li>Post-Graduation Work Permits (PGWP)</li>
                <li>Spousal Sponsorship from Inside Canada</li>
                <li>International Experience Canada (IEC) (working holiday visa)</li>
                <li>Spouse Accompanying International Student or Worker</li>
              </ul>
            </div>
          </div>

          <p className="text-gray-600 mt-6 leading-relaxed text-justify text-[15px]">
            These categories represent different pathways for individuals to obtain a Canadian work permit based on
            their unique circumstances and qualifications.
          </p>
      </div>
    </section>
  );
}
