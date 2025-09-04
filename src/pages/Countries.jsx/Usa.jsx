import React from 'react'
import img from "../../assets/images/usa.jpg"
import UsaFlag from "../../assets/flags/UsaFlag.png"
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
const Usa = () => {
    return (
        <div>
            <HeroSection
                title="Usa"
                subtitle="Usa is a country in North America known for its diverse culture, iconic landmarks, and economic influence. Key attractions include the Statue of Liberty, Grand Canyon, and Hollywood. The USA is renowned for its technological innovation, entertainment industry, and varied landscapes ranging from bustling cities to natural wonders."
                bgImage={img}
                flag={UsaFlag}
            />
            <CountrySection
                countryName="UNITED STATES of AMERICA"
                title='Settle in UK from any part of the world!'
                desc={`
                   The United Kingdom, a land of rich history and diverse culture, offers a plethora of opportunities for individuals looking to relocate and start a new chapter in their lives. From the bustling streets of London to the picturesque countryside, the UK provides a unique blend of urban sophistication and natural beauty. With a world-class education system, thriving economy, and vibrant cultural scene, the UK is a popular destination for immigrants seeking a better future.
                    As an immigration company, we specialize in assisting individuals in navigating the complexities of the immigration process to the UK. Whether you are looking to study, work, reunite with family, or invest in a business, our team of experts is here to guide you every step of the way. With our knowledge and experience, we can help you achieve your dream of living in the United Kingdom and make the transition as smooth and successful as possible. Let us be your partner in realizing your aspirations in this dynamic and welcoming country.
                    `}
                img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1170&q=80"
            />
        </div>
    )
}

export default Usa