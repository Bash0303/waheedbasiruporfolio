import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const softSkills = [
    { name: "Collaboration", value: "100%" },
    { name: "Team Work", value: "95%" },
    { name: "Communication", value: "95%" },
    { name: "Problem Solving", value: "95%" },
    { name: "Attention to Detail", value: "95%" },
    { name: "Time Management", value: "95%" },
    { name: "Adaptability", value: "90%" },
    { name: "Leadership", value: "85%" },
    { name: "Critical Thinking", value: "90%" },
    { name: "Work Ethic", value: "100%" },
  ];

  const technicalSkills = [
    { name: "React / Next.js", value: "95%" },
    { name: "React Native (Mobile)", value: "85%" },
    { name: "Laravel / PHP", value: "90%" },
    { name: "Node.js / Express", value: "85%" },
    { name: "TypeScript / JavaScript", value: "90%" },
    { name: "Material UI / Bootstrap / Tailwind CSS / Bulma", value: "95%" },
    { name: "Database (MongoDB / SQL)", value: "85%" },
    { name: "Github", value: "80%" },
    { name: "Azure ", value: "50%" },
  ];

  const SkillBar = ({ name, value }) => (
    <div className="overflow-x-hidden">
      <p className="text-sm font-bold uppercase text-midnightBlue">{name}</p>
      <span className="inline-flex w-full h-3 mt-2 rounded-md bg-gray-200">
        <motion.span
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ width: value }}
          className="h-full rounded-md bg-midnightBlue relative"
        >
          <span className="absolute right-0 -top-7 text-midnightBlue font-bold">{value}</span>
        </motion.span>
      </span>
    </div>
  );

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20 py-12"
    >
      {/* Left Column: Personal Skills */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-midnightBlue">Personal Skills</h2>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {softSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} value={skill.value} />
          ))}
        </div>
      </div>

      {/* Right Column: Technical Proficiency */}
      <div className="w-full lgl:w-1/2">
        <div className="py-4 font-titleFont flex flex-col gap-4">
          <h2 className="text-3xl md:text-4xl font-bold text-midnightBlue">Technical Skills</h2>
        </div>
        <div className="mt-8 flex flex-col gap-6">
          {technicalSkills.map((skill, index) => (
            <SkillBar key={index} name={skill.name} value={skill.value} />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;