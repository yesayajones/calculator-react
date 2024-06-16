import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectVehicle.css';

const SelectVehicle = () => {
  const [selectedVehicle, setSelectedVehicle] = useState('');
  const navigate = useNavigate();

  const handleVehicleChange = (e) => {
    setSelectedVehicle(e.target.value);
  };

  const handleDone = () => {
    if (selectedVehicle) {
      navigate('/signup');
    }
  };
  
  
  

  return (
    <div className="select-vehicle-container">
      <h2>Select Vehicle</h2>
      <div className="vehicle-dropdown">
        <label htmlFor="vehicle-select">Select Vehicle:</label>
        <select
          id="vehicle-select"
          value={selectedVehicle}
          onChange={handleVehicleChange}
        >
          <option value="">-- Select Vehicle --</option>
          <option value="car">Car</option>
          <option value="cdl">CDL</option>
          <option value="motorcycle">Motorcycle</option>
        </select>
      </div>
      <button onClick={handleDone} disabled={!selectedVehicle}>
        Done
      </button>
    </div>
  );
};

export default SelectVehicle;
