import React from 'react';

const VehiclesFragment = () => {
  return (
    <div className="vehicle-fragment">
      <span className="fragment-title">Vehicles</span>
      <div className="running-progress-container">
        <div className="car-container" style={{ left: '50%' }}>
          <img src="/2ab4e4988964a67c00fa.png" className="car-image" />
        </div>
        <div className="progress-bar">
          <div className="progress-bar-current-top" style={{ width: '50%' }}></div>
          <div className="progress-bar-current-bottom" style={{ width: '50%' }}></div>
        </div>
      </div>
      <span className="points-to-reach-label">Earn 75 points to level up</span>
      <div className="collection-container">
        <span className="collection-label">Collection</span>
        <div className="cars-container">
          <div className="car-container" style={{ left: '0%' }}>
            <img src="/2ab4e4988964a67c00fa.png" className="car-image" />
          </div>
          <div className="car-container" style={{ left: '0%' }}>
            <img src="/e9d2640651d18f108092.png" className="car-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehiclesFragment;