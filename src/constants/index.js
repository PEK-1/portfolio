import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a recent Master's graduate in Computer Science, passionate about full-stack development. 
          I have hands-on experience building responsive web applications using frontend technologies like React, HTML, CSS, and JavaScript, and backend frameworks like Node.js, Django, and Flask. 
          I'm skilled in working with databases (MySQL, MongoDB) and cloud platforms (AWS), and I focus on building user-centered applications that deliver seamless and impactful experiences.`;

export const ABOUT_TEXT = `Curiosity drives everything I do. Whether it’s debugging a tricky backend issue or designing intuitive user flows, I enjoy understanding how things work and how to make them better. My journey in tech has taken me from developing dynamic web apps to integrating cloud services and deploying scalable solutions—always with a focus on creating meaningful user experiences.

With a Master’s in Computer Science and a knack for full-stack development, I bring both depth and versatility to every project. I thrive in collaborative environments where ideas flow freely, feedback fuels growth, and every line of code contributes to something bigger.

Outside the screen, I’m always up for exploring new tools, learning emerging technologies, and sharing what I know with others. Whether it’s a side project or a team-driven application, I aim to build software that solves real problems and feels good to use.

Let’s connect, collaborate, and create.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Independent Full Stack Developer",
    company: "Freelance",
    description: `Built and deployed full-stack applications including TripTrek and Innadine. Managed both frontend and backend development using Flask, Node.js, and MySQL. Integrated RESTful APIs, optimized performance, and deployed projects on cloud platforms like AWS.`,
    technologies: ["Flask", "SQLAlchemy", "Node.js", "MySQL", "AWS"],
  },
  {
    year: "2023",
    role: "Data Analyst Intern",
    company: "Excelerate Program",
    description: `Created data visualizations using Excel and Power BI. Designed audience-appropriate dashboards and reports to convey insights effectively. Applied data storytelling and critical thinking to solve real-world business problems.`,
    technologies: ["Excel", "Power BI", "Tableau", "Data Visualization"],
  },
  {
    year: "2022 - 2023",
    role: "Data Engineer Intern",
    company: "Accord Solutions",
    description: `Built and maintained ETL pipelines using SQL and Python. Supported data warehousing and transformation operations while ensuring data quality and consistency across systems.`,
    technologies: ["SQL", "Python", "ETL", "Data Warehousing"],
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
    description:
      "A collaborative travel planner where users can create and share itineraries, visualize trips on an interactive map, and receive AI-generated suggestions with real-time weather integration.",
    technologies: ["Flask", "SQLAlchemy", "JavaScript", "Bootstrap", "OpenAI API"],
  },
  {
    title: "Innadine - Restaurant Website",
    image: project2,
    description:
      "A dynamic and responsive website for a restaurant, with interactive menus, reservation features, and customer engagement tools.",
    technologies: ["ReactJS", "MySQL", "HTML", "CSS", "JavaScript"],
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
    description:
      "A major project analyzing how influence spreads in positively and negatively connected social networks, focusing on network behavior modeling and diffusion analysis.",
    technologies: ["Java", "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Missing Child Identification System Using SVM (Major-Project)",
    image: project2,
    description:
      "A computer vision-based system that uses facial recognition to assist in identifying missing children, aimed at real-world social impact.",
    technologies: ["Python", "OpenCV", "MySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
