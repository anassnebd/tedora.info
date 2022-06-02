import React from 'react'
import TitleImg from '../assets/images/title_home.png'
import './app.css'

function Title() {
  return (
    <div className='Title'>
        <img src={TitleImg} width='700px' alt='Title'/>
        <div className='t_contact'>
            <button className='t_btn_contact'>Contact Us</button>
        </div>
    </div>
  )
}

export default Title