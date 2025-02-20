import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const CustomCursor = ({ isHovered }) => {
  return (
    <motion.div
      className="fixed w-10 h-10 pointer-events-none z-50"
      style={{
        opacity: isHovered ? 1 : 0,
        transition: 'opacity 0.15s cubic-bezier(0.4, 0, 0.2, 1)'
      }}
    >
      <div className="w-full h-full bg-teal-400/10 backdrop-blur-lg rounded-full flex items-center justify-center border-2 border-teal-400/30 animate-pulse">
        <FaExternalLinkAlt className="text-teal-400 text-sm" />
      </div>
    </motion.div>
  );
};

export default CustomCursor;