import React from 'react'
import {atlassian, dropbox, google, shopify, slack} from "./import.js"
import "./brand.css"
function Brand() {
  return (
    <div className='gpt__brand section__padding'>
        <div className='gpt_brand_item'>
            <a href='#google'>
                <img src={google} alt="google"/>
            </a>
        </div>
        <div className='gpt_brand_item'>
            <a href='#dropbox'>
                <img src={dropbox} alt="dropbox"/>
            </a>
        </div>
        <div className='gpt_brand_item'>
              <a href='#atlassian'>
                <img src={atlassian} alt="atlassian"/>
            </a>
        </div>
        <div className='gpt_brand_item'>
            <a href='#shopify'>
                <img src={shopify} alt="shopify"/>
            </a>
        </div>
        <div className='gpt_brand_item'>
            <a href='#slack'>
                <img src={slack} alt="slack"/>
            </a>
        </div>
    </div>
  )
}

export default Brand