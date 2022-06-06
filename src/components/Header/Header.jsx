import React from 'react'
import './header.css'
import { useState } from 'react';
import Logo from '../../assets/images/tedora.png'
import HireMe from '../../assets/icons/user_pin.png'
import MenuImg from '../../assets/images/menu.png'
import { FaUserCheck } from 'react-icons/fa';
import { useEffect } from 'react';
import Modal from 'react-modal';
import CloseImg from '../../assets/icons/close_dark.png'
import InfoImg from '../../assets/icons/info.png'
import { BsInfoCircle } from 'react-icons/bs';


function Header({mode}) {
  let subtitle;
  const [show, setShow] = useState(false);
  const [pagebg, setPagebg] = useState("#101115");
  const [textcl, setTextCl] = useState("#FFFFFF");
  const [modeh, setModeH] = useState(mode);
  const [modalIsOpen, setIsOpen] = React.useState(false);

  const customStyles = {
    content: {
      width:'400px',
      background : '#F7F7F7',
      color : '#101115',
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      borderRadius: '10px',
      padding:'40px',

    },
    
  };
  

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#101115';
  }

  function closeModal() {
    setIsOpen(false);
  }
  
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
        <button className='hire_btn' onClick={openModal}><FaUserCheck width="100px" style={{color:'white'}}/>&nbsp; Hire me</button>
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
      <Modal 
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        className="Modal"
        contentLabel="Example Modal"
      >
        <div className='modal_hireme'>
        <button onClick={closeModal} style={{background:'transparent',border:'none',float:'right',marginTop:'-20px',cursor:'pointer'}}><img src={CloseImg}/></button>
        <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hire Me!</h2>
        <form className='modal_form' style={{display:'block'}}>
          <div style={{display:'flex',width:'100%'}}>
            <input type="text" className='form_nom' placeholder='First name...' />
            <input type="text" className='form_pnom' placeholder='Last...' />
          </div>
          <input type="email" placeholder='Email...' className='form_email'/>
          <select>
            <option value="">Web application</option>
            <option value="">Mobile application</option>
            <option value="">Desktop application</option>
            <option value="">Ui/Ux design</option>
            <option value="">Graphic design</option>
            <option value="">Other...</option>
          </select>
          <center>
            <button className='sub_hire' type='submit'>Request</button>
            <button className='sub_clear' onClick={closeModal}>Cancel</button>
          </center>
        </form>
        <div style={{display:'flex',fontSize:'14px',fontFamily:'Roboto'}}>
          <BsInfoCircle />
          &nbsp;&nbsp;&nbsp;&nbsp;
          We may contact you on your email.<br/>&nbsp;&nbsp;&nbsp;&nbsp; Wait for our response on the next few hours
        </div>
        </div>
      </Modal>
      
    </div>
  )
}

export default Header