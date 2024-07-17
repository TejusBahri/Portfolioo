import React from 'react';
import './Projects.css';  
const projects = [
  {
    title: "Netflix Clone App",
    description: "Developed a Front-end web app under the Bharat Intern Virtual Internship.",
    link: "https://github.com/TejusBahri/Bharat-Intern-Project"
  },
  {
    title: "Weather Navigation for Flights",
    description: "Developed a Flight optimal routing mechanism using React JS and Firebase authentication.",
    link: "https://github.com/TejusBahri/Aerothon"
  },
  {
    title: "Password Generator",
    description: "Developed an interactive web app to generate passwords as per need.",
    link: "https://github.com/TejusBahri/Password-Generator"
  },
];

const Projects = () => {
  return (
    <div className="projects">
      <h2>My Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
