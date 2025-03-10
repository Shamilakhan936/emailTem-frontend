import { MdPhone } from "react-icons/md"; 
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import data from "../lib/data"; 

const Header: React.FC = () => {
  return (
    <div className="max-w-md bg-white ">
      <h2 className="md:text-[28px] text-[24px] leading-[30px] font-semibold text-[#1e1d1d] ">
        {data.name}
      </h2>
      <p className="text-[#008CFF] text-[16px]">{data.role}</p>
      <div className="mt-3 max-sm:flex-col text-[#2c2a2a] flex flex-wrap gap-[5px] text-[13px]">
        <p className="flex items-center ] gap-2">
          <MdPhone className="text-grey-500" /> {data.phone} {/* Updated Icon */}
        </p>
        <p className="flex items-center  gap-2">
          <FaEnvelope className="text-grey-500" /> {data.email}
        </p>
        <p className="flex items-center gap-2">
          <FaGithub className="text-grey-500" />
          <a href={data.github} target="_blank" className="hover:underline">
            {data.github.replace("https://", "")}
          </a>
        </p>
        <p className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-grey-500" /> {data.location}
        </p>
      </div>
    </div>
  );
};

export default Header;
