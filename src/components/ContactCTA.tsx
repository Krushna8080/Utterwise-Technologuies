import React from 'react';

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

export default function ContactCTA(): JSX.Element {
  return (
    <section className="relative overflow-hidden">
      {/* Background with gradient overlay - Updated to match navbar colors */}
      <div className="absolute inset-0 bg-[#0A1426] bg-gradient-to-br from-[#0A1426] to-[#1B2C4F]">
        <div className="absolute inset-0 bg-grid-white/[0.03] bg-[size:20px_20px]" />
      </div>

      {/* Main content */}
      <div className="relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="space-y-16">
            {/* Heading Section */}
            <div className="text-center space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                Do You Have a Project That You'd{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3498db] to-[#5dade2]">
                  Like to Discuss?
                </span>
              </h2>
              
              {/* CTA Button - Updated to match the green from logo */}
              <div className="flex justify-center">
                <a
                  href="/contact"
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden bg-[#33FF00] rounded-lg transition-all duration-300 ease-out hover:scale-105 hover:shadow-xl hover:shadow-[#33FF00]/20"
                >
                  <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-[#2ce600] group-hover:translate-x-0">
                    <svg 
                      className="w-6 h-6" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      />
                    </svg>
                  </span>
                  <span className="absolute flex items-center justify-center w-full h-full text-[#0A1426] font-semibold transition-all duration-300 transform group-hover:translate-x-full">
                    Contact Us
                  </span>
                  <span className="relative invisible">Contact Us</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-col items-center space-y-8">
              <div className="flex items-center space-x-6">
                <SocialLink href="https://linkedin.com" icon={<LinkedInIcon />} label="LinkedIn" />
                <SocialLink href="https://facebook.com" icon={<FacebookIcon />} label="Facebook" />
              </div>

              {/* Copyright - Updated text color */}
              <div className="text-sm text-gray-400 hover:text-[#33FF00] transition-colors duration-200">
                © Copyright 2022 - Utterwise Technologies
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Social Link Component - Updated hover colors
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative p-3 bg-white/5 rounded-full transition-all duration-300 hover:bg-[#33FF00]/20 hover:scale-110 hover:shadow-lg hover:shadow-[#33FF00]/10"
      aria-label={label}
    >
      <div className="w-6 h-6 text-white/90 group-hover:text-[#33FF00] transition-colors duration-300">
        {icon}
      </div>
    </a>
  );
};

// Social Icons Components remain the same
const LinkedInIcon = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const FacebookIcon = (): JSX.Element => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);