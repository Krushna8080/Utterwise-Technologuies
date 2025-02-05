import React from 'react';
import { Mail, Phone, Linkedin, Facebook } from 'lucide-react';
import { motion } from 'framer-motion';

const contactInfo = [
  {
    icon: Mail,
    title: 'Madhura Adawadkar',
    email: 'madhura@utterwise.tech',
    phone: '+91 9870166012'
  },
  {
    icon: Mail,
    title: 'Omkar Lagu',
    email: 'omkar@utterwise.tech',
    phone: '+91 9860483296'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Contact() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-b from-[#E8F1FF] via-[#F0F6FF] to-[#F8FBFF]">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_-20%,rgba(37,99,235,0.1),transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_100%,rgba(37,99,235,0.1),transparent_60%)]"></div>
     
      {/* Floating animated shapes */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl"
      />
      <motion.div
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#2563EB]/5 rounded-full blur-3xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 relative">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center space-y-8"
        >
          <h1 className="text-8xl font-bold text-[#2563EB]">
            Get in Touch
          </h1>
          <p className="text-2xl text-gray-600 font-light max-w-2xl mx-auto leading-relaxed">
            Let's build something amazing together. Reach out to discuss your next project.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-20 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-5xl lg:mx-auto"
        >
          {contactInfo.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03, y: -5 }}
              className="relative group"
            >
              {/* Card glow effect */}
              <div className="absolute -inset-1 bg-[#2563EB]/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition duration-300"></div>
             
              <div className="relative bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="absolute -top-6 left-6">
                  <div className="bg-[#2563EB] p-4 rounded-2xl shadow-lg">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                </div>
               
                <h3 className="text-2xl font-bold text-gray-900 mt-4 mb-8">{item.title}</h3>
                <div className="space-y-6">
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 group/item"
                  >
                    <Mail className="h-5 w-5 mr-4 text-[#2563EB]" />
                    <a
                      href={`mailto:${item.email}`}
                      className="group-hover/item:text-[#2563EB] transition-colors duration-300"
                    >
                      {item.email}
                    </a>
                  </motion.div>
                  <motion.div
                    whileHover={{ x: 5 }}
                    className="flex items-center text-gray-600 group/item"
                  >
                    <Phone className="h-5 w-5 mr-4 text-[#2563EB]" />
                    <a
                      href={`tel:${item.phone}`}
                      className="group-hover/item:text-[#2563EB] transition-colors duration-300"
                    >
                      {item.phone}
                    </a>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="mt-20 flex justify-center space-x-8"
        >
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://www.linkedin.com/company/utterwise"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <Linkedin className="h-8 w-8 text-[#2563EB]" />
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1, y: -3 }}
            href="https://www.facebook.com/utterwise"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white p-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
          >
            <Facebook className="h-8 w-8 text-[#2563EB]" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}