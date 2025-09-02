import React from 'react'
import img from '../../assets/images/PROPERTIES.jpg'
import { motion } from 'framer-motion'

const Properties = () => {
    return (
        <div>
            <div className="max-w-6xl mx-auto px-6 py-16 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Text Section - Animate from left */}
                    <motion.div
                        className="space-y-6"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            ease: "easeOut"
                        }}
                        viewport={{ once: false, amount: 0.3 }}
                    >
                        <motion.h1
                            className="text-3xl font-extrabold text-black"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2,
                                ease: "easeOut"
                            }}
                            viewport={{ once: false }}
                        >
                            Receptive Properties
                        </motion.h1>

                        <motion.div
                            className="text-gray-700 leading-relaxed space-y-2 text-justify"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: 0.4,
                                ease: "easeOut"
                            }}
                            viewport={{ once: false }}
                        >
                            <p>
                                Receptive Properties is a new vertical of the Receptive Group of Companies, specializing in real estate services.
                                Our dedicated team of professionals offers expert guidance and personalized services to assist individuals and 
                                businesses in buying, selling, and managing properties across India and UAE. With a focus on customer satisfaction 
                                and excellence, Receptive Properties aims to help clients navigate the real estate market with ease and confidence. 
                                Trust in Receptive Properties to be your partner in finding the perfect property solution for your needs. Contact 
                                us today to learn more about how we can help you achieve your real estate goals.
                            </p>
                            <p>
                                From visa applications and employee recruitment to investment opportunities and property transactions, 
                                we are here to support you every step of the way. Trust in our expertise, reliability, 
                                and unwavering dedication to your success as we work together to achieve your goals and aspirations. 
                                Let Receptive Group of Companies be your partner in building a successful and prosperous future.
                            </p>
                        </motion.div>
                    </motion.div>
                        {/* Image Section - Animate from right */}
                        <motion.div
                            className='rounded-2xl overflow-hidden justify-center flex'
                            initial={{ opacity: 0, x: 100 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.8,
                                ease: "easeOut"
                            }}
                            viewport={{ once: false, amount: 0.3 }}
                            whileHover={{
                                scale: 1.02,
                                transition: { duration: 0.3 }
                            }}
                        >
                            <img
                                src={img}
                                alt="Receptive Group Founder"
                                className="w-[70%] object-cover"
                            />
                        </motion.div>



                </div>
            </div>
        </div>
    )
}

export default Properties