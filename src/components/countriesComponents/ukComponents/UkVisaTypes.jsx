import React from 'react';
import img1 from "../../../assets/images/ukgirls.jpg"


const UkVisaTypes = () => {
    return (
        <div className="p-2 bg-white px-[15px] md:px-[3rem] lg:px-[10rem]">
            <div className="mb-6">
                <h2 className="text-xl md:text:2xl font-bold text-gray-700 mb-2">Visa types:</h2>
            </div>
            <div className="mb-6">
                <div className="flex flex-col md:flex-row items-top mb-4">
                    <div className="md:w-1/2">
                        <h3 className="text-lg md:text-xl font-semibold text-gray-700">1. Student/Study Visa:</h3>
                        <p className="text-gray-600 mt-2 text-[15px] text-justify">
                            The United Kingdom is renowned for its prestigious universities, cutting-edge research facilities, and vibrant academic culture, making it a top choice for students seeking a world-class education. The UK student visa provides a gateway for individuals from around the globe to pursue their academic ambitions in this diverse and intellectually stimulating environment.
                        </p>
                        <p className="text-gray-600 mt-2 text-[15px] text-justify">
                            As an immigration company specializing in UK student visas, we understand the importance of a smooth and efficient application process for aspiring students. Our team of experts is dedicated to providing comprehensive support and guidance to ensure that your journey to studying in the UK is successful and hassle-free. From assisting with the application process to offering advice on course selection and accommodation options, we are committed to helping you achieve your educational goals in one of the world's leading academic destinations. Let us be your partner in turning your academic dreams into reality in the United Kingdom.
                        </p>
                    </div>
                    <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
                        <img
                            src={img1}
                            alt="Student Visa"
                            className="w-full h-auto rounded-lg shadow-md"
                        />
                    </div>
                </div>
                <div>
                    <h4 className="text-lg font-medium text-gray-700 mt-2">What are the eligibility requirements for a Study/student visa for UK?</h4>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">The eligibility requirements for a UK study/student visa typically include:</p>
                    <ul className="list-disc list-inside text-gray-600 mt-1 text-[15px] text-justify">
                        <li>Acceptance into a recognized educational institution: You must have an offer of a place from a licensed Tier 4 sponsor (educational institution) in the UK.</li>
                        <li>Proof of English proficiency: You may need to demonstrate your proficiency in English through tests like IELTS or TOEFL, depending on the course requirements.</li>
                        <li>Financial capability: You must show evidence that you can financially support yourself during your studies, including tuition fees and living expenses.</li>
                        <li>Confirmation of visa application: You will need to complete the online visa application form and pay the application fee.</li>
                        <li>Tuberculosis test: Depending on your nationality, you may need to undergo a tuberculosis test at an approved clinic.</li>
                        <li>Maintenance funds: You may need to show proof of sufficient funds to cover your living expenses while studying in the UK.</li>
                        <li>Genuine intention to study: You must prove that you have a genuine intention to study in the UK and will leave the country upon completion of your studies.</li>
                    </ul>
                    <p className="text-gray-600 mt-2 text-[15px] text-justify">It is important to note that the specific requirements may vary depending on the type of course, institution, and individual circumstances. It is advisable to consult with an immigration expert or the official UK government website for the most up-to-date and accurate information regarding UK study visa requirements.</p>
                </div>
                
            </div>
            <div>

            </div>
        </div>
    );
};

export default UkVisaTypes