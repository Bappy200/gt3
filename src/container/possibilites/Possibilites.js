import React from 'react'
import possibilityImage from "../../assets/possibility.png"
import  './possibilites.css'
function Possibilites() {
  return (
    <div className='gpt__possibilites section__padding'>
        <div className='gpt__possibilites_image'>
              <img src={possibilityImage} alt="possibilityImage"/>
        </div>
        <div className='gpt__possibilites_content'>
            <p>Request Early Access to Get Started</p>
            <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
            <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
            <p>Request Early Access to Get Started</p>
        </div>
    </div>
  )
}

export default Possibilites