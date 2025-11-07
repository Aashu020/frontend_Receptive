import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import img from '../../assets/images/australia.jpg'
import AusFlag from "../../assets/flags/ausnew.jpg"
import CountrySection from '../../components/countriesComponents/CountrySection'
import ausimg from '../../assets/images/aus.jpg'
import VisitervisaAus from '../../components/countriesComponents/Asutralia/VisitervisaAus'
import Subclass400 from '../../components/countriesComponents/Asutralia/Subclass400'
import Subclass186 from '../../components/countriesComponents/Asutralia/Subclass186'
import AotherinfoAus from '../../components/countriesComponents/Asutralia/AotherinfoAus'
import Subclass from '../../components/countriesComponents/Asutralia/Subclass'
import { Helmet } from 'react-helmet-async'

const Australia = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Australia Immigration & Visa | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore immigration pathways, Australian work visas, study visas, visitor visas, and PR options with Receptive Solutions. Begin your journey to Australia with expert guidance."
        />

        {/* ✅ Canonical */}
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/country/australia"
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
                "name": "Australia",
                "item": "https://www.receptivesolutions.co.in/country/australia"
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
            "name": "Australia Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/australia",
            "description": "Learn about Australian visas, immigration pathways, skilled migration, work permits, and permanent residency options with Receptive Solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "Australia",
              "image": "https://www.receptivesolutions.co.in/assets/australia.jpg"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ✅ PAGE CONTENT */}
      <div>
        <HeroSection
          title="Australia"
          subtitle="Australia is known for its high quality of life, strong economy, world-class education system, and stunning landscapes. Explore pathways to visit, work, study, or settle in Australia with the support of Receptive Solutions."
          bgImage={img}
          flag={AusFlag}
        />

        <CountrySection
          countryName="AUSTRALIA"
          mainTitle="Relocate to Australia with Confidence"
          title={
            <>
              Discover opportunities to work, study, visit, or build a long-term future in Australia. Our expert consultants help you navigate every step of your immigration journey.
            </>
          }
          desc={
            <>
              Australia is one of the most desirable destinations for immigration due to its robust economy, multicultural society, and excellent healthcare and education systems. The country ranks among the top globally in terms of quality of life, safety, and career opportunities.
              <br /><br />
              Skilled professionals from around the world choose Australia for its strong job market, particularly in industries such as engineering, IT, construction, healthcare, hospitality, and education. With multiple visa pathways—including skilled migration, employer-sponsored visas, student visas, and temporary work permits—Australia offers diverse options for individuals and families.
              <br /><br />
              Receptive Solutions provides full guidance on Australian visa requirements, documentation, eligibility, and the complete application process. Whether you're planning to visit Australia temporarily or explore pathways toward permanent residency, our team ensures an informed and stress-free experience.
            </>
          }
          img={ausimg}
        />

        <VisitervisaAus />
        <Subclass400 />
        <Subclass />
        <Subclass186 />
        <AotherinfoAus />
      </div>
    </>
  )
}

export default Australia
