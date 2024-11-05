// components/HeroSection.js
import React from 'react';
import './HeroSection.css';


const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>A universal platform for <br /> sure-fire football predictions powered by <span className="highlight"> <br />data and expert analysis</span></h1>
      <p>Empowering your betting decisions with precise predictions <br /> rooted in historical data and expert football insights. <br />Our platform combines advanced analytics with professional <br />expertise to deliver predictions  you can trust.</p>
      <div className="hero-buttons">
        <button className="primary-btn">Get Started</button>
        <button className="secondary-btn">Show Demo</button>
      </div>
    

    </section>
  );
};

export default HeroSection;
