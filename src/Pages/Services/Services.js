import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const services = [
    {
      title: "AI Solutions",
      description: "Transform your business with intelligent automation and machine learning solutions.",
      specs: ["Machine Learning", "Deep Learning", "Natural Language Processing", "AI-powered Chatbots"],
      color: "from-purple-600 to-blue-500",
      offset: 150
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and visualization.",
      specs: ["Big Data", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
      color: "from-cyan-600 to-emerald-500",
      offset: 250
    },
    {
      title: "Cloud Engineering",
      description: "Scalable cloud infrastructure solutions for modern enterprises.",
      specs: ["AWS / Azure / GCP", "Cloud Security", "Serverless Computing", "Infrastructure as Code"],
      color: "from-orange-500 to-amber-400",
      offset: 350
    },
    {
      title: "Web Development",
      description: "Build high-performance web applications with modern architectures.",
      specs: ["React / Next.js", "Full-Stack Development", "Progressive Web Apps", "API Development"],
      color: "from-pink-600 to-rose-400",
      offset: 450
    }
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotateX = useTransform(scrollYProgress, [0, 1], [15, -15]);
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Animated background layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br from-slate-900 to-blue-900"
        style={{ rotateX, y, scale: 1.2 }}
      />

      {/* Content container */}
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Services
        </motion.h1>

        <div className="max-w-7xl mx-auto space-y-40">
          {services.map((service, index) => (
            <ServiceLayer 
              key={index}
              service={service}
              reverse={index % 2 === 1}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceLayer = ({ service, reverse }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [service.offset, -service.offset]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);

  return (
    <motion.div 
      ref={ref}
      className={`relative h-screen flex items-center ${reverse ? 'justify-start' : 'justify-end'}`}
      style={{ y, opacity, scale }}
    >
      <div className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl shadow-2xl 
        ${reverse ? 'mr-20' : 'ml-20'} transform-gpu overflow-hidden`}>
        
        {/* Animated SVG pattern */}
        <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 100 100">
          <motion.path
            d="M0 50 Q 50 0 100 50 Q 50 100 0 50"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </svg>

        <div className={`absolute inset-0 p-12 flex flex-col ${reverse ? 'items-start' : 'items-end'}`}>
          <motion.h2 
            className="text-4xl font-bold text-white mb-6"
            initial={{ x: reverse ? -100 : 100 }}
            whileInView={{ x: 0 }}
            transition={{ delay: 0.2 }}
          >
            {service.title}
          </motion.h2>
          
          <motion.p 
            className={`text-xl text-white/80 max-w-xl ${reverse ? 'text-left' : 'text-right'}`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {service.description}
          </motion.p>

          {/* Service Specifications List */}
          <motion.ul 
            className="mt-6 space-y-2 text-white/90 text-lg"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {service.specs.map((spec, index) => (
              <motion.li 
                key={index} 
                className="flex items-center gap-3"
                initial={{ x: reverse ? -50 : 50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <span className="text-lg">✅</span> {spec}
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
