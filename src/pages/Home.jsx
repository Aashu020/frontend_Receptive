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
        <title>Home | Receptive Solutions</title>
        <meta
          name="description"
          content="Learn about Receptive International’s mission, our founders, and our global expertise in immigration, real estate, and investment solutions."
        />
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/"
        />
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