import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaUsers, FaBriefcase, FaSmileBeam, FaArrowRight } from "react-icons/fa";
import AnimatedButton from "../Utiles/AnimatedButton";

const stats = [
  { id: 1, title: "Projects", value: 40, suffix: "+", icon: <FaBriefcase /> },
  { id: 2, title: "Clients", value: 20, suffix: "+", icon: <FaSmileBeam /> },
  { id: 3, title: "Years", value: 3, suffix: " yrs", icon: <FaUsers /> },
];

const clients = [
  require("../../Assets/logo/logo.png"),
  require("../../Assets/logo/mednet.png"),
];

// Animation variants for orchestrated animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { 
      staggerChildren: 0.15,
      delayChildren: 0.2
    } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      type: "spring", 
      stiffness: 100, 
      damping: 15 
    }
  }
};

const ClientsSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"] 
  });
  
  // Enhanced parallax effects with smoother transitions
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacityScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 0.9]);
  
  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[100vh] md:h-screen bg-primeColor flex flex-col justify-center overflow-hidden snap-start"
      style={{ opacity: opacityScale }}
      willChange="transform, opacity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dynamic Background Elements with constrained boundaries */}
      <motion.div
        className="absolute inset-0 bg-secondColor/5 overflow-hidden"
        style={{ y: backgroundY }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        willChange="transform"
      />
      
      {/* Animated background shapes - contained to prevent overflow */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-[30%] max-w-[300px] aspect-square bg-secondColor/20 rounded-full blur-[60px]"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        willChange="transform, opacity"
      />
      
      <motion.div
        className="absolute bottom-[5%] right-[5%] w-[40%] max-w-[350px] aspect-square bg-secondColor/10 rounded-full blur-[80px]"
        animate={{
          scale: [1.2, 1, 1.2],
          opacity: [0.4, 0.2, 0.4],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 2
        }}
        style={{ y: useTransform(scrollYProgress, [0, 1], [40, -40]) }}
        willChange="transform, opacity"
      />

      <div className="container mx-auto px-4 sm:px-6 z-10 relative py-8 md:py-0">
        {/* Enhanced Title Section */}
        <motion.div
          className="mb-8 md:mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.7, 
            type: "spring",
          }}
        >
          <motion.div className="relative inline-block">
            <motion.h2
              className="bg-clip-text text-transparent bg-gradient-to-r from-secondColor to-white text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 md:mb-6 leading-tight"
            >
              Trusted by Industry Leaders
            </motion.h2>
          </motion.div>
          
          <motion.div 
            className="h-1 w-16 md:w-24 bg-secondColor/60 mx-auto mt-2 md:mt-4 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Main Content with Staggered Animation - Responsive layout */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Stats Cards - Responsive grid */}
          <motion.div
            className="grid grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-lg"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <StatCard 
                key={stat.id} 
                stat={stat} 
                index={index} 
              />
            ))}
          </motion.div>

          {/* Visual Separator - Hidden on mobile */}
          <motion.div 
            className="hidden md:block h-32 md:h-40 w-px bg-gradient-to-b from-transparent via-secondColor/30 to-transparent"
            variants={itemVariants}
          />

          {/* Enhanced Client Logos - Responsive layout */}
          <motion.div
            className="flex flex-col gap-4 md:gap-6"
            variants={itemVariants}
          >
            <motion.h3 
              className="text-white text-lg md:text-xl font-medium mb-2"
              variants={itemVariants}
            >
              Our Valued Partners
            </motion.h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-8 items-center">
              {clients.map((logo, index) => (
                <motion.div
                  key={index}
                  className="relative p-3 sm:p-4 md:p-5 bg-white/5 rounded-xl overflow-hidden group"
                  whileHover={{ 
                    scale: 1.08,
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1)"
                  }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  variants={itemVariants}
                >
                  {/* Hover effect background */}
                  <motion.div 
                    className="absolute inset-0 bg-secondColor/10 opacity-0 group-hover:opacity-100"
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Responsive logo sizing */}
                  <motion.img
                    src={logo}
                    alt={`Client ${index + 1}`}
                    className="h-10 sm:h-12 md:h-14 relative z-10"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                    style={{ willChange: "transform" }}
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Button */}
        <motion.div
          className="mt-8 md:mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <AnimatedButton 
            text="Explore Our Services" 
            to="/services" 
            Icon={FaArrowRight} 
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = Math.min(1500, 800 + (end * 15)); 
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="relative p-2 sm:p-3 md:p-4 flex flex-col items-center text-white"
      whileHover={{ 
        y: -5,
        transition: { type: "spring", stiffness: 400, damping: 17 }
      }}
      style={{ willChange: "transform" }}
    >
      {/* Highlight background on hover */}
      <motion.div 
        className="absolute inset-0 bg-secondColor/10 rounded-xl opacity-0 scale-90"
        whileHover={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Responsive icon sizing */}
      <motion.div 
        className="text-2xl sm:text-3xl md:text-4xl text-secondColor mb-2 md:mb-3 p-2 sm:p-3 bg-white/5 rounded-full"
        whileHover={{ 
          scale: 1.15,
          backgroundColor: "rgba(255, 255, 255, 0.1)"
        }}
        transition={{ type: "spring", stiffness: 400 }}
      >
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.3
          }}
        >
          {stat.icon}
        </motion.div>
      </motion.div>
      
      {/* Responsive text sizing */}
      <div className="text-xl sm:text-2xl md:text-3xl font-bold">
        {count}
        <motion.span 
          className="text-secondColor ml-1"
          animate={{ 
            opacity: [1, 0.8, 1],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
            delay: index * 0.4
          }}
        >
          {stat.suffix}
        </motion.span>
      </div>
      
      <h3 className="text-xs sm:text-sm font-medium mt-1 md:mt-2 opacity-80">{stat.title}</h3>
    </motion.div>
  );
};

export default ClientsSection;
