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
export const HERO_CONTENT = `I'm a recent Master's graduate in Computer Science, passionate about full-stack development. 
          I have hands-on experience building responsive web applications using frontend technologies like React, HTML, CSS, and JavaScript, and backend frameworks like Node.js, Django, and Flask. 
          I'm skilled in working with databases (MySQL, MongoDB) and cloud platforms (AWS), and I focus on building user-centered applications that deliver seamless and impactful experiences.`;

export const ABOUT_TEXT = `Curiosity drives everything I do. Whether it’s debugging a tricky backend issue or designing intuitive user flows, I enjoy understanding how things work and how to make them better. My journey in tech has taken me from developing dynamic web apps to integrating cloud services and deploying scalable solutions—always with a focus on creating meaningful user experiences.

With a Master’s in Computer Science and a knack for full-stack development, I bring both depth and versatility to every project. I thrive in collaborative environments where ideas flow freely, feedback fuels growth, and every line of code contributes to something bigger.

Outside the screen, I’m always up for exploring new tools, learning emerging technologies, and sharing what I know with others. Whether it’s a side project or a team-driven application, I aim to build software that solves real problems and feels good to use.

Let’s connect, collaborate, and create.`;

export const EXPERIENCES = [
  {
    year: "2023",
    role: "Project Manager Intern",
    company: "Excelerate Program",
    description: `Orchestrated cross-functional virtual project teams to tackle real-world business problems. Led Agile sprint planning, coordinated stakeholder communication, and delivered data-driven dashboards using Excel and Power BI. Strengthened project outcomes through effective risk mitigation and strategic resource allocation.`,
    technologies: ["Excel", "Power BI", "Agile Methodologies", "Risk Management", "Leadership"],
  },
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Rayon Technology Solutions Pvt. Ltd.",
    description: `Developed and maintained scalable full-stack web applications using Python, Django, and REST APIs. Improved system performance by 15% through backend optimisations. Collaborated with frontend and mobile teams to ensure seamless API integration. Followed Agile methodologies and participated in pair programming, daily stand-ups, and system design discussions.`,
    technologies: ["Python", "Django", "REST API", "PostgreSQL", "Docker", "CI/CD", "Agile"],
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
  address: "Chicago IL 60616 ",
  phoneNo: "+1 (815)482-5848",
  email: "gadiprathyusha2712@gmail.com",
};
