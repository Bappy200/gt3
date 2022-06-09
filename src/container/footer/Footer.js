import React from 'react'
import './footer.css'
import logo from '../../assets/logo.svg'
function Footer() {
  return (
    <footer className='gpt_footer section__padding'>
        <div className='gpt_footer_heading'>
              <h3 className='gradient__text'>Do you want to step in to the future before others</h3>
              <a href='#moreinfo'>Request Early Access</a>
        </div>
        <div className='gpt_footer_content'>
             <div className='gpt_footer_logo_link'>
                  <img src={logo} alt="logo"/>
                  <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p> 
             </div>
             <div className='gpt_footer_links'>
                  <h5>Links</h5>
                  <a href='#link'>Overons</a>
                  <a href='#link'>Social Media</a>
                  <a href='#link'>Counters</a>
                  <a href='#link'>Contact</a>
             </div>
             <div className='gpt_footer_links'>
                  <h5>Links</h5>
                  <a href='#link'>Company</a>
                  <a href='#link'>Terms Conditions</a>
                  <a href='#link'>Privacy Policy</a>
                  <a href='#link'>Contact</a>
             </div>
             <div className='gpt_footer_links'>
                  <h5>Get in touch</h5>
                  <a href='#link'>Crechterwoord K12 182 DK Alknjkcb</a>
                  <a href='#link'>085-132567</a>
                  <a href='#link'>info@payme.net</a>
             </div>
        </div>
        <div className='gpt_footer_copyright'>
           <p>@2021 GPT-3. All rights reserved.</p>
        </div>
    </footer>
  )
}

export default Footer