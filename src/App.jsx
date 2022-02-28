import React, { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar'
import Login from './Components/Login'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Collections from './Components/Collections/Collections'

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<> <Navbar /> <Home />  </>} />

          <Route path='/collections' element={<> <Navbar /> <Collections /></>} />

          <Route path='/login' element={<Login />} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
