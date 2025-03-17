import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect, useRef, memo } from "react";
import { FaBars, FaTimes, FaPhone } from "react-icons/fa";
import { links } from "./IconsAndLinks";
import ContactPOP from "./ContactPOP";

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
      className="fixed top-4  transform -translate-x-1/2 w-[95%] sm:w-[90%] md:w-[85%] lg:w-[80%] xl:w-[75%] max-w-6xl z-50 font-sans"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 0.95 }}
      transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
    >
      <ScrollProgressBar progress={scrollProgress} />
      <NavbarContent setMenuOpen={setMenuOpen} menuOpen={menuOpen} setIsModalOpen={setIsModalOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} setIsModalOpen={setIsModalOpen} />
      <ContactPOP isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </motion.nav>
  );
};
const NavbarContent = memo(({ setMenuOpen, menuOpen, setIsModalOpen }) => {
  return (
    <motion.div
      className="relative bg-gray-900/90 backdrop-blur-lg rounded-xl shadow-lg px-4 sm:px-6 py-3 flex items-center justify-between w-full"
      initial={{ scale: 0.95, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Logo */}
      <motion.div whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}>
        <Link to="/" className="flex items-center gap-2 no-underline">
          <img
            src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742169257/Gemini_Generated_Image_7oqc647oqc647oqc_1_edgvzn.svg"
            className="h-12 sm:h-14 md:h-16"
            alt="Holoul Logo"
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden lg:flex items-center gap-4 lg:gap-6">
        {links.map((link, i) => (
          <NavLink key={link.name} link={link} index={i} />
        ))}
      </div>

      {/* Desktop CTA */}
      <motion.button
        onClick={() => setIsModalOpen(true)}
        className="hidden lg:flex items-center bg-gradient-to-r from-secondColor to-white-400 text-white px-4 lg:px-5 py-2 rounded-lg font-semibold shadow-md hover:bg-secondColor/80 transition-all duration-300"
        whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(28, 104, 170, 0.3)" }}
        whileTap={{ scale: 0.95 }}
      >
        Contact Us
      </motion.button>

      {/* Mobile Menu Toggle */}
      <motion.button
        className="lg:hidden p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors"
        whileTap={{ scale: 0.9 }}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          <FaTimes className="text-xl text-secondColor" />
        ) : (
          <FaBars className="text-xl text-secondColor" />
        )}
      </motion.button>
    </motion.div>
  );
});

const NavLink = memo(({ link, index, onClick }) => {
  const location = useLocation();
  const isActive = location.pathname === link.path && !link.disabled;

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 + 0.2, type: "spring", stiffness: 150 }}
      className={`relative ${link.disabled ? "cursor-not-allowed" : "cursor-pointer"}`}
    >
      <Link
        to={link.disabled ? "#" : link.path}
        onClick={(e) => {
          if (link.disabled) e.preventDefault();
          if (onClick) onClick();
        }}
        className={`relative flex items-center px-3 py-2 rounded-lg text-sm lg:text-base font-medium transition-all duration-300 no-underline ${
          isActive
            ? "bg-secondColor/20 text-white shadow-md"
            : link.disabled
            ? "opacity-50 text-gray-400"
            : "text-gray-200 hover:bg-gray-700/50 hover:text-white"
        }`}
      >
        {link.name}
        {isActive && (
          <motion.div
            className="absolute -bottom-1 left-1/2 w-1/2 h-1 bg-secondColor rounded-full transform -translate-x-1/2"
            layoutId="activeIndicator"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          />
        )}
        {link.disabled && (
          <motion.span
            className="absolute -top-1 -right-1 bg-secondColor/80 text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-sm"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
          >
            Coming Soon
          </motion.span>
        )}
      </Link>
    </motion.div>
  );
});

const MobileMenu = memo(({ menuOpen, setMenuOpen, setIsModalOpen }) => (
  <AnimatePresence>
    {menuOpen && (
      <motion.div
        className="fixed top-20 left-1/2 transform -translate-x-1/2 w-[90%] sm:w-[80%] md:w-[70%] max-w-lg bg-gray-900/95 backdrop-blur-xl rounded-2xl shadow-lg py-6 px-4 lg:hidden z-40"
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
          className="w-full mt-4 flex items-center justify-center bg-gradient-to-r from-secondColor to-white-400  text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:bg-secondColor/80 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact US
        </motion.button>
      </motion.div>
    )}
  </AnimatePresence>
));

const ScrollProgressBar = memo(({ progress }) => {
  const barRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

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

  const { width, height } = dimensions;
  const perimeter = 2 * (width + height);
  const strokeDasharray = perimeter;
  const strokeDashoffset = perimeter - (progress / 100) * perimeter;

  return (
    <svg
      ref={barRef}
      className="absolute inset-0 w-full h-full z-30 pointer-events-none"
      preserveAspectRatio="none"
    >
      <rect
        x="2"
        y="2"
        width={width - 4}
        height={height - 4}
        stroke="#1e293b"
        strokeWidth="3"
        fill="none"
        rx="12"
      />
      <motion.rect
        x="2"
        y="2"
        width={width - 4}
        height={height - 4}
        stroke="url(#progressGradient)"
        strokeWidth="3"
        fill="none"
        rx="12"
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        initial={{ strokeDashoffset: perimeter }}
        animate={{ strokeDashoffset }}
        transition={{ duration: 0.1 }}
      />
      <defs>
        <linearGradient id="progressGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#1C68AA" /> {/* secondColor */}
          <stop offset="100%" stopColor="#FFFFFF" /> {/* White */}
        </linearGradient>
      </defs>
    </svg>
  );
});

export default Navbar;