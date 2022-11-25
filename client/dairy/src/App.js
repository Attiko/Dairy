import React from 'react'
import Footer from './components/Footer'
import DairyCards from './components/DairyCards'
import Login from './components/Login'
import { Route, Routes } from "react-router-dom"
const App = () => {

  return <Routes>
    <Route path='/' element={<Login/>}/>
    <Route path='/home' element={<DairyCards/>}/>
    <Route />
  </Routes>
 
      // <Header/>
      // <Login/>
      // <Footer/>

   
  
}

export default App