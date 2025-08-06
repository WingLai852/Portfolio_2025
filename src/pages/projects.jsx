import React, { useState } from 'react';
import './projects.css';
import frameImg from '../assets/kickboks.png';
import zeldaImg from '../assets/zeldapicture.png';
import dynamicPosterImg from '../assets/dynamic_poster.png';
import uselesswebImg from '../assets/uselesswebsite.png';

const dummyProjects = [
  {
    title: 'FightZone Platform',
    description: 'A kickboxing club management app built as a bachelor project.',
    details: 'FightZone is a web application that allows kickboxing clubs to manage members, events, and communicate with VKBMO. Built using React, Node.js, and MongoDB.',
    image: frameImg,
    link: 'https://www.fightzone.site/'
  },
  {
    title: 'Zelda Quiz Game',
    description: 'A fun and interactive quiz game based on the Legend of Zelda series.',
    details: 'This is a browser-based quiz game where players can test their knowledge of the Zelda universe. Built with React and deployed on Vercel.',
    image: zeldaImg,
    link: 'https://zelda-game-beryl.vercel.app/'
  },
  {
    title: 'Dynamic Poster',
    description: 'Interactive poster made with HTML, CSS-animation, and JavaScript.',
    details: 'This poster project showcases animation and transitions created using only CSS and CSS Animation.',
    image: dynamicPosterImg,
    link: 'https://spectacular-flan-5ee592.netlify.app/'
  },
  {
    title: 'Useless Web',
    description: 'A collection of useless websites for entertainment.',
    details: 'Inspired by the classic "Useless Web", this project collects fun, random websites for a bit of joy.',
    image: uselesswebImg,
    link: 'https://uselesswebsit.netlify.app/'
  }
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section className="projects-page">
      <div className="projects-header">
        <h1>My Projects</h1>
        <p>Click on a project to learn more about it.</p>
      </div>

      <div className="projects-grid">
        {dummyProjects.map((project, index) => (
          <div className="project-card" key={index}>
            <img src={project.image} alt={project.title} className="project-image" />
            <div className="project-info">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <button 
                className="project-link" 
                onClick={() => setSelectedProject(project)}
              >
                View Project
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.details}</p>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="project-link"
            >
              Visit Live Project
            </a>
            <button className="close-button" onClick={() => setSelectedProject(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
