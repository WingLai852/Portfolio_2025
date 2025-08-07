import React from 'react';
import './contact.css';
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  const [state, handleSubmit] = useForm("myzpbeob");

  return (
    <section className="contact-page">
      <div className="contact-content">
        <h1>Let's Connect</h1>
        <p>If you’d like to work together, ask a question, or just say hi — I’d love to hear from you.</p>

        {state.succeeded ? (
          <p className="success-message">✅ Thanks! Your message has been sent.</p>
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
            <ValidationError prefix="Email" field="email" errors={state.errors} />

            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default Contact;
