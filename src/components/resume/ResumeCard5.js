import React from 'react';

const ResumeCard5 = ({ title, subTitle, result, des, des2 }) => {
    return (
        <div className="flex w-full h-auto group relative">
           {/* CHANGE: Modernized Timeline Dot */}
           <div className="absolute -left-[37px] top-6 z-10">
                <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full border-2 border-slate-300 group-hover:border-blue-600 transition-colors duration-300">
                    <span className="inline-flex w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors duration-300"></span>
                </span>
            </div>

            {/* CHANGE: White card, dark text, blue badge */}
            <div className="flex flex-col justify-center w-full gap-6 p-6 transition-all duration-300 bg-white rounded-xl shadow-sm border border-slate-100 group-hover:shadow-lg">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                        {/* CHANGE: text-slate-950 */}
                        <h3 className="text-2xl font-extrabold tracking-tight text-slate-950 transition-colors duration-300">
                            {title}
                        </h3>
                         {/* CHANGE: text-slate-600 */}
                        <p className="mt-1.5 text-base font-medium text-slate-600">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                         {/* CHANGE: bg-blue-50 text-blue-700 */}
                        <p className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-blue-700 bg-blue-50 border border-blue-100 rounded-full whitespace-nowrap">
                            {result}
                        </p>
                    </div>
                </div>
                <div className="flex w-full">
                    {/* CHANGE: text-slate-700 and blue markers */}
                    <ul className="flex flex-col w-full list-disc gap-y-2.5 pl-1 marker:text-blue-600">
                        <li className="pl-1">
                            <p className="text-base font-normal text-slate-700 leading-relaxed text-justify">
                                {des}
                            </p>
                        </li>
                        {des2 && (
                            <li className="pl-1">
                                <p className="text-base font-normal text-slate-700 leading-relaxed text-justify">
                                    {des2}
                                </p>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}
export default ResumeCard5;