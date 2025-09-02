import React from 'react'
import Herosection from '../components/homepage/Herosection'
import Intro from '../components/homepage/Intro'
import Experience from '../components/homepage/Experience'
import Services from '../components/homepage/Services'
import ContactForm from '../components/ContactForm'
import Testimonials from '../components/homepage/Testimonioals'
const Home = () => {
  return (
    <div>
   
        <Herosection/>
        <Intro/>
        <Experience/>
        <Services/>
        <ContactForm/>
        <Testimonials/>
    </div>
  )
}

export default Home