import React from 'react'
import './App.css';
import Logo from './assets/images/tedora.png'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';


function App() {
  return (
    <div className="App">
      <Home/>
      <BrowserRouter>
        <Routes>
          <Route exact path="/home" element={<Home/>} />
          <Route path="/notfound" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
