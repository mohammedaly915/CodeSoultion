import { motion } from 'framer-motion';
import { useState } from 'react';

const AnimatedInput = ({ label, type = 'text', value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputStyles = 'w-full bg-white/5 rounded-xl p-4 pt-6 text-white focus:outline-none focus:ring-2 focus:ring-secondColor/30 hover:bg-white/10 transition-all duration-300 shadow-sm';

  return (
    <motion.div className="relative group" whileHover={{ scale: 1.02 }} transition={{ type: 'spring', stiffness: 300 }}>
      <motion.label
        className={`absolute left-4 transition-all text-gray-400 pointer-events-none ${
          isFocused || value ? 'text-xs text-secondColor -top-3 bg-primeColor px-2 rounded' : 'text-sm top-3'
        }`}
      >
        {label}
      </motion.label>
      {type === 'textarea' ? (
        <motion.textarea
          className={`${inputStyles} resize-none`}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows="4"
          required={required}
        />
      ) : (
        <motion.input
          className={inputStyles}
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
        />
      )}
    </motion.div>
  );
};

export default AnimatedInput;