import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-md py-4">
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 no-underline"
        >
          Solutions
        </Link>

        {/* Hamburger Menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-700 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link
              to="/"
              className={`${
                location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
              } font-medium hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className={`${
                location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700'
              } font-medium hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
            >
              Services
            </Link>
          </li>
          <li>
            <Link
              to="/work"
              className={`${
                location.pathname === '/work' ? 'text-blue-600' : 'text-gray-700'
              } font-medium hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
            >
              work
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`${
                location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
              } font-medium hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`${
                location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
              } font-medium hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        {isOpen && (
          <ul className="absolute top-16 left-0 w-full bg-white shadow-lg py-4 space-y-2">
            <li>
              <Link
                to="/"
                className={`block px-4 py-2 ${
                  location.pathname === '/' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/services"
                className={`block px-4 py-2 ${
                  location.pathname === '/services' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className={`block px-4 py-2 ${
                  location.pathname === '/about' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block px-4 py-2 ${
                  location.pathname === '/contact' ? 'text-blue-600' : 'text-gray-700'
                } hover:text-blue-600 transition duration-300 ease-in-out transform hover:scale-110 no-underline`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </li>
          </ul>
        )}

        {/* Call-to-Action Button */}
        <Link
          to="/contact"
          className="hidden md:inline-block bg-blue-600 text-white font-medium py-2 px-4 rounded-full hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105 shadow-md"
        >
          Get Started
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;