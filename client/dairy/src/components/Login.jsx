import React from 'react'
import { useState } from 'react'
// import DairyCards from './DairyCards'
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [message, setMessage] = useState("")
    const [check, setCheck] = useState(false);
    const [checkName, setCheckName] = useState("")
    const navigate = useNavigate()

function handleClick(event){
    setMessage(check === "fatoki" ? navigate("/home"): <h3>Try again</h3>)
    event.preventDefault();
    
    
    
}
  return (
    <form onSubmit={handleClick}>
        <div>
            {message}
        </div>
        
        <input type="text" placeholder="Username" value={checkName} onChange={e => setCheckName(e.target.value)}></input>
        <input type="password" placeholder="Password" onChange={e => setCheck(e.target.value)}></input>
      
    <button type='submit'> Enter</button>
    
    </form>
    
  )
}

export default Login

