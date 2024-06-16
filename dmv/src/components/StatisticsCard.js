import React from 'react';
import '../styles/StatisticsCard.css';

const StatisticsCard = ({ title, value, description }) => {
  return (
    <div className="statistics-card">
      <h2 className="statistics-card-title">{title}</h2>
      <p className="statistics-card-value">{value}</p>
      <p className="statistics-card-description">{description}</p>
    </div>
  );
};

export default StatisticsCard;
