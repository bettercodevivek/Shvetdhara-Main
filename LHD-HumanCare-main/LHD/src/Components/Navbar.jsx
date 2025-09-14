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
        { to: '/profile', label: 'About Us', icon: FiUser },
        { to: '/vision', label: 'Our Journey', icon: FiEye },
        { to: '/products', label: 'Our Products', icon: GiCow },
        { to: '/contact', label: 'Contact Us', icon: FiMail },
    ];

    return (
        <>
            {/* Main Navbar */}
            <header className="sticky top-0 z-50 bg-white shadow-lg">
                <nav className="bg-gradient-to-r from-blue-50 to-green-50 border-b-2 border-emerald-600">
                    <div className="container mx-auto px-4 lg:px-8">
                        <div className="flex items-center justify-between h-20">
                            {/* Logo Section */}
                            <Link to="/" className="flex items-center space-x-0 group">
                                <div className="relative">
                                    <div className="relative bg-inherit rounded-full">
                                        <img
                                            src="https://i.ibb.co/hxVY6QnM/SHVETDHARA-LOGO-FINAL-v12-page-0001-removebg-preview.png"
                                            className="h-32 w-auto object-contain"
                                            alt="LHD Human Care Logo"
                                        />
                                    </div>
                                </div>
                                <div className="hidden md:block">
                                    <div className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                                        Shvetdhara
                                    </div>
                                    <div className="text-sm text-cyan-600 font-semibold">
                                        Har Din Ki Shuruaat, Shvetdhara ke Saath.
                                    </div>
                                </div>
                            </Link>

                            {/* Desktop Navigation */}
                            <div className="hidden lg:flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        className={({ isActive }) =>
                                            `relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                                isActive 
                                                    ? "bg-gradient-to-r from-emerald-500 to-emerald-500 text-white shadow-lg" 
                                                    : "text-gray-700 hover:bg-white hover:text-emerald-600 hover:shadow-md"
                                            }`
                                        }
                                    >
                                        {({ isActive }) => (
                                            <>
                                                {item.label}
                                                {isActive && (
                                                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full"></div>
                                                )}
                                            </>
                                        )}
                                    </NavLink>
                                ))}
                            </div>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={toggleSidebar}
                                className="lg:hidden relative p-3 rounded-md bg-sky-300 text-black shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                                aria-label="Toggle menu"
                            >
                                {isSidebarOpen ? <FiX size={15} /> : <FiMenu size={15} />}
                            </button>
                        </div>
                    </div>
                </nav>
            </header>

            {/* Mobile Sidebar Overlay */}
            
              <div className={`fixed inset-0 z-50 transition-opacity ${isSidebarOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-filter backdrop-blur-sm" onClick={toggleSidebar}></div>
                <div className={`fixed inset-y-0 left-0 w-64 bg-white bg-opacity-70 backdrop-filter backdrop-blur-lg shadow-lg transform transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} rounded-r-xl`}>
                    <div className="flex justify-between items-center p-4">
                        <img
                            src="https://i.postimg.cc/5yzJFyrz/LHD-Human-Care-Logo-1-removebg-preview.png"
                            className="h-16"
                            alt="Sidebar Logo"
                        />
                        <button
                            onClick={toggleSidebar}
                            type="button"
                            className="text-gray-500 hover:text-gray-700 focus:outline-none focus:text-gray-700"
                            aria-label="close menu"
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                    </div>
                    <ul className="flex flex-col p-6 space-y-6">
                        <li>
                            <NavLink to='/home'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiHome className="w-5 h-5" /> <span>Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/profile'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiUser className="w-5 h-5" /> <span>Corporate Profile</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/vision'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiEye className="w-5 h-5" /> <span>Our Vision</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/products'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiBox className="w-5 h-5" /> <span>Our Products</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'
                                onClick={toggleSidebar}
                                className={({ isActive }) =>
                                    `flex items-center space-x-4 py-2 px-6 rounded-lg shadow-md bg-white text-lg font-semibold ${isActive ? "text-blue-500" : "text-gray-900"} hover:bg-gray-200 hover:text-blue-700 transition-transform transform hover:scale-105`
                                }
                            >
                                <FiMail className="w-5 h-5" /> <span>Contact Us</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
          </div>
        </>
    );
}