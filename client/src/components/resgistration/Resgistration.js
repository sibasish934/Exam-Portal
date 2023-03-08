import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
const Resgistration = () => {
  return (
    <>
      <div className="box-form-regit">
        <div className="left">
          <h5>Create an Account</h5>
          <div className="inputs">
            <input type="text" placeholder="Name" required />
            <br />
            <input type="email" placeholder="Email" required />
            <br />
            <input type="password" placeholder="Password" required />
            <br />
            <input type="password" placeholder="confirm Password" required />
          </div>
          <br />
          <br />
          <button>Create Account</button>
          <span>
            <p>Sign Up with social media</p>
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
            <h1>Welcome Back!</h1>
            <p>Already an User </p>
            <Link to="/login">
              <button>Sign In</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resgistration;
