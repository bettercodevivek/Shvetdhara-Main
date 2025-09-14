import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaCartPlus, FaInfoCircle } from "react-icons/fa";

const HeroCarousel = () => {
  const products = [
    {
      name: "Pure Cow Milk",
      tagline: "Nature’s Freshness in Every Drop",
      img: "https://i.ibb.co/zwgMBQ4/IMG-1656.jpg",
    },
    {
      name: "Farm-Fresh Curd",
      tagline: "Smooth & Probiotic Powerhouse",
      img: "https://i.ibb.co/M5y9Vddp/IMG-1629.jpg",
    },
    {
      name: "Flavored Milk",
      tagline: "Refreshing Taste, Energizing Sip",
      img: "https://i.ibb.co/cSRkqw23/IMG-1671.jpg",
    },
  ];

  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 flex flex-col sm:flex-row items-center justify-center text-white"
        >
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black"></div>

          {/* Product Image */}
          <div className="relative z-10 flex-1 flex justify-center">
            <img
              src={products[index].img}
              alt={products[index].name}
              className="w-72 sm:w-[28rem] object-contain drop-shadow-2xl"
            />
          </div>

          {/* Product Info */}
          <div className="relative z-10 flex-1 text-center sm:text-left px-6 sm:px-16">
            <motion.h2
              key={products[index].name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold mb-4"
            >
              {products[index].name}
            </motion.h2>
            <motion.p
              key={products[index].tagline}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-2xl text-gray-300 mb-8"
            >
              {products[index].tagline}
            </motion.p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center sm:justify-start">
              <button className="flex items-center gap-2 px-6 py-3 bg-green-600 hover:bg-green-500 text-white rounded-lg font-semibold shadow-lg transition">
                <FaCartPlus /> Add to Cart
              </button>
              <button className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-semibold shadow-lg transition">
                <FaInfoCircle /> View Details
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`w-4 h-4 rounded-full transition ${
              i === index ? "bg-green-500 scale-125" : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
