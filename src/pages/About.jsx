import React from 'react';
import HeroSection from '../components/aboutComponents/HeroSection';
import ReceptiveAbout from '../components/aboutComponents/RecepriveAbout';
import Founder from '../components/aboutComponents/Founder';
import Immigration from '../components/aboutComponents/Immigration';
import Properties from '../components/aboutComponents/Properties';
import Investment from '../components/aboutComponents/Investment';
import VisionMissionPhilosophy from '../components/aboutComponents/VisionMissionPhilosophy';
import ContactForm from '../components/ContactForm';
import { Helmet } from "react-helmet-async";

const About = () => {
  return (
    <>
      {/* ✅ Helmet is only for SEO metadata */}
      <Helmet>
        <title>About Us | Receptive Solutions</title>
        <meta
          name="description"
          content="Learn about Receptive International’s mission, our founders, and our global expertise in immigration, real estate, and investment solutions."
        />
        <link 
          rel="canonical" 
          href="https://www.receptivesolutions.co.in/about" 
        />
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
