import React from 'react';

const QuestionsFragment = () => {
  return (
    <div className="questions-fragment">
      <span className="fragment-title">Questions</span>
      <div className="progress-container">
        <div className="radial-progress-bar">
          <svg width="100%" height="100%">
            <defs>
              <linearGradient id="progressGradient" x1="87%" y1="83%" x2="13%" y2="17%">
                <stop offset="0%" className="stop-start"></stop>
                <stop offset="100%" className="stop-end"></stop>
              </linearGradient>
            </defs>
            <path d="M 13.316684 99.992357 A 74.82 74.82 0 1 1 160.683316 99.992357 L 134.979834 95.460139 A 48.72 48.72 0 1 0 39.020166 95.460139 Z " fill="#EAECF5"></path>
            <path d="M 13.316684 99.992357 A 74.82 74.82 0 0 1 144.315445 38.906631 L 124.321685 55.683388 A 48.72 48.72 0 0 0 39.020166 95.460139 Z " fill="#FFD99C"></path>
            <path d="M 25.311642 97.877322 A 62.64 62.64 0 0 1 134.985024 46.735784 L 124.321685 55.683388 A 48.72 48.72 0 0 0 39.020166 95.460139 Z " fill="#FFAE2C"></path>
          </svg>
          <span className="progress-label">75%</span>
        </div>
      </div>
      <span className="subtitle">Correct on the 1st try</span>
      <div className="info-container">
        <div className="info-part-container">
          <span className="info-part-title">Answered Questions</span>
          <span className="info-part-data-label">8/599</span>
        </div>
        <span className="info-container-separator"></span>
        <div className="info-part-container">
          <span className="info-part-title">Correct Answers</span>
          <span className="info-part-data-label">6</span>
        </div>
      </div>
      <a href="/us/ak-car/statistics" previewlistener="true">
        <button className="more-statistics-button">
          <span className="label">MORE STATISTICS</span>
        </button>
      </a>
    </div>
  );
};

export default QuestionsFragment;