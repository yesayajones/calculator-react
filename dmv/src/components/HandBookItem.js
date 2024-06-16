import React from 'react';
import '../styles/HandBookItem.css';

const HandBookItem = ({ title }) => {
  return (
    <div className="handbook-item">
      <span>{title}</span>
      <button className="plus-button">+</button>
    </div>
  );
};

export default HandBookItem;
