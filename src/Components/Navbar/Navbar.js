import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();

  const links = [
    { name: "Home", path: "/", icon: <FaHome /> },
    { name: "About", path: "/about", icon: <FaUser /> },
    { name: "Services", path: "/services", icon: <FaCogs /> },
    { name: "Work", path: "/work", icon: <FaBriefcase /> },
    { name: "Contact", path: "/contact", icon: <FaEnvelope /> },
  ];

  // Scroll progress effect
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = (scrollY / (documentHeight - windowHeight)) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className="fixed w-full z-50 font-sans"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      {/* Floating Navbar */}
      <div className="container mx-auto px-4 md:px-6 py-3">
        <motion.div
          className="bg-slate-900/80 backdrop-blur-xl rounded-full shadow-xl relative px-6 py-3 flex justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {/* Scroll Progress Indicator */}
          <motion.div
            className="absolute bottom-0 left-0 h-1 rounded bg-gradient-to-r from-cyan-400 to-blue-500"
            style={{ width: `${scrollProgress}%` }}
          />

          {/* Logo */}
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent no-underline">
              Holoul
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {links.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.3 }}
              >
                <Link
                  to={link.path}
                  className={`relative group flex items-center px-5 py-2 rounded-full transition-all no-underline ${
                    location.pathname === link.path
                      ? "bg-cyan-500/20"
                      : "hover:bg-cyan-500/20"
                  }`}
                >
                  <motion.span className="text-cyan-400 text-xl group-hover:text-white transition-colors">
                    {link.icon}
                  </motion.span>
                  <span className="text-slate-300 group-hover:text-white text-base font-semibold ml-3">
                    {link.name}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <motion.button className="md:hidden p-2 rounded-lg" whileTap={{ scale: 0.9 }} onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars className="text-xl text-slate-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="md:hidden fixed inset-0 bg-slate-900/90 backdrop-blur-lg flex flex-col items-center justify-center space-y-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <motion.button
              className="absolute top-6 right-6 p-3 rounded-full hover:bg-slate-800/50"
              whileTap={{ scale: 0.8 }}
              onClick={() => setMenuOpen(false)}
            >
              <FaTimes className="text-2xl text-slate-300" />
            </motion.button>

            {/* Mobile Menu Links */}
            <motion.div className="flex flex-col items-center space-y-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ x: -50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -50, opacity: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.3 }}
                >
                  <Link
                    to={link.path}
                    className={`flex items-center space-x-4 p-4 rounded-full transition-all no-underline ${
                      location.pathname === link.path ? "bg-slate-800/50" : "hover:bg-slate-800/50"
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {/* Icon Animation */}
                    <motion.span className="text-cyan-400 text-xl" whileHover={{ scale: 1.2 }}>
                      {link.icon}
                    </motion.span>
                    <span className="text-slate-300 text-lg font-medium">{link.name}</span>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
