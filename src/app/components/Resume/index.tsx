"use client";

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
import Certifications from '../Certifications';
import Projects from '../Projects';
import Passions from '../Passions';

interface ResumeProps extends Omit<ResumeData, 'header'> {
  header: HeaderData;
  profileImage: string;
}

// A4 dimensions in mm
const A4_HEIGHT_MM = 297;
const A4_WIDTH_MM = 210;

// A4 dimensions in pixels at 96 DPI (standard screen resolution)
// A4 is 210mm × 297mm which is approximately 794 × 1123 pixels at 96 DPI
const A4_HEIGHT_PX = 1123;
const A4_WIDTH_PX = 794;

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
      <div className="resume-container">
        {/* Single Page Resume */}
        <div className="bg-white w-[210mm] relative shadow-md">
          <div className="flex h-full">
            {/* Left Column - White Background (2/3 of A4 width) */}
            <div className="left-column w-[140mm] bg-white pt-[40px] pl-[40px] pr-[25px] pb-[20px]">
              <div className="header-section">
                <Header data={header} />
              </div>
              
              <div className="summary-section text-[16px]">
                <Summary title="SUMMARY" description={header.summary || ''} />
              </div>

              <div className="left-section mt-4" data-section="experience">
                <ExperienceSection data={experience} />
              </div>

              <div className="left-section mt-4" data-section="education">
                <EducationSection data={education} />
              </div>

              <div className="left-section mt-4" data-section="languages">
                <Languages data={languages} />
              </div>
              
              
            </div>

            {/* Right Column - Blue Background (1/3 of A4 width) */}
            <div className="right-column w-[70mm] bg-[#22405c] border-t-[20px] border-[#182d40] text-white pt-[30px] px-6 pb-[20px]">
              <div className="flex justify-center mb-8">
                <div className="w-[115px] h-[115px]">
                  <ProfileImage src={profileImage} />
                </div>
              </div>
              
              <div className="section" data-section="achievements">
                <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
                  KEY ACHIEVEMENTS
                </h2>
                <Achievements data={achievements} />
              </div>

              <div className="section mt-8" data-section="skills">
                <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
                  SKILLS
                </h2>
                <Skills data={skills} />
              </div>
              
              <div className="section mt-8" data-section="projects">
                <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
                  PROJECTS
                </h2>
                <Projects data={projects} />
              </div>
              
              <div className="section mt-8" data-section="passions">
                <h2 className="text-white uppercase font-medium border-b border-gray-300 pb-2 mb-4">
                  PASSIONS
                </h2>
                <Passions data={passion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume; 