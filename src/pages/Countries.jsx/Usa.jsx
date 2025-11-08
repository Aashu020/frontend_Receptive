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
        {/* ✅ SEO Title */}
        <title>USA Immigration, Study & Work Visa Consultancy | Receptive Solutions</title>

        {/* ✅ Meta Description */}
        <meta
          name="description"
          content="Apply for USA Study, Work, and Tourist Visas with expert help from Receptive Solutions. Trusted consultants helping professionals, students, and families relocate successfully to the United States."
        />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/country/usa"
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
                "name": "United States of America",
                "item": "https://www.receptivesolutions.co.in/country/usa"
              }
            ]
          })}
        </script>

        {/* ✅ WebPage + Country Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "United States of America Immigration & Visa Services | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/usa",
            "description":
              "Receptive Solutions offers USA visa consulting including Study, Work, and Tourist Visa assistance. Expert guidance for documentation, eligibility, and smooth application process to the United States.",
            "inLanguage": "en",
            "about": {
              "@type": "Country",
              "name": "United States of America",
              "url": "https://en.wikipedia.org/wiki/United_States"
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

        {/* ✅ Service Schema – USA Visa & Immigration Services */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "USA Immigration & Visa Consulting",
            "provider": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
            },
            "areaServed": {
              "@type": "Country",
              "name": "United States of America"
            },
            "hasOfferCatalog": {
              "@type": "OfferCatalog",
              "name": "United States Visa Categories",
              "itemListElement": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "USA Student Visa (F-1 / M-1)",
                    "description":
                      "Expert guidance for USA Study Visa (F-1 & M-1) including I-20 form support, interview preparation, and DS-160 filing."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "USA Work Visa (H-1B / L-1 / O-1)",
                    "description":
                      "Full assistance for USA employment-based visas including H-1B, L-1 intra-company transfers, and O-1 extraordinary ability categories."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "USA Tourist / Visitor Visa (B1/B2)",
                    "description":
                      "Application guidance for USA Tourist and Business Visas, including document preparation, scheduling, and interview readiness."
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "USA Permanent Residency (Green Card Pathways)",
                    "description":
                      "Consultation on employment-based and family-sponsored USA permanent residency options with expert legal support."
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
