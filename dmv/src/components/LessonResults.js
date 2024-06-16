import React from 'react';
import { useNavigate } from 'react-router-dom';


const LessonResults = () => {
  const navigate = useNavigate();

  return (
    <div className="lesson-results-container">
      <div className="lesson-results-content">
        <h2 className="lesson-results-title">Lesson Results</h2>
        <div className="progress-container">
          <svg xmlns="http://www.w3.org/2000/svg" height="148" width="148" className="circle-progress">
            <circle cx="74" cy="74" r="65" stroke-width="18" fill="none" className="main-circle"></circle>
            <defs>
              <radialGradient id="gradientRedDoubleProgressCircle1" gradientUnits="userSpaceOnUse">
                <stop offset="87.5%" stop-color="#DB404A"></stop>
                <stop offset="89%" stop-color="#ED9A9F"></stop>
              </radialGradient>
              <linearGradient id="gradientRedDoubleProgressCircle2">
                <stop offset="0%" stop-color="#F2A5A9"></stop>
                <stop offset="48%" stop-color="#FFF"></stop>
                <stop offset="58%" stop-color="#EA9096"></stop>
                <stop offset="60%" stop-color="#EA9096"></stop>
                <stop offset="100%" stop-color="#FFF"></stop>
              </linearGradient>
            </defs>
            <path d="M 74 138 A 64 64 0 0 0 74 10" stroke="url(#gradientRedDoubleProgressCircle1)" stroke-linecap="round" stroke-width="18" fill="none"></path>
            <path d="M 74 138 A 64 64 0 0 0 74 10" stroke="url(#gradientRedDoubleProgressCircle2)" stroke-linecap="round" stroke-width="18" fill="none" stroke-opacity="0.1"></path>
            <text text-anchor="middle" font-family="Lato" stroke-width="0" className="double-circle-inner-text" x="74" y="84" font-size="32px" font-weight="900" letter-spacing="-0.64px">50%</text>
          </svg>
        </div>
        <p className="reached-points">+50 points</p>
        <p className="max-points">(max. 100)</p>
        <p className="subtitle">You got 4/8 correct on the first try</p>
        <button className="continue-button" onClick={() => navigate('/start-learning')}>
          <span className="label">Continue</span>
        </button>
      </div>
    </div>
  );
};

export default LessonResults;
