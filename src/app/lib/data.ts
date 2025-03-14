import { HeaderData, Achievement, Certification, Education, Experience, Language, Project, SkillCategory, Passion } from "../types/datatypes";

const data: HeaderData = {
  name: "Johnathan Alexander Doe",
  role: "Senior Full Stack Developer",
  phone: "+1 800 555 1234",
  email: "john.doe@example.com",
  github: "https://github.com/john-doe",
  location: "San Francisco, CA, USA",
  summary: "Experienced Full Stack Developer with a proven track record in developing scalable web applications and leading development teams. Proficient in modern web technologies and best practices."
};

export const achievements: Achievement[] = [
  {
    id: 1,
    icon: "trophy",
    title: "Top Performer Award",
    description: "Recognized as the top performer for exceeding quarterly targets over 3 years.",
  },
  {
    id: 2,
    icon: "medal",
    title: "Hackathon Winner",
    description: "Secured 1st place in an international coding hackathon held in Berlin.",
  },
  
  
];

export const passion: Passion[] = [
  {
    id: 1,
    title: "Software Development",
    description: "Passionate about creating scalable software solutions and improving user experiences.",
  },
 
 
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: "Certified Ethical Hacker (CEH)",
    organization: "EC-Council",
    description: "Mastered the skills necessary to protect against cyber threats through ethical hacking techniques.",
  },
  {
    id: 2,
    title: "AWS Certified Solutions Architect",
    organization: "Amazon Web Services",
    description: "Acquired expertise in designing and deploying scalable, highly available systems on AWS.",
  },
  
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    date: "09/2015 - 06/2019",
    city: "New York City, NY"
  },
  {
    id: 2,
    degree: "Higher Secondary School Certificate",
    institution: "Springfield High School",
    date: "09/2013 - 06/2015",
    city: "Springfield, IL"
  }
];

export const experience: Experience[] = [
  {
    id: 1,
    role: "Senior Backend Developer",
    company: "Tech Solutions Inc.",
    city: "San Francisco, CA",
    date: "02/2021 - Present",
    responsibilities: [
      "Led the development of scalable backend systems for major clients.",
      "Designed and optimized RESTful APIs using Node.js and Express.",
      "Implemented microservices architecture to improve system efficiency.",
      "Collaborated with frontend teams to ensure seamless API integration.",
      "Mentored junior developers on backend technologies and best practices.",
      "Managed cloud infrastructure using AWS, ensuring high availability.",
      "Developed real-time data processing systems using Kafka and AWS Lambda.",
    ],
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "XYZ Corp.",
    city: "New York, NY",
    date: "05/2019 - 01/2021",
    responsibilities: [
      "Developed and maintained web applications using React, Node.js, and MongoDB.",
      "Worked on both client-side and server-side components, ensuring seamless functionality.",
      "Integrated third-party APIs for real-time data updates and push notifications.",
      "Collaborated with UX/UI designers to improve user interfaces.",
      "Optimized website performance to reduce load times and increase user engagement.",
      "Maintained and updated application security protocols, ensuring data protection.",
      "Utilized Docker for containerization and streamlined deployment processes.",
    ],
  },
  {
    id: 3,
    role: "Junior Web Developer",
    company: "ABC Enterprises",
    city: "Los Angeles, CA",
    date: "06/2017 - 04/2019",
    responsibilities: [
      "Assisted in the development of internal tools and client-facing applications.",
      "Worked on bug fixes, refactoring code, and improving existing website features.",
      "Built responsive and dynamic pages using HTML5, CSS3, and JavaScript.",
      "Integrated CMS (Content Management Systems) for easy content updates.",
      "Collaborated with senior developers to implement best practices and coding standards.",
      "Contributed to weekly sprint meetings, discussing project timelines and progress.",
    ],
  },
];

export const languages: Language[] = [
  { name: "English", level: "Native", proficiency: 5 },
  { name: "Spanish", level: "Fluent", proficiency: 4 },
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
 
];

export const skills: SkillCategory[] = [
  { 
    id: 1, 
    name: 'Backend & DevOps',
    skills: [ "html", "css", "javascript", "Docker", "AWS"] 
  },
  { 
    id: 2, 
    name: 'Frontend & JavaScript',
    skills: [ "JavaScript", "TypeScript", "React", "Node.js"] 
  },
  
];

export default data;
