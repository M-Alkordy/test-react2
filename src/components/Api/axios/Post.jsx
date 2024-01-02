import axios from 'axios';
import React, { useState } from 'react'

const Post = () => {
    const [userId, setuserId] = useState(0);
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    const sendData =()=>{
        axios.post("https://jsonplaceholder.typicode.com/posts" , {
            title:title,
            userId:userId,
            body:body
        })
        .then(res => console.log(res.data))
        .catch(error => console.log(error))
    }
  return (
    <div>
        <input type="number" placeholder='userId' onChange={(event)=>{setuserId(event.target.value)}}  />
        <input type="text" placeholder='title' onChange={(event)=>{settitle(event.target.value)}} />
        <input type="text" placeholder='body' onChange={(event)=>{setbody(event.target.value)}} />
        <button onClick={sendData}>send</button>
    </div>
  )
}

export default Post