import React, { useContext } from "react";
import "./Mywall.css";
// import user from "../../assets/user.png";
import { backend_url } from "../../App";
import axios from "axios";
import toast from "react-hot-toast";
import { Navigate } from "react-router-dom";
import { Context } from "../..";
const Mywall = () => {

  const { isAuthenticated,setIsAuthenticated, loading, setLoading, userData} = useContext(Context);

  const logoutHandler = async()=>{
    setLoading(true)
    try {
      const { data} = await axios.get(`${backend_url}/logout`,{
        withCredentials:true
      })
      toast.success(data.message);
      setIsAuthenticated(false);
      setLoading(false)
    } catch (error) {
      toast.error(error.response.data.message);
      setIsAuthenticated(true);
      setLoading(false);
    }
  }

  if (!isAuthenticated) return <Navigate to={"/"} />;


  return (
    <>
      <div className="mywall-conatiner">
        <div className="cards">
          <div className="profile-card">
            {/*Profile top view card*/}
            <div className="left-side">
              <img src={userData.photo} alt="" />
              <h2>{userData.name}</h2>
            </div>
            <div className="right-side">
              <p>{userData.description}</p>
              <p>
                My Skills:- <span>{userData.skills}</span>
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
            <button disabled={loading} onClick={logoutHandler}>Logout</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mywall;
