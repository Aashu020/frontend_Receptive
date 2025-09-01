import { motion } from "framer-motion";
import Navbar from "../Navbar";
import immigration from "../../assets/images/immigration_about.jpg";
import properties from "../../assets/images/prop_about.jpg";
import investment from "../../assets/images/inst_about.jpg";

const heroItems = [
  {
    title: "Immigration",
    img: immigration, // replace with your path
    desc: "Seamless global relocation services tailored for you.",
  },
  {
    title: "Properties",
    img: properties, // replace with your path
    desc: "Find premium properties that match your dreams.",
  },
  {
    title: "Investment",
    img: investment, // replace with your path
    desc: "Smart investment opportunities for a secure future.",
  },
];

export default function HeroSection() {
  return (
    <>
        <Navbar />
        <section className="relative w-full bg-gradient-to-r from-gray-900 via-black to-gray-800 text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
            <motion.h1
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-8"
            >
            Explore Immigration, Properties & Investments
            </motion.h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {heroItems.map((item, index) => (
                <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-xl hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-60 object-cover"
                />
                <div className="p-6">
                    <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
                    <p className="text-gray-300 text-sm">{item.desc}</p>
                </div>
                </motion.div>
            ))}
            </div>
        </div>

        {/* Optional animated background accent */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.15 }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "reverse" }}
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffcc00,_transparent_70%)] pointer-events-none"
        ></motion.div>
        </section>
    </>
  );
}
