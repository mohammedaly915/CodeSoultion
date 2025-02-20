import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

const WorkCard2 = ({ work }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [x, setX] = useState(0); // Mouse X position
  const [y, setY] = useState(0); // Mouse Y position

  useEffect(() => {
    const handleCursor = (e) => {
      setX(e.clientX);
      setY(e.clientY);
    };

    window.addEventListener('mousemove', handleCursor);


    return () => {
      window.removeEventListener('mousemove', handleCursor);
    };
  }, []);

  return (
    <motion.div
      className="relative group overflow-hidden rounded-3xl cursor-none shadow-2xl hover:shadow-teal-500/20 transition-all duration-500 bg-gradient-to-br from-gray-900 to-gray-800"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      <div className="relative h-96 overflow-hidden">
        <motion.img
          src={work.image}
          alt={work.title}
          className="w-full h-full object-cover transform transition-transform duration-1000 ease-out"
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />
        <motion.div
          className="absolute inset-0 backdrop-blur-md bg-black/40"
          animate={{ opacity: isHovered ? 0.6 : 0.4 }}
        />
      </div>

      <div className="absolute inset-0 p-6 flex flex-col justify-between z-20 pointer-events-none">
        <motion.div
          className="inline-flex items-center gap-2"
          animate={{ y: isHovered ? 0 : -20, opacity: isHovered ? 1 : 0.8 }}
        >
          <span className="px-3 py-1.5 bg-teal-500/20 backdrop-blur-sm rounded-lg text-xs text-teal-300 font-medium tracking-wide">
            {work.service}
          </span>
        </motion.div>

        <div className="flex items-end justify-between">
          <motion.h3
            className="text-2xl font-bold text-white max-w-[80%] leading-tight"
            animate={{ y: isHovered ? 0 : 20, opacity: isHovered ? 1 : 0.8 }}
          >
            {work.title}
          </motion.h3>

          {/* Custom Cursor Button */}
          {isHovered && (
            <motion.div
              className="absolute"
              style={{
               
                x,y,
                opacity: isHovered ? 1 : 0, // Show only when hovered
              }}
            >
              <a
                href={work.website}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg transition-all duration-300 backdrop-blur-md shadow-md hover:shadow-teal-500/30 text-sm"
              >
                Visit
                <FaExternalLinkAlt className="w-3 h-3" />
              </a>
            </motion.div>
          )}
        </div>
      </div>

      {isHovered && (
  <motion.div
    className="absolute"
    style={{
      top: `${y - 160}px`, // Subtract half of the cursor size to center it
      left: `${x - 160}px`, // Subtract half of the cursor size to center it
      transform: 'translate(-50%, -50%)', // Ensures the element is centered
      opacity: isHovered ? 1 : 0,
    }}
  >
    <a
      href={work.website}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-400 text-white rounded-lg transition-all duration-300 backdrop-blur-md shadow-md hover:shadow-teal-500/30 text-sm"
    >
      Visit
      <FaExternalLinkAlt className="w-3 h-3" />
    </a>
  </motion.div>
)}


      <motion.div
        className="absolute inset-0 border-2 border-white/5"
        animate={{ opacity: isHovered ? 1 : 0 }}
      />
    </motion.div>
  );
};

export default WorkCard2;
