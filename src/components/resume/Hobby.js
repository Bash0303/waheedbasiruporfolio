import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Hobby = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
            className="flex flex-col w-full gap-10 lgl:flex-row lgl:gap-20"
        >

            <div className="w-full lgl:w-1/2">
                <div className="flex flex-col gap-4 py-12 font-titleFont">
                    <h2 className="text-3xl font-bold md:text-4xl">Hobbies</h2>
                </div>
                <div className="flex flex-col gap-6">
                    <ResumeCard
                        result="Hobby"
                        des="  I’m a self-confessed techie who during spare time read IT related articles and watch videos about the latest enterprise technology and gadget reviews. "
                    />
                    <ResumeCard
                        result="Hobby"
                        des=" In addition to this, i love traveling, reading, coding, tech event attending, and football.."
                    />
                </div>
            </div>


            <div className="w-full lgl:w-1/2">
                <div className="flex flex-col gap-4 py-12 font-titleFont">
                    <h2 className="text-3xl font-bold md:text-4xl">Language </h2>
                </div>
                <div className="flex flex-col gap-6">
                    <ResumeCard
                        title="Language Spoken"
                        result="2"
                        des="English | Yoruba"
                    />
                </div>
            </div>

        </motion.div>
    );
}

export default Hobby;
