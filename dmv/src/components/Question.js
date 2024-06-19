import React, { useState } from 'react';
import '../styles/Question.css';
import { useNavigate } from 'react-router-dom';

const Question = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showNextButton, setShowNextButton] = useState(false);
  const navigate = useNavigate();

  const questions = [
    {
      id: 1,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 2,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 3,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 4,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 5,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 6,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 7,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 8,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
    {
      id: 9,
      text: 'Which car goes first?',
      options: [
        { letter: 'A', text: 'A', isCorrect: true },
        { letter: 'B', text: 'B', isCorrect: false },
        { letter: 'C', text: 'Neither - both cars can pass in front of each other', isCorrect: false },
      ],
      image: 'https://media-lessons.zutobi.com/images/original/0f8e8560884e98432bd8f66d32cfb9ff.jpeg',
    },
  ];

  const totalQuestions = questions.length;
  const remainingQuestions = totalQuestions - currentQuestion - 1;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;

  const handleAnswerClick = (option) => {
    setSelectedAnswer(option);
    setShowNextButton(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestion === totalQuestions - 1) {
      navigate('/lesson-results');
    } else {
      setSelectedAnswer(null);
      setShowNextButton(false);
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
    }
  };

  const renderAnswerOption = (option) => {
    const isSelected = selectedAnswer === option;
    const isCorrect = option.isCorrect;
    const correctOption = questions[currentQuestion].options.find(opt => opt.isCorrect);

    let optionClass = 'answer-option';
    let letterClass = 'answer-letter';
    let optionBackgroundColor = '';
    let letterContent = option.letter;

    if (isSelected) {
      if (option.isCorrect) {
        optionClass += ' correct';
        letterClass += ' correct';
        optionBackgroundColor = 'green';
        letterContent = '✓';
      } else {
        optionClass += ' incorrect';
        letterClass += ' incorrect';
        optionBackgroundColor = 'red';
        letterContent = '✗';
      }
    }

    if (!isSelected && selectedAnswer && isCorrect) {
      optionClass += ' correct';
      letterClass += ' correct';
      optionBackgroundColor = 'green';
      letterContent = '✓';
    }

    return (
      <div
        key={option.letter}
        className={optionClass}
        onClick={() => handleAnswerClick(option)}
        style={{ backgroundColor: optionBackgroundColor }}
      >
        <div className={letterClass}>{letterContent}</div>
        <div className="answer-text">{option.text}</div> 
      </div>
    );
  };

  const QuestionHeader = ({ remainingQuestions, progressPercentage }) => {
    return (
      <div className="question-header">
        <div className="remaining-questions">{remainingQuestions} remaining</div>
        <div className="progress-container">
          <div className="progress-bar">
            <div className="progress-bar-fill" style={{ width: `${progressPercentage}%` }}></div>
          </div>
        </div>
      </div>
    );
  };

  const QuestionContent = ({ questionText, questionImage, answerOptions, renderAnswerOption }) => {
    return (
      <div className="question-content">
        <img className="question-image" src={questionImage} alt="Question" />
        <div className="question-text">{questionText}</div>
        <AnswerOptions answerOptions={answerOptions} renderAnswerOption={renderAnswerOption} />
      </div>
    );
  };

  const AnswerOptions = ({ answerOptions, renderAnswerOption }) => {
    return <div className="answer-options">{answerOptions.map(renderAnswerOption)}</div>;
  };

  const NextQuestionButton = ({ handleNextQuestion }) => {
    return (
      <div className="next-question-button-container">
        <button className="next-question-button" onClick={handleNextQuestion}>
          {currentQuestion === totalQuestions - 1 ? 'Finish Test' : 'Next Question'}
        </button>
      </div>
    );
  };

  return (
    <div className="question-container">
      <QuestionHeader remainingQuestions={remainingQuestions} progressPercentage={progressPercentage} />
      <QuestionContent
        questionText={questions[currentQuestion].text}
        questionImage={questions[currentQuestion].image}
        answerOptions={questions[currentQuestion].options}
        renderAnswerOption={renderAnswerOption}
      />
      {showNextButton && <NextQuestionButton handleNextQuestion={handleNextQuestion} />}
    </div>
  );
};

export default Question;