import { GiDiamondTrophy } from "react-icons/gi";
import { achievements } from "../lib/data";

const Achievements = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2">
        KEY ACHIEVEMENTS
      </h3>
      <ul className="mt-2">
        {achievements.map((achievement) => (
          <li key={achievement.id} className="flex items-center text-[14px] text-[#65696d] mb-4">
            <GiDiamondTrophy className="mr-2 w-[30px] h-[30px] md:text-white" />
            <div>
              <h4 className="font-semibold text-white">{achievement.title}</h4>
              <p className="text-[12px]">{achievement.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Achievements;
