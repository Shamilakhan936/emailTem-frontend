"use client";

import { education } from "../lib/data";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";
import { Education as EducationType } from "../types/datatypes";

const Education = () => {
  const [educationData, setEducationData] = useState<EducationType[]>(education);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('educationData');
    if (savedData) {
      setEducationData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('educationData', JSON.stringify(educationData));
    setIsEditing(false);
  };

  const handleChange = (id: number, field: string, value: string) => {
    setEducationData(prev => 
      prev.map(edu => 
        edu.id === id ? { ...edu, [field]: value } : edu
      )
    );
  };

  return (
    <div className="relative mb-6 text-[#2c2a2a]">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#2c2a2a] border-b-[1px] border-[#bdbdbd] pb-[5px]">
        EDUCATION
      </h2>
      <div className="mt-2">
        {educationData.map((edu) => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] text-[#2c2a2a] font-normal">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1"
                    value={edu.degree}
                    onChange={(e) => handleChange(edu.id, 'degree', e.target.value)}
                  />
                ) : (
                  edu.degree
                )}
              </h3>
              <p className="text-[#2c2a2a] text-[12px]">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[120px] text-right"
                    value={edu.date}
                    onChange={(e) => handleChange(edu.id, 'date', e.target.value)}
                  />
                ) : (
                  edu.date
                )}
              </p>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-[#008CFF] text-[14px] font-normal">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 text-[#008CFF]"
                    value={edu.institution}
                    onChange={(e) => handleChange(edu.id, 'institution', e.target.value)}
                  />
                ) : (
                  edu.institution
                )}
              </p>
              <p className="text-[12px]">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[120px] text-right"
                    value={edu.city}
                    onChange={(e) => handleChange(edu.id, 'city', e.target.value)}
                  />
                ) : (
                  edu.city
                )}
              </p>
            </div>
          </div>
        ))}
      </div>

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

export default Education;
