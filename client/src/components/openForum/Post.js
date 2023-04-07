import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./post.css";
const Post = () => {
    const [details , setDetails] = useState({
        title: "",
        intution:"",
        approach:"",
        solution:""

    });
    const handleChange = (e)=>{
        const { name, value} = e.target;
        setDetails({...details, [name]:value});
    }
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/open');
    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <h3># Title Of the Question</h3>
                <input
                    className="input-element"
                    type="text"
                    name="title"
                    placeholder="Title"
                    onChange={handleChange}
                    value={details.title}
                />
                <hr />
                <h3 className="app"># Intitution After seeing the Question</h3>
                <textarea
                    className="input-element"
                    rows="4" 
                    cols="50"
                    name="intution"
                    placeholder="Intitution"
                    onChange={handleChange}
                    value={details.intution}
                ></textarea>
                <h3 className="app"># Approach towards the Question</h3>
                <textarea
                    className="input-element"
                    rows="4" 
                    cols="50"
                    name="approach"
                    placeholder="First Thoughts "
                    onChange={handleChange}
                    value={details.approach}
                ></textarea>
                <h3># Solution of the Question!!</h3>
                <textarea
                    className="input-element"
                    rows="4" 
                    cols="50"
                    name="solution"
                    placeholder="Enter the Question."
                    onChange={handleChange}
                    value={details.solution}
                ></textarea>
                <button className="submit-button">Submit</button>
            </form>
        </>
    )
}

export default Post;