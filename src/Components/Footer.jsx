import React from 'react';
import { FaGithub, FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link } from 'react-scroll';
import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 text-white">
      {/* Top Main Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center text-center md:text-left">
          
          {/* Column 1: Logo & Brief Tagline */}
          <div className="flex flex-col items-center md:items-start space-y-3">
            <a href="/" className="inline-block">
              <img src={logo} alt="Vrags Web Solutions Logo" className="h-20 w-auto object-contain" />
            </a>
            <p className="text-slate-400 text-sm max-w-sm leading-relaxed">
              Empowering startups and businesses with modern, fast, and responsive web solutions tailored for growth.
            </p>
          </div>

          {/* Column 2: Navigation Links */}
          <div className="flex flex-col items-center">
            <h4 className="text-lg font-bold text-white mb-4 tracking-wide border-b border-blue-500/30 pb-1">
              Quick Links
            </h4>
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-slate-300 font-medium">
              <li>
                <Link to="home" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Home
                </Link>
              </li>
              <li>
                <Link to="about" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 transition-colors cursor-pointer">
                  About
                </Link>
              </li>
              <li>
                <Link to="services" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Services
                </Link>
              </li>
              <li>
                <Link to="portfolio" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="contact" smooth={true} duration={500} offset={-70} className="hover:text-blue-400 transition-colors cursor-pointer">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Social & WhatsApp Links */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <h4 className="text-lg font-bold text-white tracking-wide border-b border-blue-500/30 pb-1">
              Connect With Us
            </h4>
            <div className="flex space-x-3">
              {/* WhatsApp Icon with direct chat link */}
              <a 
                href="https://wa.me/917210734600?text=Hello%20Vrags%20Web%20Solutions,%20I%20want%20to%20discuss%20a%20project." 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="WhatsApp"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 hover:border-emerald-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaWhatsapp className="text-lg" />
              </a>
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaGithub className="text-lg" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaTwitter className="text-lg" />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Facebook"
                className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-300 hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaFacebook className="text-lg" />
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="bg-slate-900/90 border-t border-slate-800/80 py-4 text-center text-xs sm:text-sm text-slate-400">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} Vrags Web Solutions. All rights reserved.</p>
          <p className="text-slate-500">Designed & Developed for digital excellence.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;