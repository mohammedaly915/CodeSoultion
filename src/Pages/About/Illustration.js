// components/Illustration.jsx
import { motion } from 'framer-motion';

const Illustration = ({ className }) => {
  // SVG path definitions
  const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
  };

  return (
    <motion.svg
      width="100%"
      height="100%"
      viewBox="0 0 512 512"
      initial="hidden"
      animate="visible"
      className={className}
    >
      {/* Main Brain Shape */}
      <motion.path
        d="M256 96C144 96 48 192 48 304s96 96 208 96 208-96 208-96S368 96 256 96z"
        variants={draw}
        custom={1}
        stroke="#3B82F6"
        strokeWidth="16"
        fill="none"
        strokeLinecap="round"
      />
      
      {/* Neural Connections */}
      <motion.path
        d="M128 240l48-48 48 48 48-48 48 48 48-48 48 48"
        variants={draw}
        custom={2}
        stroke="#60A5FA"
        strokeWidth="8"
        fill="none"
      />
      
      {/* Sparkle Elements */}
      <motion.g variants={draw} custom={3}>
        <circle cx="352" cy="160" r="8" fill="#FBBF24" />
        <circle cx="160" cy="352" r="8" fill="#FBBF24" />
        <circle cx="256" cy="96" r="8" fill="#FBBF24" />
      </motion.g>
      
      {/* Floating Particles */}
      <motion.circle 
        cx="400" 
        cy="200" 
        r="4" 
        fill="#10B981"
        animate={{
          y: [0, -20, 0],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.svg>
  );
};

export default Illustration;