import React from 'react'
import Carousel from '../components/Carousel'
import Header from '../components/Header/Header'
import Title from '../components/Title'

function Home() {
  return (
    <div className='Home'>
        <Header/>
        <Title/>
        <Carousel/>
    </div>
    
  )
}

export default Home