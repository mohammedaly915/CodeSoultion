import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { FaUsers, FaBriefcase, FaSmileBeam } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const stats = [
  { id: 1, title: "Projects", value: 40, suffix: "+", icon: <FaBriefcase /> },
  { id: 2, title: "Clients", value: 20, suffix: "+", icon: <FaSmileBeam /> },
  { id: 3, title: "Years", value: 3, suffix: " yrs", icon: <FaUsers /> },
];

const clients = [
  require("../../Assets/logo/logo.png"),
  require("../../Assets/logo/mednet.png"),
];

const ClientsSection = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const backgroundY = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const navigate = useNavigate();

  return (
    <motion.section
      ref={ref}
      className="relative h-screen bg-primeColor flex items-center justify-center overflow-hidden snap-start"
    >
      {/* Subtle Background Parallax */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-secondColor/20 to-white/10"
        style={{ y: backgroundY }}
      />
      <motion.div
        className="absolute w-72 h-72 bg-secondColor/30 rounded-full blur-3xl top-10 left-10"
        style={{ y: backgroundY }}
      />

      <div className="container mx-auto px-6 text-center z-10">
        {/* Compact Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Trusted by <span className="text-secondColor">Leaders</span>
        </motion.h2>

        {/* Stats and Clients in a Single Row */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
          {/* Stats */}
          <motion.div
            className="grid grid-cols-3 gap-6 md:gap-8 max-w-lg"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </motion.div>

          {/* Client Logos */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {clients.map((logo, index) => (
              <motion.img
                key={index}
                src={logo}
                alt={`Client ${index + 1}`}
                className="h-16 opacity-80 hover:opacity-100 transition-all duration-300"
                whileHover={{ scale: 1.15 }}
              />
            ))}
          </motion.div>
        </div>

        {/* CTA Button */}
        <motion.button
          onClick={() => navigate("/contact")}
          className="mt-8 px-6 py-2 bg-secondColor text-white rounded-lg font-medium shadow-md relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
        >
          <span className="relative z-10">Get in Touch</span>
          <motion.span
            className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity duration-300"
          />
        </motion.button>
      </div>
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
      const duration = 1000;
      const stepTime = Math.abs(Math.floor(duration / end));
      const timer = setInterval(() => {
        start += 1;
        if (start > end) {
          clearInterval(timer);
        } else {
          setCount(start);
        }
      }, stepTime);
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      className="flex flex-col items-center text-white"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-3xl text-secondColor mb-2">{stat.icon}</div>
      <div className="text-2xl font-bold">
        {count}
        <span className="text-secondColor">{stat.suffix}</span>
      </div>
      <h3 className="text-sm font-medium opacity-80">{stat.title}</h3>
    </motion.div>
  );
};

export default ClientsSection;