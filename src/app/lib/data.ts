import { HeaderData, Achievement, Certification, Education, Experience, Language, Project, SkillCategory, Passion } from "../types/datatypes";

const data: HeaderData = {
  name: "Johnathan Alexander Doe",
  title: "Senior Full Stack Developer",
  role: "Senior Full Stack Developer",
  phone: "+1 800 555 1234",
  email: "john.doe@example.com",
  github: "https://github.com/john-doe",
  location: "San Francisco, CA, USA",
  summary: "Experienced Full Stack Developer with a proven track record in developing scalable web applications and leading development teams. Proficient in modern web technologies and best practices.",
  image: ""
};

export const achievements: Achievement[] = [
  {
    id: 1,
    icon: "trophy",
    title: "Top Performer Award",
    description: "Recognized as the top performer for exceeding quarterly targets over 3 years.",
    achievement: "Exceeded quarterly targets consistently"
  },
 
];

export const passion: Passion[] = [
  {
    id: 1,
    title: "Software Development",
    name: "Software Development",
    description: "Passionate about creating scalable software solutions and improving user experiences."
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    description: "Mastered the skills necessary to protect against cyber threats through ethical hacking techniques.",
    date: "2022",
    issuer: "EC-Council"
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    description: "Acquired expertise in designing and deploying scalable, highly available systems on AWS.",
    date: "2021",
    issuer: "Amazon Web Services"
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    date: "09/2015 - 06/2019",
    city: "New York City, NY",
    field: "Computer Science"
  },
 
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "Tech Solutions Inc.",
    position: "Senior Backend Developer",
    city: "San Francisco, CA",
    date: "02/2021 - Present",
    description: "Led backend development team and implemented scalable solutions",
    responsibilities: [
      "Led the development of scalable backend systems for major clients.",
      "Designed and optimized RESTful APIs using Node.js and Express.",
      "Implemented microservices architecture to improve system efficiency.",
      "Collaborated with frontend teams to ensure seamless API integration."
    ]
  },
  
];

export const languages: Language[] = [
  { id: 1, name: "English", level: "Native", proficiency: 5 },
  { id: 2, name: "Spanish", level: "Fluent", proficiency: 4 }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow",
    name: "TaskFlow",
    description: "A productivity web app that helps users track their daily tasks with an intuitive interface.",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "EduSync",
    name: "EduSync",
    description: "An online learning platform that connects students with courses and tutors worldwide.",
    technologies: ["Vue.js", "Express", "PostgreSQL"]
  }
];

export const skills: SkillCategory[] = [
  { 
    id: 1, 
    name: 'Backend & DevOps',
    skills: ["Node.js", "React.js", "Docker", "AWS", "Typescript"] 
  },
 
];

export default data;
