import React, { useContext } from "react";
import "./exam.css";
import { Context } from "../..";
import { Link, Navigate } from "react-router-dom";
import Footer from "../footer/Footer";
import banner from "../../assets/exam.jpg";

const Exam = () => {
  const { isAuthenticated } = useContext(Context);

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <>
      <section className="exam-section">
        <h2>Welcome ! Quiz Hub of Exam Portal</h2>
        <div className="banner">
          <p className="para">
            Here Students can participate in various quiz event and check their
            performance score.Our quizzes are designed to be challenging yet
            fun, with a variety of question types to keep you on your toes. You
            can choose to take timed quizzes, compete against friends, or play
            solo to improve your knowledge and skills.
          </p>
          <img src={banner} alt="Quiz" />
        </div>
        <div className="quiz-section">
          <table>
            <thead>
              <tr>
                <th>S.no</th>
                <th>Quiz Name</th>
                <th>Question Link</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-column="First Name">1</td>
                <td data-column="Last Name">React And Frontend Quiz</td>
                <td data-column="Twitter">
                  <Link to="/quizHome" className="a">
                    <button>Attempt</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td data-column="First Name">2</td>
                <td data-column="Last Name">Data Structures And Algorithms</td>
                <td data-column="Twitter">
                  <Link to="/quizHome" className="a">
                    <button>Attempt</button>
                  </Link>
                </td>
              </tr>
              <tr>
                <td data-column="First Name">3</td>
                <td data-column="Last Name">Node js and Backend Quiz</td>
                <td data-column="Twitter">
                  <Link to="/quizHome" className="a">
                    <button>Attempt</button>
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Exam;
