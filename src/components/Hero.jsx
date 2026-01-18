import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container hero-content">
                <h2>Building Your Dreams with <br /> <span>Precision & Excellence</span></h2>
                <p>Expert construction services for single homes, multi-dwelling units, and high-rise residential buildings.</p>
                <div className="hero-buttons">
                    <a href="#contact" className="btn btn-primary">Start Your Project</a>
                    <a href="#services" className="btn btn-outline">Our Services</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
