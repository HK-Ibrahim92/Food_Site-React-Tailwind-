import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import Category from '../Category/Category.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category/>
        <Values/>
    </div>
  )
}

export default Home