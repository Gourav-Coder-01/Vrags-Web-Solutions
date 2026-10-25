import React from "react";
import { GrSecure } from "react-icons/gr";
import { IoReloadOutline } from "react-icons/io5";
import { TbSeo } from "react-icons/tb";
import { TiTick } from "react-icons/ti";

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex items-center justify-center gap-4 mb-16">
          <div className="h-0.5 w-12 sm:w-24 bg-linear-to-r from-transparent to-blue-500 rounded-full"></div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            About <span className="text-blue-400">Us</span>
          </h2>
          <div className="h-0.5 w-12 sm:w-24 bg-linear-to-l from-transparent to-blue-500 rounded-full"></div>
        </div>

        {/* Feature Icons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          
          {/* Feature 1 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300">
            <TiTick className="shrink-0 bg-green-500 text-white text-5xl p-1 rounded-full shadow-md" />
            <p className="text-lg font-semibold text-gray-100">Responsive Design</p>
          </div>

          {/* Feature 2 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300">
            <TbSeo className="shrink-0 bg-blue-500 text-white text-5xl p-2 rounded-full shadow-md" />
            <p className="text-lg font-semibold text-gray-100">SEO Optimized</p>
          </div>

          {/* Feature 3 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300">
            <IoReloadOutline className="shrink-0 bg-purple-500 text-white text-5xl p-2 rounded-full shadow-md animate-spin" />
            <p className="text-lg font-semibold text-gray-100">Fast Loading</p>
          </div>

          {/* Feature 4 */}
          <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-blue-400/50 hover:bg-white/10 transition-all duration-300">
            <GrSecure className="shrink-0 bg-emerald-500 text-white text-5xl p-2.5 rounded-full shadow-md" />
            <p className="text-lg font-semibold text-gray-100">Secure & Reliable</p>
          </div>

        </div>

        {/* Content Box / Paragraphs */}
        <div className="max-w-4xl mx-auto bg-linear-to-br from-blue-950/60 to-slate-900/80 border border-blue-500/20 p-6 sm:p-10 rounded-3xl backdrop-blur-md shadow-2xl space-y-6">
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <strong className="text-white font-bold block sm:inline text-xl mb-1 sm:mb-0 sm:mr-2">Who We Are:</strong> 
            Vrags Web Solutions is a startup dedicated to building modern, reliable, and innovative web solutions tailored for success.
          </p>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <strong className="text-white font-bold block sm:inline text-xl mb-1 sm:mb-0 sm:mr-2">Our Mission:</strong> 
            To make digital transformation simple and impactful for startups and small businesses worldwide.
          </p>
          
          <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
            <strong className="text-white font-bold block sm:inline text-xl mb-1 sm:mb-0 sm:mr-2">Our Values:</strong> 
            Creativity, transparency, and customer success guide everything we do. We aim to be your trusted digital partner.
          </p>

          <div className="pt-4 border-t border-blue-500/20 text-center sm:text-left">
            <p className="text-blue-400 text-xl sm:text-2xl font-bold tracking-wide">
              Ready to grow online? Let’s build your vision together.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;