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
        <title>Immigration & Visa Services – UAE | Receptive Solutions</title>
        <meta
          name="description"
          content="Explore Receptive Solutions’ immigration, visa and overseas placement services tailored for the UAE market. Trusted consultants helping UAE-based clients globally."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/country/uae" />

        {/* Breadcrumb Schema */}
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
                "name": "Country Services",
                "item": "https://www.receptivesolutions.co.in/country"
              },
              {
                "@type": "ListItem",
                "position": 3,
                "name": "UAE",
                "item": "https://www.receptivesolutions.co.in/country/uae"
              }
            ]
          })}
        </script>

        {/* WebPage + Country + Organization Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "UAE Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/uae",
            "description": "Dedicated page for UAE-based immigration, visa and overseas job services by Receptive Solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Country",
              "name": "United Arab Emirates",
              "url": "https://en.wikipedia.org/wiki/United_Arab_Emirates"
            },
            "mainEntity": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
              "sameAs": [
                "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
                "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
                "https://www.youtube.com/@receptivegroup",
                "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
              ]
            }
          })}
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
        <UaeVisaRequirements />
      </div>
    </>
  )
}

export default UAE
