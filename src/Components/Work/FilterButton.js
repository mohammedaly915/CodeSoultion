import { motion } from 'framer-motion';
import {services} from '../../Data'; // Adjust path based on your structure
import { useState } from 'react';

const FilterButtons = ({ selected, setFilter }) => {
  const [showSubServices, setShowSubServices] = useState(false);

  return (
    <motion.div
      className="flex flex-wrap justify-center gap-4 px-6 py-12 bg-primeColor/50 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {services.map(({ name, icon, label, subServices }) => (
        <div key={name} className="relative group">
          {/* Main Button */}
          <motion.button
            onClick={() => {
              setFilter(name);
              if (name === 'Data Analytics' && subServices) setShowSubServices(!showSubServices);
            }}
            className={`relative flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition-all duration-300
              ${selected === name ? 'bg-gradient-to-r from-secondColor to-white-600 shadow-lg' : 'bg-gray-700 hover:bg-gray-600'}
              focus:outline-none focus:ring-2 focus:ring-secondColor/50`}
            whileHover={{ scale: 1.05, boxShadow: '0 0 15px rgba(28, 104, 170, 0.3)' }}
            whileTap={{ scale: 0.95 }}
          >
            {icon && <span className="text-lg">{icon}</span>}
            {label || name}
            {subServices && (
              <span className="ml-2">{showSubServices ? '▲' : '▼'}</span>
            )}
            {selected === name && (
              <motion.div
                layoutId="filter-highlight"
                className="absolute inset-0 rounded-lg border-2 border-primeColor/50"
                initial={false}
                transition={{ type: 'spring', bounce: 0.2 }}
              />
            )}
          </motion.button>

          {/* Sub-services Dropdown */}
          {subServices && showSubServices && selected === 'Data Analytics' && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white/10 backdrop-blur-md rounded-lg shadow-lg p-2 z-10"
            >
              {subServices.map((sub) => (
                <motion.button
                  key={sub.name}
                  onClick={() => setFilter(sub.name)}
                  className={`w-full text-left px-4 py-2 text-sm text-gray-200 hover:bg-gray-700 rounded transition-colors duration-200
                    ${selected === sub.name ? 'bg-secondColor text-white' : ''}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {sub.icon && <span className="mr-2">{sub.icon}</span>}
                  {sub.name}
                </motion.button>
              ))}
            </motion.div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default FilterButtons;