import { Achievement, Certification, Project, Passion, SkillCategory } from '../types/datatypes';
import SkillsSection from "./Skills";
import Achievements from "./Achievements";
import Certifications from "./Certifications";
import Projects from "./Projects";
import Passions from "./Passions";

interface LeftColumnProps {
  skills: SkillCategory[];
  achievements: Achievement[];
  certifications: Certification[];
  projects: Project[];
  passion: Passion[];
}

export default function LeftColumn({ skills, achievements, certifications, projects, passion }: LeftColumnProps) {
  return (
    <div className="bg-white px-6 py-5 md:px-8 md:pt-12">
      <SkillsSection data={skills} />
      <Achievements data={achievements} />
      <Certifications data={certifications} />
      <Projects data={projects} />
      <Passions data={passion} />
    </div>
  );
}
