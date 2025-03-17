import { motion } from 'framer-motion';
import { Fragment, memo } from 'react';
import { 
  FaGithub, 
  FaLinkedin, 
  FaRegEnvelope,
  FaMapMarkerAlt,
  FaPhone,
  FaCode,
  FaBalanceScale,
  FaInstagram
} from "react-icons/fa";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

// Main Footer Component
const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  return (
    <Fragment>
      <footer className="bg-gradient-to-br from-[#0F172A] via-[#111827] to-[#0F172A] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-secondColor/10 via-transparent to-transparent opacity-50 pointer-events-none"></div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="container mx-auto px-6 py-20 max-w-7xl relative z-10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
            <BrandSection />
            <LinksSection />
            <NewsletterSection />
          </div>
          <FooterDivider />
          <FooterBottom />
        </motion.div>
      </footer>
    </Fragment>
  );
};

// Brand Section Component
const BrandSection = memo(() => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const contact = [
    { icon: <FaMapMarkerAlt className="w-5 h-5 text-secondColor" />, text: 'Dubai, Emirates' },
    { icon: <FaRegEnvelope className="w-5 h-5 text-secondColor" />, text: 'smtp.holoul.com' },
    { icon: <FaPhone className="w-5 h-5 text-secondColor" />, text: '+1 (555) 123-4567' }
  ];

  // Function to handle email click
  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`; // Opens default email client
  };

  return (
    <motion.div variants={itemVariants} className="w-full space-y-8">
      <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-4 mb-6">
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, repeatType: 'mirror', ease: "easeInOut" }}
          className="p-3 bg-secondColor/10 backdrop-blur-md rounded-xl shadow-[0_0_12px_rgba(28,104,170,0.2)]"
        >
          <svg className="w-7 h-7 text-secondColor" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 2l9 9v11H3V11l9-9z" />
          </svg>
        </motion.div>
        <div>
          <span className="text-2xl font-bold text-gray-100 bg-gradient-to-r from-secondColor to-white bg-clip-text text-transparent">Holoul</span>
          <p className="text-sm text-secondColor/80 font-medium tracking-wide mt-1">
            Digital Transformation Experts
          </p>
        </div>
      </motion.div>

      {/* details contact */}
      <div className="space-y-5">
        {contact.map((item, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex items-start gap-4 group"
          >
            <motion.span
              whileHover={{ scale: 1.2, rotate: 360 }}
              transition={{ duration: 0.5 }}
              className="shrink-0 mt-0.5"
            >
              {item.icon}
            </motion.span>
            <span
              className={`text-sm text-gray-300 group-hover:text-secondColor transition-colors duration-300 ${
                item.text.includes('@') || item.text.includes('.com') ? 'cursor-pointer' : ''
              }`}
              onClick={() => {
                if (item.text === 'smtp.holoul.com') {
                  handleEmailClick(item.text);
                }
              }}
            >
              {item.text}
            </span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
});

// Links Section Component
const LinksSection = memo(() => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  const links = [
    { title: 'Solutions', icon: <FaCode className="w-6 h-6 text-secondColor" />, items: ['AI Development', 'Data Analytics', 'Mobile Development', 'Web Services'] },
    { title: 'Company', icon: <HiOutlineBuildingOffice2 className="w-6 h-6 text-secondColor" />, items: ['About Us', 'Careers', 'Blog', 'Contact'] },
    { title: 'Legal', icon: <FaBalanceScale className="w-6 h-6 text-secondColor" />, items: ['Privacy Policy', 'Terms of Service', 'Cookie Settings'] }
  ];

  return (
    <>
      {links.map((section, index) => (
        <motion.div key={index} variants={itemVariants} className="space-y-6">
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
            <motion.span whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
              {section.icon}
            </motion.span>
            <h4 className="text-base font-semibold text-gray-100 uppercase tracking-widest">
              {section.title}
            </h4>
          </motion.div>
          <ul className="space-y-4">
            {section.items.map((item, itemIndex) => (
              <motion.li key={itemIndex} variants={itemVariants}>
                <a
                  href="#"
                  className="flex items-center gap-3 text-sm text-gray-300 hover:text-secondColor transition-colors duration-300 no-underline group"
                >
                  <motion.span
                    className="w-2 h-2 bg-secondColor/20 rounded-full group-hover:bg-secondColor transition-all duration-300"
                    whileHover={{ scale: 1.3 }}
                  />
                  {item}
                </a>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </>
  );
});

// Newsletter Section Component
const NewsletterSection = memo(() => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
  };

  return (
    <motion.div variants={itemVariants} className="space-y-6 lg:max-w-sm">
      <motion.div variants={itemVariants} className="flex items-center gap-4 mb-4">
        <motion.span
          whileHover={{ scale: 1.1, rotate: 10 }}
          animate={{ rotate: [0, 5, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="relative"
        >
          <FaRegEnvelope className="w-6 h-6 text-secondColor" />
          <motion.span
            className="absolute -top-1 -right-1 w-2 h-2 bg-secondColor rounded-full"
            animate={{ scale: [0, 1.2, 0] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
          />
        </motion.span>
        <h4 className="text-base font-semibold text-gray-100 uppercase tracking-widest">
          Newsletter
        </h4>
      </motion.div>
      <motion.form
        variants={itemVariants}
        className="space-y-4"
        onSubmit={(e) => e.preventDefault()}
      >
        <motion.input
          whileFocus={{
            boxShadow: "0 0 12px rgba(28, 104, 170, 0.4), 0 0 0 4px rgba(28, 104, 170, 0.2)", // Enhanced shadow on focus
            scale: 1.02,
          }}
          whileHover={{ scale: 1.01, boxShadow: "0 0 8px rgba(28, 104, 170, 0.2)" }} // Subtle hover shadow
          type="email"
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 rounded-xl focus:outline-none text-sm text-gray-200 placeholder-gray-400 transition-all duration-300 shadow-md" // Base shadow
        />
        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundImage: "linear-gradient(to right, #1C68AA, #2563eb)",
            boxShadow: "0 0 15px rgba(28, 104, 170, 0.5)", // Stronger hover shadow
          }}
          whileTap={{ scale: 0.95 }}
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-secondColor/30 to-secondColor/10 backdrop-blur-md rounded-xl text-sm font-semibold text-secondColor hover:text-white transition-all duration-300 shadow-md" // Base shadow
        >
          Subscribe
        </motion.button>
      </motion.form>
    </motion.div>
  );
});

// Footer Divider Component
const FooterDivider = memo(() => (
  <motion.div
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 1, ease: "easeInOut" }}
    className="relative my-12"
  >
    <div className="border-t border-gray-800/70"></div>
    <motion.div
      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-1 bg-gradient-to-r from-transparent via-secondColor to-transparent"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.2, delay: 0.2 }}
    />
  </motion.div>
));

// Footer Bottom Component
const FooterBottom = memo(() => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: "easeOut" } }
  };

  return (
    <motion.div
      variants={itemVariants}
      className="flex flex-col md:flex-row items-center justify-between gap-8"
    >
      <motion.p
        variants={itemVariants}
        className="text-xs text-gray-400 text-center md:text-left"
      >
        © {new Date().getFullYear()} Holoul. All rights reserved.
        <span className="block md:inline mt-2 md:mt-0 md:ml-2 text-gray-500">
          Innovating the Future of Technology
        </span>
      </motion.p>
      <motion.div variants={itemVariants} className="flex items-center gap-6">
        
        <motion.a
          href="https://linkedin.com"
          className="text-gray-400 hover:text-secondColor transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <FaLinkedin className="w-6 h-6" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/holoul1/"
          className="text-gray-400 hover:text-secondColor transition-colors duration-300"
          whileHover={{ scale: 1.2, rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <FaInstagram className="w-6 h-6" />
        </motion.a>
        <motion.div variants={itemVariants} className="h-6 w-px bg-gray-700/70" />
        <motion.a
          href="#"
          className="text-xs font-medium text-gray-400 hover:text-secondColor transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          Privacy Policy
        </motion.a>
        <motion.a
          href="#"
          className="text-xs font-medium text-gray-400 hover:text-secondColor transition-colors duration-300"
          whileHover={{ x: 5 }}
        >
          Terms of Service
        </motion.a>
      </motion.div>
    </motion.div>
  );
})

export default Footer;