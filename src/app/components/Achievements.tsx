"use client";

import { GiDiamondTrophy, GiMedal, GiAchievement } from "react-icons/gi";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";
import { FiEdit2, FiSave, FiX } from "react-icons/fi";
import { achievements } from "../lib/data";
import { useState, useEffect } from "react";

type IconType = "trophy" | "medal" | "award" | "achievement" | "cup" | "ribbon";

const iconMap: { [key in IconType]: React.ReactNode } = {
  trophy: <GiDiamondTrophy className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  medal: <GiMedal className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  award: <FaAward className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  achievement: <GiAchievement className="mr-2 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  cup: <FaTrophy className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  ribbon: <FaMedal className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
};

const Achievements = () => {
  const [achievementsData, setAchievementsData] = useState(achievements);
  const [isEditing, setIsEditing] = useState(false);

  // Load data from localStorage on component mount
  useEffect(() => {
    const savedData = localStorage.getItem('achievementsData');
    if (savedData) {
      setAchievementsData(JSON.parse(savedData));
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem('achievementsData', JSON.stringify(achievementsData));
    setIsEditing(false);
  };

  const handleChange = (id: number, field: string, value: string) => {
    setAchievementsData(prev => 
      prev.map(achievement => 
        achievement.id === id ? { ...achievement, [field]: value } : achievement
      )
    );
  };

  return (
    <div className="relative mt-6">
      <h3 className="text-[16px] max-sm:font-bold border-b-[1px] border-white mb-2 pb-[5px]">
        KEY ACHIEVEMENTS
      </h3>
      <ul className="mt-2">
        {achievementsData.map((achievement) => (
          <li key={achievement.id} className="flex self-start text-[14px] mb-4">
            {iconMap[achievement.icon as IconType] || <GiDiamondTrophy className="mr-2 w-[30px] h-[30px] text-[#F5F5F5]" />}
            <div className="flex-1">
              <h4 className="font-normal md:text-[#e6e6e6]">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-full md:text-[#e6e6e6]"
                    value={achievement.title}
                    onChange={(e) => handleChange(achievement.id, 'title', e.target.value)}
                  />
                ) : (
                  achievement.title
                )}
              </h4>
              <p className="text-[12px] mt-2">
                {isEditing ? (
                  <input
                    className="bg-transparent border-b border-gray-300 focus:border-blue-500 focus:outline-none px-1 w-full"
                    value={achievement.description}
                    onChange={(e) => handleChange(achievement.id, 'description', e.target.value)}
                  />
                ) : (
                  achievement.description
                )}
              </p>
              {isEditing && (
                <select
                  className="mt-2 bg-transparent border border-gray-300 rounded px-1 py-0.5 text-sm md:text-[#e6e6e6]"
                  value={achievement.icon}
                  onChange={(e) => handleChange(achievement.id, 'icon', e.target.value)}
                >
                  <option value="trophy">Trophy</option>
                  <option value="medal">Medal</option>
                  <option value="award">Award</option>
                  <option value="achievement">Achievement</option>
                  <option value="cup">Cup</option>
                  <option value="ribbon">Ribbon</option>
                </select>
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

export default Achievements;
