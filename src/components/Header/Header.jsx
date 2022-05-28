import React from 'react'
import './header.css'
import Logo from '../../assets/images/tedora.png'


function Header() {
  return (
    <div className='header_page'>
      <div className='logo'>
        <img src={Logo} href='/' alt='Logo' width='200px'/>
      </div>
      <div >
        <ul className='options'>
          <li><a className="opt_header">Design</a></li>
          <li><a className="opt_header">Services</a></li>
          <li><a className="opt_header">Portfolio</a></li>
          <li><a className="opt_header">About</a></li>
          <div>
            <button>Hire me</button>
          </div>
        </ul>
        
        <a href="opt_header">Home</a> 
        <a href="opt_header">Home</a> 
      </div>
    </div>
  )
}

export default Header