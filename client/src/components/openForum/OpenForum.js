import React, { useContext, useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import axios from "axios";
import "./open.css";
import { toast } from "react-hot-toast";
import { Context } from "../..";

const OpenForum = () => {

  const {isAuthenticated} = useContext(Context);

  const navigate = useNavigate();

  const [question, setQuestion] = useState([]);

  useEffect(() => {
    const getAllQuestions = async () => {
      try {
        const { data } = await axios.get(
          "http://localhost:5000/api/v1/getAllQuestions",
          {
            withCredentials: true,
          }
        );
        setQuestion(data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    getAllQuestions();
  }, []);

  const handleClick = () => {
    navigate("/post");
  };

  const handleAnswer =(id)=>{
     navigate(`/answer/${id}`);
  }

  if(!isAuthenticated) return <Navigate to={"/"} />

  return (
    <>
      <div className="heading">
        <h2> Welcome To OpenForum</h2>
        <p>
          Space of conversion between students to discuss and propose ideas and
          solution to different questions.
        </p>
        <button onClick={handleClick}>Post A solution</button>
      </div>

      <div className="open-forum-content">
        {question.map((elem) => {
          return (
            <div className="open-forum">
              <h2>{elem.title}</h2>
              <button className="answer" onClick={()=>handleAnswer(elem._id)}>See Answer</button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default OpenForum;
