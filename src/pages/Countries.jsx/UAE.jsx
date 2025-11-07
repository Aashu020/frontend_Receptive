import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
import UaeQuest1 from '../../components/countriesComponents/uaeComponents/UaeQuest1'
import img from "../../assets/countryHero/UaeHero.jpg"
import uaeimg from "../../assets/images/uae2.png"
import UaeVisaRequirements from '../../components/countriesComponents/uaeComponents/UaeVisaRequirements '
import uaeFlag from "../../assets/flags/UaeFlag.jpg"
import { Helmet } from 'react-helmet-async'

const UAE = () => {
  return (
    <>
      {/* ✅ Helmet — SEO Metadata */}
      <Helmet>
        <title>UAE Immigration & Visa | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore UAE immigration services, visa requirements, Emirates ID process, and relocation assistance with Receptive Solutions. Trusted immigration consultants in UAE."
        />

        {/* ✅ Canonical */}
        <link 
          rel="canonical" 
          href="https://www.receptivesolutions.co.in/country/uae" 
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
                "name": "UAE",
                "item": "https://www.receptivesolutions.co.in/country/uae"
              }
            ]
          }
        `}
        </script>

        {/* ✅ WebPage Schema — UAE Immigration Page */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "UAE Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/uae",
            "description": "Learn about UAE visa types, immigration process, Emirates ID, residency, and relocation support with Receptive Solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "United Arab Emirates",
              "image": "https://www.receptivesolutions.co.in/assets/uae2.png"
            }
          }
        `}
        </script>
      </Helmet>

      {/* ✅ PAGE CONTENT */}
      <div>
        <HeroSection
          title="UAE"
          subtitle="UAE is a modern Middle Eastern country known for luxury, innovation, and global opportunities. Explore immigration, residency, and visa guidance with Receptive Solutions."
          bgImage={img}
          flag={uaeFlag}
        />

        <CountrySection
          countryName="UNITED ARAB EMIRATES"
          mainTitle={`"Welcome to Receptive Group of Companies"`}
          title={
            <>
              A trusted name in Immigration and HR consultancy for over 12 years in India, now present globally in the UK and Dubai. 
              Our experienced professionals provide tailored solutions for visa applications, employee recruitment, and Permanent Residence.
            </>
          }
          desc="Planning a move to the United Arab Emirates (UAE)? Learn how to obtain a UAE residence visa, Emirates ID, and more. Our guide helps you understand the complete immigration process quickly and easily."
          img={uaeimg}
        />
        
        <UaeQuest1 />
        <UaeVisaRequirements/>
      </div>
    </>
  )
}

export default UAE
