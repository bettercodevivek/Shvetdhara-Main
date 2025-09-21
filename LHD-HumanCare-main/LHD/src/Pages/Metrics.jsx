import React from "react";
import { motion } from "framer-motion";
import {
  FaTint,
  FaCheese,
  FaIceCream,
  FaBreadSlice,
  FaGlassWhiskey,
  FaLeaf,
  FaShoppingBasket,
} from "react-icons/fa";

const ProductShowcase = () => {
  const products = [
    {
      icon: <FaTint size={42} />,
      name: "Fresh Milk",
      desc: "Farm-fresh, pure milk with uncompromised quality and nutrition.",
    },
    {
      icon: <FaCheese size={42} />,
      name: "Paneer",
      desc: "Soft and creamy paneer, perfect for every Indian recipe.",
    },
    {
      icon: <FaIceCream size={42} />,
      name: "Curd & Yogurt",
      desc: "Probiotic-rich curd and yogurt for a healthier lifestyle.",
    },
    {
      icon: <FaBreadSlice size={42} />,
      name: "Butter & Ghee",
      desc: "Golden ghee and smooth butter, crafted with tradition.",
    },
    {
      icon: <FaGlassWhiskey size={42} />,
      name: "Flavored Milk",
      desc: "Exciting flavors blended with pure milk for every mood.",
    },
    {
      icon: <FaLeaf size={42} />,
      name: "Organic Range",
      desc: "Certified organic milk and dairy products for conscious living.",
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20 bg-green-100 px-6">
      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl sm:text-5xl font-extrabold mb-12 text-center text-gray-900 tracking-tight"
      >
        Our Premium Dairy Range
      </motion.h1>

      {/* Products Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {products.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/90 backdrop-blur-md border border-green-200 rounded-2xl shadow-lg hover:shadow-2xl p-8 flex flex-col items-center text-center transform hover:-translate-y-2 transition duration-300"
          >
            <div className="text-green-600 mb-5">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800">
              {item.name}
            </h3>
            <p className="text-gray-600 mt-3 text-sm leading-relaxed">
              {item.desc}
            </p>
            <button className="mt-6 px-6 py-2 rounded-xl bg-green-500 text-white font-semibold hover:bg-green-600 transition-all shadow-md hover:shadow-lg">
              Explore
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProductShowcase;
