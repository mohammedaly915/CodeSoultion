import React from 'react';
import HeroSection from '../../Components/Home/HeroSection';
import ServicesGrid from '../../Components/Home/ServicesGrid';
import ClientsSection from '../../Components/Home/ClientsSection';
import FeedbackSlider from '../../Components/Home/FeedbackSlider';
import { motion } from 'framer-motion';
import AboutSection from '../../Components/Home/AboutSection';
import PortfolioSection from '../../Components/Home/PortfolioSection';





function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.section
        className="relative overflow-hidden"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <HeroSection />
        <ServicesGrid />
        <PortfolioSection/>


      </motion.section>
      
      {/* <motion.section
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >


      </motion.section> */}

      <motion.section
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <ClientsSection />
      </motion.section>
      <motion.section
        initial={{ rotateX: 90, opacity: 0 }}
        whileInView={{ rotateX: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
      >
        <FeedbackSlider />
        
      </motion.section>
      
      <AboutSection/>
    </motion.div>
  );
}

export default Home;