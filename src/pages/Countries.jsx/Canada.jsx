import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection';
import img from "../../assets/images/canada.jpeg"
import CountrySection from '../../components/countriesComponents/CountrySection';
import canimg from "../../assets/images/can.jpg"
const Canada = () => {
    return (
        <>
            <HeroSection
                title="Canada"
                subtitle="Canada is a country in North America. It is known for its vast landscapes, multicultural cities, and friendly people. Canada offers a high quality of life, excellent education and healthcare systems, and a strong economy. Popular destinations include Toronto, Vancouver, Montreal, and the stunning natural beauty of places like Banff and Jasper National Parks."
                bgImage={img}
            />

            <CountrySection
                countryName="Canada"
                mainTitle={`Relocate to Canada with Ease`}
                title={
                    <>
                       Explore the beauty of Canada with ease by obtaining a visitor/tourist visa. Our temporary visa allows you to immerse yourself in the stunning landscapes and vibrant culture of Canada for up to six months. Simply apply online, provide proof of your intention to return home, and demonstrate financial stability. With a visitor/tourist visa, you can travel and explore Canada, but remember, no working or studying allowed. Start your Canadian adventure today with our hassle-free visa application process.
                    </>
                }
                desc={
                    <>
                        To incorporate the provided text into the CountrySection component for Canada while addressing the issues with country-specific images and the navbar gap on small devices, here’s a description of the solution without code:
                    </>
                }
                img={canimg}
            />
        </>
    )
}

export default Canada