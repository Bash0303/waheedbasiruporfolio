import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";

const Features = () => {
  // Category display order and styling
  const categories = [
    { name: "Frontend", color: "from-blue-500 to-cyan-500", accentColor: "bg-blue-500" },
    { name: "Backend", color: "from-green-500 to-emerald-500", accentColor: "bg-green-500" },
    { name: "Database", color: "from-purple-500 to-pink-500", accentColor: "bg-purple-500" },
    { name: "Mobile", color: "from-orange-500 to-red-500", accentColor: "bg-orange-500" },
    { name: "Cloud", color: "from-indigo-500 to-purple-500", accentColor: "bg-indigo-500" }
  ];

  return (
    <section
      id="features"
      className="w-full py-24 border-b border-gray-100 relative bg-[#fcfcfc]"
    >
      {/* Decorative background pattern - Subtle dots */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" 
           style={{ backgroundImage: `radial-gradient(#191970 1px, transparent 1px)`, backgroundSize: '30px 30px' }}>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center mb-16">
          <Title title="Expertise" des="Professional Skills" />
        </div>
        
        {/* Render each category section */}
        {categories.map((category) => {
          const categoryData = featuresData[category.name.toLowerCase()];
          if (!categoryData || categoryData.length === 0) return null;
          
          return (
            <div key={category.name} className="mb-20 last:mb-0">
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-8">
                <div className={`h-1 w-12 rounded-full bg-gradient-to-r ${category.color}`}></div>
                <h2 className={`text-2xl md:text-3xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.name}
                </h2>
                <div className="flex-1 h-px bg-gradient-to-r from-gray-200 to-transparent"></div>
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${category.accentColor} bg-opacity-10 text-gray-700 border border-${category.accentColor}/20`}>
                  {categoryData.length}
                </div>
              </div>
              
              {/* Category Grid - Responsive grid layout */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                {categoryData.map((item) => (
                  <Card key={item.id} item={item} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;