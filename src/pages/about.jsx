import React from 'react';
import './about.css';
import profileImg from '../assets/profile.JPG';


const About = () => {
  return (
    <section className="about-page">
      <div className="about-header">
        <h1>Get to Know Me</h1>
        <p className="about-subtitle">
          im not just a developer, I'm a creator who loves to build things that matter.
        </p>
      </div>

      <div className="about-main">
        <img src={profileImg} alt="Rocky Lai portrait" className="profile-photo" />
        <div className="about-text">
          <h2>Hi, I’m Lai Wing Ho (黎穎豪)
          <span className="emoji">👋</span>
          </h2>
          <p>
            I'm a frontend developer with a love for clean code, user-friendly design, and pixel-perfect interfaces. I enjoy
            creating interactive websites that not only look great, but also feel intuitive.
          </p>
          <p>
           I work primarily with <strong>React, Vite, and JavaScript</strong>, but I’m always expanding my toolkit. 
I also have experience with <strong>HTML, CSS, PHP, and Figma</strong> for creating clean, functional, and visually appealing interfaces. 
I value collaboration, thoughtful design, and building digital products that people genuinely enjoy using.

          </p>
          <p>
            Outside the screen, you’ll find me snowboarding, going out with friends, or exploring new places. I believe in balancing work and play, and I bring that same energy to my projects.
          </p>
        </div>
      </div>

   
      
    </section>

    
  );
};

export default About;
