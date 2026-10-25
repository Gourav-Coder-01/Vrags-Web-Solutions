import React from 'react';
import resp from '../assets/resp.png';
import { Link } from 'react-scroll';

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen bg-gradient-to-br from-blue-950 via-blue-900 to-blue-600 flex items-center justify-center px-4 sm:px-8 lg:px-16 pt-28 pb-16 overflow-hidden"
    >
      <div className="max-w-7xl w-full mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16">
        
        {/* Left Side: Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left text-white space-y-6 z-10">
          
          {/* Agency Badge */}
          <span className="inline-block px-3.5 py-1.5 bg-blue-500/20 text-blue-200 border border-blue-400/30 rounded-full text-xs sm:text-sm font-semibold tracking-wide uppercase shadow-sm">
            Professional Web Development
          </span>

          {/* Heading */}
          <h1 className="font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight leading-tight">
            Modern Websites <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-amber-200 to-white">
              That Grow Your Business
            </span>
          </h1>

          {/* Body Text */}
          <p className="text-base sm:text-lg lg:text-xl text-blue-100/90 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
            Smart, responsive designs engineered to enhance user experience, boost engagements, and drive measurable results.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
            <Link 
              to="contact" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-white text-blue-900 font-bold text-sm sm:text-base rounded-xl shadow-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              Get Free Quote
            </Link>

            <Link 
              to="portfolio" 
              smooth={true} 
              duration={500} 
              offset={-70}
              className="w-full sm:w-auto text-center px-6 py-3.5 bg-blue-800/60 border border-white/30 text-white font-semibold text-sm sm:text-base rounded-xl backdrop-blur-sm hover:bg-blue-800/90 hover:border-white/60 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              View Portfolio
            </Link>
          </div>
        </div>

        {/* Right Side: Visual Image */}
        <div className="w-full lg:w-1/2 flex justify-center items-center z-10">
          <div className="relative w-full max-w-md sm:max-w-lg lg:max-w-xl">
            {/* Soft Glow Effect Behind Image */}
            <div className="absolute inset-0 bg-blue-400/20 rounded-full filter blur-3xl -z-10 transform scale-90"></div>
            
            <img 
              src={resp} 
              alt="Responsiveness illustration showing desktop, tablet, and mobile displays" 
              className="w-full h-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-[1.02]" 
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;