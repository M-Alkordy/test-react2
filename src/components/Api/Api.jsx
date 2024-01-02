import React, { useEffect, useState } from 'react'

const Api = () => {
    const [Data, setData] = useState([]);
    const [userName, setuserName] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [formData, setformData] = useState({
        name:"",
        email:"",
        password:"",
    });
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => {console.log(json)
                setData(json)})
    }, []);
    function sendData() {
        let obj={name : userName , email: email , password:password }

    }
    return (
        <div>
{/*             {Data?.map((ele,index)=>{
                return(
                    <h1 key={index}>{ele?.title}</h1>
                )
            })}
            <h2>hello</h2> */}
            <input type='text' placeholder='userName' onChange={(event)=>setuserName(event.target.value)} />
            <input type='text' placeholder='email' onChange={(event)=>setemail(event.target.value)} />
            <input type='password' placeholder='password' onChange={(event)=>setpassword(event.target.value)} />
            <button onClick={sendData}>send</button>
        </div>
    )
}

export default Api