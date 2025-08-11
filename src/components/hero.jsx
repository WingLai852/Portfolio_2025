import React from 'react';
import ChineseName from './ChineseName';

const Hero = () => {
  return (
    <section className="hero-section" style={styles.section}>
      <div style={styles.content}>
      <h1 style={styles.heading}>
        Hi, I’m Lai Wing Ho <span style={styles.inlineChinese}><ChineseName /></span>
    </h1>
    

        <p style={styles.paragraph}>
          I design and build thoughtful digital products. Passionate about creating seamless user experiences.
        </p>
          <a
  href="/Curriculum vitae.pdf" downloadclassName="hero-button"
>
  Download CV
</a>
      </div>
    
    </section>
  );
};

const styles = {
  section: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    padding: '0 2rem',
    backgroundColor: '#fff',
    color: '#000',
  },
  content: {
    maxWidth: '700px',
  },
  heading: {
    fontSize: '3rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  },
  paragraph: {
    fontSize: '1.25rem',
    color: '#444',
    marginTop: '1.5rem',
  },
  inlineChinese: {
  display: 'inline-block',
  marginLeft: '0.5rem',
  verticalAlign: 'middle',
},




};

export default Hero;
