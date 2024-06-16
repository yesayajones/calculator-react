import React from 'react';
import '../styles/TestList.css';

const TestList = () => {
  return (
    <div className="test-list">
      <h2 className="test-list-title">Test List</h2>
      <ul className="test-list-items">
        <li className="test-item">
          <h3 className="test-item-title">Test 1</h3>
          <p className="test-item-description">Description of Test 1</p>
          <button className="test-item-button">Start Test</button>
        </li>
        {/* Add more test items as needed */}
      </ul>
    </div>
  );
};

export default TestList;
