import React, { useContext, useState } from 'react'
import "./contact.css";
import { Context } from '../..';
import { Navigate } from 'react-router-dom';

const Contact = () => {

  const {isAuthenticated} = useContext(Context);

  const [details, setDetails] = useState({
    name: "",
    email: "",
    message: ""
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails({ ...details, [name]: value });
  }

  if(!isAuthenticated) return <Navigate to={"/"} />

  return (
    <div>
      <h2 className='contact-heading'>Contact <span>Me</span></h2>
      <form action='https://formspree.io/f/myyvnkjl' className='contact-form' method='POST'>
        <div className='le'>
          <div className='input-name'>
            <label htmlFor='name'>your name</label>
            <input
              type="text"
              name='name'
              autoComplete='off'
              placeholder='name'
              value={details.name}
              onChange={handleChange}
            />
          </div>
          <div className='input-email'>
            <label htmlFor='email'>your email</label>
            <input
              type="email"
              name='email'
              placeholder='email'
              autoComplete='off'
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className='rig'>
          <label htmlFor='message'>Message</label>
          <textarea
            type="textarea"
            name="message"
            hasError
            cols="30"
            rows="5"
            placeholder="Hi! Pls Feel Free To Contact me I will surely try to help you."
            onChange={handleChange}
            value={details.message}></textarea>
        </div>
        <input type="submit" value="send" />
      </form>
    </div>
  )
}

export default Contact