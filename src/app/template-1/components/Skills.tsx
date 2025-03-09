"use client";
import React, { useState } from "react";

const Skills: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([
    "Figma",
    "Liquid",
    "Mockups",
    "PIC",
    "Shopify",
    "Sketch",
    "Vercel",
    "Wireframes",
    "Gmail",
  ]);

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove));
  };

  return (
    <section className="mt-6">
      {/* Title */}
      <h2 className="text-xl font-bold text-gray-900 border-b pb-2">SKILLS</h2>

      {/* Skills List */}
      <div className="flex flex-wrap gap-4 mt-4">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="flex items-center gap-2 text-gray-900 font-semibold border-b border-gray-500"
          >
            {skill}
            {/* Remove Icon (SVG) */}
            <span
              className="cursor-pointer text-red-500 hover:text-red-700"
              onClick={() => removeSkill(skill)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path
                  fillRule="evenodd"
                  d="M5.636 18.364a1 1 0 0 1 0-1.414L10.95 12 5.636 6.636a1 1 0 0 1 1.414-1.414L12 10.95l4.95-4.95a1 1 0 0 1 1.414 1.414L13.05 12l4.95 4.95a1 1 0 0 1-1.414 1.414L12 13.05l-4.95 4.95a1 1 0 0 1-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
