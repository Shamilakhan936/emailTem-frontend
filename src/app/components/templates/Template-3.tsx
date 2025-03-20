"use client";

import { FC } from 'react';
import { ResumeData, HeaderData } from '../../types/datatypes';
import Header from '../Header';
import Summary from '../Summary';
import ExperienceSection from '../Experience';
import EducationSection from '../Education';
import Languages from '../Languages';
import Skills from '../Skills';
import Achievements from '../Achievements';
import ProfileImage from '../ProfileImage';
import Projects from '../Projects';
import Passions from '../Passions';
import Experience from '../../parentComponents/ExperiencesMain';
import Education from '../../parentComponents/EducationMain';
import SummaryNew from '../../parentComponents/SummaryMain';
import AchievementsNew from '../../parentComponents/AchievementsNew';
import PassionMain from '../../parentComponents/PassionsMain';
import CoursesMain from '../../parentComponents/CoursesMain'




;
interface TemplateProps extends Omit<ResumeData, 'header'> {
  header: HeaderData;
  profileImage: string;
}

// Modern template with a horizontal header and two-column layout
const Template3: FC<TemplateProps> = ({ 
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
    <div className="bg-white w-full h-full rounded-[30px]">
      <div className="resume-container w-[210mm] h-[297mm]">
        <div className="bg-white w-[210mm] h-[297mm] relative">
          {/* Header with image and contact info */}
          <div className="bg-[#] text-white p-8 flex items-center flex-row-reverse justify-between">
            <div className="mr-6">
              <div className="w-[100px] h-[100px] ">
                <ProfileImage src={profileImage} />
              </div>
            </div>
            <div>
              <h1 className="text-[38px] font-bold text-[#343334]">{header.name}</h1>
              <h2 className="text-[20px] text-[#00b6cb] mb-[8px] font-medium">{header.title} <span className="text-[19px]  mx-[4px] text-black">|</span>{header.title} </h2>
              <div className=" text-[14px] flex flex-wrap gap-[30px] ">
                

                <div className=" text-black" >{header.phone}</div>
                <div className=" text-black">{header.email}</div>
                <div className=" text-black">

                
{header.github && <div>{header.github}</div>}
</div>

                
               
              </div>
            </div>
          </div>
          
          {/* Summary */}
          {/* <div className="px-8 py-4 bg-gray-100">
            <Summary title="PROFESSIONAL SUMMARY" description={header.summary || ''} />
          </div> */}
          
          {/* Main content area */}
          <div className="flex p-8 pt-0 gap-6">
            {/* Left column - 60% */}
            <div className="w-[60%]">
              <div className="mb-6">
              <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-[8px]">
              Experience
                </h2>
                
                <Experience data={experience} />
              </div>
              
              
              <div className="mb-6">
              <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-[8px]">
              Education
                </h2>
                <Education data={education} />
              </div>
              <div className="mb-6">
              <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-4">
              Skills
                </h2>
              
                <Skills data={skills} />
              </div>
              
              
            </div>
            
            {/* Right column - 40% */}
            <div className="w-[40%]">
            <div className=" ">
            <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-[8px]">
              Summary
                </h2>

            <SummaryNew title=''  description={header.summary || ''} />
          </div>
          <div className="mb-6">
          <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 ">
             key Achievements
                </h2>
                <AchievementsNew data={achievements} />
              </div>
              
              
              <div className="mb-6">
              <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-[8px]">
            Courses
                </h2>
                
                <CoursesMain data={passion} />
              </div>
              
              
              
              <div className="mb-6">
              <h2 className="text-[#235986] text-[22px] font-semibold uppercase
 border-b-[3px] border-[#235986] pb-1 mb-4">
            PASSIONS
                </h2>
                <h2/>
                <PassionMain data={passion} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Template3; 