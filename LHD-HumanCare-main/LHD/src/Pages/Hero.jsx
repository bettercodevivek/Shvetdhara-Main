import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const ImageSlide = [
    "https://i.ibb.co/Cgfrmkx/20250914-2316-Shvetdhara-Dairy-Logo-Scene-remix-01k54n75xaf8jar7pmztdftn5x.webp",
    "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
    "https://i.ibb.co/8gqDnPYQ/aleksey-melkomukov-v-Eyp-Neg-A9k-unsplash-1.jpg",
  ];

  const headings = [
    { title: "", sub: "" },
    {
      title: "From Farm to Family",
      sub: "Wholesome Milk & Dairy Crafted with Care for Every Home",
    },
    {
      title: "Purity You Can Taste, Trust You Can Rely On",
      sub: "Building a Legacy of Quality Indian Dairy, One Drop at a Time",
    },
  ];

  const [currentIndex, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % ImageSlide.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-full -top-4">
      <div className="relative mx-auto top-16 z-0 opacity-95 rounded-2xl h-64 sm:h-3/4 aspect-video w-11/12 drop-shadow-2xl overflow-hidden">
        {ImageSlide.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 flex flex-col items-center justify-center text-center ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image}
              alt={`Slide ${index}`}
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#93DA97]/40 via-black/30 to-black/60 flex flex-col items-center justify-center rounded-2xl px-4">
              <h2 className="text-[#FAF9F6] text-2xl sm:text-5xl font-extrabold drop-shadow-lg tracking-wide">
                {headings[index].title}
              </h2>
              <p className="text-[#FAF9F6] font-medium text-sm sm:text-lg mt-3 opacity-90 max-w-2xl">
                {headings[index].sub}
              </p>

              {/* <Link to="/products">
                <button
                  className="mt-6 px-6 py-3 bg-[#93DA97] text-[#333333] text-sm sm:text-lg font-semibold rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:bg-[#7BC87F]"
                >
                  Explore Products
                </button>
              </Link> */}
            </div>
          </div>
        ))}
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+91"
          className="bg-[#93DA97] text-[#333333] p-3 rounded-full shadow-lg hover:bg-[#7BC87F] transition-all duration-300 transform hover:scale-110"
        >
          <FaPhoneAlt size={22} />
        </a>
        <a
          href="https://wa.me/"
          className="bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110"
        >
          <FaWhatsapp size={24} />
        </a>
      </div>
    </div>
  );
};

export default Hero;
