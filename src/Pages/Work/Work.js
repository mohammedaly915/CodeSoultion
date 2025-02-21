import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FilterButtons from '../../Components/Work/FilterButton';
import WorkHero from '../../Components/Work/WorkHero';
import WorkGrid from '../../Components/Work/WorkGrid';




const works = [
  {
    id: 1,
    title: 'Smart Analytics Platform',
    service: 'Data Analytics',
    icon:require("../../Assets/logo/mednet.png"),
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/analytics',
    description: 'A powerful analytics platform designed to help businesses make data-driven decisions.',
    techStack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 2,
    title: 'AI-powered Chatbot',
    service: 'AI Solutions',
    icon:require("../../Assets/logo/logo.png"),
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/chatbot',
    description: 'An intelligent chatbot that uses natural language processing to engage users effectively.',
    techStack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 3,
    title: 'Al-Shifa',
    service: 'Web',
    icon:require("../../Assets/logo/logo.png"),
    image: require('../../Assets/Work/Alshifa.jpeg'),
    website: 'https://www.alshifalab.net/',
    description: 'A healthcare management system built to streamline operations for clinics and laboratories.',
    techStack: ['React', 'Node.js', 'AWS'],
  },
  {
    id: 4,
    title: 'E-commerce Store',
    service: 'Web',
    icon:require("../../Assets/logo/mednet.png"),
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/ecommerce',
    description: 'A fully functional e-commerce store with payment integration and user authentication.',
    techStack: ['React', 'Node.js', 'Stripe'],
  },
  {
    id: 5,
    title: 'Portfolio Website',
    service: 'Web',
    icon:require("../../Assets/logo/mednet.png"),
    image: 'https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg',
    website: 'https://example.com/portfolio',
    description: 'A sleek and modern portfolio website showcasing personal projects and skills.',
    techStack: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
];

const Work = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredWorks = works.filter(work => 
    filter === 'all' ? true : work.service === filter
  );  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // style={{ scale }}
  return (
    <div className="overflow-hidden">
      <motion.div ref={ref} className="min-h-screen bg-primeColor" >
        <div className="container mx-auto px-4 py-24">
        <WorkHero />
        <FilterButtons selected={filter} setFilter={setFilter} />

          {/* Work Grid */}
          <WorkGrid works={filteredWorks} selectedService={filter} />

          {/* Scroll Proagress */}
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






