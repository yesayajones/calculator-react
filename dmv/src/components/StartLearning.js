import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProgressBar from './ProgressBar';
import Dashboard from './Dashboard';
import '../styles/StartLearning.css';
import '../styles/ViewBlock.css';
import '../styles/ViewBlockItem.css';


const StartLearning = () => {
  const navigate = useNavigate();

  const handleLessonClick = () => {
    navigate('/lesson');
  };

  const renderViewBlockItems = (items) => {
    return items.map((item, index) => (
      <section
        key={index}
        className="view-block-item"
        onClick={handleLessonClick}
      >
        <div className="line"></div>
        <div className={`checkmark ${item.active ? 'active' : ''}`}>
          <span>{item.step}</span>
        </div>
        <div
          className={`item-title-block ${item.active ? 'active-title-block' : ''}`}
        >
          <h3
            className={`title ${item.active ? 'active-title-block' : ''}`}
            data-sub-title={item.subtitle}
          >
            {item.title}
          </h3>
        </div>
      </section>
    ));
  };

  const courseStructure = [
    {
      id: 1,
      title: 'Road rules I',
      lessons: [
        { step: 1, title: 'Right of way I', active: true },
        { step: 2, title: 'Road markings I' },
        { step: 3, title: 'Speed limits' },
        { step: 4, title: 'Right of way II' },
        { step: 5, title: 'Your vehicle I' },
        { step: 6, title: 'Recognizing signs' },
        { step: '?', title: 'Road rules I', subtitle: ' - Category Test' },
      ],
    },
    {
      id: 2,
      title: 'Road rules II',
      lessons: [
        { step: 7, title: 'Right of way III' },
        { step: 8, title: 'Indicating and signaling' },
        { step: 9, title: 'Road markings II' },
        { step: 10, title: 'Safe driving' },
        { step: 11, title: 'Sharing with heavy vehicles' },
        { step: 12, title: 'Common regulatory signs II' },
        { step: '?', title: 'Road rules II', subtitle: ' - Category Test' },
      ],
    },
  ];

  return (
    <div className="start-learning-container">
      <div className="sidebar">
        <h2>DMV Prep Course</h2>
        <ProgressBar progress={30} />
        {courseStructure.map((section) => (
          <section key={section.id} className="view-block">
            <div className="view-container">
              <div className="flexed-line"></div>
              <div className="oval">
                <span>{section.id}</span>
              </div>
              <p className="view-block-title">{section.title}</p>
            </div>
            {renderViewBlockItems(section.lessons)}
          </section>
        ))}
        <div className="view-container">
          <div className="flexed-line"></div>
          <div className="oval">
            <span>IX</span>
          </div>
          <p className="view-block-title">Final Test</p>
        </div>
        <section className="view-block-item">
          <div className="checkmark">
            <span>?</span>
          </div>
          <div className="item-title-block">
            <h3 className="title" data-sub-title=" - Final Test">
              Final Test
            </h3>
          </div>
        </section>
      </div>
      <div className="main-content">
        <Dashboard />
      </div>
    </div>
  );
};

export default StartLearning;
