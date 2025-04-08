import React from 'react';
// import companyLogo from '../assets/logo.png';
import "../styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        {/* <img src={companyLogo} alt="Novanectar Logo" className="about-logo" /> */}
        <div className="about-text">
          <h2>About Novanectar</h2>
          <p>
            We connect talented professionals with exciting career opportunities.
            Our platform bridges the gap between employers and job seekers.
          </p>
          <h3>Our Mission</h3>
          <p>
            To revolutionize the hiring process through innovative technology
            and personalized matching algorithms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;