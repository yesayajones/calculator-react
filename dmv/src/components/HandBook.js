import React from 'react';
import HandBookItem from './HandBookItem';
import '../styles/HandBook.css';

const items = [
  "Road rules I",
  "Road rules II",
  "Sharing the road with others",
  "Road rules III",
  "The driver",
  "Driving safely",
  "Hazards",
  "Your vehicle"
];

const HandBook = () => {
  return (
    <div className="handbook">
      <h1>Handbook</h1>
      {items.map((item, index) => (
        <HandBookItem key={index} title={item} />
      ))}
    </div>
  );
};

export default HandBook;
