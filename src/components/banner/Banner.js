import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 pb-32 font-titleFont relative overflow-hidden"
    >
      {/* Subtle decorative background element */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-white/5 rounded-full blur-3xl -z-10" />
      
      {/* Wrapper Div: Changed 'lgl:flex-row' to 'md:flex-row' for tablet support */}
      <div className="flex flex-col md:flex-row items-center justify-between w-full gap-10 md:gap-0">
        <LeftBanner />
        <RightBanner />
      </div>

      {/* Curvy Bottom Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0] transform rotate-180">
        <svg 
          className="relative block w-[calc(120%+1.3px)] h-[60px] md:h-[120px]" 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" 
            fill="#fcfcfc"
          ></path>
        </svg>
      </div>
    </section>
  );
}

export default Banner;