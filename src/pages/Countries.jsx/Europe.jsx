import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import img from "../../assets/images/europe.jpg"
import CountrySection from '../../components/countriesComponents/CountrySection'
import eurimg from "../../assets/images/eur.jpg"
const Europe = () => {
    return (
        <>
            <HeroSection
                title="Europe"
                subtitle="EUrope is a continent rich in history, culture, and diversity. It is home to numerous countries, each with its own unique traditions, languages, and landmarks. From the romantic streets of Paris to the historic ruins of Rome, Europe offers a wide range of experiences for travelers. Key attractions include the Eiffel Tower, Colosseum, and the scenic landscapes of the Swiss Alps. Europe is also known for its art, music, and culinary delights."
                bgImage={img}
            />

            <CountrySection
                countryName="Europe"
                mainTitle={`Welcome to Receptive Group of Companies, a trusted name in Immigration`}
                title={
                    <>
                        HR consultancy for over 12 years in India, now present globally in the UK and Dubai. Our experienced professionals provide tailored solutions for visa applications, employee recruitment, and Permanent Residence, ensuring a smooth journey towards your immigration and HR goals. Trust in our expertise and unwavering dedication to your success. Let us be your partner in realizing your dreams and aspirations.
                    </>
                }
                desc={
                    <>
                        Moving to Europe on a work visa or for immigration is a great decision due to numerous reasons. Europe offers a wide array of job opportunities in various thriving industries like technology, engineering, Construction, Manufacturing finance, and Beauty & healthcare, providing excellent career growth. <br />

                        Moreover, Europe boasts high living standards, with top-notch healthcare, education, and social welfare systems making it an ideal place to live. It also offers a culturally diverse environment, rich history, and is conveniently located for travel. <br />

                        Receptive Group of Companies provides job placement and immigration services across Europe, with a successful track record in countries including Poland, Portugal, Estonia, Germany, Lithuania, Latvia, Slovakia, Hungary, Malta, Romania, Czech Republic, and Spain. Our expertise and experience make us a reliable partner in your journey to Europe.
                    </>
                }
                img={eurimg}
            />
        </>
    )
}

export default Europe