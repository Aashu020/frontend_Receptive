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
                {/* ✅ SEO Title */}
                <title>Canada Immigration & Visa Programs | Receptive Solutions</title>

                {/* ✅ Meta Description */}
                <meta
                    name="description"
                    content="Explore Receptive Solutions’ expert guidance for Canada immigration. Learn about Express Entry, Work Permit, Start-Up Visa, PNP programs, and more for your Canadian PR journey."
                />

                {/* ✅ Canonical */}
                <link rel="canonical" href="https://www.receptivesolutions.co.in/country/canada" />

                {/* ✅ Breadcrumb Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
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
                    })}
                </script>

                {/* ✅ WebPage + Country Schema */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": ["WebPage", "CollectionPage"],
                        "name": "Canada Immigration & Visa Services | Receptive Solutions",
                        "url": "https://www.receptivesolutions.co.in/country/canada",
                        "description":
                            "Comprehensive guide for Canadian immigration and visa services by Receptive Solutions. Learn about Express Entry, Skilled Worker, Work Permits, Start-Up Visa, PNP, and more.",
                        "inLanguage": "en",
                        "about": {
                            "@type": "Country",
                            "name": "Canada",
                            "url": "https://en.wikipedia.org/wiki/Canada"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Receptive Solutions",
                            "url": "https://www.receptivesolutions.co.in/",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
                            },
                            "sameAs": [
                                "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
                                "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
                                "https://www.youtube.com/@receptivegroup",
                                "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
                            ]
                        }
                    })}
                </script>

                {/* ✅ Service Schema – Canada Immigration Programs */}
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Service",
                        "serviceType": "Canada Immigration & Visa Consulting",
                        "provider": {
                            "@type": "Organization",
                            "name": "Receptive Solutions",
                            "url": "https://www.receptivesolutions.co.in/",
                            "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
                        },
                        "areaServed": {
                            "@type": "Country",
                            "name": "Canada"
                        },
                        "hasOfferCatalog": {
                            "@type": "OfferCatalog",
                            "name": "Canada Immigration Programs",
                            "itemListElement": [
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Canada Express Entry Program",
                                        "description":
                                            "Fast-track skilled worker immigration system managing Federal Skilled Worker, Skilled Trades, and Canadian Experience Class applications."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Canada Work Permit & Employment Visa",
                                        "description":
                                            "Temporary and open work permit options for skilled professionals, students, and accompanying spouses."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Canada Start-Up Visa Program",
                                        "description":
                                            "Permanent residence pathway for entrepreneurs supported by Canadian venture capital funds or business incubators."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Atlantic Immigration Program (AIP)",
                                        "description":
                                            "Employer-driven immigration program for skilled workers and graduates in Atlantic provinces – Nova Scotia, New Brunswick, PEI, Newfoundland & Labrador."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Saskatchewan Immigrant Nominee Program (SINP)",
                                        "description":
                                            "Provincial Nominee Program offering skilled worker, entrepreneur, and international graduate streams for Canadian PR."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "British Columbia PNP (BC PNP)",
                                        "description":
                                            "Provincial Nominee Program for skilled workers, healthcare professionals, international graduates, and entrepreneurs to settle in BC."
                                    }
                                },
                                {
                                    "@type": "Offer",
                                    "itemOffered": {
                                        "@type": "Service",
                                        "name": "Alberta Tech Pathway Program",
                                        "description":
                                            "Accelerated immigration route for tech professionals with Alberta job offers in eligible industries."
                                    }
                                }
                            ]
                        }
                    })}
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
