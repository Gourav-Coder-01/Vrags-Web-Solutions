import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sumit Sharma",
      role: "SV Papers",
      text: "Vrags Solutions gave our business a modern online presence. The site is fast, responsive, and easy to manage.",
      rating: 5,
    },
    {
      name: "Sumit Bhama",
      role: "Bhama Enterprises",
      text: "Even as a new company, they delivered professional results. I’m excited to continue working with them.",
      rating: 4,
    },
    {
      name: "Pankaj Jain",
      role: "Jaina Enterprises",
      text: "Our website redesign boosted client engagement. Vrags Solutions truly understands what businesses need online.",
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-slate-950 text-white scroll-mt-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white text-center">
            Client <span className="text-blue-400">Testimonials</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-gradient-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Testimonial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <div 
              key={index} 
              className="relative bg-slate-900 border border-slate-800 p-8 rounded-2xl shadow-xl hover:border-blue-500/40 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between group"
            >
              <div>
                {/* Decorative Quote Icon */}
                <div className="text-blue-500/20 text-6xl font-serif leading-none absolute top-4 right-6 select-none pointer-events-none">
                  “
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-lg">★</span>
                  ))}
                  {Array.from({ length: 5 - t.rating }).map((_, i) => (
                    <span key={i} className="text-slate-700 text-lg">★</span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="text-slate-300 text-sm sm:text-base italic leading-relaxed mb-6">
                  "{t.text}"
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-white text-base group-hover:text-blue-400 transition-colors">
                    {t.name}
                  </h3>
                  <span className="text-xs sm:text-sm text-slate-400 font-medium">
                    {t.role}
                  </span>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 font-bold text-sm">
                  {t.name.charAt(0)}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;