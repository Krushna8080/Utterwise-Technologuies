
import React from 'react';
import { motion } from 'framer-motion';
import { Code2, BarChart3, Car } from 'lucide-react';

const projects = [
  {
    title: 'Payments processing and Admin Panel UI',
    description: 'Payments processing and Admin Panel are two web applications required by the Payment Service Provider to process the payments and provide configurations, insights and details about the payments to the merchants and admins',
    image: 'https://media.licdn.com/dms/image/D4D12AQFfQsC4CB7EGQ/article-cover_image-shrink_720_1280/0/1718967306079?e=2147483647&v=beta&t=tiOCH48pwjGdVMqs4hxhRZUnvNmiFn8hDYM2kEs7AFU',
  },
  {
    title: 'Itanta Analytics',
    description: 'Itanta Analytics is a no code platform that lets user drag, drop and conﬁgure data visualizations and create custom dashboards.',
    image: 'https://media.licdn.com/dms/image/v2/C4E1BAQH5UYjjkXtGyA/company-background_10000/company-background_10000/0/1599410278618/itanta_analytics_cover?e=2147483647&v=beta&t=0-6aZ907mF21GawVzetzX3e3cugjTQdvy-c_mlJuNS0',
  },
  {
    title: 'Electronic Toll Management System',
    description: 'Electronic Toll Management System (ETMS) enables the toll operating agency to securely collect toll from the road user thereby recovering their investment efﬁciently.',
    image: 'https://media.licdn.com/dms/image/v2/D4D12AQHlvQRk8Wzp6A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721207855340?e=2147483647&v=beta&t=td-4aJnqXtaSOgkHKh4Kh1oxLjNQW6AaKT7Vuqar3oM',
  },
  {
    title: 'Advanced Traffic Management System',
    description: 'Advanced Trafﬁc Management System (ATMS) is an integrated solution to manage highway equipments, trafﬁc, violations and events.',
    image: 'https://thelivenagpur.com/wp-content/uploads/2024/08/tel1.jpg',
  },
  {
    title: 'VAST projects',
    description: '',
    image: ''
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
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
};

export default function Projects() {
  return (
    <div className="bg-gradient-to-b from-[#E8F1FF] via-[#F0F6FF] to-[#F8FBFF] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl font-extrabold text-[#2563EB] mb-4">
            Our Projects
          </h1>
          <p className="mt-4 text-xl text-gray-600">
            Innovative solutions that drive business transformation
          </p>
        </motion.div>


<motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-16 space-y-24"
        >
          {projects.map((project, index) => (
            project.image ? (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="group relative overflow-hidden rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                  <div className={`lg:flex lg:items-center ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } gap-12 p-8`}>
                    <div className="lg:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-6"
                      >
                        <div className="relative">
                          <h2 className="text-3xl font-bold text-gray-900 group-hover:text-[#2563EB] transition-colors duration-300">
                            {project.title}
                          </h2>
                          <div className="absolute -left-6 top-1/2 transform -translate-y-1/2 w-2 h-12 bg-[#2563EB] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <p className="text-lg text-gray-600 leading-relaxed">
                          {project.description}
                        </p>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <a
                            href="#"
                            className="inline-flex items-center px-6 py-3 rounded-full bg-[#2563EB] text-white font-medium transition-all duration-300 hover:bg-[#1E40AF] hover:shadow-lg"
                          >
                            Explore Project
                            <motion.span
                              animate={{ x: [0, 5, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                              className="ml-2"
                            >
                              →
                            </motion.span>
                          </a>
                        </motion.div>
                      </motion.div>
                    </div>
                    <div className="mt-10 lg:mt-0 lg:w-1/2">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                      >
                        <div className="relative overflow-hidden rounded-xl">
                          <motion.img
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.4 }}
                            className="w-full h-auto rounded-xl shadow-lg"
                            src={project.image}
                            alt={project.title}
                          />
                          <div className="absolute inset-0 bg-gradient-to-tr from-[#2563EB]/10 via-transparent to-[#2563EB]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        <div className="absolute -inset-0.5 bg-[#2563EB] rounded-xl opacity-0 group-hover:opacity-10 blur transition duration-300" />
                      </motion.div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : null
          ))}
        </motion.div>
      </div>
    </div>
  );
}