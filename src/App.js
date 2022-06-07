import React from 'react'
import { Brand, Cat, Nav } from './conponents'
import { Blog, Features, Footer, Header, Possibilites, WhatGPT3 } from './container'
import './App.css'
const App = () => {
  return (
    <div>
      <div className='gradient_background'>
        <Nav/>
        <Header/>
      </div>
      <Brand/>
      <WhatGPT3/>
      <Features/>
      <Possibilites/>
      <Cat/>
      <Blog/>
      <Footer/>
    </div>
  )
}

export default App