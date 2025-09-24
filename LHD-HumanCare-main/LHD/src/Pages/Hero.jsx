import { useState, useEffect } from "react";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  const ImageSlide = [
    "https://i.ibb.co/zW181Gs8/leon-ephraim-Axo-Nnn-H1-Y98-unsplash-1.webp",
    "https://i.ibb.co/NgknQqhP/walk-a2-Kb-Rr-G8-C-w-unsplash.jpg",
    "https://i.ibb.co/8gqDnPYQ/aleksey-melkomukov-v-Eyp-Neg-A9k-unsplash-1.jpg",
  ];

  const headings = [
  {
    title: "Shvetdhara – From Farm to Family",
    sub: "हर घर तक पहुँचती शुद्धता और स्नेह से बनी डेयरी",
  },
  {
    title: "Purity You Can Taste, Trust that wins your heart",
    sub: "श्वेतधारा – हर बूंद में पीढ़ियों का विश्वास",
  },
  {
    title: "Crafted by Tradition, Perfected for Today",
    sub: "भारत की डेयरी धरोहर, आधुनिक गुणवत्ता के साथ",
  }
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
              <h2 className="text-[#FAF9F6] text-xl sm:text-5xl font-light font-poppins drop-shadow-lg tracking-wide">
                {headings[index].title}
              </h2>
              <p className="text-[#FAF9F6] font-light font-poppins text-xs sm:text-lg mt-3 opacity-90 max-w-2xl">
                {headings[index].sub}
              </p>

              <Link to="/products">
                <button
                  className="mt-6 px-4 py-2 bg-sky-100 text-sky-800 text-sm sm:text-lg font-normal rounded-lg shadow-lg transition-all duration-300"
                >
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Contact Buttons */}
      <div className="fixed bottom-4 right-4 flex flex-col gap-3 z-50">
        <a
          href="tel:+91"
          className="bg-sky-400 text-white p-3 rounded-full shadow-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-110"
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
