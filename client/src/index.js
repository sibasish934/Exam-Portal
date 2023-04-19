import React, { createContext, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

export const Context = createContext({ isAuthenticated: false});

const Appwrapper = ()=>{

  const [isAuthenticated , setIsAuthenticated] = useState(false);
  const [loading , setLoading] = useState(false);
  const [userData, setUserData] = useState({}); 
  
  return(
    <Context.Provider value={{
      isAuthenticated,
      setIsAuthenticated,
      loading,
      setLoading,
      userData,
      setUserData
    }}>
      <Router>
      <App />
    </Router>
    </Context.Provider>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
     <Appwrapper />
  </React.StrictMode>
);
