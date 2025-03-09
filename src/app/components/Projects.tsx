import { projects } from "../lib/data"; // Import projects array

const Projects = () => {
  return (
    <div className="mt-6">
      <h3 className="text-[16px] font-normal max-sm:font-bold border-b-[1px] border-white mb-2">
        PROJECTS
      </h3>
      <ul className="mt-4 text-[12px]">
        {projects.map((project) => (
          <li key={project.id} className="mt-2">
            <span className="text-[15px] font-semibold">{project.title}</span>
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
