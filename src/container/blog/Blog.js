import React from 'react'
import Article from '../../conponents/artical/Artical'
import { blog1, blog2, blog3, blog4, blog5 } from './import'
import './blog.css'
function Blog() {
  return (
    <section className='gpt_section section__padding' id="blog">
        <h2 className='gradient__text'>A lot is happening are blogging about it.</h2>
        <div className='gpt_blog'>
              <div className='gpt_blog_big_article'>
                    <Article img={blog1} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
              </div>
              <div className='gpt_blog_content'>
                    <Article img={blog2} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <Article img={blog3} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <Article img={blog4} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
                    <Article img={blog5} title="GPT-3 and Open  AI is the future. Let us exlore how it is?" date="Sep 26, 2021"/>
              </div>
        </div>
    </section>
  )
}

export default Blog