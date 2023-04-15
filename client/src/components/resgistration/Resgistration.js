import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./style.css";
import image from "../../assets/exam.png";
const Resgistration = () => {
  
  const [user , setUser] = useState({
    name:"",
    photo:"",
    email:"",
    password:"",
    skill:"",
    description:"",
  })

  const handleChange = (e) =>{
    const { name, value} = e.target;
    setUser({...user, [name]:value});
  }

  const handleSubmit = (e)=>{
    e.preventDefault();
    console.log(user);
  }

  return (
    <section className="register">
      <div className="register-form">
        <div className="title">
          <img src={image} alt="" className="insideh3" />
          <span>Exam-Portal</span>
        </div>
        <div className="content">
          <form onSubmit={handleSubmit}>
            <div className="user-details">
              <div className="input-box">
                <span className="details">Full Name</span>
                <input type="text" placeholder="Enter your name" name="name" value={user.name} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Upload Photo</span>
                <input
                  type="text"
                  placeholder="ex- https://res.cloudinary.com/demo/image/upload/vv1312461204/sample.jpg"
                  name="photo"
                  value={user.photo}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="input-box">
                <span className="details">Email</span>
                <input type="email" placeholder="Enter your email" name="email" value={user.email} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">My Skills</span>
                <input type="text" placeholder="Enter your skills" name="skill" value={user.skill} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Password</span>
                <input type="password" placeholder="Enter your password" name="password" value={user.password} onChange={handleChange} required />
              </div>
              <div className="input-box">
                <span className="details">Description</span>
                <textarea
                  type="textarea"
                  name="description"
                  cols="30"
                  rows="5"
                  placeholder="Short Decription About Yourself."
                  value={user.decription}
                  onChange={handleChange}
                  className="description"
                  required
                ></textarea>
              </div>
            </div>
            <button className="register-button">Register</button>
            <p className="message">
              Already Registered with us?
              <Link to="/login">Log in</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Resgistration;
