import React from 'react';
import { ThumbsUp, CheckCircle, Heart, Building2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface TimelineItem {
  date: string;
  title: string;
  subtitle: string;
}

interface CultureItem {
  icon: React.ElementType;
  title: string;
  description: string;
  color: string;
}

interface TeamMember {
  name: string;
  role: string;
  image: string;
  bio: string;
  socialLinks?: {
    linkedin?: string;
    twitter?: string;
  };
}

const timeline: TimelineItem[] = [
  {
    date: "April 2019",
    title: "Company Founded",
    subtitle: "Utterwise was incorporated with a vision to deliver innovative solutions"
  },
  {
    date: "2020",
    title: "First Major Project",
    subtitle: "Successfully delivered our first enterprise solution and established key partnerships"
  },
  {
    date: "2021",
    title: "Team Expansion",
    subtitle: "Grew our team and expanded our technical capabilities across multiple domains"
  },
  {
    date: "2022-Present",
    title: "Continuous Growth",
    subtitle: "Expanding our global presence with diverse client portfolio and cutting-edge solutions"
  }
];

const cultureItems: CultureItem[] = [
  {
    icon: ThumbsUp,
    title: 'Dedication and Sincerity',
    description: 'Utterwise is proud of their employees who are smart and agile and put in their sincere efforts to fulﬁl their commitments.',
    color: 'from-blue-500 to-blue-600'
  },
  {
    icon: CheckCircle,
    title: 'Quality',
    description: 'We assure a high quality, near-bug-free delivery. To ensure that, we make sure to work on providing correct estimates and clear communication.',
    color: 'from-green-500 to-green-600'
  },
  {
    icon: Heart,
    title: 'Value',
    description: 'We not only value our client time, money and expectations, but also value and appreciate our employees time, opinions, and efforts.',
    color: 'from-red-500 to-red-600'
  },
  {
    icon: Building2,
    title: 'Startup mindset',
    description: 'We maintain a startup culture where we are serious about work AND fun. There is little success where there is little laughter!',
    color: 'from-purple-500 to-purple-600'
  }
];

const teamMembers: TeamMember[] = [
  {
    name: 'Onkar Lagu',
    role: 'Co-Founder & CEO',
    image: 'https://www.utterwise.tech/wp-content/uploads/2022/04/Omkar-Lagu.jpg',
    bio: 'Omkar comes with 15+ years of experience in developing and managing enterprise products. Having worked in multiple domains like storage, ecommerce, payment and smart city projects, he handles the overall execution of Utterwise projects.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/omkarlagu/?originalSubdomain=in',
      twitter: '#'
    }
  },
  {
    name: 'Madhura Adawadkar',
    role: 'Co-Founder & CTO',
    image: 'https://www.utterwise.tech/wp-content/uploads/2022/04/Madhura-Adawadkar.jpg',
    bio: 'Madhura is passionate about technology. With 15+ years of designing and coding experience, she is responsible for the overall design and architecture of all projects in Utterwise. A visionary innovator driving transformative solutions.',
    socialLinks: {
      linkedin: 'https://www.linkedin.com/in/madhuraadawadkar/',
      twitter: '#'
    }
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
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero Section with Animated Background */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 opacity-70"></div>
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(59,130,246,0.1),rgba(147,197,253,0.1))]"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 relative">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="text-center space-y-8"
          >
            <h1 className="text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-500 to-cyan-600">
              About Us
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-light">
              Incorporated in April 2019, we're dedicated to delivering solutions that are 
              lean, reliable, robust and rewarding for organizations worldwide.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        {/* Culture Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-40"
        >
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureItems.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className={`absolute -top-6 left-6 bg-gradient-to-br ${item.color} p-4 rounded-2xl shadow-lg transform -rotate-3`}>
                  <item.icon className="h-7 w-7 text-white" />
                </div>
                <div className="mt-8">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-40"
        >
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
            Leadership
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group"
              >
                <div className="flex flex-col items-center">
                  <div className="relative mb-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full opacity-75 group-hover:opacity-90 blur-2xl transition-all duration-500"></div>
                    <img
                      src={member.image}
                      alt={member.name}
                      className="relative w-72 h-72 rounded-full object-cover border-8 border-white shadow-2xl transform group-hover:scale-105 transition-all duration-500"
                    />
                  </div>
                  <div className="text-center max-w-lg">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">{member.name}</h3>
                    <p className="text-lg text-blue-600 font-medium mb-6">{member.role}</p>
                    <p className="text-gray-600 leading-relaxed mb-8">{member.bio}</p>
                    {member.socialLinks && (
                      <div className="flex justify-center space-x-4">
                        {member.socialLinks.linkedin && (
                          <a 
                            href={member.socialLinks.linkedin}
                            className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                          >
                            <svg className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                          </a>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Journey Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative"
        >
          <h2 className="text-5xl font-bold text-center mb-20 text-gray-900">
            Our Journey
          </h2>
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-600 via-cyan-500 to-blue-600 rounded-full"></div>
          <div className="space-y-24">
            {timeline.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className={`flex items-center ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12'}`}>
                    <motion.div
                      whileHover={{ scale: 1.03, y: -5 }}
                      className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
                    >
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{item.subtitle}</p>
                    </motion.div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className="w-16 h-16 rounded-full border-4 border-white bg-gradient-to-br from-blue-600 to-cyan-600 shadow-xl flex items-center justify-center"
                    >
                      <span className="text-white font-bold text-sm">{item.date.split(' ')[0]}</span>
                    </motion.div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}