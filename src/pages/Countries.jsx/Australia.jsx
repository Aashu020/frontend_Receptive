import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import img from '../../assets/images/australia.jpg'
import AusFlag from "../../assets/flags/ausnew.jpg"
import CountrySection from '../../components/countriesComponents/CountrySection'
import ausimg from '../../assets/images/aus.jpg'
import VisitervisaAus from '../../components/countriesComponents/Asutralia/VisitervisaAus'
import Subclass400 from '../../components/countriesComponents/Asutralia/Subclass400'
import Subclass186 from '../../components/countriesComponents/Asutralia/Subclass186'
import AotherinfoAus from '../../components/countriesComponents/Asutralia/AotherinfoAus'
import Subclass from '../../components/countriesComponents/Asutralia/Subclass'
const Australia = () => {
    return (
        <>
            <HeroSection
                title="Australia"
                subtitle="Australia is a country and continent surrounded by the Indian and Pacific oceans. Its major cities – Sydney, Brisbane, Melbourne, Perth, Adelaide – are coastal. Its vast interior, known as the Outback, features arid desert landscapes. The country is known for its Sydney Opera House, the Great Barrier Reef, the vast Outback, and unique animal species including kangaroos and duck-billed platypuses."
                bgImage={img}
                flag={AusFlag}
            />

            <CountrySection
                countryName="Australia"
                mainTitle={`Relocate from the United Arab Emirates to Australias`}
                title={
                    <>
                        Seek out opportunities to travel, pursue education, secure employment or immigrate to Canada. Submit applications for citizenship, a permanent residency card, or protection as a refugee. Monitor the progress of your application or locate necessary forms.
                    </>
                }
                desc={
                    <>

                        Premier Australian Immigration Agency in the UAE <br />

                        Australia is a highly esteemed country, recognized as one of the wealthiest globally. It's a sophisticated, multicultural society that consistently achieves top rankings on the Human Development Index and offers its residents an excellent quality of life, financial independence, and substantial safeguards for civil and political rights. <br />

                        As an immigration consultancy based in Dubai for over two decades, we are licensed by the Australian Government's Migration Agents Registration Authority (MARA). We are committed to providing our clients with the most up-to-date and effective immigration strategies.<br />


                        Australia is globally recognized as a favoured destination for migration, largely attributed to its welcoming culture, vibrant urban centres’, and sun-drenched beaches. The high standard of living and stable economic outlook make Australia a magnetic attraction for skilled professionals worldwide. As an English-speaking country, integration in Australia is relatively seamless. You can explore various immigration pathways to Australia based on your individual profile and immigration goals.
                    </>
                }
                img={ausimg}
            />

            <VisitervisaAus/>
            <Subclass400/>
            <Subclass/>
            <Subclass186/>
            <AotherinfoAus/>
        </>
    )
}

export default Australia