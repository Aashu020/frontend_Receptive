import React from 'react'
import img from "../../assets/images/usa.jpg"
import UsaFlag from "../../assets/flags/UsaFlag.png"
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
import UsaVisatypes from '../../components/countriesComponents/usaComponents/UsaVisatypes'
import ContactForm from '../../components/ContactForm'
import { Helmet } from 'react-helmet-async';

const Usa = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>USA Immigration & Visa | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore USA immigration pathways, visa types, work permits, study visas, and relocation guidance with Receptive Solutions. Trusted visa consultants for the United States."
        />

        {/* ✅ Canonical */}
        <link 
          rel="canonical" 
          href="https://www.receptivesolutions.co.in/country/usa" 
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
                "name": "USA",
                "item": "https://www.receptivesolutions.co.in/country/usa"
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
            "name": "USA Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/usa",
            "description": "Learn about USA visa types including work visas, study visas, tourist visas, and permanent residency options. Guidance for relocation to the United States.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "United States of America",
              "image": "https://www.receptivesolutions.co.in/assets/usa.jpg"
            }
          }
          `}
        </script>
      </Helmet>

      {/* ✅ PAGE CONTENT */}
      <div>
        <HeroSection
          title="USA"
          subtitle="The United States is one of the world’s most influential countries, known for innovation, education, technology, entertainment, and diverse landscapes. Explore work, study, and immigration opportunities with Receptive Solutions."
          bgImage={img}
          flag={UsaFlag}
        />

        <CountrySection
          countryName="UNITED STATES OF AMERICA"
          mainTitle="Settle in USA from anywhere in the world!"
          title="Begin your journey toward living, studying, or working in the United States with trusted immigration guidance from Receptive Solutions."
          desc={`
            The United States offers unmatched opportunities for education, career growth, and innovation. From world-class universities to a strong economy, the USA remains one of the most sought-after destinations for students, professionals, and families seeking a better future.
            
            With years of experience in global immigration services, we help applicants navigate the complexities of the USA visa process, including work visas, study visas, visitor visas, and long-term residency pathways. Our team ensures complete guidance from documentation to visa submission, making your journey smooth and successful.
            
            Whether you aim to study in top universities, work in leading industries, or build a life in the United States, Receptive Solutions is your trusted partner. Let us guide you through every step of your American dream.
          `}
          img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1170&q=80"
        />

        <UsaVisatypes />
        <ContactForm />
      </div>
    </>
  )
}

export default Usa
