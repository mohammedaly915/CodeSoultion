import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={ref} className="min-h-screen bg-gradient-to-b from-slate-50 to-blue-50">
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 right-0 h-2 bg-gray-200 z-50">
        <motion.div
          className="h-full bg-blue-600"
          style={{ width: progressWidth }}
        />
      </div>

      <div className="container mx-auto px-4 py-24">
        <HeroSection />
        <MissionSection />
        <TeamSection />
        <ValuesSection />
      </div>
    </div>
  );
};

const HeroSection = () => (
  <motion.section
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-center mb-24"
  >
    <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
      Crafting Digital Excellence
    </h1>
    <AnimatedCircleSVG />
    <p className="text-xl text-gray-600 max-w-2xl mx-auto mt-8">
      We're a passionate team of innovators dedicated to transforming ideas into impactful digital solutions.
    </p>
  </motion.section>
);

const MissionSection = () => {
  const missions = [
    {
      icon: <LightbulbIcon />,
      title: "Our Vision",
      content: "Lead digital transformation through innovative solutions"
    },
    {
      icon: <TargetIcon />,
      title: "Our Mission",
      content: "Empower businesses with cutting-edge technology and strategic insights"
    },
    {
      icon: <GrowthIcon />,
      title: "Our Promise",
      content: "Deliver measurable results and sustainable growth"
    }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-16">Our Core</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {missions.map((mission, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
          >
            <div className="w-16 h-16 mb-6 text-blue-600">
              {mission.icon}
            </div>
            <h3 className="text-2xl font-bold mb-4">{mission.title}</h3>
            <p className="text-gray-600">{mission.content}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const TeamSection = () => {
  const team = [
    { name: "Alex Smith", role: "CEO", image: "/team1.jpg" },
    { name: "Maria Garcia", role: "CTO", image: "/team2.jpg" },
    { name: "James Wilson", role: "Lead Developer", image: "/team3.jpg" }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-16">Meet the Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-96 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900/80 to-transparent">
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-gray-300">{member.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const ValuesSection = () => {
  const values = [
    { title: "Innovation", percentage: 95 },
    { title: "Client Focus", percentage: 100 },
    { title: "Technical Excellence", percentage: 98 }
  ];

  return (
    <section className="py-16">
      <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
      <div className="max-w-4xl mx-auto space-y-8">
        {values.map((value, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white p-6 rounded-xl shadow-md"
          >
            <div className="flex justify-between mb-4">
              <span className="font-semibold">{value.title}</span>
              <span className="text-blue-600">{value.percentage}%</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <motion.div
                className="h-full bg-blue-600 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${value.percentage}%` }}
                transition={{ duration: 1 }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

// SVG Components
const AnimatedCircleSVG = () => (
  <motion.svg
    viewBox="0 0 100 100"
    className="w-32 h-32 mx-auto"
    animate={{ rotate: 360 }}
    transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
  >
    <circle cx="50" cy="50" r="45" stroke="#3b82f6" strokeWidth="2" fill="none" />
    <path
      d="M50 15 A35 35 0 0 1 50 85"
      stroke="#0ea5e9"
      strokeWidth="2"
      fill="none"
    />
  </motion.svg>
);

const LightbulbIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v1m0 18v1m9-9h1M2 12h1m16.364-6.364l-.707-.707M6.343 17.657l-.707-.707M17.657 6.343l-.707-.707M6.343 6.344l-.707.707" />
    <path d="M15.536 15.536a5 5 0 0 1-7.072 0 5 5 0 0 1 0-7.072 5 5 0 0 1 7.072 0 5 5 0 0 1 0 7.072z" />
  </svg>
);

const TargetIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="6" />
    <circle cx="12" cy="12" r="2" />
  </svg>
);

const GrowthIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 20l7-7m-7 7l-7-7m7 7V8m0 0h3m-3 0H9" />
  </svg>
);

export default About;