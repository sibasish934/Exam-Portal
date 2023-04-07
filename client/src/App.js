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
import OpenForum from "./components/openForum/OpenForum";
import Footer from "./components/footer/Footer";
import Post from "./components/openForum/post/Post";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/e-repo" element={[<Navbar />, <Ereop />]} />
        <Route path="/Mywall" element={[<Navbar />, <Mywall />]} />
        <Route path="/register" element={<Resgistration />} />
        <Route path="/open" element={[ <Navbar />, <OpenForum />, <Footer />]} />
        <Route path="/login" element={<Login />} />
        <Route path="/post" element={[<Navbar />, <Post />, <Footer />]} />
        <Route path="/contact" element={[<Navbar />, <Contact />] } />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
