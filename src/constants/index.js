import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

import p11 from "../assets/projects/project1/p11.png";
import p12 from "../assets/projects/project1/p12.png";
import p13 from "../assets/projects/project1/p13.png";
import p14 from "../assets/projects/project1/p14.png";
import p15 from "../assets/projects/project1/p15.png";
import p21 from "../assets/projects/project2/p21.png";
import p22 from "../assets/projects/project2/p22.png";
import p23 from "../assets/projects/project2/p23.png";
import p24 from "../assets/projects/project2/p24.png";
import p26 from "../assets/projects/project2/p26.png";
import p27 from "../assets/projects/project2/p27.png";

import pf1 from '../assets/projects/folio/pf1.png';
import pf2 from '../assets/projects/folio/pf2.png';
import pf3 from '../assets/projects/folio/pf3.png';
import pf4 from '../assets/projects/folio/pf4.png';
import pf5 from '../assets/projects/folio/pf5.png';
import pf6 from '../assets/projects/folio/pf6.png';

import chern from '../assets/testimonials/chern.png';
import achanta from '../assets/testimonials/achanta.png';
import attele from '../assets/testimonials/attele.png';

import TripTrek from "../assets/projects/project1/TripTrek.mp4"
import indinenne from "../assets/projects/project2/indinenne.mp4"
export const HERO_CONTENT = `I'm a newly minted Master's graduate in Computer Science with a strong interest in software engineering and full-stack development. I have hands-on experience in building responsive, user-centered web applications with frontend frameworks such as React, HTML, CSS, and JavaScript, and backend frameworks such as Java, Node.js, Django, and Flask. I'm proficient in working with relational and NoSQL databases like PostgreSQL, MySQL and MongoDB and deploying applications on cloud platforms like AWS. I'm looking forward to applying my skills to build scalable, efficient, and effective software solutions in a collaborative engineering environment.`;

