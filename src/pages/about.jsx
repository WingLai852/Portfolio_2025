import React from 'react';
import './about.css';
import profileImg from '../assets/profile.jpg';

const About = () => {
  return (
    <section className="about-page">
      <div className="about-header">
        <h1>About Me</h1>
        <p className="about-subtitle">
          I’m Lai Wing Ho (黎穎豪), a front-end backend developer passionate about digital experiences and always willing to learn new things.
        </p>
      </div>

      <div className="about-main about-alt-layout">
        <div className="about-text">
          <p>
            With a strong foundation in <strong>HTML, CSS, React, Vite, and JavaScript</strong>, I enjoy translating ideas into responsive, accessible web interfaces.
            My work reflects my passion for clean structure, thoughtful design, and real-world usability.
          </p>

          <p>
            I also work with <strong>HTML, CSS, PHP</strong> and design tools like <strong>Figma</strong> to bring full concepts to life from prototype to a beautiful UI.
            I’m always eager to expand my skill set and learn new technologies. Whether I’m collaborating with a team or building something solo, my goal is to make an app that is functional and user-friendly.
          </p>

          <div className="highlight-box">
            <h3>Beyond Code</h3>
            <p>
              When I’m not coding, I’m usually snowboarding and  going out with friends.
              Because these moments recharge my creativity and help me stay inspired in the work I do.
            </p>
          </div>

          <div className="skills-list">
            <h4>Skills & Tools</h4>
            <ul>
              <li>HTML/CSS</li>
              <li>Javascript</li>
              <li>React</li>
              <li>Vite</li>
              <li>PHP</li>
              <li>Figma</li>
            </ul>
          </div>
        </div>

        <img src={profileImg} alt="Portrait of Rocky Lai" className="profile-photo bordered" />
      </div>
    </section>
  );
};

export default About;