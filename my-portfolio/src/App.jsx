import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router";
import Portfolio from './portfolio'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Portfolio/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
