import React from 'react'
import {  Routes, Route, Navigate} from 'react-router-dom';
import './App.css';
import Signup from './Pages/Signup'
import Home from './Pages/Home'
import Login from './Pages/Login'


function App() {
  return (
    <div className="App">
     
      <Routes>
        <Route path= '/' element={<Navigate to ="/login"/>}/>  
        <Route path= '/login' element={<Login/>}/>
        <Route path= '/signup' element={<Signup/>}/>
        <Route path= '/home' element={<Home/>}/>
      </Routes>
    
    </div>
  )
}

export default App
