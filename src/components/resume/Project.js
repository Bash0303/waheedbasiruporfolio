import React from "react";
import { featuresProject } from "../../data/data";
import Card2 from "../features/Card2";
import Title2 from "../layouts/Title2";

const Project = () => {
  return (
    <div className="w-full py-10">
      <Title2 des="PREVIOUS PROJECTS" className="text-[#191970]" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
        {featuresProject.map((item) => (
          <Card2 item={item} key={item.id} />
        ))}
      </div>
    </div>
  );
};
export default Project;