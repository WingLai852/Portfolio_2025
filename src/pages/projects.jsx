import React from 'react';
import './projects.css';
import frameImg from '../assets/kickboks.png'; // Assuming you have a frame image for the FightZone project
import zeldaImg from '../assets/zeldapicture.png'; // Example image for a project
import dynamicPosterImg from '../assets/dynamic_poster.png'; // Example image for the dynamic poster
import uselesswebImg from '../assets/uselesswebsite.png'; // Example image for the Useless Web project

const dummyProjects = [
  {
    title: 'FightZone Platform',
    description: 'A kickboxing club management app built as a bachelor project',
    image: frameImg,
    link: 'https://www.fightzone.site/'
  },
  {
    title: 'Zelda Quiz Game',
    description: 'A fun and interactive quiz game based on the Legend of Zelda series.',
    image: zeldaImg,
    link: 'https://zelda-game-beryl.vercel.app/'
  },
  {
    title: 'Dynamic Poster',
    description: 'Interactive poster made with HTML, CSS-animation, and JavaScript.',
    image: dynamicPosterImg,
    link: 'https://spectacular-flan-5ee592.netlify.app/'
  },
  // Add more projects as needed
  {
    title: 'Useless Web',
    description: 'A collection of useless websites for entertainment.',
    image: uselesswebImg,
    link: 'https://uselesswebsit.netlify.app/'
  }
  
];

const Projects = () => {
  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Here are a few examples of my work. I’ll add more soon!</p>
      </div>

      <div className="projects-grid">
        {dummyProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} className="project-link" target="_blank">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
