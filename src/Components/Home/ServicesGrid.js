import React, { useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import * as THREE from 'three';

const ServicesGrid = () => {
  const services = [
    { id: 1, title: 'Data Science', description: 'Advanced analytics and predictive modeling', icon: DataScienceIcon },
    { id: 2, title: 'Data Analysis', description: 'Actionable insights from complex datasets', icon: DataAnalysisIcon },
    { id: 3, title: 'AI Solutions', description: 'Machine learning & deep learning integration', icon: AiIcon },
    { id: 4, title: 'Web Development', description: 'Scalable full-stack applications', icon: WebDevIcon },
    { id: 5, title: 'Cloud Solutions', description: 'AWS, Azure & GCP architecture', icon: CloudIcon },
    { id: 6, title: 'BI Reporting', description: 'Interactive dashboards & visualization', icon: BiIcon },
  ];

  const canvasRef = useRef(null);
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  // Three.js Animation
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    
    // Particles
    const geometry = new THREE.BufferGeometry();
    const vertices = [];
    for (let i = 0; i < 5000; i++) {
      vertices.push(
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000),
        THREE.MathUtils.randFloatSpread(2000)
      );
    }
    geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
    
    const material = new THREE.PointsMaterial({ size: 2, color: 0x00ffff });
    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    camera.position.z = 1000;

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      particles.rotation.x += 0.0001;
      particles.rotation.y += 0.0001;
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 overflow-hidden">
      <motion.canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full"
        style={{ y, scale }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1 }}
      />
      
      <div className="container mx-auto px-4 py-24 relative z-10">
        <motion.h2
          className="text-4xl md:text-6xl font-bold text-center mb-20 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-600"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Expertise
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="group relative bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl shadow-2xl hover:shadow-blue-500/20 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ y: -10 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/20 to-blue-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <div className="relative z-10">
                <service.icon className="w-16 h-16 mb-6 text-cyan-400" />
                <h3 className="text-2xl font-bold mb-4 text-white">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// SVG Icon Components
const DataScienceIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M12 2L3 9L12 16L21 9L12 2Z"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <motion.path
      d="M3 9L12 16L21 9"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1, delay: 0.2 }}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const DataAnalysisIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M3 3v18h18M18 15l-6-6-4 4-2-2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
    />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      strokeWidth="2"
    />
  </svg>
);

const AiIcon = ({ className }) =>(<>
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M3 3v18h18M18 15l-6-6-4 4-2-2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
    />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      strokeWidth="2"
    />
  </svg>
</>)
const WebDevIcon = ({ className }) =>(<>
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M3 3v18h18M18 15l-6-6-4 4-2-2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
    />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      strokeWidth="2"
    />
  </svg>
</>)
const CloudIcon = ({ className }) =>(<>
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M3 3v18h18M18 15l-6-6-4 4-2-2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
    />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      strokeWidth="2"
    />
  </svg>
</>)
const BiIcon = ({ className }) =>(<>
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <motion.path
      d="M3 3v18h18M18 15l-6-6-4 4-2-2"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      transition={{ duration: 1 }}
      strokeWidth="2"
    />
    <motion.circle
      cx="19"
      cy="5"
      r="2"
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      strokeWidth="2"
    />
  </svg>
</>)

export default ServicesGrid;

  
