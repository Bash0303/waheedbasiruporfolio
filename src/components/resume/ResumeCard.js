import React from 'react';

const ResumeCard = ({title, subTitle, result, des}) => {
  return (
    <div className="w-full h-auto group flex">
      <div className="w-10 h-[6px] bg-midnightBlue/20 mt-16 relative">
        <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-white border-2 border-midnightBlue group-hover:bg-midnightBlue duration-300"></span>
      </div>
      <div className="w-full bg-white border border-gray-100 shadow-shadowOne hover:border-midnightBlue duration-300 rounded-lg p-6 lgl:px-10 flex flex-col justify-center gap-4">
        <div className="flex flex-col lgl:flex-row justify-between gap-4 lgl:items-center">
          <div>
            <h3 className="text-xl md:text-2xl font-bold text-midnightBlue">
              {title}
            </h3>
            <p className="text-sm mt-2 text-gray-500">{subTitle}</p>
          </div>
          <div>
            <p className="px-4 py-1 text-white bg-midnightBlue rounded-md text-sm font-semibold">
              {result}
            </p>
          </div>
        </div>
        <p className="text-base text-gray-600">{des}</p>
      </div>
    </div>
  );
}
export default ResumeCard;