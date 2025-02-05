import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { title: 'Home', path: '/' },
    { title: 'About Us', path: '/about' },
    { title: 'Our Services', path: '/services' },
    { title: 'Projects', path: '/projects' },
    { title: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="bg-gradient-to-r from-[#0f172a] to-[#1e3a8a] fixed w-full z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="https://www.utterwise.tech/wp-content/uploads/2022/04/output-onlinepngtools-2-300x94.png" 
                alt="Utterwize Technologies" 
                className="h-16 w-auto filter brightness-100"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navLinks.map(({ title, path }) => (
                <Link
                  key={path}
                  to={path}
                  className={`${
                    isActive(path)
                      ? 'text-[#10b981] border-b-2 border-[#10b981]'
                      : 'text-gray-300'
                  } px-3 py-2 text-sm font-medium hover:text-[#10b981] relative group transition-all duration-300 ease-in-out`}
                >
                  {title}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#10b981] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"></span>
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-[#10b981] hover:bg-[#1e293b] focus:outline-none transition-colors duration-300"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? 'hidden' : 'block'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              {/* Close Icon */}
              <svg
                className={`${isOpen ? 'block' : 'hidden'} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
        } md:hidden fixed top-20 left-0 right-0 transition-all duration-300 ease-in-out`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 bg-[#0f172a] shadow-lg">
          {navLinks.map(({ title, path }) => (
            <Link
              key={path}
              to={path}
              className={`${
                isActive(path)
                  ? 'text-[#10b981] bg-[#1e293b]'
                  : 'text-gray-300'
              } block px-4 py-3 rounded-md text-base font-medium hover:bg-[#1e293b] hover:text-[#10b981] transition-all duration-300 ease-in-out`}
              onClick={() => setIsOpen(false)}
            >
              {title}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}