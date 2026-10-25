import React from 'react';
import { GiDiscussion } from 'react-icons/gi';
import { MdDesignServices, MdDeveloperMode } from 'react-icons/md';
import { PiRocketLaunchThin } from 'react-icons/pi';

const Our_process = () => {
  const steps = [
    {
      id: "01",
      title: "Discussion",
      description: "Understanding your vision, business goals, and project requirements.",
      icon: GiDiscussion,
      color: "from-blue-500 to-indigo-600",
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/30",
    },
    {
      id: "02",
      title: "Design",
      description: "Crafting wireframes and modern UI/UX concepts tailored to your brand.",
      icon: MdDesignServices,
      color: "from-purple-500 to-pink-600",
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/30",
    },
    {
      id: "03",
      title: "Development",
      description: "Building fast, responsive, and secure web solutions with clean code.",
      icon: MdDeveloperMode,
      color: "from-amber-500 to-orange-600",
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    },
    {
      id: "04",
      title: "Launch",
      description: "Testing, optimizing performance, and deploying your project live.",
      icon: PiRocketLaunchThin,
      color: "from-emerald-500 to-teal-600",
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    },
  ];

  return (
    <section id="process" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Our <span className="text-blue-400">Process</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Process Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          
          {steps.map((step, index) => {
            const IconComponent = step.icon;
            return (
              <div 
                key={index}
                className="relative group bg-slate-950/70 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-2"
              >
                {/* Step Number Tag & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl bg-gradient-to-br ${step.color} text-white shadow-lg text-3xl group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-bold border ${step.badgeColor}`}>
                      STEP {step.id}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Decorative Line Accent */}
                <div className={`mt-6 h-1 w-12 rounded-full bg-gradient-to-r ${step.color} group-hover:w-full transition-all duration-500`}></div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Our_process;