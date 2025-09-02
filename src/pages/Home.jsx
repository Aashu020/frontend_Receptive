import React from 'react'
import Herosection from '../components/homepage/Herosection'
import Intro from '../components/homepage/Intro'
import Experience from '../components/homepage/Experience'
import Services from '../components/homepage/Services'
const Home = () => {
  return (
    <div>
   
        <Herosection/>
        <Intro/>
        <Experience/>
        <Services/>
    </div>
  )
}

export default Home