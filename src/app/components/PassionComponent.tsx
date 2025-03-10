import { FaLightbulb } from "react-icons/fa";
import { passion } from "../lib/data"; 

const PassionComponent = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2 pb-[5px]">
        PASSION
      </h3>
      <ul className="mt-4">
        {passion.map((item) => (
          <li key={item.id} className="flex self-start text-[14px] mb-4">
            <FaLightbulb className="mr-4 w-[30px] h-[30px] md:text-white" />
            <div>
              <h4 className="font-semibold md:text-[#e6e6e6]">{item.title}</h4>
              <p className="text-[12px] mt-2">{item.description}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PassionComponent;
