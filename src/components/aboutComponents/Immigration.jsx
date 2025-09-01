import React from 'react'
import img from '../../assets/images/IMMIGRATION_logo.jpg'
import { motion } from 'framer-motion'

const Immigration = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* Image Section - Animate from right */}
                    <motion.div
                        className='rounded-2xl overflow-hidden'
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
                            Receptive Immigration
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
                                Receptive Immigration a division of the Receptive Group of Companies, is a trusted name in the investment industry.
                                With a focus on creating wealth and financial security for our clients, Receptive Investments offers expert guidance
                                and personalized services to help individuals and businesses navigate the investment landscape. Our experienced team
                                of professionals provides tailored solutions to identify and capitalize on lucrative investment opportunities, ensuring
                                that our clients achieve their financial goals. Trust in Receptive Investments to be your partner in building a successful
                                and prosperous financial future. Contact us today to learn more about how we can help you maximize your investment potential.
                            </p>
                        </motion.div>
                    </motion.div>


                </div>
            </div>
        </div>
    )
}

export default Immigration