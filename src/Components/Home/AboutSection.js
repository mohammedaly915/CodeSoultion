// AboutSection.jsx
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AnimatedCTA = ({ text, to, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative  inline-flex items-center overflow-hidden rounded-[10px] group shadow-md"
    >
      <Link
        to={to}
        className="px-8 py-3 flex no-underline items-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-secondColor rounded-[20px] transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
      >
        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"
        />
        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/40 transition duration-300"
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        <motion.span
          className="relative z-10"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>
      </Link>
    </motion.div>
  );
};
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
                    <AnimatedCTA text="Learn More" to="/about" Icon={FaArrowRight} />
          
        </motion.div>
      <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:h-[600px] lg:w-[600px]"
          >
            <div className="absolute inset-0 bg-secondColor/15 rounded-3xl backdrop-blur-md shadow-lg -z-10" />
            <motion.img
              src="https://res.cloudinary.com/dswehdo2v/image/upload/v1739639611/image10_iizxu7.png"
              alt="Our team collaborating"
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
          </motion.div>

        
      </div>
    </motion.section>
  );
};

export default AboutSection;