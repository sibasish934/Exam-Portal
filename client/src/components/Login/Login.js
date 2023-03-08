import React from "react";
import { Link } from "react-router-dom";
import "../Login/login.css";
const Login = () => {
  return (
    <div className="login-cont">
      <div className="box-form">
        <div className="left">
          <h5>Login to Your Account</h5>
          <div className="inputs">
            <input type="text" placeholder="User Name" required />
            <br />
            <input type="password" placeholder="Password" required />
          </div>
          <br />
          <br />
          <button>Sign In</button>
          <span>
            <p>login with social media</p>
            <Link href="https://www.facebook.com/" className="f">
              <i className="fa fa-facebook " aria-hidden="true"></i>
            </Link>
            <Link href="https://twitter.com/" className="t">
              <i className="fa fa-twitter " aria-hidden="true"></i>
            </Link>
            <Link href="https://www.google.com/" className="g">
              <i className="fa fa-google" aria-hidden="true"></i>
            </Link>
          </span>
        </div>
        <div class="right">
          <div class="overlay">
            <h1>New Here?</h1>
            <p>Sign up and discover a great amount of new opportunities!</p>
            <button><Link to="/register" className="link">Sign up</Link></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
