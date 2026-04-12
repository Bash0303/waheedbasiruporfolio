// src/components/Logo.jsx
import React from 'react';

const Logo = ({ variant = "default", size = "md" }) => {
  const sizes = {
    sm: "text-xl",
    md: "text-2xl",
    lg: "text-4xl",
    xl: "text-6xl"
  };

  if (variant === "icon") {
    return (
      <div className="flex items-center gap-2">
        <div className="relative">
          {/* Hexagon background */}
          <div className="w-12 h-12 bg-gradient-to-br from-midnightBlue to-blue-700 rounded-lg transform rotate-45"></div>
          {/* Code brackets */}
          <div className="absolute inset-0 flex items-center justify-center -rotate-45">
            <span className="text-white font-bold text-xl">{'</>'}</span>
          </div>
        </div>
        <div>
          <h1 className={`font-bold ${sizes[size]} text-midnightBlue`}>
            U<span className="text-blue-600">I</span>
          </h1>
          <p className="text-xs text-gray-500 -mt-1">Full Stack Engineer</p>
        </div>
      </div>
    );
  }

  if (variant === "minimal") {
    return (
      <div className="flex items-baseline gap-1">
        <span className={`font-black ${sizes[size]} bg-gradient-to-r from-midnightBlue to-blue-600 bg-clip-text text-transparent`}>
          UI
        </span>
        <span className="text-gray-400 text-sm">|</span>
        <span className="text-gray-500 text-xs">fullstack</span>
      </div>
    );
  }

  // Default full logo
  return (
    <div className="flex items-center gap-3 group cursor-pointer">
    <div className="bg-white p-2 rounded border border-slate-200 shadow-sm group-hover:border-blue-500 transition-colors">
      <svg width="32" height="32" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 35V70C20 75 25 80 30 80H70C75 80 80 75 80 70V35" stroke="#1e293b" strokeWidth="8" />
        <path d="M50 20V65M35 50L50 35L65 50" stroke="#3b82f6" strokeWidth="8" strokeLinejoin="round" />
      </svg>
    </div>
    <div className="flex flex-col tracking-tighter">
      <span className="font-bold text-slate-900 leading-none">UMAR IBRAHIM</span>
      <span className="text-[10px] uppercase text-slate-500 tracking-widest font-semibold">Software Engineer</span>
    </div>
  </div>
  );
};

export default Logo;