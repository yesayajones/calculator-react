import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Hero.css';

const Hero = () => {
  const navigate = useNavigate();

  const handleStartLearning = () => navigate('/select-state');

  return (
    <section className="hero">
      <div className="container">
        <h1>Ace your Permit Test with Zutobi</h1>
        <p>
          Join thousands of students who use Zutobi to ace their driving tests.
          Start learning today and pass your test with confidence.
        </p>
        <button className="cta-button" onClick={handleStartLearning}>
          Start Learning
        </button>
      </div>
    </section>
  );
};

export default Hero;
