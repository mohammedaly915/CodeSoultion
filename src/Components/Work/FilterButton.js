// FilterButtons.jsx
import { motion } from 'framer-motion';
import { FaChartLine, FaMobileAlt, FaLaptopCode, FaBrain, FaDatabase } from 'react-icons/fa';

const services = [
  { name: 'all', label: 'All Projects' },
  { name: 'AI Solutions', icon: <FaBrain /> },
  { name: 'Data Analytics', icon: <FaChartLine /> },
  { name: 'Mobile', icon: <FaMobileAlt /> },
  { name: 'Web', icon: <FaLaptopCode /> },
  { name: 'Data Science', icon: <FaDatabase /> },
];

export const FilterButtons = ({ selected, setFilter }) => (
  <motion.div className="flex flex-wrap justify-center gap-4 px-4 py-8">
    {services.map(({ name, icon, label }) => (
      <motion.button
        key={name}
        onClick={() => setFilter(name)}
        className={`relative flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-medium transition-colors
          ${selected === name 
            ? 'bg-teal-400 text-gray-900' 
            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
          }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {icon && <span className="text-lg">{icon}</span>}
        {label || name}
        {selected === name && (
          <motion.div
            layoutId="filter-highlight"
            className="absolute inset-0 rounded-full border-2 border-teal-400"
            initial={false}
            transition={{ type: 'spring', bounce: 0.2 }}
          />
        )}
      </motion.button>
    ))}
  </motion.div>
);

export default FilterButtons;