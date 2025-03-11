"use client";

import { skills } from "../lib/data";
import { FiEdit2, FiSave, FiX, FiPlus, FiTrash2 } from "react-icons/fi";
import { useState, useEffect } from "react";

const Skills = () => {
  const [skillsData, setSkillsData] = useState(skills);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('skillsData');
    if (savedData) {
      setSkillsData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('skillsData', JSON.stringify(skillsData));
    setIsEditing(false);
  };

  const handleSkillChange = (categoryId: number, index: number, value: string) => {
    setSkillsData(prev =>
      prev.map(category =>
        category.id === categoryId
          ? {
              ...category,
              skills: category.skills.map((skill, i) =>
                i === index ? value : skill
              ),
            }
          : category
      )
    );
  };

  const addSkill = (categoryId: number) => {
    setSkillsData(prev =>
      prev.map(category =>
        category.id === categoryId
          ? {
              ...category,
              skills: [...category.skills, "New Skill"],
            }
          : category
      )
    );
  };

  const removeSkill = (categoryId: number, index: number) => {
    setSkillsData(prev =>
      prev.map(category =>
        category.id === categoryId
          ? {
              ...category,
              skills: category.skills.filter((_, i) => i !== index),
            }
          : category
      )
    );
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2 pb-[5px]">
        SKILLS
      </h3>
      <ul className="mt-2 md:text-[12px] text-[14px]">
        {skillsData.map((category) => (
          <li key={category.id} className="mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              {category.skills.map((skill, index) => (
                <span key={index} className="flex items-center">
                  {isEditing ? (
                    <div className="flex items-center">
                      <input
                        className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[100px] md:text-[#e6e6e6]"
                        value={skill}
                        onChange={(e) => handleSkillChange(category.id, index, e.target.value)}
                      />
                      <button
                        className="text-red-400 hover:text-red-600 ml-1"
                        onClick={() => removeSkill(category.id, index)}
                      >
                        <FiTrash2 size={12} />
                      </button>
                    </div>
                  ) : (
                    <>
                      {skill}
                      {index < category.skills.length - 1 && (
                        <span className="mx-1 w-[3px] h-[3px] bg-white rounded-full inline-block"></span>
                      )}
                    </>
                  )}
                </span>
              ))}
              {isEditing && (
                <button
                  className="text-blue-400 hover:text-blue-600"
                  onClick={() => addSkill(category.id)}
                >
                  <FiPlus size={16} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>

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

export default Skills;