export const ABOUT_TEXT = `Curiosity drives everything I do. Whether debugging that frustrating backend bug or designing user flows that are just plain intuitive, I am fascinated by understanding how things tick and how I can make them better. My journey through the tech world has involved me moving from creating dynamic web applications to incorporating cloud services and rolling out scalable solutions—always to create significant user experiences.

With a Master's in Computer Science and a full-stack development skillset, I am both profound and adaptable in all that I do. I thrive in team environments where ideas ever-flow, feedback births growth, and each line of code is something more.

Outside of the screen, I'm eager to learn new tools, discover new technologies, and share what I've learned with others. Team-based applications or side projects, I want to make software that is fun and beneficial to use.

Let’s connect, collaborate, and create.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Project Manager",
    company: "Excelerate",
    description: `Orchestrated cross-functional virtual project teams to tackle real-world business problems. Led Agile sprint planning, coordinated stakeholder communication, and delivered data-driven dashboards using Excel and Power BI. Strengthened project outcomes through effective risk mitigation and strategic resource allocation.`,
    technologies: ["Excel", "Power BI", "Agile Methodologies", "Risk Management", "Leadership"],
  },
  {
  year: "2023",
  role: "Data Analyst Intern",
  company: "Excelerate",
  description: `Completed a 4-week remote internship focused on business data analysis and visualization. Strengthened skills in data storytelling, critical thinking, and visual design for stakeholder presentations. Worked in cross-functional teams and received mentorship from industry project heads.`,
  skills: ["Data Visualization", "Critical Thinking", "Communication", "Time Management", "Collaboration"]
  },
 {
  year: "2021 - 2023",
  role: "Software Engineer",
  company: "Rayon Technology Solutions Pvt. Ltd.",
  description: `Developed and maintained scalable backend applications using Java and REST APIs. Enhanced system performance by 15% through backend optimizations and database tuning. Collaborated with frontend and mobile teams for seamless API integration. Worked in Agile teams using Jira, Jenkins, and participated in sprint planning, code reviews, and daily stand-ups.`,
  skills: ["Java", "REST API", "PostgreSQL", "SQL", "Python", "CI/CD", "Jira", "Jenkins", "SDLC", "Agile"],
 },

  {
    year: "2021",
    role: "Freelance Android Developer",
    company: "Health Lieasure App",
    description: `Independently designed and developed a health and lifestyle tracking Android application. Implemented secure login, activity tracking, and reminder scheduling. Delivered an end-to-end solution from requirements gathering to deployment, enhancing user engagement and retention.`,
    technologies: ["Android Studio", "Java", "XML"],
  },
];

export const PROJECTS = [
  {
    title: "TripTrek – AI-Powered Travel Planner",
    image: project1,
    gallary: [TripTrek, p11, p12, p13, p14, p15],
    description:
      "A collaborative travel planning platform that allows users to create, visualise, and share itineraries. Integrated OpenAI API to provide personalised trip suggestions with real-time weather overlays. Built using Flask, Bootstrap, and JavaScript for a seamless user experience.",
    technologies: ["Flask", "SQLAlchemy", "JavaScript", "Bootstrap", "OpenAI API"],
  },
  {
    title: "Innadine – Interactive Restaurant Platform",
    image: project2,
    gallary: [indinenne, p21, p22, p23, p24, p26, p27],
    description:
      "A fully responsive restaurant web application with real-time menu updates, reservation management, and customer feedback features. Built using React.js and Express.js, the site delivers rich user interaction through Redux-powered state management.",
    technologies: ["React.js", "Redux", "Express.js", "MySQL", "HTML5", "CSS3", "JavaScript"],
  },
  {
    title: "Developer Portfolio Website",
    image: project3,
    gallary: [pf1, pf2, pf3, pf4, pf5, pf6],
    description:
      "A personal portfolio built using React and Tailwind CSS to showcase development projects and design aesthetics. Features animated transitions, mobile responsiveness, and code optimisation for performance.",
    technologies: ["React+Vite", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Web Application",
    image: project4,
    description:
      "A comprehensive e-commerce platform developed with AngularJS for the frontend and Django for the backend. Includes features such as product catalogue, secure user authentication, shopping cart, and payment integration.",
    technologies: ["AngularJS", "Django", "HTML", "CSS", "JavaScript"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Kapila Rohan Attele",
    company: "Academic Advisor & Mathematics Faculty",
    image: attele,
    quote: "Prathyusha's incisive logic and organized problem-solving abilities were on display in my Discrete Geometry class. Her capability to simplify intricate mathematical ideas is directly reflected in her skill in designing algorithms and developing backend logic. She carries analytical rigor and sound theoretical basis to her software engineering work.",
  },
  {
    name: "Prabhakarrao Achanta",
    company: "Senior Professor – Advanced Software Engineering (CSU) ",
    image: achanta,
    quote: "Prathyusha showcased full-stack engineering skills by building scalable APIs and integrating AI-powered features using Flask and JavaScript. Her technical fundamentals, along with agile teamwork and problem-solving, made her a gem in delivering a user-centric, production-ready solution. She is a multi-talented engineer set to excel in industry environments",
  },
  {
    name: "Jo-Jo-Chern",
    company: "Professor (CSU) ",
    image: chern,
    quote: "Prathyusha regularly excelled in advanced CS coursework with her solid understanding of full-stack development, system design, and application of software concepts. She's technically proficient, solution-driven, and poised to make valuable contributions to high-impact engineering teams.",
  },
];

export const CERTIFICATIONS = [
  {
    title: "LeetCode Practice Milestone",
    issuer: "LeetCode",
    year: "Ongoing",
    description: "Solved 50+ algorithmic challenges, demonstrating consistent progress in data structures, logic building, and code optimisation."
  },
  {
    title: "Docker Foundations Professional Certificate",
    issuer: "Docker",
    year: "2025",
    description: "Demonstrated proficiency in containerisation, image management, and production-grade deployment workflows."
  },
  {
    title: "AWS Academy Graduate – Machine Learning for NLP",
    issuer: "Amazon Web Services",
    year: "2024",
    description: "Completed comprehensive training on cloud-based ML models and NLP techniques using AWS SageMaker and related services."
  },
  {
    title: "ChatGPT Prompt Engineering for Developers",
    issuer: "OpenAI",
    year: "2023",
    description: "Learned advanced prompt design strategies to build effective interactions and workflows using large language models."
  },
  {
    title: "Top 5% – NPTEL Joy of Computing with Python",
    issuer: "NPTEL / IIT Madras",
    year: "2021",
    description: "Achieved top percentile performance in an intensive university-level programming course focused on Python."
  },

];


export const CONTACT = {
  address: "Charlotte, NC",
  phoneNo: "+19802770015",
  email: "pg4852630@gmail.com",
};
