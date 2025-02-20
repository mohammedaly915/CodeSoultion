import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const Services = () => {
  const services = [
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics and visualization.",
      specs: ["Big Data", "Data Visualization", "Predictive Analytics", "Business Intelligence"],
      color: "from-cyan-600 to-emerald-500"
    },
    {
      title: "AI Solutions",
      description: "Transform your business with intelligent automation and machine learning solutions.",
      specs: ["Machine Learning", "Deep Learning", "Natural Language Processing", "AI-powered Chatbots"],
      color: "from-purple-600 to-blue-500"
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
      color: "from-purple-500 to-pink-400"
    },
    {
      title: "Web Development",
      description: "Build high-performance web applications with modern architectures.",
      specs: ["React/Next.js", "Full-Stack Development", "Progressive Web Apps", "API Development"],
      color: "from-pink-600 to-rose-400"
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
      color: "from-green-500 to-teal-400"
    },
  ];

  return (
    <div className="relative min-h-[500vh] flex flex-col items-center justify-center space-y-20 px-4 py-20">
      <motion.h1 
        className="text-5xl md:text-7xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Expertise
      </motion.h1>
      <div className="relative w-full max-w-4xl">
        {services.map((service, index) => (
          <ServiceCard 
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

const ServiceCard = ({ service, index, totalServices }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center center"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

  return (
    <motion.div 
      ref={ref}
      className="sticky top-40 w-full flex items-center justify-center"
      style={{ zIndex: totalServices - index, y, scale, opacity }}
    >
      <div className={`relative w-full bg-gradient-to-br ${service.color} rounded-3xl shadow-xl overflow-hidden p-1 backdrop-blur-lg`}>
        <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-3xl p-8">
          
          <h2 className="text-4xl font-bold bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
            {service.title}
          </h2>
          <p className="text-xl text-gray-300 mt-4">{service.description}</p>
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
        </div>
      </div>
    </motion.div>
  );
};

export default Services;
