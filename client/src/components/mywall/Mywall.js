import React from "react";
import "./Mywall.css";
import user from "../../assets/user.png";
const Mywall = () => {
  return (
    <>
      <div className="mywall-conatiner">
        <div className="cards">
          <div className="profile-card">
            {/*Profile top view card*/}
            <div className="left-side">
              <img src={user} alt="" />
              <h2>Arun Hota</h2>
            </div>
            <div className="right-side">
              <p>
                I am a student pursuing Computer Science and Engineering at
                Silicon Institute of Technology. I am always eager to explore
                the world of computer Science and software development . Main
                areas of interest include Web-development, Machine Learning, and
                Cloud Computing.
              </p>
              <p>
                My Skills:- <span>Html, Css, Js , React</span>
              </p>
            </div>
          </div>
          <div className="regitsered-card">
            {/* Registered Exam cards */}
            <div className="service-section">
              <div className="row">
                <div className="column">
                  <div className="card">
                    <div className="icon-wrapper">
                      <i className="fa-sharp fa-solid fa-list-check"></i>
                    </div>
                    <h3>Registered Exam heading</h3>
                    <p>
                      Students availing the exam will get to solve the previous
                      years Xat and Mat exam to prepare for the upcoming Xat and
                      Mat entrance exam
                    </p>
                    <p className="bg">Registered</p>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <div className="icon-wrapper">
                      <i className="fa-sharp fa-solid fa-list-check"></i>
                    </div>
                    <h3>Registered Exam heading</h3>
                    <p>
                      Students availing the exam will get to solve the previous
                      years Xat and Mat exam to prepare for the upcoming Xat and
                      Mat entrance exam
                    </p>
                    <p className="bg">Registered</p>
                  </div>
                </div>

                <div className="column">
                  <div className="card">
                    <div className="icon-wrapper">
                      <i className="fa-sharp fa-solid fa-list-check"></i>
                    </div>
                    <h3>Registered Exam heading</h3>
                    <p>
                      Students availing the exam will get to solve the previous
                      years Xat and Mat exam to prepare for the upcoming Xat and
                      Mat entrance exam
                    </p>
                    <p className="bg">Registered</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="navigation">
            {/*navgiation such as logout option*/}
            <button>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mywall;
