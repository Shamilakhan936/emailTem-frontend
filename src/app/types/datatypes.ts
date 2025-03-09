export type Achievement = {
    id: number;
    title: string;
    description: string;
  };
  

  export interface HeaderData {
    name: string;
    role: string;
    phone: string;
    email: string;
    github: string;
    location: string;
  }
  

  export type Certification = {
    id: number;
    title: string;
    organization: string;
    description: string;
  };
  
  export type Education = {
    id: number;
    degree: string;
    institution: string;
    date: string;
  };
  


  export type Experience = {
    id: number;
    role: string;
    company: string;
    date: string;
    responsibilities: string[];
  };
  

  export type Language = {
    name: string;
    level: string;
    proficiency: number; 
  };
  

  export interface Project {
    id: number;
    title: string;
    description: string;
  }
  
  export interface SkillCategory {
    id: number;
    skills: string[];
  }
  