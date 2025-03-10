import { GiDiamondTrophy, GiMedal, GiAchievement } from "react-icons/gi";
import { FaAward, FaTrophy, FaMedal } from "react-icons/fa";
import { achievements } from "../lib/data";
import React from 'react';
type IconType = "trophy" | "medal" | "award" | "achievement" | "cup" | "ribbon";

const iconMap: { [key in IconType]: React.ReactNode } = {
  trophy: <GiDiamondTrophy className="mr-4 w-[30px] h-[30px] md:text-[#F5F5F5]" />,
  medal: <GiMedal className="mr-4 w-[30px] h-[30px] md:text-[#F5F5F5]" />,
  award: <FaAward className="mr-4 w-[20px] h-[20px] md:text-[#F5F5F5]" />,
  achievement: <GiAchievement className="mr-2 w-[30px] h-[30px] md:text-[#F5F5F5]" />,
  cup: <FaTrophy className="mr-4 w-[30px] h-[30px] md:text-[#F5F5F5]" />,
  ribbon: <FaMedal className="mr-4 w-[25px] h-[25px] md:text-[#F5F5F5]" />,
};

const Achievements = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] max-sm:font-bold border-b-[1px] border-white mb-2 pb-[5px]">
        KEY ACHIEVEMENTS
      </h3>
      <ul className="mt-2">
        {achievements.map((achievement) => (
          <li key={achievement.id} className="flex self-start text-[14px] mb-4">
            {iconMap[achievement.icon as IconType] || <GiDiamondTrophy className="mr-2 w-[30px] h-[30px] text-[#F5F5F5]" />}
            <div>
              <h4 className="font-normal md:text-[#e6e6e6]">{achievement.title}</h4>
              <p className="text-[12px] mt-2">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
