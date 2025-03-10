import { experience } from "../lib/data";

const Experience = () => {
  return (
    <div className="mb-6">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#2c2a2a] border-b-[1px] border-[#bdbdbd] pb-[5px]">
        EXPERIENCE
      </h2>
      {experience.map((exp) => (
        <div key={exp.id} className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#2c2a2a] font-normal">{exp.role}</h3>
            <p className="text-[#2c2a2a] text-[12px]">{exp.date}</p>
          </div>
          <div className="flex justify-between items-center">
            <p className="text-[#008CFF] text-[14px]">{exp.company}</p>
            <p className=" text-[12px]">{exp.city}</p>
          </div>
          <ul className="list-disc list-inside mt-2 text-[#2c2a2a] text-[12px]">
            {exp.responsibilities.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Experience;
