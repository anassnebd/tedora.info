import React from 'react'
import './app.css'
import MeImg from '../assets/images/suit_me2.png'
import Ig from '../assets/icons/instagram.png'
import Li from '../assets/icons/LinkedIn.png'
import Tw from '../assets/icons/Twitter.png'

function AboutMe() {
  return (
    <div className='AboutMe'>
        <div className='about_img'>
            <img src={MeImg} className="myimg" alt="" width="250px" style={{borderRadius: "1000px",backgroundColor:'#FFF'}} />
        </div>
        <div className='about_inf'>
            <h3>NEBDAOUI Anass</h3><br/>
            <p>Computer engineering 4th year student</p>
            <p>Email : <a href="mailto: nebdaoui.anass@gmail.com">Nebdaoui.anass@gmail.com</a></p>
            <p>Phone : <a href="tel:+212708071759">+212(0) 7-08-07-17-59</a></p>
            <div className='about_links'>
                <a href=""><img src={Ig}/></a>
                <a href=""><img src={Li}/></a>
                <a href=""><img src={Tw}/></a>
            </div>
        </div>
        
    </div>
  )
}

export default AboutMe