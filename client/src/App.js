import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import "./App.css";
import Login from "./components/Login/Login";
import Navbar from "./components/navbar/Navbar";
import Ereop from "./components/e-repo/Erepo";
import Resgistration from "./components/resgistration/Resgistration";
// import Footer from "./components/footer/Footer";
import Mywall from "./components/mywall/Mywall";
import Contact from "./components/contact/Contact";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-repo" element={[<Navbar />, <Ereop />]} />
        <Route path="/Mywall" element={[<Navbar />, <Mywall />]} />
        <Route path="/register" element={<Resgistration />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={[<Navbar />, <Contact />] } />
      </Routes>
    </div>
  );
};

export default App;
