export interface HeaderData {
  name: string;
  role: string;
  phone: string;
  email: string;
  github: string;
  location: string;
  summary: string;
}

export interface Achievement {
  id: number;
  icon: string;
  title: string;
  description: string;
}

export interface Certification {
  id: number;
  title: string;
  organization: string;
  description: string;
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  date: string;
  city: string;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  city: string;
  date: string;
  responsibilities: string[];
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export interface Project {
  id: number;
  title: string;
  description: string;
}

export interface Passion {
  id: number;
  title: string;
  description: string;
}

export interface SkillCategory {
  id: number;
  name: string;
  skills: string[];
}

export interface ResumeData {
  header: HeaderData;
  experience: Experience[];
  education: Education[];
  languages: Language[];
  skills: SkillCategory[];
  achievements: Achievement[];
  certifications: Certification[];
  projects: Project[];
  passion: Passion[];
}
  