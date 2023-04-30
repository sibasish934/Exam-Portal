import React, { useContext, useState } from "react";
import { quizQuestions } from "../QuizData/quizData";
import { useNavigate } from "react-router-dom";
import Timer from "./Timer";
import "./quiz.css";
import { Context } from "../../..";
import {Navigate} from "react-router-dom";

const Quiz = ({ startTimer, setName }) => {

  const { isAuthenticated } = useContext(Context);

  const [qNumber, setQNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [displayScore, setDisplayScore] = useState(false);
  const [clickedAnswer, setclickedAnswer] = useState(0);
  const [seconds, setSeconds] = useState(20);

  const navigate = useNavigate();

  const selectedAnswer = (selected, id) => {
    setclickedAnswer(id);
    setTimeout(() => {
      const nextQ = qNumber + 1;
      setclickedAnswer(0);
      if (nextQ < quizQuestions.length) {
        setQNumber(nextQ);
      }
      if (nextQ === quizQuestions.length) {
        setDisplayScore(true);
      }
      if (selected === true) {
        setScore((score) => score + 1);
      }
      setSeconds(20);
    }, 600);
  };

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <section className="Main_Div">
      <div className="quizbanner">
        <h1>SILICON INSTITUTE OF TECHNOLOGY</h1>
        <h4>BRANCH: CSE</h4>
        <h3>SUBJECT: DATA STRUCTURES AND ALGORITHMS</h3>
      </div>
      <div className="Quiz_Div">
        {displayScore ? (
          <>
            <p>
              Your score : {score} / {quizQuestions.length}
            </p>
            <div className="buttons_div">
              <button className="reset"
                onClick={() => {
                  navigate(-1);
                  setName("");
                }}
              >
                Retry
              </button>
              <button className="exit"
                onClick={() => {
                  navigate("/");
                  setName("");
                }}
              >
                Exit
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="quiz_top_div">
              <h2>
                {qNumber + 1} of {quizQuestions.length}
              </h2>
              {startTimer && (
                <Timer
                  setDisplayScore={setDisplayScore}
                  setQNumber={setQNumber}
                  seconds={seconds}
                  setSeconds={setSeconds}
                  qNumber={qNumber}
                  quizQuestions={quizQuestions}
                />
              )}
            </div>

            <h1 className="quizQuestions">{quizQuestions[qNumber].question}</h1>
            <ul className="un">
              {quizQuestions[qNumber].answers.map((answer) => (
                <li
                  className={clickedAnswer === answer.id ? `answerCss` : null}
                  key={answer.id}
                  onClick={() => selectedAnswer(answer.isCorrect, answer.id)}
                >
                  {answer.ans}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </section>
  );
};
export default Quiz;
