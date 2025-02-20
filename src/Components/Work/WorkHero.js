import { motion } from 'framer-motion';

const WorkHero = () => {
  return (
    <motion.div 
      className="text-center mb-20"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.h1 
        className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-cyan-500 bg-clip-text text-transparent"
      >
        Our Portfolio
      </motion.h1>
      <motion.p 
        className="text-xl text-gray-300 max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        Exploring innovative solutions through cutting-edge technology and creative design.
      </motion.p>
    </motion.div>
  );
};

export default WorkHero;