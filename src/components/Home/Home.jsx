import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Values from '../Values/Values'
import Category from '../Category/Category.jsx'
import Product from '../Product/Product.jsx'
import Discount from '../Discount/Discount.jsx'
import Process from '../Process/Process.jsx'
import Testimonials from '../Testimonials/Testimonials.jsx'
import Footer from '../Footer/Footer.jsx'

const Home = () => {
  return (
    <div>
        <Hero/>
        <Category/>
        <Values/>
        <Product/>
        <Discount/>
        <Process/>
        <Testimonials/>
       
    </div>
  )
}

export default Home