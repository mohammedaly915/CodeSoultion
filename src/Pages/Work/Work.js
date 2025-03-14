import { useState } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import FilterButtons from '../../Components/Work/FilterButton';
import WorkHero from '../../Components/Work/WorkHero';
import WorkGrid from '../../Components/Work/WorkGrid';
import {works} from "../../Data";





const Work = () => {
  const [filter, setFilter] = useState('all');
  
  const filteredWorks = works.filter(work => 
    filter === 'all' ? true : work.service === filter
  );  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // style={{ scale }}
  return (
    <div className="overflow-hidden mt-[10vh]">
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
