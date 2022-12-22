import React from 'react'
import './App.css';
import Logo from './assets/images/tedora.png'
import Home from './pages/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from './pages/NotFound';
import HeaderUser from './components/Header-Certificate/HeaderUser'
import { useState } from 'react';
import { useEffect } from 'react';
import { Helmet } from "react-helmet";


function App() {
  const [mode, setMode] = useState("dark");
  const [pagebg, setPagebg] = useState("#101115");
  const [textcl, setTextCl] = useState("#FFFFFF");
  useEffect(() => {
    document.title = "Tedora by Nebdaoui Anass"
  }, []);

  const changeMode = () =>{
    if(mode==="light"){
      setPagebg("#101115")
      setTextCl("#FFFFFF")
      document.body.style = 'color:#101115,color : #FFFFFF'
      setMode("dark")
    }else{
      setPagebg("#FFFFFF")
      setTextCl("#101115")
      document.body.style = 'background:white,color : #101115'
      setMode("light")
    }
    
  }
  
  return (
    <div className="App" style={{backgroundColor:pagebg,color:textcl,}}>
      <Helmet>
      <meta charset="UTF-8"/>
        <meta name="description" content="Tedora"/>
        <meta name="keywords" content="Nebdaoui, Anass, ReactJs, Portfolio, web3, github, NodeJs, nebdaoui.anass@gmail.com, JavaScript"/>
        <meta name="author" content="Nebdaoui Anass"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Helmet>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route path="/certificate" element={<HeaderUser/>}/>
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </div>
    
  );
}

export default App;
