import React from 'react'
import img from "../../assets/images/uk.jpg"
import Ukflag from "../../assets/flags/ukFlag.jpg"
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
const UK = () => {
    return (
        <>
            <HeroSection
                title="England"
                subtitle="Uk is a country in Europe known for its rich history, diverse culture, and iconic landmarks. Key attractions include the Tower of London, Buckingham Palace, and the British Museum. The UK is also famous for its picturesque countryside, vibrant cities like London and Edinburgh, and contributions to literature, music, and theater."
                bgImage={img}
                flag={Ukflag}
            />
            <CountrySection
                countryName="UNITED KINGDOM"
                title='"Travel to the UK for work, short stays, tourism, and permanent residence to fulfil your dream of UK citizenship."'
                mainTitle={'Settle in UK from any part of the world!'}
                desc={`
                   The United Kingdom, a land of rich history and diverse culture, offers a plethora of opportunities for individuals looking to relocate and start a new chapter in their lives. From the bustling streets of London to the picturesque countryside, the UK provides a unique blend of urban sophistication and natural beauty. With a world-class education system, thriving economy, and vibrant cultural scene, the UK is a popular destination for immigrants seeking a better future.
                    As an immigration company, we specialize in assisting individuals in navigating the complexities of the immigration process to the UK. Whether you are looking to study, work, reunite with family, or invest in a business, our team of experts is here to guide you every step of the way. With our knowledge and experience, we can help you achieve your dream of living in the United Kingdom and make the transition as smooth and successful as possible. Let us be your partner in realizing your aspirations in this dynamic and welcoming country.
                    `}
                img="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1170&q=80"
            />
        </>
    )
}

export default UK