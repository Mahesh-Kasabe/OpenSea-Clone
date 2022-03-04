import React, { useState } from 'react'
import './App.css'
import Home from './Components/Home/Home'
import Navbar from './Components/Navbar'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Collections from './Components/Collections/Collections'

function App() {

  return (
    <div className="App">

      <Router>
        <Routes>

          <Route path='/' element={<> <Navbar /> <Home />  </>} />

          <Route path='/collections/0xd2f5965845277b4e8eb04e79d0fb62b7c13dca63' element={<> <Navbar /> <Collections /></>} />

        </Routes>
      </Router>

    </div>
  )
}

export default App
