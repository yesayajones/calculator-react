import React from 'react';
import '../styles/TestOptions.css';

const TestOptions = () => {
  return (
    <div className="test-options">
      <h2 className="test-options-title">Choose Test Type</h2>
      <ul className="test-options-list">
        <li className="test-option">
          <button className="test-option-button">10 Random Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">20 Random Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">30 Random Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">40 Random Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Incorrect Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Saved Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Difficult Questions</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Timed Test</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Module Test</button>
        </li>
        <li className="test-option">
          <button className="test-option-button">Final Test</button>
        </li>
      </ul>
    </div>
  );
};

export default TestOptions;
