import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./quiz.css";
import Navbar from "../../navbar/Navbar";
import { Context } from "../../..";
import { Navigate } from "react-router-dom";

const QuizHome = ({ setName, name }) => {

  const { isAuthenticated } = useContext(Context);

  const [error, setError] = useState(false);
  const navigate = useNavigate();

  //onclick of start button ====> Go to instructions page
  const start = () => {
    if (name === "") {
      setError(true);
    } else {
      setError(false);
      setName("");
      navigate("/instructions");
    }
  };

  const handleNameChange = (e) => {
    const { value } = e.target;
    const re = /^[A-Za-z]+$/;
    if (re.test(value) || value === "") {
      setName(value);
      if (value.length > 0) {
        setError(false);
      } else {
        setError(true);
      }
    }
  };

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <Navbar />
      <div className="Main_Div">
        <div className="Home_Div">
          <h2>Quiz Starts Here !!!</h2>
          <p className="first_p">Enter your name to start the quiz And Best Of Luck</p>
          <input
            type="text"
            value={name}
            name="name"
            className="inputName"
            placeholder="your name"
            autoComplete="off"
            onChange={(e) => handleNameChange(e)}
          />
          {error && <p className="error">Please enter your name</p>}
          <button onClick={start}>Click here to start</button>
        </div>
      </div>
    </>
  );
};
export default QuizHome;
