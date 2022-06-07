import { faNavicon, faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react'
import logo from '../../assets/logo.svg'
import './nav.css'
function Nav() {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt__navbar'>
        <div className='gpt__navbar__links'>
            <div className='gpt__navbar_links_img'>
              <img src={logo} alt="logo"/>
            </div>
            <div className='gpt__navbar_container'>
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#wgpt">What is gpt?</a></li>
                    <li><a href="#possibility">Open AI</a></li>
                    <li><a href="#features">Case Studies</a></li>
                    <li><a href="#blog">Library</a></li>
                </ul>
            </div>
        </div>
        <div className='gpt__sign'>
          <a href='#signup'>sign in</a>
          <button type='button'>sign up</button>
        </div>
        <div className='gpt__navbar__menu'>
        {toggleMenu ? <FontAwesomeIcon icon={faXmark} onClick={()=> setToggleMenu(false)}/> :  <FontAwesomeIcon icon={faNavicon} onClick={()=> setToggleMenu(true)}/> }
          {
            toggleMenu && (
              <div className='gpt__navbar__menu__container scale-up-center'>
                <div className='gpt__navbar__menu__container__links'>
                      <ul>
                          <li><a href="#home">Home</a></li>
                          <li><a href="#wgpt">What is gpt?</a></li>
                          <li><a href="#possibility">Open AI</a></li>
                          <li><a href="#features">Case Studies</a></li>
                          <li><a href="#blog">Library</a></li>
                      </ul>
                  </div>
                  <div className="gpt__navbar-menu_container-links-sign">
                      <a href='#signup'>Signup</a>
                      <button type="button">Sign in</button>
                  </div>
              </div>
            )
          }
        </div>
    </div>
  )
}

export default Nav