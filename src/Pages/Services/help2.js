import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and visualization.",
      specs: ["Big Data", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
      color: "from-cyan-600 to-emerald-500",
      offset: 150
    },
    {
      title: "AI Solutions",
      description: "Transform your business with intelligent automation and machine learning solutions.",
      specs: ["Machine Learning", "Deep Learning", "Natural Language Processing", "AI-powered Chatbots"],
      color: "from-purple-600 to-blue-500",
      offset: 250
    },
    {
      title: "Mobile Development",
      description: "Build cross-platform mobile experiences with native performance.",
      specs: [
        "iOS & Android Development",
        "Flutter",
        "Mobile UI/UX Design",
        "API Integration",
        "App Store Optimization"
      ],
      color: "from-purple-500 to-pink-400",
      offset: 350
    },

    {
      title: "Web Development",
      description: "Build high-performance web applications with modern architectures.",
      specs: ["React/Next.js", "Full-Stack Development", "Progressive Web Apps", "API Development"],
      color: "from-pink-600 to-rose-400",
      offset: 450
    },
    {
      title: "Data Science",
      description: "Transform raw data into actionable insights through advanced analytics and machine learning.",
      specs: [
        "Predictive Modeling",
        "Data Mining & Wrangling",
        "Statistical Analysis",
        "Big Data Processing",
        "ML Ops & Deployment"
      ],
      color: "from-green-500 to-teal-400",
      offset: 250
    },
  ];

  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const rotateX = useTransform(scrollYProgress, [0, 1], [10, -10]);
  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  return (
    <div ref={ref} className="relative min-h-[400vh] overflow-hidden">
      {/* Magic background layer */}
      <motion.div 
        className="absolute inset-0 bg-gradient-to-br  from-slate-900 via-blue-900 to-purple-900"
        style={{ 
          rotateX,
          y,
          scale: useTransform(scrollYProgress, [0, 1], [1, 1.1]),
          opacity: useTransform(scrollYProgress, [0, 1], [1, 0.3])
        }}
      />

      {/* Content container */}
      <div className="relative flex flex-col z-10 py-24 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.h1>
        
        {services.map((service, index) => (
          <ServiceLayer 
            key={index}
            service={service}
            index={index}
            totalServices={services.length}
          />
        ))}
      </div>
    </div>
  );
};

const ServiceLayer = ({ service, index, totalServices }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [service.offset, -service.offset]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1.1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  return (
    <motion.div 
      ref={ref}
      className={`sticky top-50 h-screen mt-[${index*50}px] flex items-center justify-center`}
      style={{ 
        zIndex: totalServices + index,
        y,
        scale,
        opacity
      }}
    >
      <div className={`relative w-full max-w-5xl bg-gradient-to-br ${service.color}   rounded-3xl shadow-2xl transform-gpu overflow-hidden p-1 backdrop-blur-lg
        ${index !== 0 ? 'scale-90' : ''}
        `}>
        
        {/* Glowing border */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl" />
        
        <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-[calc(1.5rem-4px)] p-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">{service.title}</h2>
            
            <p className="text-xl text-gray-300 max-w-2xl"> {service.description}</p>

            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              {service.specs.map((spec, i) => (
                <motion.li
                  key={i}
                  className="flex items-center gap-3 p-4 bg-white/5 rounded-xl backdrop-blur-sm"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.4 }}
                >
                  <div className="w-8 h-8 rounded-full bg-cyan-400/10 flex items-center justify-center">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
                  </div>
                  <span className="text-gray-200">{spec}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;