import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import '../CSS/Question.css';

const Question = ({ question, answer }) => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  return (
    <div className="question-container" style={{ marginBottom: '20px' }}>
      <div className="question-header">
        <div className="question-text">
          <h3 style={{ color: showAnswer ? '#6B3CC9' : 'black' }}>{question}</h3>
        </div>
        <div>
          <button onClick={toggleAnswer}>
            {showAnswer ? <FaMinus /> : <FaPlus />}
          </button>
        </div>
      </div>
      {showAnswer && <p className="answer-text">{answer}</p>}
    </div>
  );
};

export default Question;
