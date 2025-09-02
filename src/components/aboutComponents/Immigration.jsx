import React from 'react';
import img from '../../assets/images/IMMIGRATION_logo.jpg';
import { motion } from 'framer-motion';

const Immigration = () => {
  return (
    <div className="w-full overflow-hidden bg-white py-10 md:py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row lg:gap-10 gap-8 items-center">
          
          {/* Image Section - Made smaller */}
          <motion.div
            className="w-full lg:w-2/5 flex justify-center"
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
                alt="Receptive Immigration Services"
                className="w-full h-auto object-cover rounded-lg shadow-md"
              />
            </div>
          </motion.div>

          {/* Text Content Section */}
          <motion.div
            className="space-y-6 w-full lg:w-3/5"
            initial={{ opacity: 0, x: 20 }}
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
              Receptive Immigration
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
                Receptive Immigration a division of the Receptive Group of Companies, is a trusted name in the investment industry.
                With a focus on creating wealth and financial security for our clients, Receptive Investments offers expert guidance
                and personalized services to help individuals and businesses navigate the investment landscape.
              </p>
              <p className="text-base sm:text-lg">
                Our experienced team of professionals provides tailored solutions to identify and capitalize on lucrative investment 
                opportunities, ensuring that our clients achieve their financial goals. Trust in Receptive Investments to be your 
                partner in building a successful and prosperous financial future.
              </p>
              <p className="text-base sm:text-lg font-medium text-gray-900">
                Contact us today to learn more about how we can help you maximize your investment potential.
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
        </div>
      </div>
    </div>
  );
};

export default Immigration;