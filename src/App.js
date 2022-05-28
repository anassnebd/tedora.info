import React from 'react'
import './App.css';
import Logo from './assets/images/tedora.png'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
