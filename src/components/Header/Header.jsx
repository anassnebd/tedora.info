import React from 'react'
import './header.css'
import Logo from '../../assets/images/tedora.png'
import HireMe from '../../assets/icons/user_pin.png'


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
          <li className="opt_header">
            <div>
              <button className='hire_me'><img src={HireMe}/>Hire me</button>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header