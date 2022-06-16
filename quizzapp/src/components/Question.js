import React from "react";

function Question(props) {
  const { q, questionNumber, handleAnswerOptionClick} = props;
  const { question, correct_answer, incorrect_answers } = q;
  return (
    <div className="question">
      <h2>
        {questionNumber + 1}. {question}
      </h2>
      <div className="choice">
        <button onClick={() => handleAnswerOptionClick(correct_answer)}>
          {correct_answer}
        </button>
        {incorrect_answers.map((answer, index) => {
          return <button>{answer}</button>;
        })}
      </div>
    </div>
  );
}

export default Question;
