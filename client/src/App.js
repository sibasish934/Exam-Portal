import React, { useContext, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Ereop from "./components/e-repo/Erepo";
import Resgistration from "./components/resgistration/Resgistration";
// import Footer from "./components/footer/Footer";
import Mywall from "./components/mywall/Mywall";
import Contact from "./components/contact/Contact";
import OpenForum from "./components/openForum/OpenForum";
import Post from "./components/openForum/post/Post";
import {Toaster} from "react-hot-toast";
import GetResult from "./components/openForum/getResult/GetResult";
import { Context } from ".";
import toast from "react-hot-toast";
import axios from "axios";

const App = () => {

   const {setUserData, setIsAuthenticated,} = useContext(Context);

   const navigate = useNavigate();

   useEffect(() => {
    const getUserDetails = async () => {
      try {
        const { data } = await axios.get(`${backend_url}/me`, {
          withCredentials: true,
        });
        // console.log(data.user);
        setUserData(data.user);
        setIsAuthenticated(true)
      } catch (error) {
        toast.error(error.response.data.message);
        setIsAuthenticated(false)
        navigate("/login");
      }
    };
    getUserDetails();
  }, [navigate, setUserData, setIsAuthenticated]);

   

  
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-repo" element={[<Navbar />, <Ereop />]} />
        <Route path="/Mywall" element={[<Navbar />, <Mywall />]} />
        <Route path="/register" element={<Resgistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={[<Navbar />, <Contact />] } />
        <Route path="/openforum" element={[<Navbar />, <OpenForum />] } />
        <Route path="/post" element={[<Navbar />, <Post />] } />
        <Route path="/answer/:id" element={[<Navbar/>, <GetResult />]} />
      </Routes>
      <Toaster />
    </div>
  );
};

export default App;

export const backend_url = "http://localhost:5000/api/v1";
