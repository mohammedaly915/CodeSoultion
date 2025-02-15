import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Work = () => {
  const [selectedService, setSelectedService] = useState('all');
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const services = [
    'all',
    'AI Solutions',
    'Data Analytics',
    'Mobile Deelopment',
    'Web Development',
    'Date Science'
  ];

  const works = [
    {
      id: 1,
      title: 'Smart Analytics Platform',
      service: 'Data Analytics',
      image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg'
    },
    {
      id: 2,
      title: 'AI-powered Chatbot',
      service: 'AI Solutions',
      image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg'
    },
    // Add more works...
  ];

  const filteredWorks = selectedService === 'all' 
    ? works 
    : works.filter(work => work.service === selectedService);

  return (
    <div className='overflow-hidden	'>
      <motion.div 
      ref={ref}
      className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 "
      style={{ scale }}
    >
      <div className="container mx-auto px-4 py-24">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore our portfolio of innovative solutions across various industries
          </p>
        </motion.div>

        {/* Filter Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-4 mb-16">
          {services.map(service => (
            <button
              key={service}
              onClick={() => setSelectedService(service)}
              className={`relative px-6 py-3 rounded-full text-lg ${
                selectedService === service 
                  ? 'bg-white text-slate-900' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              } transition-all`}
            >
              {service}
              {selectedService === service && (
                <motion.div
                  layoutId="filter-underline"
                  className="absolute inset-0 rounded-full border-2 border-white"
                  initial={false}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Work Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          layout
        >
          <AnimatePresence>
            {filteredWorks.map(work => (
              <motion.div
                key={work.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative group overflow-hidden rounded-3xl cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent z-10" />
                
                <img
                  src={work.image}
                  alt={work.title}
                  className="w-full h-96 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />

                <div className="absolute bottom-0 left-0 p-6 z-20">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {work.title}
                  </h3>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-lg rounded-full text-sm text-white">
                    {work.service}
                  </span>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 border-2 border-white/20 group-hover:border-cyan-400 transition-all duration-300" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Scroll Progress */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-cyan-400"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </motion.div>
    </div>
  );
};

export default Work;