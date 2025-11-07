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
import CanadaStartUpVisaInfo from '../../components/countriesComponents/canadaComponents/CanadaStartUpVisaInfo';
import CanadaAtlanticImmigrationProgram from '../../components/countriesComponents/canadaComponents/CanadaAtlanticImmigrationProgram';
import BCPNPComponent from '../../components/countriesComponents/canadaComponents/BCPNPComponent';
import AlbertaProgram from '../../components/countriesComponents/canadaComponents/AlbertaProgram';
import ContactForm from '../../components/ContactForm';
import { Helmet } from 'react-helmet-async';

const Canada = () => {

    return (
        <>
            {/* ✅ SEO Metadata */}
            <Helmet>
                <title>Canada Immigration & Visa | Receptive Solutions</title>

                <meta
                    name="description"
                    content="Explore Canada immigration pathways, skilled worker programs, visitor visas, work permits, and relocation assistance with Receptive Solutions. Start your journey to Canada today."
                />

                {/* ✅ Canonical */}
                <link
                    rel="canonical"
                    href="https://www.receptivesolutions.co.in/country/canada"
                />

                {/* ✅ Breadcrumb Schema */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "BreadcrumbList",
                      "itemListElement": [
                        {
                          "@type": "ListItem",
                          "position": 1,
                          "name": "Home",
                          "item": "https://www.receptivesolutions.co.in/"
                        },
                        {
                          "@type": "ListItem",
                          "position": 2,
                          "name": "Countries",
                          "item": "https://www.receptivesolutions.co.in/country"
                        },
                        {
                          "@type": "ListItem",
                          "position": 3,
                          "name": "Canada",
                          "item": "https://www.receptivesolutions.co.in/country/canada"
                        }
                      ]
                    }
                `}
                </script>

                {/* ✅ WebPage Schema */}
                <script type="application/ld+json">
                    {`
                    {
                      "@context": "https://schema.org",
                      "@type": "WebPage",
                      "name": "Canada Immigration & Visa Services | Receptive Solutions",
                      "url": "https://www.receptivesolutions.co.in/country/canada",
                      "description": "Find details about Canada immigration programs, visitor visas, work permits, and skilled migration pathways with expert guidance from Receptive Solutions.",
                      "inLanguage": "en",
                      "isPartOf": {
                        "@type": "WebSite",
                        "url": "https://www.receptivesolutions.co.in/"
                      },
                      "about": {
                        "@type": "Place",
                        "name": "Canada",
                        "image": "https://www.receptivesolutions.co.in/assets/canada.jpeg"
                      }
                    }
                `}
                </script>
            </Helmet>

            <div>
                {/* ✅ HERO SECTION */}
                <HeroSection
                    title="Canada"
                    subtitle="Canada is known for its breathtaking landscapes, multicultural society, strong economy, and high standard of living. From Toronto to Vancouver, explore opportunities for education, work, and immigration."
                    bgImage={img}
                    flag={canadaFlag}
                />

                {/* ✅ COUNTRY INTRO SECTION */}
                <CountrySection
                    countryName="CANADA"
                    mainTitle="Relocate to Canada with Ease"
                    title={
                        <>
                            Discover Canada’s natural beauty, world-class education, and numerous career opportunities. Whether you're planning to visit temporarily or start the journey toward permanent residence, Canada provides welcoming pathways for individuals and families.
                        </>
                    }
                    desc={
                        <>
                            Begin your Canadian journey with expert visa assistance. Whether you’re applying for a visitor visa, work permit, skilled worker program, or exploring PR options, Receptive Solutions ensures a smooth and guided immigration process.
                        </>
                    }
                    img={canimg}
                />

                {/* ✅ VISITOR VISA DOCUMENTS */}
                <CanadianVisitorDocs
                    id="canada-tourist"
                    title="Essential Documents for Canadian Visitor / Tourist Visa:"
                    points={[
                        { title: "Valid Passport", description: "Your passport must be valid for the duration of your stay with at least two blank pages." },
                        { title: "Visa Application Form", description: "Submit accurately filled forms based on the visa category (tourist, business, or family visit)." },
                        { title: "Passport-Sized Photographs", description: "Recent photographs with white background following IRCC specifications." },
                        { title: "Proof of Financial Support", description: "Submit bank statements, tax returns, or sponsorship letters to prove funds." },
                        { title: "Travel Itinerary", description: "Flight bookings, accommodation, and trip schedule." },
                        { title: "Purpose of Visit", description: "Invitation letter or documents supporting your visit plan." },
                        { title: "No Criminal Record Certificate", description: "Police clearance may be required for certain applicants." },
                        { title: "Travel Insurance", description: "Highly recommended to cover medical or travel emergencies." },
                        { title: "Proof of Ties to Home Country", description: "Employment, property, or family documents showing you will return." },
                        { title: "Additional Documents", description: "Employment letters, business invitations, study enrollment, etc." },
                    ]}
                    image="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80"
                />

                {/* ✅ HOW WE HELP */}
                <CanadianVisitorDocs
                    title="How Receptive Solutions Helps You?"
                    points={[
                        { title: "Determine Eligibility", description: "We help you understand visa requirements and determine your eligibility." },
                        { title: "Documentation Support", description: "Full assistance in preparing and reviewing every required document." },
                        { title: "Online Application Assistance", description: "Guidance for completing IRCC forms without errors." },
                        { title: "Interview Preparation", description: "Practice sessions for visa interviews (if required)." },
                        { title: "Tracking & Updates", description: "We track your application and keep you updated until decision." },
                    ]}
                    image={helpimage}
                />

                <SkilledImmigration />
                <WorkPermitCanada />
                <ObtainWorkPermitCanada />
                <CanadaStartUpVisaInfo />
                <CanadaAtlanticImmigrationProgram />
                <BCPNPComponent />
                <AlbertaProgram />
                <ContactForm />
            </div>
        </>
    )
}

export default Canada
