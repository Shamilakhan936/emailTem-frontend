import { HeaderData, Achievement, Certification, Education, Experience, Language, Project, SkillCategory, Passion } from "../types/datatypes";

const data: HeaderData = {
  name: "Johnathan Alexander Doe",
  role: "Senior Full Stack Developer",
  phone: "+1 800 555 1234",
  email: "john.doe@example.com",
  github: "https://github.com/john-doe",
  location: "San Francisco, CA, USA",
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
  {
    id: 3,
    icon: "ribbon",
    title: "Best Employee of the Year",
    description: "Awarded for outstanding contributions to software development and team leadership.",
  },
  {
    id: 4,
    icon: "award",
    title: "Best Student of the Year",
    description: "Awarded for outstanding contributions to Student and team leadership.",
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
  {
    id: 3,
    title: "Certified Kubernetes Administrator (CKA)",
    organization: "Linux Foundation",
    description: "Certified as a Kubernetes administrator with advanced knowledge of container orchestration.",
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: "Higher Secondary School Certificate",
    institution: "Springfield High School",
    date: "09/2013 - 06/2015",
  },
  {
    id: 2,
    degree: "Bachelor of Computer Science",
    institution: "Tech University",
    date: "09/2015 - 06/2019",
  },
  {
    id: 3,
    degree: "Master of Science in Computer Engineering",
    institution: "Stanford University",
    date: "09/2019 - 06/2021",
  },
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
  {
    id: 3,
    title: "HealthTrack",
    description: "A mobile-friendly app designed to monitor personal health metrics and fitness goals.",
  },
  {
    id: 4,
    title: "HealthTrack",
    description: "A mobile-friendly app designed to monitor personal health metrics and fitness goals.",
  },

];

export const skills: SkillCategory[] = [
  { id: 1, skills: [ "Laravel",  "Docker", "AWS", "Microservices"] },
  { id: 2, skills: [ "JavaScript", "TypeScript", "React", "Node.js"] },
  { id: 3, skills: ["MongoDB", "PostgreSQL", "Redis", "Firebase"] },
  { id: 5, skills: ["Java", "Spring Boot", "Kotlin", "Android "] },
];

export default data;
