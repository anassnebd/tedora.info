import React from 'react'
import './header.css'
import Logo from '../../assets/images/tedora.png'
import HireMe from '../../assets/icons/user_pin.png'
import { FaUserCheck } from 'react-icons/fa';



function Header() {
  return (
    <div className='header_page'>
      <div className='logo'>
        <img src={Logo} href='/' alt='Logo' width='270px'/>
      </div>
      <div className='hire_me'>
        <button className='hire_btn'><FaUserCheck width="100px" style={{color:'white'}}/>&nbsp; Hire me</button>
      </div>
      <div className='testop'>
        <ul className='options'>
          <li><a className="opt_header">Design</a></li>
          <li><a className="opt_header">Services</a></li>
          <li><a className="opt_header" href="#section1">Portfolio</a></li>
          <li><a className="opt_header">About</a></li>  
        </ul>
      </div>
    </div>
  )
}

export default Header