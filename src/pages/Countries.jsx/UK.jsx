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
        <title>UK Immigration & Visa | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore UK immigration services, work visas, study visas, visitor visas, and relocation guidance with Receptive Solutions. Trusted consultants for United Kingdom migration."
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/country/uk"
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
                "name": "United Kingdom",
                "item": "https://www.receptivesolutions.co.in/country/uk"
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
            "name": "UK Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/uk",
            "description": "Learn about UK visas, immigration pathways, work permits, study opportunities, and relocation assistance with Receptive Solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "United Kingdom",
              "image": "https://www.receptivesolutions.co.in/assets/uk.jpg"
            }
          }
          `}
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
