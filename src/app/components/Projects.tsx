import { Project } from '../types/datatypes';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  if (!data || data.length === 0) return null;

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold mb-4">PROJECTS</h2>
      <div className="space-y-4">
        {data.map((project) => (
          <div key={project.id} className="border-b border-gray-200 pb-4 last:border-0">
            <h3 className="font-medium text-base">{project.title}</h3>
            <p className="text-sm text-gray-500">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 