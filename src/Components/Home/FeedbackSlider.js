import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { Star, Quote, MessageCircle } from "lucide-react";

const feedbacks = [
  {
    id: 1,
    name: "John Doe",
    feedback: "Great service! Highly recommended.",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    id: 2,
    name: "Sarah Smith",
    feedback: "Amazing experience and very professional team.",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    id: 3,
    name: "Michael Brown",
    feedback: "Excellent support and fast response times.",
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
];

const ClientFeedback = () => {
  const [index, setIndex] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % feedbacks.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-primeColor to-gray-900 text-white text-center overflow-hidden"
    >
      {/* Parallax Glow Effects */}
      <motion.div
        className="absolute top-[-100px] left-10 w-72 h-72 bg-secondColor/30 rounded-full blur-[120px] opacity-40"
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-[-120px] right-10 w-80 h-80 bg-primeColor/30 rounded-full blur-[150px] opacity-50"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Section Header */}
      <motion.h2
        className="text-4xl font-extrabold mb-12 tracking-wide flex items-center justify-center gap-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <MessageCircle size={40} className="text-secondColor" />
        What Our <span className="text-secondColor">Clients Say</span>
      </motion.h2>

      {/* Feedback Cards Wrapper */}
      <div className="relative w-full max-w-3xl mx-auto overflow-hidden">
        <motion.div
          className="flex "
          animate={{ x: `-${index * 100}%` }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        >
          {feedbacks.map((item) => (
            <motion.div
              key={item.id}
              className="flex-shrink-0 w-full px-8 py-10 rounded-2xl shadow-lg bg-gray-800/80 backdrop-blur-lg text-center transition-all transform hover:scale-105 hover:shadow-xl"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              {/* Quote Icon */}
              <motion.div
                className="text-secondColor flex justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <Quote size={50} />
              </motion.div>
              
              {/* User Image */}
              <motion.img
                src={item.image}
                alt={item.name}
                className="mx-auto w-20 h-20 rounded-full mt-4 shadow-lg border-4 border-gray-700"
                whileHover={{ scale: 1.1 }}
              />

              {/* Name */}
              <h3 className="text-xl font-semibold mt-3">{item.name}</h3>

              {/* Feedback */}
              <p className="text-gray-300 mt-3 leading-relaxed italic">
                "{item.feedback}"
              </p>

             
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-6">
        {feedbacks.map((_, i) => (
          <motion.div
            key={i}
            className={`w-3 h-3 rounded-full transition-all cursor-pointer ${
              index === i ? "bg-secondColor scale-125" : "bg-gray-600"
            }`}
            onClick={() => setIndex(i)}
            whileTap={{ scale: 1.5 }}
          />
        ))}
      </div>
    </section>
  );
};

export default ClientFeedback;