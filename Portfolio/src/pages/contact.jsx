import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>Let's Connect</h1>
        <p>If you’d like to work together, ask a question, or just say hi — I’d love to hear from you.</p>

        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="5" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
