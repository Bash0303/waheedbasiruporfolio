import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 pb-20 flex flex-col gap-16 xl:gap-0 lgl:flex-row items-center font-titleFont relative overflow-hidden"
    >
      {/* Optional: Subtle decorative background element */}
      <div className="absolute top-20 -left-10 w-72 h-72 bg-midnightBlue/5 rounded-full blur-3xl -z-10" />
      
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner;