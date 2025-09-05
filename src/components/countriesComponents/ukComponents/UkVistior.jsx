import React from 'react'
import img2 from "../../../assets/images/ukvistorimg.jpg"
const UkVistior = () => {
    return (
        <div className="p-2 bg-white px-[15px] md:px-[3rem] lg:px-[10rem]" id='uk-visitor'>
            <div className="flex flex-col md:flex-row items-top mb-4 mt-5">
                <div className="md:w-1/2">
                    <h3 className="text-lg md:text-xl font-semibold text-gray-700">2. UK Visitor Visa</h3>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        Are you dreaming of exploring the enchanting landscapes of the United Kingdom, immersing yourself in its rich history, or reuniting with loved ones in this vibrant country? Look no further than the UK Visitor Visa, your gateway to unforgettable experiences and cherished memories.
                    </p>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        At our immigration website, we understand the allure of the UK and the desire to visit this captivating destination. Our expert team is dedicated to assisting you in navigating the visa application process with ease and efficiency, ensuring that your journey to the UK is seamless and stress-free.
                    </p>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">
                        Whether you are planning a leisurely holiday, a business trip, or a visit to family and friends, the UK Visitor Visa opens doors to a world of possibilities. Let us be your trusted partner in turning your travel aspirations into reality and creating lasting moments in the breath-taking land of the United Kingdom.
                    </p>
                </div>
                <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                    <img
                        src={img2}
                        alt="Student Visa"
                        className="w-full rounded-lg shadow-md"
                    />
                </div>
            </div>
            <div className='pb-4'>
                <h4 className="text-lg font-medium text-gray-700 mt-2">Essential Documents for UK travel visa:</h4>
                {/* <p className="text-gray-600 mt-2 text-[15px] text-justify">The eligibility requirements for a UK study/student visa typically include:</p> */}
                <ul className="list-disc list-inside text-gray-600 mt-1 text-[15px] text-justify">
                    <li><span className='font-semibold'>Valid Passport:</span> Your journey to the UK begins with a valid passport. Ensure your passport is current and will remain valid for the entire duration of your planned stay in the UK. Having at least one blank page for visa stamps is also mandatory.</li>
                    <li><span className='font-semibold'>Visa Application Form:</span>  Accurate and thorough completion of the UK visit visa application form is vital. Our team at Receptive Immigration will assist you in filling out the application form, avoiding any errors that may delay the processing of your visa.</li>
                    <li><span className='font-semibold'>Passport-Sized Photographs:</span> Provide recent passport-sized photographs meeting the UK Home Office specifications. These photographs should be taken against a light background and must reflect your true likeness.</li>
                    <li><span className='font-semibold'>Proof of Accommodation:</span>  You will need to present evidence of your accommodation arrangements while in the UK. This could be in the form of hotel reservations, a letter of invitation from your host, or other relevant documents.</li>
                    <li><span className='font-semibold'>Travel Itinerary:</span> A detailed travel itinerary outlining your planned activities and destinations within the UK is necessary. This document should provide a clear outline of your trip’s purpose and duration.</li>
                    <li><span className='font-semibold'>Purpose of Funds:</span> To demonstrate that you can support yourself financially during your stay, you must present bank statements or other financial documents showing your ability to cover all expenses. In some cases, a sponsor’s financial documents may be required.</li>
                    <li><span className='font-semibold'>No Objection Certificate (NOC):</span>  If you are employed, a letter from your employer stating that they have no objection to your UK visit is necessary. This is to assure the authorities that you have ties to your home country and will return after your visit.</li>
                    <li><span className='font-semibold'>Current Employment Documents:</span>  If employed, provide documents such as a letter of employment, pay stubs, or an employment contract, which further establish your financial stability and employment status.</li>
                    <li><span className='font-semibold'>Travel Insurance:</span>  A comprehensive travel insurance policy covering the entire duration of your stay is essential. The policy should include medical coverage and repatriation, ensuring you are adequately protected during your visit.</li>
                    <li><span className='font-semibold'>Additional Supporting Documents: </span> Depending on your specific circumstances and the purpose of your visit, additional documents may be required. These could include marriage certificates, birth certificates (for minors), or any other relevant supporting materials.</li>
                </ul>
            </div>
        </div>
    )
}

export default UkVistior