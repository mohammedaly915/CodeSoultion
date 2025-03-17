import React from 'react'
import { Link } from 'react-router-dom'
import { motion} from 'framer-motion';


const AnimatedButton = ({ text, to, Icon }) => {
  return (
<motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative  inline-flex items-center overflow-hidden rounded-[10px] group shadow-md"
    >
      <Link
        to={to}
        className="px-8 py-3 flex no-underline items-center gap-2 text-lg font-semibold text-white bg-gradient-to-r from-gray-500 to-secondColor rounded-[20px] transition-transform duration-300 hover:scale-105 hover:shadow-xl relative"
      >
        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-full"
        />
        <motion.div
          className="flex items-center justify-center w-8 h-8 bg-white/20 rounded-full group-hover:bg-white/40 transition duration-300"
        >
          <Icon className="w-5 h-5 text-white" />
        </motion.div>
        <motion.span
          className="relative z-10"
          whileHover={{ x: 5 }}
          transition={{ duration: 0.3 }}
        >
          {text}
        </motion.span>
      </Link>
    </motion.div>  )
}

export default AnimatedButton