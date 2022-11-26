import React from 'react';
import Axios from "axios";
import {  useState } from "react";
// import { response } from 'express';

const DairyCards = () => {
   
    const [data, setData] = useState({
        title: "",
        content: ""
    });
    
function handle(e){
    const newdata = {...data}
    newdata[e.target.id] = e.target.value
    setData(newdata)
}
    // function onHandle(e) {
    //     e.preventDefault();
    //     Axios.post("/api",{
    //         title: data.title,
    //         content: data.content
    //     }).then(res =>{ console.log(res.data)}).catch(err => console.log(err))
    // }
    const onHandle = (e) =>{
        e.preventDefault();
        Axios.post("http://localhost:4000/api", {
            title: data.title,
            content: data.content
        }).then(res =>res.json())
    }
return (
<>
<h1>Welcome to your Dairy Session</h1>

<form onSubmit={e => onHandle(e)}>
    <input type="text" name ="title" id="title" value = {data.title} placeholder='how are you feeling' size="39" onChange={e => handle(e)} required ></input>
    <br />
    <br/>
    <textarea name="content" id="content" value={data.content} placeholder='what happened' rows="8" cols="41" onChange={e => handle(e)} required></textarea>
    <br />
    <br/>
    <button>Share your thoughts</button>
</form>

</>
);
}
// };
  

export default DairyCards