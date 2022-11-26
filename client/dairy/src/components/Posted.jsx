import React from 'react'
import { useEffect, useState } from "react";



const Posted = () => {
 const [backendData, setBackendData] = useState([{}])
    const userData = async () => {
      const response = await fetch("/api");
      const data = await response.json()
      setBackendData(data)
    }
    useEffect(()=>{
        userData()
      },[])
    
  return (
    <>
      {(typeof backendData.users === "undefined") ? 
   (<p> loading...</p>)
   : (
    backendData.users.map((user,i) => (
      <p key={i}>{user}</p>
    ))
   )
  
  }
    </>
  )
}

export default Posted