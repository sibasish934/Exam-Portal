import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";
import Navbar from "../../navbar/Navbar";
import { Context } from "../../..";
import { Navigate } from "react-router-dom";

const Instruction = ({ setStartTimer, name }) => {

  const { isAuthenticated } = useContext(Context);

  const navigate = useNavigate();

  const startQuiz = () => {
    navigate("/quiz");
    setStartTimer(true);
  };

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <Navbar />
      <div className="Main_Div">
        <div className="Instructions_Div">
          <h2>
            Hi <span>{name}</span>, Welcome!! Please read the instructions
            carefully
          </h2>
          <ul className="read">
            <p>Read the instructions: Before starting the quiz, read the instructions carefully. Make sure you understand the rules and the format of the quiz.</p>
            <p>
              This quiz consists of 10 questions. You will be given 20 seconds
              for each question
            </p>
            <p>
              Give the answers carefully as you can't go back once you select an
              answer
            </p>
            <p>Each correct answer carries 1 mark</p>
            <p>Submit your answers: After answering all the questions, submit your answers for grading. Your score will be displayed on the screen.</p>
            <p>To start the Quiz, click the “Start Quiz” button.</p>
          </ul>
          <button onClick={startQuiz}>Start Quiz</button>
        </div>
      </div>
    </>
  );
};

export default Instruction;
