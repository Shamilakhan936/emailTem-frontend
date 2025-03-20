"use client";

import { FC } from 'react';
import { ResumeData, HeaderData } from '../../types/datatypes';
import Experience from '../../parentComponents/ExperiencesMain';
import Education from '../../parentComponents/EducationMain';
import SummaryNew from '../../parentComponents/SummaryMain';
import AchievementsNew from '../../parentComponents/AchievementsNew';

interface TemplateProps extends Omit<ResumeData, 'header'> {
  header: HeaderData;
  profileImage: string;
}

const MinimalTemplate: FC<TemplateProps> = ({ 
  header, 
  experience, 
  education, 
  languages, 
  skills, 
  achievements,
  projects,
  passion,
  profileImage 
}) => {
  return (
    <div className="bg-white w-full min-h-full p-8 font-[system-ui]">
      <div className="max-w-[800px] mx-auto">
        {/* Header Section */}
        <div className="mb-8">
          <h1 className="text-[28px] font-bold text-[#333] mb-1">{header.name}</h1>
          <h2 className="text-[16px] text-[#666] mb-2">
            {header.title} {header.role && <span className="mx-2">|</span>} {header.role}
          </h2>
          <div className="text-[14px] text-[#666] flex gap-4">
            {header.location && <span>{header.location}</span>}
            {header.phone && <span>{header.phone}</span>}
            {header.email && <span>{header.email}</span>}
            {header.github && <span>{header.github}</span>}
          </div>
        </div>

        {/* Summary Section */}
        {header.summary && (
          <div className="mb-8">
            <h2 className="text-[16px] font-bold text-[#333] uppercase mb-2 border-b border-[#333] pb-1">
              Summary
            </h2>
            <p className="text-[14px] text-[#444] leading-relaxed">
              {header.summary}
            </p>
          </div>
        )}

        {/* Experience Section */}
        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#333] uppercase mb-2 border-b border-[#333] pb-1">
            Experience
          </h2>
          <div className="space-y-6">
            {experience.map((exp, index) => (
              <div key={index} className="text-[14px]">
                <div className="flex justify-between items-start mb-1">
                  <div>
                    <h3 className="font-semibold text-[#333]">{exp.position}</h3>
                    <div className="text-[#666]">{exp.company}</div>
                  </div>
                  <div className="text-[#666] text-right">
                    <div>{exp.city}</div>
                    <div>{exp.date}</div>
                  </div>
                </div>
                <ul className="list-disc ml-4 text-[#444] space-y-1">
                  {exp.responsibilities?.map((resp, idx) => (
                    <li key={idx}>{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="mb-8">
          <h2 className="text-[16px] font-bold text-[#333] uppercase mb-2 border-b border-[#333] pb-1">
            Education
          </h2>
          <div className="space-y-4">
            {education.map((edu, index) => (
              <div key={index} className="text-[14px]">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-semibold text-[#333]">{edu.degree}</h3>
                    <div className="text-[#666]">{edu.institution}</div>
                  </div>
                  <div className="text-[#666] text-right">
                    <div>{edu.city}</div>
                    <div>{edu.date}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Key Achievements Section */}
        {achievements && achievements.length > 0 && (
          <div className="mb-8">
            <h2 className="text-[16px] font-bold text-[#333] uppercase mb-2 border-b border-[#333] pb-1">
              Key Achievements
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-[14px]">
                  <h3 className="font-semibold text-[#333] mb-1">{achievement.title}</h3>
                  <p className="text-[#444]">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Section */}
        {skills && skills.length > 0 && (
          <div className="mb-8">
            <h2 className="text-[16px] font-bold text-[#333] uppercase mb-2 border-b border-[#333] pb-1">
              Skills
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {skills.map((category, index) => (
                <div key={index} className="text-[14px]">
                  <h3 className="font-semibold text-[#333] mb-1">{category.name}</h3>
                  <div className="text-[#444]">
                    {category.skills.join(', ')}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MinimalTemplate; 