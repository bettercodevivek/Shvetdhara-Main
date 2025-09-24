import React from "react";
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin, Award } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-sky-700 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="-ml-4 flex items-center mb-6">
              <img 
                src="https://i.ibb.co/Nn3db0vV/Shvetdhara-Logo.webp" 
                alt="Shvetdhara Logo" 
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-2xl font-normal text-white">Shvetdhara</h2>
            </div>
            <p className="text-sky-100 leading-relaxed ">
              Leading dairy brand committed to excellence, quality, and sustainable practices since 2002.
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Our Products</h3>
            <ul className="space-y-3 text-sky-100">
              <li><a href="#" className="hover:text-white transition-colors">Premium Milk Range</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Dahi Range</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Ghee Range</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Premium Buttermilk Range</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Company</h3>
            <ul className="space-y-3 text-sky-100">
              <li><a href="#" className="hover:text-white transition-colors">About Shvetdhara</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Leadership Team</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certifications</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sustainability</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-6">Contact Information</h3>
            <div className="space-y-4 text-sky-100">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Corporate Office</p>
                  <p className="text-sm">123 Dairy Excellence Park<br />Dehradun</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium">+91 98765 43210</p>
                  <p className="text-sm">Business Inquiries</p>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <div>
                  <p className="font-medium">business@shvetdhara.com</p>
                  <p className="text-sm">Partnership Opportunities</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Links & Social */}
        <div className="border-t border-sky-700 pt-8 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h4 className="text-lg ml-2 font-semibold text-white mb-4">Connect With Us</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-sky-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-sky-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 bg-sky-700 hover:bg-sky-600 rounded-lg flex items-center justify-center transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-sky-700 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-sky-100">
          <div className="mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} Shvetdhara Dairy . All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;