"use client";

import { useState, useEffect } from "react";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";

const Summary = () => {
  const defaultSummary = "I am a Backend Developer with over 3 years of experience specializing in building scalable web applications using technologies like Express.js, Laravel, React.js, and Python. My expertise includes API development and optimizing backend processes. I strive to create secure and efficient systems that enhance user experience while implementing best practices in performance optimization.";

  const [summary, setSummary] = useState(defaultSummary);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('summaryData');
    if (savedData) {
      setSummary(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('summaryData', JSON.stringify(summary));
    setIsEditing(false);
  };

  return (
    <div className="relative mb-6">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#2c2a2a] border-b-[1px] border-[#bdbdbd] pb-[5px]">
        SUMMARY
      </h2>
      <div className="mt-2 text-[12px] text-[#2c2a2a]">
        {isEditing ? (
          <textarea
            className="w-full bg-transparent border border-gray-300 focus:border-blue-500 focus:outline-none p-2 min-h-[100px] resize-none rounded"
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
          />
        ) : (
          <p>{summary}</p>
        )}
      </div>

      {isEditing && (
        <div className="absolute right-0 -top-10 flex items-center space-x-2 bg-white p-2 shadow-md rounded-[10px]">
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

export default Summary;
