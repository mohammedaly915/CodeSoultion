import { motion } from 'framer-motion';
import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-blue-900 py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl md:text-6xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">
          Let's Connect
        </h1>

        <motion.form
          onSubmit={handleSubmit}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl"
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
            label="Your Message"
            type="textarea"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-4 px-8 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition-colors"
            type="submit"
          >
            Send Message
          </motion.button>
        </motion.form>

        <SocialLinks />
      </motion.div>
    </div>
  );
};

const AnimatedInput = ({ label, type = 'text', value, onChange, required }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <motion.div
      className="relative mb-8"
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <motion.label
        className={`absolute left-4 transition-all duration-300 ${
          isFocused || value ? 'top-2 text-sm text-cyan-400' : 'top-4 text-base text-gray-300'
        }`}
        initial={false}
        animate={{
          y: isFocused || value ? -10 : 0,
          scale: isFocused || value ? 0.9 : 1
        }}
      >
        {label}
      </motion.label>
      
      {type === 'textarea' ? (
        <motion.textarea
          className="w-full bg-white/5 rounded-xl p-4 pt-8 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 resize-none"
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          rows="5"
          required={required}
        />
      ) : (
        <motion.input
          className="w-full bg-white/5 rounded-xl p-4 pt-8 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
          type={type}
          value={value}
          onChange={onChange}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          required={required}
        />
      )}
      
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] bg-cyan-400"
        initial={{ width: 0 }}
        animate={{ width: isFocused ? '100%' : 0 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

const SocialLinks = () => {
  const socials = [
    { name: 'GitHub', icon: <GitHubIcon />, link: '#' },
    { name: 'LinkedIn', icon: <LinkedInIcon />, link: '#' },
    { name: 'Twitter', icon: <TwitterIcon />, link: '#' },
    { name: 'Email', icon: <EmailIcon />, link: 'mailto:hello@example.com' }
  ];

  return (
    <motion.div
      className="flex justify-center gap-6 mt-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
    >
      {socials.map((social, index) => (
        <motion.a
          key={social.name}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-cyan-400 transition-colors"
          whileHover={{ y: -5 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <span className="sr-only">{social.name}</span>
          <motion.div
            className="w-10 h-10"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: index * 0.2
            }}
          >
            {social.icon}
          </motion.div>
        </motion.a>
      ))}
    </motion.div>
  );
};

// SVG Icons
const GitHubIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
  </svg>
);

const EmailIcon = () => (
  <svg fill="currentColor" viewBox="0 0 24 24">
    <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"/>
  </svg>
);

export default Contact;