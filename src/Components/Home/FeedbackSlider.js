import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { MessageCircle, Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "DR/Waleed",
    feedback: "Great service! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    stars: 5,
  },
  {
    id: 2,
    name: "DR/Helmy",
    feedback: "Amazing experience and very professional team.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    stars: 5,
  },
  {
    id: 3,
    name: "DR/Ibrahim Elghandor",
    feedback: "Excellent support and fast response times.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
    stars: 5,
  },
];

// Animation variants
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

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ 
    target: sectionRef, 
    offset: ["start end", "end start"] 
  });
  
  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const opacityScale = useTransform(scrollYProgress, [0, 0.3, 1], [0.7, 1, 0.9]);

  // Handle autoplay
  useEffect(() => {
    let interval;
    if (isAutoplay) {
      interval = setInterval(() => {
        setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoplay]);

  // Manual navigation handlers
  const handlePrevious = () => {
    setIsAutoplay(false);
    setIndex((prevIndex) => (prevIndex - 1 + feedbacks.length) % feedbacks.length);
  };

  const handleNext = () => {
    setIsAutoplay(false);
    setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[100vh] md:h-screen bg-primeColor flex flex-col justify-center overflow-hidden snap-start py-12 md:py-0"
      style={{ opacity: opacityScale }}
      willChange="transform, opacity"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Dynamic Background Elements with constrained boundaries */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primeColor to-gray-900"
        style={{ y: backgroundY }}
        transition={{ type: "spring", stiffness: 100, damping: 30 }}
        willChange="transform"
      />
      
      {/* Animated background shapes - contained to prevent overflow */}
      <motion.div
        className="absolute top-[5%] left-[5%] w-[40%] max-w-[300px] aspect-square bg-secondColor/30 rounded-full blur-[80px] opacity-40"
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
        className="absolute bottom-[5%] right-[5%] w-[40%] max-w-[350px] aspect-square bg-primeColor/30 rounded-full blur-[100px] opacity-50"
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

      <div className="container mx-auto px-4 sm:px-6 z-10 relative">
        {/* Enhanced Title Section */}
        <motion.div
          className="mb-10 md:mb-16 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div className="inline-block" variants={itemVariants}>
            <motion.div 
              className="flex items-center justify-center gap-3 mb-4"
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            >
              <motion.div
                className="bg-secondColor/20 p-3 rounded-full"
                whileHover={{ scale: 1.1, backgroundColor: "rgba(45, 212, 191, 0.3)" }}
              >
                <MessageCircle size={30} className="text-secondColor" />
              </motion.div>
            </motion.div>
            
            <motion.h2
              className="bg-clip-text text-transparent bg-gradient-to-r from-secondColor to-white text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
              variants={itemVariants}
            >
              Client Testimonials
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 mt-4 max-w-2xl mx-auto text-base sm:text-lg"
              variants={itemVariants}
            >
              Discover what our valued clients have to say about their experience working with us
            </motion.p>
          </motion.div>
          
          <motion.div 
            className="h-1 w-16 md:w-24 bg-secondColor/60 mx-auto mt-6 rounded-full"
            initial={{ width: 0, opacity: 0 }}
            whileInView={{ width: 64, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          />
        </motion.div>

        {/* Feedback Cards with Navigation */}
        <div className="max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Previous/Next Buttons - Hidden on small screens */}
            <div className="hidden sm:flex justify-between absolute top-1/2 left-0 right-0 z-20 transform -translate-y-1/2 px-2">
              <motion.button
                className="bg-secondColor/10 hover:bg-secondColor/20 text-white p-2 rounded-full"
                onClick={handlePrevious}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronLeft size={20} />
              </motion.button>
              <motion.button
                className="bg-secondColor/10 hover:bg-secondColor/20 text-white p-2 rounded-full"
                onClick={handleNext}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <ChevronRight size={20} />
              </motion.button>
            </div>
            
            {/* Testimonial Carousel */}
            <motion.div
              className="flex transition-all duration-500 ease-in-out"
              animate={{ x: `-${index * 100}%` }}
              transition={{ ease: "easeInOut", duration: 0.6 }}
            >
              {feedbacks.map((item) => (
                <div key={item.id} className="flex-shrink-0 w-full px-4">
                  <motion.div
                    className="bg-gray-800/50 backdrop-blur-md rounded-2xl overflow-hidden shadow-xl p-6 sm:p-8"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    {/* Quote Icon with Animation */}
                    <motion.div
                      className="flex justify-center mb-6"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1, rotate: [0, 10, 0] }}
                      transition={{ duration: 0.6, type: "spring" }}
                    >
                      <div className="bg-secondColor/20 p-3 rounded-full">
                        <Quote className="text-secondColor w-8 h-8" />
                      </div>
                    </motion.div>
                    
                    {/* Feedback Content */}
                    <div className="flex flex-col sm:flex-row gap-6 items-center text-center sm:text-left">
                      {/* User Image */}
                      <motion.div
                        className="relative"
                        whileHover={{ scale: 1.05 }}
                      >
                        <motion.div 
                          className="absolute inset-0 border-4 border-secondColor/30 rounded-full"
                          animate={{ 
                            scale: [1, 1.08, 1],
                            opacity: [0.5, 0.8, 0.5]
                          }}
                          transition={{
                            duration: 3,
                            repeat: Infinity,
                            repeatType: "mirror"
                          }}
                        />
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-20 h-20 rounded-full object-cover"
                        />
                      </motion.div>
                      
                      <div className="flex-1">
                        
                        {/* Testimony */}
                        <p className="text-gray-300 text-base sm:text-lg mb-4 italic">
                          "{item.feedback}"
                        </p>
                        
                        {/* Name */}
                        <h3 className="text-white font-bold text-lg sm:text-xl">
                          {item.name}
                        </h3>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </motion.div>
          </div>
          
          {/* Dots Navigation */}
          <motion.div 
            className="flex justify-center gap-3 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {feedbacks.map((_, i) => (
              <motion.button
                key={i}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === i 
                    ? "bg-secondColor w-8" 
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                onClick={() => {
                  setIsAutoplay(false);
                  setIndex(i);
                }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                animate={index === i ? { scale: [1, 1.1, 1] } : { scale: 1 }}
                transition={index === i ? { 
                  duration: 2, 
                  repeat: Infinity,
                  repeatType: "reverse"
                } : {}}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default ClientFeedback;
