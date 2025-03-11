"use client";

import { experience } from "../lib/data";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Experience = () => {
  const [experiences, setExperiences] = useState(experience);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('experienceData');
    if (savedData) {
      setExperiences(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('experienceData', JSON.stringify(experiences));
    setIsEditing(false);
  };

  const handleChange = (id: number, field: string, value: string) => {
    setExperiences(prev => 
      prev.map(exp => 
        exp.id === id ? { ...exp, [field]: value } : exp
      )
    );
  };

  const handleResponsibilityChange = (expId: number, index: number, value: string) => {
    setExperiences(prev =>
      prev.map(exp =>
        exp.id === expId
          ? {
              ...exp,
              responsibilities: exp.responsibilities.map((task, i) =>
                i === index ? value : task
              ),
            }
          : exp
      )
    );
  };

  return (
    <div className="relative mb-6">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#2c2a2a] border-b-[1px] border-[#bdbdbd] pb-[5px]">
        EXPERIENCE
      </h2>
      {experiences.map((exp) => (
        <div key={exp.id} className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#2c2a2a] font-normal">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1"
                  value={exp.role}
                  onChange={(e) => handleChange(exp.id, 'role', e.target.value)}
                />
              ) : (
                exp.role
              )}
            </h3>
            <p className="text-[#2c2a2a] text-[12px]">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[120px] text-right"
                  value={exp.date}
                  onChange={(e) => handleChange(exp.id, 'date', e.target.value)}
                />
              ) : (
                exp.date
              )}
            </p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#008CFF] text-[14px]">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 text-[#008CFF]"
                  value={exp.company}
                  onChange={(e) => handleChange(exp.id, 'company', e.target.value)}
                />
              ) : (
                exp.company
              )}
            </p>
            <p className="text-[12px]">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[120px] text-right"
                  value={exp.city}
                  onChange={(e) => handleChange(exp.id, 'city', e.target.value)}
                />
              ) : (
                exp.city
              )}
            </p>
          </div>
          <ul className="list-disc mt-2 text-[#2c2a2a] text-[12px] pl-5">
            {exp.responsibilities.map((task, index) => (
              <li key={index} className="relative pl-1 mb-1">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-full"
                    value={task}
                    onChange={(e) => handleResponsibilityChange(exp.id, index, e.target.value)}
                  />
                ) : (
                  task
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}

      {isEditing && (
        <div className="absolute top-[-20px] left-[30%] flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
          <button
            className="text-green-500 p-1 hover:bg-gray-200 rounded"
            onClick={handleSave}
          >
            <FiSave size={14} />
          </button>
          <button
            className="text-red-500 p-1 hover:bg-gray-200 rounded"
            onClick={() => setIsEditing(false)}
          >
            <FiX size={14} />
          </button>
        </div>
      )}

      {!isEditing && (
        <button
          className="absolute top-0 right-0 text-gray-400 hover:text-gray-600"
          onClick={() => setIsEditing(true)}
        >
          <FiEdit2 size={16} />
        </button>
      )}
    </div>
  );
};

export default Experience;
