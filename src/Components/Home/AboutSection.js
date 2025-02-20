// AboutSection.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const AboutSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['30%', '-30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-slate-900 py-28"
      style={{ opacity }}
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        <motion.div 
          className="w-full md:w-1/2"
          style={{ y }}
        >
          <div className="bg-slate-800 rounded-3xl p-8 aspect-video">
            {/* Add your image or content here */}
          </div>
        </motion.div>

        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ margin: '-100px' }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About Us
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-6">
            We're a team of passionate innovators dedicated to creating digital solutions that make an impact.
          </p>
          <motion.button
            className="px-8 py-4 bg-cyan-400 text-slate-900 rounded-full font-semibold hover:bg-cyan-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;