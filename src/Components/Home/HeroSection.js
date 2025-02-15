import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect } from 'react';

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    mouseX.set(clientX);
    mouseY.set(clientY);
  };

  const glowX = useTransform(mouseX, (val) => `${val}px`);
  const glowY = useTransform(mouseY, (val) => `${val}px`);

  const images = [
    "https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg",
    "https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg",
    "https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg"
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-blue-900 to-slate-900 text-white py-20 overflow-hidden min-h-screen"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute w-[40vw] h-[40vw] rounded-full bg-gradient-to-r from-blue-400/30 to-cyan-300/30 blur-3xl pointer-events-none"
        style={{ x: glowX, y: glowY }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Carousel Containers */}
      <div className="absolute inset-0 flex">
        {/* First Carousel */}
        <motion.div
          className="w-1/2 h-full relative"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 20,
            ease: "linear",
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={`carousel-1-${index}`}
              className="w-full p-8"
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative group overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src={image}
                  alt={`Showcase ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Second Carousel */}
        <motion.div
          className="w-1/2 h-full relative"
          initial={{ y: 0 }}
          animate={{ y: '-100%' }}
          transition={{
            repeat: Infinity,
            duration: 25,
            ease: "linear",
          }}
        >
          {images.map((image, index) => (
            <motion.div
              key={`carousel-2-${index}`}
              className="w-full p-8 rotate-3"
              whileHover={{ rotate: 0 }}
            >
              <div className="relative group overflow-hidden rounded-[4rem] shadow-2xl clip-path-polygon">
                <img
                  src={image}
                  alt={`Showcase ${index + 1}`}
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-900/60" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 container mx-auto px-4 text-center h-screen flex flex-col items-center justify-center">
        <motion.h1
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Challenges Into
          <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          className="text-xl sm:text-2xl mb-12 max-w-3xl mx-auto text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Where innovation meets execution to drive your business forward
        </motion.p>

        <motion.button
          className="relative overflow-hidden group bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.90 }}
        >
          <span className="relative z-10">Start Your Journey</span>
          <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </motion.button>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/30 to-blue-900/90 pointer-events-none" />
    </section>
  );
};

export default HeroSection;