import React from 'react'
import img from '../../assets/images/founderimg.jpg'
import { motion } from 'framer-motion'

const Founder = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto px-6 py-16">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Text Section - Animate from left */}
                    <motion.div 
                        className="space-y-2"
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
                            OUR FOUNDER
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
                                Meet Mr. Vikal Gilani, the visionary Group CEO behind Receptive 
                                Group of Companies. With a passion for excellence and a commitment to success, 
                                Mr. Gilani founded Receptive Solutions in 2011 in Mumbai, India. Through his hard work and dedication, 
                                he has established a reputable name in the immigration industry, boasting an impressive 98% success rate in helping 
                                candidates find the right jobs across India and assisting individuals in moving to countries on Permanent Residence 
                                status. Mr. Gilani's unwavering dedication to his clients' success and his expertise in the field have earned him accolades 
                                and recognition in the industry. Trust in Mr. Adi Gilani and the Receptive Group of Companies to guide you towards a 
                                successful and prosperous future in immigration and HR consultancy.
                            </p>
                        </motion.div>
                    </motion.div>

                    {/* Image Section - Animate from right */}
                    <motion.div 
                        className='rounded-2xl overflow-hidden shadow-lg'
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
                            className="w-full object-cover"
                        />
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Founder