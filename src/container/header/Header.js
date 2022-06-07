import React from 'react'
import people from '../../assets/people.png'
import AI from '../../assets/ai.png'
import './header.css'
function Header() {
  return (
    <section className='gpt__header section__padding'>
        <div className='gpt__header__content'>
              <h1 className='gradient__text'>Lets Build Something Amazing With GTP-3 OpenAI</h1>
              <p>Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.</p>
              <div className='gpt__header__input'>
                    <input placeholder='enter your email'/>
                    <button type='button'>get start</button>
              </div>
              <div className='gpt__header__people'>
                  <img src={people} alt="people"/>
                  <p>Lorem ipsum is a placeholder</p>
              </div>
        </div>
        <div className='gpt__header__image'>
          <img src={AI} alt="ai"/>
        </div>
    </section>
  )
}

export default Header