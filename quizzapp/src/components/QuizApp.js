import React, { useEffect, useState } from "react";
import Question from "./Question";
import "../css/QuizApp.css"
function QuizApp() {
  const [data, setData] = useState({
    response_code: 0,
    results: [
      {
        category: "Sports",
        type: "multiple",
        difficulty: "easy",
        question:
          "How many points did LeBron James score in his first NBA game?",
        correct_answer: "25",
        incorrect_answers: ["19", "69", "41"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "easy",
        question: "Which player holds the NHL record of 2,857 points?",
        correct_answer: "Wayne Gretzky",
        incorrect_answers: ["Mario Lemieux ", "Sidney Crosby", "Gordie Howe"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "easy",
        question: "Who did Steven Gerrard win the Champions League with?",
        correct_answer: "Liverpool",
        incorrect_answers: ["Real Madrid", "Chelsea", "Man City"],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "easy",
        question:
          "&quot;Stadium of Light&quot; is the home stadium for which soccer team?",
        correct_answer: "Sunderland FC",
        incorrect_answers: [
          "Barcelona FC",
          "Paris Saints-Germain",
          "Manchester United",
        ],
      },
      {
        category: "Sports",
        type: "multiple",
        difficulty: "easy",
        question: "Which country will host the 2022 FIFA World Cup?",
        correct_answer: "Qatar",
        incorrect_answers: ["USA", "Japan", "Switzerland"],
      },
    ],
  });

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showNotification, setShowNotification] = useState('');
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 10);
      setShowNotification(true);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < data.results.length) {
      setCurrentQuestion(nextQuestion);
    }
  };

  const handleScore = () => {
    if (score === data.results.length * 10){
      setShowNotification("Congratulations! You have answered all correct") 
    }
  }
  return (
    <>
      <h1>Quiz</h1>
      <h3>Topic: Sports</h3>
      <div className="question-count">
        <span>Question {currentQuestion + 1}</span>/{data.results.length}
      </div>
      <div className="result">
        <h5>
          Result: <span id="score" onChange={handleScore}>{score}</span>
        </h5>
        <h5>{showNotification}</h5>
      </div>

      {data.results.map((q, index) => {
        return (
          <Question
            questionNumber={index}
            q={q}
            questionContent={q.question}
            correctAnswer={q.correct_answer}
            incorrectAnswer={q.incorrect_answers}
            key={index}
            handleAnswerOptionClick={handleAnswerOptionClick}
          />
        );
      })}
    </>
  );
}

export default QuizApp;
