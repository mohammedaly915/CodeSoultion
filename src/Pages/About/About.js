import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { TeamMembers, valuesList, techStack } from './Data';
import { FaHandshake, FaLightbulb, FaUsers, FaRocket } from 'react-icons/fa';
import { useRef } from 'react';

const AboutPage = () => {
  const scrollRef = useRef();
  const { scrollYProgress } = useScroll({
    target: scrollRef,
    offset: ["start start", "end end"],
  });

  // Enhanced scroll progress transformations
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const yBackground = useTransform(scrollYProgress, [0, 1], ['0%', '60%']);
  const opacityBar = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0, 1, 1, 0]);

  return (
    <div
      ref={scrollRef}
      className="min-h-screen bg-gradient-to-b from-primeColor via-primeColor/95 to-primeColor text-gray-100 overflow-x-hidden"
    >
      {/* Scroll Progress Bar */}
      <motion.div
        style={{ scaleX, opacity: opacityBar }}
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-secondColor via-secondColor/80 to-secondColor/50 z-50 shadow-[0_0_10px_rgba(255,85,85,0.5)] origin-left"
      />

      {/* Hero Section */}
      <section className="h-screen flex items-center px-6 lg:px-20 relative isolate">
        <motion.div
          style={{ y: yBackground }}
          className="absolute inset-0 bg-gradient-to-r from-secondColor/25 via-transparent to-secondColor/15 opacity-40 -z-10"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="grid lg:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto"
        >
          {/* Text Content */}
          <div className="space-y-8 z-10">
            <h1 className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-secondColor via-white to-secondColor bg-clip-text text-transparent tracking-tight">
              Who We Are
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 font-light leading-relaxed">
              At <span className="font-semibold">Holoul</span>, we bridge the gap between visionary ideas and technical execution. 
              Our passionate team of developers, designers, and strategists crafts digital solutions that transform businesses and empower communities.
            </p>
            <div className="flex gap-6">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondColor to-secondColor/80 text-white text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-[0_0_15px_rgba(255,85,85,0.5)]"
              >
                Start Your Journey
              </Link>
            </div>
          </div>

          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            className="relative lg:h-[600px] lg:w-[600px]"
          >
            <div className="absolute inset-0 bg-secondColor/15 rounded-3xl backdrop-blur-md shadow-lg -z-10" />
            <motion.img
              src="https://res.cloudinary.com/dswehdo2v/image/upload/v1740085556/tech-companies_cv2pzo.jpg"
              alt="Our team collaborating"
              className="w-full h-full object-cover rounded-3xl shadow-2xl relative z-10"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: 'mirror', ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision Stacked Sections */}
      <div className="space-y-32 py-32 px-6 lg:px-20 bg-primeColor/95">
        <StackedSection
          title="Our Mission"
          content="To empower businesses through innovative digital solutions that drive meaningful growth. We combine technical excellence with strategic thinking to transform challenges into opportunities, delivering measurable results that propel our clients forward in the digital age."
          icon={<FaRocket className="text-6xl text-secondColor" />}
          layout="left"
        />
        <StackedSection
          title="Our Values"
          content={
            <>
              <p className="mb-4 text-gray-200">Core principles guiding every interaction:</p>
              <ul className="list-disc pl-6 space-y-3 text-gray-300">
                <li><strong>Integrity First:</strong> Transparent communication and ethical practices</li>
                <li><strong>Innovation Driven:</strong> Continuous pursuit of cutting-edge solutions</li>
                <li><strong>Collaborative Excellence:</strong> Partnering for shared success</li>
                <li><strong>Sustainable Growth:</strong> Environmentally conscious technology solutions</li>
                <li><strong>Client-Centric Focus:</strong> Tailored strategies for unique needs</li>
              </ul>
            </>
          }
          icon={<FaHandshake className="text-6xl text-secondColor" />}
          layout="right"
        />
      </div>

      {/* Values Section */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-b from-primeColor/90 to-primeColor">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent"
        >
          Core Values
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {valuesList.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-primeColor/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,85,85,0.3)] transition-all duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-secondColor/15 rounded-full">
                  <value.icon className="w-6 h-6 text-secondColor" />
                </div>
                <h3 className="text-xl font-semibold text-gray-100">{value.title}</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-32 px-6 lg:px-20 relative bg-primeColor">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent"
        >
          Meet Our Team
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {TeamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-primeColor/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-[0_0_20px_rgba(255,85,85,0.3)] overflow-hidden transition-all duration-300"
            >
              <div className="h-80 relative overflow-hidden">
                <img
                  src={member.photo}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-100 mb-2">{member.name}</h3>
                <p className="text-gray-300 mb-4">{member.role}</p>
                <div className="flex gap-4">
                  {member.socialLinks.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      className="text-secondColor hover:text-white transition-colors duration-300"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-32 px-6 lg:px-20 bg-gradient-to-b from-primeColor/90 to-primeColor">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent"
        >
          Technology Ecosystem
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-7xl mx-auto">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-6 bg-primeColor/80 backdrop-blur-sm rounded-xl flex flex-col items-center shadow-md hover:shadow-[0_0_15px_rgba(255,85,85,0.3)] transition-all duration-300"
            >
              <div className="w-12 h-12 text-secondColor mb-4">
                <img src={tech.logo} loading="lazy" className="w-full h-full object-contain" alt={tech.name} />
              </div>
              <h4 className="text-sm font-medium text-gray-100 text-center">{tech.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <FinalCTA />
    </div>
  );
};

// Stacked Section Component
const StackedSection = ({ title, content, icon, layout }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`flex flex-col ${layout === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 max-w-6xl mx-auto`}
    >
      <motion.div
        className="md:w-1/2 flex justify-center"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-8 bg-primeColor/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-[0_0_15px_rgba(255,85,85,0.3)] transition-all duration-300">
          {icon}
        </div>
      </motion.div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent">{title}</h2>
        <p className="text-gray-200 text-lg leading-relaxed">{content}</p>
      </div>
    </motion.div>
  );
};

