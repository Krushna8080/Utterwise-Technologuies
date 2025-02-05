import React from 'react';
import { Code, Cloud, Smartphone, ArrowRight } from 'lucide-react';
import mobile from './mobile.jpg'

interface Service {
  title: string;
  description: string;
  icon: React.ElementType;
  image: string;
}

const services: Service[] = [
  {
    title: 'Custom Web Application Development',
    description: 'Our strong technical team delivers robust and scalable web solutions tailored with perfection for our clients. We can involve us at any stage of your project - starting from concept to code, from development to quality assurance, deployment and support.',
    icon: Code,
    image: 'https://www.mooc.org/hubfs/web-programming-languages.jpg'
  },
  {
    title: 'Mobile App Development',
    description: 'Since mobile devices have taken the world by storm, every business, from startups to enterprises, feel the need to come up with an innovative app for their clients. We create highly customizable mobile apps either from scratch or revamp your existing app to make it beautiful, robust and delivering to your business needs.',
    icon: Smartphone,
    image: mobile
  },
  {
    title: 'Cloud and DevOps Services',
    description: 'We build and automate infrastructure across various cloud providers using latest tools and best practices. We implement Continuous Integration (CI) and Delivery using automated build processes to deliver critical updates to customers faster and in a reliable way.',
    icon: Cloud,
    image: 'https://r2.flux1.ai/result-wEclCH3FZH.png'
  }
];

const Services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-24 space-y-6">
            <div className="inline-block">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-500/10 to-purple-500/10 text-blue-600">
                Our Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Custom Software Solutions
              </span>
              <br />
              <span className="text-gray-900">to Power Your Business</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have a brilliant and highly experienced team to deliver customized, innovative and high quality software solutions on time. Our software experts will help you in the complete product lifecycle starting from a concept to launch and support. Whatever software functions you envision, we can bring them to life!
            </p>
          </div>

          <div className="space-y-32">
            {services.map((service, index) => (
              <div 
                key={index}
                className="group relative"
              >
                <div className={`
                  relative rounded-[2.5rem] p-8 md:p-12
                  ${index % 2 === 0 ? 'bg-white' : 'bg-gradient-to-br from-blue-50 to-indigo-50'}
                  shadow-xl hover:shadow-2xl
                  transform transition-all duration-500 ease-out
                  hover:-translate-y-2
                `}>
                  <div className={`
                    flex flex-col lg:flex-row gap-16
                    ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}
                    items-center
                  `}>
                    <div className="lg:w-1/2 space-y-8">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 
                          shadow-lg group-hover:shadow-xl
                          transform group-hover:scale-110 transition-all duration-500">
                          {React.createElement(service.icon, {
                            className: "w-8 h-8 text-white"
                          })}
                        </div>
                        <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent 
                          bg-gradient-to-r from-gray-900 to-gray-700
                          group-hover:from-blue-600 group-hover:to-indigo-600 
                          transition-all duration-300">
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                      </p>
                      <button className="
                        group/btn
                        inline-flex items-center px-8 py-4
                        text-lg font-semibold text-white
                        bg-gradient-to-r from-blue-600 to-indigo-600
                        rounded-2xl shadow-lg
                        hover:from-blue-700 hover:to-indigo-700
                        transform hover:scale-105 hover:shadow-xl
                        transition-all duration-300
                        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                      ">
                        
                        Contact Us
                        <ArrowRight className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                    <div className="lg:w-1/2">
                      <div className="
                        relative rounded-2xl overflow-hidden aspect-[4/3]
                        transform group-hover:scale-105 
                        transition-all duration-500 ease-out
                        shadow-2xl
                      ">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 
                          opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative elements */}
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/5 to-purple-500/5 
                  rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;