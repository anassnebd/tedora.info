import React from 'react'
import Error404 from '../assets/images/404.png'
import './app.css'

function NotFound() {
  return (
    <div className='NotFound'>
        <img src={Error404} className="errornf" alt="Not Found..." />
    </div>
  )
}

export default NotFound