import React from 'react';
import forever from '../assets/forever.png';
import netflix from '../assets/netflix.png';

const Portfolio = () => {
  const projects = [
    {
      title: "Forever E-Commerce Platform",
      description: "A modern, responsive e-commerce web application with a seamless shopping experience.",
      image: forever,
      link: "https://frontend-pearl-one-55.vercel.app/",
      tag: "E-Commerce",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      title: "Netflix Clone",
      description: "A feature-rich streaming platform clone replicating the UI and interactive media layouts.",
      image: netflix,
      link: "https://clone-gourav.netlify.app/",
      tag: "Web App",
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/30",
    },
  ];

  return (
    <section 
      id="portfolio" 
      className="py-20 bg-slate-950 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Our <span className="text-blue-400">Portfolio</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <a 
              key={index}
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden shadow-xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-slate-950 aspect-video flex items-center justify-center">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border backdrop-blur-md ${project.badgeColor}`}>
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors mb-2">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* View Live Link Indicator */}
                <div className="flex items-center text-blue-400 text-sm font-semibold group-hover:text-blue-300 transition-colors">
                  <span>Live Preview</span>
                  <svg
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;