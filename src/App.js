import React from 'react'
import './App.css';
import Logo from './assets/images/tedora.png'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
