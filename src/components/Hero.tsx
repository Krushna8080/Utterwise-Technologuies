import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, Rocket, Globe, Monitor, Cpu, Wifi } from 'lucide-react';
import desktopImage from './desktop.png';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('Startups');

  React.useEffect(() => {
    const words = ["Startups", "Clients", "Innovators", "Companies"];
    let index = 0;
  
    const textInterval = setInterval(() => {
      setDisplayText(words[index]);
      index = (index + 1) % words.length;
    }, 2500);
  
    return () => clearInterval(textInterval);
  }, []);

  return (
    <div className="relative pt-12 min-h-[calc(100vh-4rem)] overflow-hidden">
      {/* Modern Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0A1128] via-[#1B3B6F] to-[#2C4B8C]">
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" 
            style={{
              backgroundImage: `linear-gradient(transparent 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
              backgroundSize: '25px 25px',
              animation: 'grid-scroll 20s linear infinite',
            }}
          />
        </div>

        {/* Enhanced Image Overlay */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A1128]/40 to-[#0A1128]/60"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          />
          <motion.img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-25"
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.25 }}
            transition={{ duration: 1.5 }}
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[calc(100vh-4rem)] flex items-center">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-white space-y-6 lg:space-y-8"
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring", bounce: 0.4 }}
              style={{ textShadow: '0 0 30px rgba(0,0,0,0.4)' }}
            >
              Trusted by top-tier{' '}
              <div className="relative inline-block">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={displayText}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#00FF85] via-[#00F5A0] to-[#00D9FF]"
                  >
                    {displayText}
                  </motion.span>
                </AnimatePresence>
              </div>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8, type: "spring", bounce: 0.4 }}
              className="space-y-6"
            >
              <h2 className="text-2xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-white via-[#E0E7FF] to-[#C7D2FE]">
                Design. Develop. Deploy.
              </h2>
              <p className="text-lg lg:text-xl text-blue-50/90 max-w-xl leading-relaxed font-light">
                User-friendly web & mobile apps built to scale with cutting-edge technology and exceptional user experience.
              </p>
            </motion.div>

            {/* Enhanced CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="group relative px-6 py-3 bg-gradient-to-r from-[#00FF85]/10 to-[#00D9FF]/10 backdrop-blur-xl rounded-xl 
                hover:from-[#00FF85]/20 hover:to-[#00D9FF]/20 transition-all duration-300 border border-[#00FF85]/20
                hover:border-[#00FF85]/30 shadow-lg hover:shadow-xl overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00FF85]/0 via-[#00FF85]/10 to-[#00FF85]/0 
                group-hover:via-[#00FF85]/20 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
              <span className="relative z-10 text-lg font-medium text-white group-hover:text-white/90 flex items-center">
                Get Started
                <motion.span
                  className="inline-block ml-2"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </motion.div>

          {/* Right Column - Modern Tech Visuals */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[450px] lg:h-[550px]">
              {/* Main Device Display */}
              <motion.div
                className="absolute top-4 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[500px]"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="relative">
                  <motion.div
                    className="relative z-20 bg-gradient-to-br from-[#00FF85]/10 to-[#00D9FF]/10 backdrop-blur-xl p-4 rounded-xl border border-[#00FF85]/20 shadow-2xl"
                    animate={{ y: [-10, 10, -10] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <div className="relative overflow-hidden rounded-lg">
                      <motion.img
                        src='https://cdn.openart.ai/uploads/image_pWF_Ylsd_1738736585050_raw.jpg'
                        alt="Modern Device"
                        className="w-full h-auto rounded-lg"
                        animate={{ scale: [1, 1.02, 1] }}
                        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-tr from-[#00FF85]/20 to-transparent"
                        animate={{ opacity: [0.3, 0.5, 0.3] }}
                        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                      />
                    </div>
                  </motion.div>

                  {/* Floating Tech Icons */}
                  <motion.div
                    className="absolute -top-4  -right-12 z-30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  >
                    <div className="relative">
                      {[0, 60, 120, 180, 240, 300].map((degree, index) => (
                        <motion.div
                          key={degree}
                          className="absolute"
                          style={{
                            transform: `rotate(${degree}deg) translate(50px)`,
                          }}
                        >
                          <div className="bg-[#00FF85]/10 backdrop-blur-xl p-2 rounded-lg border border-[#00FF85]/20">
                            {index % 3 === 0 ? (
                              <Monitor className="w-4 h-4 text-[#00FF85]" />
                            ) : index % 3 === 1 ? (
                              <Cpu className="w-4 h-4 text-[#00D9FF]" />
                            ) : (
                              <Wifi className="w-4 h-4 text-[#00FFA3]" />
                            )}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Floating Tech Elements */}
              <motion.div
                className="absolute top-20 left-0 bg-gradient-to-br from-[#00FF85]/10 to-[#00D9FF]/10 backdrop-blur-xl p-5 rounded-xl
                  border border-[#00FF85]/20 shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <Code className="w-10 h-10 text-[#00FF85]" />
              </motion.div>

              <motion.div
                className="absolute bottom-20 right-110 bg-gradient-to-br from-[#00FF85]/10 to-[#00D9FF]/10 backdrop-blur-xl p-5 rounded-xl
                  border border-[#00FF85]/20 shadow-lg"
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <Rocket className="w-8 h-8 text-[#00D9FF]" />
              </motion.div>

              {/* Ambient Light Effects */}
              <div className="absolute inset-0">
                <div className="absolute top-0 right-0 w-28 h-28 bg-[#00FF85]/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 w-28 h-28 bg-[#00D9FF]/10 rounded-full blur-2xl" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;