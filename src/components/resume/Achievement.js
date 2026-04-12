import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-4 md:py-12 font-titleFont flex gap-20 md:flex-row  flex-col"
    >
      <div>
        <div className="py-4 md:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Certification</h2>
        </div>
        <div className="mt-8 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="ETHICAL HACKING ESSENTIALS (EHE)"
            subTitle="Ec - Council"
            result="Successful"
            des="February 2023"
          />
          <ResumeCard
            title="NETWORK DEFENCE ESSENTIAL (NDE)"
            subTitle="Ec - Council"
            result="Successful"
            des="February 2023"
          />
        </div>
      </div>
      <div>
        <div className=" py-4 md:py-12 font-titleFont flex flex-col gap-4">
          <h2 className="text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-8 w-full h-auto border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          
          <ResumeCard
            title="GOOGLE IT SUPPORT PROFESSIONAL CERTIFICATE"
            subTitle="Google"
            result="Successful"
            des="February 2022"
          />
             <ResumeCard
            title="INFORMATION SECURITY CERTIFICATION TRAINING"
            subTitle="Gnex Solutions Ltd."
            result="Successful"
            des="October 2020"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
