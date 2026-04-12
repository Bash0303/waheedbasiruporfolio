import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="flex flex-col w-full gap-10 lgl:flex-col lgl:gap-6"
    >
      {/* part one */}
      <div className=''>
        <div className="flex flex-col gap-4 py-6 lgl:py-12 font-titleFont">
          <p className="text-sm text-green-700 tracking-[4px]">2002 - 2025</p>
          <h2 className="text-3xl font-bold md:text-4xl">Academics Qualification</h2>
        </div>
        <div className="mt-6 lgl:mt-2 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="HIGHER NATIONAL DIPLOMA IN COMPUTER SCIENCE"
            subTitle="KWARA STATE POLYTECHNIC. (Ilorin, Kwara State.)"
            result="2023 - 2025"
            // des="Focused on Advanced Software Engineering, Data Structures, and Systems Analysis."
          />
          
          <ResumeCard
            title="ORDINARY NATIONAL DIPLOMA IN COMPUTER SCIENCE"
            subTitle="KWARA STATE POLYTECHNIC. (Ilorin, Kwara State.)"
            result="2020 - 2022"
            // des="Foundational studies in Computer Science, Logic, and Programming."
          />
          
          <ResumeCard
            title="DEBISLAND COLLEGE"
            subTitle="WEST AFRICAN SECONDARY SCHOOL CERTIFICATE (WASSCE) (Agbede Olosugbo, Ikorodu, Lagos State.)"
            result="2010 - 2013"
            des="Secondary School Education."
          />
    
          <ResumeCard
            title="ISAWO COMPREHENSIVE JUNIOR HIGH SCHOOL"
            subTitle="JUNIOR SECONDARY SCHOOL (Isawo, Ikorodu, Lagos State.)"
            result="2007 - 2010"
            des="Junior Secondary School Education."
          />

          <ResumeCard
            title="VICTORY FOUNDATION INTERNATIONAL SCHOOL"
            subTitle="FIRST SCHOOL LEAVING CERTIFICATE (Agbede Olosugbo, Ikorodu, Lagos State.)"
            result="2002 - 2007"
            des="Primary School Education."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education;