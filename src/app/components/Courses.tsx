import { projects } from "../lib/data"; 

const Courses = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px]  border-b-[1px] border-white mb-2 pb-[5px]">
        COURSES
      </h3>
      <ul className="mt-4 text-[12px]">
        {projects.map((project) => (
          <li key={project.id} className="mt-2">
            <span className="text-[14px] ">{project.title}</span>
            <p className="mt-2">{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
