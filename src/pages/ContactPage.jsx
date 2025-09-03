import React from 'react'
import ContactForm from '../components/ContactForm'

const ContactPage = () => {
    return (
        <>
            <div className='pt-10 md:pt-24 lg:pt-25 xl:pt-30'>
                <div class="bg-white py-12">
                    <h2 class="text-center text-xl font-bold text-yellow-700 mb-8 tracking-wide">
                        OUR BRANCHES
                    </h2>
                    <div class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">

                        {/* <!-- UAE Branch --> */}
                        <div class="bg-gray-50 shadow rounded-lg p-6 text-center">
                            <div class="flex justify-center mb-4">
                                <div class="bg-black text-yellow-500 p-3 rounded">
                                    🏢
                                </div>
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900 mb-2">UAE Branch</h3>
                            <p class="text-gray-700 mb-2">
                                📍 Suite No -201, Al Salemiyah Tower, Deria Riggat Al Buteen, Dubai, Uae.
                            </p>
                            <p class="text-gray-700 mb-2">📞 +971 562744455</p>
                            <p class="text-gray-700">✉️ info@receptivegroup.com</p>
                        </div>

                        {/* <!-- Mumbai Branch --> */}
                        <div class="bg-gray-50 shadow rounded-lg p-6 text-center">
                            <div class="flex justify-center mb-4">
                                <div class="bg-black text-yellow-500 p-3 rounded">
                                    🏢
                                </div>
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900 mb-2">Mumbai Branch</h3>
                            <p class="text-gray-700 mb-2">
                                📍 425 Gemstar Commerical Complex, Ramchandra Lane Extn, Malad West, Mumbai 400064.
                            </p>
                            <p class="text-gray-700 mb-2">📞 +91 7738056424</p>
                            <p class="text-gray-700">✉️ info@receptivesolutions.co.in</p>
                        </div>

                        {/* <!-- Ahmedabad Branch --> */}
                        <div class="bg-gray-50 shadow rounded-lg p-6 text-center">
                            <div class="flex justify-center mb-4">
                                <div class="bg-black text-yellow-500 p-3 rounded">
                                    🏢
                                </div>
                            </div>
                            <h3 class="text-lg font-semibold text-blue-900 mb-2">Ahmedabad Branch</h3>
                            <p class="text-gray-700 mb-2">
                                📍 106, Dev Prime, Nr. Vodafone House, Makarba, Ahmedabad - 380051.
                            </p>
                            <p class="text-gray-700 mb-2">📞 +91 8104767778</p>
                            <p class="text-gray-700">✉️ ketan@receptivesolutions.co.in</p>
                        </div>

                    </div>
                </div>

            </div>
            <ContactForm />
        </>
    )
}

export default ContactPage