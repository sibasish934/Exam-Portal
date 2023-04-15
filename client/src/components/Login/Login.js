import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
import image from "../../assets/exam.png";
const Login = () => {
  const [ user, setUser] = useState({
    email:"",
    password:""
  })

  const handleChange = (e)=>{
     const {name, value} = e.target;
     setUser({...user, [name]:value});
  }

  const handleSubmit = (e)=>{
      e.preventDefault();
      console.log(user);
  }
  
  return (
    <section className="login-section">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3 className="setter"><img src={image} alt="" className="insideh3"/><span>Exam-Portal</span></h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input type="email" placeholder="email" name="email" value={user.email} onChange={handleChange} />
            <input type="password" placeholder="password" name="password" value={user.password} onChange={handleChange} />
            <button>login</button>
            <p className="message">
              Not registered? <Link to="/register" >Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
