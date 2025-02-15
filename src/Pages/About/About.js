import { useEffect, useState } from "react";
import { motion, useScroll } from "framer-motion";
import { FaUsers, FaBullseye, FaRocket, FaCheckCircle } from "react-icons/fa";

const About = () => {
  const { scrollYProgress } = useScroll();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => setProgress(scrollYProgress.get() * 100);
    scrollYProgress.onChange(updateProgress);
  }, [scrollYProgress]);

  return (
    <div className="relative min-h-screen bg-gray-900 text-white">
      {/* Progress Bar */}
      <div className="fixed top-4 left-1/2 transform -translate-x-1/2 w-2/3 h-2 bg-gray-700 rounded-full">
        <motion.div
          className="h-2 bg-blue-500 rounded-full"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Content Sections */}
      <div className="container mx-auto px-6 py-24 space-y-24">
        <WhoWeAre />
        <OurMission />
        <OurTeam />
      </div>
    </div>
  );
};

// Who We Are Section
const WhoWeAre = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center space-y-6"
  >
    <h2 className="text-4xl font-bold text-blue-400">Who We Are</h2>
    <p className="text-lg text-gray-300 max-w-3xl mx-auto">
      We are a team of innovative developers and designers committed to crafting cutting-edge solutions.
      Our expertise spans across web development, AI solutions, and digital transformation.
    </p>
    <div className="flex justify-center">
      <SvgIllustration />
    </div>
  </motion.section>
);

// Our Mission Section
const OurMission = () => {
  const missionItems = [
    { icon: <FaBullseye />, title: "Our Vision", text: "Shaping the future through technology and innovation." },
    { icon: <FaRocket />, title: "Our Mission", text: "Delivering high-quality, scalable, and user-friendly applications." },
    { icon: <FaCheckCircle />, title: "Our Values", text: "Integrity, collaboration, and continuous improvement." },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center space-y-12"
    >
      <h2 className="text-4xl font-bold text-blue-400">Our Mission & Aspirations</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missionItems.map(({ icon, title, text }, i) => (
          <motion.div
            key={i}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
          >
            <div className="text-4xl text-blue-400">{icon}</div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-gray-300">{text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// Our Team Section
const OurTeam = () => {
  const team = [
    { name: "Mohammad Yousof", role: "Full-Stack Developer", image: "/team1.jpg" },
    { name: "Jane Doe", role: "UI/UX Designer", image: "/team2.jpg" },
    { name: "John Smith", role: "AI Engineer", image: "/team3.jpg" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="text-center space-y-12"
    >
      <h2 className="text-4xl font-bold text-blue-400">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map(({ name, role, image }, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-800 p-6 rounded-xl shadow-lg space-y-4"
          >
            <img src={image} alt={name} className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-blue-400" />
            <h3 className="text-xl font-semibold">{name}</h3>
            <p className="text-gray-300">{role}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

// SVG Illustration Component
const SvgIllustration = () => (
  <svg viewBox="0 0 500 500" className="w-64 h-64 text-blue-400">
    <circle cx="250" cy="250" r="200" stroke="currentColor" strokeWidth="20" fill="none" />
    <motion.circle cx="250" cy="100" r="20" fill="currentColor" animate={{ y: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="100" cy="250" r="20" fill="currentColor" animate={{ x: [0, 20, -20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="400" cy="250" r="20" fill="currentColor" animate={{ x: [0, -20, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
    <motion.circle cx="250" cy="400" r="20" fill="currentColor" animate={{ y: [0, -20, 20, 0] }} transition={{ duration: 2, repeat: Infinity }} />
  </svg>
);

export default About;
