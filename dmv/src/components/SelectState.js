import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/SelectState.css';

const states = [
  'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California',
  'Colorado', 'Connecticut', 'Delaware', 'Florida', 'Georgia',
  // add all states here
];

const SelectState = () => {
  const [selectedState, setSelectedState] = useState('');
  const navigate = useNavigate();

  const handleSelect = (e) => setSelectedState(e.target.value);

  const handleContinue = () => {
    if (selectedState) {
      navigate('/select-vehicle');
    }
  };

  return (
    <div className="select-state-container">
      <h2>Select State</h2>
      <div className="select-state-dropdown">
        <select value={selectedState} onChange={handleSelect}>
          <option value="" disabled>
            Select state
          </option>
          {states.map((state) => (
            <option key={state} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <button onClick={handleContinue} disabled={!selectedState}>
        Continue
      </button>
    </div>
  );
};

export default SelectState;
