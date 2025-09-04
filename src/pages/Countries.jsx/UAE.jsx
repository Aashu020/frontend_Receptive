import React from 'react'
import HeroSection from '../../components/countriesComponents/Herosection'
import CountrySection from '../../components/countriesComponents/CountrySection'
import UaeQuest1 from '../../components/countriesComponents/uaeComponents/UaeQuest1'
import img from "../../assets/images/UAE.png"
import uaeimg from "../../assets/images/uae2.png"
import UaeVisaRequirements from '../../components/countriesComponents/uaeComponents/UaeVisaRequirements '
const UAE = () => {
  return (
    <div>
        <HeroSection
        title="UAE"
        subtitle="UAE is a country in the Middle East known for its modern architecture, luxury shopping, and vibrant culture. Key attractions include the Burj Khalifa, Palm Jumeirah, and the Dubai Mall. The UAE offers a blend of traditional and contemporary experiences, making it a popular destination for tourists and business travelers alike."
        bgImage={img}
      />

      <CountrySection
      countryName="UNITED ARAB EMIRATES"
      mainTitle={`"Welcome to Receptive Group of Companies`}
      title={
        <>
          A trusted name in Immigration and HR consultancy for over 12 years in India, now present globally in the UK and Dubai. Our experienced professionals provide tailored solutions for visa applications, employee recruitment, and Permanent Residence, ensuring a smooth journey towards your immigration and HR goals. Trust in our expertise and unwavering dedication to your success. Let us be your partner in realizing your dreams and aspirations."
        </>
      }
      desc="Planning a move to the United Arab Emirates (UAE)? If so, you're probably curious about how to secure a UAE residence visa and Emirates ID. While the process may seem intimidating if you're not acquainted with it, there's no need to fret. This comprehensive, step-by-step guide will simplify the process, enabling you to swiftly and effortlessly acquire everything you need to commence your exciting new chapter in the UAE."
      img={uaeimg}
    />
    <UaeQuest1/>
    <UaeVisaRequirements/>
    </div>
  )
}

export default UAE