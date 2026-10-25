import React from "react";

const Cards = ({ header, color, text1, text2, borderColor }) => {
  return (
    <div className={`w-full flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5 group ${borderColor}`}>
      <div>
        {/* Badge & Title */}
        <div className="flex flex-col space-y-3 mb-4">
          <span
            className={`self-start px-3 py-1 rounded-full text-xs font-bold tracking-wide border ${color}`}
          >
            {text1}
          </span>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
            {header}
          </h3>
        </div>

        {/* Body Text */}
        <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6 font-medium">
          {text2}
        </p>
      </div>

      {/* Footer Link */}
      <div className="pt-4 border-t border-slate-100 flex items-center text-blue-600 text-sm font-bold group-hover:text-blue-700 transition-colors">
        <span>Learn More</span>
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  );
};

export default Cards;