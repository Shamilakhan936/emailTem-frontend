"use client";

import { MdPhone } from "react-icons/md"; 
import { FaEnvelope, FaGithub, FaMapMarkerAlt } from "react-icons/fa";
import { HeaderData } from '../types/datatypes';

interface HeaderProps {
  data: HeaderData;
}

const Header: React.FC<HeaderProps> = ({ data }) => {
  return (
    <div className="max-w-md mb-6">
      <div className="space-y-1">
        <h2 className="md:text-[28px] text-[24px] leading-[30px] font-semibold text-[#1e1d1d]">
          {data.name}
        </h2>
        <p className="text-[#008CFF] text-[16px] mb-2">
          {data.role}
        </p>
        
        <div className="flex flex-wrap gap-2 text-[12px] items-center">
          <p className="flex items-center gap-2 min-w-fit">
            <MdPhone className="text-grey-500 shrink-0" />
            {data.phone}
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaEnvelope className="text-grey-500 shrink-0" />
            {data.email}
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaGithub className="text-grey-500 shrink-0" />
            <a href={data.github} target="_blank" className="hover:underline">
              {data.github.replace("https://", "")}
            </a>
          </p>
          <p className="flex items-center gap-2 min-w-fit">
            <FaMapMarkerAlt className="text-grey-500 shrink-0" />
            {data.location}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
