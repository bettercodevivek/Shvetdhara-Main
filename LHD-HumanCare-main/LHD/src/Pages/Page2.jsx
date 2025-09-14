import React from "react";
import { motion } from "framer-motion";
import {
  FaLeaf,
  FaShieldAlt,
  FaSmile,
  FaTruck,
  FaAward,
  FaHandsHelping,
} from "react-icons/fa";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <FaLeaf size={42} />,
      title: "Farm Fresh & Natural",
      desc: "Direct from our farms to your table, ensuring unmatched freshness and nutrition.",
    },
    {
      icon: <FaShieldAlt size={42} />,
      title: "Pure & Safe",
      desc: "Every drop undergoes strict quality checks for purity, safety, and hygiene.",
    },
    {
      icon: <FaSmile size={42} />,
      title: "Trusted by Families",
      desc: "Since 2016, Shvetdhara has been a household name for healthy, happy families.",
    },
    {
      icon: <FaTruck size={42} />,
      title: "Efficient Delivery",
      desc: "Seamless cold-chain logistics ensure freshness is never compromised.",
    },
    {
      icon: <FaAward size={42} />,
      title: "Certified Excellence",
      desc: "International quality standards with a commitment to continuous innovation.",
    },
    {
      icon: <FaHandsHelping size={42} />,
      title: "Sustainable & Ethical",
      desc: "We care for our cows, farmers, and the planet through sustainable practices.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-green-200 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tight"
      >
        Why Choose <span className="text-green-600">Shvetdhara</span>?
      </motion.h1>

      {/* Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/90 backdrop-blur-md border border-green-200 rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300"
          >
            <div className="text-green-600 mb-5">{reason.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {reason.title}
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {reason.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
