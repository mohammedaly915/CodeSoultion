// WorkGrid.jsx
import { motion, AnimatePresence } from 'framer-motion';
import WorkCard  from './WorkCard';

const gridVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export const WorkGrid = ({ works }) => (
  <motion.div
    variants={gridVariants}
    initial="hidden"
    animate="show"
    className="grid gap-6 px-4 pb-12 md:grid-cols-2 lg:grid-cols-3"
  >
    <AnimatePresence>
      {works.map(work => (
        <motion.div
          key={work.id}
          variants={itemVariants}
          layout="position"
          transition={{ duration: 0.4 }}
        >
          <WorkCard work={work} />
        </motion.div>
      ))}
    </AnimatePresence>
  </motion.div>
);

export default WorkGrid;