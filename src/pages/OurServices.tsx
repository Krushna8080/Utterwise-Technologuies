import React from 'react';

import { motion } from 'framer-motion';
import { 
  Code, Shield, Users,Cpu, Globe, File as Mobile, 
  Server, Terminal, Database, Cloud, Rocket,
  ArrowRight 
} from 'lucide-react';

const OurServices: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };
  const floatingIcons = [
    { Icon: Code, initialX: -100, initialY: -50 },
    { Icon: Globe, initialX: 100, initialY: 50 },
    { Icon: Cpu, initialX: 0, initialY: -100 }
  ];

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      initial="initial"
      animate="animate"
      className="min-h-screen bg-white"
    >
      {/* Hero Section */}
      <motion.div
        {...fadeInUp}
        className="bg-gradient-to-br from-blue-50 to-indigo-50 text-center min-h-screen flex flex-col justify-center items-center px-6 relative overflow-hidden"
      >
        {/* Animated Background Gradient */}
        <motion.div
          animate={{
            background: [
              "linear-gradient(45deg, rgba(59,130,246,0.1) 0%, rgba(37,99,235,0.1) 100%)",
              "linear-gradient(45deg, rgba(37,99,235,0.1) 0%, rgba(59,130,246,0.1) 100%)"
            ]
          }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0"
        />

        {/* Floating Icons */}
        {floatingIcons.map(({ Icon, initialX, initialY }, index) => (
          <motion.div
            key={index}
            initial={{ x: initialX, y: initialY, opacity: 0 }}
            animate={{
              x: [initialX, initialX + 20, initialX - 20, initialX],
              y: [initialY, initialY - 20, initialY + 20, initialY],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: index * 0.5
            }}
            className="absolute text-blue-500/30"
            style={{ zIndex: 1 }}
          >
            <Icon size={48} />
          </motion.div>
        ))}

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Text Content */}
          <div className="space-y-8 mb-12">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold text-blue-600 tracking-tight leading-tight mx-auto max-w-4xl"
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 5px rgba(37,99,235,0.3)",
                    "0 0 15px rgba(37,99,235,0.5)",
                    "0 0 5px rgba(37,99,235,0.3)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                WEB & MOBILE APPLICATION DEVELOPMENT WITH DEVOPS
              </motion.span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-700 mx-auto max-w-4xl leading-relaxed"
            >
              Utterwise delivers End-to-End scalable software solutions that adapt to your project requirements or business needs. We employ best practices and development and deployment methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way!
            </motion.p>
          </div>

          {/* Innovative Image Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-6xl mx-auto"
          >
            <div className="relative">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute -top-8 -left-8 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl"
              />
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="absolute -bottom-8 -right-8 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"
              />
              
             
            </div>
          </motion.div>
        </div>

        {/* Animated Particles */}
        {[...Array(20)].map((_, index) => (
          <motion.div
            key={index}
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 0
            }}
            animate={{
              y: [null, Math.random() * -500],
              opacity: [0, 0.5, 0]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "loop",
              ease: "linear"
            }}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
          />
        ))}
      </motion.div>


      {/* Features Grid */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-4 gap-8"
          >
            {[
              { icon: Globe, title: 'Web Development', color: 'from-blue-400 to-blue-600', iconColor: 'text-blue-500' },
              { icon: Mobile, title: 'Mobile Apps', color: 'from-green-400 to-green-600', iconColor: 'text-green-500' },
              { icon: Server, title: 'Cloud Solutions', color: 'from-purple-400 to-purple-600', iconColor: 'text-purple-500' },
              { icon: Terminal, title: 'DevOps', color: 'from-red-400 to-red-600', iconColor: 'text-red-500' }
            ].map(({ icon: Icon, title, color, iconColor }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                className={`bg-gradient-to-br ${color} p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl group cursor-pointer`}
              >
                <motion.div 
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-lg transform transition-all duration-300 group-hover:-translate-y-2"
                  whileHover={{ y: -8 }}
                >
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className={`w-12 h-12 ${iconColor} mb-4`} />
                  </motion.div>
                  <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Engagement Models Section */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            Utterwise Has Two Engagement Models
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8"
          >
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100 hover:border-blue-300 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Users className="w-12 h-12 text-blue-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold ml-4">Team Augmentation</h3>
              </div>
              <p className="text-gray-600 text-lg">Our experienced team works as an extension of client's team bridging specific skills gap.</p>
            </motion.div>
            <motion.div
              variants={fadeInUp}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-8 rounded-xl shadow-lg card-hover border border-gray-100 hover:border-green-300 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <motion.div
                  animate={{ y: [0, -5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Rocket className="w-12 h-12 text-green-500" />
                </motion.div>
                <h3 className="text-2xl font-semibold ml-4">Product Outsourcing</h3>
              </div>
              <p className="text-gray-600 text-lg">The end-to-end product development is handled by us along with providing timely demos and working on regular feedbacks.</p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Technology Stack Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            Our Technology Stack
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { icon: Globe, title: 'Frontend', desc: 'React, Vue, Angular', color: 'from-blue-400 to-blue-600' },
              { icon: Server, title: 'Backend', desc: 'Node.js, Python, Java', color: 'from-green-400 to-green-600' },
              { icon: Database, title: 'Database', desc: 'MongoDB, PostgreSQL', color: 'from-purple-400 to-purple-600' },
              { icon: Cloud, title: 'Cloud', desc: 'AWS, Azure, GCP', color: 'from-red-400 to-red-600' }
            ].map(({ icon: Icon, title, desc, color }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${color} p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl`}
              >
                <div className="bg-white p-6 rounded-lg h-full">
                  <motion.div
                    animate={{ y: [0, -5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Icon className="w-12 h-12 text-gray-800 mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="mt-12 flex justify-center"
          >
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-1 rounded-xl shadow-xl transform transition-all duration-300 max-w-4xl">
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="https://www.utterwise.tech/wp-content/uploads/2022/05/Tech-Stack-1.png" 
                  alt="Technology Stack" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Application Development Lifecycle Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 gradient-text"
          >
            Our Application Development Lifecycle
          </motion.h2>
          <motion.div 
            variants={fadeInUp}
            whileHover={{ scale: 1.02 }}
            className="flex justify-center"
          >
            <div className="bg-gradient-to-br from-green-400 to-blue-600 p-1 rounded-xl shadow-xl transform transition-all duration-300 max-w-4xl">
              <div className="bg-white p-1 rounded-lg">
                <img 
                  src="https://spincareer.com/wp-content/uploads/2021/08/shutterstock_1866499273.png" 
                  alt="Application Development Lifecycle" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </motion.div>
          <motion.div 
            variants={staggerContainer}
            className="mt-12 grid md:grid-cols-3 gap-8"
          >
            {[
              { title: 'Planning & Analysis', color: 'from-blue-400 to-blue-600', desc: 'From ideation to requirement gathering, we ensure a solid foundation for your project.' },
              { title: 'Development & Testing', color: 'from-green-400 to-green-600', desc: 'Agile development with continuous integration and rigorous testing practices.' },
              { title: 'Deployment & Support', color: 'from-purple-400 to-purple-600', desc: 'Smooth deployment process with continuous monitoring and maintenance.' }
            ].map(({ title, color, desc }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className={`bg-gradient-to-br ${color} p-1 rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl`}
              >
                <div className="bg-white p-6 rounded-lg h-full">
                  <h3 className="text-xl font-semibold mb-3 text-gray-800">{title}</h3>
                  <p className="text-gray-600">{desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Latest Works Section */}
      <div className="py-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        <div className="max-w-7xl mx-auto px-6">
          <motion.h2 
            variants={fadeInUp}
            className="text-4xl font-bold text-center mb-12 text-white"
          >
            Our Latest Works
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                img: "https://media.licdn.com/dms/image/D4D12AQFfQsC4CB7EGQ/article-cover_image-shrink_720_1280/0/1718967306079?e=2147483647&v=beta&t=tiOCH48pwjGdVMqs4hxhRZUnvNmiFn8hDYM2kEs7AFU",
                title: "Payments Processing and Admin Panel UI",
                desc: "Secure payment gateway integration with modern admin dashboard",
                gradient: "from-blue-500 to-cyan-400"
              },
              {
                img: "https://media.licdn.com/dms/image/v2/C4E1BAQH5UYjjkXtGyA/company-background_10000/company-background_10000/0/1599410278618/itanta_analytics_cover?e=2147483647&v=beta&t=0-6aZ907mF21GawVzetzX3e3cugjTQdvy-c_mlJuNS0",
                title: "Itanta Analytics",
                desc: "Real-time industrial IoT data analysis platform",
                gradient: "from-purple-500 to-pink-400"
              },
              {
                img: "https://media.licdn.com/dms/image/v2/D4D12AQHlvQRk8Wzp6A/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1721207855340?e=2147483647&v=beta&t=td-4aJnqXtaSOgkHKh4Kh1oxLjNQW6AaKT7Vuqar3oM",
                title: "Electronic Toll Management System",
                desc: "Automated toll collection and monitoring system",
                gradient: "from-green-500 to-emerald-400"
              },
              {
                img: "https://thelivenagpur.com/wp-content/uploads/2024/08/tel1.jpg",
                title: "Advanced Traffic Management System",
                desc: "Smart traffic control and monitoring solution",
                gradient: "from-orange-500 to-yellow-400"
              }
            ].map(({ img, title, desc, gradient }) => (
              <motion.div
                key={title}
                variants={fadeInUp}
                whileHover={{ scale: 1.05 }}
                className="group relative overflow-hidden rounded-xl shadow-lg transform transition-all duration-300 hover:shadow-xl"
              >
                <div className={`bg-gradient-to-br ${gradient} p-1 rounded-xl`}>
                  <div className="relative overflow-hidden rounded-lg">
                    <motion.img 
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                      src={img} 
                      alt={title} 
                      className="w-full h-64 object-cover"
                    />
                    <motion.div 
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-white font-semibold text-xl mb-2">{title}</h3>
                        <p className="text-gray-300 text-sm">{desc}</p>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default OurServices;