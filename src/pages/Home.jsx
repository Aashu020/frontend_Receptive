import React from 'react'
import Herosection from '../components/homepage/Herosection'
import Intro from '../components/homepage/Intro'
import Experience from '../components/homepage/Experience'
import Services from '../components/homepage/Services'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/homepage/Testimonioals'
import { Helmet } from 'react-helmet-async'
const Home = () => {
  return (
    <>
      {/* ✅ Helmet is only for SEO metadata */}
      <Helmet>
        {/* ✅ SEO Title & Description */}
        <title>Receptive Solutions – Global Immigration, Visa & Career Experts</title>
        <meta
          name="description"
          content="Receptive Solutions is a trusted global immigration consultancy helping clients from India, UAE, UK, Canada, Europe, USA, Australia & Singapore. 12+ years of experience, 3000+ success stories."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/" />

        {/* ✅ WebSite Schema (for sitelinks) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            "url": "https://www.receptivesolutions.co.in/",
            "name": "Receptive Solutions",
            "potentialAction": {
              "@type": "SearchAction",
              "target":
                "https://www.receptivesolutions.co.in/?s={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })}
        </script>

        {/* ✅ Organization Schema (main entity for brand) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/",
            "logo":
              "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
            "description":
              "Receptive Solutions is an experienced immigration & overseas placement consultancy providing visa and job assistance services for Canada, UK, Singapore & Europe.",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+91-77380-56424",
              "contactType": "customer support",
              "areaServed": "IN",
              "availableLanguage": ["English", "Hindi"]
            },
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "425, Gemstar Commercial Complex, Ramchandra Lane Extn, Kanchpada, Malad West",
              "addressLocality": "Mumbai",
              "postalCode": "400064",
              "addressRegion": "Maharashtra",
              "addressCountry": "IN"
            },
            "sameAs": [
              "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1",
              "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all",
              "https://www.youtube.com/@receptivegroup",
              "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
            ]
          })}
        </script>

        {/* ✅ LocalBusiness Schema (for Maps & local SEO) */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Receptive Solutions",
            "image":
              "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress":
                "425, Gemstar Commercial Complex, Ramchandra Lane Extn",
              "addressLocality": "Malad West",
              "addressRegion": "Mumbai",
              "postalCode": "400064",
              "addressCountry": "IN"
            },
            "openingHours": "Mo-Sa 10:00-19:00",
            "telephone": "+91-77380-56424",
            "url": "https://www.receptivesolutions.co.in/"
          })}
        </script>

        {/* ✅ BreadcrumbList Schema */}
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
              }
            ]
          })}
        </script>

        {/* ✅ WebPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["WebPage", "CollectionPage"],
            "name": "Receptive Solutions – Global Immigration Experts",
            "url": "https://www.receptivesolutions.co.in/",
            "description":
              "Leading global immigration consultancy offering visa, PR, work permits and overseas career solutions.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            }
          })}
        </script>
      </Helmet>


      <div>

        <Herosection />
        <Intro />
        <Experience />
        <Services />
        {/* Header Section */}
        <div className="bg-gradient-to-r from-[#0C3B34] to-[#0C3B34]/90 text-white py-12 md:py-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
              Let's Start Your
              <span className="block text-[#D8C287] mt-2">Visa Journey</span>
            </h1>
            <p className="md:text-lg lg:text-xl text-sm text-gray-200 mx-auto">
              Expert guidance for all your visa needs. Get in touch with our experienced consultants today.
            </p>
          </div>
        </div>
        <ContactForm />
        <Testimonials />
      </div>
    </>
  )
}

export default Home