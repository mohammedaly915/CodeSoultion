import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaUsers, FaBriefcase, FaSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
  { id: 1, title: "Projects Delivered", value: 150, suffix: "+", icon: <FaBriefcase /> },
  { id: 2, title: "Satisfied Clients", value: 120, suffix: "+", icon: <FaSmileBeam /> },
  { id: 3, title: "Years of Experience", value: 8, suffix: " yrs", icon: <FaUsers /> },
];

const clients = [
  require("../../Assets/logo/logo.png"),
  require("../../Assets/logo/mednet.png"),
];

const ClientsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "start center"] });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [-60, 60]);
  const navigate = useNavigate();

  return (
    <motion.section ref={ref} className="relative bg-primeColor py-28 overflow-hidden">
      {/* Background Parallax Effects */}
      <motion.div className="absolute top-[-120px] left-20 w-80 h-80 bg-secondColor/40 rounded-full blur-[150px]" style={{ y: parallaxY }} />
      <motion.div className="absolute bottom-[-140px] right-20 w-96 h-96 bg-white/25 rounded-full blur-[180px]" style={{ y: parallaxY }} />
      
      <motion.div className="container mx-auto px-6 text-center" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        {/* Section Title */}
        <motion.h2 className="text-4xl md:text-5xl font-bold text-white mb-14" style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 0]) }}>
          Trusted by <span className="text-secondColor">Top Companies</span>
        </motion.h2>
        
        {/* Stats Cards */}
        <motion.div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
          {stats.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </motion.div>
        
        {/* Client Logos */}
        <motion.div className="mt-16 flex flex-wrap justify-center gap-16" initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, ease: "easeOut" }}>
          {clients.map((logo, index) => (
            <motion.img 
              key={index} 
              src={logo} 
              alt={`Client ${index + 1}`} 
              className="h-20 opacity-90 transition-all duration-300 hover:scale-110 hover:rotate-3" 
              whileHover={{ scale: 1.2, rotate: 5 }}
            />
          ))}
        </motion.div>
        
        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          className="mt-12 px-6 py-3 bg-secondColor text-white rounded-xl text-lg font-medium shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <motion.span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
          Contact Us
        </motion.button>
      </motion.div>
    </motion.section>
  );
};

const StatCard = ({ stat }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 1200;
      let stepTime = Math.abs(Math.floor(duration / end));
      let timer = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      className="relative p-8 bg-white/5 rounded-xl shadow-lg flex flex-col items-center transition-all transform hover:scale-105"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <motion.div className="text-6xl text-secondColor mb-3">{stat.icon}</motion.div>
      <motion.div className="text-6xl font-bold text-white">
        {count}
        <span className="text-secondColor">{stat.suffix}</span>
      </motion.div>
      <h3 className="text-white text-lg font-medium mt-2">{stat.title}</h3>
    </motion.div>
  );
};

export default ClientsSection;
