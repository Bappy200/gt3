import React from 'react'
import './Feature.css'
function Feature({title, text}) {
  return (
    <div className='gpt__feature'>
        <div className='gpt__feature_title'>
            <span></span>
            <h3>{title}</h3>
        </div>
        <div className='gpt_feature_text'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Feature