"use client";

import { FaLightbulb } from "react-icons/fa";
import { FiEdit2, FiSave, FiX, FiPlus, FiTrash2 } from "react-icons/fi";
import { passion } from "../lib/data";
import { useState, useEffect } from "react";

const PassionComponent = () => {
  const [passionData, setPassionData] = useState(passion);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('passionData');
    if (savedData) {
      setPassionData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('passionData', JSON.stringify(passionData));
    setIsEditing(false);
  };

  const handleChange = (id: number, field: string, value: string) => {
    setPassionData(prev =>
      prev.map(item =>
        item.id === id ? { ...item, [field]: value } : item
      )
    );
  };

  const addPassion = () => {
    const newId = Math.max(...passionData.map(item => item.id)) + 1;
    setPassionData(prev => [
      ...prev,
      {
        id: newId,
        title: "New Passion",
        description: "Describe your passion here"
      }
    ]);
  };

  const removePassion = (id: number) => {
    setPassionData(prev => prev.filter(item => item.id !== id));
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2 pb-[5px]">
        PASSION
      </h3>
      <ul className="mt-4">
        {passionData.map((item) => (
          <li key={item.id} className="flex self-start text-[14px] mb-4">
            <FaLightbulb className="mr-4 w-[20px] h-[20px] md:text-white shrink-0" />
            <div className="flex-1">
              {isEditing ? (
                <div>
                  <div className="flex items-center justify-between">
                    <input
                      className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-[80%] font-semibold md:text-[#e6e6e6]"
                      value={item.title}
                      onChange={(e) => handleChange(item.id, 'title', e.target.value)}
                    />
                    <button
                      className="text-red-400 hover:text-red-600"
                      onClick={() => removePassion(item.id)}
                    >
                      <FiTrash2 size={14} />
                    </button>
                  </div>
                  <textarea
                    className="mt-2 bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-full resize-none text-[12px] md:text-[#e6e6e6]"
                    value={item.description}
                    onChange={(e) => handleChange(item.id, 'description', e.target.value)}
                    rows={2}
                  />
                </div>
              ) : (
                <>
                  <h4 className="font-semibold md:text-[#e6e6e6]">{item.title}</h4>
                  <p className="text-[12px] mt-2">{item.description}</p>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>

      {isEditing && (
        <>
          <button
            className="mt-2 text-blue-400 hover:text-blue-600 flex items-center gap-1"
            onClick={addPassion}
          >
            <FiPlus size={16} />
            <span className="text-sm">Add Passion</span>
          </button>

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
        </>
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

export default PassionComponent;
