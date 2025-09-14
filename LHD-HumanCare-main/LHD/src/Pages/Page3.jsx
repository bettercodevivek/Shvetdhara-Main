import React from "react";
import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonials = () => {
  const reviews = [
    {
      name: "Priya Sharma",
      role: "Nutritionist & Mother",
      text: "Shvetdhara milk is the only brand I trust for my kids. Fresh, safe, and packed with nutrition.",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      name: "Rohan Patel",
      role: "Fitness Enthusiast",
      text: "High-quality protein, fresh taste, and consistent quality. Shvetdhara is a game-changer for my diet.",
      img: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Ananya Verma",
      role: "Chef & Food Blogger",
      text: "Paneer and ghee from Shvetdhara elevate every dish I prepare. True farm-to-table goodness.",
      img: "https://randomuser.me/api/portraits/women/32.jpg",
    },
    {
      name: "Arjun Mehta",
      role: "Business Professional",
      text: "Their efficient delivery and premium quality makes Shvetdhara my go-to choice every day.",
      img: "https://randomuser.me/api/portraits/men/23.jpg",
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
        What Our Customers Say
      </motion.h1>

      {/* Grid */}
      <div className="w-full max-w-7xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {reviews.map((review, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="bg-white/90 backdrop-blur-md border border-green-200 rounded-2xl shadow-lg p-8 flex flex-col items-start relative hover:shadow-2xl transform hover:-translate-y-2 transition duration-300"
          >
            {/* Quote Icon */}
            <FaQuoteLeft className="text-green-400 text-2xl absolute -top-4 -left-4 bg-white p-2 rounded-full shadow-md" />

            {/* Text */}
            <p className="text-gray-700 text-base leading-relaxed mb-6">
              "{review.text}"
            </p>

            {/* Reviewer Info */}
            <div className="flex items-center gap-4">
              <img
                src={review.img}
                alt={review.name}
                className="w-14 h-14 rounded-full object-cover border-2 border-green-400 shadow-sm"
              />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  {review.name}
                </h3>
                <p className="text-sm text-gray-600">{review.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
