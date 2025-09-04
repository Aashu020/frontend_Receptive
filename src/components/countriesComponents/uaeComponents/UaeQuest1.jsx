
import React from 'react';
import { ShieldCheck, Gem, Building2, Home, Briefcase, GraduationCap, Star, Globe, TrendingUp, Users, HeartPulse, Banknote, Lock, FerrisWheel } from 'lucide-react';
import img from "../../../assets/images/uaevisa.jpg"
const Section = ({ icon, title, children }) => {
    const IconComponent = icon;
    return (
        <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
            {/* Left side: Icon + Title in a row */}
            <div className="flex items-center gap-3 sm:gap-4 md:gap-6 flex-shrink-0 pl-2 md:pl-0">
                <div className="bg-[#0C3B34] p-2 sm:p-3 md:p-4 rounded-full">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#D8C287]" />
                </div>
                <h2 className="text-2xl sm:text-xl md:text-2xl font-bold text-[#0C3B34] xl:text-3xl">
                    {title}
                </h2>
            </div>

            {/* Right side: Content */}
            <div className="flex-1 px-2 sm:px-4 md:px-2">
                <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 text-sm md:text-[15px] xl:text-lg">
                    {children}
                </div>
            </div>
        </div>

    );
};
const Section1 = ({ icon, title, children }) => {
    const IconComponent = icon;
    return (
        <div className="flex flex-col  gap-4 sm:gap-6 md:gap-8 mt-6 sm:mt-8 md:mt-12">
            {/* Left side: Icon + Title in a row */}
            <div className="flex items-center  gap-3 sm:gap-4 md:gap-6 flex-shrink-0 pl-2 md:pl-0">
                <div className="bg-[#0C3B34] p-2 sm:p-3 md:p-4 rounded-full">
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 lg:w-8 lg:h-8 text-[#D8C287]" />
                </div>
                <h3 className="text-lg text-center sm:text-xl md:text-2xl font-bold text-[#0C3B34] xl:text-3xl">
                    {title}
                </h3>
            </div>

            {/* Right side: Content */}
            <div className="flex-1 px-2 sm:px-4 md:px-2">
                <div className="prose prose-sm sm:prose-base md:prose-lg max-w-none text-gray-700 text-sm md:text-[15px] xl:text-lg">
                    {children}
                </div>
            </div>
        </div>

    );
};

import { useState, useRef } from 'react';

const BenefitCard = ({ number, title, text }) => {
    // Create a unique identifier for this specific card instance
    const cardId = useRef(`card-${Math.random().toString(36).substr(2, 9)}`).current;
    const [expanded, setExpanded] = useState(false);

    // Determine if text needs truncation based on screen size
    const getTruncationLength = () => {
        if (typeof window !== 'undefined') {
            return window.innerWidth >= 1024 ? 150 : 100; // lg breakpoint is 1024px
        }
        return 100; // fallback for SSR
    };
    
    const truncationLength = getTruncationLength();
    const shouldTruncate = text && text.length > truncationLength;
    const displayText = expanded || !shouldTruncate ? text : text.substring(0, truncationLength) + '...';

    const handleToggle = () => {
        setExpanded(prev => !prev);
    };

    return(
        <div 
            className="bg-white border border-gray-200 rounded-lg md:p-6 p-2 shadow-sm hover:shadow-lg transition-shadow duration-300"
            data-card-id={cardId}
        >
            <div className="flex items-center gap-4">
                <div className="flex-shrink-0 w-8 h-8 lg:w-12 lg:h-12 flex items-center justify-center rounded-full bg-[#D8C287]/10 border-2 border-[#D8C287]/30">
                    <span className="text-xl font-bold text-[#0C3B34]">{number}</span>
                </div>
                <h3 className="text-md font-semibold text-[#0C3B34] flex-1 text-left" style={{ wordSpacing: "4px" }}>{title}</h3>
            </div>
            <p className="mt-4 text-gray-600 md:text-[13px]">{displayText}</p>
            {shouldTruncate && (
                <button 
                    onClick={handleToggle}
                    className="mt-2 text-[#0C3B34] hover:text-[#D8C287] text-sm font-medium transition-colors duration-200"
                    type="button"
                >
                    {expanded ? 'Read Less' : 'Read More'}
                </button>
            )}
        </div>
    );
};

const UaeQuest1 = () => {
    const goldenVisaBenefits = [
        { title: "Long-Term Residency (10y)", text: "The UAE Golden Visa offers up to 10 years of residency, far surpassing the duration of standard visa options. This extended period provides a robust foundation for long-term personal and professional growth, essential for establishing deeper roots in the UAE. It opens up vast opportunities for career advancement and business growth that are typically unattainable with shorter visa terms. Furthermore, this prolonged residency enables individuals and their families to integrate more thoroughly into the UAE's community and cultural life. By fostering a stronger sense of belonging and a deeper understanding of local customs and traditions, the Golden Visa enhances the overall living experience, making it an exceptionally attractive option for potential residents." },
        { title: "Property Ownership Rights", text: "One of the notable advantages for UAE Golden Visa holders is the streamlined process for property ownership within the country. While foreign nationals are restricted to owning property in designated areas, Golden Visa holders benefit from an easier and more flexible process for purchasing and managing properties in these prime locations. The UAE's thriving global business and tourism sectors create a high-demand real estate market, making property investment particularly attractive. Although standard mortgage terms still apply, the stability offered by the long-term visa can positively impact lending decisions. This arrangement simplifies the expansion of property portfolios for Golden Visa holders, enabling them to capitalize on the robust real estate market in the UAE." },
        { title: "No Sponsorship Needed", text: "An exceptional feature of the UAE Golden Visa is its independence from the requirement of a local sponsor, distinguishing it from many other visa categories in the country. This autonomy is especially beneficial for entrepreneurs and investors as it empowers them with complete control over their business activities, eliminating the typical necessity of a local partnership. This freedom greatly streamlines the process of setting up and running businesses, providing entrepreneurs and investors with the flexibility and convenience that significantly boost their operational efficiency within the UAE's dynamic business environment." },
        { title: "Family and Domestic Workers Encompassment", text: "A notable aspect of the UAE Golden Visa is the provision to sponsor family members, encompassing spouses, children, and, in certain cases, parents and siblings. This feature enables families to reside together in the UAE, eliminating the need for individual visa applications for each member. This inclusivity serves as a significant advantage, strengthening familial ties and fostering a profound sense of security and belonging within the UAE. Moreover, Golden Visa holders have the opportunity to sponsor their domestic staff, which may include housemaids, drivers, and other household workers. This extension of sponsorship promotes a comprehensive and comfortable family living environment. Visa holders are required to adhere to the UAE's regulatory standards, ensuring they provide suitable accommodation and fair wages to their sponsored staff in compliance with local employment regulations." },
        { title: "Tax-Free Personal Income", text: "A significant advantage of living in the UAE, including for Golden Visa holders, is the absence of personal income tax. This nationwide policy ensures that all residents are exempt from paying taxes on income derived from employment, investments, or other personal sources. Furthermore, the UAE has implemented a highly competitive corporate tax rate of 12.5%, which is among the lowest globally and applies to businesses operating within the country. This minimal corporate tax rate further amplifies the financial benefits of living and conducting business in the UAE, enhancing its appeal as a prime destination for international business professionals and investors." },
        { title: "Enhanced Access to Opportunities", text: "The UAE Golden Visa offers unparalleled access to employment and business opportunities, presenting a significant advantage for entrepreneurs and skilled professionals. Renowned for its world-class infrastructure and amenities, the UAE boasts advanced technology ecosystems, cutting-edge healthcare facilities, and modern transportation networks, creating an environment conducive to business and professional development. Moreover, the streamlined process of establishing a business, coupled with the UAE's strategic geographical position at the nexus of major global trade routes, positions it as a premier destination for international entrepreneurs and professionals. This access opens up a myriad of possibilities for career progression and business expansion within a fiercely competitive and innovative global marketplace." },
        { title: "Multiple Entry Visa Privileges", text: "Moreover, the UAE Golden Visa Program promotes effortless global mobility by providing multiple entry privileges. This enables professionals to travel in and out of the country without the requirement of applying for a new visa with each departure. Such flexibility is especially beneficial for entrepreneurs and skilled individuals who need to uphold global connections. It also streamlines travel for their families, allowing them to maintain connections with their home countries and discover new destinations without the hassle of frequent visa applications. This seamless movement makes the UAE an optimal hub for individuals with international lifestyles and business engagements." },
        { title: "Freedom from Employment Restrictions", text: "A standout advantage of the UAE Golden Visa is the exemption from conventional employment restrictions that are typically imposed on other visa categories. This exemption offers Golden Visa holder’s unparalleled flexibility in the job market, enabling them to switch employers or pursue multiple job opportunities simultaneously without risking their visa status. This flexibility is especially beneficial for professionals looking to advance their careers through diverse experiences and those interested in supplementing their income through additional employment. Moreover, this exemption simplifies entrepreneurship, as Golden Visa holders can establish their own businesses while also holding employment elsewhere. This dual capacity is particularly advantageous in fostering a dynamic professional environment where individuals can simultaneously explore business ventures and employment opportunities, enriching their professional development and financial stability in the UAE." },
        { title: "Access to Healthcare Services", text: "The UAE Golden Visa provides families with access to a superior healthcare system, which plays a pivotal role in the country's high quality of life. Beneficiaries have the privilege of utilizing state-of-the-art medical facilities that are outfitted with cutting-edge technology and staffed by top-tier healthcare professionals. This access guarantees residents a range of advanced treatment options, offering them reassurance regarding their health and overall well-being." },
        { title: "Access to Educational Opportunities", text: "The UAE Golden Visa provides significant advantages for families with children, notably by expanding access to educational opportunities. This includes potential discounts on higher education, making it more financially feasible for families to access prestigious educational institutions. Golden Visa holders can take advantage of attending international university branches in Dubai, where students can engage in a wide range of academic disciplines and earn globally recognised degrees. This educational support highlights the UAE's dedication to fostering academic excellence and empowering families with the essential resources for their children's educational growth and future achievements." },
        { title: "Esaad Privilege Card", text: "n exclusive benefit reserved for select categories of UAE Golden Visa holders in Dubai is the complimentary Esaad Privilege Card. This card serves as a gateway to a diverse range of special perks and discounts that enhance both financial savings and lifestyle experiences. Cardholders can enjoy significant cost savings across various sectors, including automotive, real estate, healthcare, hospitality, health insurance, and banking services. For example, holders of the card may receive discounted rates on luxury vehicle purchases, preferential pricing on property transactions, reduced health insurance premiums, and savings at numerous hotels and recreational facilities. The inclusion of the Esaad Privilege Card substantially elevates the value of the UAE Golden Visa, providing a host of benefits that contribute to a more cost-effective and enriched lifestyle in Dubai." },
        { title: "Safe and Secure Living Environment", text: "One of the key advantages of the UAE Golden Visa is the chance to reside in a safe and secure environment. The UAE is recognized for its stringent safety protocols and minimal crime rates, offering residents a sense of tranquility and a secure living environment. In fact, Global Finance ranked it as the second safest country to live in for the year 2023." },
        { title: "Access to Premium Leisure", text: "Residing in the UAE provides access to top-tier leisure and entertainment options. The country boasts a plethora of world-class leisure and entertainment facilities, such as luxury shopping malls, fine dining establishments, cultural festivals, and sporting events. Access to these high-quality leisure activities not only enriches the residents' quality of life but also positions the UAE as a desirable destination for individuals and families seeking a well-rounded and fulfilling lifestyle." },
    ];

    return (
        <div className="min-h-screen p-0 sm:p-4 md:p-8 xl:px-[10rem]">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-4 sm:p-6 md:p-12 text-justify">

                    {/* Title */}
                    <div className="text-center mb-8 sm:mb-12">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl xl:text-4xl font-extrabold text-[#0C3B34]">
                            UAE Residence Visas
                        </h1>
                        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-3xl mx-auto xl:text-xl">
                            A comprehensive guide to understanding the different types of long-term residency permits in the United Arab Emirates.
                        </p>
                    </div>

                    {/* Intro Section */}
                    <div className="bg-[#0C3B34] text-white rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
                        <h2 className="text-lg sm:text-2xl md:text-xl lg:text-2xl xl:text-3xl font-bold text-[#D8C287] mb-3">
                            What Is a Residence Visa in the UAE?
                        </h2>
                        <div className="flex flex-col md:flex-row gap-4 items-center xl:items-start xl:gap-12 xl:pt-8">
                            <p className="opacity-90 text-sm sm:text-base md:flex-1 md:text-sm xl:text-xl">
                                A residence visa is a permit issued by the government of the United Arab Emirates (UAE)
                                that allows foreign nationals to reside in the country for a long period. In addition,
                                the residence visa in UAE can be valid for 1 to 10 years and can be renewed numerous times.
                                It’s required for various activities, such as opening a bank account, obtaining a driving
                                license, or working in the UAE.
                            </p>
                            <div className="w-full md:w-[45%] xl:w-[35%]">
                                <img src={img} alt="" className="w-full rounded-md" />
                            </div>
                        </div>
                    </div>

                    {/* Types Intro */}
                    <div className="rounded-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
                        <h2 className="text-xl sm:text-2xl md:text-lg font-bold text-[#0C3B34] mb-3 xl:text-2xl">
                            Understanding the Different Types of Residency Visas in UAE
                        </h2>
                        <p className="opacity-90 text-sm sm:text-base md:text-[15px] xl:text-lg">
                            The UAE offers a variety of residency visas, each with its own characteristics and validity period.
                            Unlike short-term options like tourist visas, residency visas typically have a validity period
                            between two to three years, with the potential for renewal extending up to ten years. <br /> <br />
                            It is essential to understand the differences between these types and to determine the most suitable
                            residency visa for your specific needs. Here is a more detailed overview of the various types of
                            residency visas available in the UAE:
                        </p>
                    </div>

                    {/* Golden Visa */}
                    <Section icon={Gem} title="1. UAE Golden Visa">
                        <p>
                            The UAE Golden Visa is a groundbreaking long-term residency program that offers exceptional
                            benefits to foreign talents, investors, and their families. This program goes beyond standard
                            visa perks, providing unique advantages such as property ownership rights, exemption from needing
                            a local sponsor, and access to world-class healthcare and education. Additionally, it offers
                            significant tax benefits. This strategic initiative is designed to attract skilled professionals,
                            thereby contributing to the UAE’s dynamic growth and enhancing its global standing.
                        </p>
                        <h3 className="text-xl sm:text-2xl font-bold text-center text-[#0C3B34] mt-6 sm:mt-8 mb-4 sm:mb-6 xl:text-3xl">
                            The Top 13 Benefits of the UAE Golden Visa
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 xl:text-2xl">
                            {goldenVisaBenefits.map((benefit,index) => (
                                <BenefitCard
                                    key={`${benefit.number}-${benefit.title}`} // More stable key
                                    number={index+1}
                                    title={benefit.title}
                                    text={benefit.text}
                                />
                            ))}
                        </div>
                    </Section>

                    {/* Other Visa Sections */}
                    <Section1 icon={Building2} title="Company Investor Visa">
                        <p>The UAE offers an Investor Visa for individuals looking to establish or invest in a company in the country. Here are some key details about the UAE Company Investor Visa:</p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]">
                            <li><strong>Eligibility:</strong> To qualify for the UAE Company Investor Visa, individuals must invest in a company in the UAE or establish their own business in the country.</li>
                            <li><strong>Investment Requirements:</strong> The specific investment requirements may vary depending on the emirate and type of business. Generally, investors are expected to make a significant financial investment in the company.</li>
                            <li><strong>Company Setup:</strong> Investors can choose to set up various types of companies in the UAE, such as Limited Liability Company (LLC), Free Zone Company, or Offshore Company, each with its own set of regulations and benefits.</li>
                            <li><strong>Visa Duration:</strong> The Investor Visa typically offers a residency permit for a specific duration, which can be renewed based on the investor's continued involvement in the company.</li>
                            <li><strong>Benefits:</strong> The Investor Visa provides individuals with the opportunity to live and work in the UAE, access to the local business environment, and potentially benefit from various incentives offered to investors.</li>
                            <li><strong>Process:</strong> The process of obtaining the UAE Company Investor Visa involves submitting the necessary documents, fulfilling the investment requirements, and obtaining approval from the relevant authorities.</li>
                            <li><strong>Consultation:</strong> It is advisable for investors to seek guidance from legal or business advisors familiar with UAE company setup and immigration laws to ensure a smooth and successful application process. <br /> Please note that specific details and requirements for the UAE Company Investor Visa may vary based on the emirate and type of business activity. It is recommended to consult official government sources or legal experts for the most up-to-date and accurate information.</li>
                        </ul>
                    </Section1>

                    <Section1 icon={Home} title="UAE Property Investor Visa">
                        <p>The UAE offers a Property Investor Visa for individuals looking to invest in real estate in the country. Here are some key details about the UAE Property Investor Visa:</p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]">
                            <li><strong>Eligibility:</strong> To qualify for the UAE Property Investor Visa, individuals must make a significant investment in real estate in the UAE.</li>
                            <li><strong>Investment Requirements:</strong> The specific investment threshold for the Property Investor Visa may vary depending on the emirate and type of property. Generally, investors are expected to invest a substantial amount in residential or commercial real estate.</li>
                            <li><strong>Property Ownership:</strong> Investors must provide proof of property ownership or investment in eligible real estate projects to qualify for the visa.</li>
                            <li><strong>Visa Duration:</strong> The Property Investor Visa typically offers a residency permit for a specific duration, which can be renewed based on the investor's continued property ownership or investment.</li>
                            <li><strong>Benefits:</strong> The Property Investor Visa provides individuals with the opportunity to reside in the UAE, potentially generate rental income from the property, and benefit from the country's real estate market trends.</li>
                            <li><strong>Process:</strong> The process of obtaining the UAE Property Investor Visa involves submitting the necessary documents, demonstrating property ownership or investment, and obtaining approval from the relevant authorities.</li>
                            <li><strong>Consultation:</strong> It is advisable for property investors to seek guidance from legal or real estate advisors familiar with UAE property investment regulations and visa requirements to ensure a smooth application process. <br /> Please note that specific details and requirements for the UAE Property Investor Visa may vary based on the emirate and type of real estate investment. It is recommended to consult official government sources or legal experts for the most up-to-date and accurate information.</li>
                        </ul>
                    </Section1>

                    <Section1 icon={Briefcase} title="UAE Employment Visa">
                        <p>The UAE Employment Visa, also known as the UAE Work Visa, is a permit issued to foreign nationals who have secured a job offer in the UAE and wish to work and reside in the country. Here are the complete details about the UAE Employment Visa:</p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]">
                            <li><strong>Eligibility:</strong> To qualify for the UAE Employment Visa, individuals must have a valid job offer from a company registered in the UAE. The job offer should meet the criteria set by the Ministry of Human Resources and Emiratisation (MOHRE).</li>
                            <li><strong>Employment Contract:</strong> A formal employment contract specifying the terms and conditions of employment, including job title, salary, benefits, and duration of employment, is required for the visa application.</li>
                            <li><strong>Medical Examination:</strong> Applicants are required to undergo a medical examination in the UAE or their home country to ensure they meet the health requirements set by the UAE authorities.</li>
                            <li><strong>Documentaion Requirement:</strong> The following documents are typically required for the UAE Employment Visa application:
                                <ul className='list-disc pl-4 sm:pl-6 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]'>
                                    <li>Valid passport </li>
                                    <li>Passport-sized photographs</li>
                                    <li>Educational certificates</li>
                                    <li>Experience certificates</li>
                                    <li>Medical fitness certificate </li>
                                    <li>No-objection certificate (if applicable)</li>
                                    <li>Copy of the job offer letter</li>
                                    <li>Emirates ID application form.</li>
                                </ul>
                            </li>
                            <li><strong>Visa Process:</strong> The employer in the UAE is usually responsible for initiating the visa process on behalf of the employee. The employer submits the necessary documents to the relevant authorities, such as the MOHRE and the General Directorate of Residency and Foreigners Affairs (GDRFA), for visa approval.</li>
                            <li><strong>Visa Duration:</strong> The UAE Employment Visa is typically issued for a specific period, usually two or three years, depending on the employment contract. The visa can be renewed upon completion of the initial term.</li>
                            <li><strong>Work Permit: </strong>Upon arrival in the UAE, the employee must complete the necessary procedures to obtain a residency permit (labor card) and Emirates ID, which are essential for legal employment in the country.</li>
                            <li><strong>Family Sponsorship:</strong> Employees holding a UAE Employment Visa may be eligible to sponsor their family members for residency in the UAE, subject to meeting the sponsorship requirements. <br /> It is essential for individuals seeking a UAE Employment Visa to comply with the regulations and procedures set by the UAE authorities to ensure a smooth and successful visa application process. It is recommended to seek guidance from the employer or legal professionals familiar with UAE immigration laws for accurate and up-to-date information.</li> <br />
                        </ul>
                    </Section1>

                    <Section1 icon={GraduationCap} title="UAE Student Visa">
                        <p>The UAE Student Visa, also known as the UAE Student Residence Visa, is a permit issued to foreign students who wish to pursue their education at a recognized educational institution in the UAE. Here are the complete details about the UAE Student Visa:</p>
                        <ul className="list-disc pl-4 sm:pl-6 mt-3 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]">
                            <li><strong>Eligibility:</strong> To qualify for the UAE Student Visa, individuals must have been accepted into a recognized educational institution in the UAE and have proof of enrollment or admission.</li>
                            <li><strong>Sponsorship:</strong> Students under the age of 18 are typically sponsored by their parents or legal guardians. For students over 18, the educational institution or a UAE resident can act as their sponsor for the visa application.</li>
                            <li><strong>Documentaion Requirement:</strong> The following documents are typically required for the UAE Student Visa application:
                                <ul className='list-disc pl-4 sm:pl-6 mt-2 sm:mt-3 space-y-1 sm:space-y-2 text-sm sm:text-base md:text-[14px] xl:text-[16px]'>
                                    <li>Valid passport </li>
                                    <li>Passport-sized photographs</li>
                                    <li>Acceptance letter from the educational institution</li>
                                    <li>Proof of financial means to cover tuition fees and living expenses</li>
                                    <li>Medical fitness certificate </li>
                                    <li>No-objection certificate (if applicable)</li>
                                    <li>Emirates ID application form.</li>
                                </ul>
                            </li>
                            <li><strong>Visa Process:</strong> The educational institution in the UAE is usually responsible for initiating the visa process on behalf of the student. The institution submits the necessary documents to the General Directorate of Residency and Foreigners Affairs (GDRFA) for visa approval.</li>
                            <li><strong>Visa Duration:</strong> The UAE Student Visa is typically issued for the duration of the academic program, which may vary depending on the course of study. The visa can be renewed annually as long as the student remains enrolled in the educational institution.</li>
                            <li><strong>Work Opportunities:</strong> Students holding a UAE Student Visa are generally not allowed to work in the UAE unless they obtain a separate work permit as per the regulations set by the authorities.</li>
                            <li><strong>Accommodation:</strong> Some educational institutions in the UAE provide accommodation facilities for international students, while others may require students to arrange their own housing.</li>
                            <li><strong> Family Sponsorship::</strong> Students on a UAE Student Visa may be eligible to sponsor their family members for short-term visits to the UAE, subject to meeting the sponsorship requirements. <br /> It is important for students seeking a UAE Student Visa to comply with the regulations and procedures set by the UAE authorities to ensure a successful visa application process. It is recommended to communicate with the educational institution or seek guidance from legal professionals familiar with UAE immigration laws for accurate and up-to-date information.</li>
                        </ul>
                    </Section1>

                </div>
            </div>
        </div>
    );
};

export default UaeQuest1;
