import { education } from "../lib/data";

const Education = () => {
  return (
    <div className="mb-6">
      <h2 className="text-[16px] font-normal max-sm:font-bold text-[#384347] border-b-[1px] border-[#bdbdbd]">
        EDUCATION
      </h2>
      <div className="mt-2">
        {education.map((edu) => (
          <div key={edu.id} className="mb-4">
            <div className="flex justify-between items-center">
              <h3 className="text-[15px] text-[#384347] font-normal">{edu.degree}</h3>
              <p className="text-[#384347] text-[12px]">{edu.date}</p>
            </div>
            <p className="text-[#008CFF] text-[14px]">{edu.institution}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
