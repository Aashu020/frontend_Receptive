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
          content="Discover Receptive Solutions: our mission, global expertise, founders, and our commitment to delivering immigration, real estate, and investment solutions worldwide."
        />
        <link
          rel="canonical"
          href="https://www.receptivesolutions.co.in/about"
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
                "name": "About Us",
                "item": "https://www.receptivesolutions.co.in/about"
              }
            ]
          }
        `}
        </script>

        {/* ✅ WebPage Schema (optional but increases SEO strength) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "About Us | Receptive Solutions",
            "url": "https://www.receptivesolutions.co.in/about",
            "description": "Learn about Receptive Solutions, our founders, mission, vision, and global service excellence in immigration, real estate, and investment solutions.",
            "publisher": {
              "@type": "Organization",
              "name": "Receptive Solutions",
              "logo": {
                "@type": "ImageObject",
                "url": "https://www.receptivesolutions.co.in/assets/logo-DDRnVjcS.jpg"
              }
            }
          }
        `}
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
