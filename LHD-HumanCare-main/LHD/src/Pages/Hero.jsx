import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative h-full -top-4">
      <div className="relative mx-auto top-16 z-0 opacity-95 rounded-2xl h-64 sm:h-3/4 aspect-video w-11/12 drop-shadow-2xl overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover rounded-2xl"
        >
          <source src="https://res.cloudinary.com/dhqffqq46/video/upload/v1759389701/5022437-sd_426_240_30fps_vhzjv5.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#93DA97]/40 via-black/30 to-black/60 flex flex-col items-center justify-center rounded-2xl px-4">
          <h2 className="text-[#FAF9F6] text-xl sm:text-5xl font-light font-poppins drop-shadow-lg tracking-wide text-center">
            Shvetdhara – From Our Farmers to Your Family
          </h2>

          <Link to="/products">
            <button className="mt-6 px-4 py-2 bg-white border-2 border-sky-100 text-sky-800 text-sm sm:text-lg font-normal rounded-full shadow-lg transition-all duration-300">
              Explore Products
            </button>
          </Link>
        </div>
      </div>

      {/* Floating Buttons */}
      <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
        <a
          href="tel:+91"
          className="group relative bg-white text-sky-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-sky-200 hover:border-sky-300"
          aria-label="Call us"
        >
          <FaPhoneAlt size={20} className="relative z-10" />
          <div className="absolute inset-0 bg-sky-50 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
        </a>
        <a
          href="https://wa.me/"
          className="group relative bg-white text-green-600 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-green-200 hover:border-green-300"
          aria-label="WhatsApp us"
        >
          <FaWhatsapp size={22} className="relative z-10" />
          <div className="absolute inset-0 bg-green-50 rounded-full scale-0 group-hover:scale-100 transition-transform"></div>
        </a>
      </div>
    </div>
  );
};

export default Hero;
