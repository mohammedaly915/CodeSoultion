import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const AnimatedCTA = ({ text, to }) => {
  return (
    <motion.div
      className="relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Button Container */}
      <Link
        to={to}
        className="flex items-center gap-4 px-8 py-4 bg-secondColor/10 backdrop-blur-lg rounded-full border-2 border-secondColor hover:border-cyan-400 transition-all duration-300"
      >
        {/* Button Text */}
        <span className="text-lg font-semibold text-secondColor group-hover:text-cyan-400 transition-colors">
          {text}
        </span>

        {/* Animated Icon */}
        <motion.div
          className="relative w-8 h-8"
          animate={{
            rotate: [0, 15, -5, 15, 0],
            transition: { duration: 1.5, repeat: Infinity }
          }}
        >
          {/* Star Icon */}
          <svg
            viewBox="0 0 24 24"
            className="w-full h-full fill-current text-cyan-400"
          >
            <motion.path
              d="M12 2L14.5 8.5L21 9L16 13L17.5 20L12 16L6.5 20L8 13L3 9L9.5 8.5L12 2Z"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 1.5 }}
            />
          </svg>
        </motion.div>
      </Link>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-cyan-400/10 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
};

export default AnimatedCTA;