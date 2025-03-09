import { GiDiamondTrophy } from "react-icons/gi";

const Achievements = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] font-normal border-b-[1px] border-white mb-2">KEY ACHIEVEMENTS</h3>
      <ul className="mt-2">
        <li className="flex items-center text-[14px] text-[#65696d]">
          <GiDiamondTrophy className="mr-2 w-[30px] h-[30px] text-white" />
          Your Achievements will be displayed here.
        </li>
        <li className="flex items-center text-[#65696d] text-[12px] mt-4">
          Describe what you did and the impacts it had.
        </li>
      </ul>
    </div>
  );
};

export default Achievements;
