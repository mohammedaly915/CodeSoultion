// WorkCard.jsx
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { FaExternalLinkAlt, FaReact, FaNodeJs, FaAws, FaPython, FaDatabase } from 'react-icons/fa';

const iconMap = {
  React: <FaReact />,
  'Node.js': <FaNodeJs />,
  AWS: <FaAws />,
  Python: <FaPython />,
  MongoDB: <FaDatabase />
};

const WorkCard = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={work.website}
      target="_blank"
      rel="noopener noreferrer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative block h-full no-underline overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 shadow-xl transition-all duration-500 hover:shadow-2xl hover:scale-105 hover:ring-2 hover:ring-teal-400/50"
    >
      {/* Image Section */}
      <div className={`relative h-80 overflow-hidden ${isHovered ? "px-5" : "flex flex-col justify-center items-center"}`}>
        <motion.img
          src={isHovered ? work.image : work.icon}
          alt={work.title}
          className={`transition-all ${isHovered ? 'w-full object-cover object-top' : 'h-[50%] w-[50%]'}`}
          animate={{
            y: isHovered ? ['50%', '-80%'] : '0%',
            transition: {
              duration: isHovered ? 8 : 0,
              ease: 'linear',
              repeat: isHovered ? Infinity : 0,
            },
          }}
        />
        {!isHovered && (
          <div className="text-center space-y-4 z-10">
            <h3 className="text-2xl font-bold text-white transition-all duration-300 tracking-wide">
              {work.title}
            </h3>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/40 to-transparent" />
      </div>

      <div className="absolute inset-0 z-[999] p-6 text-white">
  {/* Hover Notification Overlay */}
  <div
    className={`absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800/70 px-3 py-1 rounded-full text-gray-300 text-sm transition-all duration-300 ${
      isHovered ? 'opacity-0' : 'opacity-100'
    }`}
  >
    Hover to explore
  </div>
</div>
    </motion.a>
  );
};

export default WorkCard;
