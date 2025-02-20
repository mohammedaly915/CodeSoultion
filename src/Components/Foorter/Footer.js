import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaBalanceScale
} from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const Footer = () => {
  const links = [
    {
      title: 'Solutions',
      icon: <FaCode className="w-5 h-5 text-secondColor" />,
      items: ['AI Development', 'Data Analytics', 'Cloud Solutions', 'Web Services']
    },
    {
      title: 'Company',
      icon: <HiOutlineBuildingOffice2 className="w-5 h-5 text-secondColor" />,
      items: ['About Us', 'Careers', 'Blog', 'Contact']
    },
    {
      title: 'Legal',
      icon: <FaBalanceScale className="w-5 h-5 text-secondColor" />,
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Settings']
    }
  ];

  const contact = [
    { 
      icon: <FaMapMarkerAlt className="w-5 h-5 text-secondColor" />, 
      text: '123 Tech Street, Silicon Valley, CA' 
    },
    { 
      icon: <FaRegEnvelope className="w-5 h-5 text-secondColor" />, 
      text: 'contact@codesolutions.com' 
    },
    { 
      icon: <FaPhone className="w-5 h-5 text-secondColor" />, 
      text: '+1 (555) 123-4567' 
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };

  return (
    <Fragment>
      <footer className="bg-gradient-to-b from-[#111827] to-[#111827] border-t border-[#1C68AA]/50 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="container mx-auto px-4 py-16 max-w-7xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-12 mb-16">
            
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                className="flex items-center gap-3 mb-6"
              >
                <motion.div
                  animate={{
                    rotate: [0, 10, -10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    repeatType: 'mirror'
                  }}
                  className="p-2.5 bg-[#1C68AA]/10 backdrop-blur-sm rounded-xl border border-[#1C68AA]/20"
                >
                  <svg className="w-7 h-7 text-[#1C68AA]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </motion.div>
                <div>
                  <span className="text-xl font-semibold text-gray-100">CodeSolutions</span>
                  <p className="text-xs text-[#1C68AA]/80 font-medium tracking-wide mt-1">
                    Enterprise Technology Partner
                  </p>
                </div>
              </motion.div>
              
              {/* Contact Info */}
              <div className="space-y-4">
                {contact.map((item, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <motion.span 
                      whileHover={{ scale: 1.1 }}
                      className="shrink-0 mt-0.5"
                    >
                      {item.icon}
                    </motion.span>
                    <span className="text-sm text-gray-400 group-hover:text-[#1C68AA] transition-colors">
                      {item.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Links Columns */}
            {links.map((section, index) => (
              <motion.div 
                key={index} 
                variants={containerVariants}
                className="space-y-6"
              >
                <motion.div variants={itemVariants} className="flex items-center gap-3 mb-4">
                  {section.icon}
                  <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                    {section.title}
                  </h4>
                </motion.div>
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <motion.li 
                      key={itemIndex}
                      variants={itemVariants}
                    >
                      <a 
                        href="#" 
                        className="flex items-center gap-3 text-sm text-gray-400 hover:text-[#1C68AA] transition-colors no-underline group"
                      >
                        <motion.span 
                          className="w-1.5 h-1.5 bg-[#1C68AA]/0 rounded-full group-hover:bg-[#1C68AA] transition-all"
                          whileHover={{ scale: 1.5 }}
                        />
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-6">
              <motion.div 
                variants={itemVariants}
                className="flex items-center gap-3 mb-4"
              >
                <FaRegEnvelope className="w-5 h-5 text-[#1C68AA]" />
                <h4 className="text-sm font-semibold text-gray-100 uppercase tracking-wider">
                  Newsletter
                </h4>
              </motion.div>
              <motion.form 
                variants={itemVariants}
                className="space-y-4"
              >
                <motion.input
                  whileFocus={{ 
                    borderColor: "#1C68AA",
                    boxShadow: "0 0 0 3px rgba(28, 104, 170, 0.1)"
                  }}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2.5 bg-gray-800/50 border border-gray-700/50 rounded-lg focus:outline-none text-sm text-gray-200 placeholder-gray-500 transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-4 py-2.5 bg-[#1C68AA]/30 backdrop-blur-sm hover:bg-[#1C68AA]/40 border border-[#1C68AA]/20 rounded-lg text-sm font-medium text-[#1C68AA] hover:text-indigo-100 transition-all"
                >
                  Subscribe
                </motion.button>
              </motion.form>
            </motion.div>
          </div>

          {/* Animated Divider */}
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="border-t border-gray-800/50 my-10"
          />

          {/* Bottom Bar */}
          <motion.div 
            variants={containerVariants}
            className="flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <motion.p variants={itemVariants} className="text-xs text-gray-500 text-center">
              © {new Date().getFullYear()} CodeSolutions. All rights reserved.
              <span className="block md:inline mt-1 md:mt-0 md:ml-2 text-gray-600">
                Part of Tech Innovators Group
              </span>
            </motion.p>
            
            <motion.div 
              variants={containerVariants}
              className="flex items-center gap-5"
            >
              <motion.a 
                variants={itemVariants}
                href="#" 
                className="text-gray-400 hover:text-[#1C68AA] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaGithub className="w-5 h-5" />
              </motion.a>
              <motion.a 
                variants={itemVariants}
                href="#" 
                className="text-gray-400 hover:text-[#1C68AA] transition-colors"
                whileHover={{ scale: 1.1 }}
              >
                <FaLinkedin className="w-5 h-5" />
              </motion.a>
              <motion.div 
                variants={itemVariants}
                className="h-5 w-px bg-gray-700/50" 
              />
              <motion.a 
                variants={itemVariants}
                href="#" 
                className="text-xs font-medium text-gray-400 hover:text-[#1C68AA] transition-colors"
                whileHover={{ x: 5 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a 
                variants={itemVariants}
                href="#" 
                className="text-xs font-medium text-gray-400 hover:text-[#1C68AA] transition-colors"
                whileHover={{ x: 5 }}
              >
                Terms of Service
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </footer>
    </Fragment>
  );
};

export default Footer;
