import React, { useState } from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Experience from "./Experience";
import Hobby from './Hobby';
import Project from './Project';

const Resume = () => {
  const [activeTab, setActiveTab] = useState("education");

  const tabs = [
    { id: "education", label: "Education" },
    { id: "skills", label: "Skills" },
    { id: "experience", label: "Experience" },
    { id: "project", label: "Projects" },
    { id: "hobbies", label: "Hobbies" },
  ];

  return (
    <section id="resume" className="w-full py-8 md:py-20 border-b border-gray-100">
      <div className="flex justify-center text-center">
        <Title title="" des="My Resume" />
      </div>
      <div className="mb-10">
        <ul className="flex flex-wrap justify-center gap-4">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 md:px-8 py-3 rounded-lg cursor-pointer font-semibold duration-300 border-2 ${
                activeTab === tab.id 
                ? "bg-midnightBlue text-white border-midnightBlue shadow-lg" 
                : "bg-white text-midnightBlue border-gray-200 hover:border-midnightBlue"
              }`}
            >
              {tab.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-10">
        {activeTab === "education" && <Education />}
        {activeTab === "skills" && <Skills />}
        {activeTab === "experience" && <Experience />}
        {activeTab === "project" && <Project />}
        {activeTab === "hobbies" && <Hobby />}
      </div>
    </section>
  );
}
export default Resume;