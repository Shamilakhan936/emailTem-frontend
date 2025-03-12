import { FC } from 'react';
import { HeaderData, Experience as ExperienceType, Education as EducationType, Language, SkillCategory, Achievement, Certification, Project, Passion, ResumeData } from '../../types/datatypes';
import Header from '../Header';
import Summary from '../Summary';
import ExperienceSection from '../Experience';
import EducationSection from '../Education';
import Languages from '../Languages';
import Skills from '../Skills';
import Achievements from '../Achievements';
import ProfileImage from '../ProfileImage';

interface ResumeProps extends Omit<ResumeData, 'header'> {
  header: HeaderData;
  profileImage: string;
}

const Resume: FC<ResumeProps> = ({ 
  header,
  experience,
  education,
  languages,
  skills,
  achievements,
  certifications,
  projects,
  passion,
  profileImage
}) => {
  return (
    <div className="bg-white">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Column - White Background */}
        <div className="col-span-2 bg-white pt-[60px] pl-[60px]  pb-[20px]">
          <Header data={header} />
          
          <div className="mt-8">
            <Summary title="Professional Summary" description={header.summary || ''} />
          </div>

          <div className="mt-8">
            <ExperienceSection data={experience.slice(0, 1)} />
          </div>

          <div className="mt-8">
            <EducationSection data={education.slice(0, 1)} />
          </div>

          <div className="mt-8">
            <Languages data={languages.slice(0, 1)} />
          </div>
        </div>

        {/* Right Column - Blue Background */}
        <div className="bg-[#22405c]  border-t-[20px] border-[#182d40] text-white pt-[30px] px-6 pb-[20px] ml-8">
          <div className="flex justify-center mb-8">
            <div className="w-[70px] h-[70px]">
              <ProfileImage src={profileImage} />
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
              Key Achievements
            </h2>
            <Achievements data={achievements.slice(0, 1)} />
          </div>

          <div className="mt-8">
            <Skills data={skills.slice(0, 1)} />
          </div>

          <div className="mt-8">
            <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
              Certifications
            </h2>
            {certifications.slice(0, 1).map(cert => (
              <div key={cert.id} className="mb-4">
                <h3 className="font-medium text-white">{cert.title}</h3>
                <p className="text-white text-sm mt-1">{cert.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
              Projects
            </h2>
            {projects.slice(0, 1).map(project => (
              <div key={project.id} className="mb-4">
                <h3 className="font-medium text-white">{project.title}</h3>
                <p className="text-white text-sm mt-1">{project.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
              Passion
            </h2>
            {passion.slice(0, 1).map(item => (
              <div key={item.id} className="mb-4">
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="text-white text-sm mt-1">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume; 