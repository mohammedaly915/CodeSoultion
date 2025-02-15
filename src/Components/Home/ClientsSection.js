import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const ClientsSection = () => {
  const clients = [
    { name: 'TechCorp', industry: 'AI Technology' },
    { name: 'FinSecure', industry: 'Financial Services' },
    { name: 'HealthPlus', industry: 'Healthcare' },
    { name: 'EduFuture', industry: 'Education' },
    { name: 'GreenEnergy', industry: 'Renewable Energy' },
    { name: 'RetailHub', industry: 'E-Commerce' },
  ];

  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);

  const WaveDivider = () => (
    <motion.svg 
      viewBox="0 0 1440 320" 
      className="absolute top-0 left-0 w-full"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <path
        fill="#f3f4f6"
        fillOpacity="1"
        d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
      >
        <animate
          attributeName="d"
          dur="15s"
          repeatCount="indefinite"
          values="
            M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
            M0,128L48,117.3C96,107,192,85,288,106.7C384,128,480,192,576,192C672,192,768,128,864,101.3C960,75,1056,85,1152,101.3C1248,117,1344,139,1392,149.3L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z;
            M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,170.7C672,171,768,213,864,234.7C960,256,1056,256,1152,234.7C1248,213,1344,171,1392,149.3L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z
          "
        />
      </path>
    </motion.svg>
  );

  return (
    <motion.section 
      ref={sectionRef}
      className="relative py-24 bg-gradient-to-b from-gray-100 to-white overflow-hidden"
      style={{ opacity, scale }}
    >
      <WaveDivider />
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500"
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Trusted by Innovators
        </motion.h2>

        <motion.p
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Partnering with industry leaders to drive digital transformation
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              className="relative bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -100px 0px" }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-600" />
              
              <div className="mb-6">
                <svg
                  className="w-16 h-16 mx-auto text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <motion.path
                    d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </svg>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-2">{client.name}</h3>
              <p className="text-gray-600">{client.industry}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 flex justify-center"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="text-sm font-semibold text-gray-600 px-6 py-2 rounded-full bg-gray-50 shadow-inner">
            Trusted by 1000+ companies worldwide
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default ClientsSection;