"use client";

import { FC } from 'react';
import { ResumeData, HeaderData } from '../../types/datatypes';
import { IoDiamondOutline } from "react-icons/io5";



interface TemplateProps extends Omit<ResumeData, 'header'> {
  header: HeaderData;
  profileImage: string;
  isFirstPage: boolean;
}

const ProfessionalTemplate: FC<TemplateProps> = ({ 
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
    <div className="bg-white w-full min-h-full">
      <div className="flex">
        {/* Left Sidebar - Teal colored */}
        <div className="w-[250px] bg-[#0D6B5E] text-white p-[20px]">
          <div className="mb-[20px]">
            <h1 className="text-[28px] font-bold mb-1">{header.name}</h1>
            
          </div>

          {/* Key Achievements Section */}
          <div className="mb-[8px]">
            <h2 className="text-[20px] font-bold uppercase mb-3 border-b border-white pb-1">
              Key Achievements
            </h2>
            <div className="space-y-4">
              {achievements?.map((achievement, index) => (
                <div key={index} className="">
                  <div className="flex items-center gap-2">
                    {/* <span className="mt-1">✓</span> */}
                    <IoDiamondOutline className=" w t22t-white"/>
                    <div>
                      <h3 className="font-semibold text-[16px] text-white mb-1">{achievement.title}</h3>
                      <p className=" leading-snug">{achievement.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certification Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold uppercase mb-3 border-b border-white/30 pb-1">
              Certification
            </h2>
            <div className="space-y-3">
              {projects?.map((cert, index) => (
                <div key={index} className="text-[13px]">
                  <h3 className="font-semibold mb-1">{cert.title}</h3>
                  <p className="opacity-90 leading-snug">{cert.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Passions Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold uppercase mb-3 border-b border-white/30 pb-1">
              Passions
            </h2>
            <div className="space-y-3">
              {passion?.map((item, index) => (
                <div key={index} className="text-[13px]">
                  <div className="flex items-start gap-2">
                    <span className="mt-1">⚡</span>
                    <div>
                      <h3 className="font-semibold mb-1">{item.title}</h3>
                      <p className="opacity-90 leading-snug">{item.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Languages Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold uppercase mb-3 border-b border-white/30 pb-1">
              Languages
            </h2>
            <div className="space-y-2">
              {languages?.map((lang, index) => (
                <div key={index} className="text-[13px] flex justify-between">
                  <span>{lang.name}</span>
                  <span className="opacity-90">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Favorite Quote Section */}
          <div className="mt-auto">
            <h2 className="text-[14px] font-bold uppercase mb-3 border-b border-white/30 pb-1">
              Favorite Quote
            </h2>
            <div className="text-[13px] italic opacity-90">
              "Quality means doing it right when no one is looking."
              <div className="mt-1 text-[12px]">- Henry Ford</div>
            </div>
          </div>
        </div>

        {/* Main Content Area */}
        <div className="flex-1 p-[20px]">
        <div className=" text-[13px] mb-[20px]">
          <div>

            <h2 className="text-[18px] text-[#1ab0b3] font-normal ">{header.title}</h2>
          </div>
          <div className="flex text-[13px] gap-[10px]">

              <div>{header.email}</div>
              {/* <div>{header.phone}</div> */}
              <div>{header.location}</div>
              {header.github && <div>{header.github}</div>}
          </div>
            </div>
          {/* Summary Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold text-[#333] uppercase mb-3 border-b border-gray-300 pb-1">
              Summary
            </h2>
            <p className="text-[13px] text-[#444] leading-relaxed">
              {header.summary}
            </p>
          </div>

          {/* Experience Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold text-[#333] uppercase mb-3 border-b border-gray-300 pb-1">
              Experience
            </h2>
            <div className="space-y-6">
              {experience?.map((exp, index) => (
                <div key={index} className="text-[13px]">
                  <div className="flex justify-between items-start mb-2">
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
            <h2 className="text-[14px] font-bold text-[#333] uppercase mb-3 border-b border-gray-300 pb-1">
              Education
            </h2>
            <div className="space-y-4">
              {education?.map((edu, index) => (
                <div key={index} className="text-[13px]">
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

          {/* Skills Section */}
          <div className="mb-8">
            <h2 className="text-[14px] font-bold text-[#333] uppercase mb-3 border-b border-gray-300 pb-1">
              Skills
            </h2>
            <div className="text-[13px] text-[#444]">
              {skills?.map((category, index) => (
                <div key={index} className="mb-2">
                  <span className="font-semibold">{category.name}:</span>{' '}
                  <span>{category.skills.join(', ')}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfessionalTemplate; 