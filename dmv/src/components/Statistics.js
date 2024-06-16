
import React from 'react';
import '../styles/Statistics.css';
import StatisticsCard from './StatisticsCard';
import Dashboard from '../components/Dashboard';

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="statistics-grid">
        <div className="statistics-content">
          <h1 className="statistics-title">Statistics</h1>
          <div className="statistics-cards">
            <StatisticsCard
              title="Total Questions"
              value={1234}
              description="Questions answered so far"
            />
            <StatisticsCard
              title="Correct Answers"
              value={987}
              description="Correct answers given"
            />
            <StatisticsCard
              title="Incorrect Answers"
              value={247}
              description="Incorrect answers given"
            />
            <StatisticsCard
              title="Accuracy"
              value="80%"
              description="Overall accuracy rate"
            />
          </div>
        </div>
        <div className="statistics-dashboard">
          <Dashboard />
        </div>
      </div>
    </div>
  );
};

export default Statistics;