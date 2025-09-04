import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection';
import canadaFlag from "../../assets/flags/canadaflag.jpg"
import CountrySection from '../../components/countriesComponents/CountrySection';
import CanadianVisitorDocs from '../../components/countriesComponents/canadaComponents/CanadianVisitorDocs';
import SkilledImmigration from '../../components/countriesComponents/canadaComponents/SkilledImmigration';
import WorkPermitCanada from '../../components/countriesComponents/canadaComponents/WorkPermitCanada';
import ObtainWorkPermitCanada from '../../components/countriesComponents/canadaComponents/ObtainWorkPermitCanada';
import helpimage from "../../assets/images/help.jpg"
import canimg from "../../assets/images/can.jpg"
import img from "../../assets/images/canada.jpeg"
const Canada = () => {

    const docsData = [
        {
            title: "Valid Passport",
            description:
                "Your passport is your ticket to international travel and for your Canadian visitor visa application, it must be valid for the entire duration of your stay in Canada. Be sure to check that your passport has a minimum of two blank pages for visa stamps. Make sure your passport is up to date and ready for your Canadian adventure.",
        },
        {
            title: "Visa Application Form",
            description:
                "Filling out the correct visa application form is a crucial part of the process. The form you need to complete may differ based on the type of visit visa you are seeking (such as tourist, business, or family visit). It is essential to ensure that all the information you provide is accurate and aligns with the details on your supporting documents. Be thorough and double-check your application form to avoid any errors.",
        },
        {
            title: "Passport-Sized Photographs",
            description:
                "Include recent passport-sized photographs with white backgrounds. Follow the specifications outlined by the Canadian authorities to avoid any delays in your application process.",
        },
        {
            title: "Proof of Financial Support",
            description:
                "Show that you have the financial means to support yourself while in Canada. You can do this by submitting bank statements, income tax returns, or a letter of sponsorship from your Canadian host, if applicable. Providing evidence of your financial stability is an important part of your visa application process.",
        },
        {
            title: "Travel Itinerary",
            description:
                "Outline your travel itinerary by including details such as flight reservations, accommodation bookings, and a tentative schedule of activities during your stay in Canada. Providing a comprehensive plan of your travel arrangements is essential for your visa application process.",
        },
        {
            title: "Purpose of Visit",
            description:
                "Clearly explain the reason for your visit and submit supporting documents to validate your intentions. For instance, if you are visiting family or friends, include an invitation letter from your host that outlines your relationship with them and the planned duration of your visit. Providing relevant documentation will strengthen your visa application.",
        },
        {
            title: "No Criminal Record Certificate",
            description:
                "Some applicants may be required to provide a police clearance certificate or a police report to demonstrate good character and a clean criminal record.",
        },
        {
            title: "Travel Insurance",
            description:
                "Although not obligatory, it is strongly advised to have travel insurance. It provides financial security in the event of unforeseen medical emergencies or trip cancellations, offering peace of mind during your travels.",
        },
        {
            title: "Proof of Ties to Your Home Country",
            description:
                "To show your intent to return to your home country after your visit, provide evidence of strong ties, such as employment letters, property ownership, or family commitments.",
        },
        {
            title: "Additional Documents as Required",
            description:
                "Depending on the nature of your visit, you may need additional documents such as a letter of employment, business invitation, or academic enrolment letter.",
        },
    ];

    const docsData2 = [
        {
            title: "Determine Your Eligibility:",
            description:
                "Before starting the application process, confirm your eligibility for a Canadian visitor visa. Most visitors from countries outside Canada need a visitor visa to enter the country. Check if your home country is on the list of visa-required countries and ensure you meet the other eligibility criteria established by the Canadian government."
        },
        {
            title: "Documentation:",
            description:
                "Gather all the required documents to support your visa application. These usually consist of a valid passport, completed visa application form, passport-sized photographs, evidence of financial support, travel itinerary, purpose of visit documents, police clearance certificate (if necessary), recommended travel insurance, and proof of connections to your home country.",
        },
        {
            title: "Complete the Online Application:",
            description:
                "Register an account on the official website of Immigration, Refugees, and Citizenship Canada (IRCC) and complete the visitor visa application form (IMM 5257). Ensure that the information you provide is accurate and current to prevent any delays or potential rejection of your application.",
        },
        {
            title: "Application Fee:",
            description:
                "Pay the required visa application fee using the designated payment method. Fees may vary depending on the type of visit visa and your nationality. Ensure that you keep a copy of the payment receipt for your records.",
        },
        {
            title: "Attend the Visa Interview (if required):",
            description:
                "In certain instances, applicants may be required to participate in a visa interview at the Canadian consulate or embassy in their home country. Get ready for the interview by thoroughly reviewing your application and supporting documents. Be prepared to respond to inquiries regarding your travel intentions and connections to your home country.",
        },
        {
            title: "Receive Visa:",
            description:
                "Following the submission of your application and attendance at the interview (if required), please allow for the visa processing to be finalized. Processing times may differ based on factors like application volume and specific circumstances. You can monitor the status of your application online via the IRCC website.",
        },
    ];
    const programsData = [
        {
            title: "Federal Skilled Worker Program (FSWP)",
            points: [
                "Have at least one year of continuous full-time or equivalent part-time work experience in a skilled occupation within the last 10 years.",
                "Meet the minimum language requirements in English or French.",
                "Have a valid Educational Credential Assessment (ECA) if educated outside of Canada.",
                "Score a minimum number of points based on factors such as age, education, work experience, language proficiency, and adaptability.",
            ],
        },
        {
            title: "Federal Skilled Trades Program (FSTP)",
            points: [
                "Have at least two years of full-time work experience in a skilled trade within the last five years.",
                "Meet the minimum language requirements in English or French.",
                "Have a valid job offer in a skilled trade (or a certificate of qualification in that skilled trade issued by a Canadian authority).",
            ],
        },
        {
            title: "Canadian Experience Class (CEC)",
            points: [
                "Have at least one year of skilled work experience in Canada within the last three years.",
                "Meet the minimum language requirements in English or French.",
                "Plan to live outside the province of Quebec.",
            ],
        },
    ];

    return (
        <>
            <HeroSection
                title="Canada"
                subtitle="Canada is a country in North America. It is known for its vast landscapes, multicultural cities, and friendly people. Canada offers a high quality of life, excellent education and healthcare systems, and a strong economy. Popular destinations include Toronto, Vancouver, Montreal, and the stunning natural beauty of places like Banff and Jasper National Parks."
                bgImage={img}
               
        flag={canadaFlag}   // <-- pass the flag here
            />

            <CountrySection
                countryName="Canada"
                mainTitle={`Relocate to Canada with Ease`}
                title={
                    <>
                        Explore the beauty of Canada with ease by obtaining a visitor/tourist visa. Our temporary visa allows you to immerse yourself in the stunning landscapes and vibrant culture of Canada for up to six months. Simply apply online, provide proof of your intention to return home, and demonstrate financial stability. With a visitor/tourist visa, you can travel and explore Canada, but remember, no working or studying allowed. Start your Canadian adventure today with our hassle-free visa application process.
                    </>
                }
                desc={
                    <>
                        To incorporate the provided text into the CountrySection component for Canada while addressing the issues with country-specific images and the navbar gap on small devices, here’s a description of the solution without code:
                    </>
                }
                img={canimg}
            />

            <CanadianVisitorDocs
                title="Essential Documents for Canadian Visitor / Tourist Visa:"
                points={docsData}
                image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
            />

            <CanadianVisitorDocs
                title="How will Receptive Immigration help you?"
                points={docsData2}
                image={helpimage}
            />

            <SkilledImmigration
            />
            <WorkPermitCanada/>
            <ObtainWorkPermitCanada/>
        </>
    )
}

export default Canada

