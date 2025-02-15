import React from 'react'
import { motion } from 'framer-motion';

const ServicesGrid = () => {
    const services = [
        { id: 1, title: 'UI/UX Design', description: 'Crafting beautiful and intuitive interfaces.' },
        { id: 2, title: 'Web Development', description: 'Building responsive and scalable web applications.' },
        { id: 3, title: 'Mobile Development', description: 'Developing cross-platform mobile apps.' },
        { id: 4, title: 'AI Projects', description: 'Leveraging AI for innovative solutions.' },
      ];
    
      return (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="py-16 bg-gray-100"
        >
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service) => (
                <div
                  key={service.id}
                  className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                >
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      );
}

export default ServicesGrid