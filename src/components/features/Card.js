import React from 'react';

const Card = ({ item: { title, icon } }) => {
  return (
    <div className="group w-full p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:shadow-midnightBlue/10 transition-all duration-500 hover:-translate-y-2 flex flex-col items-start gap-6 relative overflow-hidden">
      
      {/* Animated Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnightBlue to-blue-900 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>

      {/* Icon Container */}
      <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl text-midnightBlue group-hover:bg-white/20 group-hover:text-white transition-all duration-500 shadow-inner">
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col gap-2">
        <h2 className="text-xl font-bold text-midnightBlue group-hover:text-white transition-colors duration-300">
          {title}
        </h2>
        <div className="w-8 h-1 bg-midnightBlue/20 group-hover:bg-white/40 rounded-full transition-all duration-500 group-hover:w-16"></div>
      </div>

      {/* Corner Accent Decor */}
      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-midnightBlue/5 rounded-full group-hover:bg-white/10 transition-colors"></div>
    </div>
  );
};

export default Card;