import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-4 gap-8">
        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold text-green-100 mb-4">Shvetdhara</h2>
          <p className="text-sm leading-relaxed">
            Nurturing health and happiness since 2016.  
            Premium quality dairy products, crafted with care for every home.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-100 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-green-200">About Us</a></li>
            <li><a href="#" className="hover:text-green-200">Our Products</a></li>
            <li><a href="#" className="hover:text-green-200">Why Choose Us</a></li>
            <li><a href="#" className="hover:text-green-200">Testimonials</a></li>
            <li><a href="#" className="hover:text-green-200">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold text-green-100 mb-4">Contact Us</h3>
          <p className="text-sm">📍 123 Shvetdhara Dairy Lane, Anand, Gujarat</p>
          <p className="text-sm">📞 +91 98765 43210</p>
          <p className="text-sm">✉️ care@shvetdhara.com</p>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-green-100 mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="p-3 bg-green-200 rounded-full hover:bg-green-300">
              <FaFacebookF className="text-green-200 text-lg" />
            </a>
            <a href="#" className="p-3 bg-green-200 rounded-full hover:bg-green-300">
              <FaInstagram className="text-green-200 text-lg" />
            </a>
            <a href="#" className="p-3 bg-green-200 rounded-full hover:bg-green-300">
              <FaTwitter className="text-green-200 text-lg" />
            </a>
            <a href="#" className="p-3 bg-green-200 rounded-full hover:bg-green-300">
              <FaLinkedinIn className="text-green-200 text-lg" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-green-200 mt-8 py-4 text-center text-sm text-white">
        © {new Date().getFullYear()} Shvetdhara Dairy. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
