import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./navbar.css";
import logo from "../../assets/exam.png";
import { Context } from "../..";

function Navbar() {
  const { isAuthenticated } = useContext(Context);

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <NavLink exact to="/" className="nav-logo">
            <img src={logo} alt="Loading" />
          </NavLink>

          {isAuthenticated ? (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/e-repo"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  E-repository
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/e-exam"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                 E-Exam
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/Mywall"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  MyWall
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/openforum"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  OpenForum
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/contact"
                  // activeClassName="active"
                  // className="nav-links"
                  onClick={handleClick}
                >
                  <button className="contact-btn">Contact</button>
                </NavLink>
              </li>
            </ul>
          ) : (
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  exact
                  to="/login"
                  activeClassName="active"
                  className="nav-links"
                  onClick={handleClick}
                >
                  <button className="login-btn">Login</button>
                </NavLink>
              </li>
            </ul>
          )}
          <div className="nav-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
