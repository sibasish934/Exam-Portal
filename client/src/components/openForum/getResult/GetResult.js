import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { backend_url } from '../../../App';

const GetResult = () => {

   const [answer, setAnswer] = useState([]);
    const params = useParams();
    useEffect(() => {
      const getAnswers = async() =>{
        try {
          const id = params.id;
          const {data} = await axios.get(`${backend_url}/getAnswer/${id}`, {
            withCredentials:true,
          })
          setAnswer(data.answers);
        } catch (error) {
          console.log(error);
        }
      }
      getAnswers();
    }, [params.id])

    console.log(answer);

    
  return (
    <div>
      this is get Result page.
    </div>
  )
}

export default GetResult;