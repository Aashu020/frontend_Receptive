import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import img from '../../assets/images/singapore.jpg'
import singapore from '../../assets/flags/sinagpore.jpg'
import CountrySection from '../../components/countriesComponents/CountrySection'
import singimg from '../../assets/images/sing.jpg'
import SingaporeEPass from '../../components/countriesComponents/Singapore/Epass'
import { Helmet } from 'react-helmet-async'

const Singapore = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>Singapore Immigration & Work Pass | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore Singapore immigration, Employment Pass (E-Pass), S-Pass, and work visa guidance with Receptive Solutions. Build your career in one of Asia’s strongest economies."
        />

        {/* ✅ Canonical */}
        <link 
          rel="canonical" 
          href="https://www.receptivesolutions.co.in/country/singapore" 
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
                "name": "Singapore",
                "item": "https://www.receptivesolutions.co.in/country/singapore"
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
            "name": "Singapore Work Visa & Immigration Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/singapore",
            "description": "Learn about Singapore E-Pass, S-Pass, and immigration opportunities with Receptive Solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "Singapore",
              "image": "https://www.receptivesolutions.co.in/assets/singapore.jpg"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ✅ PAGE CONTENT */}
      <div>
        <HeroSection
          title="Singapore"
          subtitle="Singapore is a global hub for finance, technology, and innovation. Known for its safety, modern skyline, and strong economy, it offers excellent career opportunities for skilled professionals."
          bgImage={img}
          flag={singapore}
        />

        <CountrySection
          countryName="SINGAPORE"
          mainTitle="Build Your Future in Singapore"
          title={
            <>
              Singapore offers excellent opportunities for skilled workers, professionals, and students. Its competitive job market, high quality of life, and world-class infrastructure make it one of the top destinations for global talent.
            </>
          }
          desc={
            <>
              Singapore’s S-Pass and Employment Pass (E-Pass) programs allow skilled and mid-skilled professionals to work and thrive in the country’s dynamic economy.  
              <br /><br />
              The S-Pass is ideal for mid-skilled workers such as technicians and specialists. It provides:
              <ul>
                <li>✅ Legal permission to work in Singapore</li>
                <li>✅ Flexible employment (can switch employers under valid rules)</li>
                <li>✅ Eligibility for bringing dependents (for eligible holders)</li>
              </ul>
              <br />
              With a transparent immigration system, competitive salaries, and excellent working conditions, Singapore remains one of the best places to build a successful career.
              <br /><br />
              Receptive Solutions offers expert guidance for S-Pass & E-Pass applications, documentation, employer matching, and complete visa filing support.
            </>
          }
          img={singimg}
        />

        <SingaporeEPass />
      </div>
    </>
  )
}

export default Singapore
