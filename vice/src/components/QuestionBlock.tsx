import React from 'react';
import { Question } from '../../interfaces';


const QuestionBlock = ({ 
  question 

}: {
  question: Question
}) => {
  return (
    <button>
      className="question-block"
      {/* onClick={handleClick} */}

      <img src={question.image} alt={question.text} />
      <h3>{question.text}</h3>
      <p>
        <a href={question.image}>alt={question.alt} </a>
        <a></a>
      </p>
    </button>
  )
}

export default QuestionBlock;
