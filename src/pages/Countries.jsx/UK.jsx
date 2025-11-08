import React from 'react'
import img from "../../assets/images/uk.jpg"
import Ukflag from "../../assets/flags/ukFlag.jpg"
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
import UkVisaTypes from '../../components/countriesComponents/ukComponents/UkVisaTypes'
import UkVistior from '../../components/countriesComponents/ukComponents/UkVistior'
import WorkerVisa from '../../components/countriesComponents/ukComponents/WorkerVisa'
import { Helmet } from 'react-helmet-async';

const UK = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        {/* ✅ SEO Title */}
        <title>UK Immigration, Work & Study Visa Consultancy | Receptive Solutions</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Apply for UK Study, Work, Skilled Worker, Visitor, or Innovator Visas with expert guidance from Receptive Solutions. Trusted UK immigration consultants helping professionals, students & entrepreneurs settle in the UK."
        />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/country/uk"
        />

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
                "name": "United Kingdom",
                "item": "https://www.receptivesolutions.co.in/country/uk"
              }
            ]
          })}
        </script>

        {/* ✅ WebPage + Country Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "United Kingdom Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/uk",
            "description":
              "Explore UK visa programs including Student, Skilled Worker, Visitor, Innovator, and Self-Sponsorship visas. Receptive Solutions provides expert guidance for smooth UK immigration and relocation.",
            "inLanguage": "en",
            "about": {
              "@type": "Country",
              "name": "United Kingdom",
              "url": "https://en.wikipedia.org/wiki/United_Kingdom"
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

        {/* ✅ Service Schema – UK Visa & Immigration Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "UK Immigration & Visa Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United Kingdom"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "United Kingdom Visa Categories",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Student Visa",
                    "description":
                      "Get expert guidance for UK Study Visa (Tier 4) applications — including admission support, document review, and visa filing assistance."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Visitor Visa",
                    "description":
                      "Assistance with UK Visitor Visa applications for tourism, business, or family visits. Includes document preparation and travel guidance."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Skilled Worker Visa",
                    "description":
                      "Tier 2 Skilled Worker Visa support for professionals seeking sponsorship-based employment opportunities in the UK."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Temporary Worker (Tier 5) Visa",
                    "description":
                      "End-to-end guidance for Tier 5 visas including Creative & Sporting, Charity Worker, and Youth Mobility Scheme categories."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Self-Sponsorship Visa",
                    "description":
                      "Advisory and documentation services for entrepreneurs establishing or acquiring businesses in the UK through self-sponsorship route."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "UK Innovator & Start-up Visa",
                    "description":
                      "Consultation and business plan assistance for Innovator and Start-Up Visa applicants establishing innovative ventures in the UK."
                  }
                }
              ]
            }
          })}
        </script>
      </Helmet>


      {/* ✅ PAGE CONTENT */}
      <div>
        <HeroSection
          title="United Kingdom"
          subtitle="The UK is known for its rich heritage, world-class education system, diverse culture, and iconic landmarks such as Buckingham Palace and the Tower of London. Explore immigration and visa opportunities with Receptive Solutions."
          bgImage={img}
          flag={Ukflag}
        />

        <CountrySection
          countryName="UNITED KINGDOM"
          title='"Travel to the UK for work, studies, tourism, and permanent residence. Fulfil your dream of becoming a UK resident."'
          mainTitle="Settle in the UK from any part of the world!"
          desc={`
            The United Kingdom offers a wealth of opportunities for individuals looking to relocate, study, or build a long-term career. From vibrant cities like London, Manchester, and Edinburgh to picturesque countryside villages, the UK combines modern living with historic charm.

            With world-renowned universities, a strong and innovative economy, and an inclusive cultural environment, the UK attracts talent from around the globe. Whether your goal is to study, work, reunite with your family, or invest in a business, we are here to guide you through the UK immigration process.

            As an experienced immigration consultancy, Receptive Solutions helps applicants navigate complex visa requirements, documentation, and application stages. Let us help you achieve your aspiration of living in the United Kingdom with smooth, professional assistance.
          `}
          img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1170&q=80"
        />

        <UkVisaTypes />
        <UkVistior />
        <WorkerVisa />
      </div>
    </>
  )
}

export default UK
