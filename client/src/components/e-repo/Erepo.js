import React, { useContext } from "react";
import "./style.css";
import { Context } from "../..";
import { Navigate } from  "react-router-dom";
// import Footer from "../footer/Footer";
// import Footer from "../footer/Footer";
const Ereop = () => {
  const { isAuthenticated } = useContext(Context);
  const exam = [
    {
      heading: "CLoud Computing",
      description: "This Webiste will indepth knowledge about the In demand skill Cloud Computing. Its a orofessional course.",
      Address:"https://www.mygreatlearning.com/pg-program-cloud-computing-course"
    },

    {
      heading: "Aws Cloud Computing",
      description:
        "The best way to learn Aws Cloud Computing is from its deepest documentation provided on their website.",
      Address: "https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/concepts.html"
    },

    {
      heading: "Xat And Mat Preparation",
      description:
        "Students availing the exam will get to solve the previous years Xat and Mat exam to prepare for the upcoming Xat and Mat entrance exam.",
        Address:"https://www.xatonline.in"
    },

    {
      heading: "6th Semester Exam",
      description: "College Previous years papers to prepare for the end term.",
      Address:"https://www.knowledgegate.in/"
    },

    {
      heading: "Data Structures and Algorithms",
      description:
        "Student will get learn the advanced as well as the basic data structure which are necessary for their Placements.",
        Address:"https://www.geeksforgeeks.org/data-structures/"
    },

    {
      heading: "React Js",
      description:
        "This Website will provide enough resources with enhanced practice to learn in demand Technology React js for Free.",
      Address:"https://www.freecodecamp.org/news/tag/react/"
    },

    {
      heading: "6th Semester Exam",
      description: "College Previous years papers to prepare for the end term.",
      Address:"https://www.knowledgegate.in/"
    },

    {
      heading: "Gate Preparation",
      description:
        "Student will get the lastest gate question asked in recent years to pratice with time limit.",
      Address:"https://gate.iitb.ac.in"

    },

    {
      heading: "Xat And Mat Preparation",
      description:
        "Students availing the exam will get to solve the previous years Xat and Mat exam to prepare for the upcoming Xat and Mat entrance exam.",
      Address:"https://xatonline.in"
    },
  ];

  if (!isAuthenticated) return <Navigate to={"/"} />;

  return (
    <section>
      <h2> Welcome To Exam Respositry</h2>
      <p>
        Here You can get To know about the Best Resources over the Internet the Particular Courses.
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
                  <button><a href={elem.Address} className="links" target="_blank" rel="noreferrer" >Check Out</a></button>
                </div>
              </div>
               )
             })
          }
        </div>
      </div>
    </section>
  );
};

export default Ereop;
