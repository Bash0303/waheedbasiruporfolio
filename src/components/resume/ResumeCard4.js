import React from 'react'

const ResumeCard4 = ({ title, subTitle, result, des, des2, des3 }) => {
    return (
        <div className="flex w-full h-auto group">
            <div className="w-10 h-[6px] bgOpacity mt-16 relative">
                <span className="absolute flex items-center justify-center w-5 h-5 bg-black rounded-full -top-2 -left-3 bg-opacity-60">
                    <span className="inline-flex w-3 h-3 duration-300 rounded-full bg-bodyColor group-hover:bg-designColor"></span>
                </span>
            </div>
            <div className="flex flex-col justify-center w-full gap-6 p-4 duration-300 bg-black rounded-lg bg-opacity-20 hover:bg-opacity-30 lgl:px-10 lgl:gap-10 shadow-shadowOne">
                <div className="flex flex-col justify-between gap-4 lgl:flex-row lgl:gap-0 lgl:items-center">
                    <div>
                        <h3 className="text-xl font-semibold duration-300 md:text-2xl group-hover:text-white">
                            {title}
                        </h3>
                        <p className="mt-2 text-sm text-gray-400 duration-300 group-hover:text-white">
                            {subTitle}
                        </p>
                    </div>
                    <div>
                        <p className="flex items-center justify-center px-4 py-2 text-sm font-semibold text-green-700 bg-black bg-opacity-25 rounded-lg shadow-shadowOne">
                            {result}
                        </p>
                    </div>
                </div>
                <div className="flex w-full">
                    <ul className="flex flex-col w-full list-disc gap-y-1">
                        <li>
                            <p className="text-sm font-medium text-justify text-gray-400 duration-300 md:text-base group-hover:text-gray-300">
                                {des}
                            </p>
                        </li>

                        <li>
                            <p className="text-sm font-medium text-justify text-gray-400 duration-300 md:text-base group-hover:text-gray-300">
                                {des2}
                            </p>
                        </li>
                        <li>
                            <p className="text-sm font-medium text-justify text-gray-400 duration-300 md:text-base group-hover:text-gray-300">
                                {des3}
                            </p>
                        </li>
                       
                    </ul>
                </div>


            </div>
        </div>
    );
}

export default ResumeCard4