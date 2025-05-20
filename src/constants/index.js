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

import m1 from "../assets/projects/modeling/m1.png";
import m2 from "../assets/projects/modeling/m2.png";
import m3 from "../assets/projects/modeling/m3.png";
import m4 from "../assets/projects/modeling/m4.png";
import m5 from "../assets/projects/modeling/m5.png";
import m6 from "../assets/projects/modeling/m6.png";
import m7 from "../assets/projects/modeling/m7.png";
import m8 from "../assets/projects/modeling/m8.png";
import m9 from "../assets/projects/modeling/m9.png";

import c1 from "../assets/projects/missing/c1.png";
import c2 from "../assets/projects/missing/c2.png";
import c3 from "../assets/projects/missing/c3.png";
import c4 from "../assets/projects/missing/c4.png";
import c5 from "../assets/projects/missing/c5.png";

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
    description: `Led a virtual project management internship focusing on real-world business challenges. Developed dashboards and reports using Excel and Power BI to convey insights effectively. Applied leadership, risk management, and collaborative problem-solving to drive project success.`,
    technologies: ["Excel", "Power BI", "Leadership", "Risk Management", "Collaborative Problem Solving"],
  },
  {
    year: "2021 - 2023",
    role: "Software Engineer",
    company: "Rayon Technology Solutions Pvt. Ltd.",
    description: `Developed scalable web applications as a Full Stack Developer using React.js, Node.js, and MongoDB. Implemented user authentication, integrated RESTful APIs, and created dynamic dashboards for real-time data handling. Collaborated with cross-functional teams following Agile methodologies.`,
    technologies: ["React.js", "Dijango", "MySQL", "RESTful APIs", "Agile Methodologies"],
  },

  {
    year: "2021",
    role: "Freelance Android Developer",
    company: "Health Lieasure App",
    description: `Developed a health and lifestyle tracking mobile app using Android Studio and Java. Implemented activity tracking, reminders, and user authentication. Delivered the complete solution independently from requirements to deployment.`,
    technologies: ["Android Studio", "Java", "XML"],
  },
];

export const PROJECTS = [
  {
    title: "TripTrek - Travel Planning Web App",
    image: project1,
    gallary: [TripTrek,p11,p12,p13,p14,p15],
    description:
      "A collaborative travel planner where users can create and share itineraries, visualize trips on an interactive map, and receive AI-generated suggestions with real-time weather integration.",
    technologies: ["Flask", "SQLAlchemy", "JavaScript", "Bootstrap", "OpenAI API"],
  },
{
  title: "Innadine – Restaurant Website",
  image: project2,
  gallary:[indinenne,p21,p22,p23,p24,p26,p27],
  description:
    "A dynamic and responsive restaurant website featuring interactive menus, reservation capabilities, and customer engagement tools.",
  technologies: ["React.js", "Redux", "Express.js", "MySQL", "HTML5", "CSS3", "JavaScript"],
},
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio showcasing my work, skills, and projects with smooth transitions, a responsive layout, and modern design principles.",
    technologies: ["React", "Tailwind CSS", "JavaScript"],
  },
  {
    title: "E-Commerce Website",
    image: project4,
    description:
      "An online shopping platform featuring product browsing, cart management, and a user-friendly checkout process.",
    technologies: ["Node.js", "Express", "MongoDB", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Modelling Influsion Diffusion Over Signed Social Networks(mini-Project)",
    image: project1,
    gallary:[m1,m2,m3,m4,m5,m6,m7,m8,m9],
    description:
      "A major project analyzing how influence spreads in positively and negatively connected social networks, focusing on network behavior modeling and diffusion analysis.",
    technologies: ["Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Missing Child Identification System Using SVM (Major-Project)",
    image: project2,
    gallary:[c1,c2,c3,c4,c5],
    description:
      "A computer vision-based system that uses facial recognition to assist in identifying missing children, aimed at real-world social impact.",
    technologies: ["Python", "OpenCV", "MySQL"],
  },
];

export const CONTACT = {
  address: "Chicago IL 60616 ",
  email: "gadiprathyusha2712@gmail.com",
};
