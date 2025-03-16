"use client";

import { NextPage } from "next";
import { useState, useEffect } from "react";
import LeftColumn from "./LeftColumn"; 
import RightColumn from "./RightColumn"; 

const defaultHeader = {
  name: '',
  title: '',
  location: '',
  email: '',
  phone: '',
  image: '',
  role: '',
  github: '',
  summary: ''
};

const defaultExperience = [{
  id: 1,
  company: '',
  position: '',
  role: '',
  city: '',
  date: '',
  description: '',
  responsibilities: []
}];

const defaultEducation = [{
  id: 1,
  institution: '',
  degree: '',
  field: '',
  date: '',
  city: ''
}];

const defaultLanguages = [{
  id: 1,
  name: '',
  level: '',
  proficiency: 0
}];

const defaultSkills = [{
  id: 1,
  name: '',
  skills: []
}];

const defaultAchievements = [{
  id: 1,
  icon: '',
  title: '',
  description: '',
  achievement: ''
}];

const defaultCertifications = [{
  id: 1,
  title: '',
  organization: '',
  description: '',
  date: '',
  issuer: ''
}];

const defaultProjects = [{
  id: 1,
  title: '',
  name: '',
  description: '',
  technologies: []
}];

const defaultPassion = [{
  id: 1,
  title: '',
  name: '',
  description: ''
}];

// A4 dimensions in pixels at 72 DPI
// A4 is 210mm × 297mm which is approximately 595 × 842 points
const A4_WIDTH = 595;
const A4_HEIGHT = 842;

const Home: NextPage = () => {
  const [showPreview, setShowPreview] = useState(false);
  const [scale, setScale] = useState(1);
  const [hasMultiplePages, setHasMultiplePages] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate scale based on window width
  useEffect(() => {
    const handleResize = () => {
      // For desktop
      if (window.innerWidth > 768) {
        const maxWidth = Math.min(window.innerWidth - 80, 840);
        setScale(maxWidth / A4_WIDTH);
      } else {
        // For mobile - base size on available width minus padding
        setScale((window.innerWidth - 40) / A4_WIDTH);
      }
    };
    
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Check if content requires multiple pages
  useEffect(() => {
    const checkContentHeight = () => {
      const content = document.getElementById('resume-content');
      if (content) {
        setHasMultiplePages(content.scrollHeight > A4_HEIGHT);
      }
    };
    
    // Allow time for rendering
    const timer = setTimeout(() => checkContentHeight(), 500);
    return () => clearTimeout(timer);
  }, []);

  const togglePreview = () => {
    setShowPreview(!showPreview);
  };
  
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };
  
  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className="w-full flex flex-col items-center my-4">
      {/* Mobile preview toggle button */}
      <div className="md:hidden w-full px-4 mb-4">
        <button 
          onClick={togglePreview} 
          className="w-full py-2 bg-blue-600 text-white rounded-md"
        >
          {showPreview ? "Exit Preview" : "View PDF Preview"}
        </button>
      </div>
      
      {/* Preview notice */}
      <div className="w-full text-center mb-4">
        <div className="inline-block bg-yellow-100 border border-yellow-400 text-yellow-700 px-4 py-2 rounded">
          This is a preview of how your resume will appear as a PDF
        </div>
      </div>
      
      {/* Mobile preview modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4 md:hidden">
          <div className="bg-white rounded-lg p-4 w-full max-h-screen flex flex-col">
            <div className="mb-4 flex justify-between items-center">
              <h3 className="text-lg font-bold">PDF Preview</h3>
              <button 
                onClick={togglePreview}
                className="text-gray-600 hover:text-gray-900"
              >
                ✕
              </button>
            </div>
            
            <div className="flex-1 overflow-auto">
              <div 
                style={{
                  width: `${A4_WIDTH * scale}px`,
                  height: `${A4_HEIGHT * scale}px`,
                  transform: `scale(${scale})`,
                  transformOrigin: 'top center'
                }}
                className="bg-white shadow border overflow-hidden mx-auto"
              >
                <div className="flex flex-row h-full">
                  {/* Left column */}
                  <div className="w-1/3 h-full">
                    <LeftColumn 
                      skills={defaultSkills}
                      achievements={defaultAchievements}
                      certifications={defaultCertifications}
                      projects={defaultProjects}
                      passion={defaultPassion}
                    />
                  </div>
                  
                  {/* Right column */}
                  <div className="w-2/3 h-full">
                    <RightColumn
                      header={defaultHeader}
                      experience={defaultExperience}
                      education={defaultEducation}
                      languages={defaultLanguages}
                    />
                  </div>
                </div>
              </div>
            </div>
            
            {hasMultiplePages && (
              <div className="mt-4 flex justify-center space-x-4">
                <button 
                  onClick={prevPage}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
                >
                  Previous Page
                </button>
                <span className="py-2">Page {currentPage}</span>
                <button 
                  onClick={nextPage}
                  className="px-4 py-2 bg-gray-200 rounded"
                >
                  Next Page
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      
      {/* Desktop view */}
      <div className="hidden md:block relative">
        <div
          id="resume-content" 
          style={{
            width: `${A4_WIDTH}px`,
            minHeight: `${A4_HEIGHT}px`,
            transform: `scale(${scale})`,
            transformOrigin: 'top center',
          }}
          className="bg-white shadow-lg border border-gray-300"
        >
          <div className="flex flex-row h-full">
            {/* Left column */}
            <div className="w-1/3 h-full">
              <LeftColumn 
                skills={defaultSkills}
                achievements={defaultAchievements}
                certifications={defaultCertifications}
                projects={defaultProjects}
                passion={defaultPassion}
              />
            </div>
            
            {/* Right column */}
            <div className="w-2/3 h-full">
              <RightColumn
                header={defaultHeader}
                experience={defaultExperience}
                education={defaultEducation}
                languages={defaultLanguages}
              />
            </div>
          </div>
        </div>
        
        {/* Page controls for desktop */}
        {hasMultiplePages && (
          <div className="mt-4 flex justify-center space-x-4">
            <button 
              onClick={prevPage}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
            >
              Previous Page
            </button>
            <span className="py-2">Page {currentPage}</span>
            <button 
              onClick={nextPage}
              className="px-4 py-2 bg-gray-200 rounded"
            >
              Next Page
            </button>
          </div>
        )}
      </div>
      
      {/* Mobile condensed view (when not in preview) */}
      <div className="md:hidden w-full mx-auto px-4 mt-4">
        {!showPreview && (
          <div className="bg-white shadow-md rounded-lg border border-gray-200">
            <div className="flex flex-col">
              {/* Left column content */}
              <div className="w-full">
                <LeftColumn 
                  skills={defaultSkills}
                  achievements={defaultAchievements}
                  certifications={defaultCertifications}
                  projects={defaultProjects}
                  passion={defaultPassion}
                />
              </div>
              
              {/* Right column content */}
              <div className="w-full">
                <RightColumn
                  header={defaultHeader}
                  experience={defaultExperience}
                  education={defaultEducation}
                  languages={defaultLanguages}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home; 