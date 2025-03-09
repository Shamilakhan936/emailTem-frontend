import { skills } from "../lib/data";

const Skills = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2">
        SKILLS
      </h3>
      <ul className="mt-2 md:text-[12px] text-[14px]">
        {skills.map((category) => (
          <li key={category.id} className="flex items-center gap-2 flex-wrap">
            {category.skills.map((skill, index) => (
              <span key={index} className="flex items-center">
                {skill}
                {index < category.skills.length - 1 && (
                  <span className="mx-1 w-[3px] h-[3px] bg-white rounded-full inline-block"></span>
                )}
              </span>
            ))}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Skills;
