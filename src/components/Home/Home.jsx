import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import Category from '../Category/Category.jsx'
import Product from '../Product/Product.jsx'

const Home = () => {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Category/>
        <Values/>
        <Product/>
    </div>
  )
}

export default Home