import { motion } from "framer-motion";

const GlassButton = ({ children, href = "#", className = "" }) => {
  return (
    <motion.a
      href={href}
      className={`inline-block px-6 py-3 rounded-xl no-underline hover:bg-secondColor bg-white/20 backdrop-blur-lg text-white font-semibold shadow-lg  transition-all duration-300 ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      {children}
    </motion.a>
  );
};

export default GlassButton;
