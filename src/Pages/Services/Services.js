import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ServiceLayer from '../../Components/Services/ServiceLayer';

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
   

  return (
    <div ref={ref} className="relative min-h-[400vh] bg-primeColor mt-[10vh] ">

      {/* Content container */}
      <div className="relative flex flex-col z-10 py-24 px-4 sm:px-6 lg:px-8">
        <motion.h1 
          className="text-5xl md:text-7xl font-extrabold overflow-hidden  text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-secondColor to-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Services
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



export default Services;