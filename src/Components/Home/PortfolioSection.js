import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const PortfolioSection = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Parallax effects
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const imageY = useTransform(scrollYProgress, [0, 1], ["20%", "-20%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.section
      ref={ref}
      className="relative min-h-screen bg-slate-900 py-28 overflow-hidden"
      style={{ opacity }}
    >
      {/* Background Image with Parallax Effect */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          y: backgroundY,
          backgroundImage: "url('/background-portfolio.jpg')",
          filter: "brightness(60%)",
        }}
      ></motion.div>

      <div className="relative container mx-auto px-4 flex flex-col md:flex-row items-center gap-16">
        {/* Portfolio Image with Parallax Effect */}
        <motion.img
          src="/portfolio-image.jpg"
          alt="Portfolio Work"
          loading="lazy"
          className="w-full md:w-1/2 object-cover rounded-3xl shadow-lg"
          style={{ y: imageY }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        />

        {/* Content Section with Parallax Effect */}
        <motion.div
          className="w-full md:w-1/2"
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 to-indigo-500 bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>

          {/* Animated Divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-purple-400 to-indigo-500 rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            Explore our innovative projects that redefine digital experiences and drive success.
          </p>

          <motion.button
            className="px-8 py-4 bg-purple-400 text-slate-900 rounded-full font-semibold shadow-md hover:shadow-lg hover:bg-purple-500 transition-transform"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate("/work")}
          >
            View More
          </motion.button>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
