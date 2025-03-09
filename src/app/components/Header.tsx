import { FaPhone, FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import data from "../lib/data"; // Import the data

const Header: React.FC = () => {
  return (
    <div className="max-w-md bg-white dark:bg-gray-900">
      <h2 className="text-[28px] leading-[30px] font-semibold text-gray-900 dark:text-white">
        {data.name}
      </h2>
      <p className="text-[#008CFF] text-[16px]">{data.role}</p>
      <div className="mt-3 text-gray-700 dark:text-gray-300 flex flex-wrap gap-[5px] text-[13px]">
        <p className="flex items-center text-black gap-2">
          <FaPhone className="text-gray-500" /> {data.phone}
        </p>
        <p className="flex items-center text-black gap-2">
          <FaEnvelope className="text-gray-500" /> {data.email}
        </p>
        <p className="flex items-center text-black gap-2">
          <FaGithub className="text-gray-500" />
          <a href={data.github} target="_blank" className="hover:underline">
            {data.github.replace("https://", "")}
          </a>
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-gray-500" /> {data.location}
        </p>
      </div>
    </div>
  );
};

export default Header;
