import React from 'react'
import './header.css'
import { useState } from 'react';
import Logo from '../../assets/images/tedora.png'
import HireMe from '../../assets/icons/user_pin.png'
import MenuImg from '../../assets/images/menu.png'
import { FaUserCheck } from 'react-icons/fa';
import { useEffect } from 'react';



function Header({mode}) {
  const [show, setShow] = useState(false);
  const [pagebg, setPagebg] = useState("#101115");
  const [textcl, setTextCl] = useState("#FFFFFF");
  const [modeh, setModeH] = useState(mode);
  
  useEffect(() => {
    if(modeh==="light"){
      setPagebg("#101115")
      setTextCl("#FFFFFF")
      document.style = 'color : #FFFFFF'
      setModeH("dark")
    }else{
      setPagebg("#ACDDDE")
      setTextCl("#101115")
      document.style = 'color:#101115'
      setModeH("light")
    }
  }, []);

  const toogleMenu = () => {
    if(show){
      setShow(false)
    }else{
      setShow(true)
    }
  } 


  return (
    <div className='header_page'>
      <div className='logo'>
        <img src={Logo} href='/' className='logo_img' alt='Logo' width='270px'/>
        <img src={MenuImg} className='header_menu' href='/' alt='Logo' width='33px' onAnimationEnd={()=>toogleMenu} onClick={toogleMenu}/>  
      </div>
      <div className='hire_me'>
        <button className='hire_btn'><FaUserCheck width="100px" style={{color:'white'}}/>&nbsp; Hire me</button>
      </div>
      {
        show?
        <div className='testop'>
          <ul className='options'>
            <li><a className="opt_header">Design</a></li>
            <li><a className="opt_header" href="#services1">Services</a></li>
            <li><a className="opt_header" href="#section1">Portfolio</a></li>
            <li><a className="opt_header">About</a></li>  
          </ul>
        </div>:null
      }
      <div className='testop test_web'>
          <ul className='options'>
            <li><a className="opt_header">Design</a></li>
            <li><a className="opt_header" href="#services1">Services</a></li>
            <li><a className="opt_header" href="#section1">Portfolio</a></li>
            <li><a className="opt_header">About</a></li>  
          </ul>
        </div>
      
    </div>
  )
}

export default Header