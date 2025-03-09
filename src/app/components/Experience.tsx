import { experience } from "../lib/data";

const Experience = () => {
  return (
    <div className="mb-6">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#384347] border-b-[1px] border-[#bdbdbd]">
        EXPERIENCE
      </h2>
      {experience.map((exp) => (
        <div key={exp.id} className="mt-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[15px] text-[#384347] font-normal">{exp.role}</h3>
            <p className="text-[#384347] text-[12px]">{exp.date}</p>
          </div>
          <p className="text-[#008CFF] text-[14px]">{exp.company}</p>
          <ul className="list-disc list-inside mt-2 text-gray-700 text-[12px]">
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
