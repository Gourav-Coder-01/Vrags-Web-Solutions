import React from 'react';
import Cards from './Cards';

const Services = () => {
  return (
    <section 
      id="services" 
      className="py-20 bg-slate-950 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Our <span className="text-blue-400">Services</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8 items-stretch">
          <Cards 
            header="Business Website" 
            color="bg-amber-50 text-amber-700 border-amber-200/80"
            borderColor="hover:border-amber-400 hover:shadow-amber-500/10" 
            text1="Modern & Responsive" 
            text2="Responsive websites that adapt to any device and help you connect with clients." 
          />
          <Cards 
            header="Landing Pages" 
            color="bg-rose-50 text-rose-700 border-rose-200/80" 
            borderColor="hover:border-rose-400 hover:shadow-rose-500/10"
            text1="High Impact Design" 
            text2="Focused pages built to capture attention and drive conversions with clean layouts." 
          />
          <Cards 
            header="E-Commerce" 
            color="bg-emerald-50 text-emerald-700 border-emerald-200/80" 
            borderColor="hover:border-emerald-400 hover:shadow-emerald-500/10"
            text1="High Conversion" 
            text2="Custom online stores designed to boost sales, streamline shopping, and grow your business." 
          />
          <Cards 
            header="Website Redesign" 
            color="bg-violet-50 text-violet-700 border-violet-200/80" 
            borderColor="hover:border-violet-400 hover:shadow-violet-500/10"
            text1="Improve & Refresh" 
            text2="Revamp your existing site with modern design, faster performance, and better client engagement." 
          />
        </div>

      </div>
    </section>
  );
};

export default Services;