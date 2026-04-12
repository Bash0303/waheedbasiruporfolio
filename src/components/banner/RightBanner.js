import React from 'react'
import bannerImg from "../../assets/images/mypics.jpg";

const RightBanner = () => {
  return (
    <div className="relative flex items-center justify-center w-full lgl:w-1/2 group">
      {/* Decorative background frame */}
      <div className="absolute w-[310px] h-[410px] lgl:w-[510px] lgl:h-[590px] border-2 border-midnightBlue/20 rounded-2xl translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500"></div>
      
      {/* Main Image Container */}
      <div className="relative w-[300px] h-[400px] lgl:w-[500px] lgl:h-[580px] bg-white rounded-2xl shadow-2xl overflow-hidden z-10 border-4 border-white">
        <img
          className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
          src={bannerImg}
          alt="Umar Ibrahim"
        />
        
        {/* Subtle Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-midnightBlue/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      </div>

      {/* Floating Badge (Modern Touch) */}
      <div className="absolute -bottom-6 -right-2 lgl:right-10 bg-white p-6 rounded-2xl shadow-2xl z-20 border border-gray-100 animate-bounce-slow">
        <p className="text-midnightBlue font-black text-2xl lgl:text-3xl">7+</p>
        <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Years Experience</p>
      </div>
    </div>
  );
}

export default RightBanner;