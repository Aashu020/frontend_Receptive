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
        {/* ✅ SEO Title */}
        <title>Work, Study & Migrate to Australia | Visa Guidance & PR Pathways | Receptive Solutions</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Migrate to Australia confidently with Receptive Solutions. Expert visa consultancy for Skilled Migration, Employer-Sponsored Visas, Subclass 186 & Subclass 400 programs, and pathways to Australian Permanent Residency."
        />

        {/* ✅ Canonical URL */}
        <link rel="canonical" href="https://www.receptivesolutions.co.in/country/australia" />

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
                "name": "Australia",
                "item": "https://www.receptivesolutions.co.in/country/australia"
              }
            ]
          })}
        </script>

        {/* ✅ WebPage + Country Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "Australia Immigration, Work & PR Visa Guidance | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/australia",
            "description":
              "Receptive Solutions provides expert immigration assistance for Australia, including Skilled Migration, Employer Nomination (Subclass 186), and Temporary Work (Subclass 400) visas.",
            "inLanguage": "en",
            "about": {
              "@type": "Country",
              "name": "Australia",
              "url": "https://en.wikipedia.org/wiki/Australia"
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

        {/* ✅ Service Schema – Australian Visa & Immigration Assistance */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Australia Immigration & Visa Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
            },
            "areaServed": { "@type": "Country", "name": "Australia" },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "Australian Visa Categories",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Subclass 186 – Employer Nomination Scheme Visa",
                    "description":
                      "Permanent residency visa for skilled workers nominated by an approved Australian employer under Direct Entry, Temporary Residence Transition, or Labor Agreement streams."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Subclass 400 – Temporary Work (Short Stay Specialist) Visa",
                    "description":
                      "Temporary visa allowing individuals to undertake short-term, highly specialized work in Australia for 3–6 months."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Skilled Migration & Employer Sponsored Visas",
                    "description":
                      "Full assistance with skilled migration, employer sponsorships, and documentation required for permanent residency eligibility."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Pathway to Permanent Residency (PR)",
                    "description":
                      "Comprehensive consultation for transitioning from Subclass 400 or 482 to Subclass 186 and achieving permanent residency in Australia."
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
