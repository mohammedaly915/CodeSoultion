import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import ServiceLayer from "../../Components/Services/ServiceLayer";
import { servicess } from "../../Data";

const Services = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });

  return (
    <div
      ref={ref}
      className="relative h-screen bg-primeColor snap-y snap-mandatory overflow-y-scroll "
    >
      {/* Header Section */}
      <motion.section
        className="h-screen flex items-center justify-center snap-start bg-primeColor"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-extrabold bg-gradient-to-r from-white  to-secondColor bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-gray-300 font-medium max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Delivering excellence through innovative solutions tailored to your business needs
          </motion.p>
        </div>
      </motion.section>

      {/* Service Layers */}
      {servicess.map((service, index) => (
        <ServiceLayer
          key={index}
          service={service}
          index={index}
          totalServices={servicess.length}
          scrollYProgress={scrollYProgress}
        />
      ))}
    </div>
  );
};

export default Services;