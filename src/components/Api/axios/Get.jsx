import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Get = () => {
    const [data, setdata] = useState([]);
    const [title, settitle] = useState("");
    const [body, setbody] = useState("");
    useEffect(() => {
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then(res => {
                console.log(res.data)
                setdata(res.data)
            })
            .catch(error => console.log(error))
    }, []);
    const showElement = (id) => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const deleteElement = (id) => {
        axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const updateElement = (id) => {
        axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`,{
            title: title,
            body: body
        })
            .then(res => console.log(res.data))
            .catch(error => console.log(error))
    }
    const showInputs = () => {
        document.getElementById("inputs").style.display = "block"
    }
    return (
        <div>
            {data?.map((ele, i) => {
                return (
                    <div key={i}>
                        {ele.title}
                        <button onClick={() => showElement(ele.id)}>show</button>
                        <button onClick={() => deleteElement(ele.id)}>delete</button>
                        <button onClick={() => showInputs()}>update</button>
                        <div id='inputs' style={{ display: "none" }}>
                            <input type="text" defaultValue={ele.title} onChange={(event)=>settitle(event.target.value)} />
                            <input type="text" defaultValue={ele.body} onChange={(event)=>setbody(event.target.value)} />
                            <button onClick={() => updateElement(ele.id)}>update</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Get