'use client';

import { useState } from 'react';
import Resume from './components/Resume/index';
import HeaderForm from './components/forms/HeaderForm';
import ExperienceForm from './components/forms/ExperienceForm';
import EducationForm from './components/forms/EducationForm';
import AboutForm from './components/forms/AboutForm';
import type { HeaderData, Experience, Education, SkillCategory, Achievement, Certification, Language, Project, Passion } from './types/datatypes';
import headerData, { 
  experience as initialExperience,
  education as initialEducation,
  languages as initialLanguages,
  skills as initialSkills,
  achievements as initialAchievements,
  certifications as initialCertifications,
  projects as initialProjects,
  passion as initialPassion
} from './lib/data';

type TabType = 'header' | 'experience' | 'education' | 'skills';

const tabs: { id: TabType; label: string }[] = [
  { id: 'header', label: 'HEADER' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'education', label: 'EDUCATION' },
  { id: 'skills', label: 'ABOUT' }
];

export default function Home() {
  const [activeTab, setActiveTab] = useState<TabType>('header');
  const [profileImage, setProfileImage] = useState<string>("/images/default-avatar.png");
  const [resumeData, setResumeData] = useState({
    header: headerData,
    experience: initialExperience,
    education: initialEducation,
    languages: initialLanguages,
    skills: initialSkills.map(category => ({
      ...category,
      name: category.id === 1 ? 'Backend & DevOps' :
            category.id === 2 ? 'Frontend & JavaScript' :
            category.id === 3 ? 'Databases' :
            category.id === 5 ? 'Mobile Development' : 'Other'
    })),
    achievements: initialAchievements,
    certifications: initialCertifications,
    projects: initialProjects,
    passion: initialPassion
  });

  const handleHeaderChange = (data: HeaderData) => {
    setResumeData(prev => ({ ...prev, header: data }));
  };

  const handleProfileImageChange = (image: string) => {
    setProfileImage(image);
  };

  const handleExperienceChange = (data: Experience[]) => {
    setResumeData(prev => ({ ...prev, experience: data }));
  };

  const handleEducationChange = (data: Education[]) => {
    setResumeData(prev => ({ ...prev, education: data }));
  };

  const handleAboutChange = (data: {
    achievements: Achievement[],
    certifications: Certification[],
    languages: Language[],
    projects: Project[],
    passion: Passion[],
    skills: SkillCategory[]
  }) => {
    setResumeData(prev => ({
      ...prev,
      achievements: data.achievements,
      certifications: data.certifications,
      languages: data.languages,
      projects: data.projects,
      passion: data.passion,
      skills: data.skills
    }));
  };

  const renderForm = () => {
    switch (activeTab) {
      case 'header':
        return (
          <HeaderForm 
            data={resumeData.header} 
            onChange={handleHeaderChange} 
            profileImage={profileImage}
            onProfileImageChange={handleProfileImageChange}
          />
        );
      case 'experience':
        return <ExperienceForm data={resumeData.experience} onChange={handleExperienceChange} />;
      case 'education':
        return <EducationForm data={resumeData.education} onChange={handleEducationChange} />;
      case 'skills':
        return (
          <AboutForm
            achievements={resumeData.achievements}
            certifications={resumeData.certifications}
            languages={resumeData.languages}
            projects={resumeData.projects}
            passion={resumeData.passion}
            skills={resumeData.skills}
            onChange={handleAboutChange}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-[1440px] mx-auto flex gap-8">
        <div className="w-[380px] flex-shrink-0">
          <div className="bg-white rounded-lg shadow-sm">
            <div className="sticky top-6 overflow-y-auto ">
              <div className="border-b border-gray-200">
                <nav className="flex" aria-label="Tabs">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`
                        grow py-4 px-1 text-center border-b-2 font-medium text-sm
                        ${activeTab === tab.id
                          ? 'border-[#1a4977] text-[#1a4977]'
                          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                        }
                      `}
                    >
                      {tab.label}
                    </button>
                  ))}
                </nav>
              </div>
              <div className="p-6">
                {renderForm()}
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-white rounded-lg shadow-sm">
          <Resume
            header={resumeData.header}
            experience={resumeData.experience}
            education={resumeData.education}
            languages={resumeData.languages}
            skills={resumeData.skills}
            achievements={resumeData.achievements}
            certifications={resumeData.certifications}
            projects={resumeData.projects}
            passion={resumeData.passion}
            profileImage={profileImage}
          />
        </div>
      </div>
    </div>
  );
} 