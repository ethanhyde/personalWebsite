import React from 'react';
import './Contact.css';
import StylizedBox from '../components/StylizedBox';

const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Me</h1>
      <div className="box">
        <a href="mailto:ehyde2@uoregon.edu" style={{ textDecoration: 'none' }}>
          <StylizedBox text="Email" />
        </a>
        <a href="tel:+15613039801" style={{ textDecoration: 'none' }}>
          <StylizedBox text="Phone" />
        </a>
      </div>
    </div>
  );
};

export default Contact;
