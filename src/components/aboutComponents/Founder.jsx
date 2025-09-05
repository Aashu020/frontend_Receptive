import React from 'react'
import img from '../../assets/images/founderimg.jpg'
import { motion } from 'framer-motion'

const Founder = () => {
    return (
        <div className="bg-white py-5 md:py-16 md:px-[3rem] ">
            <div className=" mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-center">
                    {/* Image Section - Animate from right */}
                    <motion.div 
                        className="w-full lg:w-2/5 rounded-2xl overflow-hidden shadow-lg"
                        initial={{ opacity: 0, x: 100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: "easeOut" 
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                        whileHover={{ 
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <img
                            src={img}
                            alt="Mr. Vikal Gilani, Founder of Receptive Group"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    {/* Text Section - Animate from left */}
                    <motion.div 
                        className="w-full lg:w-3/5 space-y-6"
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ 
                            duration: 0.8, 
                            ease: "easeOut" 
                        }}
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <motion.h1 
                            className="text-3xl md:text-4xl font-bold text-[#0C3B34]"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.2,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true }}
                        >
                            OUR FOUNDER
                        </motion.h1>

                        <motion.div 
                            className="text-[#333333] leading-relaxed space-y-4 text-justify"
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                                duration: 0.8, 
                                delay: 0.4,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true }}
                        >
                            <p className='text-sm md:text-lg'>
                                Meet Mr. Vikal Gilani, the visionary Group CEO behind Receptive 
                                Group of Companies. With a passion for excellence and a commitment to success, 
                                Mr. Gilani founded Receptive Solutions in 2011 in Mumbai, India.
                            </p>
                            
                            <p className='text-sm md:text-lg'>
                                Through his hard work and dedication, he has established a reputable name in the 
                                immigration industry, boasting an impressive 98% success rate in helping 
                                candidates find the right jobs across India and assisting individuals in moving 
                                to countries on Permanent Residence status.
                            </p>
                            
                            <p className='text-sm md:text-lg'>
                                Mr. Gilani's unwavering dedication to his clients' success and his expertise in 
                                the field have earned him accolades and recognition in the industry. Trust in 
                                Mr. Vikal Gilani and the Receptive Group of Companies to guide you towards a 
                                successful and prosperous future in immigration and HR consultancy.
                            </p>
                        </motion.div>
                        
                        {/* Stats Section */}
                        <motion.div 
                            className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ 
                                duration: 0.6, 
                                delay: 0.6,
                                ease: "easeOut" 
                            }}
                            viewport={{ once: true }}
                        >
                           
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Founder