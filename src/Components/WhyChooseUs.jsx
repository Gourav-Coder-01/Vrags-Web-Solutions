import React from 'react';
import { TiTick } from 'react-icons/ti';

const WhyChooseUs = () => {
  const features = [
    { title: "Modern UI / UX", description: "Sleek, eye-catching designs tailored to engage your target audience." },
    { title: "Mobile Friendly", description: "Fully responsive layouts that adapt seamlessly across all mobile and tablet screens." },
    { title: "SEO Ready", description: "Built with SEO best practices to help you rank higher on search engines." },
    { title: "Fast Performance", description: "Optimized code and lightweight assets for lightning-fast load speeds." },
    { title: "Modern Frameworks", description: "Developed using cutting-edge technologies like React, Tailwind CSS, and Vite." },
    { title: "Dedicated Support", description: "Reliable assistance to ensure your platform runs smoothly at all times." },
    { title: "Affordable Pricing", description: "Cost-effective digital solutions custom-built to fit startup and small business budgets." },
    { title: "Secure & Reliable", description: "Robust security implementations to safeguard user data and maintain uptime." },
    { title: "24/7 Availability", description: "Round-the-clock monitoring and support whenever you need assistance." },
  ];

  return (
    <section 
      id="why-choose-us" 
      className="py-20 bg-slate-950 text-white scroll-mt-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Why <span className="text-blue-400">Choose Us?</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-4 p-6 rounded-2xl bg-slate-900/80 border border-slate-800 shadow-xl hover:border-blue-500/40 hover:bg-slate-900 transition-all duration-300 transform hover:-translate-y-1 group"
            >
              {/* Check Icon Badge */}
              <div className="shrink-0 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 p-2.5 rounded-xl group-hover:scale-110 transition-transform duration-300">
                <TiTick className="text-2xl" />
              </div>

              {/* Text Details */}
              <div>
                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;