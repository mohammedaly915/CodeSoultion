import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FaGem, FaCheck } from 'react-icons/fa';
import { AnimatePresence } from 'framer-motion';

const ServiceLayer = ({ service, index, totalServices }) => {
  const cardVariants = {
    offscreen: {
      y: 50,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
        delay: index * 0.15
      }
    }
  };

  const listItemVariants = {
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    },
    tap: {
      scale: 0.98
    }
  };

  return (
    <motion.div 
      className="min-h-screen sticky h-screen flex items-start justify-center transition-all duration-500"
      style={{ 
        zIndex: (totalServices + index) * 10,
        top: (index+1)*50
      }}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.3 }}
    >
      <motion.div 
        className="relative w-[85%] max-w-4xl bg-gradient-to-r from-secondColor to-white-600 backdrop-blur-3xl rounded-2xl p-px shadow-2xl overflow-hidden"
        variants={cardVariants}
      >
        {/* Glow effect */}
        <motion.div 
          className="absolute inset-0 rounded-2xl shadow-[inset_0_0_30px_rgba(45,212,191,0.15)] pointer-events-none"
          animate={{
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            repeatType: 'loop'
          }}
        />
        
        <div className="relative rounded-[calc(2.5rem-2px)] bg-gradient-to-br from-primeColor to-primeColor/90 p-12 overflow-hidden">
          {/* Header */}
          <motion.div 
            className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-r from-secondColor to-white-600 backdrop-blur-xl rounded-t-2xl flex items-center pl-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.8, 1, 0.8],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
              }}
            >
              <FaGem className="text-teal-300 text-4xl mr-6" />
            </motion.div>
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white via-teal-200 to-secondColor bg-clip-text text-transparent">
              {service.title}
            </h2>
          </motion.div>

          {/* Content */}
          <div className="mt-32">
            <motion.p 
              className="text-xl text-gray-100/95 mb-14 max-w-2xl leading-relaxed font-light tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              {service.description}
            </motion.p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.specs.map((spec, i) => (
                <motion.li
                  key={i}
                  className="group relative p-6 bg-gradient-to-r from-secondColor to-white-600 transition-all duration-300 hover:bg-teal-400/10 rounded-xl flex items-start"
                  variants={listItemVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', delay: 0.8 + i * 0.1 }}
                  >
                    <FaCheck className="text-teal-300 text-xl mr-4 mt-1 flex-shrink-0" />
                  </motion.div>
                  <span className="text-lg font-medium text-gray-100/95 tracking-wide">
                    {spec}
                  </span>
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-xl shadow-[inset_0_0_20px_rgba(45,212,191,0.1)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-secondColor/10 to-transparent pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-teal-400/10 rounded-full blur-3xl" />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceLayer;