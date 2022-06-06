import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header/Header'
import Title from '../components/Title'
import Values from '../components/Values'
import { useState } from 'react';
import { useEffect } from 'react'
import BgTest from '../assets/images/bg.png'
import AboutMe from '../components/AboutMe'


function Home() {

  const [mode, setMode] = useState("dark");
  const [pagebg, setPagebg] = useState("#101115");
  const [textcl, setTextCl] = useState("#FFFFFF");
  const [buttonCl, setButtonCl] = useState("#26324a");
  useEffect(() => {
    document.title = "Tedora by Nebdaoui Anass"
  }, []);

  const changeMode = () =>{
    if(mode==="light"){
      setPagebg("#101115")
      //setTextCl("#FFFFFF")
      setButtonCl("#26324a")
      document.body.style = 'background:#101115,color : #FFFFFF'
      setMode("dark")
    }else{
      setPagebg("#26324a")
      //setTextCl("#101115")
      setButtonCl("#101115")
      document.body.style = 'background: #26324a'
      setMode("light")
    }
    
  }

  return (
    <div className='Home' style={{backgroundColor:pagebg,color:textcl,}}>
        <Header mode={mode}/>
        <Title/>
        <Carousel/>
        <Values/>
        <AboutMe/>
        <button className='modes' style={{backgroundColor:buttonCl}} onClick={changeMode}></button>
    </div>
    
  )
}

export default Home