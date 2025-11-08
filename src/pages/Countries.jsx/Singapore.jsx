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
        {/* ✅ SEO Title */}
        <title>Work in Singapore | S-Pass & Employment Pass Visa Guidance | Receptive Solutions</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Build your career in Singapore with Receptive Solutions. Expert guidance for S-Pass and Employment Pass (E Pass) visa applications, documentation, and employer matching to help professionals work and thrive in Singapore."
        />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.receptivesolutions.co.in/country/singapore" />

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
                "name": "Singapore",
                "item": "https://www.receptivesolutions.co.in/country/singapore"
              }
            ]
          })}
        </script>

        {/* ✅ WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "Singapore Work & Visa Consultancy | S-Pass & Employment Pass Support",
            "url": "https://www.receptivesolutions.co.in/country/singapore",
            "description":
              "Receptive Solutions helps professionals secure Singapore S-Pass and Employment Pass (E Pass) visas with expert documentation, employer matching, and immigration guidance.",
            "inLanguage": "en",
            "about": {
              "@type": "Country",
              "name": "Singapore",
              "url": "https://en.wikipedia.org/wiki/Singapore"
            },
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
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

        {/* ✅ Service Schema – Singapore Work Visa Assistance */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Singapore Work Visa Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
            },
            "areaServed": { "@type": "Country", "name": "Singapore" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Singapore Visa Categories",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "S-Pass Visa Assistance",
                    "description":
                      "Guidance for mid-skilled professionals applying for Singapore S-Pass including eligibility check, employer coordination, and documentation support."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Employment Pass (E Pass) Application Support",
                    "description":
                      "Full-service assistance for professionals, executives, and business owners applying for Singapore Employment Pass (E Pass)."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Temporary Employment Permit Consulting",
                    "description":
                      "Consulting support for applicants seeking short-term work opportunities or temporary permits in Singapore’s thriving economy."
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
