import React from 'react';
import img from '../../assets/images/PROPERTIES.jpg';
import { motion } from 'framer-motion';

const Properties = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10 gap-8 items-center">
          
          {/* Text Content Section */}
          <motion.div
            className="space-y-6 w-full lg:w-3/5 order-1"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              className="text-3xl sm:text-4xl font-bold text-gray-800 text-center lg:text-left"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.2,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              Receptive Properties
            </motion.h1>

            <motion.div
              className="text-gray-700 leading-relaxed space-y-5"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: 0.4,
                ease: "easeOut"
              }}
              viewport={{ once: true }}
            >
              <p className="text-base sm:text-lg">
                Receptive Properties is a new vertical of the Receptive Group of Companies, specializing in real estate services.
                Our dedicated team of professionals offers expert guidance and personalized services to assist individuals and 
                businesses in buying, selling, and managing properties across India and UAE.
              </p>
              <p className="text-base sm:text-lg">
                With a focus on customer satisfaction and excellence, Receptive Properties aims to help clients navigate the real 
                estate market with ease and confidence. Trust in Receptive Properties to be your partner in finding the perfect 
                property solution for your needs.
              </p>
              <p className="text-base sm:text-lg">
                From visa applications and employee recruitment to investment opportunities and property transactions, 
                we are here to support you every step of the way. Trust in our expertise, reliability, 
                and unwavering dedication to your success as we work together to achieve your goals and aspirations. 
                Let Receptive Group of Companies be your partner in building a successful and prosperous future.
              </p>
            </motion.div>

            {/* Simple call-to-action button */}
            <motion.div 
              className="flex justify-center lg:justify-start pt-2"
              initial={{ opacity: 0, y: 15 }}
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
          
          {/* Image Section - Made smaller */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center order-2"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
              ease: "easeOut"
            }}
            viewport={{ once: true, amount: 0.3 }}
            whileHover={{
              scale: 1.02,
              transition: { duration: 0.3 }
            }}
          >
            <div className="w-full max-w-xs">
              <img
                src={img}
                alt="Receptive Properties"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Properties;