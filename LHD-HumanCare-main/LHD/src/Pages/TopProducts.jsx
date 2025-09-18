import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaInfoCircle } from "react-icons/fa";

const HeroCarousel = () => {
  const products = [
    {
      name: "Pure Cow Milk",
      tagline: "Nature’s Freshness in Every Drop",
      video:
        "https://res.cloudinary.com/dhqffqq46/video/upload/f_auto,q_auto/tmpqralb80y_vdltzu.mp4",
      details:
        "Sourced directly from grass-fed cows, unadulterated and fresh daily.",
    },
    {
      name: "Farm-Fresh Curd",
      tagline: "Smooth & Probiotic Powerhouse",
      video:
        "https://res.cloudinary.com/dhqffqq46/video/upload/v1758209645/tmpm10lfujw_jnfipj.mp4",
      details:
        "Traditional fermentation process, creamy texture, packed with probiotics.",
    },
    {
      name: "Flavored Milk",
      tagline: "Refreshing Taste, Energizing Sip",
      video:
        "https://res.cloudinary.com/dhqffqq46/video/upload/f_auto,q_auto/tmpqralb80y_vdltzu.mp4",
      details:
        "Available in chocolate, strawberry, and vanilla – perfect anytime refreshment.",
    },
  ];

  const [index, setIndex] = useState(0);
  const [showDetails, setShowDetails] = useState(false);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % products.length);
      setShowDetails(false);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-black flex items-center justify-center px-6 sm:px-16">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col-reverse sm:flex-row items-center justify-center gap-8 sm:gap-16 w-full max-w-6xl h-full"
        >
          {/* Product Info */}
          <div className="flex-1 flex flex-col justify-center text-center sm:text-left">
            <motion.h2
              key={products[index].name}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-6xl font-bold mb-4 text-white drop-shadow-lg"
            >
              {products[index].name}
            </motion.h2>
            <motion.p
              key={products[index].tagline}
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="text-lg sm:text-2xl text-gray-200 mb-6 drop-shadow-md"
            >
              {products[index].tagline}
            </motion.p>

            {/* Details Button */}
            <button
              onClick={() => setShowDetails((prev) => !prev)}
              className="flex items-center gap-2 px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg font-semibold shadow-lg transition"
            >
              <FaInfoCircle /> {showDetails ? "Hide Details" : "View Details"}
            </button>

            {/* Details Reveal */}
            <AnimatePresence>
              {showDetails && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.5 }}
                  className="mt-6 p-4 bg-black/60 rounded-lg text-gray-200 max-w-md"
                >
                  {products[index].details}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Product Video */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative mt-4 sm:mt-0 w-full max-w-md sm:max-w-lg lg:max-w-xl h-[350px] sm:h-[350px] lg:h-[450px] rounded-2xl overflow-hidden shadow-2xl ring-2 ring-green-500/30">
              <video
                src={products[index].video}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none"></div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Dots Navigation */}
      <div className="absolute bottom-6 w-full flex justify-center gap-3 z-20">
        {products.map((_, i) => (
          <button
            key={i}
            onClick={() => {
              setIndex(i);
              setShowDetails(false);
            }}
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
