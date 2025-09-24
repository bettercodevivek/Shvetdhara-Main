import React, { useState } from "react";
import { Link, NavLink } from 'react-router-dom';
import { FiHome, FiUser, FiEye, FiBox, FiMail, FiMenu, FiX } from 'react-icons/fi';
import {GiCow} from 'react-icons/gi';

export default function Navbar() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const navItems = [
        { to: '/', label: 'Home', icon: FiHome },
        { to: '/vision', label: 'Our Journey', icon: FiEye },
        { to: '/products', label: 'Our Products', icon: GiCow },
        { to: '/contact', label: 'Contact Us', icon: FiMail },
    ];

    return (
        <>
        {/* Main Navbar */}
<header className="sticky top-0 z-50 bg-white shadow-xl">
  <nav className="relative bg-gradient-to-r from-blue-50 via-white to-green-50 border-b-2 border-emerald-600">
    {/* Decorative milk splash (super subtle) */}
    <div className="absolute inset-0 opacity-5 bg-[url('https://i.ibb.co/8YfPvS3/milk-splash.png')] bg-cover bg-center pointer-events-none"></div>

    <div className="container mx-auto px-4 lg:px-8 relative">
      <div className="flex items-center justify-between h-20">
        {/* Logo Section */}
        <Link to="/" className="flex items-center space-x-0 group">
          <img
            src="https://i.ibb.co/Nn3db0vV/Shvetdhara-Logo.webp"
            className="h-16 w-auto object-contain drop-shadow-md"
            alt="Shvetdhara Logo"
          />
          <div className="hidden md:block pl-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
              Shvetdhara
            </div>
            <div className="text-sm text-cyan-600 font-semibold">
              Har Din Ki Shuruaat, Shvetdhara ke Saath.
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-2">
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `relative px-6 py-3 font-semibold transition-all duration-500 ${
                  isActive ? "text-emerald-700" : "text-gray-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <span className="relative z-10">{item.label}</span>

                  {/* Animated wave underline */}
                  <span
                    className={`absolute left-0 bottom-1 h-[3px] w-full bg-gradient-to-r from-emerald-400 to-green-500 transform scale-x-0 origin-right transition-transform duration-500 ${
                      isActive ? "scale-x-100 origin-left" : "group-hover:scale-x-100 group-hover:origin-left"
                    }`}
                  ></span>

                  {/* Hover background liquid fill */}
                  <span
                    className="absolute inset-0 -z-10 bg-emerald-50 rounded-xl scale-y-0 origin-bottom transition-transform duration-500 group-hover:scale-y-100"
                  ></span>
                </>
              )}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleSidebar}
          className="lg:hidden relative p-3 rounded-full border-2 border-emerald-600 bg-white text-emerald-700 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-110"
          aria-label="Toggle menu"
        >
          {isSidebarOpen ? <FiX size={16} /> : <FiMenu size={16} />}
        </button>
      </div>
    </div>
  </nav>
</header>

            {/* Mobile Sidebar Overlay */}
<div
  className={`fixed inset-0 z-50 transition-opacity ${
    isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
  }`}
>
  <div
    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
    onClick={toggleSidebar}
  ></div>

  <div
    className={`fixed inset-y-0 left-0 w-60 bg-white/40 backdrop-blur-xl shadow-xl border-r border-white/30 transform transition-transform duration-300 ease-in-out ${
      isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    } rounded-r-2xl flex flex-col justify-between`}
  >
    {/* Header with logo + close */}
    <div className="flex items-center justify-between p-5">
      <img
        src="https://i.ibb.co/Nn3db0vV/Shvetdhara-Logo.webp"
        className="h-16 drop-shadow-lg"
        alt="Sidebar Logo"
      />
      <button
        onClick={toggleSidebar}
        type="button"
        className="text-gray-700 hover:text-emerald-600 transition-colors"
        aria-label="close menu"
      >
        <svg
          className="w-8 h-8"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
    </div>

    {/* Menu Items */}
    <ul className="flex flex-col px-6 space-y-4">
      {[
        { to: "/home", label: "Home", icon: FiHome },
        { to: "/vision", label: "Our Vision", icon: FiEye },
        { to: "/products", label: "Our Products", icon: FiBox },
        { to: "/contact", label: "Contact Us", icon: FiMail },
      ].map(({ to, label, icon: Icon }) => (
        <li key={to} className="relative group">
          <NavLink
            to={to}
            onClick={toggleSidebar}
            className={({ isActive }) =>
              `flex items-center space-x-4 py-3 px-6 rounded-lg text-sm font-normal transition-all duration-300 ${
                isActive
                  ? "text-emerald-600 bg-white/70 shadow-md"
                  : "text-gray-900 bg-white/50 hover:bg-white/70 hover:text-emerald-600"
              }`
            }
          >
            <Icon className="w-6 h-6" />
            <span>{label}</span>
          </NavLink>
          {/* Ripple underline */}
          <span className="absolute left-6 bottom-1 h-[2px] w-0 bg-gradient-to-r from-emerald-400 to-green-600 rounded-full transition-all duration-500 group-hover:w-[70%]"></span>
        </li>
      ))}
    </ul>

    {/* Slogan at the bottom */}
    <div className="p-6 text-center border-t border-white/30">
      <p className="text-sm font-normal text-green-800 drop-shadow-sm">
        Har Din Ki Shuruaat, Shvetdhara ke Saath.
      </p>
    </div>
  </div>
</div>

        </>
    );
}