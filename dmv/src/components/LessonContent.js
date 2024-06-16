import React from 'react';
import '../styles/LessonContent.css';

const LessonContent = ({ lesson }) => {
  const lessonData = {
    1: {
      title: 'Right of Way I',
      content: (
        <>
          <h2>Right of Way I</h2>
          <p>
            In this lesson, you'll learn about the basic rules of right of way and how to navigate intersections safely.
          </p>
          <img src="/path/to/right-of-way-image.jpg" alt="Right of Way" />
          {/* Add more content as needed */}
        </>
      ),
    },
    2: {
      title: 'Road Markings I',
      content: (
        <>
          <h2>Road Markings I</h2>
          <p>
            This lesson covers the different types of road markings and their meanings, including lane markings, crosswalks, and more.
          </p>
          <video src="/path/to/road-markings-video.mp4" controls></video>
          {/* Add more content as needed */}
        </>
      ),
    },
    // Add more lesson data here
  };

  return (
    <div className="lesson-content">
      {lessonData[lesson.id]?.content}
    </div>
  );
};

export default LessonContent;
