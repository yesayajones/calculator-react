import React from 'react';
import '../styles/Tests.css';
import TestOptions from './TestOptions';
import TestList from './TestList';
import Dashboard from './Dashboard';

const Tests = () => {
  return (
    <div className="main-tests-container">
      <div className="tests-container">
        <h1 className="tests-title">Practice Tests</h1>
        <TestOptions />
        <TestList />
      </div>
      <Dashboard />
    </div>
  );
};

export default Tests;