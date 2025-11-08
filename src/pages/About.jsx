import React from "react";
import HeroSection from "../components/aboutComponents/HeroSection";
import ReceptiveAbout from "../components/aboutComponents/RecepriveAbout";
import Founder from "../components/aboutComponents/Founder";
import Immigration from "../components/aboutComponents/Immigration";
import Properties from "../components/aboutComponents/Properties";
import Investment from "../components/aboutComponents/Investment";
import VisionMissionPhilosophy from "../components/aboutComponents/VisionMissionPhilosophy";
import ContactForm from "../components/ContactForm";
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* ✅ SEO Metadata */}
      <Helmet>
        <title>About Us | Receptive Solutions</title>
        <meta
          name="description"
          content="Learn about Receptive Solutions our mission, founders, and expertise in immigration, real estate, and investment solutions worldwide."
        />
        <link rel="canonical" href="https://www.receptivesolutions.co.in/about" />

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
                "name": "About Us",
                "item": "https://www.receptivesolutions.co.in/about"
              }
            ]
          })}
        </script>

        {/* ✅ AboutPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "url": "https://www.receptivesolutions.co.in/about",
            "name": "About Receptive Solutions",
            "description":
              "Receptive Solutions is a premier immigration and overseas placement consultancy offering services for Canada, the UK, Singapore, and Europe.",
            "mainEntity": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "url": "https://www.receptivesolutions.co.in/",
              "logo": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg",
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
            }
          })}
        </script>
      </Helmet>


      {/* ✅ Page content goes here */}
      <HeroSection />
      <ReceptiveAbout />
      <Founder />
      <Immigration />
      <Properties />
      <Investment />
      <VisionMissionPhilosophy />
      <ContactForm />
    </>
  );
};

export default About;
