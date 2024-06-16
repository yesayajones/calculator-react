import React from 'react';
import VehiclesFragment from './VehiclesFragment';
import QuestionsFragment from './QuestionsFragment';
import LeaderboardFragment from './LeaderboardFragment';
import '../styles/Dashboard.css'

const Dashboard = () => {
  return (
    <div className="dashboard-fragments">
      <VehiclesFragment />
      <QuestionsFragment />
      <LeaderboardFragment />
    </div>
  );
};

export default Dashboard;