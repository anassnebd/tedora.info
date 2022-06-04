import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header/Header'
import Title from '../components/Title'
import Values from '../components/Values'
import { useState } from 'react';


function Home() {

  return (
    <div className='Home'>
        <Header/>
        <Title/>
        <Carousel/>
        <Values/>
    </div>
    
  )
}

export default Home