import React from 'react'
import './app.css'
import MobileVal from '../assets/images/values_mobile.png'

function Values() {
  return (
    <div className='Values'>
        <div className='value_title'><p>What We are Good At</p></div>
        <div className='value v_mob'>
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

        <div className='value v_web'></div>
        <div className='value v_desk'></div>
    </div>
  )
}

export default Values