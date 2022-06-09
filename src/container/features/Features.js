import React from 'react'
import { Feature } from '../../conponents'
import "./features.css"
//FEATURES INFORMATION
const featuresInfo = [
  {
    title:"Improving end distrusts instantly ",
    text:"From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded."
  },
  {
    title:"Become the tended active",
    text:"Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to."
  },
  {
    title:"Message or am nothing",
    text:"Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address."
  },
  {
    title:"Really boy law county",
    text:"Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush."
  }
]
function Features() {
  return (
    <div className='gtp__features section__padding' id="features">
        <div className='gtp_features_title'>
              <h2 className='gradient__text'>The Future is Now and You Just Need To Realize It. Step into Future Today. Make it Happen.</h2>
              <a href='#start'>Request Early Access to Get Started</a>
        </div>
        <div className='gtp__features_content'>
              {
                featuresInfo.map((feature, index)=> <Feature text={feature.text} title={feature.title} key={feature.title+index}/>)
              }
        </div>
    </div>
  )
}

export default Features