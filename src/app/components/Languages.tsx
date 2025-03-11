"use client";

import { languages } from "../lib/data";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import { useState, useEffect } from "react";

const Languages = () => {
  const [languageData, setLanguageData] = useState(languages);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('languageData');
    if (savedData) {
      setLanguageData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('languageData', JSON.stringify(languageData));
    setIsEditing(false);
  };

  const handleChange = (index: number, field: string, value: string | number) => {
    setLanguageData(prev => 
      prev.map((lang, i) => 
        i === index 
          ? { 
              ...lang, 
              [field]: field === 'proficiency' ? Number(value) : value 
            } 
          : lang
      )
    );
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-[16px] font-normal border-b-[1px] border-[#bdbdbd] pb-[5px] mb-2 md:text-[#2c2a2a]">
        LANGUAGES
      </h3>
      <div className="grid grid-cols-6 text-start items-center gap-y-2">
        {languageData.map((language, index) => (
          <div key={`lang-row-${index}`} className="contents">
            <span className="text-[14px] font-normal text-[#2c2a2a] col-span-2">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[90%]"
                  value={language.name}
                  onChange={(e) => handleChange(index, 'name', e.target.value)}
                />
              ) : (
                language.name
              )}
            </span>

            <span className="text-[12px] text-gray-600 col-span-2">
              {isEditing ? (
                <input
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[90%]"
                  value={language.level}
                  onChange={(e) => handleChange(index, 'level', e.target.value)}
                />
              ) : (
                language.level
              )}
            </span>

            <div className="flex justify-center col-span-2">
              {isEditing ? (
                <input
                  type="number"
                  min="0"
                  max="5"
                  className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[50px]"
                  value={language.proficiency}
                  onChange={(e) => handleChange(index, 'proficiency', e.target.value)}
                />
              ) : (
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={`dot-${index}-${i}`}
                      className={`w-2 h-2 mx-[2px] rounded-full ${
                        i < language.proficiency ? "bg-blue-500" : "bg-gray-300"
                      }`}
                    ></div>
                  ))}
                </div>
              )}
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

export default Languages;
