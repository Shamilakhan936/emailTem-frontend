"use client";

import { Passion } from "../types/datatypes";

interface CoursesProps {
  data: Passion[];
}

const Courses: React.FC<CoursesProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className="mt-[8px]">
     
      <ul className="mt-[8px] text-[12px]">
        {data.map((course) => (
          <li key={course.id} className="border-b-2 border-dashed border-[#ccc] py-1">
            <span className="font-medium text-[#235986] text-[16px] font-semibold">{course.title}</span>
            <p className="text-black text-[13px] py-1">{course.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