// Final CTA Component
const FinalCTA = () => {
  return (
    <section className="py-32 px-6 lg:px-20 relative isolate">
      <div className="absolute inset-0 bg-gradient-to-b from-primeColor/15 to-transparent pointer-events-none -z-10" />
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
        className="text-center relative bg-primeColor/40 backdrop-blur-xl p-12 md:p-16 rounded-3xl shadow-[0_10px_40px_rgba(0,0,0,0.3)] overflow-hidden max-w-4xl mx-auto"
      >
        <div className="absolute inset-0 pointer-events-none rounded-3xl bg-gradient-to-r from-secondColor/20 via-transparent to-secondColor/20 opacity-40 animate-pulse-slow" />
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-2 bg-gradient-to-r from-transparent via-secondColor to-transparent rounded-b-md" />
        <motion.h2
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-4xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-secondColor via-white to-secondColor bg-clip-text text-transparent tracking-tight drop-shadow-md"
        >
          Ready to Transform?
        </motion.h2>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-xl md:text-2xl text-gray-100 mb-6 font-light leading-relaxed max-w-3xl mx-auto drop-shadow-sm"
        >
          Partner with us to turn your bold ideas into reality with cutting-edge digital solutions tailored to your vision.
        </motion.p>
        <motion.p
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="text-lg text-gray-300 mb-10 font-medium leading-relaxed max-w-2xl mx-auto"
        >
          Whether you're launching a startup, scaling an enterprise, or reimagining your digital presence, our team at Holoul is here to guide you every step of the way. Let’s build something extraordinary together.
        </motion.p>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <Link
            to="/contact"
            className="relative no-underline inline-flex items-center px-8 py-4 bg-gradient-to-r from-secondColor via-secondColor/90 to-secondColor/70 text-white text-lg font-semibold rounded-full overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-110 hover:shadow-[0_0_30px_rgba(255,85,85,0.7)] group"
          >
            <span className="absolute inset-0 bg-white/25 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full scale-0 group-hover:scale-105 origin-center" />
            <span className="relative z-10 transition-transform duration-500 ease-in-out group-hover:pr-3">
              Start Your Digital Journey
            </span>
            <motion.span
              className="relative z-10 ml-2 w-6 h-6 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out"
              initial={{ x: -10 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-full h-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </motion.span>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutPage;