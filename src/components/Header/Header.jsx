import React from 'react'
import './header.css'
import Logo from '../../assets/images/tedora.png'
import { Link } from 'react-router-dom';




function Header() {
  return (
    <div className='header_page'>
      <div className='logo'>
        <img src={Logo} href='/' alt='Logo' width='200px'/>
      </div>
      <div className='options'>
        <ul>
        </ul>     
      </div>
    </div>
  )
}

export default Header