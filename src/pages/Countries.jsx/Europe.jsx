import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import img from "../../assets/images/europe.jpg"
import europe from "../../assets/flags/europe.jpg"
import CountrySection from '../../components/countriesComponents/CountrySection'
import eurimg from "../../assets/images/eur.jpg"
import EUJobsComponent from '../../components/countriesComponents/europeComponents/EUJobsComponent'
import ContactForm from '../../components/ContactForm'
import { Helmet } from 'react-helmet-async'

const Europe = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        {/* ✅ SEO Title */}
        <title>Work & Settle in Europe | EU Work Permit & Job Placement | Receptive Solutions</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Work and settle across Europe with Receptive Solutions. Get EU work permit guidance, documentation, and job placement support for skilled and semi-skilled professionals."
        />

        {/* ✅ Canonical */}
        <link rel="canonical" href="https://www.receptivesolutions.co.in/country/europe" />

        {/* ✅ Breadcrumb Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.receptivesolutions.co.in/" },
              { "@type": "ListItem", "position": 2, "name": "Countries", "item": "https://www.receptivesolutions.co.in/country" },
              { "@type": "ListItem", "position": 3, "name": "Europe", "item": "https://www.receptivesolutions.co.in/country/europe" }
            ]
          })}
        </script>

        {/* ✅ WebPage + Continent Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "Europe – Work & Settle with EU Work Permits",
            "url": "https://www.receptivesolutions.co.in/country/europe",
            "description": "EU work permit & job placement guidance for skilled and semi-skilled professionals across Europe.",
            "inLanguage": "en",
            "about": {
              "@type": "Continent",
              "name": "Europe",
              "url": "https://en.wikipedia.org/wiki/Europe"
            },
            "isPartOf": { "@type": "WebSite", "url": "https://www.receptivesolutions.co.in/" },
            "publisher": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": { "@type": "ImageObject", "url": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg" },
              "sameAs": [
                "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
                "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
                "https://www.youtube.com/@receptivegroup",
                "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
              ]
            }
          })}
        </script>

        {/* ✅ Service Schema – EU Work Permit & Job Placement */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Europe Work Permit & Job Placement",
            "provider": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
            },
            "areaServed": { "@type": "Continent", "name": "Europe" },
            "offers": {
              "@type": "AggregateOffer",
              "priceCurrency": "EUR",
              "lowPrice": "1500",
              "highPrice": "4000",
              "description": "Typical monthly pay packages for EU work permits, varying by role and skill level."
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "EU Job Categories & Sectors",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Skilled Roles (Tech, Engineering, Healthcare, Construction, Hospitality)",
                    "description": "EU work permit and placement for skilled professionals (22–55 yrs; Graduate/Diploma; 2+ yrs experience). Contracts: 3 years; Pay €2500–€4000/mo; Benefits: accommodation, food, transport, medical insurance."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Semi-Skilled & Unskilled Roles (Hospitality, Manufacturing, Agriculture, Retail)",
                    "description": "EU work permit & placement for entry roles (18–65 yrs; min 10th pass; no prior experience needed). Contracts: 3 years; Pay €1500–€2500/mo; Benefits: accommodation, food, transport, medical insurance."
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
          title="Europe"
          subtitle="Europe is known for its rich history, advanced economies, cultural diversity, and strong job markets. Explore visa and employment pathways across multiple European countries with Receptive Solutions."
          bgImage={img}
          flag={europe}
        />

        <CountrySection
          countryName="Europe"
          mainTitle="Work & Settle in Europe with Receptive Solutions"
          title={
            <>
              With 12+ years of expertise in global immigration and HR consulting, Receptive Solutions bridges skilled professionals with opportunities across the European continent.
            </>
          }
          desc={
            <>
              Europe offers some of the strongest economies in the world, providing excellent job opportunities across industries like technology, engineering, manufacturing, construction, healthcare, and hospitality.
              <br /><br />
              European countries boast high living standards, world-class education, modern healthcare systems, and strong worker protections. Its diverse culture, historic architecture, and scenic beauty make Europe one of the most attractive destinations for migrants worldwide.
              <br /><br />
              Receptive Solutions provides immigration guidance and job placement services across countries such as:
              <br />
              <strong>
                Germany, Poland, Portugal, Estonia, Lithuania, Latvia, Slovakia, Hungary, Malta, Romania, Czech Republic, and Spain.
              </strong>
              <br /><br />
              Our expertise ensures a smooth process—from documentation to job placement and visa support—making your transition to Europe seamless and successful.
            </>
          }
          img={eurimg}
        />

        <EUJobsComponent />
        <ContactForm />
      </div>
    </>
  )
}

export default Europe
