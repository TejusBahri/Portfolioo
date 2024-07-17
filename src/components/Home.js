import React from 'react';
import './Home.css';  // Make sure to create a corresponding CSS file for styling

const Home = () => {
  return (
    <div className="home">
      <div className="intro">
        <h2>Welcome to My Portfolio</h2>
        <p>Hi, I'm <b>Tejus Bahri</b>, a <b>B.Tech 4rth year UnderGrad</b> in <b>Computer Science Engineering</b>. I specialize in <b>Front-End Web Development</b> and have skills like <b>HTML, CSS, JavaScript and React JS</b>.</p>
        <p>Take a look at my projects and get in touch if you'd like to work together.</p>
      </div>
      <div className="cta">
        <a href="/projects" className="cta-button">View My Projects</a>
      </div>
    </div>
  );
}

export default Home;
