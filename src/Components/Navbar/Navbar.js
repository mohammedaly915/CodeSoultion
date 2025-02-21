import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, memo } from "react";
import { FaHome, FaUser, FaCogs, FaBriefcase, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

// Main Navbar Component
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navbarRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const progress = Math.min((scrollY / (documentHeight - windowHeight)) * 100, 100);
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      ref={navbarRef}
      className="fixed top-4 m-auto w-[90%]  z-30 font-sans"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 0.9 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <ScrollProgressBar progress={scrollProgress}/>
      <NavbarContent setMenuOpen={setMenuOpen} menuOpen={menuOpen} setIsModalOpen={setIsModalOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsModalOpen={setIsModalOpen} />
      <ContactModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </motion.nav>
  );
};

// Navbar Content (Logo, Desktop Links, Toggle)
const NavbarContent = memo(({ setMenuOpen, menuOpen, setIsModalOpen }) => {
  return (
    <motion.div
      className="relative bg-gray-900/95 backdrop-blur-lg rounded-xl shadow-[0_6px_25px_rgba(0,0,0,0.4)] px-6 py-4 flex justify-between items-center"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
        <Link to="/" className="flex items-center gap-2 no-underline">
          <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
            Holoul
          </span>
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-8">
        {links.map((link, i) => (
          <NavLink key={link.name} link={link} index={i} />
        ))}
        <motion.button
          onClick={() => setIsModalOpen(true)}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2.5 rounded-lg font-semibold shadow-md hover:from-cyan-400 hover:to-blue-500 active:from-cyan-600 active:to-blue-700 transition-all duration-300"
          whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(34, 211, 238, 0.4)" }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.button>
      </div>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="md:hidden p-2.5 rounded-lg bg-gray-800/70 hover:bg-gray-700/70 transition-colors"
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="text-xl text-cyan-400" />
        ) : (
          <FaBars className="text-xl text-cyan-400" />
        )}
      </motion.button>
    </motion.div>
  );
});

// Reusable NavLink Component
const NavLink = memo(({ link, index, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15 + 0.2, type: "spring", stiffness: 150 }}
      className="relative"
    >
      <Link
        to={link.path}
        onClick={onClick}
        className={`flex items-center px-5 py-2.5 rounded-xl transition-all duration-300 no-underline group ${
          isActive
            ? "bg-gradient-to-r from-secondColor to-white bg-clip-text text-white shadow-[0_0_12px_rgba(139,92,246,0.2)]"
            : "hover:bg-gray-700/40"
        }`}
      >
        {/* Icon */}
        <motion.span
          className={`w-5 h-5 ${
            isActive ? "text-secondColor/2" : "text-secondColor"
          } group-hover:text-seocndColor transition-colors duration-300`}
          whileHover={{ scale: 1.15, rotate: 360 }}
          transition={{ duration: 0.4 }}
        >
          {link.icon}
        </motion.span>

        {/* Text */}
        <span
          className={`ml-3 text-base font-semibold ${
            isActive ? "text-white" : "text-gray-200"
          } group-hover:text-white transition-colors duration-300`}
        >
          {link.name}
        </span>

        {/* Active Indicator */}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-1/2 w-8 h-1 bg-gradient-to-r from-secondColor to-white bg-clip-text rounded-full transform -translate-x-1/2"
            layoutId="activeIndicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
          />
        )}
      </Link>

      {/* Hover Glow Effect */}
      <motion.div
        className="absolute inset-0 rounded-xl bg-gradient-to-r from-secondColor to-white bg-clip-text
 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ zIndex: -1 }}
      />
    </motion.div>
  );
});

// Mobile Menu Component
const MobileMenu = memo(({ menuOpen, setMenuOpen, setIsModalOpen }) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed top-20  transform -translate-x-1/2 w-[90%] max-w-sm bg-slate-900/95 backdrop-blur-xl rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.4)] py-6 px-4 md:hidden z-40"
        initial={{ opacity: 0, y: -20, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.9 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {links.map((link, i) => (
          <NavLink
            key={link.name}
            link={link}
            index={i}
            onClick={() => setMenuOpen(false)}
          />
        ))}
        <motion.button
          onClick={() => {
            setIsModalOpen(true);
            setMenuOpen(false);
          }}
          className="w-full mt-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-cyan-600 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Get in Touch
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
));

// Contact Modal Component
const ContactModal = memo(({ isOpen, setIsOpen }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          className="bg-white p-6 rounded-xl shadow-xl max-w-md w-full text-center"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -50, opacity: 0 }}
          transition={{ duration: 0.4 }}
        >
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Us</h2>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 border border-slate-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            rows="4"
          />
          <div className="flex justify-between">
            <motion.button
              className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Send
            </motion.button>
            <motion.button
              onClick={() => setIsOpen(false)}
              className="text-slate-500 hover:text-slate-700 px-6 py-2 rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    )}
  </AnimatePresence>
));



// ScrollProgressBar Component
const ScrollProgressBar = memo(({ progress }) => {
  const barRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  // Dynamically measure the navbar dimensions
  useEffect(() => {
    const updateDimensions = () => {
      if (barRef.current) {
        const { width, height } = barRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  // Calculate perimeter and progress stroke
  const { width, height } = dimensions;
  const perimeter = 2 * (width + height); // Total length of the rectangle’s outline
  const strokeDasharray = perimeter;
  const strokeDashoffset = perimeter - (progress / 100) * perimeter;

  return (
    <svg
      ref={barRef}
      className="absolute  inset-0 w-full h-full -z-10 pointer-events-none"
      preserveAspectRatio="none"
    >
      {/* Background rectangle */}
      <rect
        x="2"
        y="2"
        width={width - 4}
        height={height - 4}
        stroke="#1e293b" // Dark gray base stroke
        strokeWidth="4"
        fill="none"
        rx="16" // Matches rounded-full aesthetic
      />
      {/* Animated progress rectangle */}
      <motion.rect
        x="2"
        y="2"
        width={width - 4}
        height={height - 4}
        stroke="url(#progressGradient)"
        strokeWidth="4"
        fill="none"
        rx="16"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        initial={{ strokeDashoffset: perimeter }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      />
      {/* Gradient definition */}
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#06b6d4" /> {/* Cyan */}
          <stop offset="100%" stopColor="#3b82f6" /> {/* Blue */}
        </linearGradient>
      </defs>
    </svg>
  );
});

// Links Data
// Custom SVG Icons
const HomeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

const AboutIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20s2-4 8-4 8 4 8 4" />
  </svg>
);

const ServiceIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2a10 10 0 0 0-7 17l2-4a6 6 0 0 1 10 0l2 4a10 10 0 0 0-7-17z" />
    <circle cx="12" cy="8" r="2" />
  </svg>
);

const WorkIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <path d="M16 2v4" />
    <path d="M8 2v4" />
    <path d="M3 10h18" />
  </svg>
);

const ContactIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

// Updated links array with custom SVG icons
const links = [
  { name: "Home", path: "/", icon: <HomeIcon /> },
  { name: "About", path: "/about", icon: <AboutIcon /> },
  { name: "Service", path: "/services", icon: <ServiceIcon /> },
  { name: "Work", path: "/work", icon: <WorkIcon /> },
  { name: "Contact", path: "/contact", icon: <ContactIcon /> },
];

export default Navbar;