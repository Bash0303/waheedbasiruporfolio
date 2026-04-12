import React from "react";
import { motion } from "framer-motion";
import ResumeCard2 from "./ResumeCard2";
import ResumeCard3 from "./ResumeCard3";
import ResumeCard5 from "./ResumeCard5";

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col gap-16 py-16 px-4 md:px-10 font-titleFont md:flex-row bg-gray-50 rounded-2xl"
    >
      <div className="w-full md:w-2/3">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-950 tracking-tight">
            Professional Experience
          </h2>
          <p className="text-slate-600 text-lg">Detailed history of my roles and responsibilities.</p>
        </div>
        
        <div className="w-full h-auto border-l-4 border-slate-200 flex flex-col gap-8 pl-6 md:pl-8">
          
          {/* Bulq - Frontend Engineer */}
          <ResumeCard5
            title="Frontend Engineer"
            subTitle="Bulq Logistics | Canada, Nigeria"
            result="2023 – 2026"
            des="Collaborated on building scalable frontend architectures using modern JavaScript frameworks to enhance user interaction."
            des2="Optimized web performance and ensured cross-browser compatibility for a diverse user base."
          />

          {/* Aboki Xchange - Frontend Engineer */}
          <ResumeCard5
            title="Frontend Engineer"
            subTitle="Aboki Xchange | Lagos, Nigeria"
            result="2024 – 2026"
            des="Developed and maintained responsive user interfaces for currency exchange platforms using React and TypeScript."
            des2="Integrated real-time data APIs to provide users with accurate financial information and seamless transaction flows."
          />

          {/* Urello - Frontend Engineer */}
          <ResumeCard5
            title="Frontend Engineer"
            subTitle="Urello | Lagos, Nigeria"
            result="Dec. 2025 – FEB 2026"
            des="Developed responsive and interactive user interfaces using React, Vue.js, TypeScript, and JavaScript."
            des2="Collaborated with backend teams to integrate RESTful APIs (.NET) and optimize database interactions."
          />

          {/* SkoolRight - Frontend Engineer */}
          <ResumeCard5
            title="Frontend Engineer"
            subTitle="SkoolRight by CINNSOL | Dubai, UAE / Lagos, Nig"
            result="Nov. 2022 – Oct. 2025"
            des="Developed responsive and interactive user interfaces using React, Vue.js, TypeScript, and JavaScript."
            des2="Collaborated with backend teams to integrate RESTful APIs (.NET) and optimize database interactions."
          />

          {/* Wumbis Concept - Full Stack Engineer */}
          <ResumeCard2
            title="Full Stack Engineer (Remote)"
            subTitle="Wumbis Concept | Canada"
            result="Oct 2024 – Mar. 2025"
            des="Built and maintained responsive user interfaces using React.js and Tailwind CSS."
            des2="Developed RESTful APIs using Node.js and Express.js to handle business logic."
            des3="Designed and managed MongoDB databases, including schema design and data validation."
            des4="Integrated frontend and backend systems, managing data flow and state using modern JS practices."
            des5="Implemented authentication and authorization features to secure user data."
            des6="Collaborated with cross-functional teams to deliver scalable web applications."
          />

          {/* GGNetlink - Full Stack Engineer */}
          <ResumeCard2
            title="Full Stack Engineer (Remote)"
            subTitle="GGNetlink | Lagos, Nig"
            result="Feb. 2022 – Jan. 2024"
            des="Built and maintained responsive user interfaces using React.js and Tailwind CSS."
            des2="Developed RESTful APIs using Node.js and Express.js for client-server communication."
            des3="Designed and managed databases (MongoDB) including schema design and queries."
            des4="Managed data flow and state using modern JavaScript practices."
            des5="Implemented security features including authentication and authorization."
            des6="Improved system performance and reliability through debugging and team collaboration."
          />

          {/* GGNetlink - Code Instructor */}
          <ResumeCard5
            title="Code Instructor (Hybridge)"
            subTitle="GGNetlink | Lagos, Nig"
            result="Feb. 2022 – Jan. 2025"
            des="Taught modern web development using JavaScript, TypeScript, React, and Vue.js with hands-on projects."
            des2="Guided students in building RESTful APIs with Node.js/Express and integrating MongoDB/MySQL."
          />

          {/* Yomlinks - Code Instructor | UI Designer */}
          <ResumeCard5
            title="Code Instructor | UI Designer"
            subTitle="Yomlinks Technologies | Lagos, Nig"
            result="Feb. 2015 – Jan. 2020"
            des="Designed UI/UX prototypes with HTML/CSS and JavaScript, ensuring cross-browser compatibility."
            des2="Instructed students in Web Design and Coding fundamentals."
          />
        </div>
      </div>

      <div className="w-full md:w-1/3">
        <div className="flex flex-col gap-4 mb-12">
          <h2 className="text-4xl font-bold text-slate-950 tracking-tight">
            Internships
          </h2>
        </div>
        <div className="w-full h-auto border-l-4 border-slate-200 flex flex-col gap-8 pl-6 md:pl-8">
          <ResumeCard3
            title="WEB DEVELOPMENT INTERN"
            subTitle="DYNAMIC SOLUTION (CINSOL)."
            result="2013 - 2015"
            des="Collaboration with other team members building frontend website."
          />
        </div>
      </div>
    </motion.div>
  );
};

export default Experience;