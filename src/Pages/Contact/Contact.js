import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGithub, FaTwitter, FaLinkedin, FaFacebook, FaGoogle } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <div className="min-h-screen mt-[10vh] bg-gradient-to-br from-slate-900 to-primeColor py-24 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-4xl bg-white/5 backdrop-blur-xl rounded-3xl p-10 shadow-xl grid md:grid-cols-2 gap-12"
      >
        {/* Contact Form */}
        <div>
          <h1 className="text-5xl font-extrabold mb-8  text-transparent bg-gradient-to-r from-secondColor to-white bg-clip-text">
            Get in Touch
          </h1>
          <motion.form
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ scale: 0.95 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            <AnimatedInput
              label="Your Name"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
            <AnimatedInput
              label="Your Email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              required
            />
            <AnimatedInput
              label="Your Phone"
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
            />
            <AnimatedInput
              label="Your Business"
              type="text"
              value={formData.business}
              onChange={(e) => setFormData({ ...formData, business: e.target.value })}
            />
            <AnimatedInput
              label="Your Message"
              type="textarea"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0px 0px 15px rgba(34, 211, 238, 0.3)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full py-4 px-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold text-lg rounded-xl shadow-md hover:from-cyan-400 hover:to-blue-500 transition-all"
              type="submit"
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>

        {/* Contact Details */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Our Details
            </h2>
            
            <div className="flex items-start gap-4">
              <LocationIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Our Office</h3>
                <p className="text-gray-300 leading-relaxed">
                  123 Tech Street,<br />
                  Innovation City,<br />
                  Digital Nation
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <WhatsAppIcon className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">WhatsApp</h3>
                <a 
                  href="https://wa.me/1234567890" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  +1 (234) 567-890
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <FaGoogle className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <div>
                <h3 className="text-xl font-semibold text-white">Email</h3>
                <a 
                  href="mailto:info@techsolutions.com" 
                  className="text-gray-300 hover:text-cyan-400 transition-colors"
                >
                  info@techsolutions.com
                </a>
              </div>
            </div>
          </div>

          <SocialLinks />
        </div>
      </motion.div>
    </div>
  );
};

const AnimatedInput = ({ label, type = 'text', value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.label
        className={`absolute left-4 transition-all text-gray-300 pointer-events-none ${
          isFocused || value ? 'text-sm text-cyan-400 -top-2 bg-gradient-to-br from-slate-900 to-primeColor px-2' : 'text-base top-4'
        }`}
      >
        {label}
      </motion.label>
      {type === 'textarea' ? (
        <motion.textarea
          className="w-full bg-white/5  rounded-xl p-4 pt-6 text-white focus:outline-none hover:bg-white/10 transition-colors resize-none"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows="5"
          required={required}
        />
      ) : (
        <motion.input
          className="w-full bg-white/5  rounded-xl p-4 pt-6 text-white focus:outline-none hover:bg-white/10 transition-colors"
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
        />
      )}
    </motion.div>
  );
};

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', icon: <FaGithub className="w-6 h-6" />, link: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-6 h-6" />, link: '#' },
    { name: 'Twitter', icon: <FaTwitter className="w-6 h-6" />, link: '#' },
    { name: 'Facebook', icon: <FaFacebook className="w-6 h-6" />, link: '#' }
  ];

  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold text-white">Follow Us</h3>
      <div className="flex gap-6">
        {socials.map((social) => (
          <motion.a
            key={social.name}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-cyan-400 transition-colors"
            whileHover={{ scale: 1.2, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {social.icon}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

// Icons remain the same
const LocationIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const WhatsAppIcon = (props) => (
  <svg {...props} viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.102-.471-.149-.669.149-.198.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.012-.57-.012-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12 0C5.373 0 0 5.373 0 12c0 2.126.549 4.125 1.517 5.861L0 24l6.338-1.652A11.948 11.948 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
  </svg>
);

export default Contact;