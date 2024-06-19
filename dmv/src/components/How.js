import React from 'react';
import '../styles/How.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faCheckDouble, faFlag, faCar } from '@fortawesome/free-solid-svg-icons';

const How = () => {
  return (
    <div className="wrapper">
      <p className="containerTitle">
        How does <span>it work?</span>
      </p>
      <div className="contentWrapper">
        <div className="contentCol">
          <div className="contentRow">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faBook} className="fa-2x" style={{ color: '#197e7d' }} />
            </div>
            <div className="topCurve"></div>
          </div>
          <p className="description">Learn using bite-sized lessons</p>
        </div>
        <div className="contentCol">
          <div className="contentRow">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faCheckDouble} className="fa-2x" style={{ color: '#197e7d' }} />
            </div>
            <div className="bottomCurve"></div>
          </div>
          <p className="description">Go through the exam-like tests</p>
        </div>
        <div className="contentCol">
          <div className="contentRow">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faFlag} className="fa-2x" style={{ color: '#197e7d' }} />
            </div>
            <div className="topCurve"></div>
          </div>
          <p className="description">Finish final test simulating your official exam</p>
        </div>
        <div className="contentCol">
          <div className="contentRow">
            <div className="iconWrapper">
              <FontAwesomeIcon icon={faCar} className="fa-2x" style={{ color: '#197e7d' }} />
            </div>
          </div>
          <p className="description">Pass your DMV test and get your license</p>
        </div>
      </div>
    </div>
  );
};

export default How;
