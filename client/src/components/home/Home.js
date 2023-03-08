import React from "react";
import vector from "../../assets/Online.gif";
import about from "../../assets/home-page.png";
import "../home/home.css";
import Navbar from "../navbar/Navbar";
import { Link } from "react-router-dom";
import Footer from "../footer/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="container grid-2">
        <div className="home">
          <h2>
            Exam <span>Portal</span>
          </h2>
          <p className="left">Welcome to our online exam portal!</p>
          <p className="right">
            Our mission is to provide a user-friendly platform that allows
            students and professionals to take exams online with ease
          </p>
          <div className="home-nav">
            <button className="button btn-resume">
              <Link to="/login">Get Started</Link>
            </button>
          </div>
        </div>
        <div className="image">
          <img src={vector} alt="loading.." />
        </div>
      </div>
      {/* About section start* */}
      <section className="section">
        <h2>
          About<span>Us</span>
        </h2>
        <div className="grid-2">
          <div className="image1">
            <img src={about} alt="about-iamge" />
          </div>
          <div className="home1">
            <p>
              Our portal offers a wide range of exams, including certification
              exams, competitive exams, and entrance exams for various courses.
              We have partnered with leading organizations and educational
              institutions to ensure that our exams are of the highest quality
              and relevance.Our team is dedicated to providing an excellent user
              experience. We understand that taking an exam can be stressful, so
              we have designed our portal to be intuitive and easy to navigate.
              Our exams are timed, and we provide immediate feedback on your
              performance, so you know how well you did as soon as you complete
              the exam.
            </p>
          </div>
        </div>
      </section>
      <section className="section service-section">
        <h2>
          Our <span>Services</span>
        </h2>
          <div className="row">
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-sharp fa-solid fa-list-check"></i>
                </div>
                <h3>E-Respositry</h3>
                <p>
                  Here the students can access the questions and solved previous
                  papers to pratice for different exams with the timer to check
                  their accuracy and consistency.
                </p>
              </div>
            </div>

            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-circle-info"></i>
                </div>
                <h3>Open Forum</h3>
                <p>
                  Here Students can post their doubts and the questions are aceesible to everyone and anyone tries to answer the questions can answer.
                </p>
              </div>
            </div>
            
            <div className="column">
              <div className="card">
                <div className="icon-wrapper">
                  <i className="fa-solid fa-wallet"></i>
                </div>
                <h3>MyWall</h3>
                <p>
                  Here the students can access their profile and get to know about the exam they have registered for.
                </p>
              </div>
            </div>
          </div>
      </section>

      <section className="section contact-section">
        <h2>Contact <span>Us</span></h2>
        <p>For Any Kind of Feedback or any offer pls contact us!!!</p>
        <button className="btn"><Link to="/contact">Contact us</Link></button>
      </section>

      <Footer />
    </>
  );
};

export default Home;
