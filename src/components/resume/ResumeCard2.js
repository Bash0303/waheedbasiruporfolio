import React from 'react'

const ResumeCard2 = ({ title, subTitle, result, des, des2, des3, des4, des5, des6 }) => {
    return (
        <div className="w-full h-auto group flex relative">
            {/* CHANGE: Modernized Timeline Dot */}
            <div className="absolute -left-[37px] top-6 z-10">
                <span className="flex items-center justify-center w-5 h-5 bg-white rounded-full border-2 border-slate-300 group-hover:border-blue-600 transition-colors duration-300">
                    <span className="inline-flex w-2.5 h-2.5 rounded-full bg-slate-300 group-hover:bg-blue-600 transition-colors duration-300"></span>
                </span>
            </div>
            
            {/* CHANGE: White background, darker text, and modernized badge */}
            <div className="w-full bg-white hover:shadow-lg transition-shadow duration-300 rounded-xl p-6 md:p-8 flex flex-col justify-center gap-6 shadow-sm border border-slate-100">
                <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-3">
                    <div>
                        {/* CHANGE: High visibility title (text-slate-950) */}
                        <h3 className="text-2xl font-extrabold text-slate-950 tracking-tight transition-colors duration-300">
                            {title}
                        </h3>
                        {/* CHANGE: Visible gray subtitle (text-slate-600) */}
                        <p className="text-base mt-1.5 text-slate-600 font-medium">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        {/* CHANGE: Blue accent badge for date (bg-blue-50 text-blue-700) */}
                        <p className="px-4 py-2 text-blue-700 bg-blue-50 rounded-full flex justify-center items-center text-sm font-semibold whitespace-nowrap border border-blue-100">
                            {result}
                        </p>
                    </div>
                </div>
                <div className="w-full flex">
                    {/* CHANGE: Modernized list spacing and colors */}
                    <ul className="flex flex-col list-disc gap-y-2.5 w-full pl-1 marker:text-blue-600">
                        {[des, des2, des3, des4, des5, des6].map((point, index) => (
                            point && (
                                <li key={index} className="pl-1">
                                    {/* CHANGE: Readable body text color (text-slate-700) */}
                                    <p className="text-base font-normal text-slate-700 leading-relaxed text-justify">
                                        {point}
                                    </p>
                                </li>
                            )
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ResumeCard2