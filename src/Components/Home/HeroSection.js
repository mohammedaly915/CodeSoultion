import { motion, useMotionValue, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import GlassButton from "../Utiles/Button";

const images = [
  { src: "https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg", link: "#" },
  { src: require("../../Assets/Work/Alshifa.jpeg"), link: "#" },
  { src: "https://res.cloudinary.com/dswehdo2v/image/upload/v1739639610/donation_20website_20templates_ib70as.jpg", link: "#" },
  { src: require("../../Assets/Work/Alshifa.jpeg"), link: "#" },
  { src: require("../../Assets/Work/Alshifa.jpeg"), link: "#" },
  { src: require("../../Assets/Work/Alshifa.jpeg"), link: "#" },
];

const HeroSection = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX - window.innerWidth / 2);
    mouseY.set(e.clientY - window.innerHeight / 2);
  };

  const glowX = useTransform(mouseX, (val) => `${val / 10}px`);
  const glowY = useTransform(mouseY, (val) => `${val / 10}px`);

  return (
    <section
      className="relative bg-gradient-to-b from-blue-900 to-slate-900 text-white overflow-hidden h-screen flex items-center justify-center"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute w-[350px] h-[350px] rounded-full bg-white blur-3xl opacity-20 pointer-events-none"
        style={{ x: glowX, y: glowY }}
      />

      {/* Floating Images with Click Action */}
      <FloatingImages images={images} />

      {/* Content */}
      <div className="relative  container mx-auto px-6 text-center">
        <motion.h1
          className="text-4xl sm:text-6xl  lg:text-7xl font-extrabold leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Transforming Challenges Into{" "}
          <span className="block relative bg-gradient-to-r z-7 from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Digital Solutions
          </span>
        </motion.h1>

        <motion.p
          className="text-lg sm:text-xl text-gray-300  mt-4 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          Where innovation meets execution to drive your business forward.
        </motion.p>

        <GlassButton
  href="#"
  className="mt-8"
>
  Get Started
</GlassButton>
      </div>
    </section>
  );
};

const FloatingImages = ({ images }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const rotate = useTransform(scrollYProgress, [0, 1], [5, -50]);

  return (
    <motion.div
      ref={ref}
      style={{ y, rotate }}
      className="absolute inset-0 flex gap-6 opacity-70"
    >
      {images.map((image, index) => (
        <motion.div
          key={index}
          className="relative w-[280px] h-[320px] z-8 rounded-lg shadow-xl bg-white/5 backdrop-blur-lg overflow-hidden cursor-pointer"
          whileHover={{ scale: 1.15, y: 10 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.5 }}
          onClick={() => window.open(image.link, "_blank")}
        >
          <img
            src={image.src}
            alt={`Showcase ${index + 1}`}
            className="w-full h-full object-cover rounded-md"
          />
          <motion.div
            className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity"
          >
            <span className="bg-white text-blue-600 font-semibold px-4 py-2 rounded-md flex items-center gap-2">
              View Project <FaExternalLinkAlt />
            </span>
          </motion.div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default HeroSection;
