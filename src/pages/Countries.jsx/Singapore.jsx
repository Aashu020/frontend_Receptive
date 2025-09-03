import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection';
import img from '../../assets/images/singapore.jpg'
import CountrySection from '../../components/countriesComponents/CountrySection';
import singimg from '../../assets/images/sing.jpg'
const Singapore = () => {
    return (
        <>
            <HeroSection
                title="Singapore"
                subtitle="Singapore is a global financial hub known for its modern skyline, diverse culture, and strict laws. Key attractions include Marina Bay Sands, Gardens by the Bay, and Sentosa Island. The city-state is renowned for its cleanliness, safety, and efficient public transport system."
                bgImage={img}
            />

            <CountrySection
                countryName="Singapore"
                mainTitle={`Relocate from the United Arab Emirates to Singapore…`}
                title={
                    <>  
                        "Seize Success in Singapore: Your Gateway to Career Growth and Comfortable Living"
                        </>
                }
                desc={
                    <>
                        The Singapore S Pass is a type of work permit designed for mid-skilled foreign employees such as technicians. There are several reasons why one should consider the Singapore S Pass. Firstly, it allows foreign workers to legally work in Singapore, providing them with numerous job opportunities in one of the world’s most dynamic and prosperous economies. Secondly, the S Pass is not tied to a specific employer, meaning that workers can switch jobs without needing to apply for a new pass. This offers a level of flexibility and job security that is not always available with other types of work permits. Thirdly, the S Pass includes provisions for dependents, which means that holders of the pass can bring certain family members to live with them in Singapore.
                    </>
                }
                img={singimg}
            />
        </>
    )
}

export default Singapore