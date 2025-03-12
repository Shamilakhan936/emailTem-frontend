"use client";

import { SkillCategory } from '../types/datatypes';

interface SkillsProps {
  data: SkillCategory[];
}

export default function Skills({ data }: SkillsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="space-y-4 text-white  ">
      {data.map((category) => (
        <div key={category.id} className="mb-4">
          {category.name && (
            <h4 className="text-white font-medium mb-2">{category.name}</h4>
          )}
          <div className="flex flex-wrap gap-2">
            {category.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-gray-300 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
