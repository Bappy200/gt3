import React from 'react'
import './artical.css'
function Article({img, title, date}) {
  return (
    <div className='gpt_article'>
        <div className='gpt_article_img'>
            <img src={img} alt="articleImage"/>
        </div>
        <div className='gpt_article_content'>
            <div className='gpt_article_content_title'>
                  <p>{date}</p>
                  <h4>{title}</h4>
            </div>
            <a href='#more' className='gpt_article_content_read_text'>Read Full Article</a>
        </div>
    </div>
  )
}

export default Article