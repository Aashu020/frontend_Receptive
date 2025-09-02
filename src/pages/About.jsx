import React from 'react'
import HeroSection from '../components/aboutComponents/HeroSection'
import ReceptiveAbout from '../components/aboutComponents/RecepriveAbout'
import Founder from '../components/aboutComponents/Founder'
import Immigration from '../components/aboutComponents/Immigration'
import Properties from '../components/aboutComponents/Properties'
import Investment from '../components/aboutComponents/Investment'
import VisionMissionPhilosophy from '../components/aboutComponents/VisionMissionPhilosophy'
import ContactForm from '../components/ContactForm'

const About = () => {
  return (
    <>
      <HeroSection />
      <ReceptiveAbout />
      <Founder/>
      <Immigration />
      <Properties />
      <Investment/>
      <VisionMissionPhilosophy/>
      <ContactForm/> 
    </>
  )
}

export default About