import React, { useContext } from "react";
import "./style.css";
import { Context } from "../..";
import { Navigate } from  "react-router-dom";
// import Footer from "../footer/Footer";
const Ereop = () => {
  const { isAuthenticated } = useContext(Context);
  const exam = [
    {
      heading: "6th Semester Exam",
      description: "College Previous years papers to prepare for the end term.",
    },

    {
      heading: "Gate Preparation",
      description:
        "Student will get the lastest gate question asked in recent years to pratice with time limit.",
    },

    {
      heading: "Xat And Mat Preparation",
      description:
        "Students availing the exam will get to solve the previous years Xat and Mat exam to prepare for the upcoming Xat and Mat entrance exam.",
    },

    {
      heading: "6th Semester Exam",
      description: "College Previous years papers to prepare for the end term.",
    },

    {
      heading: "Gate Preparation",
      description:
        "Student will get the lastest gate question asked in recent years to pratice with time limit.",
    },

    {
      heading: "Xat And Mat Preparation",
      description:
        "Students availing the exam will get to solve the previous years Xat and Mat exam to prepare for the upcoming Xat and Mat entrance exam.",
    },

    {
      heading: "6th Semester Exam",
      description: "College Previous years papers to prepare for the end term.",
    },

    {
      heading: "Gate Preparation",
      description:
        "Student will get the lastest gate question asked in recent years to pratice with time limit.",
    },

    {
      heading: "Xat And Mat Preparation",
      description:
        "Students availing the exam will get to solve the previous years Xat and Mat exam to prepare for the upcoming Xat and Mat entrance exam.",
    },
  ];

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <div>
      <h2> Welcome To Exam Respositry</h2>
      <p>
        Avail And Practice For the Exam your are Preparing !! Best Of Luck !!!
      </p>
      <div className="service-section">
        <div className="row">
          {

             exam.map((elem)=>{
               return (
                <div className="column">
                <div className="card">
                  <div className="icon-wrapper">
                    <i className="fa-sharp fa-solid fa-list-check"></i>
                  </div>
                  <h3>{elem.heading}</h3>
                  <p>
                    {elem.description}
                  </p>
                  <button>Appear Now</button>
                </div>
              </div>
               )
             })
          }
        </div>
      </div>
    </div>
  );
};

export default Ereop;
