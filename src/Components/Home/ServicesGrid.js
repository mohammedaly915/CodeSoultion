import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaBrain, FaChartBar, FaRobot, FaLaptopCode, FaMobileAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const services = [
  { id: 1, title: "Data Science", icon: FaBrain },
  { id: 2, title: "Data Analytics", icon: FaChartBar },
  { id: 3, title: "AI Solutions", icon: FaRobot },
  { id: 4, title: "Web Development", icon: FaLaptopCode },
  { id: 5, title: "Mobile Development", icon: FaMobileAlt },
];

const AnimatedCTA = ({ text, to, Icon }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, amount: 0.3 }}
      className="relative inline-flex items-center overflow-hidden rounded-full shadow-lg group"
    >
      <Link
        to={to}
        className="px-6 py-3 flex items-center gap-2 text-base font-semibold text-white bg-secondColor rounded-full transition-all duration-300 no-underline hover:no-underline relative"
      >
        <motion.div
          className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"
        />
        <motion.div
          className="w-0 opacity-0 group-hover:w-6 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300"
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
    </motion.div>
  );
};





const ServicesGrid = () => {
  const [randomServices, setRandomServices] = useState([]);

  useEffect(() => {
    setRandomServices([...services].sort(() => 0.5 - Math.random()).slice(0, 3));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRandomServices(prev => [...prev.slice(1), services.find(s => !prev.includes(s))]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Scroll-based animations
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Parallax scaling
  const yMove = useTransform(scrollYProgress, [0, 1], [0, -100]); // Parallax movement

  return (
    <section className="relative bg-gray-900 py-28 px-6 min-h-screen flex items-center overflow-hidden">
      {/* Background Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900"
        style={{ y: yMove }}
      />

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative">
        
        {/* Right Content (Appears First) */}
        <motion.div
          className="lg:w-1/3 text-center lg:text-left"
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.2 }}
        >
          <motion.h2
            className="text-5xl md:text-6xl font-extrabold mb-6 text-white leading-tight"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-400">
              Digital Innovation
            </span>{" "}
            Engine
          </motion.h2>
          <motion.p
            className="text-gray-300 text-lg leading-relaxed mb-8"
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: false }}
          >
            Transformative solutions powered by AI and cutting-edge development expertise.
          </motion.p>
          <AnimatedCTA text="Explore Services" to="/services" Icon={FaArrowRight} />
          </motion.div>

        {/* Left Service Cards with Parallax Scaling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 flex-1">
          {randomServices.map((service, index) => (
            <motion.div
              key={service.id}
              className="p-6 bg-gray-800/40 rounded-3xl backdrop-blur-lg hover:shadow-xl transition-all duration-500"
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.2, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
              style={{ scale }}
            >
              <motion.div
                className="text-center space-y-6"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="inline-block p-4 rounded-2xl bg-gray-700">
                  <service.icon className="w-16 h-16 text-blue-400" />
                </div>
                <h3 className="text-2xl font-semibold text-white">{service.title}</h3>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
