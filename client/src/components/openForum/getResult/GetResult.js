import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { backend_url } from "../../../App";
import "./getResult.css";
import img from "../../../assets/ab.png";

const GetResult = () => {
  const [answer, setAnswer] = useState([]);
  const [question, setQuestion] = useState("");
  const params = useParams();
  useEffect(() => {
    const getAnswers = async () => {
      try {
        const id = params.id;
        const { data } = await axios.get(`${backend_url}/getAnswer/${id}`, {
          withCredentials: true,
        });
        setAnswer(data.answers);
        setQuestion(data.answers[0].question.title);
      } catch (error) {
        console.log(error);
      }
    };
    getAnswers();
  }, [params.id]);

  console.log(answer);

  return (
    <section className="get-all-answers">
      <h2 className="answer-question">{question}</h2>
      {answer.map((elem, id) => {
        if (id % 2 !== 0) {
          return (
            <div className="solutions">
              <div className="solutions-img">
                <img src={img} alt="loading" className="left-side"/>
              </div>
              <div className="answers right-side">
                <div className="ans">
                  <h3>Intution :-</h3>
                  <p>{elem.intution}</p>
                </div>

                <div className="ans">
                  <h3>Approach :-</h3>
                  <p>{elem.approach}</p>
                </div>

                <div className="ans">
                  <h3>Solution :-</h3>
                  <p>{elem.solution}</p>
                </div>

                <p>
                  Submitted By :- <span>{elem.user.name}</span>
                </p>
              </div>
            </div>
          );
        } else {
          return (
            <div className="solutions">
              <div className="answers">
                <div className="ans">
                  <h3>Intution :-</h3>
                  <p>{elem.intution}</p>
                </div>

                <div className="ans">
                  <h3>Approach :-</h3>
                  <p>{elem.approach}</p>
                </div>

                <div className="ans">
                  <h3>Solution :-</h3>
                  <p>{elem.solution}</p>
                </div>

                <p>
                  Submitted By :- <span>{elem.user.name}</span>
                </p>
              </div>
              <div className="solutions-img">
                <img src={img} alt="loading" />
              </div>
            </div>
          );
        }
      })}
    </section>
  );
};

export default GetResult;
