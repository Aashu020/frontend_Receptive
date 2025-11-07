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
        <title>Europe Immigration & Jobs | Receptive Solutions</title>

        <meta
          name="description"
          content="Explore European immigration pathways, job opportunities, and visa assistance with Receptive Solutions. Work in countries like Germany, Poland, Portugal, Lithuania, and more."
        />

        {/* ✅ Canonical */}
        <link 
          rel="canonical" 
          href="https://www.receptivesolutions.co.in/country/europe" 
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
                "name": "Europe",
                "item": "https://www.receptivesolutions.co.in/country/europe"
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
            "name": "Europe Immigration & Work Opportunities | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/country/europe",
            "description": "Find immigration and job opportunities across Europe including Germany, Poland, Estonia, Portugal, and more.",
            "inLanguage": "en",
            "isPartOf": {
              "@type": "WebSite",
              "url": "https://www.receptivesolutions.co.in/"
            },
            "about": {
              "@type": "Place",
              "name": "Europe",
              "image": "https://www.receptivesolutions.co.in/assets/europe.jpg"
            }
          }
          `}
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
