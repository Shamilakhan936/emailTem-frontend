import { HeaderData, Achievement, Certification, Education, Experience, Language, Project, SkillCategory } from "../types/datatypes"; 

const data: HeaderData = {
  name: "John Doe",
  role: "Full Stack Developer",
  phone: "+123 456 7890",
  email: "johndoe@example.com",
  github: "https://github.com/johndoe",
  location: "New York, USA",
};




export const achievements: Achievement[] = [
  {
    id: 1,
    title: "Top Performer Award",
    description: "Recognized as the top performer for exceeding quarterly targets.",
  },
  {
    id: 2,
    title: "Hackathon Winner",
    description: "Secured 1st place in an international coding hackathon.",
  },
  {
    id: 3,
    title: "Best Employee of the Year",
    description: "Awarded for outstanding contributions and leadership skills.",
  },
];




export const certifications: Certification[] = [
  {
    id: 1,
    title: "Ethical Hacker Essentials",
    organization: "OSCD",
    description: "Fundamentals of ethical hacking, including techniques and practices.",
  },
  {
    id: 2,
    title: "Introduction to Cyber Security",
    organization: "CISCO",
    description: "Comprehensive overview of cybersecurity, including best practices for safeguarding information.",
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Higher Secondary School Certificate",
    institution: "Main Higher Secondary School",
    date: "08/2017 - 08/2019",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "XYZ University",
    date: "09/2019 - 06/2023",
  },
];



export const experience: Experience[] = [
  {
    id: 1,
    role: "Backend Developer",
    company: "Company XYZ",
    date: "01/2021 - 08/2021",
    responsibilities: [
      "Developed and maintained web and software solutions.",
      "Designed and implemented RESTful APIs using modern frameworks.",
      "Worked with databases such as MySQL, MongoDB, and PostgreSQL.",
      "Integrated authentication and authorization mechanisms using JWT.",
      "Deployed and managed websites on cloud platforms.",
      "Designed and implemented API integrations for third-party services.",
    ],
  },
  {
    id: 2,
    role: "Laravel Developer",
    company: "Company ABC",
    date: "08/2020 - 01/2021",
    responsibilities: [
      "Developed and maintained custom software solutions.",
      "Designed and implemented RESTful APIs using Laravel and React.",
      "Developed and deployed scalable applications on cloud platforms.",
      "Built and optimized interactive user interfaces with React.",
      "Implemented database management solutions using MySQL and MongoDB.",
    ],
  },
];





export const languages: Language[] = [
  { name: "English", level: "Native", proficiency: 5 },
  { name: "Urdu", level: "Native", proficiency: 5 },
  { name: "Burushki", level: "Advanced", proficiency: 4 },
  { name: "Shina", level: "Intermediate", proficiency: 3 },
];

export const projects: Project[] = [
  {
    id: 1,
    title: "TaskFlow",
    description: "A productivity web app that helps users track their daily tasks with an intuitive interface.",
  },
  {
    id: 2,
    title: "EduSync",
    description: "An online learning platform that connects students with courses and tutors worldwide.",
  },
  {
    id: 3,
    title: "HealthTrack",
    description: "A mobile-friendly app designed to monitor personal health metrics and fitness goals.",
  },
  {
    id: 4,
    title: "ShopEase",
    description: "An e-commerce platform offering seamless shopping experiences with AI-based recommendations.",
  },
  {
    id: 5,
    title: "DevConnect",
    description: "A networking platform for developers to share knowledge, collaborate, and showcase projects.",
  },
];


export const skills: SkillCategory[] = [
  { id: 1, skills: ["PHP", "Laravel", "CSS", "Cybersecurity"] },
  { id: 2, skills: ["HTML", "HTML5", "JavaScript", "MySQL"] },
  { id: 3, skills: ["React", "MongoDB", "Node.js"] },
  { id: 4, skills: ["Python", "Django", "TypeScript"] },
  { id: 5, skills: ["Java", "Kotlin", "Oracle"] },
];

export default data;
