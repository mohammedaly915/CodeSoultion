import { motion } from 'framer-motion';
import { useState } from 'react';
import { FaGoogle, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import AnimatedInput from '../../Components/Utiles/AnimatedInput';

const Contact = () => {
  

  return (
    <div className="min-h-screen bg-primeColor py-24 px-6 flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-5xl bg-white/10 backdrop-blur-2xl rounded-3xl p-12 shadow-2xl grid md:grid-cols-2 gap-12"
      >
        <ContactForm />
        <ContactDetails />
      </motion.div>
    </div>
  );
};


const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000); // Reset after 3s
    // Add submission logic here
  };

  const handleChange = (field) => (e) => setFormData({ ...formData, [field]: e.target.value });

  return (
    <div className="space-y-8">
      <h1 className="text-5xl font-extrabold text-white bg-gradient-to-r from-secondColor to-white-500 bg-clip-text text-transparent">
        Let’s Connect
      </h1>
      <motion.form
        onSubmit={handleSubmit}
        className="space-y-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <AnimatedInput label="Name" type="text" value={formData.name} onChange={handleChange('name')} required />
        <AnimatedInput label="Email" type="email" value={formData.email} onChange={handleChange('email')} required />
        <AnimatedInput label="Phone" type="tel" value={formData.phone} onChange={handleChange('phone')} />
        <AnimatedInput label="Business" type="text" value={formData.business} onChange={handleChange('business')} />
        <AnimatedInput label="Message" type="textarea" value={formData.message} onChange={handleChange('message')} required />
        <motion.button
          whileHover={{ scale: 1.05, boxShadow: '0 0 20px rgba(28, 104, 170, 0.4)' }}
          whileTap={{ scale: 0.95 }}
          className="w-full py-4 bg-gradient-to-r from-secondColor to-white-500 text-white font-semibold rounded-xl shadow-lg hover:bg-secondColor/60  transition-all duration-300"
          type="submit"
        >
          {isSubmitted ? 'Sent!' : 'Send Message'}
        </motion.button>
      </motion.form>
    </div>
  );
};
const ContactDetails = () => {
  const details = [
    {
      icon: (
        <div className="p-2 bg-white/10 rounded-full">
          <LocationIcon className="w-6 h-6 text-secondColor" />
        </div>
      ),
      title: 'Office',
      content: <span className="text-gray-200 text-sm">Dubai, Emirates</span>,
      link: null, // No link for office (static info)
    },
    {
      icon: (
        <div className="p-2 bg-white/10 rounded-full">
          <FaInstagram className="w-6 h-6 text-secondColor" />
        </div>
      ),
      title: 'Instgram',
      content: <span className="text-gray-200 text-sm">holoul1</span>,
      link: 'https://www.instagram.com/holoul1',
    },
    {
      icon: (
        <div className="p-2 bg-white/10 rounded-full">
          <FaGoogle className="w-6 h-6 text-secondColor" />
        </div>
      ),
      title: 'Email',
      content: <span className="text-gray-200 text-sm">smtp.holoul.com</span>,
      link: 'mailto:smtp.holoul.com',
    },
    {
      icon: (
        <div className="p-2 bg-white/10 rounded-full">
          <FaLinkedin className="w-6 h-6 text-secondColor" />
        </div>
      ),
      title: 'Linked In',
      content: <span className="text-gray-200 text-sm">hulool-حلول</span>,
      link: 'https://www.linkedin.com/company/hulool-%D8%AD%D9%84%D9%88%D9%84/posts?lipi=urn%3Ali%3Apage%3Ad_flagship3_company_admin_dashboard_index%3BMld5Dpl9RpmbCsNgcynvfA%3D%3D',
    },
  ];

  return (
    <div className="space-y-12 text-white">
      <h2 className="text-4xl font-bold bg-gradient text-transparent bg-clip-text tracking-tight">
        Reach Us
      </h2>
      <div className="space-y-6">
        {details.map((item, index) => (
          <motion.a
            key={index}
            href={item.link || '#'} // Fallback to '#' if no link
            target={item.link ? '_blank' : '_self'}
            rel={item.link ? 'noopener noreferrer' : undefined}
            className={`flex no-underline items-center gap-4 bg-white/5 rounded-lg p-4 transition-colors duration-300 ${
              item.link ? 'hover:bg-white/10 cursor-pointer' : 'cursor-default'
            }`}
            whileHover={item.link ? { scale: 1.02 } : {}}
            transition={{ duration: 0.3 }}
          >
            {item.icon}
            <div>
              <h3 className="text-lg font-semibold text-gray-100">{item.title}</h3>
              {item.content}
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
};


// const SocialLinks = () => {
//   const socials = [
//     { name: 'LinkedIn', icon: <FaLinkedin className="w-7 h-7" />, link: 'https://linkedin.com' },
//     { name: 'Instagram', icon: <FaInstagram className="w-7 h-7" />, link: 'https://instagram.com/holoul_official' },
//   ];

//   return (
//     <div className="space-y-4">
//       <h3 className="text-xl font-medium text-gray-100">Follow Us</h3>
//       <div className="flex gap-6">
//         {socials.map((social) => (
//           <motion.a
//             key={social.name}
//             href={social.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-gray-300 hover:text-secondColor transition-colors duration-300"
//             whileHover={{ scale: 1.15, rotate: 5 }}
//             whileTap={{ scale: 0.95 }}
//           >
//             {social.icon}
//           </motion.a>
//         ))}
//       </div>
//     </div>
//   );
// }
// Icons
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