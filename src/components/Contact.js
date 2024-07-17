import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Me</h2>
      <p>
        You can reach me via email at:
        <a href="mailto:tejusbahri@gmail.com" className="email-link">
          tejusbahri@gmail.com
        </a>
      </p>
      <p>
        Or visit my Gmail profile:
        <a href="https://mail.google.com/" target="_blank" rel="noopener noreferrer" className="gmail-link">
          Open Gmail
        </a>
      </p>
    </div>
  );
}

export default Contact;
