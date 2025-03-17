import { motion, useTransform } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const ServiceLayer = ({ service, index, totalServices, scrollYProgress }) => {
  const y = useTransform(
    scrollYProgress,
    [0, 1],
    [index * 100, -((totalServices - index - 1) * 100)]
  ); // Stack effect based on scroll

  const cardVariants = {
    offscreen: { y: 100, opacity: 0 },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", bounce: 0.3, duration: 0.8 },
    },
  };

  const listItemVariants = {
    hover: { scale: 1.03, transition: { duration: 0.2 } },
    tap: { scale: 0.97 },
  };

  return (
    <motion.section
      className="h-screen w-full flex items-center justify-center snap-start bg-primeColor relative "
      style={{ zIndex: totalServices - index }} // Higher index = lower z-index
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <motion.div
        className="w-full max-w-4xl mx-4 bg-gray-900/95 backdrop-blur-md rounded-xl shadow-xl p-8"
        variants={cardVariants}
        style={{ y }} // Apply stacking effect
      >
        {/* Header */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondColor  to-white bg-clip-text text-transparent mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          {service.title}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-lg text-gray-300 mb-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          {service.description}
        </motion.p>

        {/* Specs */}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {service.specs.map((spec, i) => (
            <motion.li
              key={i}
              className="group flex items-start p-4 bg-gray-800/50 rounded-lg shadow-md hover:bg-gray-700/50 transition-all duration-300"
              variants={listItemVariants}
              whileHover="hover"
              whileTap="tap"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.6 + i * 0.1 }}
              >
              </motion.div>
              <span className="text-base text-gray-200">{spec}</span>
            </motion.li>
          ))}
        </ul>

        {/* Subtle Decorative Shadow */}
        <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(255,255,255,0.05)] pointer-events-none" />
      </motion.div>
    </motion.section>
  );
};

export default ServiceLayer;  