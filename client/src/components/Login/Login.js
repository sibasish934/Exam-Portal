import React, { useContext, useState } from "react";
import { Link, useNavigate, Navigate } from "react-router-dom";
import "../Login/login.css";
import image from "../../assets/exam.png";
import axios from "axios";
import { backend_url } from "../../App";
import toast from "react-hot-toast";
import { Context } from "../..";
const Login = () => {
  const {isAuthenticated,setIsAuthenticated, loading, setLoading } = useContext(Context);

  const navigate = useNavigate();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser();
  };

  const loginUser = async () => {
    setLoading(true)
    try {
      const { email, password } = user;
      const { data } = await axios.post(
        `${backend_url}/login`,
        {
          email,
          password,
        },
        {
          headers: {
            "Content-type": "application/json",
          },
          withCredentials: true,
        }
      );
      toast.success(data.message);
      setIsAuthenticated(true);
      setLoading(false)
      //navigate("/mywall");
    } catch (error) {
      toast.error(error.response.data.message)
      setIsAuthenticated(false);
      setLoading(false)
      navigate("/")
    }
  };


  if (isAuthenticated) return <Navigate to={"/mywall"} />; 


  return (
    <section className="login-section">
      <div className="login-page">
        <div className="form">
          <div className="login">
            <div className="login-header">
              <h3 className="setter">
                <img src={image} alt="" className="insideh3" />
                <span>Exam-Portal</span>
              </h3>
              <p>Please enter your credentials to login.</p>
            </div>
          </div>
          <form className="login-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="email"
              name="email"
              value={user.email}
              onChange={handleChange}
            />
            <input
              type="password"
              placeholder="password"
              name="password"
              value={user.password}
              onChange={handleChange}
            />
            <button disabled={loading}>login</button>
            <p className="message">
              Not registered? <Link to="/register">Create an account</Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
