import { motion } from 'framer-motion';
import { Fragment } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaDribbble } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      title: 'Solutions',
      items: ['AI Soultions', 'Data Analytics', 'Mobile Development', 'Web Development']
    },
    {
      title: 'Company',
      items: ['About Us', 'Work', 'Services', 'Open Source']
    },
    {
      title: 'Legal',
      items: ['Privacy Policy', 'Terms of Service', 'Cookie Policy', 'Security']
    }
  ];

  const social = [
    { name: 'GitHub', icon: <FaGithub />, url: '#' },
    { name: 'Twitter', icon: <FaTwitter />, url: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin />, url: '#' },
  ];

  return (
    <Fragment>
      <div className="relative bg-gradient-to-b from-slate-900 to-blue-900/95">
        {/* Animated Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent"
        />

        <footer className="container mx-auto px-4 pt-24 pb-12 max-w-7xl">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <div className="space-y-6 lg:pr-8">
              <motion.div 
                whileHover={{ scale: 1.05 }}
                className="w-32 relative"
              >
                <div className="absolute -inset-4 bg-cyan-400/10 rounded-xl blur-2xl" />
                <svg viewBox="0 0 100 100" className="text-cyan-400 relative z-10">
                  <path
                    d="M50 0L100 50L50 100L0 50L50 0Z"
                    fill="currentColor"
                    className="opacity-75"
                  />
                  <path
                    d="M30 30L70 30L70 70L30 70Z"
                    fill="currentColor"
                    className="opacity-50"
                  />
                </svg>
              </motion.div>
              <p className="text-gray-400 text-lg leading-relaxed">
                Building tomorrow's digital experiences through innovative solutions
              </p>
            </div>

            {/* Links */}
            {links.map((section, i) => (
              <div key={i} className="space-y-4">
                <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                  {section.title}
                </h4>
                <ul className="space-y-3">
                  {section.items.map((item, j) => (
                    <motion.li
                      key={j}
                      whileHover={{ x: 5 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                    >
                      <a 
                        href="#" 
                        className="text-gray-300 hover:text-cyan-400 transition-colors flex items-center group no-underline"
                      >
                        <span className="w-2 h-2 bg-cyan-400/0 rounded-full mr-2 group-hover:bg-cyan-400 transition-all" />
                        {item}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Social */}
            <div className="space-y-6">
              <h4 className="text-xl font-semibold text-cyan-400 mb-4">
                Connect
              </h4>
              <div className="flex flex-wrap gap-3">
                {social.map((platform, i) => (
                  <motion.a
                    key={i}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2.5 text-gray-300 hover:text-cyan-400 rounded-xl bg-white/5 hover:bg-white/10 transition-all relative overflow-hidden no-underline"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-cyan-400/10 opacity-0 hover:opacity-100 transition-opacity" />
                    <span className="sr-only">{platform.name}</span>
                    <motion.div 
                      className="w-6 h-6"
                      animate={{ rotate: [0, 15, -15, 0] }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2
                      }}
                    >
                      {platform.icon}
                    </motion.div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="border-t border-white/5 mt-12 pt-8 text-center text-gray-400"
          >
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Code Solutions. All rights reserved.
            </p>
          </motion.div>
        </footer>
      </div>
    </Fragment>
  );
};


export default Footer;
// SVG Icons remain the same