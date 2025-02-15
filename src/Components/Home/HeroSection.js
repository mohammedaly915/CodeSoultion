import { motion, useMotionValue, useTransform } from 'framer-motion';
import Image  from "../../Assets/Images/IMG_20241110_172044.jpg";
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

  useEffect(()=>{
    console.log("glowedX",glowX);
    console.log("glowedY",glowY);
  },[glowX])

  return (
    <section
      className="relative  bg-blue-600 text-white py-20 overflow-hidden  min-h-screen"
      onMouseMove={handleMouseMove}>
      {/* Glowing Cursor */}
      <motion.div
        className="absolute w-20 h-20 rounded-full bg-white opacity-30 blur-xl pointer-events-none"
        style={{ x: glowX, y: glowY }}
      />

      {/* Vertical Carousel */}
  {/* First Vertical Carousel */}
  <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 10, // Slower speed
          ease: "linear",
        }}
        style={{ right: '0%' }} // Offset the first carousel
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-1-${index}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
            }}
            className="w-full max-w-2xl rounded-lg shadow-2xl"
            loading="lazy"
          />
        ))}
      </motion.div>

      
            {/* Second Vertical Carousel */}
  <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center gap-8"
        initial={{ y: 0 }}
        animate={{ y: '-100%' }}
        transition={{
          repeat: Infinity,
          duration: 20, // Faster speed
          ease: "linear",
        }}
        style={{ right: '100%' }} // Offset the second carousel
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`carousel-2-${index}`}
            onError={(e) => {
              e.target.src = 'https://via.placeholder.com/800x400?text=Image+Not+Available';
            }}
            className="w-full max-w-2xl rounded-lg shadow-2xl"
            loading="lazy"
          />
        ))}
      </motion.div>
      {/* Content */}
      <header className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Transforming challenges into opportunities with smart, scalable solutions.
        </h1>
        <p className="text-lg sm:text-xl mb-8">
          Where creativity meets functionality to drive your business forward.
        </p>
        <button
          className="bg-white text-blue-600 font-bold py-3 px-6 rounded-full hover:bg-blue-50 transition duration-300"
          aria-label="Get Started with our services"
        >
          Get Started
        </button>
      </header>
    </section>
  );
};


export default HeroSection;