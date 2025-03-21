import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import AnimatedButton from "../Utiles/AnimatedButton";

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
        {/* <motion.img
          src="https://res.cloudinary.com/dswehdo2v/image/upload/v1739639611/image10_iizxu7.png"
          alt="Portfolio Work"
          loading="lazy"
          className="w-full md:w-1/2 object-cover rounded-3xl shadow-lg"
          style={{ y: imageY }}
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          viewport={{ once: true }}
        /> */}
        {/* Image Section */}
        <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:h-[500px] lg:w-[400px]"
          >
            <div className="absolute inset-0 bg-secondColor/15 rounded-3xl backdrop-blur-md shadow-lg -z-10" />
            <motion.img
              src="https://res.cloudinary.com/dswehdo2v/image/upload/v1742189911/Alshifa_rqykvz.jpg"
              alt="Our team collaborating"
              className="w-full h-full object-cover object-top rounded-3xl shadow-2xl relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
          </motion.div>

        {/* Content Section with Parallax Effect */}
        <motion.div
          className="w-full md:w-1/2"
          style={{ y: contentY }}
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            <span className="bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent">
              Our Portfolio
            </span>
          </h2>

          {/* Animated Divider */}
          <motion.div
            className="w-24 h-1 bg-gradient-to-r from-secondColor to-white bg-clip-text rounded-full mb-4"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.5 }}
          ></motion.div>

          <p className="text-xl text-slate-300 mb-6 leading-relaxed">
            Explore our innovative projects that redefine digital experiences and drive success.
          </p>

          <AnimatedButton text="View More" to="/work" Icon={FaArrowRight} />

        </motion.div>
      </div>
    </motion.section>
  );
};

export default PortfolioSection;
