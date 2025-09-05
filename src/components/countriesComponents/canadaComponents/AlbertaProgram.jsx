import React from 'react'
import img1 from "../../../assets/images/attp.jpg"
const AlbertaProgram = () => {
    return (
        <div id='canada-alberta-tech-pathway'> 
            <div className="px-[15px] md:px-[3rem] lg:px-[10rem] bg-white py-4">
                <div className="flex flex-col md:flex-row items-top mb-6">
                    <div className="md:w-1/2">
                        <h2 className="text-xl md:text-2xl font-bold text-[#0C3B34] mb-2">Alberta Tech Pathway Program:</h2>
                        <p className="text-gray-600 text-[15px] text-justify">
                            The Alberta Accelerated Tech Pathway is contained within the Alberta Advantage Immigration Program (AAIP), a Provincial Nominee Program (PNP) operated by the province of Alberta. The Accelerated Tech Pathway allows certain Express Entry candidates with an Albertan job offer at a company in a tech industry or in an eligible tech role to apply for nomination with expedited processing. <br />
                            Candidates who meet the requirements of the Alberta Express Entry stream and meet the requirements of the Alberta Accelerated Tech Program may be eligible to receive accelerated application processing. <br />
                            Individuals who are successfully nominated through the Alberta Accelerated Tech Pathway will be issued a work permit support letter, allowing them to apply for a temporary work permit. Successful nominees will also be invited to submit an official application for Canadian permanent residence.
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
                    <h3 className="text-lg md:text-xl font-semibold text-[#0C3B34] text-[15px] ">Choosing the Alberta Technology (Tech) Accelerator program could be beneficial for several reasons:</h3>
                    <ol className="list-decimal list-inside text-gray-600 mt-2 text-[15px]">
                        <li>Access to Expertise: The accelerator program provides access to industry professionals and successful entrepreneurs who can provide guidance and mentorship.</li>
                        <li>Networking Opportunities: The program can provide a platform for connecting with other tech entrepreneurs, potential investors, and industry leaders.</li>
                        <li>Skills Development: The program often includes workshops and training sessions aimed at enhancing business skills, such as business planning, marketing, and finance.</li>
                        <li>Access to Resources: Accelerator programs often provide resources such as office space, software tools, and other tech infrastructure.</li>
                        <li>Funding Opportunities: Some accelerator programs also provide funding opportunities, either directly or through connections with potential investors</li>
                        <li>Market Exposure: The program can provide opportunities for showcasing your product or service to a wider audience</li>
                        <li>Structured Growth Path: The program provides a structured path for the growth of your start up with defined goals and timelines.</li>
                        <li>It's crucial to note that while these are potential benefits, the actual advantages can vary based on the specific offerings of the Alberta Tech Accelerator program.</li>
                    </ol>
                </div>
                <div className="mb-4">
                    <h3 className="text-lg md:text-xl font-semibold text-[#0C3B34] text-[15px]">Job Offer Requirements::</h3>
                    <p className="list-decimal list-inside text-gray-600 mt-2 text-[15px] text-justify">
                        The Alberta Accelerated Tech Pathway has unique job offer requirements. An eligible job offer must be for one of 38 selected in-demand occupations or with an Albertan employer in an eligible tech industry. <br />
                        The job offer or contract must be signed by you and your Alberta employer and should include details of your employment. The offer must be full-time, continuous, and for at least 12 months. The wage or salary must meet or exceed provincial minimum wage and any requirements set out in an LMIA if applicable. If an applicant does not have an LMIA, their job offer wage must meet or exceed the starting wage for their occupation across all industries in Alberta. <br />
                        When submitting an Express Entry profile, a candidate’s should also indicate the same primary NOC as the Alberta job offer.
                    </p>
                </div>
                <div>
                    <h3 className="text-xl font-semibold text-[#0C3B34] text-[15px]">The eligibility for Alberta's New Immigration Tech Program includes:</h3>
                    <ol className="text-gray-600 mt-2 text-[15px] text-justify">
                        <li>Should be a Tech Professional in Canada or overseas</li>
                        <li>Have a valid Tech job offer in Alberta or should be currently working for an Alberta-based company</li>
                        <li>Register your profile in the federal government’s Express Entry system</li>
                        <li>Become eligible for the Alberta Express Entry Stream</li>
                    </ol>
                </div>
            </div>
        </div>
    )
}

export default AlbertaProgram