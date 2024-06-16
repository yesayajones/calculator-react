import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Lesson.css';

const Lesson = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate('/question');
  };

  return (
    <div className="lesson-container">
      <h1 className="lesson-title">Right-of-Way Rules</h1>
      <p className="lesson-description">
        More crashes occur at intersections than any other place on the road. This chapter will teach you the many rules that decide in what order vehicles may proceed at an uncontrolled intersection.
      </p>
      <p className="lesson-description">
        The most important rule, however, is one of common sense - always approach an intersection at a safe speed that allows you to stop in time to avoid a crash if something unexpected happens.
      </p>
      <p className="lesson-description">
        Right-of-way rules are designed to allow vehicles to <strong>move predictably in all situations where their paths cross each other</strong>. These rules, together with common sense, tell drivers who goes first and who must wait in different traffic situations.
      </p>
      <p className="lesson-description">
        Yielding the right-of-way to another vehicle or pedestrian means you must slow down or stop to let them pass first. After the other vehicle has passed, you are free to proceed.
      </p>
      <p className="lesson-description">
        Don't assume that another driver will yield before you see the driver slow down or otherwise indicate he/she is yielding. The most common crash is when a driver incorrectly makes a turn at an intersection, expecting they have the right-of-way when in fact they don't.
      </p>
      <p className="lesson-description">
        In general, it's much better to "yield" the right-of-way than to "take" the right-of-way. Don't yield the right-of-way when it's clear that you should drive, but be prepared to yield the right-of-way if necessary to prevent a crash with another vehicle or pedestrians.
      </p>
      <p className="lesson-description">
        Blind intersections are uncontrolled intersections that make it difficult to see danger coming from the sides. For example, your vision might be blocked by buildings, parked cars or trees.
      </p>
      <p className="lesson-description">
        Proceed carefully and move forward cautiously until you have a clear view of the intersecting roads. Keep the front wheels out of the cross lanes while you are edging forward.
      </p>
      <div className="button-container">
        <button className="start-test-button" onClick={handleStartTest}>START TEST</button>
      </div>
    </div>
  );
};

export default Lesson;
