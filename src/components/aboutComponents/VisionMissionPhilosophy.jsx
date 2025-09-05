import { motion } from "framer-motion";

const cards = [
  {
    title: "Our Vision",
    text: `Our vision is to be the premier destination for investors seeking opportunities in immigration investments and property. We strive to provide innovative, reliable, and personalized solutions that cater to the diverse needs of our clients. By leveraging our expertise in immigration law, real estate, and investment management, we aim to create a seamless and rewarding experience for investors looking to diversify their portfolios and secure residency or citizenship through investment.`,
  },
  {
    title: "Our Purpose",
    text: `The key to successful investment, immigration & properties starts with us! The Receptive Group of Companies focuses on offering comprehensive support and guidance to investors looking for financial growth, empowering your immigration journey, building your path to a new home and brighter future.`,
  },
  {
    title: "Our Philosophy",
    text: `The heart of our philosophy lies in a dedication to empowering individuals to make informed choices that lead to successful immigration, financial investments, and a prosperous future.`,
  },
];

export default function VisionMissionPhilosophy() {
  return (
    <section className="relative w-full py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-16 bg-[#0C3B34] overflow-hidden min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
      {/* Background with mobile optimization */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1350&q=80')] bg-cover md:bg-fixed bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B5A2B]/30 via-[#D2B48C]/25 to-[#8B5A2B]/30 md:from-[#8B5A2B]/20 md:via-[#D2B48C]/20 md:to-[#8B5A2B]/20"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16 text-[#D8C287] text-center"
        >
          About us
        </motion.h2>

        {/* Cards with improved responsive layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 lg:gap-6 xl:gap-8">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: index * 0.2 }}
              whileHover={{
                scale: 1.03,
                boxShadow: "0 8px 16px rgba(216, 194, 135, 0.4)",
                backgroundColor: "transparent"
              }}
              className="relative border border-[#D8C287]/90 rounded-xl md:rounded-2xl p-5 md:p-6 lg:p-8 shadow-md hover:border-[#D8C287]/40 transition-all duration-400 bg-transparent backdrop-blur-sm md:backdrop-blur-lg"
            >
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-4 md:mb-5 lg:mb-6 text-white">{card.title}</h3>
              <p className="text-xs sm:text-sm md:text-base leading-relaxed md:leading-loose text-white">{card.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}