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
        <title>Receptive Solutions – Immigration & Overseas Placement Consultancy</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Receptive Solutions",
            url: "https://receptivesolutions.co.in/",
            logo: "https://receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
            contactPoint: {
              "@type": "ContactPoint",
              telephone: "+91-77380-56424",
              contactType: "customer support",
              areaServed: "IN",
              availableLanguage: ["English", "Hindi"]
            },
            address: {
              "@type": "PostalAddress",
              streetAddress: "425, Gemstar Commercial Complex, Ramchandra Lane Extn, Kanchpada, Malad West",
              addressLocality: "Mumbai",
              postalCode: "400064",
              addressRegion: "Maharashtra",
              addressCountry: "IN"
            },
            sameAs: [
              "https://www.instagram.com/receptivesolutions/profilecard/?igsh=bDIxNTY2eW14Yzd1", "https://www.linkedin.com/company/receptivesolutions/posts/?feedView=all", "https://www.youtube.com/@receptivegroup", "https://www.facebook.com/receptivesoutions?mibextid=ZbWKwL"
          ],
          description: "Receptive Solutions is an experienced immigration & overseas placement consultancy providing visa and job assistance services for Canada, UK, Singapore & Europe."
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