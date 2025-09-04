import React from 'react'
import img2 from "../../../assets/images/work_visa.jpg"
const WorkerVisa = () => {
    return (
        <div className="p-2 bg-white px-[15px] md:px-[3rem] lg:px-[10rem]">
            <div className="flex flex-col md:flex-row items-top mb-4 mt-5">
                <div className="md:w-1/2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">3. UK Skilled Worker Visas:</h3>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        Are you a skilled professional seeking exciting career opportunities in the United Kingdom? Look no further than the UK Skilled Worker Visa, your key to unlocking a world of possibilities in one of the world's leading economies.
                    </p>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        At our immigration website, we specialize in assisting skilled workers in navigating the intricacies of the UK visa application process. Our expert team is dedicated to providing comprehensive support and guidance to help you secure your dream job in the UK and embark on a fulfilling career path.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                    <img
                        src={img2}
                        alt="Student Visa"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className='pb-4'>
                <h4 className="text-lg font-medium text-gray-700 mt-2">Tier 2 Skilled Category visa:</h4>
                <p className="text-gray-600 mt-2 text-[15px] text-justify">The Tier 2 visa is a type of work visa that allows skilled workers to come to the UK to work for a licensed sponsor in a specific job role. There are several categories under the Tier 2 visa system, including:</p>
                <ul className="list-disc list-inside text-gray-600 mt-1 text-[15px]">
                    <li><span className='font-semibold'>Tier 2 (General) Visa:</span> This category is for skilled workers with a job offer in the UK from a licensed sponsor. Applicants must meet specific eligibility criteria, including English language proficiency and salary requirements.</li>
                    <li><span className='font-semibold'>Tier 2 (Intra-Company Transfer) Visa:</span>This category is for employees of multinational companies who are being transferred to a UK branch of the same company. There are different subcategories within this visa route, depending on the nature of the transfer.</li>
                    <li><span className='font-semibold'>Tier 2 (Sportsperson) Visa:</span> This category is for elite athletes and coaches who have been endorsed by their sport's governing body to work in the UK.</li>
                    <li><span className='font-semibold'>Tier 2 (Minister of Religion) Visa:</span> This category is for religious workers such as ministers, missionaries, or religious order members who have been offered a job within a faith-based organization in the UK. <br />
                                                                                            Applicants for a Tier 2 visa must have a job offer from a licensed sponsor in the UK and meet specific criteria related to salary, English language proficiency, and maintenance funds. The Tier 2 visa system is designed to attract skilled workers to fill gaps in the UK labor market and contribute to the country's economy and workforce.</li>
                </ul>
            </div>
            <div className='pb-4'>
                <h4 className="text-lg font-medium text-gray-700 mt-2">Tire 5 Temporary Category visa:</h4>
                <p className="text-gray-600 mt-2 text-[15px] text-justify">The Tier 5 Visa is a temporary work visa category that allows individuals to come to the UK for a specific purpose or to undertake specific types of work. There are several subcategories under the Tier 5 Visa, each designed for different types of temporary work or activities:</p>
                <ul className="list-disc list-inside text-gray-600 mt-1 text-[15px]">
                    <li><span className='font-semibold'>Tier 5 (Temporary Worker - Creative and sporting): </span> This category is for individuals coming to the UK to work as sportspeople, entertainers, or creative artists for a short period.</li>
                    <li><span className='font-semibold'>Tier 5 (Temporary Worker - Charity Worker): </span> This category is for individuals coming to the UK to do voluntary work for a charity.</li>
                    <li><span className='font-semibold'>Tier 5 (Temporary Worker - Religious Worker):</span> This category is for individuals coming to the UK to work as religious workers for a religious organization.</li>
                    <li><span className='font-semibold'>Tier 5 (Youth Mobility Scheme):</span>  This category is for young individuals aged 18-40 from certain countries to live and work in the UK for up to two years.</li>
                    <li><span className='font-semibold'>Tier 5 (Government Authorised Exchange): </span> This category is for individuals coming to the UK for work experience, training, research, or an Overseas Government Language Programme. <br />Each subcategory of the Tier 5 Visa has specific eligibility criteria and requirements that applicants must meet. The Tier 5 Visa is designed to facilitate temporary work or activities in the UK and promote cultural exchange and collaboration.</li>
                </ul>
            </div>

            <div className="flex flex-col md:flex-row items-top mb-4 mt-5">
                <div className="md:w-full">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">4. Self-Sponsorship Visa:</h3>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        Self-sponsorship visas in the UK are available for individuals who wish to invest or start their own business in the country. This visa allows entrepreneurs to establish or take over a business in the UK. These visas require applicants to meet specific eligibility criteria, including having a viable business idea, access to sufficient funds, and meeting English language proficiency requirements.
                    </p>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        Self-sponsorship visas provide a pathway for ambitious individuals to pursue their entrepreneurial dreams in the UK and create opportunities for themselves and others. They offer a chance to make a positive impact on the business landscape and enrich the diverse entrepreneurial ecosystem in the UK.
                    </p>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-top mb-4 mt-5">
                <div className="md:w-1full">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">5. The Innovator Visa:</h3>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        The Innovator visa is for experienced businesspeople looking to establish an innovative business in the UK, while the Start-up Visa is for individuals starting a new business for the first time. Both visas offer the opportunity for entrepreneurs to build successful ventures in the UK and contribute to the country's economy
                    </p>
                </div>
            </div>
        </div>
    )
}

export default WorkerVisa