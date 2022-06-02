import React from 'react'
import './app.css'
import MobileVal from '../assets/images/values_mobile.png'
import WebVal from '../assets/images/values_web.png'
import DeskVal from '../assets/images/values_desktop.png'

function Values() {
  return (
    <div className='Values'  id="section1">
        <div className='value_title'><span class="hover-underline-animation">What We are Good At !</span></div>
        <div className='val_dot'>
          <a href="#value1"><span className='dot'></span></a>
          <a href="#value2"><span className='dot'></span></a>
          <a href="#value3"><span className='dot'></span></a>
        </div>
        <div className='value' id='value1'>
            <div className='v_left'>
                <h2>Mobile App's</h2>
                <p>Le Lorem Ipsum est simplement du faux 
                    texte employé dans la composition et la
                    mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de 
                    l'imprimerie depuis les années 1500,
                    quand un imprimeur anonyme assembla 
                    ensemble des morceaux.</p>
                <button className='val_plus'>More</button>
            </div>
            <div className='v_right'><img src={MobileVal} width='400px'/></div>
        </div>
        <div className='value v_web' id='value2'>
          <div className='v_left_web'>
            <img src={WebVal} width='500px'/>
          </div>
          <div className='v_right_web'>
                <h2>Web App's</h2>
                <p>Le Lorem Ipsum est simplement du faux 
                    texte employé dans la composition et la
                    mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de 
                    l'imprimerie depuis les années 1500,
                    quand un imprimeur anonyme assembla 
                    ensemble des morceaux.</p>
                <button className='val_plus_web'>More</button>
            </div>
        </div>

        <div className='value' id='value3'>
            <div className='v_left_desk'>
                <h2>Desktop App's</h2>
                <p>Le Lorem Ipsum est simplement du faux 
                    texte employé dans la composition et la
                    mise en page avant impression. Le Lorem
                    Ipsum est le faux texte standard de 
                    l'imprimerie depuis les années 1500,
                    quand un imprimeur anonyme assembla 
                    ensemble des morceaux.</p>
                <button className='val_plus_desk'>More</button>
            </div>
            <div className='v_right_desk'><img src={DeskVal} width="550px"/></div>
        </div>

        <div className='value v_desk'></div>
    </div>
  )
}

export default Values