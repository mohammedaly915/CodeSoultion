import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { path: '/', name: 'Home' },
  { path: '/services', name: 'Services' },
  { path: '/work', name: 'Work' },
  { path: '/about', name: 'About' },
  { path: '/contact', name: 'Contact' },
];

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuVariants = {
    open: { 
      opacity: 1,
      y: 0,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.2,
        type: 'spring',
        stiffness: 300
      }
    },
    closed: { 
      opacity: 0,
      y: '-100%',
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        type: 'spring',
        stiffness: 300
      }
    }
  };

  const linkVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 }
  };

  return (
    <motion.nav 
      className={`sticky top-0 z-50 py-4 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-lg shadow-sm' : 'bg-white'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, type: 'spring' }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div 
          whileHover={{ scale: 1.05 }} 
          whileTap={{ scale: 0.95 }}
          className="relative"
        >
          <Link
            to="/"
            className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent no-underline"
          >
            Code Soultions
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-0 hover:opacity-20 transition-opacity"
              initial={{ scale: 0.9 }}
            />
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <motion.li 
                key={link.path}
                className="relative"
                whileHover="hover"
                whileTap="tap"
                variants={linkVariants}
              >
                <Link
                  to={link.path}
                  className={`relative z-10 px-4 py-2 text-gray-700 font-medium transition-colors no-underline ${
                    location.pathname === link.path ? 'text-blue-600' : 'hover:text-blue-600'
                  }`}
                >
                  {link.name}
                  {location.pathname === link.path && (
                    <motion.div 
                      className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-600 to-cyan-500"
                      layoutId="activeLink"
                      transition={{ type: 'spring', stiffness: 500 }}
                    />
                  )}
                </Link>
                <motion.div
                  className="absolute inset-0 bg-gray-100 rounded-lg opacity-0"
                  variants={{
                    hover: { opacity: 1, scale: 1.05 },
                    tap: { scale: 0.95 }
                  }}
                  transition={{ duration: 0.2 }}
                />
              </motion.li>
            ))}
          </ul>
          
          {/* CTA Button */}
          <motion.div 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-500 blur-lg opacity-0 group-hover:opacity-40 transition-opacity" />
            <Link
              to="/contact"
              className="relative z-10 bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-medium py-2.5 px-6 rounded-full shadow-lg hover:shadow-xl transition-all no-underline"
            >
              Get Started
            </Link>
          </motion.div>
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          className="md:hidden p-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          whileTap={{ scale: 0.95 }}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-6 h-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <motion.path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              initial={false}
              animate={{ rotate: isOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            />
          </svg>
        </motion.button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="md:hidden fixed inset-0 bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            >
              <motion.ul
                className="absolute top-20 right-4 w-64 bg-white/95 backdrop-blur-lg rounded-xl shadow-2xl p-4 space-y-4"
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                onClick={(e) => e.stopPropagation()}
              >
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.path}
                    variants={linkVariants}
                  >
                    <Link
                      to={link.path}
                      className={`flex items-center px-4 py-3 rounded-lg transition-all no-underline ${
                        location.pathname === link.path
                          ? 'bg-gradient-to-r from-blue-600/10 to-cyan-500/10 text-blue-600'
                          : 'text-gray-700 hover:bg-gray-100'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      <span className="relative z-10">{link.name}</span>
                      {location.pathname === link.path && (
                        <motion.div 
                          className="absolute right-4 w-2 h-2 bg-blue-600 rounded-full"
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', stiffness: 500 }}
                        />
                      )}
                    </Link>
                  </motion.li>
                ))}
                <motion.li variants={linkVariants}>
                  <Link
                    to="/contact"
                    className="block text-center bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 px-6 rounded-lg shadow-md hover:shadow-lg transition-all no-underline"
                    onClick={() => setIsOpen(false)}
                  >
                    Get Started
                  </Link>
                </motion.li>
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;