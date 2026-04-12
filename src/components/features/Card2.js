import React from 'react';

const Card2 = ({ item: { title, des } }) => {
  return (
    <div className="w-full p-8 rounded-xl shadow-shadowOne bg-white border border-gray-100 hover:border-midnightBlue transition-all duration-300 group">
      <div className="flex flex-col gap-4">
        <h2 className="text-xl font-bold text-midnightBlue">
          {title}
        </h2>
        <p className="text-sm text-gray-500 break-all group-hover:text-midnightBlue transition-colors">
          {des}
        </p>
        <div className="w-10 h-1 bg-midnightBlue rounded-full"></div>
      </div>
    </div>
  );
};
export default Card2;